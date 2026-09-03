import { Controller, Get, Post, Put, Delete, Body, Param, Query, Injectable, NotFoundException, UseGuards } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { RolesGuard } from '../auth/roles.guard';
import { Roles } from '../auth/roles.decorator';

export interface UserAccount {
  id: string;
  name: string;
  email: string;
  role: 'ADMIN' | 'TEACHER' | 'STUDENT' | 'PARENT' | 'Staff';
  status: 'Active' | 'Inactive' | 'Suspended';
  createdAt: string;
  lastLogin: string;
}

@Injectable()
export class UsersService {
  private readonly users: Map<string, UserAccount> = new Map();

  constructor() {
    this.seed();
  }

  private seed() {
    const initial: UserAccount[] = [
      { id: 'usr-admin-1', name: 'Dr. Arthur Mitchell', email: 'admin@schoolerp.local', role: 'ADMIN', status: 'Active', createdAt: '2024-01-01', lastLogin: new Date().toISOString() },
      { id: 'usr-teacher-1', name: 'Sarah Jenkins', email: 'teacher@schoolerp.local', role: 'TEACHER', status: 'Active', createdAt: '2024-01-10', lastLogin: new Date().toISOString() },
      { id: 'usr-student-1', name: 'Liam Davis', email: 'student@schoolerp.local', role: 'STUDENT', status: 'Active', createdAt: '2024-08-15', lastLogin: new Date().toISOString() },
      { id: 'usr-parent-1', name: 'Robert Davis', email: 'parent@schoolerp.local', role: 'PARENT', status: 'Active', createdAt: '2024-08-15', lastLogin: new Date().toISOString() },
    ];

    for (const item of initial) {
      this.users.set(item.id, item);
    }
  }

  async findAll(query?: { role?: string; search?: string }): Promise<UserAccount[]> {
    let list = Array.from(this.users.values());
    if (query?.role && query.role !== 'All') {
      list = list.filter((u) => u.role.toLowerCase() === query.role?.toLowerCase());
    }
    if (query?.search) {
      const q = query.search.toLowerCase();
      list = list.filter((u) => u.name.toLowerCase().includes(q) || u.email.toLowerCase().includes(q));
    }
    return list;
  }

  async findOne(id: string): Promise<UserAccount> {
    const item = this.users.get(id);
    if (!item) throw new NotFoundException(`User with id ${id} not found`);
    return item;
  }

  async create(data: Partial<UserAccount>): Promise<UserAccount> {
    const id = data.id || `usr-${randomUUID().slice(0, 8)}`;
    const user: UserAccount = {
      id,
      name: data.name || 'User',
      email: data.email || `user.${Date.now()}@schoolerp.local`,
      role: data.role || 'STUDENT',
      status: data.status || 'Active',
      createdAt: new Date().toISOString().split('T')[0],
      lastLogin: new Date().toISOString(),
    };
    this.users.set(id, user);
    return user;
  }
}

@Controller('users')
@UseGuards(RolesGuard)
@Roles('ADMIN')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  findAll(@Query() query: { role?: string; search?: string }) {
    return this.usersService.findAll(query);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(id);
  }

  @Post()
  create(@Body() body: Partial<UserAccount>) {
    return this.usersService.create(body);
  }
}

import { Module } from '@nestjs/common';

@Module({
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule {}
