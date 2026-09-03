import { Injectable, Logger } from '@nestjs/common';

export interface FacultySalaryComponent {
  baseSalary: number;
  dearnessAllowance: number;
  houseRentAllowance: number;
  transportAllowance: number;
  specialAcademicAllowance: number;
  researchGrantBonus: number;
}

export interface StatutoryDeduction {
  providentFundEmployee: number;
  providentFundEmployer: number;
  employeesStateInsurance: number;
  professionalTax: number;
  withholdingIncomeTax: number;
}

export interface MonthlyPayslip {
  payslipId: string;
  employeeId: string;
  employeeName: string;
  designation: string;
  department: string;
  bankAccountNumber: string;
  payMonth: string;
  earnings: FacultySalaryComponent;
  grossSalary: number;
  deductions: StatutoryDeduction;
  totalDeductions: number;
  netPayableSalary: number;
  leaveSummary: {
    paidLeavesAvailable: number;
    paidLeavesTaken: number;
    unpaidLeaveDays: number;
    lossOfPayDeduction: number;
  };
}

@Injectable()
export class FacultyPayrollService {
  private readonly logger = new Logger(FacultyPayrollService.name);

  public computePayslip(
    faculty: { id: string; name: string; designation: string; department: string; bankAcc: string; basePay: number },
    month: string,
    unpaidLeaves: number = 0
  ): MonthlyPayslip {
    const base = faculty.basePay;
    const da = base * 0.12; // 12% DA
    const hra = base * 0.20; // 20% HRA
    const transport = 350;
    const specialAllowance = 400;
    const researchBonus = 250;

    const earnings: FacultySalaryComponent = {
      baseSalary: base,
      dearnessAllowance: Number(da.toFixed(2)),
      houseRentAllowance: Number(hra.toFixed(2)),
      transportAllowance: transport,
      specialAcademicAllowance: specialAllowance,
      researchGrantBonus: researchBonus,
    };

    const gross = base + da + hra + transport + specialAllowance + researchBonus;

    const perDaySalary = gross / 30;
    const lop = unpaidLeaves * perDaySalary;

    const epfEmployee = Math.min(1800, base * 0.12);
    const epfEmployer = epfEmployee;
    const esi = gross < 21000 ? gross * 0.0075 : 0;
    const pt = 200;
    const incomeTax = gross > 50000 ? (gross - 50000) * 0.20 : 0;

    const deductions: StatutoryDeduction = {
      providentFundEmployee: Number(epfEmployee.toFixed(2)),
      providentFundEmployer: Number(epfEmployer.toFixed(2)),
      employeesStateInsurance: Number(esi.toFixed(2)),
      professionalTax: pt,
      withholdingIncomeTax: Number(incomeTax.toFixed(2)),
    };

    const totalDeductions = epfEmployee + esi + pt + incomeTax + lop;
    const netPayable = Math.max(0, gross - totalDeductions);

    return {
      payslipId: `PS-${faculty.id}-${month.replace('-', '')}`,
      employeeId: faculty.id,
      employeeName: faculty.name,
      designation: faculty.designation,
      department: faculty.department,
      bankAccountNumber: faculty.bankAcc,
      payMonth: month,
      earnings,
      grossSalary: Number(gross.toFixed(2)),
      deductions,
      totalDeductions: Number(totalDeductions.toFixed(2)),
      netPayableSalary: Number(netPayable.toFixed(2)),
      leaveSummary: {
        paidLeavesAvailable: 15,
        paidLeavesTaken: 2,
        unpaidLeaveDays: unpaidLeaves,
        lossOfPayDeduction: Number(lop.toFixed(2)),
      },
    };
  }
}