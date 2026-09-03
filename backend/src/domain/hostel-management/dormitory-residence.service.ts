import { Injectable, Logger } from '@nestjs/common';

export interface BedAllocation {
  bedNumber: string;
  studentId: string | null;
  studentName: string | null;
  emergencyContact: string | null;
}

export interface DormRoom {
  roomId: string;
  roomNumber: string;
  buildingWing: 'ALPHA_BOYS_WING' | 'BETA_GIRLS_WING' | 'SENIOR_SCHOLARS_HALL';
  floorNumber: number;
  totalCapacity: number;
  occupiedBeds: number;
  wardenInCharge: string;
  beds: BedAllocation[];
  hasAttachedBath: boolean;
  airConditioned: boolean;
}

export interface GatePassRequest {
  passId: string;
  studentId: string;
  studentName: string;
  roomNumber: string;
  destination: string;
  departureTime: string;
  expectedReturnTime: string;
  guardianApprovalStatus: 'PENDING' | 'APPROVED' | 'REJECTED';
  wardenApprovalStatus: 'PENDING' | 'APPROVED' | 'REJECTED';
  actualReturnTime: string | null;
}

@Injectable()
export class DormitoryResidenceService {
  private readonly logger = new Logger(DormitoryResidenceService.name);

  public findAvailableBeds(rooms: DormRoom[], wing: DormRoom['buildingWing']): Array<{ roomId: string; roomNumber: string; availableBedCount: number }> {
    return rooms
      .filter(r => r.buildingWing === wing && r.occupiedBeds < r.totalCapacity)
      .map(r => ({
        roomId: r.roomId,
        roomNumber: r.roomNumber,
        availableBedCount: r.totalCapacity - r.occupiedBeds,
      }));
  }

  public allocateStudentToBed(
    room: DormRoom,
    student: { id: string; name: string; contact: string }
  ): { success: boolean; bedNumber: string | null; updatedRoom: DormRoom } {
    const emptyBed = room.beds.find(b => b.studentId === null);
    if (!emptyBed) {
      return { success: false, bedNumber: null, updatedRoom: room };
    }

    emptyBed.studentId = student.id;
    emptyBed.studentName = student.name;
    emptyBed.emergencyContact = student.contact;
    room.occupiedBeds++;

    return {
      success: true,
      bedNumber: emptyBed.bedNumber,
      updatedRoom: room,
    };
  }
}