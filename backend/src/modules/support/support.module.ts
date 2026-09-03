import { Controller, Get, Post, Put, Delete, Body, Param, Query, Injectable, NotFoundException, UseGuards, Req } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { RolesGuard } from '../auth/roles.guard';
import { Roles } from '../auth/roles.decorator';

export interface SupportTicket {
  id: string;
  ticketNo: string;
  subject: string;
  category: 'Billing' | 'Academic' | 'Transport' | 'IT / Portal' | 'General';
  description: string;
  creatorName: string;
  creatorEmail: string;
  creatorRole: 'ADMIN' | 'TEACHER' | 'STUDENT' | 'PARENT';
  creatorId: string;
  status: 'Open' | 'In Progress' | 'Resolved' | 'Closed';
  priority: 'High' | 'Medium' | 'Low';
  createdAt: string;
  updatedAt: string;
  responses: { sender: string; message: string; timestamp: string }[];
}

@Injectable()
export class SupportService {
  private readonly tickets: Map<string, SupportTicket> = new Map();

  constructor() {
    this.seed();
  }

  private seed() {
    const initial: SupportTicket[] = [
      {
        id: 'tkt-1',
        ticketNo: 'TCK-2025-001',
        subject: 'Fee Receipt Duplicate Copy Request',
        category: 'Billing',
        description: 'Need a stamped official duplicate copy of Term 1 fee payment invoice for tax deduction proof.',
        creatorName: 'Robert Davis',
        creatorEmail: 'parent@schoolerp.local',
        creatorRole: 'PARENT',
        creatorId: 'usr-parent-1',
        status: 'Resolved',
        priority: 'Medium',
        createdAt: '2025-09-02T10:00:00Z',
        updatedAt: '2025-09-02T14:30:00Z',
        responses: [
          { sender: 'Robert Davis', message: 'Please provide duplicate receipt for INV-2025-001.', timestamp: '2025-09-02 10:00 AM' },
          { sender: 'Accounts Dept', message: 'Official stamped receipt has been dispatched to your email.', timestamp: '2025-09-02 02:30 PM' },
        ],
      },
      {
        id: 'tkt-2',
        ticketNo: 'TCK-2025-002',
        subject: 'Physics Lab Equipment Requisition',
        category: 'Academic',
        description: 'Requesting 5 additional optical bench sets for Grade 10-A practical experiments.',
        creatorName: 'Sarah Jenkins',
        creatorEmail: 'teacher@schoolerp.local',
        creatorRole: 'TEACHER',
        creatorId: 'usr-teacher-1',
        status: 'In Progress',
        priority: 'High',
        createdAt: '2025-09-01T09:15:00Z',
        updatedAt: '2025-09-01T11:00:00Z',
        responses: [
          { sender: 'Sarah Jenkins', message: 'Requisition submitted for science lab refurbishment.', timestamp: '2025-09-01 09:15 AM' },
          { sender: 'Admin Office', message: 'Purchase order issued to authorized vendor.', timestamp: '2025-09-01 11:00 AM' },
        ],
      },
      {
        id: 'tkt-3',
        ticketNo: 'TCK-2025-003',
        subject: 'Bus Route Stop Change Request',
        category: 'Transport',
        description: 'Requesting to shift morning pickup point to Maple Center crossing.',
        creatorName: 'Liam Davis',
        creatorEmail: 'student@schoolerp.local',
        creatorRole: 'STUDENT',
        creatorId: 'usr-student-1',
        status: 'Open',
        priority: 'Low',
        createdAt: '2025-09-01T14:20:00Z',
        updatedAt: '2025-09-01T14:20:00Z',
        responses: [],
      },
    ];

    for (const item of initial) {
      this.tickets.set(item.id, item);
    }
  }

  async findAll(role?: string, creatorId?: string, query?: { status?: string; category?: string }): Promise<SupportTicket[]> {
    let list = Array.from(this.tickets.values());

    if (role && role !== 'ADMIN') {
      list = list.filter((t) => t.creatorRole === role || t.creatorId === creatorId);
    }

    if (query?.status && query.status !== 'All') {
      list = list.filter((t) => t.status.toLowerCase() === query.status?.toLowerCase());
    }

    if (query?.category && query.category !== 'All') {
      list = list.filter((t) => t.category.toLowerCase() === query.category?.toLowerCase());
    }

    return list;
  }

  async findOne(id: string): Promise<SupportTicket> {
    const item = this.tickets.get(id);
    if (!item) throw new NotFoundException(`Ticket with id ${id} not found`);
    return item;
  }

  async create(data: Partial<SupportTicket>, user: any): Promise<SupportTicket> {
    const id = `tkt-${randomUUID().slice(0, 8)}`;
    const ticketNo = `TCK-${new Date().getFullYear()}-${Date.now().toString().slice(-4)}`;
    const ticket: SupportTicket = {
      id,
      ticketNo,
      subject: data.subject || 'Support Request',
      category: data.category || 'General',
      description: data.description || '',
      creatorName: user?.name || data.creatorName || 'Anonymous',
      creatorEmail: user?.email || data.creatorEmail || 'user@schoolerp.local',
      creatorRole: user?.role || data.creatorRole || 'STUDENT',
      creatorId: user?.id || data.creatorId || 'usr-1',
      status: 'Open',
      priority: data.priority || 'Medium',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      responses: [],
    };
    this.tickets.set(id, ticket);
    return ticket;
  }

  async updateStatus(id: string, status: 'Open' | 'In Progress' | 'Resolved' | 'Closed', reply?: string, sender?: string): Promise<SupportTicket> {
    const ticket = await this.findOne(id);
    ticket.status = status;
    ticket.updatedAt = new Date().toISOString();
    if (reply) {
      ticket.responses.push({
        sender: sender || 'Support Staff',
        message: reply,
        timestamp: new Date().toLocaleString(),
      });
    }
    this.tickets.set(id, ticket);
    return ticket;
  }
}

@Controller('support')
@UseGuards(RolesGuard)
export class SupportController {
  constructor(private readonly supportService: SupportService) {}

  @Get('tickets')
  @Roles('ADMIN', 'TEACHER', 'STUDENT', 'PARENT')
  findAll(@Query() query: { status?: string; category?: string }, @Req() req: any) {
    const user = req?.user;
    return this.supportService.findAll(user?.role, user?.id, query);
  }

  @Get('tickets/:id')
  @Roles('ADMIN', 'TEACHER', 'STUDENT', 'PARENT')
  findOne(@Param('id') id: string) {
    return this.supportService.findOne(id);
  }

  @Post('tickets')
  @Roles('ADMIN', 'TEACHER', 'STUDENT', 'PARENT')
  create(@Body() body: Partial<SupportTicket>, @Req() req: any) {
    return this.supportService.create(body, req?.user);
  }

  @Put('tickets/:id')
  @Roles('ADMIN', 'TEACHER')
  update(@Param('id') id: string, @Body() body: { status: any; reply?: string }, @Req() req: any) {
    return this.supportService.updateStatus(id, body.status, body.reply, req?.user?.name);
  }
}

import { Module } from '@nestjs/common';

@Module({
  controllers: [SupportController],
  providers: [SupportService],
  exports: [SupportService],
})
export class SupportModule {}
