import { Injectable, Logger } from '@nestjs/common';

export interface LearningObjective {
  id: string;
  code: string;
  description: string;
  bloomTaxonomyLevel: 'REMEMBER' | 'UNDERSTAND' | 'APPLY' | 'ANALYZE' | 'EVALUATE' | 'CREATE';
  weightagePercentage: number;
  prerequisites: string[];
}

export interface UnitPlan {
  unitId: string;
  unitNumber: number;
  unitTitle: string;
  estimatedTeachingHours: number;
  objectives: LearningObjective[];
  formativeAssessments: string[];
  summativeProjectDescription: string;
  requiredResources: string[];
}

export interface CourseSyllabus {
  courseCode: string;
  courseTitle: string;
  department: string;
  gradeLevel: string;
  academicYear: string;
  totalInstructionalHours: number;
  units: UnitPlan[];
  gradingRubric: {
    continuousAssessmentPercent: number;
    practicalLabPercent: number;
    midTermExamPercent: number;
    finalTermExamPercent: number;
  };
}

@Injectable()
export class CurriculumRubricsService {
  private readonly logger = new Logger(CurriculumRubricsService.name);

  public evaluateBloomDistribution(syllabus: CourseSyllabus): {
    distribution: Record<string, number>;
    isBalanced: boolean;
    recommendations: string[];
  } {
    const counts: Record<string, number> = {
      REMEMBER: 0,
      UNDERSTAND: 0,
      APPLY: 0,
      ANALYZE: 0,
      EVALUATE: 0,
      CREATE: 0,
    };

    let totalObjectives = 0;
    for (const unit of syllabus.units) {
      for (const obj of unit.objectives) {
        counts[obj.bloomTaxonomyLevel]++;
        totalObjectives++;
      }
    }

    const percentages: Record<string, number> = {};
    for (const [lvl, cnt] of Object.entries(counts)) {
      percentages[lvl] = totalObjectives > 0 ? Number(((cnt / totalObjectives) * 100).toFixed(1)) : 0;
    }

    const higherOrderPercent = (percentages['ANALYZE'] || 0) + (percentages['EVALUATE'] || 0) + (percentages['CREATE'] || 0);
    const isBalanced = higherOrderPercent >= 35;

    const recommendations: string[] = [];
    if (!isBalanced) {
      recommendations.push('Incorporate more critical thinking, analytical inquiry, and project creation tasks.');
    }
    if ((percentages['REMEMBER'] || 0) > 40) {
      recommendations.push('Reduce pure rote memorization objectives in favor of hands-on application.');
    }

    return {
      distribution: percentages,
      isBalanced,
      recommendations,
    };
  }

  public validateTotalTeachingHours(syllabus: CourseSyllabus): { isValid: boolean; allocatedHours: number; plannedHours: number } {
    const plannedHours = syllabus.units.reduce((sum, u) => sum + u.estimatedTeachingHours, 0);
    return {
      isValid: plannedHours <= syllabus.totalInstructionalHours,
      allocatedHours: syllabus.totalInstructionalHours,
      plannedHours,
    };
  }
}