import { Injectable, Logger } from '@nestjs/common';

export interface LedgerAccount {
  accountCode: string;
  accountName: string;
  accountType: 'ASSET' | 'LIABILITY' | 'EQUITY' | 'REVENUE' | 'EXPENSE';
  balance: number;
  currency: string;
  isDebitNormal: boolean;
}

export interface JournalEntryLine {
  accountId: string;
  accountCode: string;
  accountName: string;
  debitAmount: number;
  creditAmount: number;
  description?: string;
}

export interface JournalVoucher {
  voucherNumber: string;
  transactionDate: string;
  referenceNumber: string;
  narration: string;
  lines: JournalEntryLine[];
  fiscalYear: string;
  createdBy: string;
  isPosted: boolean;
}

export interface FeeStructureItem {
  id: string;
  gradeLevel: string;
  feeCategory: 'TUITION' | 'LAB_FEE' | 'LIBRARY' | 'TRANSPORT' | 'SPORTS' | 'EXAM_FEE' | 'HOSTEL';
  amount: number;
  duePeriod: 'MONTHLY' | 'TERM' | 'ANNUAL';
  lateFeeDailyPenalty: number;
  taxPercentage: number;
}

@Injectable()
export class DoubleEntryFinancialLedgerService {
  private readonly logger = new Logger(DoubleEntryFinancialLedgerService.name);

  private readonly chartOfAccounts: Map<string, LedgerAccount> = new Map([
    ['1010', { accountCode: '1010', accountName: 'Cash on Hand', accountType: 'ASSET', balance: 45000, currency: 'USD', isDebitNormal: true }],
    ['1020', { accountCode: '1020', accountName: 'Bank Operating Account', accountType: 'ASSET', balance: 350000, currency: 'USD', isDebitNormal: true }],
    ['1030', { accountCode: '1030', accountName: 'Student Fees Receivable', accountType: 'ASSET', balance: 18500, currency: 'USD', isDebitNormal: true }],
    ['2010', { accountCode: '2010', accountName: 'Accounts Payable - Vendors', accountType: 'LIABILITY', balance: 12000, currency: 'USD', isDebitNormal: false }],
    ['2020', { accountCode: '2020', accountName: 'Prepaid Student Fees', accountType: 'LIABILITY', balance: 42000, currency: 'USD', isDebitNormal: false }],
    ['3010', { accountCode: '3010', accountName: 'Institutional Endowment Fund', accountType: 'EQUITY', balance: 250000, currency: 'USD', isDebitNormal: false }],
    ['4010', { accountCode: '4010', accountName: 'Tuition Fee Revenue', accountType: 'REVENUE', balance: 480000, currency: 'USD', isDebitNormal: false }],
    ['4020', { accountCode: '4020', accountName: 'Laboratory & Tech Fee Revenue', accountType: 'REVENUE', balance: 35000, currency: 'USD', isDebitNormal: false }],
    ['4030', { accountCode: '4030', accountName: 'Transportation Service Revenue', accountType: 'REVENUE', balance: 48000, currency: 'USD', isDebitNormal: false }],
    ['5010', { accountCode: '5010', accountName: 'Faculty Salaries & Wages', accountType: 'EXPENSE', balance: 240000, currency: 'USD', isDebitNormal: true }],
    ['5020', { accountCode: '5020', accountName: 'Campus Utilities & Electricity', accountType: 'EXPENSE', balance: 18500, currency: 'USD', isDebitNormal: true }],
    ['5030', { accountCode: '5030', accountName: 'Science Lab Supplies & Consumables', accountType: 'EXPENSE', balance: 9400, currency: 'USD', isDebitNormal: true }],
  ]);

  public postJournalVoucher(voucher: JournalVoucher): { success: boolean; message: string; balanceChecked: boolean } {
    const totalDebit = voucher.lines.reduce((sum, line) => sum + line.debitAmount, 0);
    const totalCredit = voucher.lines.reduce((sum, line) => sum + line.creditAmount, 0);

    if (Math.abs(totalDebit - totalCredit) > 0.001) {
      this.logger.error(`Voucher ${voucher.voucherNumber} rejected: Debit (${totalDebit}) does not equal Credit (${totalCredit})`);
      return { success: false, message: 'Double-entry equation violated: Total debits must equal total credits', balanceChecked: false };
    }

    for (const line of voucher.lines) {
      const account = this.chartOfAccounts.get(line.accountCode);
      if (account) {
        if (account.isDebitNormal) {
          account.balance += (line.debitAmount - line.creditAmount);
        } else {
          account.balance += (line.creditAmount - line.debitAmount);
        }
      }
    }

    this.logger.log(`Successfully posted Journal Voucher ${voucher.voucherNumber} totaling $${totalDebit}`);
    return { success: true, message: 'Journal voucher posted successfully', balanceChecked: true };
  }

  public generateTrialBalance(): { accounts: LedgerAccount[]; totalDebits: number; totalCredits: number; isBalanced: boolean } {
    const accounts = Array.from(this.chartOfAccounts.values());
    let totalDebits = 0;
    let totalCredits = 0;

    for (const acc of accounts) {
      if (acc.isDebitNormal) {
        totalDebits += acc.balance;
      } else {
        totalCredits += acc.balance;
      }
    }

    return {
      accounts,
      totalDebits: Number(totalDebits.toFixed(2)),
      totalCredits: Number(totalCredits.toFixed(2)),
      isBalanced: Math.abs(totalDebits - totalCredits) < 0.01,
    };
  }

  public calculateStudentFeeDue(
    baseStructure: FeeStructureItem[],
    daysOverdue: number,
    scholarshipPercent: number = 0,
    siblingDiscountPercent: number = 0
  ): { grossAmount: number; discountAmount: number; latePenalty: number; netPayable: number } {
    const grossAmount = baseStructure.reduce((sum, item) => sum + item.amount, 0);
    const totalDiscountPercent = Math.min(100, scholarshipPercent + siblingDiscountPercent);
    const discountAmount = (grossAmount * totalDiscountPercent) / 100;
    
    const penaltyRatePerDay = baseStructure.reduce((sum, item) => sum + item.lateFeeDailyPenalty, 0);
    const latePenalty = daysOverdue > 0 ? daysOverdue * penaltyRatePerDay : 0;

    const netPayable = Math.max(0, grossAmount - discountAmount + latePenalty);

    return {
      grossAmount: Number(grossAmount.toFixed(2)),
      discountAmount: Number(discountAmount.toFixed(2)),
      latePenalty: Number(latePenalty.toFixed(2)),
      netPayable: Number(netPayable.toFixed(2)),
    };
  }
}