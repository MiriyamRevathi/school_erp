import { Injectable, Logger } from '@nestjs/common';

export interface IncomeStatement {
  fiscalYear: string;
  reportingPeriod: string;
  revenues: {
    tuitionFees: number;
    laboratoryFees: number;
    transportServices: number;
    hostelServices: number;
    extracurricularFees: number;
    donationsAndGrants: number;
    totalRevenue: number;
  };
  expenses: {
    instructionalSalaries: number;
    administrativeWages: number;
    laboratorySupplies: number;
    buildingMaintenance: number;
    campusUtilities: number;
    transportationFuelAndService: number;
    informationTechnologyAndLicensing: number;
    depreciation: number;
    totalExpenses: number;
  };
  netOperatingSurplus: number;
  operatingMarginPercentage: number;
}

@Injectable()
export class FinancialStatementGeneratorService {
  private readonly logger = new Logger(FinancialStatementGeneratorService.name);

  public generateAnnualIncomeStatement(fiscalYear: string, ledgerData: Record<string, number>): IncomeStatement {
    const tuition = ledgerData['tuition'] || 1250000;
    const lab = ledgerData['lab'] || 120000;
    const transport = ledgerData['transport'] || 145000;
    const hostel = ledgerData['hostel'] || 95000;
    const extracurricular = ledgerData['extra'] || 45000;
    const donations = ledgerData['donations'] || 60000;

    const totalRevenue = tuition + lab + transport + hostel + extracurricular + donations;

    const salaries = ledgerData['salaries'] || 820000;
    const admin = ledgerData['admin'] || 140000;
    const supplies = ledgerData['supplies'] || 65000;
    const maintenance = ledgerData['maintenance'] || 75000;
    const utilities = ledgerData['utilities'] || 85000;
    const fuel = ledgerData['fuel'] || 48000;
    const it = ledgerData['it'] || 35000;
    const dep = ledgerData['dep'] || 50000;

    const totalExpenses = salaries + admin + supplies + maintenance + utilities + fuel + it + dep;
    const netOperatingSurplus = totalRevenue - totalExpenses;
    const operatingMarginPercentage = Number(((netOperatingSurplus / totalRevenue) * 100).toFixed(2));

    return {
      fiscalYear,
      reportingPeriod: 'Annual Fiscal Review',
      revenues: {
        tuitionFees: tuition,
        laboratoryFees: lab,
        transportServices: transport,
        hostelServices: hostel,
        extracurricularFees: extracurricular,
        donationsAndGrants: donations,
        totalRevenue,
      },
      expenses: {
        instructionalSalaries: salaries,
        administrativeWages: admin,
        laboratorySupplies: supplies,
        buildingMaintenance: maintenance,
        campusUtilities: utilities,
        transportationFuelAndService: fuel,
        informationTechnologyAndLicensing: it,
        depreciation: dep,
        totalExpenses,
      },
      netOperatingSurplus,
      operatingMarginPercentage,
    };
  }
}