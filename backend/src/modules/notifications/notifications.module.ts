import { Controller, Get, Post, Put, Delete, Body, Param, Query, Injectable, NotFoundException } from '@nestjs/common';
import { randomUUID } from 'crypto';

export interface NotificationItem {
  id: string;
  title: string;
  message: string;
  category: 'Announcement' | 'Academic' | 'Event' | 'Emergency' | 'Fee';
  targetAudience: 'All' | 'Teachers' | 'Students' | 'Parents';
  priority: 'High' | 'Medium' | 'Low';
  publishedAt: string;
  read: boolean;
}

@Injectable()
export class NotificationsService {
  private readonly notifications: Map<string, NotificationItem> = new Map();

  constructor() {
    this.seed();
  }

  private seed() {
    const initial: NotificationItem[] = [
      {
        id: 'notif-1',
        title: 'Annual Science Fair Registrations Open',
        message: 'Students from Grade 8-12 can now register their science projects with their science teachers.',
        category: 'Event',
        targetAudience: 'All',
        priority: 'Medium',
        publishedAt: new Date(Date.now() - 86400000).toISOString(),
        read: false,
      },
      {
        id: 'notif-2',
        title: 'Term 1 Examination Timetable Released',
        message: 'The Mid-Term exam schedule is available on the academic portal. Check exam dates.',
        category: 'Academic',
        targetAudience: 'All',
        priority: 'High',
        publishedAt: new Date(Date.now() - 86400000 * 2).toISOString(),
        read: false,
      },
      {
        id: 'notif-3',
        title: 'Parent-Teacher Meeting (PTM) Scheduled',
        message: 'PTM for Grades 9 and 10 will be held this Saturday from 09:00 AM to 01:00 PM.',
        category: 'Announcement',
        targetAudience: 'Parents',
        priority: 'High',
        publishedAt: new Date(Date.now() - 86400000 * 3).toISOString(),
        read: true,
      },
    ];

    for (const item of initial) {
      this.notifications.set(item.id, item);
    }
  }

  async findAll(query?: { audience?: string }): Promise<NotificationItem[]> {
    let list = Array.from(this.notifications.values());
    if (query?.audience && query.audience !== 'All') {
      list = list.filter((n) => n.targetAudience === query.audience || n.targetAudience === 'All');
    }
    return list.sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
  }

  async markAsRead(id: string): Promise<NotificationItem> {
    const notif = this.notifications.get(id);
    if (!notif) throw new NotFoundException(`Notification ${id} not found`);
    notif.read = true;
    this.notifications.set(id, notif);
    return notif;
  }
}

@Controller('notifications')
export class NotificationsController {
  constructor(private readonly notificationsService: NotificationsService) {}

  @Get()
  findAll(@Query('audience') audience?: string) {
    return this.notificationsService.findAll({ audience });
  }

  @Put(':id/read')
  markAsRead(@Param('id') id: string) {
    return this.notificationsService.markAsRead(id);
  }
}

import { Module } from '@nestjs/common';

@Module({
  controllers: [NotificationsController],
  providers: [NotificationsService],
  exports: [NotificationsService],
})
export class NotificationsModule {}
