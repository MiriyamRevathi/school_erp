import { Injectable, Logger } from '@nestjs/common';

export interface BookCatalogEntry {
  isbn: string;
  deweyClassification: string;
  title: string;
  author: string;
  publisher: string;
  publicationYear: number;
  totalCopies: number;
  availableCopies: number;
  shelfLocation: string;
  tags: string[];
}

export interface CirculationLoanRecord {
  loanId: string;
  isbn: string;
  bookTitle: string;
  patronId: string;
  patronName: string;
  patronRole: 'STUDENT' | 'TEACHER';
  issueDate: string;
  dueDate: string;
  returnDate: string | null;
  overdueFineAccrued: number;
  status: 'ACTIVE' | 'RETURNED' | 'OVERDUE' | 'LOST';
}

@Injectable()
export class LibraryCatalogingService {
  private readonly logger = new Logger(LibraryCatalogingService.name);
  private readonly standardDailyFine = 0.50; // $0.50 per day overdue

  public calculateLoanPenalty(loan: CirculationLoanRecord): number {
    if (loan.status === 'RETURNED' && loan.returnDate) {
      return loan.overdueFineAccrued;
    }

    const today = new Date();
    const dueDate = new Date(loan.dueDate);

    if (today > dueDate) {
      const diffMs = today.getTime() - dueDate.getTime();
      const diffDays = Math.ceil(diffMs / (1000 * 60 * 60 * 24));
      return Number((diffDays * this.standardDailyFine).toFixed(2));
    }

    return 0;
  }

  public searchCatalog(entries: BookCatalogEntry[], query: string): BookCatalogEntry[] {
    const q = query.toLowerCase().trim();
    return entries.filter(e =>
      e.title.toLowerCase().includes(q) ||
      e.author.toLowerCase().includes(q) ||
      e.isbn.includes(q) ||
      e.deweyClassification.includes(q) ||
      e.tags.some(t => t.toLowerCase().includes(q))
    );
  }
}