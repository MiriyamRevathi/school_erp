import { Controller, Get, Post, Put, Delete, Body, Param, Query, Injectable, NotFoundException } from '@nestjs/common';
import { randomUUID } from 'crypto';

export interface TransportRoute {
  id: string;
  routeName: string;
  vehicleNumber: string;
  driverName: string;
  driverPhone: string;
  capacity: number;
  assignedStudents: number;
  stops: { name: string; pickupTime: string; dropTime: string }[];
}

@Injectable()
export class TransportService {
  private readonly routes: Map<string, TransportRoute> = new Map();

  constructor() {
    this.seed();
  }

  private seed() {
    const initial: TransportRoute[] = [
      {
        id: 'rt-1',
        routeName: 'North Springfield Express (Route 1)',
        vehicleNumber: 'BUS-01 (SPG-8821)',
        driverName: 'Thomas Anderson',
        driverPhone: '+1 555-0301',
        capacity: 40,
        assignedStudents: 34,
        stops: [
          { name: 'Maple Heights', pickupTime: '07:15 AM', dropTime: '03:45 PM' },
          { name: 'Oakridge Plaza', pickupTime: '07:30 AM', dropTime: '03:30 PM' },
          { name: 'Pine Grove Central', pickupTime: '07:45 AM', dropTime: '03:15 PM' },
          { name: 'School Campus', pickupTime: '08:00 AM', dropTime: '03:00 PM' },
        ],
      },
      {
        id: 'rt-2',
        routeName: 'South Valley Circuit (Route 2)',
        vehicleNumber: 'BUS-02 (SPG-8822)',
        driverName: 'Robert Vance',
        driverPhone: '+1 555-0302',
        capacity: 40,
        assignedStudents: 28,
        stops: [
          { name: 'Riverside Station', pickupTime: '07:10 AM', dropTime: '03:50 PM' },
          { name: 'Sunset Boulevard', pickupTime: '07:25 AM', dropTime: '03:35 PM' },
          { name: 'Elm Court Junction', pickupTime: '07:40 AM', dropTime: '03:20 PM' },
          { name: 'School Campus', pickupTime: '08:00 AM', dropTime: '03:00 PM' },
        ],
      },
    ];

    for (const item of initial) {
      this.routes.set(item.id, item);
    }
  }

  async findAll(): Promise<TransportRoute[]> {
    return Array.from(this.routes.values());
  }

  async findOne(id: string): Promise<TransportRoute> {
    const item = this.routes.get(id);
    if (!item) throw new NotFoundException(`Route with id ${id} not found`);
    return item;
  }

  async create(data: Partial<TransportRoute>): Promise<TransportRoute> {
    const id = data.id || `rt-${randomUUID().slice(0, 8)}`;
    const route: TransportRoute = {
      id,
      routeName: data.routeName || 'School Route',
      vehicleNumber: data.vehicleNumber || 'BUS-03',
      driverName: data.driverName || 'Driver',
      driverPhone: data.driverPhone || '+1 555-0000',
      capacity: data.capacity || 40,
      assignedStudents: data.assignedStudents || 0,
      stops: data.stops || [],
    };
    this.routes.set(id, route);
    return route;
  }
}

@Controller('transport')
export class TransportController {
  constructor(private readonly transportService: TransportService) {}

  @Get('routes')
  findAll() {
    return this.transportService.findAll();
  }

  @Get('routes/:id')
  findOne(@Param('id') id: string) {
    return this.transportService.findOne(id);
  }

  @Post('routes')
  create(@Body() body: Partial<TransportRoute>) {
    return this.transportService.create(body);
  }
}

import { Module } from '@nestjs/common';

@Module({
  controllers: [TransportController],
  providers: [TransportService],
  exports: [TransportService],
})
export class TransportModule {}
