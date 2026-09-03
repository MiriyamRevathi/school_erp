import { Controller, Get, Post, Put, Delete, Body, Param, Query, Injectable, NotFoundException, UseGuards } from '@nestjs/common';
import { RolesGuard } from '../auth/roles.guard';
import { Roles } from '../auth/roles.decorator';

export interface SalarySlip {
  id: string;
  employeeId: string;
  employeeName: string;
  department: string;
  month: string;
  year: number;
  basicSalary: number;
  allowances: number;
  deductions: number;
  netSalary: number;
  status: 'Paid' | 'Generated' | 'Pending';
  paymentDate?: string;
}

@Injectable()
export class PayrollService {
  private readonly slips: Map<string, SalarySlip> = new Map();

  constructor() {
    this.seed();
  }

  private seed() {
    const initial: SalarySlip[] = [
      { id: 'slp-1', employeeId: 'EMP-T-001', employeeName: 'Sarah Jenkins', department: 'Science', month: 'August', year: 2025, basicSalary: 4500, allowances: 600, deductions: 250, netSalary: 4850, status: 'Paid', paymentDate: '2025-08-31' },
      { id: 'slp-2', employeeId: 'EMP-T-002', employeeName: 'David Miller', department: 'Mathematics', month: 'August', year: 2025, basicSalary: 5200, allowances: 700, deductions: 300, netSalary: 5600, status: 'Paid', paymentDate: '2025-08-31' },
      { id: 'slp-3', employeeId: 'EMP-T-003', employeeName: 'Elena Rostova', department: 'Languages', month: 'August', year: 2025, basicSalary: 4200, allowances: 500, deductions: 200, netSalary: 4500, status: 'Paid', paymentDate: '2025-08-31' },
    ];

    for (const item of initial) {
      this.slips.set(item.id, item);
    }
  }

  async findAll(query?: { month?: string; year?: number }): Promise<SalarySlip[]> {
    let list = Array.from(this.slips.values());
    if (query?.month) {
      list = list.filter((s) => s.month.toLowerCase() === query.month?.toLowerCase());
    }
    return list;
  }

  async findOne(id: string): Promise<SalarySlip> {
    const item = this.slips.get(id);
    if (!item) throw new NotFoundException(`Salary slip with id ${id} not found`);
    return item;
  }
}

@Controller('payroll')
@UseGuards(RolesGuard)
@Roles('ADMIN')
export class PayrollController {
  constructor(private readonly payrollService: PayrollService) {}

  @Get('slips')
  findAll(@Query() query: { month?: string; year?: number }) {
    return this.payrollService.findAll(query);
  }

  @Get('slips/:id')
  findOne(@Param('id') id: string) {
    return this.payrollService.findOne(id);
  }
}

import { Module } from '@nestjs/common';

@Module({
  controllers: [PayrollController],
  providers: [PayrollService],
  exports: [PayrollService],
})
export class PayrollModule {}
