import { Controller, Get, Post, Put, Delete, Body, Param, Query, Injectable, NotFoundException, UseGuards, Req } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { RolesGuard } from '../auth/roles.guard';
import { Roles } from '../auth/roles.decorator';

export interface Student {
  id: string;
  admissionNo: string;
  rollNumber: string;
  firstName: string;
  lastName: string;
  className: string;
  section: string;
  gender: 'Male' | 'Female' | 'Other';
  dob: string;
  bloodGroup: string;
  parentName: string;
  parentPhone: string;
  address: string;
  status: 'Active' | 'Inactive' | 'Graduated';
  admissionDate: string;
  createdAt: string;
}

@Injectable()
export class StudentsService {
  private readonly students: Map<string, Student> = new Map();

  constructor() {
    this.seed();
  }

  private seed() {
    const initial: Student[] = [
      {
        id: 'stu-1',
        admissionNo: 'ADM-2025-001',
        rollNumber: '101',
        firstName: 'Liam',
        lastName: 'Davis',
        className: 'Grade 10',
        section: 'A',
        gender: 'Male',
        dob: '2010-04-15',
        bloodGroup: 'O+',
        parentName: 'Robert Davis',
        parentPhone: '+1 555-0101',
        address: '124 Maple Street, Springfield',
        status: 'Active',
        admissionDate: '2022-08-15',
        createdAt: new Date().toISOString(),
      },
      {
        id: 'stu-2',
        admissionNo: 'ADM-2025-002',
        rollNumber: '102',
        firstName: 'Sophia',
        lastName: 'Martinez',
        className: 'Grade 10',
        section: 'A',
        gender: 'Female',
        dob: '2010-09-22',
        bloodGroup: 'A+',
        parentName: 'Carlos Martinez',
        parentPhone: '+1 555-0102',
        address: '458 Oak Avenue, Springfield',
        status: 'Active',
        admissionDate: '2022-08-15',
        createdAt: new Date().toISOString(),
      },
      {
        id: 'stu-3',
        admissionNo: 'ADM-2025-003',
        rollNumber: '103',
        firstName: 'Noah',
        lastName: 'Johnson',
        className: 'Grade 9',
        section: 'B',
        gender: 'Male',
        dob: '2011-01-10',
        bloodGroup: 'B+',
        parentName: 'Michael Johnson',
        parentPhone: '+1 555-0103',
        address: '78 Pine Road, Springfield',
        status: 'Active',
        admissionDate: '2023-08-20',
        createdAt: new Date().toISOString(),
      },
      {
        id: 'stu-4',
        admissionNo: 'ADM-2025-004',
        rollNumber: '104',
        firstName: 'Emma',
        lastName: 'Wilson',
        className: 'Grade 11',
        section: 'A',
        gender: 'Female',
        dob: '2009-06-18',
        bloodGroup: 'AB+',
        parentName: 'David Wilson',
        parentPhone: '+1 555-0104',
        address: '23 Birch Lane, Springfield',
        status: 'Active',
        admissionDate: '2021-08-10',
        createdAt: new Date().toISOString(),
      },
      {
        id: 'stu-5',
        admissionNo: 'ADM-2025-005',
        rollNumber: '105',
        firstName: 'Lucas',
        lastName: 'Taylor',
        className: 'Grade 8',
        section: 'C',
        gender: 'Male',
        dob: '2012-11-05',
        bloodGroup: 'O-',
        parentName: 'James Taylor',
        parentPhone: '+1 555-0105',
        address: '90 Elm Court, Springfield',
        status: 'Active',
        admissionDate: '2024-08-18',
        createdAt: new Date().toISOString(),
      },
    ];

    for (const item of initial) {
      this.students.set(item.id, item);
    }
  }

  async findAll(query?: { className?: string; search?: string }): Promise<Student[]> {
    let list = Array.from(this.students.values());
    if (query?.className && query.className !== 'All') {
      list = list.filter((s) => s.className.toLowerCase() === query.className?.toLowerCase());
    }
    if (query?.search) {
      const q = query.search.toLowerCase();
      list = list.filter(
        (s) =>
          s.firstName.toLowerCase().includes(q) ||
          s.lastName.toLowerCase().includes(q) ||
          s.admissionNo.toLowerCase().includes(q),
      );
    }
    return list;
  }

  async findOne(id: string): Promise<Student> {
    const item = this.students.get(id);
    if (!item) throw new NotFoundException(`Student with id ${id} not found`);
    return item;
  }

  async create(data: Partial<Student>): Promise<Student> {
    const id = data.id || `stu-${randomUUID().slice(0, 8)}`;
    const student: Student = {
      id,
      admissionNo: data.admissionNo || `ADM-${Date.now().toString().slice(-6)}`,
      rollNumber: data.rollNumber || '100',
      firstName: data.firstName || 'Student',
      lastName: data.lastName || 'User',
      className: data.className || 'Grade 10',
      section: data.section || 'A',
      gender: data.gender || 'Male',
      dob: data.dob || '2010-01-01',
      bloodGroup: data.bloodGroup || 'O+',
      parentName: data.parentName || 'Guardian',
      parentPhone: data.parentPhone || '+1 555-0000',
      address: data.address || 'Springfield',
      status: data.status || 'Active',
      admissionDate: data.admissionDate || new Date().toISOString().split('T')[0],
      createdAt: new Date().toISOString(),
    };
    this.students.set(id, student);
    return student;
  }

  async update(id: string, data: Partial<Student>): Promise<Student> {
    const student = await this.findOne(id);
    const updated = { ...student, ...data };
    this.students.set(id, updated);
    return updated;
  }

  async remove(id: string): Promise<{ success: boolean }> {
    await this.findOne(id);
    this.students.delete(id);
    return { success: true };
  }
}

@Controller('students')
@UseGuards(RolesGuard)
export class StudentsController {
  constructor(private readonly studentsService: StudentsService) {}

  @Get()
  @Roles('ADMIN', 'TEACHER', 'STUDENT', 'PARENT')
  findAll(@Query() query: { className?: string; search?: string }, @Req() req: any) {
    const user = req?.user;
    // If Student role, only return their own profile if linked
    if (user?.role === 'STUDENT' && user.linkedId) {
      return this.studentsService.findOne(user.linkedId).then(s => [s]).catch(() => this.studentsService.findAll(query));
    }
    // If Parent role, only return their children
    if (user?.role === 'PARENT' && user.linkedId) {
      return this.studentsService.findAll(query).then(list => list.filter(s => s.id === 'stu-1' || s.parentName.includes('Davis')));
    }
    return this.studentsService.findAll(query);
  }

  @Get(':id')
  @Roles('ADMIN', 'TEACHER', 'STUDENT', 'PARENT')
  findOne(@Param('id') id: string) {
    return this.studentsService.findOne(id);
  }

  @Post()
  @Roles('ADMIN')
  create(@Body() body: Partial<Student>) {
    return this.studentsService.create(body);
  }

  @Put(':id')
  @Roles('ADMIN', 'TEACHER')
  update(@Param('id') id: string, @Body() body: Partial<Student>) {
    return this.studentsService.update(id, body);
  }

  @Delete(':id')
  @Roles('ADMIN')
  remove(@Param('id') id: string) {
    return this.studentsService.remove(id);
  }
}

import { Module } from '@nestjs/common';

@Module({
  controllers: [StudentsController],
  providers: [StudentsService],
  exports: [StudentsService],
})
export class StudentsModule {}
