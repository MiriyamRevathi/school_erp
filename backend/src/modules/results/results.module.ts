import { Controller, Get, Post, Put, Delete, Body, Param, Query, Injectable, NotFoundException, UseGuards, Req } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { RolesGuard } from '../auth/roles.guard';
import { Roles } from '../auth/roles.decorator';

export interface StudentResult {
  id: string;
  examId: string;
  studentId: string;
  studentName: string;
  rollNumber: string;
  className: string;
  section: string;
  marks: {
    subject: string;
    obtainedMarks: number;
    maxMarks: number;
    grade: string;
  }[];
  totalObtained: number;
  totalMax: number;
  percentage: number;
  gpa: number;
  overallGrade: string;
  rank: number;
}

@Injectable()
export class ResultsService {
  private readonly results: Map<string, StudentResult> = new Map();

  constructor() {
    this.seed();
  }

  private seed() {
    const initial: StudentResult[] = [
      {
        id: 'res-1',
        examId: 'exm-1',
        studentId: 'stu-1',
        studentName: 'Liam Davis',
        rollNumber: '101',
        className: 'Grade 10',
        section: 'A',
        marks: [
          { subject: 'Mathematics', obtainedMarks: 94, maxMarks: 100, grade: 'A+' },
          { subject: 'Physics', obtainedMarks: 88, maxMarks: 100, grade: 'A' },
          { subject: 'Chemistry', obtainedMarks: 91, maxMarks: 100, grade: 'A+' },
          { subject: 'English', obtainedMarks: 85, maxMarks: 100, grade: 'A' },
        ],
        totalObtained: 358,
        totalMax: 400,
        percentage: 89.5,
        gpa: 3.9,
        overallGrade: 'A+',
        rank: 1,
      },
      {
        id: 'res-2',
        examId: 'exm-1',
        studentId: 'stu-2',
        studentName: 'Sophia Martinez',
        rollNumber: '102',
        className: 'Grade 10',
        section: 'A',
        marks: [
          { subject: 'Mathematics', obtainedMarks: 90, maxMarks: 100, grade: 'A+' },
          { subject: 'Physics', obtainedMarks: 86, maxMarks: 100, grade: 'A' },
          { subject: 'Chemistry', obtainedMarks: 89, maxMarks: 100, grade: 'A' },
          { subject: 'English', obtainedMarks: 92, maxMarks: 100, grade: 'A+' },
        ],
        totalObtained: 357,
        totalMax: 400,
        percentage: 89.25,
        gpa: 3.85,
        overallGrade: 'A',
        rank: 2,
      },
    ];

    for (const item of initial) {
      this.results.set(item.id, item);
    }
  }

  async findAll(query?: { examId?: string; studentId?: string; className?: string }): Promise<StudentResult[]> {
    let list = Array.from(this.results.values());
    if (query?.examId) {
      list = list.filter((r) => r.examId === query.examId);
    }
    if (query?.studentId) {
      list = list.filter((r) => r.studentId === query.studentId);
    }
    if (query?.className && query.className !== 'All') {
      list = list.filter((r) => r.className.toLowerCase() === query.className?.toLowerCase());
    }
    return list;
  }

  async findOne(id: string): Promise<StudentResult> {
    const item = this.results.get(id);
    if (!item) throw new NotFoundException(`Result with id ${id} not found`);
    return item;
  }

  async create(data: Partial<StudentResult>): Promise<StudentResult> {
    const id = data.id || `res-${randomUUID().slice(0, 8)}`;
    const marks = data.marks || [];
    const totalObtained = marks.reduce((sum, m) => sum + m.obtainedMarks, 0);
    const totalMax = marks.reduce((sum, m) => sum + m.maxMarks, 0) || 100;
    const percentage = Math.round((totalObtained / totalMax) * 100 * 100) / 100;

    const res: StudentResult = {
      id,
      examId: data.examId || 'exm-1',
      studentId: data.studentId || 'stu-1',
      studentName: data.studentName || 'Student',
      rollNumber: data.rollNumber || '101',
      className: data.className || 'Grade 10',
      section: data.section || 'A',
      marks,
      totalObtained,
      totalMax,
      percentage,
      gpa: percentage >= 90 ? 4.0 : percentage >= 80 ? 3.5 : 3.0,
      overallGrade: percentage >= 90 ? 'A+' : percentage >= 80 ? 'A' : 'B',
      rank: data.rank || 1,
    };
    this.results.set(id, res);
    return res;
  }
}

@Controller('results')
@UseGuards(RolesGuard)
export class ResultsController {
  constructor(private readonly resultsService: ResultsService) {}

  @Get()
  @Roles('ADMIN', 'TEACHER', 'STUDENT', 'PARENT')
  findAll(@Query() query: { examId?: string; studentId?: string; className?: string }, @Req() req: any) {
    const user = req?.user;
    if (user?.role === 'STUDENT' && user.linkedId) {
      return this.resultsService.findAll({ ...query, studentId: user.linkedId });
    }
    if (user?.role === 'PARENT') {
      return this.resultsService.findAll({ ...query, studentId: 'stu-1' });
    }
    return this.resultsService.findAll(query);
  }

  @Get(':id')
  @Roles('ADMIN', 'TEACHER', 'STUDENT', 'PARENT')
  findOne(@Param('id') id: string) {
    return this.resultsService.findOne(id);
  }

  @Post()
  @Roles('ADMIN', 'TEACHER')
  create(@Body() body: Partial<StudentResult>) {
    return this.resultsService.create(body);
  }
}

import { Module } from '@nestjs/common';

@Module({
  controllers: [ResultsController],
  providers: [ResultsService],
  exports: [ResultsService],
})
export class ResultsModule {}
