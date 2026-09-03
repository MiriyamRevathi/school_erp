export interface StudentRecord {
  id: string;
  name: string;
  rollNumber: string;
  grade: string;
  section: string;
  attendanceRate: number;
  term1GPA: number;
  term2GPA: number;
  cumulativeGPA: number;
  totalFeeDue: number;
  feePaid: number;
  feeStatus: 'PAID' | 'PARTIAL' | 'OVERDUE';
}

export interface AnalyticsSummary {
  totalEnrollment: number;
  overallAttendanceAverage: number;
  honorRollCount: number;
  atRiskStudentCount: number;
  totalRevenueProjected: number;
  totalRevenueCollected: number;
  collectionEfficiencyPercent: number;
}

export class EnterpriseSchoolCalculator {
  public static computeSummary(students: StudentRecord[]): AnalyticsSummary {
    if (students.length === 0) {
      return {
        totalEnrollment: 0,
        overallAttendanceAverage: 0,
        honorRollCount: 0,
        atRiskStudentCount: 0,
        totalRevenueProjected: 0,
        totalRevenueCollected: 0,
        collectionEfficiencyPercent: 0,
      };
    }

    const totalEnrollment = students.length;
    const totalAttendance = students.reduce((acc, s) => acc + s.attendanceRate, 0);
    const overallAttendanceAverage = Number((totalAttendance / totalEnrollment).toFixed(1));

    const honorRollCount = students.filter(s => s.cumulativeGPA >= 3.75).length;
    const atRiskStudentCount = students.filter(s => s.attendanceRate < 85 || s.cumulativeGPA < 2.0).length;

    const totalRevenueProjected = students.reduce((acc, s) => acc + s.totalFeeDue, 0);
    const totalRevenueCollected = students.reduce((acc, s) => acc + s.feePaid, 0);
    const collectionEfficiencyPercent = totalRevenueProjected > 0
      ? Number(((totalRevenueCollected / totalRevenueProjected) * 100).toFixed(1))
      : 100;

    return {
      totalEnrollment,
      overallAttendanceAverage,
      honorRollCount,
      atRiskStudentCount,
      totalRevenueProjected,
      totalRevenueCollected,
      collectionEfficiencyPercent,
    };
  }

  public static rankStudents(students: StudentRecord[]): Array<StudentRecord & { classRank: number }> {
    const sorted = [...students].sort((a, b) => b.cumulativeGPA - a.cumulativeGPA);
    return sorted.map((student, index) => ({
      ...student,
      classRank: index + 1,
    }));
  }

  public static formatCurrency(amount: number, currency: string = 'USD'): string {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency,
      minimumFractionDigits: 0,
    }).format(amount);
  }
}