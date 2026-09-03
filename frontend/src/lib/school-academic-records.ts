export interface DetailedStudentRecord {
  studentId: string;
  admissionNumber: string;
  fullName: string;
  grade: string;
  section: string;
  term1Results: {
    physicsMarks: number;
    chemistryMarks: number;
    mathematicsMarks: number;
    englishMarks: number;
    computerScienceMarks: number;
    totalObtained: number;
    maxTotal: number;
    termGPA: number;
  };
  attendanceSummary: {
    totalWorkingDays: number;
    daysPresent: number;
    daysAbsent: number;
    daysLate: number;
    percentage: number;
  };
  guardianProfile: {
    fatherName: string;
    motherName: string;
    emergencyPhone: string;
    emailAddress: string;
  };
}

export const MASTER_STUDENT_RECORDS_STORE: DetailedStudentRecord[] = Array.from({ length: 80 }, (_, i) => {
  const num = (i + 1).toString().padStart(4, '0');
  const p = 80 + (i % 18);
  const c = 78 + ((i * 3) % 20);
  const m = 82 + ((i * 7) % 17);
  const e = 85 + ((i * 5) % 14);
  const cs = 88 + ((i * 2) % 12);
  const tot = p + c + m + e + cs;
  const gpa = Number((tot / 500 * 4.0).toFixed(2));

  return {
    studentId: `std-${num}`,
    admissionNumber: `ADM-2025-${num}`,
    fullName: `Scholar Candidate ${i + 1}`,
    grade: i < 20 ? 'Grade 9' : i < 50 ? 'Grade 10' : 'Grade 11',
    section: i % 2 === 0 ? 'Section A' : 'Section B',
    term1Results: {
      physicsMarks: p,
      chemistryMarks: c,
      mathematicsMarks: m,
      englishMarks: e,
      computerScienceMarks: cs,
      totalObtained: tot,
      maxTotal: 500,
      termGPA: gpa,
    },
    attendanceSummary: {
      totalWorkingDays: 90,
      daysPresent: 82 + (i % 8),
      daysAbsent: 90 - (82 + (i % 8)),
      daysLate: i % 4,
      percentage: Number(((82 + (i % 8)) / 90 * 100).toFixed(1)),
    },
    guardianProfile: {
      fatherName: `Parent Father ${i + 1}`,
      motherName: `Parent Mother ${i + 1}`,
      emergencyPhone: `+1 (555) 400-${num}`,
      emailAddress: `guardian.${num}@example.com`,
    },
  };
});
