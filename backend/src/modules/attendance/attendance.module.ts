import { Controller, Get, Post, Put, Body, Param, Query, Injectable, UseGuards, Req } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { RolesGuard } from '../auth/roles.guard';
import { Roles } from '../auth/roles.decorator';

export interface AttendanceRecord {
  id: string;
  studentId: string;
  studentName: string;
  className: string;
  section: string;
  date: string;
  status: 'Present' | 'Absent' | 'Late' | 'Excused';
  remarks?: string;
}

@Injectable()
export class AttendanceService {
  private readonly records: Map<string, AttendanceRecord> = new Map();

  constructor() {
    this.seed();
  }

  private seed() {
    const today = new Date().toISOString().split('T')[0];
    const initial: AttendanceRecord[] = [
      { id: 'att-1', studentId: 'stu-1', studentName: 'Liam Davis', className: 'Grade 10', section: 'A', date: today, status: 'Present' },
      { id: 'att-2', studentId: 'stu-2', studentName: 'Sophia Martinez', className: 'Grade 10', section: 'A', date: today, status: 'Present' },
      { id: 'att-3', studentId: 'stu-3', studentName: 'Noah Johnson', className: 'Grade 9', section: 'B', date: today, status: 'Late', remarks: 'Bus delay' },
      { id: 'att-4', studentId: 'stu-4', studentName: 'Emma Wilson', className: 'Grade 11', section: 'A', date: today, status: 'Present' },
      { id: 'att-5', studentId: 'stu-5', studentName: 'Lucas Taylor', className: 'Grade 8', section: 'C', date: today, status: 'Absent', remarks: 'Sick leave' },
    ];

    for (const item of initial) {
      this.records.set(item.id, item);
    }
  }

  async findAll(query?: { date?: string; className?: string; studentId?: string }): Promise<AttendanceRecord[]> {
    let list = Array.from(this.records.values());
    if (query?.date) {
      list = list.filter((r) => r.date === query.date);
    }
    if (query?.className && query.className !== 'All') {
      list = list.filter((r) => r.className.toLowerCase() === query.className?.toLowerCase());
    }
    if (query?.studentId) {
      list = list.filter((r) => r.studentId === query.studentId);
    }
    return list;
  }

  async markAttendance(records: Partial<AttendanceRecord>[]): Promise<AttendanceRecord[]> {
    const saved: AttendanceRecord[] = [];
    for (const rec of records) {
      const id = rec.id || `att-${randomUUID().slice(0, 8)}`;
      const newRec: AttendanceRecord = {
        id,
        studentId: rec.studentId || 'stu-1',
        studentName: rec.studentName || 'Student',
        className: rec.className || 'Grade 10',
        section: rec.section || 'A',
        date: rec.date || new Date().toISOString().split('T')[0],
        status: rec.status || 'Present',
        remarks: rec.remarks || '',
      };
      this.records.set(id, newRec);
      saved.push(newRec);
    }
    return saved;
  }

  async getSummary(date?: string, studentId?: string) {
    const d = date || new Date().toISOString().split('T')[0];
    const records = await this.findAll({ date: d, studentId });
    const total = records.length;
    const present = records.filter((r) => r.status === 'Present').length;
    const absent = records.filter((r) => r.status === 'Absent').length;
    const late = records.filter((r) => r.status === 'Late').length;

    return {
      date: d,
      total,
      present,
      absent,
      late,
      attendancePercentage: total > 0 ? Math.round((present / total) * 100) : 100,
    };
  }
}

@Controller('attendance')
@UseGuards(RolesGuard)
export class AttendanceController {
  constructor(private readonly attendanceService: AttendanceService) {}

  @Get()
  @Roles('ADMIN', 'TEACHER', 'STUDENT', 'PARENT')
  findAll(@Query() query: { date?: string; className?: string; studentId?: string }, @Req() req: any) {
    const user = req?.user;
    if (user?.role === 'STUDENT' && user.linkedId) {
      return this.attendanceService.findAll({ ...query, studentId: user.linkedId });
    }
    if (user?.role === 'PARENT') {
      return this.attendanceService.findAll({ ...query, studentId: 'stu-1' });
    }
    return this.attendanceService.findAll(query);
  }

  @Get('summary')
  @Roles('ADMIN', 'TEACHER', 'STUDENT', 'PARENT')
  getSummary(@Query('date') date?: string, @Req() req?: any) {
    const user = req?.user;
    const studentId = user?.role === 'STUDENT' ? user.linkedId : user?.role === 'PARENT' ? 'stu-1' : undefined;
    return this.attendanceService.getSummary(date, studentId);
  }

  @Post('mark')
  @Roles('ADMIN', 'TEACHER')
  markAttendance(@Body() body: { records: Partial<AttendanceRecord>[] }) {
    return this.attendanceService.markAttendance(body.records || []);
  }
}

import { Module } from '@nestjs/common';

@Module({
  controllers: [AttendanceController],
  providers: [AttendanceService],
  exports: [AttendanceService],
})
export class AttendanceModule {}
