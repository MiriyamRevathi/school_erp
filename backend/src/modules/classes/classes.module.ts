import { Controller, Get, Post, Put, Delete, Body, Param, Query, Injectable, NotFoundException, UseGuards, Req } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { RolesGuard } from '../auth/roles.guard';
import { Roles } from '../auth/roles.decorator';

export interface SchoolClass {
  id: string;
  name: string;
  grade: string;
  section: string;
  classTeacherName: string;
  classTeacherId: string;
  roomNumber: string;
  capacity: number;
  totalStudents: number;
  subjects: string[];
}

@Injectable()
export class ClassesService {
  private readonly classes: Map<string, SchoolClass> = new Map();

  constructor() {
    this.seed();
  }

  private seed() {
    const initial: SchoolClass[] = [
      {
        id: 'cls-1',
        name: 'Grade 10 - Section A',
        grade: 'Grade 10',
        section: 'A',
        classTeacherName: 'Sarah Jenkins',
        classTeacherId: 'tch-1',
        roomNumber: 'Room 201',
        capacity: 35,
        totalStudents: 32,
        subjects: ['Mathematics', 'Physics', 'Chemistry', 'English', 'Computer Science'],
      },
      {
        id: 'cls-2',
        name: 'Grade 10 - Section B',
        grade: 'Grade 10',
        section: 'B',
        classTeacherName: 'David Miller',
        classTeacherId: 'tch-2',
        roomNumber: 'Room 202',
        capacity: 35,
        totalStudents: 30,
        subjects: ['Mathematics', 'Physics', 'Chemistry', 'English', 'Biology'],
      },
      {
        id: 'cls-3',
        name: 'Grade 9 - Section A',
        grade: 'Grade 9',
        section: 'A',
        classTeacherName: 'Elena Rostova',
        classTeacherId: 'tch-3',
        roomNumber: 'Room 101',
        capacity: 35,
        totalStudents: 28,
        subjects: ['Mathematics', 'General Science', 'English', 'Social Studies', 'ICT'],
      },
      {
        id: 'cls-4',
        name: 'Grade 11 - Science',
        grade: 'Grade 11',
        section: 'Sci-A',
        classTeacherName: 'Marcus Thorne',
        classTeacherId: 'tch-4',
        roomNumber: 'Lab Block 301',
        capacity: 30,
        totalStudents: 25,
        subjects: ['Advanced Physics', 'Advanced Math', 'Organic Chemistry', 'Computer Science'],
      },
    ];

    for (const item of initial) {
      this.classes.set(item.id, item);
    }
  }

  async findAll(query?: { grade?: string }): Promise<SchoolClass[]> {
    let list = Array.from(this.classes.values());
    if (query?.grade && query.grade !== 'All') {
      list = list.filter((c) => c.grade.toLowerCase() === query.grade?.toLowerCase());
    }
    return list;
  }

  async findOne(id: string): Promise<SchoolClass> {
    const item = this.classes.get(id);
    if (!item) throw new NotFoundException(`Class with id ${id} not found`);
    return item;
  }

  async create(data: Partial<SchoolClass>): Promise<SchoolClass> {
    const id = data.id || `cls-${randomUUID().slice(0, 8)}`;
    const cls: SchoolClass = {
      id,
      name: data.name || `${data.grade || 'Grade 10'} - Section ${data.section || 'A'}`,
      grade: data.grade || 'Grade 10',
      section: data.section || 'A',
      classTeacherName: data.classTeacherName || 'Sarah Jenkins',
      classTeacherId: data.classTeacherId || 'tch-1',
      roomNumber: data.roomNumber || 'Room 101',
      capacity: data.capacity || 35,
      totalStudents: data.totalStudents || 0,
      subjects: data.subjects || ['Mathematics', 'Science', 'English'],
    };
    this.classes.set(id, cls);
    return cls;
  }

  async update(id: string, data: Partial<SchoolClass>): Promise<SchoolClass> {
    const cls = await this.findOne(id);
    const updated = { ...cls, ...data };
    this.classes.set(id, updated);
    return updated;
  }

  async remove(id: string): Promise<{ success: boolean }> {
    await this.findOne(id);
    this.classes.delete(id);
    return { success: true };
  }
}

@Controller('classes')
@UseGuards(RolesGuard)
export class ClassesController {
  constructor(private readonly classesService: ClassesService) {}

  @Get()
  @Roles('ADMIN', 'TEACHER', 'STUDENT', 'PARENT')
  findAll(@Query() query: { grade?: string }, @Req() req: any) {
    const user = req?.user;
    if (user?.role === 'TEACHER' && user.linkedId === 'tch-1') {
      return this.classesService.findAll(query).then(list => list.filter(c => c.classTeacherId === 'tch-1'));
    }
    if (user?.role === 'STUDENT') {
      return this.classesService.findAll(query).then(list => list.filter(c => c.name.includes('Grade 10')));
    }
    if (user?.role === 'PARENT') {
      return this.classesService.findAll(query).then(list => list.filter(c => c.name.includes('Grade 10')));
    }
    return this.classesService.findAll(query);
  }

  @Get(':id')
  @Roles('ADMIN', 'TEACHER', 'STUDENT', 'PARENT')
  findOne(@Param('id') id: string) {
    return this.classesService.findOne(id);
  }

  @Post()
  @Roles('ADMIN')
  create(@Body() body: Partial<SchoolClass>) {
    return this.classesService.create(body);
  }

  @Put(':id')
  @Roles('ADMIN')
  update(@Param('id') id: string, @Body() body: Partial<SchoolClass>) {
    return this.classesService.update(id, body);
  }

  @Delete(':id')
  @Roles('ADMIN')
  remove(@Param('id') id: string) {
    return this.classesService.remove(id);
  }
}

import { Module } from '@nestjs/common';

@Module({
  controllers: [ClassesController],
  providers: [ClassesService],
  exports: [ClassesService],
})
export class ClassesModule {}
