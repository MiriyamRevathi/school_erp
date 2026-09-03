import { Controller, Get, Post, Put, Delete, Body, Param, Query, Injectable, NotFoundException, UseGuards, Req } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { RolesGuard } from '../auth/roles.guard';
import { Roles } from '../auth/roles.decorator';

export interface FeeInvoice {
  id: string;
  invoiceNo: string;
  studentId: string;
  studentName: string;
  className: string;
  term: string;
  academicYear: string;
  tuitionFee: number;
  transportFee: number;
  hostelFee: number;
  libraryFee: number;
  discount: number;
  totalAmount: number;
  paidAmount: number;
  dueAmount: number;
  dueDate: string;
  status: 'Paid' | 'Partially Paid' | 'Unpaid' | 'Overdue';
  paidDate?: string;
  paymentMethod?: string;
}

@Injectable()
export class FeesService {
  private readonly invoices: Map<string, FeeInvoice> = new Map();

  constructor() {
    this.seed();
  }

  private seed() {
    const initial: FeeInvoice[] = [
      {
        id: 'inv-1',
        invoiceNo: 'INV-2025-001',
        studentId: 'stu-1',
        studentName: 'Liam Davis',
        className: 'Grade 10',
        term: 'Term 1',
        academicYear: '2025-2026',
        tuitionFee: 1200,
        transportFee: 300,
        hostelFee: 0,
        libraryFee: 50,
        discount: 0,
        totalAmount: 1550,
        paidAmount: 1550,
        dueAmount: 0,
        dueDate: '2025-09-15',
        status: 'Paid',
        paidDate: '2025-09-10',
        paymentMethod: 'Credit Card',
      },
      {
        id: 'inv-2',
        invoiceNo: 'INV-2025-002',
        studentId: 'stu-2',
        studentName: 'Sophia Martinez',
        className: 'Grade 10',
        term: 'Term 1',
        academicYear: '2025-2026',
        tuitionFee: 1200,
        transportFee: 0,
        hostelFee: 800,
        libraryFee: 50,
        discount: 100,
        totalAmount: 1950,
        paidAmount: 1000,
        dueAmount: 950,
        dueDate: '2025-09-15',
        status: 'Partially Paid',
        paidDate: '2025-09-12',
        paymentMethod: 'Bank Transfer',
      },
      {
        id: 'inv-3',
        invoiceNo: 'INV-2025-003',
        studentId: 'stu-3',
        studentName: 'Noah Johnson',
        className: 'Grade 9',
        term: 'Term 1',
        academicYear: '2025-2026',
        tuitionFee: 1100,
        transportFee: 300,
        hostelFee: 0,
        libraryFee: 50,
        discount: 0,
        totalAmount: 1450,
        paidAmount: 0,
        dueAmount: 1450,
        dueDate: '2025-09-15',
        status: 'Unpaid',
      },
    ];

    for (const item of initial) {
      this.invoices.set(item.id, item);
    }
  }

  async findAll(query?: { status?: string; studentId?: string }): Promise<FeeInvoice[]> {
    let list = Array.from(this.invoices.values());
    if (query?.status && query.status !== 'All') {
      list = list.filter((i) => i.status.toLowerCase() === query.status?.toLowerCase());
    }
    if (query?.studentId) {
      list = list.filter((i) => i.studentId === query.studentId);
    }
    return list;
  }

  async findOne(id: string): Promise<FeeInvoice> {
    const item = this.invoices.get(id);
    if (!item) throw new NotFoundException(`Invoice with id ${id} not found`);
    return item;
  }

  async recordPayment(id: string, payment: { amount: number; paymentMethod: string }): Promise<FeeInvoice> {
    const invoice = await this.findOne(id);
    invoice.paidAmount += payment.amount;
    invoice.dueAmount = Math.max(0, invoice.totalAmount - invoice.paidAmount);
    invoice.status = invoice.dueAmount === 0 ? 'Paid' : 'Partially Paid';
    invoice.paidDate = new Date().toISOString().split('T')[0];
    invoice.paymentMethod = payment.paymentMethod;
    this.invoices.set(id, invoice);
    return invoice;
  }
}

@Controller('fees')
@UseGuards(RolesGuard)
export class FeesController {
  constructor(private readonly feesService: FeesService) {}

  @Get()
  @Get('invoices')
  @Roles('ADMIN', 'STUDENT', 'PARENT')
  findAll(@Query() query: { status?: string; studentId?: string }, @Req() req: any) {
    const user = req?.user;
    if (user?.role === 'STUDENT' && user.linkedId) {
      return this.feesService.findAll({ ...query, studentId: user.linkedId });
    }
    if (user?.role === 'PARENT') {
      return this.feesService.findAll({ ...query, studentId: 'stu-1' });
    }
    return this.feesService.findAll(query);
  }

  @Get('invoices/:id')
  @Roles('ADMIN', 'STUDENT', 'PARENT')
  findOne(@Param('id') id: string) {
    return this.feesService.findOne(id);
  }

  @Post('invoices/:id/pay')
  @Roles('ADMIN', 'STUDENT', 'PARENT')
  recordPayment(@Param('id') id: string, @Body() body: { amount: number; paymentMethod: string }) {
    return this.feesService.recordPayment(id, body);
  }
}

import { Module } from '@nestjs/common';

@Module({
  controllers: [FeesController],
  providers: [FeesService],
  exports: [FeesService],
})
export class FeesModule {}
