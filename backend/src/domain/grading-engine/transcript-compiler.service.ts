import { Injectable, Logger } from '@nestjs/common';

export interface TermGradeSummary {
  termName: string;
  academicYear: string;
  subjects: Array<{
    code: string;
    name: string;
    creditHours: number;
    marksObtained: number;
    maxMarks: number;
    letterGrade: string;
    gradePoint: number;
    remarks: string;
  }>;
  termGPA: number;
  attendancePercent: number;
}

export interface OfficialTranscript {
  transcriptId: string;
  studentId: string;
  studentFullName: string;
  admissionNumber: string;
  dateOfBirth: string;
  graduationYear: string;
  terms: TermGradeSummary[];
  cumulativeGPA: number;
  totalCreditsEarned: number;
  classRank: number;
  cohortSize: number;
  academicHonors: string[];
  principalSignatureMetadata: {
    signedBy: string;
    signingDate: string;
    verificationHash: string;
  };
}

@Injectable()
export class TranscriptCompilerService {
  private readonly logger = new Logger(TranscriptCompilerService.name);

  public compileTranscript(
    student: { id: string; name: string; admissionNo: string; dob: string; graduationYear: string },
    termSummaries: TermGradeSummary[],
    cohortRankings: Array<{ studentId: string; cumulativeGPA: number }>
  ): OfficialTranscript {
    let totalQualityPoints = 0;
    let totalCredits = 0;

    for (const term of termSummaries) {
      for (const subj of term.subjects) {
        totalCredits += subj.creditHours;
        totalQualityPoints += (subj.gradePoint * subj.creditHours);
      }
    }

    const cumulativeGPA = totalCredits > 0 ? Number((totalQualityPoints / totalCredits).toFixed(2)) : 0;

    const sortedCohort = [...cohortRankings].sort((a, b) => b.cumulativeGPA - a.cumulativeGPA);
    const rankIndex = sortedCohort.findIndex(c => c.studentId === student.id);
    const classRank = rankIndex !== -1 ? rankIndex + 1 : 1;

    const academicHonors: string[] = [];
    if (cumulativeGPA >= 3.9) academicHonors.push('Summa Cum Laude (Highest Distinction)');
    else if (cumulativeGPA >= 3.75) academicHonors.push('Magna Cum Laude (High Honors)');
    else if (cumulativeGPA >= 3.5) academicHonors.push('Cum Laude (Honor Roll)');

    const verificationHash = `GIS-TRX-${student.admissionNo}-${Date.now().toString(36).toUpperCase()}`;

    return {
      transcriptId: `TRX-${student.id}`,
      studentId: student.id,
      studentFullName: student.name,
      admissionNumber: student.admissionNo,
      dateOfBirth: student.dob,
      graduationYear: student.graduationYear,
      terms: termSummaries,
      cumulativeGPA,
      totalCreditsEarned: totalCredits,
      classRank,
      cohortSize: cohortRankings.length,
      academicHonors,
      principalSignatureMetadata: {
        signedBy: 'Dr. Arthur Vance, Principal & Head of Institution',
        signingDate: new Date().toISOString().split('T')[0],
        verificationHash,
      },
    };
  }
}