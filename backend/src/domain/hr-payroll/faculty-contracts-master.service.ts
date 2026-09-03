import { Injectable } from '@nestjs/common';

export interface FacultyContractProfile {
  contractId: string;
  facultyId: string;
  facultyFullName: string;
  designation: 'HEAD_OF_DEPARTMENT' | 'SENIOR_FACULTY' | 'ASSOCIATE_TEACHER' | 'LABORATORY_DIRECTOR' | 'ATHLETIC_COACH';
  primaryDepartment: string;
  contractStartDate: string;
  contractEndDate: string;
  annualCompensationUSD: number;
  assignedTeachingQuotas: {
    weeklyClassPeriods: number;
    labSupervisionHours: number;
    mentorshipGroupsAssigned: number;
  };
  tenureStatus: 'TENURED_PERMANENT' | 'PROBATIONARY_YEAR_1' | 'FIXED_TERM_APPOINTMENT';
}

export const MASTER_FACULTY_CONTRACTS: FacultyContractProfile[] = [
  {
    contractId: "CTR-FAC-001",
    facultyId: "STF-001",
    facultyFullName: "Prof. Academic Faculty 1",
    designation: "ASSOCIATE_TEACHER",
    primaryDepartment: "Mathematics",
    contractStartDate: "2024-08-01",
    contractEndDate: "2027-07-31",
    annualCompensationUSD: 65850,
    assignedTeachingQuotas: {
      weeklyClassPeriods: 23,
      labSupervisionHours: 5,
      mentorshipGroupsAssigned: 2
    },
    tenureStatus: "PROBATIONARY_YEAR_1"
  },
  {
    contractId: "CTR-FAC-002",
    facultyId: "STF-002",
    facultyFullName: "Prof. Academic Faculty 2",
    designation: "ASSOCIATE_TEACHER",
    primaryDepartment: "Computer Science",
    contractStartDate: "2024-08-01",
    contractEndDate: "2027-07-31",
    annualCompensationUSD: 66700,
    assignedTeachingQuotas: {
      weeklyClassPeriods: 24,
      labSupervisionHours: 6,
      mentorshipGroupsAssigned: 2
    },
    tenureStatus: "TENURED_PERMANENT"
  },
  {
    contractId: "CTR-FAC-003",
    facultyId: "STF-003",
    facultyFullName: "Prof. Academic Faculty 3",
    designation: "SENIOR_FACULTY",
    primaryDepartment: "Languages & Literature",
    contractStartDate: "2024-08-01",
    contractEndDate: "2027-07-31",
    annualCompensationUSD: 67550,
    assignedTeachingQuotas: {
      weeklyClassPeriods: 25,
      labSupervisionHours: 4,
      mentorshipGroupsAssigned: 2
    },
    tenureStatus: "PROBATIONARY_YEAR_1"
  },
  {
    contractId: "CTR-FAC-004",
    facultyId: "STF-004",
    facultyFullName: "Prof. Academic Faculty 4",
    designation: "ASSOCIATE_TEACHER",
    primaryDepartment: "Social Sciences",
    contractStartDate: "2024-08-01",
    contractEndDate: "2027-07-31",
    annualCompensationUSD: 68400,
    assignedTeachingQuotas: {
      weeklyClassPeriods: 22,
      labSupervisionHours: 5,
      mentorshipGroupsAssigned: 2
    },
    tenureStatus: "TENURED_PERMANENT"
  },
  {
    contractId: "CTR-FAC-005",
    facultyId: "STF-005",
    facultyFullName: "Prof. Academic Faculty 5",
    designation: "HEAD_OF_DEPARTMENT",
    primaryDepartment: "Commerce",
    contractStartDate: "2024-08-01",
    contractEndDate: "2027-07-31",
    annualCompensationUSD: 69250,
    assignedTeachingQuotas: {
      weeklyClassPeriods: 23,
      labSupervisionHours: 6,
      mentorshipGroupsAssigned: 2
    },
    tenureStatus: "PROBATIONARY_YEAR_1"
  },
  {
    contractId: "CTR-FAC-006",
    facultyId: "STF-006",
    facultyFullName: "Prof. Academic Faculty 6",
    designation: "SENIOR_FACULTY",
    primaryDepartment: "Physics & Science",
    contractStartDate: "2024-08-01",
    contractEndDate: "2027-07-31",
    annualCompensationUSD: 70100,
    assignedTeachingQuotas: {
      weeklyClassPeriods: 24,
      labSupervisionHours: 4,
      mentorshipGroupsAssigned: 2
    },
    tenureStatus: "TENURED_PERMANENT"
  },
  {
    contractId: "CTR-FAC-007",
    facultyId: "STF-007",
    facultyFullName: "Prof. Academic Faculty 7",
    designation: "ASSOCIATE_TEACHER",
    primaryDepartment: "Mathematics",
    contractStartDate: "2024-08-01",
    contractEndDate: "2027-07-31",
    annualCompensationUSD: 70950,
    assignedTeachingQuotas: {
      weeklyClassPeriods: 25,
      labSupervisionHours: 5,
      mentorshipGroupsAssigned: 2
    },
    tenureStatus: "PROBATIONARY_YEAR_1"
  },
  {
    contractId: "CTR-FAC-008",
    facultyId: "STF-008",
    facultyFullName: "Prof. Academic Faculty 8",
    designation: "ASSOCIATE_TEACHER",
    primaryDepartment: "Computer Science",
    contractStartDate: "2024-08-01",
    contractEndDate: "2027-07-31",
    annualCompensationUSD: 71800,
    assignedTeachingQuotas: {
      weeklyClassPeriods: 22,
      labSupervisionHours: 6,
      mentorshipGroupsAssigned: 2
    },
    tenureStatus: "TENURED_PERMANENT"
  },
  {
    contractId: "CTR-FAC-009",
    facultyId: "STF-009",
    facultyFullName: "Prof. Academic Faculty 9",
    designation: "SENIOR_FACULTY",
    primaryDepartment: "Languages & Literature",
    contractStartDate: "2024-08-01",
    contractEndDate: "2027-07-31",
    annualCompensationUSD: 72650,
    assignedTeachingQuotas: {
      weeklyClassPeriods: 23,
      labSupervisionHours: 4,
      mentorshipGroupsAssigned: 2
    },
    tenureStatus: "PROBATIONARY_YEAR_1"
  },
  {
    contractId: "CTR-FAC-010",
    facultyId: "STF-010",
    facultyFullName: "Prof. Academic Faculty 10",
    designation: "HEAD_OF_DEPARTMENT",
    primaryDepartment: "Social Sciences",
    contractStartDate: "2024-08-01",
    contractEndDate: "2027-07-31",
    annualCompensationUSD: 73500,
    assignedTeachingQuotas: {
      weeklyClassPeriods: 24,
      labSupervisionHours: 5,
      mentorshipGroupsAssigned: 2
    },
    tenureStatus: "TENURED_PERMANENT"
  },
  {
    contractId: "CTR-FAC-011",
    facultyId: "STF-011",
    facultyFullName: "Prof. Academic Faculty 11",
    designation: "ASSOCIATE_TEACHER",
    primaryDepartment: "Commerce",
    contractStartDate: "2024-08-01",
    contractEndDate: "2027-07-31",
    annualCompensationUSD: 74350,
    assignedTeachingQuotas: {
      weeklyClassPeriods: 25,
      labSupervisionHours: 6,
      mentorshipGroupsAssigned: 2
    },
    tenureStatus: "PROBATIONARY_YEAR_1"
  },
  {
    contractId: "CTR-FAC-012",
    facultyId: "STF-012",
    facultyFullName: "Prof. Academic Faculty 12",
    designation: "SENIOR_FACULTY",
    primaryDepartment: "Physics & Science",
    contractStartDate: "2024-08-01",
    contractEndDate: "2027-07-31",
    annualCompensationUSD: 75200,
    assignedTeachingQuotas: {
      weeklyClassPeriods: 22,
      labSupervisionHours: 4,
      mentorshipGroupsAssigned: 2
    },
    tenureStatus: "TENURED_PERMANENT"
  },
  {
    contractId: "CTR-FAC-013",
    facultyId: "STF-013",
    facultyFullName: "Prof. Academic Faculty 13",
    designation: "ASSOCIATE_TEACHER",
    primaryDepartment: "Mathematics",
    contractStartDate: "2024-08-01",
    contractEndDate: "2027-07-31",
    annualCompensationUSD: 76050,
    assignedTeachingQuotas: {
      weeklyClassPeriods: 23,
      labSupervisionHours: 5,
      mentorshipGroupsAssigned: 2
    },
    tenureStatus: "PROBATIONARY_YEAR_1"
  },
  {
    contractId: "CTR-FAC-014",
    facultyId: "STF-014",
    facultyFullName: "Prof. Academic Faculty 14",
    designation: "ASSOCIATE_TEACHER",
    primaryDepartment: "Computer Science",
    contractStartDate: "2024-08-01",
    contractEndDate: "2027-07-31",
    annualCompensationUSD: 76900,
    assignedTeachingQuotas: {
      weeklyClassPeriods: 24,
      labSupervisionHours: 6,
      mentorshipGroupsAssigned: 2
    },
    tenureStatus: "TENURED_PERMANENT"
  },
  {
    contractId: "CTR-FAC-015",
    facultyId: "STF-015",
    facultyFullName: "Prof. Academic Faculty 15",
    designation: "HEAD_OF_DEPARTMENT",
    primaryDepartment: "Languages & Literature",
    contractStartDate: "2024-08-01",
    contractEndDate: "2027-07-31",
    annualCompensationUSD: 77750,
    assignedTeachingQuotas: {
      weeklyClassPeriods: 25,
      labSupervisionHours: 4,
      mentorshipGroupsAssigned: 2
    },
    tenureStatus: "PROBATIONARY_YEAR_1"
  },
  {
    contractId: "CTR-FAC-016",
    facultyId: "STF-016",
    facultyFullName: "Prof. Academic Faculty 16",
    designation: "ASSOCIATE_TEACHER",
    primaryDepartment: "Social Sciences",
    contractStartDate: "2024-08-01",
    contractEndDate: "2027-07-31",
    annualCompensationUSD: 78600,
    assignedTeachingQuotas: {
      weeklyClassPeriods: 22,
      labSupervisionHours: 5,
      mentorshipGroupsAssigned: 2
    },
    tenureStatus: "TENURED_PERMANENT"
  },
  {
    contractId: "CTR-FAC-017",
    facultyId: "STF-017",
    facultyFullName: "Prof. Academic Faculty 17",
    designation: "ASSOCIATE_TEACHER",
    primaryDepartment: "Commerce",
    contractStartDate: "2024-08-01",
    contractEndDate: "2027-07-31",
    annualCompensationUSD: 79450,
    assignedTeachingQuotas: {
      weeklyClassPeriods: 23,
      labSupervisionHours: 6,
      mentorshipGroupsAssigned: 2
    },
    tenureStatus: "PROBATIONARY_YEAR_1"
  },
  {
    contractId: "CTR-FAC-018",
    facultyId: "STF-018",
    facultyFullName: "Prof. Academic Faculty 18",
    designation: "SENIOR_FACULTY",
    primaryDepartment: "Physics & Science",
    contractStartDate: "2024-08-01",
    contractEndDate: "2027-07-31",
    annualCompensationUSD: 80300,
    assignedTeachingQuotas: {
      weeklyClassPeriods: 24,
      labSupervisionHours: 4,
      mentorshipGroupsAssigned: 2
    },
    tenureStatus: "TENURED_PERMANENT"
  },
  {
    contractId: "CTR-FAC-019",
    facultyId: "STF-019",
    facultyFullName: "Prof. Academic Faculty 19",
    designation: "ASSOCIATE_TEACHER",
    primaryDepartment: "Mathematics",
    contractStartDate: "2024-08-01",
    contractEndDate: "2027-07-31",
    annualCompensationUSD: 81150,
    assignedTeachingQuotas: {
      weeklyClassPeriods: 25,
      labSupervisionHours: 5,
      mentorshipGroupsAssigned: 2
    },
    tenureStatus: "PROBATIONARY_YEAR_1"
  },
  {
    contractId: "CTR-FAC-020",
    facultyId: "STF-020",
    facultyFullName: "Prof. Academic Faculty 20",
    designation: "HEAD_OF_DEPARTMENT",
    primaryDepartment: "Computer Science",
    contractStartDate: "2024-08-01",
    contractEndDate: "2027-07-31",
    annualCompensationUSD: 82000,
    assignedTeachingQuotas: {
      weeklyClassPeriods: 22,
      labSupervisionHours: 6,
      mentorshipGroupsAssigned: 2
    },
    tenureStatus: "TENURED_PERMANENT"
  },
  {
    contractId: "CTR-FAC-021",
    facultyId: "STF-021",
    facultyFullName: "Prof. Academic Faculty 21",
    designation: "SENIOR_FACULTY",
    primaryDepartment: "Languages & Literature",
    contractStartDate: "2024-08-01",
    contractEndDate: "2027-07-31",
    annualCompensationUSD: 82850,
    assignedTeachingQuotas: {
      weeklyClassPeriods: 23,
      labSupervisionHours: 4,
      mentorshipGroupsAssigned: 2
    },
    tenureStatus: "PROBATIONARY_YEAR_1"
  },
  {
    contractId: "CTR-FAC-022",
    facultyId: "STF-022",
    facultyFullName: "Prof. Academic Faculty 22",
    designation: "ASSOCIATE_TEACHER",
    primaryDepartment: "Social Sciences",
    contractStartDate: "2024-08-01",
    contractEndDate: "2027-07-31",
    annualCompensationUSD: 83700,
    assignedTeachingQuotas: {
      weeklyClassPeriods: 24,
      labSupervisionHours: 5,
      mentorshipGroupsAssigned: 2
    },
    tenureStatus: "TENURED_PERMANENT"
  },
  {
    contractId: "CTR-FAC-023",
    facultyId: "STF-023",
    facultyFullName: "Prof. Academic Faculty 23",
    designation: "ASSOCIATE_TEACHER",
    primaryDepartment: "Commerce",
    contractStartDate: "2024-08-01",
    contractEndDate: "2027-07-31",
    annualCompensationUSD: 84550,
    assignedTeachingQuotas: {
      weeklyClassPeriods: 25,
      labSupervisionHours: 6,
      mentorshipGroupsAssigned: 2
    },
    tenureStatus: "PROBATIONARY_YEAR_1"
  },
  {
    contractId: "CTR-FAC-024",
    facultyId: "STF-024",
    facultyFullName: "Prof. Academic Faculty 24",
    designation: "SENIOR_FACULTY",
    primaryDepartment: "Physics & Science",
    contractStartDate: "2024-08-01",
    contractEndDate: "2027-07-31",
    annualCompensationUSD: 85400,
    assignedTeachingQuotas: {
      weeklyClassPeriods: 22,
      labSupervisionHours: 4,
      mentorshipGroupsAssigned: 2
    },
    tenureStatus: "TENURED_PERMANENT"
  },
  {
    contractId: "CTR-FAC-025",
    facultyId: "STF-025",
    facultyFullName: "Prof. Academic Faculty 25",
    designation: "HEAD_OF_DEPARTMENT",
    primaryDepartment: "Mathematics",
    contractStartDate: "2024-08-01",
    contractEndDate: "2027-07-31",
    annualCompensationUSD: 86250,
    assignedTeachingQuotas: {
      weeklyClassPeriods: 23,
      labSupervisionHours: 5,
      mentorshipGroupsAssigned: 2
    },
    tenureStatus: "PROBATIONARY_YEAR_1"
  },
  {
    contractId: "CTR-FAC-026",
    facultyId: "STF-026",
    facultyFullName: "Prof. Academic Faculty 26",
    designation: "ASSOCIATE_TEACHER",
    primaryDepartment: "Computer Science",
    contractStartDate: "2024-08-01",
    contractEndDate: "2027-07-31",
    annualCompensationUSD: 87100,
    assignedTeachingQuotas: {
      weeklyClassPeriods: 24,
      labSupervisionHours: 6,
      mentorshipGroupsAssigned: 2
    },
    tenureStatus: "TENURED_PERMANENT"
  },
  {
    contractId: "CTR-FAC-027",
    facultyId: "STF-027",
    facultyFullName: "Prof. Academic Faculty 27",
    designation: "SENIOR_FACULTY",
    primaryDepartment: "Languages & Literature",
    contractStartDate: "2024-08-01",
    contractEndDate: "2027-07-31",
    annualCompensationUSD: 87950,
    assignedTeachingQuotas: {
      weeklyClassPeriods: 25,
      labSupervisionHours: 4,
      mentorshipGroupsAssigned: 2
    },
    tenureStatus: "PROBATIONARY_YEAR_1"
  },
  {
    contractId: "CTR-FAC-028",
    facultyId: "STF-028",
    facultyFullName: "Prof. Academic Faculty 28",
    designation: "ASSOCIATE_TEACHER",
    primaryDepartment: "Social Sciences",
    contractStartDate: "2024-08-01",
    contractEndDate: "2027-07-31",
    annualCompensationUSD: 88800,
    assignedTeachingQuotas: {
      weeklyClassPeriods: 22,
      labSupervisionHours: 5,
      mentorshipGroupsAssigned: 2
    },
    tenureStatus: "TENURED_PERMANENT"
  },
  {
    contractId: "CTR-FAC-029",
    facultyId: "STF-029",
    facultyFullName: "Prof. Academic Faculty 29",
    designation: "ASSOCIATE_TEACHER",
    primaryDepartment: "Commerce",
    contractStartDate: "2024-08-01",
    contractEndDate: "2027-07-31",
    annualCompensationUSD: 89650,
    assignedTeachingQuotas: {
      weeklyClassPeriods: 23,
      labSupervisionHours: 6,
      mentorshipGroupsAssigned: 2
    },
    tenureStatus: "PROBATIONARY_YEAR_1"
  },
  {
    contractId: "CTR-FAC-030",
    facultyId: "STF-030",
    facultyFullName: "Prof. Academic Faculty 30",
    designation: "HEAD_OF_DEPARTMENT",
    primaryDepartment: "Physics & Science",
    contractStartDate: "2024-08-01",
    contractEndDate: "2027-07-31",
    annualCompensationUSD: 90500,
    assignedTeachingQuotas: {
      weeklyClassPeriods: 24,
      labSupervisionHours: 4,
      mentorshipGroupsAssigned: 2
    },
    tenureStatus: "TENURED_PERMANENT"
  },
  {
    contractId: "CTR-FAC-031",
    facultyId: "STF-031",
    facultyFullName: "Prof. Academic Faculty 31",
    designation: "ASSOCIATE_TEACHER",
    primaryDepartment: "Mathematics",
    contractStartDate: "2024-08-01",
    contractEndDate: "2027-07-31",
    annualCompensationUSD: 91350,
    assignedTeachingQuotas: {
      weeklyClassPeriods: 25,
      labSupervisionHours: 5,
      mentorshipGroupsAssigned: 2
    },
    tenureStatus: "PROBATIONARY_YEAR_1"
  },
  {
    contractId: "CTR-FAC-032",
    facultyId: "STF-032",
    facultyFullName: "Prof. Academic Faculty 32",
    designation: "ASSOCIATE_TEACHER",
    primaryDepartment: "Computer Science",
    contractStartDate: "2024-08-01",
    contractEndDate: "2027-07-31",
    annualCompensationUSD: 92200,
    assignedTeachingQuotas: {
      weeklyClassPeriods: 22,
      labSupervisionHours: 6,
      mentorshipGroupsAssigned: 2
    },
    tenureStatus: "TENURED_PERMANENT"
  },
  {
    contractId: "CTR-FAC-033",
    facultyId: "STF-033",
    facultyFullName: "Prof. Academic Faculty 33",
    designation: "SENIOR_FACULTY",
    primaryDepartment: "Languages & Literature",
    contractStartDate: "2024-08-01",
    contractEndDate: "2027-07-31",
    annualCompensationUSD: 93050,
    assignedTeachingQuotas: {
      weeklyClassPeriods: 23,
      labSupervisionHours: 4,
      mentorshipGroupsAssigned: 2
    },
    tenureStatus: "PROBATIONARY_YEAR_1"
  },
  {
    contractId: "CTR-FAC-034",
    facultyId: "STF-034",
    facultyFullName: "Prof. Academic Faculty 34",
    designation: "ASSOCIATE_TEACHER",
    primaryDepartment: "Social Sciences",
    contractStartDate: "2024-08-01",
    contractEndDate: "2027-07-31",
    annualCompensationUSD: 93900,
    assignedTeachingQuotas: {
      weeklyClassPeriods: 24,
      labSupervisionHours: 5,
      mentorshipGroupsAssigned: 2
    },
    tenureStatus: "TENURED_PERMANENT"
  },
  {
    contractId: "CTR-FAC-035",
    facultyId: "STF-035",
    facultyFullName: "Prof. Academic Faculty 35",
    designation: "HEAD_OF_DEPARTMENT",
    primaryDepartment: "Commerce",
    contractStartDate: "2024-08-01",
    contractEndDate: "2027-07-31",
    annualCompensationUSD: 94750,
    assignedTeachingQuotas: {
      weeklyClassPeriods: 25,
      labSupervisionHours: 6,
      mentorshipGroupsAssigned: 2
    },
    tenureStatus: "PROBATIONARY_YEAR_1"
  },
  {
    contractId: "CTR-FAC-036",
    facultyId: "STF-036",
    facultyFullName: "Prof. Academic Faculty 36",
    designation: "SENIOR_FACULTY",
    primaryDepartment: "Physics & Science",
    contractStartDate: "2024-08-01",
    contractEndDate: "2027-07-31",
    annualCompensationUSD: 95600,
    assignedTeachingQuotas: {
      weeklyClassPeriods: 22,
      labSupervisionHours: 4,
      mentorshipGroupsAssigned: 2
    },
    tenureStatus: "TENURED_PERMANENT"
  },
  {
    contractId: "CTR-FAC-037",
    facultyId: "STF-037",
    facultyFullName: "Prof. Academic Faculty 37",
    designation: "ASSOCIATE_TEACHER",
    primaryDepartment: "Mathematics",
    contractStartDate: "2024-08-01",
    contractEndDate: "2027-07-31",
    annualCompensationUSD: 96450,
    assignedTeachingQuotas: {
      weeklyClassPeriods: 23,
      labSupervisionHours: 5,
      mentorshipGroupsAssigned: 2
    },
    tenureStatus: "PROBATIONARY_YEAR_1"
  },
  {
    contractId: "CTR-FAC-038",
    facultyId: "STF-038",
    facultyFullName: "Prof. Academic Faculty 38",
    designation: "ASSOCIATE_TEACHER",
    primaryDepartment: "Computer Science",
    contractStartDate: "2024-08-01",
    contractEndDate: "2027-07-31",
    annualCompensationUSD: 97300,
    assignedTeachingQuotas: {
      weeklyClassPeriods: 24,
      labSupervisionHours: 6,
      mentorshipGroupsAssigned: 2
    },
    tenureStatus: "TENURED_PERMANENT"
  },
  {
    contractId: "CTR-FAC-039",
    facultyId: "STF-039",
    facultyFullName: "Prof. Academic Faculty 39",
    designation: "SENIOR_FACULTY",
    primaryDepartment: "Languages & Literature",
    contractStartDate: "2024-08-01",
    contractEndDate: "2027-07-31",
    annualCompensationUSD: 98150,
    assignedTeachingQuotas: {
      weeklyClassPeriods: 25,
      labSupervisionHours: 4,
      mentorshipGroupsAssigned: 2
    },
    tenureStatus: "PROBATIONARY_YEAR_1"
  },
  {
    contractId: "CTR-FAC-040",
    facultyId: "STF-040",
    facultyFullName: "Prof. Academic Faculty 40",
    designation: "HEAD_OF_DEPARTMENT",
    primaryDepartment: "Social Sciences",
    contractStartDate: "2024-08-01",
    contractEndDate: "2027-07-31",
    annualCompensationUSD: 99000,
    assignedTeachingQuotas: {
      weeklyClassPeriods: 22,
      labSupervisionHours: 5,
      mentorshipGroupsAssigned: 2
    },
    tenureStatus: "TENURED_PERMANENT"
  },
  {
    contractId: "CTR-FAC-041",
    facultyId: "STF-041",
    facultyFullName: "Prof. Academic Faculty 41",
    designation: "ASSOCIATE_TEACHER",
    primaryDepartment: "Commerce",
    contractStartDate: "2024-08-01",
    contractEndDate: "2027-07-31",
    annualCompensationUSD: 99850,
    assignedTeachingQuotas: {
      weeklyClassPeriods: 23,
      labSupervisionHours: 6,
      mentorshipGroupsAssigned: 2
    },
    tenureStatus: "PROBATIONARY_YEAR_1"
  },
  {
    contractId: "CTR-FAC-042",
    facultyId: "STF-042",
    facultyFullName: "Prof. Academic Faculty 42",
    designation: "SENIOR_FACULTY",
    primaryDepartment: "Physics & Science",
    contractStartDate: "2024-08-01",
    contractEndDate: "2027-07-31",
    annualCompensationUSD: 100700,
    assignedTeachingQuotas: {
      weeklyClassPeriods: 24,
      labSupervisionHours: 4,
      mentorshipGroupsAssigned: 2
    },
    tenureStatus: "TENURED_PERMANENT"
  },
  {
    contractId: "CTR-FAC-043",
    facultyId: "STF-043",
    facultyFullName: "Prof. Academic Faculty 43",
    designation: "ASSOCIATE_TEACHER",
    primaryDepartment: "Mathematics",
    contractStartDate: "2024-08-01",
    contractEndDate: "2027-07-31",
    annualCompensationUSD: 101550,
    assignedTeachingQuotas: {
      weeklyClassPeriods: 25,
      labSupervisionHours: 5,
      mentorshipGroupsAssigned: 2
    },
    tenureStatus: "PROBATIONARY_YEAR_1"
  },
  {
    contractId: "CTR-FAC-044",
    facultyId: "STF-044",
    facultyFullName: "Prof. Academic Faculty 44",
    designation: "ASSOCIATE_TEACHER",
    primaryDepartment: "Computer Science",
    contractStartDate: "2024-08-01",
    contractEndDate: "2027-07-31",
    annualCompensationUSD: 102400,
    assignedTeachingQuotas: {
      weeklyClassPeriods: 22,
      labSupervisionHours: 6,
      mentorshipGroupsAssigned: 2
    },
    tenureStatus: "TENURED_PERMANENT"
  },
  {
    contractId: "CTR-FAC-045",
    facultyId: "STF-045",
    facultyFullName: "Prof. Academic Faculty 45",
    designation: "HEAD_OF_DEPARTMENT",
    primaryDepartment: "Languages & Literature",
    contractStartDate: "2024-08-01",
    contractEndDate: "2027-07-31",
    annualCompensationUSD: 103250,
    assignedTeachingQuotas: {
      weeklyClassPeriods: 23,
      labSupervisionHours: 4,
      mentorshipGroupsAssigned: 2
    },
    tenureStatus: "PROBATIONARY_YEAR_1"
  },
  {
    contractId: "CTR-FAC-046",
    facultyId: "STF-046",
    facultyFullName: "Prof. Academic Faculty 46",
    designation: "ASSOCIATE_TEACHER",
    primaryDepartment: "Social Sciences",
    contractStartDate: "2024-08-01",
    contractEndDate: "2027-07-31",
    annualCompensationUSD: 104100,
    assignedTeachingQuotas: {
      weeklyClassPeriods: 24,
      labSupervisionHours: 5,
      mentorshipGroupsAssigned: 2
    },
    tenureStatus: "TENURED_PERMANENT"
  },
  {
    contractId: "CTR-FAC-047",
    facultyId: "STF-047",
    facultyFullName: "Prof. Academic Faculty 47",
    designation: "ASSOCIATE_TEACHER",
    primaryDepartment: "Commerce",
    contractStartDate: "2024-08-01",
    contractEndDate: "2027-07-31",
    annualCompensationUSD: 104950,
    assignedTeachingQuotas: {
      weeklyClassPeriods: 25,
      labSupervisionHours: 6,
      mentorshipGroupsAssigned: 2
    },
    tenureStatus: "PROBATIONARY_YEAR_1"
  },
  {
    contractId: "CTR-FAC-048",
    facultyId: "STF-048",
    facultyFullName: "Prof. Academic Faculty 48",
    designation: "SENIOR_FACULTY",
    primaryDepartment: "Physics & Science",
    contractStartDate: "2024-08-01",
    contractEndDate: "2027-07-31",
    annualCompensationUSD: 105800,
    assignedTeachingQuotas: {
      weeklyClassPeriods: 22,
      labSupervisionHours: 4,
      mentorshipGroupsAssigned: 2
    },
    tenureStatus: "TENURED_PERMANENT"
  },
  {
    contractId: "CTR-FAC-049",
    facultyId: "STF-049",
    facultyFullName: "Prof. Academic Faculty 49",
    designation: "ASSOCIATE_TEACHER",
    primaryDepartment: "Mathematics",
    contractStartDate: "2024-08-01",
    contractEndDate: "2027-07-31",
    annualCompensationUSD: 106650,
    assignedTeachingQuotas: {
      weeklyClassPeriods: 23,
      labSupervisionHours: 5,
      mentorshipGroupsAssigned: 2
    },
    tenureStatus: "PROBATIONARY_YEAR_1"
  },
  {
    contractId: "CTR-FAC-050",
    facultyId: "STF-050",
    facultyFullName: "Prof. Academic Faculty 50",
    designation: "HEAD_OF_DEPARTMENT",
    primaryDepartment: "Computer Science",
    contractStartDate: "2024-08-01",
    contractEndDate: "2027-07-31",
    annualCompensationUSD: 107500,
    assignedTeachingQuotas: {
      weeklyClassPeriods: 24,
      labSupervisionHours: 6,
      mentorshipGroupsAssigned: 2
    },
    tenureStatus: "TENURED_PERMANENT"
  },
  {
    contractId: "CTR-FAC-051",
    facultyId: "STF-051",
    facultyFullName: "Prof. Academic Faculty 51",
    designation: "SENIOR_FACULTY",
    primaryDepartment: "Languages & Literature",
    contractStartDate: "2024-08-01",
    contractEndDate: "2027-07-31",
    annualCompensationUSD: 108350,
    assignedTeachingQuotas: {
      weeklyClassPeriods: 25,
      labSupervisionHours: 4,
      mentorshipGroupsAssigned: 2
    },
    tenureStatus: "PROBATIONARY_YEAR_1"
  },
  {
    contractId: "CTR-FAC-052",
    facultyId: "STF-052",
    facultyFullName: "Prof. Academic Faculty 52",
    designation: "ASSOCIATE_TEACHER",
    primaryDepartment: "Social Sciences",
    contractStartDate: "2024-08-01",
    contractEndDate: "2027-07-31",
    annualCompensationUSD: 109200,
    assignedTeachingQuotas: {
      weeklyClassPeriods: 22,
      labSupervisionHours: 5,
      mentorshipGroupsAssigned: 2
    },
    tenureStatus: "TENURED_PERMANENT"
  },
  {
    contractId: "CTR-FAC-053",
    facultyId: "STF-053",
    facultyFullName: "Prof. Academic Faculty 53",
    designation: "ASSOCIATE_TEACHER",
    primaryDepartment: "Commerce",
    contractStartDate: "2024-08-01",
    contractEndDate: "2027-07-31",
    annualCompensationUSD: 110050,
    assignedTeachingQuotas: {
      weeklyClassPeriods: 23,
      labSupervisionHours: 6,
      mentorshipGroupsAssigned: 2
    },
    tenureStatus: "PROBATIONARY_YEAR_1"
  },
  {
    contractId: "CTR-FAC-054",
    facultyId: "STF-054",
    facultyFullName: "Prof. Academic Faculty 54",
    designation: "SENIOR_FACULTY",
    primaryDepartment: "Physics & Science",
    contractStartDate: "2024-08-01",
    contractEndDate: "2027-07-31",
    annualCompensationUSD: 110900,
    assignedTeachingQuotas: {
      weeklyClassPeriods: 24,
      labSupervisionHours: 4,
      mentorshipGroupsAssigned: 2
    },
    tenureStatus: "TENURED_PERMANENT"
  },
  {
    contractId: "CTR-FAC-055",
    facultyId: "STF-055",
    facultyFullName: "Prof. Academic Faculty 55",
    designation: "HEAD_OF_DEPARTMENT",
    primaryDepartment: "Mathematics",
    contractStartDate: "2024-08-01",
    contractEndDate: "2027-07-31",
    annualCompensationUSD: 111750,
    assignedTeachingQuotas: {
      weeklyClassPeriods: 25,
      labSupervisionHours: 5,
      mentorshipGroupsAssigned: 2
    },
    tenureStatus: "PROBATIONARY_YEAR_1"
  },
  {
    contractId: "CTR-FAC-056",
    facultyId: "STF-056",
    facultyFullName: "Prof. Academic Faculty 56",
    designation: "ASSOCIATE_TEACHER",
    primaryDepartment: "Computer Science",
    contractStartDate: "2024-08-01",
    contractEndDate: "2027-07-31",
    annualCompensationUSD: 112600,
    assignedTeachingQuotas: {
      weeklyClassPeriods: 22,
      labSupervisionHours: 6,
      mentorshipGroupsAssigned: 2
    },
    tenureStatus: "TENURED_PERMANENT"
  },
  {
    contractId: "CTR-FAC-057",
    facultyId: "STF-057",
    facultyFullName: "Prof. Academic Faculty 57",
    designation: "SENIOR_FACULTY",
    primaryDepartment: "Languages & Literature",
    contractStartDate: "2024-08-01",
    contractEndDate: "2027-07-31",
    annualCompensationUSD: 113450,
    assignedTeachingQuotas: {
      weeklyClassPeriods: 23,
      labSupervisionHours: 4,
      mentorshipGroupsAssigned: 2
    },
    tenureStatus: "PROBATIONARY_YEAR_1"
  },
  {
    contractId: "CTR-FAC-058",
    facultyId: "STF-058",
    facultyFullName: "Prof. Academic Faculty 58",
    designation: "ASSOCIATE_TEACHER",
    primaryDepartment: "Social Sciences",
    contractStartDate: "2024-08-01",
    contractEndDate: "2027-07-31",
    annualCompensationUSD: 114300,
    assignedTeachingQuotas: {
      weeklyClassPeriods: 24,
      labSupervisionHours: 5,
      mentorshipGroupsAssigned: 2
    },
    tenureStatus: "TENURED_PERMANENT"
  },
  {
    contractId: "CTR-FAC-059",
    facultyId: "STF-059",
    facultyFullName: "Prof. Academic Faculty 59",
    designation: "ASSOCIATE_TEACHER",
    primaryDepartment: "Commerce",
    contractStartDate: "2024-08-01",
    contractEndDate: "2027-07-31",
    annualCompensationUSD: 115150,
    assignedTeachingQuotas: {
      weeklyClassPeriods: 25,
      labSupervisionHours: 6,
      mentorshipGroupsAssigned: 2
    },
    tenureStatus: "PROBATIONARY_YEAR_1"
  },
  {
    contractId: "CTR-FAC-060",
    facultyId: "STF-060",
    facultyFullName: "Prof. Academic Faculty 60",
    designation: "HEAD_OF_DEPARTMENT",
    primaryDepartment: "Physics & Science",
    contractStartDate: "2024-08-01",
    contractEndDate: "2027-07-31",
    annualCompensationUSD: 116000,
    assignedTeachingQuotas: {
      weeklyClassPeriods: 22,
      labSupervisionHours: 4,
      mentorshipGroupsAssigned: 2
    },
    tenureStatus: "TENURED_PERMANENT"
  },
  {
    contractId: "CTR-FAC-061",
    facultyId: "STF-061",
    facultyFullName: "Prof. Academic Faculty 61",
    designation: "ASSOCIATE_TEACHER",
    primaryDepartment: "Mathematics",
    contractStartDate: "2024-08-01",
    contractEndDate: "2027-07-31",
    annualCompensationUSD: 116850,
    assignedTeachingQuotas: {
      weeklyClassPeriods: 23,
      labSupervisionHours: 5,
      mentorshipGroupsAssigned: 2
    },
    tenureStatus: "PROBATIONARY_YEAR_1"
  },
  {
    contractId: "CTR-FAC-062",
    facultyId: "STF-062",
    facultyFullName: "Prof. Academic Faculty 62",
    designation: "ASSOCIATE_TEACHER",
    primaryDepartment: "Computer Science",
    contractStartDate: "2024-08-01",
    contractEndDate: "2027-07-31",
    annualCompensationUSD: 117700,
    assignedTeachingQuotas: {
      weeklyClassPeriods: 24,
      labSupervisionHours: 6,
      mentorshipGroupsAssigned: 2
    },
    tenureStatus: "TENURED_PERMANENT"
  },
  {
    contractId: "CTR-FAC-063",
    facultyId: "STF-063",
    facultyFullName: "Prof. Academic Faculty 63",
    designation: "SENIOR_FACULTY",
    primaryDepartment: "Languages & Literature",
    contractStartDate: "2024-08-01",
    contractEndDate: "2027-07-31",
    annualCompensationUSD: 118550,
    assignedTeachingQuotas: {
      weeklyClassPeriods: 25,
      labSupervisionHours: 4,
      mentorshipGroupsAssigned: 2
    },
    tenureStatus: "PROBATIONARY_YEAR_1"
  },
  {
    contractId: "CTR-FAC-064",
    facultyId: "STF-064",
    facultyFullName: "Prof. Academic Faculty 64",
    designation: "ASSOCIATE_TEACHER",
    primaryDepartment: "Social Sciences",
    contractStartDate: "2024-08-01",
    contractEndDate: "2027-07-31",
    annualCompensationUSD: 119400,
    assignedTeachingQuotas: {
      weeklyClassPeriods: 22,
      labSupervisionHours: 5,
      mentorshipGroupsAssigned: 2
    },
    tenureStatus: "TENURED_PERMANENT"
  },
  {
    contractId: "CTR-FAC-065",
    facultyId: "STF-065",
    facultyFullName: "Prof. Academic Faculty 65",
    designation: "HEAD_OF_DEPARTMENT",
    primaryDepartment: "Commerce",
    contractStartDate: "2024-08-01",
    contractEndDate: "2027-07-31",
    annualCompensationUSD: 120250,
    assignedTeachingQuotas: {
      weeklyClassPeriods: 23,
      labSupervisionHours: 6,
      mentorshipGroupsAssigned: 2
    },
    tenureStatus: "PROBATIONARY_YEAR_1"
  },
  {
    contractId: "CTR-FAC-066",
    facultyId: "STF-066",
    facultyFullName: "Prof. Academic Faculty 66",
    designation: "SENIOR_FACULTY",
    primaryDepartment: "Physics & Science",
    contractStartDate: "2024-08-01",
    contractEndDate: "2027-07-31",
    annualCompensationUSD: 121100,
    assignedTeachingQuotas: {
      weeklyClassPeriods: 24,
      labSupervisionHours: 4,
      mentorshipGroupsAssigned: 2
    },
    tenureStatus: "TENURED_PERMANENT"
  },
  {
    contractId: "CTR-FAC-067",
    facultyId: "STF-067",
    facultyFullName: "Prof. Academic Faculty 67",
    designation: "ASSOCIATE_TEACHER",
    primaryDepartment: "Mathematics",
    contractStartDate: "2024-08-01",
    contractEndDate: "2027-07-31",
    annualCompensationUSD: 121950,
    assignedTeachingQuotas: {
      weeklyClassPeriods: 25,
      labSupervisionHours: 5,
      mentorshipGroupsAssigned: 2
    },
    tenureStatus: "PROBATIONARY_YEAR_1"
  },
  {
    contractId: "CTR-FAC-068",
    facultyId: "STF-068",
    facultyFullName: "Prof. Academic Faculty 68",
    designation: "ASSOCIATE_TEACHER",
    primaryDepartment: "Computer Science",
    contractStartDate: "2024-08-01",
    contractEndDate: "2027-07-31",
    annualCompensationUSD: 122800,
    assignedTeachingQuotas: {
      weeklyClassPeriods: 22,
      labSupervisionHours: 6,
      mentorshipGroupsAssigned: 2
    },
    tenureStatus: "TENURED_PERMANENT"
  },
  {
    contractId: "CTR-FAC-069",
    facultyId: "STF-069",
    facultyFullName: "Prof. Academic Faculty 69",
    designation: "SENIOR_FACULTY",
    primaryDepartment: "Languages & Literature",
    contractStartDate: "2024-08-01",
    contractEndDate: "2027-07-31",
    annualCompensationUSD: 123650,
    assignedTeachingQuotas: {
      weeklyClassPeriods: 23,
      labSupervisionHours: 4,
      mentorshipGroupsAssigned: 2
    },
    tenureStatus: "PROBATIONARY_YEAR_1"
  },
  {
    contractId: "CTR-FAC-070",
    facultyId: "STF-070",
    facultyFullName: "Prof. Academic Faculty 70",
    designation: "HEAD_OF_DEPARTMENT",
    primaryDepartment: "Social Sciences",
    contractStartDate: "2024-08-01",
    contractEndDate: "2027-07-31",
    annualCompensationUSD: 124500,
    assignedTeachingQuotas: {
      weeklyClassPeriods: 24,
      labSupervisionHours: 5,
      mentorshipGroupsAssigned: 2
    },
    tenureStatus: "TENURED_PERMANENT"
  },
  {
    contractId: "CTR-FAC-071",
    facultyId: "STF-071",
    facultyFullName: "Prof. Academic Faculty 71",
    designation: "ASSOCIATE_TEACHER",
    primaryDepartment: "Commerce",
    contractStartDate: "2024-08-01",
    contractEndDate: "2027-07-31",
    annualCompensationUSD: 125350,
    assignedTeachingQuotas: {
      weeklyClassPeriods: 25,
      labSupervisionHours: 6,
      mentorshipGroupsAssigned: 2
    },
    tenureStatus: "PROBATIONARY_YEAR_1"
  },
  {
    contractId: "CTR-FAC-072",
    facultyId: "STF-072",
    facultyFullName: "Prof. Academic Faculty 72",
    designation: "SENIOR_FACULTY",
    primaryDepartment: "Physics & Science",
    contractStartDate: "2024-08-01",
    contractEndDate: "2027-07-31",
    annualCompensationUSD: 126200,
    assignedTeachingQuotas: {
      weeklyClassPeriods: 22,
      labSupervisionHours: 4,
      mentorshipGroupsAssigned: 2
    },
    tenureStatus: "TENURED_PERMANENT"
  },
  {
    contractId: "CTR-FAC-073",
    facultyId: "STF-073",
    facultyFullName: "Prof. Academic Faculty 73",
    designation: "ASSOCIATE_TEACHER",
    primaryDepartment: "Mathematics",
    contractStartDate: "2024-08-01",
    contractEndDate: "2027-07-31",
    annualCompensationUSD: 127050,
    assignedTeachingQuotas: {
      weeklyClassPeriods: 23,
      labSupervisionHours: 5,
      mentorshipGroupsAssigned: 2
    },
    tenureStatus: "PROBATIONARY_YEAR_1"
  },
  {
    contractId: "CTR-FAC-074",
    facultyId: "STF-074",
    facultyFullName: "Prof. Academic Faculty 74",
    designation: "ASSOCIATE_TEACHER",
    primaryDepartment: "Computer Science",
    contractStartDate: "2024-08-01",
    contractEndDate: "2027-07-31",
    annualCompensationUSD: 127900,
    assignedTeachingQuotas: {
      weeklyClassPeriods: 24,
      labSupervisionHours: 6,
      mentorshipGroupsAssigned: 2
    },
    tenureStatus: "TENURED_PERMANENT"
  },
  {
    contractId: "CTR-FAC-075",
    facultyId: "STF-075",
    facultyFullName: "Prof. Academic Faculty 75",
    designation: "HEAD_OF_DEPARTMENT",
    primaryDepartment: "Languages & Literature",
    contractStartDate: "2024-08-01",
    contractEndDate: "2027-07-31",
    annualCompensationUSD: 128750,
    assignedTeachingQuotas: {
      weeklyClassPeriods: 25,
      labSupervisionHours: 4,
      mentorshipGroupsAssigned: 2
    },
    tenureStatus: "PROBATIONARY_YEAR_1"
  },
];

@Injectable()
export class FacultyContractsMasterService {
  public getAllContracts(): FacultyContractProfile[] {
    return MASTER_FACULTY_CONTRACTS;
  }
}
