import { Controller, Get, Post, Put, Delete, Body, Param, Query, Injectable, NotFoundException } from '@nestjs/common';
import { randomUUID } from 'crypto';

export interface Exam {
  id: string;
  name: string;
  term: string;
  academicYear: string;
  startDate: string;
  endDate: string;
  status: 'Upcoming' | 'Ongoing' | 'Completed' | 'Published';
  schedules: {
    subject: string;
    date: string;
    time: string;
    className: string;
    maxMarks: number;
  }[];
}

@Injectable()
export class ExamsService {
  private readonly exams: Map<string, Exam> = new Map();

  constructor() {
    this.seed();
  }

  private seed() {
    const initial: Exam[] = [
      {
        id: 'exm-1',
        name: 'Mid-Term Examinations 2025',
        term: 'Term 1',
        academicYear: '2025-2026',
        startDate: '2025-10-10',
        endDate: '2025-10-20',
        status: 'Completed',
        schedules: [
          { subject: 'Mathematics', date: '2025-10-10', time: '09:00 - 12:00', className: 'Grade 10', maxMarks: 100 },
          { subject: 'Physics', date: '2025-10-12', time: '09:00 - 12:00', className: 'Grade 10', maxMarks: 100 },
          { subject: 'Chemistry', date: '2025-10-14', time: '09:00 - 12:00', className: 'Grade 10', maxMarks: 100 },
          { subject: 'English', date: '2025-10-16', time: '09:00 - 12:00', className: 'Grade 10', maxMarks: 100 },
        ],
      },
      {
        id: 'exm-2',
        name: 'Final Term Examinations 2026',
        term: 'Term 2',
        academicYear: '2025-2026',
        startDate: '2026-03-15',
        endDate: '2026-03-28',
        status: 'Upcoming',
        schedules: [
          { subject: 'Mathematics', date: '2026-03-15', time: '09:00 - 12:00', className: 'Grade 10', maxMarks: 100 },
          { subject: 'Physics', date: '2026-03-17', time: '09:00 - 12:00', className: 'Grade 10', maxMarks: 100 },
        ],
      },
    ];

    for (const item of initial) {
      this.exams.set(item.id, item);
    }
  }

  async findAll(): Promise<Exam[]> {
    return Array.from(this.exams.values());
  }

  async findOne(id: string): Promise<Exam> {
    const item = this.exams.get(id);
    if (!item) throw new NotFoundException(`Exam with id ${id} not found`);
    return item;
  }

  async create(data: Partial<Exam>): Promise<Exam> {
    const id = data.id || `exm-${randomUUID().slice(0, 8)}`;
    const exam: Exam = {
      id,
      name: data.name || 'Term Examination',
      term: data.term || 'Term 1',
      academicYear: data.academicYear || '2025-2026',
      startDate: data.startDate || '2025-10-01',
      endDate: data.endDate || '2025-10-15',
      status: data.status || 'Upcoming',
      schedules: data.schedules || [],
    };
    this.exams.set(id, exam);
    return exam;
  }

  async update(id: string, data: Partial<Exam>): Promise<Exam> {
    const exam = await this.findOne(id);
    const updated = { ...exam, ...data };
    this.exams.set(id, updated);
    return updated;
  }

  async remove(id: string): Promise<{ success: boolean }> {
    await this.findOne(id);
    this.exams.delete(id);
    return { success: true };
  }
}

@Controller('exams')
export class ExamsController {
  constructor(private readonly examsService: ExamsService) {}

  @Get()
  findAll() {
    return this.examsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.examsService.findOne(id);
  }

  @Post()
  create(@Body() body: Partial<Exam>) {
    return this.examsService.create(body);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() body: Partial<Exam>) {
    return this.examsService.update(id, body);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.examsService.remove(id);
  }
}

import { Module } from '@nestjs/common';

@Module({
  controllers: [ExamsController],
  providers: [ExamsService],
  exports: [ExamsService],
})
export class ExamsModule {}
