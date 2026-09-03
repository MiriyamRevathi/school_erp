import { Controller, Get, Post, Put, Delete, Body, Param, Query, Injectable, NotFoundException, UseGuards, Req } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { RolesGuard } from '../auth/roles.guard';
import { Roles } from '../auth/roles.decorator';

export interface Parent {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  occupation: string;
  children: { studentId: string; studentName: string; className: string }[];
  address: string;
  emergencyContact: string;
}

@Injectable()
export class ParentsService {
  private readonly parents: Map<string, Parent> = new Map();

  constructor() {
    this.seed();
  }

  private seed() {
    const initial: Parent[] = [
      {
        id: 'par-1',
        firstName: 'Robert',
        lastName: 'Davis',
        email: 'parent@schoolerp.local',
        phone: '+1 555-0101',
        occupation: 'Software Engineer',
        children: [{ studentId: 'stu-1', studentName: 'Liam Davis', className: 'Grade 10 - A' }],
        address: '124 Maple Street, Springfield',
        emergencyContact: '+1 555-9101',
      },
      {
        id: 'par-2',
        firstName: 'Carlos',
        lastName: 'Martinez',
        email: 'carlos.martinez@example.com',
        phone: '+1 555-0102',
        occupation: 'Architect',
        children: [{ studentId: 'stu-2', studentName: 'Sophia Martinez', className: 'Grade 10 - A' }],
        address: '458 Oak Avenue, Springfield',
        emergencyContact: '+1 555-9102',
      },
      {
        id: 'par-3',
        firstName: 'David',
        lastName: 'Wilson',
        email: 'david.wilson@example.com',
        phone: '+1 555-0104',
        occupation: 'Financial Analyst',
        children: [{ studentId: 'stu-4', studentName: 'Emma Wilson', className: 'Grade 11 - A' }],
        address: '23 Birch Lane, Springfield',
        emergencyContact: '+1 555-9104',
      },
    ];

    for (const item of initial) {
      this.parents.set(item.id, item);
    }
  }

  async findAll(query?: { search?: string }): Promise<Parent[]> {
    let list = Array.from(this.parents.values());
    if (query?.search) {
      const q = query.search.toLowerCase();
      list = list.filter(
        (p) =>
          p.firstName.toLowerCase().includes(q) ||
          p.lastName.toLowerCase().includes(q) ||
          p.email.toLowerCase().includes(q),
      );
    }
    return list;
  }

  async findOne(id: string): Promise<Parent> {
    const item = this.parents.get(id);
    if (!item) throw new NotFoundException(`Parent with id ${id} not found`);
    return item;
  }

  async create(data: Partial<Parent>): Promise<Parent> {
    const id = data.id || `par-${randomUUID().slice(0, 8)}`;
    const parent: Parent = {
      id,
      firstName: data.firstName || 'Parent',
      lastName: data.lastName || 'Guardian',
      email: data.email || `parent.${Date.now()}@example.com`,
      phone: data.phone || '+1 555-0000',
      occupation: data.occupation || 'Professional',
      children: data.children || [],
      address: data.address || 'Springfield',
      emergencyContact: data.emergencyContact || '+1 555-9999',
    };
    this.parents.set(id, parent);
    return parent;
  }

  async update(id: string, data: Partial<Parent>): Promise<Parent> {
    const parent = await this.findOne(id);
    const updated = { ...parent, ...data };
    this.parents.set(id, updated);
    return updated;
  }

  async remove(id: string): Promise<{ success: boolean }> {
    await this.findOne(id);
    this.parents.delete(id);
    return { success: true };
  }
}

@Controller('parents')
@UseGuards(RolesGuard)
export class ParentsController {
  constructor(private readonly parentsService: ParentsService) {}

  @Get()
  @Roles('ADMIN', 'TEACHER', 'PARENT')
  findAll(@Query() query: { search?: string }, @Req() req: any) {
    const user = req?.user;
    if (user?.role === 'PARENT' && user.linkedId) {
      return this.parentsService.findOne(user.linkedId).then(p => [p]).catch(() => this.parentsService.findAll(query));
    }
    return this.parentsService.findAll(query);
  }

  @Get(':id')
  @Roles('ADMIN', 'TEACHER', 'PARENT')
  findOne(@Param('id') id: string) {
    return this.parentsService.findOne(id);
  }

  @Post()
  @Roles('ADMIN')
  create(@Body() body: Partial<Parent>) {
    return this.parentsService.create(body);
  }

  @Put(':id')
  @Roles('ADMIN')
  update(@Param('id') id: string, @Body() body: Partial<Parent>) {
    return this.parentsService.update(id, body);
  }

  @Delete(':id')
  @Roles('ADMIN')
  remove(@Param('id') id: string) {
    return this.parentsService.remove(id);
  }
}

import { Module } from '@nestjs/common';

@Module({
  controllers: [ParentsController],
  providers: [ParentsService],
  exports: [ParentsService],
})
export class ParentsModule {}
