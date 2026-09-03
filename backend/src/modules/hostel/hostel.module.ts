import { Controller, Get, Post, Put, Delete, Body, Param, Query, Injectable, NotFoundException } from '@nestjs/common';
import { randomUUID } from 'crypto';

export interface HostelRoom {
  id: string;
  hostelName: string;
  roomNumber: string;
  roomType: 'Single' | 'Double' | 'Triple' | 'Dormitory';
  floor: number;
  capacity: number;
  occupied: number;
  monthlyFee: number;
  occupants: { studentId: string; studentName: string; allocatedDate: string }[];
}

@Injectable()
export class HostelService {
  private readonly rooms: Map<string, HostelRoom> = new Map();

  constructor() {
    this.seed();
  }

  private seed() {
    const initial: HostelRoom[] = [
      {
        id: 'hrm-1',
        hostelName: 'Evergreen Boys Hostel',
        roomNumber: 'B-101',
        roomType: 'Double',
        floor: 1,
        capacity: 2,
        occupied: 1,
        monthlyFee: 400,
        occupants: [{ studentId: 'stu-1', studentName: 'Liam Davis', allocatedDate: '2025-08-01' }],
      },
      {
        id: 'hrm-2',
        hostelName: 'Evergreen Boys Hostel',
        roomNumber: 'B-102',
        roomType: 'Double',
        floor: 1,
        capacity: 2,
        occupied: 0,
        monthlyFee: 400,
        occupants: [],
      },
      {
        id: 'hrm-3',
        hostelName: 'Rosewood Girls Hostel',
        roomNumber: 'G-201',
        roomType: 'Double',
        floor: 2,
        capacity: 2,
        occupied: 1,
        monthlyFee: 400,
        occupants: [{ studentId: 'stu-2', studentName: 'Sophia Martinez', allocatedDate: '2025-08-01' }],
      },
    ];

    for (const item of initial) {
      this.rooms.set(item.id, item);
    }
  }

  async findAll(): Promise<HostelRoom[]> {
    return Array.from(this.rooms.values());
  }

  async findOne(id: string): Promise<HostelRoom> {
    const item = this.rooms.get(id);
    if (!item) throw new NotFoundException(`Hostel room with id ${id} not found`);
    return item;
  }
}

@Controller('hostel')
export class HostelController {
  constructor(private readonly hostelService: HostelService) {}

  @Get('rooms')
  findAll() {
    return this.hostelService.findAll();
  }

  @Get('rooms/:id')
  findOne(@Param('id') id: string) {
    return this.hostelService.findOne(id);
  }
}

import { Module } from '@nestjs/common';

@Module({
  controllers: [HostelController],
  providers: [HostelService],
  exports: [HostelService],
})
export class HostelModule {}
