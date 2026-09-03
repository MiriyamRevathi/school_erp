import { Controller, Get, Post, Put, Delete, Body, Param, Query, Injectable, NotFoundException } from '@nestjs/common';
import { randomUUID } from 'crypto';

export interface Book {
  id: string;
  isbn: string;
  title: string;
  author: string;
  category: string;
  publisher: string;
  totalCopies: number;
  availableCopies: number;
  shelfLocation: string;
}

export interface BookIssue {
  id: string;
  bookId: string;
  bookTitle: string;
  studentId: string;
  studentName: string;
  issueDate: string;
  dueDate: string;
  returnDate?: string;
  status: 'Issued' | 'Returned' | 'Overdue';
  fineAmount: number;
}

@Injectable()
export class LibraryService {
  private readonly books: Map<string, Book> = new Map();
  private readonly issues: Map<string, BookIssue> = new Map();

  constructor() {
    this.seed();
  }

  private seed() {
    const initialBooks: Book[] = [
      { id: 'bk-1', isbn: '978-0131103627', title: 'The C Programming Language', author: 'Brian W. Kernighan, Dennis M. Ritchie', category: 'Computer Science', publisher: 'Prentice Hall', totalCopies: 10, availableCopies: 7, shelfLocation: 'CS-01' },
      { id: 'bk-2', isbn: '978-0471198444', title: 'Fundamentals of Physics', author: 'David Halliday, Robert Resnick', category: 'Science', publisher: 'Wiley', totalCopies: 15, availableCopies: 12, shelfLocation: 'SCI-03' },
      { id: 'bk-3', isbn: '978-0073383095', title: 'Calculus: Early Transcendentals', author: 'James Stewart', category: 'Mathematics', publisher: 'Cengage', totalCopies: 12, availableCopies: 8, shelfLocation: 'MATH-02' },
      { id: 'bk-4', isbn: '978-0141439518', title: 'Pride and Prejudice', author: 'Jane Austen', category: 'Literature', publisher: 'Penguin Classics', totalCopies: 8, availableCopies: 6, shelfLocation: 'LIT-05' },
    ];

    const initialIssues: BookIssue[] = [
      { id: 'iss-1', bookId: 'bk-1', bookTitle: 'The C Programming Language', studentId: 'stu-1', studentName: 'Liam Davis', issueDate: '2025-09-01', dueDate: '2025-09-15', status: 'Issued', fineAmount: 0 },
      { id: 'iss-2', bookId: 'bk-3', bookTitle: 'Calculus: Early Transcendentals', studentId: 'stu-2', studentName: 'Sophia Martinez', issueDate: '2025-08-25', dueDate: '2025-09-08', returnDate: '2025-09-07', status: 'Returned', fineAmount: 0 },
    ];

    for (const b of initialBooks) this.books.set(b.id, b);
    for (const i of initialIssues) this.issues.set(i.id, i);
  }

  async findAllBooks(query?: { search?: string; category?: string }): Promise<Book[]> {
    let list = Array.from(this.books.values());
    if (query?.category) {
      list = list.filter((b) => b.category.toLowerCase() === query.category?.toLowerCase());
    }
    if (query?.search) {
      const q = query.search.toLowerCase();
      list = list.filter((b) => b.title.toLowerCase().includes(q) || b.author.toLowerCase().includes(q));
    }
    return list;
  }

  async findOneBook(id: string): Promise<Book> {
    const item = this.books.get(id);
    if (!item) throw new NotFoundException(`Book with id ${id} not found`);
    return item;
  }

  async findAllIssues(): Promise<BookIssue[]> {
    return Array.from(this.issues.values());
  }

  async issueBook(data: { bookId: string; studentId: string; studentName: string }): Promise<BookIssue> {
    const book = await this.findOneBook(data.bookId);
    if (book.availableCopies <= 0) {
      throw new Error('No available copies left for this book');
    }
    book.availableCopies--;
    this.books.set(book.id, book);

    const id = `iss-${randomUUID().slice(0, 8)}`;
    const issueDate = new Date().toISOString().split('T')[0];
    const dueDate = new Date(Date.now() + 14 * 86400000).toISOString().split('T')[0];

    const issue: BookIssue = {
      id,
      bookId: book.id,
      bookTitle: book.title,
      studentId: data.studentId,
      studentName: data.studentName,
      issueDate,
      dueDate,
      status: 'Issued',
      fineAmount: 0,
    };
    this.issues.set(id, issue);
    return issue;
  }

  async returnBook(issueId: string): Promise<BookIssue> {
    const issue = this.issues.get(issueId);
    if (!issue) throw new NotFoundException(`Issue record with id ${issueId} not found`);
    issue.status = 'Returned';
    issue.returnDate = new Date().toISOString().split('T')[0];

    const book = this.books.get(issue.bookId);
    if (book) {
      book.availableCopies++;
      this.books.set(book.id, book);
    }
    this.issues.set(issueId, issue);
    return issue;
  }
}

@Controller('library')
export class LibraryController {
  constructor(private readonly libraryService: LibraryService) {}

  @Get('books')
  findAllBooks(@Query() query: { search?: string; category?: string }) {
    return this.libraryService.findAllBooks(query);
  }

  @Get('books/:id')
  findOneBook(@Param('id') id: string) {
    return this.libraryService.findOneBook(id);
  }

  @Get('issues')
  findAllIssues() {
    return this.libraryService.findAllIssues();
  }

  @Post('issues')
  issueBook(@Body() body: { bookId: string; studentId: string; studentName: string }) {
    return this.libraryService.issueBook(body);
  }

  @Put('issues/:id/return')
  returnBook(@Param('id') id: string) {
    return this.libraryService.returnBook(id);
  }
}

import { Module } from '@nestjs/common';

@Module({
  controllers: [LibraryController],
  providers: [LibraryService],
  exports: [LibraryService],
})
export class LibraryModule {}
