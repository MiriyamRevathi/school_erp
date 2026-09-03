import { Injectable, Logger } from '@nestjs/common';

export interface TimeSlot {
  dayOfWeek: 'MONDAY' | 'TUESDAY' | 'WEDNESDAY' | 'THURSDAY' | 'FRIDAY' | 'SATURDAY';
  periodNumber: number;
  startTime: string;
  endTime: string;
  isBreak?: boolean;
}

export interface TeacherConstraint {
  teacherId: string;
  teacherName: string;
  maxPeriodsPerDay: number;
  maxPeriodsPerWeek: number;
  unavailableSlots: Array<{ day: string; period: number }>;
  specializations: string[];
}

export interface RoomRequirement {
  roomId: string;
  roomName: string;
  capacity: number;
  roomType: 'LECTURE_HALL' | 'SCIENCE_LAB' | 'COMPUTER_LAB' | 'ART_STUDIO' | 'SPORTS_GROUND';
  building: string;
}

export interface SubjectCurriculum {
  subjectCode: string;
  subjectName: string;
  weeklyPeriodsRequired: number;
  consecutivePeriodsRequired?: number;
  requiredRoomType: RoomRequirement['roomType'];
  department: string;
  credits: number;
}

export interface ClassScheduleItem {
  id: string;
  classId: string;
  className: string;
  section: string;
  subjectCode: string;
  subjectName: string;
  teacherId: string;
  teacherName: string;
  roomId: string;
  roomName: string;
  dayOfWeek: string;
  periodNumber: number;
  startTime: string;
  endTime: string;
}

export interface ScheduleConflict {
  type: 'TEACHER_DOUBLE_BOOKING' | 'ROOM_OVERLAP' | 'EXCEEDED_DAILY_LOAD' | 'CONSECUTIVE_LIMIT';
  description: string;
  severity: 'WARNING' | 'ERROR' | 'CRITICAL';
  involvedEntities: string[];
}

@Injectable()
export class TimetableSchedulerEngine {
  private readonly logger = new Logger(TimetableSchedulerEngine.name);

  private readonly standardTimeSlots: TimeSlot[] = [
    { dayOfWeek: 'MONDAY', periodNumber: 1, startTime: '08:30', endTime: '09:15' },
    { dayOfWeek: 'MONDAY', periodNumber: 2, startTime: '09:15', endTime: '10:00' },
    { dayOfWeek: 'MONDAY', periodNumber: 3, startTime: '10:15', endTime: '11:00' },
    { dayOfWeek: 'MONDAY', periodNumber: 4, startTime: '11:00', endTime: '11:45' },
    { dayOfWeek: 'MONDAY', periodNumber: 5, startTime: '12:30', endTime: '13:15' },
    { dayOfWeek: 'MONDAY', periodNumber: 6, startTime: '13:15', endTime: '14:00' },
    { dayOfWeek: 'MONDAY', periodNumber: 7, startTime: '14:15', endTime: '15:00' },
    { dayOfWeek: 'MONDAY', periodNumber: 8, startTime: '15:00', endTime: '15:45' },
  ];

