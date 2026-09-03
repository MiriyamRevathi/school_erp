import { Injectable, Logger } from '@nestjs/common';

export interface BiometricLogEvent {
  deviceId: string;
  gateLocation: 'NORTH_MAIN_GATE' | 'SOUTH_BUS_PORTAL' | 'SCIENCE_BLOCK_TURNSTILE' | 'HOSTEL_DORM_GATE';
  rfidCardUid: string;
  studentId: string;
  studentName: string;
  gradeLevel: string;
  direction: 'ENTRY' | 'EXIT';
  timestamp: string;
  verificationMethod: 'RFID' | 'FACIAL_RECOGNITION' | 'FINGERPRINT';
}

export interface AttendanceDailyReconciliation {
  date: string;
  totalEnrolled: number;
  morningGateCheckIns: number;
  eveningGateCheckOuts: number;
  unauthorizedExits: BiometricLogEvent[];
  lateArrivals: Array<{ studentId: string; studentName: string; checkInTime: string; minutesLate: number }>;
  absenteeIds: string[];
}

@Injectable()
export class BiometricAttendanceProcessorService {
  private readonly logger = new Logger(BiometricAttendanceProcessorService.name);
  private readonly officialMorningCutoff = '08:30:00';

  public reconcileDailyLogs(events: BiometricLogEvent[], allEnrolledStudentIds: string[]): AttendanceDailyReconciliation {
    const presentStudents = new Set<string>();
    const lateArrivals: AttendanceDailyReconciliation['lateArrivals'] = [];
    const unauthorizedExits: BiometricLogEvent[] = [];

    for (const evt of events) {
      if (evt.direction === 'ENTRY') {
        presentStudents.add(evt.studentId);
        const timePart = evt.timestamp.split('T')[1] || '08:00:00';
        if (timePart > this.officialMorningCutoff) {
          const [h, m] = timePart.split(':').map(Number);
          const minutesLate = (h * 60 + m) - (8 * 60 + 30);
          lateArrivals.push({
            studentId: evt.studentId,
            studentName: evt.studentName,
            checkInTime: timePart,
            minutesLate: Math.max(1, minutesLate),
          });
        }
      } else if (evt.direction === 'EXIT') {
        const timePart = evt.timestamp.split('T')[1] || '12:00:00';
        if (timePart < '15:00:00') {
          unauthorizedExits.push(evt);
        }
      }
    }

    const absenteeIds = allEnrolledStudentIds.filter(id => !presentStudents.has(id));

    return {
      date: new Date().toISOString().split('T')[0],
      totalEnrolled: allEnrolledStudentIds.length,
      morningGateCheckIns: presentStudents.size,
      eveningGateCheckOuts: events.filter(e => e.direction === 'EXIT').length,
      unauthorizedExits,
      lateArrivals,
      absenteeIds,
    };
  }
}