import { Injectable, Logger } from '@nestjs/common';

export interface ScoreItem {
  studentId: string;
  studentName: string;
  subjectCode: string;
  subjectName: string;
  rawScore: number;
  maxScore: number;
  weightagePercent: number;
  creditHours: number;
}

export interface GradeScaleResult {
  letterGrade: string;
  gradePoint: number;
  percentage: number;
  honorsBonus: number;
  isPassing: boolean;
  performanceBand: 'DISTINCTION' | 'MERIT' | 'PASS' | 'REMEDIAL';
}

export interface AcademicAnalytics {
  meanScore: number;
  medianScore: number;
  standardDeviation: number;
  highestScore: number;
  lowestScore: number;
  passPercentage: number;
  gradeDistribution: Record<string, number>;
  zScores: Record<string, number>;
}

@Injectable()
export class GradingEngineService {
  private readonly logger = new Logger(GradingEngineService.name);

  public calculateGPA(scores: ScoreItem[], scale: '4.0' | 'CBSE_10' | 'PERCENTAGE' = '4.0'): {
    cumulativeGPA: number;
    totalCredits: number;
    totalQualityPoints: number;
    subjectGrades: Array<ScoreItem & GradeScaleResult>;
  } {
    let totalCredits = 0;
    let totalQualityPoints = 0;

    const subjectGrades = scores.map(item => {
      const percentage = (item.rawScore / item.maxScore) * 100;
      const gradeResult = this.mapScoreToGrade(percentage, scale);
      
      const weightedGradePoint = gradeResult.gradePoint * item.creditHours;
      totalCredits += item.creditHours;
      totalQualityPoints += weightedGradePoint;

      return {
        ...item,
        ...gradeResult,
      };
    });

    const cumulativeGPA = totalCredits > 0 ? Number((totalQualityPoints / totalCredits).toFixed(2)) : 0;

    return {
      cumulativeGPA,
      totalCredits,
      totalQualityPoints,
      subjectGrades,
    };
  }

  public calculateBatchAnalytics(scores: number[]): AcademicAnalytics {
    if (scores.length === 0) {
      return {
        meanScore: 0,
        medianScore: 0,
        standardDeviation: 0,
        highestScore: 0,
        lowestScore: 0,
        passPercentage: 0,
        gradeDistribution: {},
        zScores: {},
      };
    }

    const n = scores.length;
    const sum = scores.reduce((a, b) => a + b, 0);
    const mean = sum / n;

    const sorted = [...scores].sort((a, b) => a - b);
    const median = n % 2 === 0 ? (sorted[n / 2 - 1] + sorted[n / 2]) / 2 : sorted[Math.floor(n / 2)];

    const variance = scores.reduce((acc, val) => acc + Math.pow(val - mean, 2), 0) / n;
    const standardDeviation = Math.sqrt(variance);

    const highest = Math.max(...scores);
    const lowest = Math.min(...scores);
    const passingCount = scores.filter(s => s >= 40).length;
    const passPercentage = Number(((passingCount / n) * 100).toFixed(1));

    const distribution: Record<string, number> = { 'A+': 0, 'A': 0, 'B': 0, 'C': 0, 'D': 0, 'F': 0 };
    const zScores: Record<string, number> = {};

    scores.forEach((s, idx) => {
      if (s >= 90) distribution['A+']++;
      else if (s >= 80) distribution['A']++;
      else if (s >= 70) distribution['B']++;
      else if (s >= 60) distribution['C']++;
      else if (s >= 40) distribution['D']++;
      else distribution['F']++;

      zScores[`student_${idx}`] = standardDeviation > 0 ? Number(((s - mean) / standardDeviation).toFixed(2)) : 0;
    });

    return {
      meanScore: Number(mean.toFixed(2)),
      medianScore: Number(median.toFixed(2)),
      standardDeviation: Number(standardDeviation.toFixed(2)),
      highestScore: highest,
      lowestScore: lowest,
      passPercentage,
      gradeDistribution: distribution,
      zScores,
    };
  }

  private mapScoreToGrade(percentage: number, scale: string): GradeScaleResult {
    if (scale === '4.0') {
      if (percentage >= 93) return { letterGrade: 'A', gradePoint: 4.0, percentage, honorsBonus: 0, isPassing: true, performanceBand: 'DISTINCTION' };
      if (percentage >= 90) return { letterGrade: 'A-', gradePoint: 3.7, percentage, honorsBonus: 0, isPassing: true, performanceBand: 'DISTINCTION' };
      if (percentage >= 87) return { letterGrade: 'B+', gradePoint: 3.3, percentage, honorsBonus: 0, isPassing: true, performanceBand: 'MERIT' };
      if (percentage >= 83) return { letterGrade: 'B', gradePoint: 3.0, percentage, honorsBonus: 0, isPassing: true, performanceBand: 'MERIT' };
      if (percentage >= 80) return { letterGrade: 'B-', gradePoint: 2.7, percentage, honorsBonus: 0, isPassing: true, performanceBand: 'MERIT' };
      if (percentage >= 75) return { letterGrade: 'C+', gradePoint: 2.3, percentage, honorsBonus: 0, isPassing: true, performanceBand: 'PASS' };
      if (percentage >= 70) return { letterGrade: 'C', gradePoint: 2.0, percentage, honorsBonus: 0, isPassing: true, performanceBand: 'PASS' };
      if (percentage >= 60) return { letterGrade: 'D', gradePoint: 1.0, percentage, honorsBonus: 0, isPassing: true, performanceBand: 'PASS' };
      return { letterGrade: 'F', gradePoint: 0.0, percentage, honorsBonus: 0, isPassing: false, performanceBand: 'REMEDIAL' };
    }

    // CBSE 10 Point Scale
    if (percentage >= 91) return { letterGrade: 'A1', gradePoint: 10.0, percentage, honorsBonus: 0, isPassing: true, performanceBand: 'DISTINCTION' };
    if (percentage >= 81) return { letterGrade: 'A2', gradePoint: 9.0, percentage, honorsBonus: 0, isPassing: true, performanceBand: 'DISTINCTION' };
    if (percentage >= 71) return { letterGrade: 'B1', gradePoint: 8.0, percentage, honorsBonus: 0, isPassing: true, performanceBand: 'MERIT' };
    if (percentage >= 61) return { letterGrade: 'B2', gradePoint: 7.0, percentage, honorsBonus: 0, isPassing: true, performanceBand: 'MERIT' };
    if (percentage >= 51) return { letterGrade: 'C1', gradePoint: 6.0, percentage, honorsBonus: 0, isPassing: true, performanceBand: 'PASS' };
    if (percentage >= 41) return { letterGrade: 'C2', gradePoint: 5.0, percentage, honorsBonus: 0, isPassing: true, performanceBand: 'PASS' };
    if (percentage >= 33) return { letterGrade: 'D', gradePoint: 4.0, percentage, honorsBonus: 0, isPassing: true, performanceBand: 'PASS' };
    return { letterGrade: 'E', gradePoint: 0.0, percentage, honorsBonus: 0, isPassing: false, performanceBand: 'REMEDIAL' };
  }
}