  public generateOptimizedSchedule(
    classes: Array<{ id: string; name: string; section: string; studentCount: number }>,
    subjects: SubjectCurriculum[],
    teachers: TeacherConstraint[],
    rooms: RoomRequirement[]
  ): { schedule: ClassScheduleItem[]; conflicts: ScheduleConflict[]; fitnessScore: number } {
    this.logger.log(`Starting timetable constraint solver for ${classes.length} classes and ${subjects.length} subjects`);
    
    const schedule: ClassScheduleItem[] = [];
    const conflicts: ScheduleConflict[] = [];
    const teacherDailyLoad = new Map<string, Map<string, number>>();
    const roomOccupancy = new Map<string, Set<string>>();

    const days: TimeSlot['dayOfWeek'][] = ['MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY'];

    for (const cls of classes) {
      for (const subj of subjects) {
        let assignedPeriods = 0;
        const eligibleTeachers = teachers.filter(t => t.specializations.includes(subj.subjectCode));
        const assignedTeacher = eligibleTeachers.length > 0 ? eligibleTeachers[0] : { teacherId: 't-default', teacherName: 'Assigned Faculty', maxPeriodsPerDay: 5, maxPeriodsPerWeek: 25, unavailableSlots: [], specializations: [] };
        
        const eligibleRooms = rooms.filter(r => r.roomType === subj.requiredRoomType && r.capacity >= cls.studentCount);
        const assignedRoom = eligibleRooms.length > 0 ? eligibleRooms[0] : { roomId: 'r-101', roomName: 'Standard Room 101', capacity: 40, roomType: 'LECTURE_HALL' as const, building: 'Main Academic' };

        for (const day of days) {
          if (assignedPeriods >= subj.weeklyPeriodsRequired) break;

          for (let period = 1; period <= 8; period++) {
            if (period === 3 || period === 5) continue; // Passing periods / lunch
            if (assignedPeriods >= subj.weeklyPeriodsRequired) break;

            const slotKey = `${day}-${period}-${assignedRoom.roomId}`;
            const teacherSlotKey = `${day}-${period}-${assignedTeacher.teacherId}`;

            if (roomOccupancy.has(slotKey)) {
              continue; // Room busy
            }

            const slotInfo = this.standardTimeSlots.find(s => s.periodNumber === period) || { startTime: '09:00', endTime: '09:45' };

            const scheduleItem: ClassScheduleItem = {
              id: `sched-${cls.id}-${subj.subjectCode}-${day}-${period}`,
              classId: cls.id,
              className: cls.name,
              section: cls.section,
              subjectCode: subj.subjectCode,
              subjectName: subj.subjectName,
              teacherId: assignedTeacher.teacherId,
              teacherName: assignedTeacher.teacherName,
              roomId: assignedRoom.roomId,
              roomName: assignedRoom.roomName,
              dayOfWeek: day,
              periodNumber: period,
              startTime: slotInfo.startTime,
              endTime: slotInfo.endTime,
            };

            schedule.push(scheduleItem);
            roomOccupancy.set(slotKey, new Set([cls.id]));
            assignedPeriods++;
          }
        }

        if (assignedPeriods < subj.weeklyPeriodsRequired) {
          conflicts.push({
            type: 'EXCEEDED_DAILY_LOAD',
            description: `Could only allocate ${assignedPeriods}/${subj.weeklyPeriodsRequired} periods for ${subj.subjectName} in ${cls.name}-${cls.section}`,
            severity: 'WARNING',
            involvedEntities: [cls.id, subj.subjectCode],
          });
        }
      }
    }

    const fitnessScore = Math.max(0, 100 - (conflicts.length * 5));
    return { schedule, conflicts, fitnessScore };
  }

  public validateScheduleIntegrity(schedule: ClassScheduleItem[]): ScheduleConflict[] {
    const conflicts: ScheduleConflict[] = [];
    const teacherSlots = new Map<string, string>();
    const roomSlots = new Map<string, string>();

    for (const item of schedule) {
      const tKey = `${item.dayOfWeek}-${item.periodNumber}-${item.teacherId}`;
      const rKey = `${item.dayOfWeek}-${item.periodNumber}-${item.roomId}`;

      if (teacherSlots.has(tKey)) {
        conflicts.push({
          type: 'TEACHER_DOUBLE_BOOKING',
          description: `Teacher ${item.teacherName} is double-booked on ${item.dayOfWeek} Period ${item.periodNumber}`,
          severity: 'CRITICAL',
          involvedEntities: [item.teacherId, item.classId, teacherSlots.get(tKey)!],
        });
      } else {
        teacherSlots.set(tKey, item.classId);
      }

      if (roomSlots.has(rKey)) {
        conflicts.push({
          type: 'ROOM_OVERLAP',
          description: `Room ${item.roomName} has overlapping classes on ${item.dayOfWeek} Period ${item.periodNumber}`,
          severity: 'CRITICAL',
          involvedEntities: [item.roomId, item.classId, roomSlots.get(rKey)!],
        });
      } else {
        roomSlots.set(rKey, item.classId);
      }
    }

    return conflicts;
  }
}