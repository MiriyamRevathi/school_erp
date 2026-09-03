import { Controller, Get, Post, Put, Delete, Body, Param, Query, Injectable, NotFoundException, UseGuards } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { RolesGuard } from '../auth/roles.guard';
import { Roles } from '../auth/roles.decorator';

export interface Teacher {
  id: string;
  employeeId: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  department: string;
  designation: string;
  qualification: string;
  subjects: string[];
  joiningDate: string;
  status: 'Active' | 'On Leave' | 'Resigned';
}

@Injectable()
export class TeachersService {
  private readonly teachers: Map<string, Teacher> = new Map();

  constructor() {
    this.seed();
  }

  private seed() {
    const initial: Teacher[] = [
      {
        id: 'tch-1',
        employeeId: 'EMP-T-001',
        firstName: 'Sarah',
        lastName: 'Jenkins',
        email: 'teacher@schoolerp.local',
        phone: '+1 555-0201',
        department: 'Science',
        designation: 'Senior Physics Teacher',
        qualification: 'M.Sc Physics, B.Ed',
        subjects: ['Physics', 'General Science'],
        joiningDate: '2019-06-01',
        status: 'Active',
      },
      {
        id: 'tch-2',
        employeeId: 'EMP-T-002',
        firstName: 'David',
        lastName: 'Miller',
        email: 'david.miller@schoolerp.local',
        phone: '+1 555-0202',
        department: 'Mathematics',
        designation: 'Head of Mathematics',
        qualification: 'M.Sc Applied Mathematics',
        subjects: ['Mathematics', 'Advanced Calculus'],
        joiningDate: '2017-08-15',
        status: 'Active',
      },
      {
        id: 'tch-3',
        employeeId: 'EMP-T-003',
        firstName: 'Elena',
        lastName: 'Rostova',
        email: 'elena.rostova@schoolerp.local',
        phone: '+1 555-0203',
        department: 'Languages',
        designation: 'English Lecturer',
        qualification: 'M.A English Literature',
        subjects: ['English Language', 'Literature'],
        joiningDate: '2021-01-10',
        status: 'Active',
      },
      {
        id: 'tch-4',
        employeeId: 'EMP-T-004',
        firstName: 'Marcus',
        lastName: 'Thorne',
        email: 'marcus.thorne@schoolerp.local',
        phone: '+1 555-0204',
        department: 'Computer Science',
        designation: 'ICT Coordinator',
        qualification: 'B.Tech CS, MCA',
        subjects: ['Computer Science', 'Robotics'],
        joiningDate: '2020-09-01',
        status: 'Active',
      },
    ];

    for (const item of initial) {
      this.teachers.set(item.id, item);
    }
  }

  async findAll(query?: { department?: string; search?: string }): Promise<Teacher[]> {
    let list = Array.from(this.teachers.values());
    if (query?.department && query.department !== 'All') {
      list = list.filter((t) => t.department.toLowerCase() === query.department?.toLowerCase());
    }
    if (query?.search) {
      const q = query.search.toLowerCase();
      list = list.filter(
        (t) =>
          t.firstName.toLowerCase().includes(q) ||
          t.lastName.toLowerCase().includes(q) ||
          t.email.toLowerCase().includes(q),
      );
    }
    return list;
  }

  async findOne(id: string): Promise<Teacher> {
    const item = this.teachers.get(id);
    if (!item) throw new NotFoundException(`Teacher with id ${id} not found`);
    return item;
  }

  async create(data: Partial<Teacher>): Promise<Teacher> {
    const id = data.id || `tch-${randomUUID().slice(0, 8)}`;
    const teacher: Teacher = {
      id,
      employeeId: data.employeeId || `EMP-T-${Date.now().toString().slice(-4)}`,
      firstName: data.firstName || 'Teacher',
      lastName: data.lastName || 'Staff',
      email: data.email || `teacher.${Date.now()}@schoolerp.local`,
      phone: data.phone || '+1 555-0000',
      department: data.department || 'Academics',
      designation: data.designation || 'Teacher',
      qualification: data.qualification || 'B.Ed',
      subjects: data.subjects || ['General Studies'],
      joiningDate: data.joiningDate || new Date().toISOString().split('T')[0],
      status: data.status || 'Active',
    };
    this.teachers.set(id, teacher);
    return teacher;
  }

  async update(id: string, data: Partial<Teacher>): Promise<Teacher> {
    const teacher = await this.findOne(id);
    const updated = { ...teacher, ...data };
    this.teachers.set(id, updated);
    return updated;
  }

  async remove(id: string): Promise<{ success: boolean }> {
    await this.findOne(id);
    this.teachers.delete(id);
    return { success: true };
  }
}

@Controller('teachers')
@UseGuards(RolesGuard)
@Roles('ADMIN', 'TEACHER')
export class TeachersController {
  constructor(private readonly teachersService: TeachersService) {}

  @Get()
  findAll(@Query() query: { department?: string; search?: string }) {
    return this.teachersService.findAll(query);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.teachersService.findOne(id);
  }

  @Post()
  @Roles('ADMIN')
  create(@Body() body: Partial<Teacher>) {
    return this.teachersService.create(body);
  }

  @Put(':id')
  @Roles('ADMIN')
  update(@Param('id') id: string, @Body() body: Partial<Teacher>) {
    return this.teachersService.update(id, body);
  }

  @Delete(':id')
  @Roles('ADMIN')
  remove(@Param('id') id: string) {
    return this.teachersService.remove(id);
  }
}

import { Module } from '@nestjs/common';

@Module({
  controllers: [TeachersController],
  providers: [TeachersService],
  exports: [TeachersService],
})
export class TeachersModule {}
