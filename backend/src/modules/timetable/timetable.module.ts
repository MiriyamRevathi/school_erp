import { Controller, Get, Post, Put, Delete, Body, Param, Query, Injectable, NotFoundException } from '@nestjs/common';
import { randomUUID } from 'crypto';

export interface TimetableSlot {
  id: string;
  className: string;
  section: string;
  dayOfWeek: 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday';
  periodNumber: number;
  timeSlot: string;
  subject: string;
  teacherName: string;
  roomNumber: string;
}

@Injectable()
export class TimetableService {
  private readonly slots: Map<string, TimetableSlot> = new Map();

  constructor() {
    this.seed();
  }

  private seed() {
    const initial: TimetableSlot[] = [
      { id: 'tt-1', className: 'Grade 10', section: 'A', dayOfWeek: 'Monday', periodNumber: 1, timeSlot: '08:30 - 09:15', subject: 'Mathematics', teacherName: 'David Miller', roomNumber: 'Room 201' },
      { id: 'tt-2', className: 'Grade 10', section: 'A', dayOfWeek: 'Monday', periodNumber: 2, timeSlot: '09:15 - 10:00', subject: 'Physics', teacherName: 'Sarah Jenkins', roomNumber: 'Room 201' },
      { id: 'tt-3', className: 'Grade 10', section: 'A', dayOfWeek: 'Monday', periodNumber: 3, timeSlot: '10:15 - 11:00', subject: 'English', teacherName: 'Elena Rostova', roomNumber: 'Room 201' },
      { id: 'tt-4', className: 'Grade 10', section: 'A', dayOfWeek: 'Monday', periodNumber: 4, timeSlot: '11:00 - 11:45', subject: 'Computer Science', teacherName: 'Marcus Thorne', roomNumber: 'Lab Block 301' },
      { id: 'tt-5', className: 'Grade 10', section: 'A', dayOfWeek: 'Tuesday', periodNumber: 1, timeSlot: '08:30 - 09:15', subject: 'Physics Lab', teacherName: 'Sarah Jenkins', roomNumber: 'Science Lab' },
    ];

    for (const item of initial) {
      this.slots.set(item.id, item);
    }
  }

  async findAll(query?: { className?: string; dayOfWeek?: string }): Promise<TimetableSlot[]> {
    let list = Array.from(this.slots.values());
    if (query?.className) {
      list = list.filter((s) => s.className.toLowerCase() === query.className?.toLowerCase());
    }
    if (query?.dayOfWeek) {
      list = list.filter((s) => s.dayOfWeek.toLowerCase() === query.dayOfWeek?.toLowerCase());
    }
    return list.sort((a, b) => a.periodNumber - b.periodNumber);
  }

  async create(data: Partial<TimetableSlot>): Promise<TimetableSlot> {
    const id = data.id || `tt-${randomUUID().slice(0, 8)}`;
    const slot: TimetableSlot = {
      id,
      className: data.className || 'Grade 10',
      section: data.section || 'A',
      dayOfWeek: data.dayOfWeek || 'Monday',
      periodNumber: data.periodNumber || 1,
      timeSlot: data.timeSlot || '08:30 - 09:15',
      subject: data.subject || 'Subject',
      teacherName: data.teacherName || 'Teacher',
      roomNumber: data.roomNumber || 'Room 101',
    };
    this.slots.set(id, slot);
    return slot;
  }
}

@Controller('timetable')
export class TimetableController {
  constructor(private readonly timetableService: TimetableService) {}

  @Get()
  findAll(@Query() query: { className?: string; dayOfWeek?: string }) {
    return this.timetableService.findAll(query);
  }

  @Post()
  create(@Body() body: Partial<TimetableSlot>) {
    return this.timetableService.create(body);
  }
}

import { Module } from '@nestjs/common';

@Module({
  controllers: [TimetableController],
  providers: [TimetableService],
  exports: [TimetableService],
})
export class TimetableModule {}
