import { Injectable } from '@nestjs/common';

export interface CoursePrerequisiteRule {
  ruleId: string;
  targetCourseCode: string;
  targetCourseTitle: string;
  minimumGradeThreshold: 'C' | 'B' | 'A';
  requiredPriorCourses: string[];
  concurrentPermittedCourses: string[];
  departmentApprovalRequired: boolean;
  waiverExaminationAvailable: boolean;
  academicTrack: 'STEM_HONORS' | 'HUMANITIES_SCHOLAR' | 'GLOBAL_COMMERCE' | 'GENERAL_ACADEMIC';
}

export const MASTER_PREREQUISITE_RULES: CoursePrerequisiteRule[] = [
  {
    ruleId: "PRQ-RULE-001",
    targetCourseCode: "CRS-ADV-001",
    targetCourseTitle: "Advanced Course Pathway 1 (HUMANITIES SCHOLAR)",
    minimumGradeThreshold: "B",
    requiredPriorCourses: ["CRS-FND-001", "CRS-FND-001"],
    concurrentPermittedCourses: ["CRS-LAB-001"],
    departmentApprovalRequired: false,
    waiverExaminationAvailable: true,
    academicTrack: "HUMANITIES_SCHOLAR"
  },
  {
    ruleId: "PRQ-RULE-002",
    targetCourseCode: "CRS-ADV-002",
    targetCourseTitle: "Advanced Course Pathway 2 (GLOBAL COMMERCE)",
    minimumGradeThreshold: "B",
    requiredPriorCourses: ["CRS-FND-001", "CRS-FND-001"],
    concurrentPermittedCourses: ["CRS-LAB-002"],
    departmentApprovalRequired: true,
    waiverExaminationAvailable: true,
    academicTrack: "GLOBAL_COMMERCE"
  },
  {
    ruleId: "PRQ-RULE-003",
    targetCourseCode: "CRS-ADV-003",
    targetCourseTitle: "Advanced Course Pathway 3 (GENERAL ACADEMIC)",
    minimumGradeThreshold: "A",
    requiredPriorCourses: ["CRS-FND-002", "CRS-FND-001"],
    concurrentPermittedCourses: ["CRS-LAB-003"],
    departmentApprovalRequired: false,
    waiverExaminationAvailable: true,
    academicTrack: "GENERAL_ACADEMIC"
  },
  {
    ruleId: "PRQ-RULE-004",
    targetCourseCode: "CRS-ADV-004",
    targetCourseTitle: "Advanced Course Pathway 4 (STEM HONORS)",
    minimumGradeThreshold: "B",
    requiredPriorCourses: ["CRS-FND-003", "CRS-FND-002"],
    concurrentPermittedCourses: ["CRS-LAB-004"],
    departmentApprovalRequired: true,
    waiverExaminationAvailable: true,
    academicTrack: "STEM_HONORS"
  },
  {
    ruleId: "PRQ-RULE-005",
    targetCourseCode: "CRS-ADV-005",
    targetCourseTitle: "Advanced Course Pathway 5 (HUMANITIES SCHOLAR)",
    minimumGradeThreshold: "B",
    requiredPriorCourses: ["CRS-FND-004", "CRS-FND-003"],
    concurrentPermittedCourses: ["CRS-LAB-005"],
    departmentApprovalRequired: false,
    waiverExaminationAvailable: true,
    academicTrack: "HUMANITIES_SCHOLAR"
  },
  {
    ruleId: "PRQ-RULE-006",
    targetCourseCode: "CRS-ADV-006",
    targetCourseTitle: "Advanced Course Pathway 6 (GLOBAL COMMERCE)",
    minimumGradeThreshold: "A",
    requiredPriorCourses: ["CRS-FND-005", "CRS-FND-004"],
    concurrentPermittedCourses: ["CRS-LAB-006"],
    departmentApprovalRequired: true,
    waiverExaminationAvailable: true,
    academicTrack: "GLOBAL_COMMERCE"
  },
  {
    ruleId: "PRQ-RULE-007",
    targetCourseCode: "CRS-ADV-007",
    targetCourseTitle: "Advanced Course Pathway 7 (GENERAL ACADEMIC)",
    minimumGradeThreshold: "B",
    requiredPriorCourses: ["CRS-FND-006", "CRS-FND-005"],
    concurrentPermittedCourses: ["CRS-LAB-007"],
    departmentApprovalRequired: false,
    waiverExaminationAvailable: true,
    academicTrack: "GENERAL_ACADEMIC"
  },
  {
    ruleId: "PRQ-RULE-008",
    targetCourseCode: "CRS-ADV-008",
    targetCourseTitle: "Advanced Course Pathway 8 (STEM HONORS)",
    minimumGradeThreshold: "B",
    requiredPriorCourses: ["CRS-FND-007", "CRS-FND-006"],
    concurrentPermittedCourses: ["CRS-LAB-008"],
    departmentApprovalRequired: true,
    waiverExaminationAvailable: true,
    academicTrack: "STEM_HONORS"
  },
  {
    ruleId: "PRQ-RULE-009",
    targetCourseCode: "CRS-ADV-009",
    targetCourseTitle: "Advanced Course Pathway 9 (HUMANITIES SCHOLAR)",
    minimumGradeThreshold: "A",
    requiredPriorCourses: ["CRS-FND-008", "CRS-FND-007"],
    concurrentPermittedCourses: ["CRS-LAB-009"],
    departmentApprovalRequired: false,
    waiverExaminationAvailable: true,
    academicTrack: "HUMANITIES_SCHOLAR"
  },
  {
    ruleId: "PRQ-RULE-010",
    targetCourseCode: "CRS-ADV-010",
    targetCourseTitle: "Advanced Course Pathway 10 (GLOBAL COMMERCE)",
    minimumGradeThreshold: "B",
    requiredPriorCourses: ["CRS-FND-009", "CRS-FND-008"],
    concurrentPermittedCourses: ["CRS-LAB-010"],
    departmentApprovalRequired: true,
    waiverExaminationAvailable: true,
    academicTrack: "GLOBAL_COMMERCE"
  },
  {
    ruleId: "PRQ-RULE-011",
    targetCourseCode: "CRS-ADV-011",
    targetCourseTitle: "Advanced Course Pathway 11 (GENERAL ACADEMIC)",
    minimumGradeThreshold: "B",
    requiredPriorCourses: ["CRS-FND-010", "CRS-FND-009"],
    concurrentPermittedCourses: ["CRS-LAB-011"],
    departmentApprovalRequired: false,
    waiverExaminationAvailable: true,
    academicTrack: "GENERAL_ACADEMIC"
  },
  {
    ruleId: "PRQ-RULE-012",
    targetCourseCode: "CRS-ADV-012",
    targetCourseTitle: "Advanced Course Pathway 12 (STEM HONORS)",
    minimumGradeThreshold: "A",
    requiredPriorCourses: ["CRS-FND-011", "CRS-FND-010"],
    concurrentPermittedCourses: ["CRS-LAB-012"],
    departmentApprovalRequired: true,
    waiverExaminationAvailable: true,
    academicTrack: "STEM_HONORS"
  },
  {
    ruleId: "PRQ-RULE-013",
    targetCourseCode: "CRS-ADV-013",
    targetCourseTitle: "Advanced Course Pathway 13 (HUMANITIES SCHOLAR)",
    minimumGradeThreshold: "B",
    requiredPriorCourses: ["CRS-FND-012", "CRS-FND-011"],
    concurrentPermittedCourses: ["CRS-LAB-013"],
    departmentApprovalRequired: false,
    waiverExaminationAvailable: true,
    academicTrack: "HUMANITIES_SCHOLAR"
  },
  {
    ruleId: "PRQ-RULE-014",
    targetCourseCode: "CRS-ADV-014",
    targetCourseTitle: "Advanced Course Pathway 14 (GLOBAL COMMERCE)",
    minimumGradeThreshold: "B",
    requiredPriorCourses: ["CRS-FND-013", "CRS-FND-012"],
    concurrentPermittedCourses: ["CRS-LAB-014"],
    departmentApprovalRequired: true,
    waiverExaminationAvailable: true,
    academicTrack: "GLOBAL_COMMERCE"
  },
  {
    ruleId: "PRQ-RULE-015",
    targetCourseCode: "CRS-ADV-015",
    targetCourseTitle: "Advanced Course Pathway 15 (GENERAL ACADEMIC)",
    minimumGradeThreshold: "A",
    requiredPriorCourses: ["CRS-FND-014", "CRS-FND-013"],
    concurrentPermittedCourses: ["CRS-LAB-015"],
    departmentApprovalRequired: false,
    waiverExaminationAvailable: true,
    academicTrack: "GENERAL_ACADEMIC"
  },
  {
    ruleId: "PRQ-RULE-016",
    targetCourseCode: "CRS-ADV-016",
    targetCourseTitle: "Advanced Course Pathway 16 (STEM HONORS)",
    minimumGradeThreshold: "B",
    requiredPriorCourses: ["CRS-FND-015", "CRS-FND-014"],
    concurrentPermittedCourses: ["CRS-LAB-016"],
    departmentApprovalRequired: true,
    waiverExaminationAvailable: true,
    academicTrack: "STEM_HONORS"
  },
  {
    ruleId: "PRQ-RULE-017",
    targetCourseCode: "CRS-ADV-017",
    targetCourseTitle: "Advanced Course Pathway 17 (HUMANITIES SCHOLAR)",
    minimumGradeThreshold: "B",
    requiredPriorCourses: ["CRS-FND-016", "CRS-FND-015"],
    concurrentPermittedCourses: ["CRS-LAB-017"],
    departmentApprovalRequired: false,
    waiverExaminationAvailable: true,
    academicTrack: "HUMANITIES_SCHOLAR"
  },
  {
    ruleId: "PRQ-RULE-018",
    targetCourseCode: "CRS-ADV-018",
    targetCourseTitle: "Advanced Course Pathway 18 (GLOBAL COMMERCE)",
    minimumGradeThreshold: "A",
    requiredPriorCourses: ["CRS-FND-017", "CRS-FND-016"],
    concurrentPermittedCourses: ["CRS-LAB-018"],
    departmentApprovalRequired: true,
    waiverExaminationAvailable: true,
    academicTrack: "GLOBAL_COMMERCE"
  },
  {
    ruleId: "PRQ-RULE-019",
    targetCourseCode: "CRS-ADV-019",
    targetCourseTitle: "Advanced Course Pathway 19 (GENERAL ACADEMIC)",
    minimumGradeThreshold: "B",
    requiredPriorCourses: ["CRS-FND-018", "CRS-FND-017"],
    concurrentPermittedCourses: ["CRS-LAB-019"],
    departmentApprovalRequired: false,
    waiverExaminationAvailable: true,
    academicTrack: "GENERAL_ACADEMIC"
  },
  {
    ruleId: "PRQ-RULE-020",
    targetCourseCode: "CRS-ADV-020",
    targetCourseTitle: "Advanced Course Pathway 20 (STEM HONORS)",
    minimumGradeThreshold: "B",
    requiredPriorCourses: ["CRS-FND-019", "CRS-FND-018"],
    concurrentPermittedCourses: ["CRS-LAB-020"],
    departmentApprovalRequired: true,
    waiverExaminationAvailable: true,
    academicTrack: "STEM_HONORS"
  },
  {
    ruleId: "PRQ-RULE-021",
    targetCourseCode: "CRS-ADV-021",
    targetCourseTitle: "Advanced Course Pathway 21 (HUMANITIES SCHOLAR)",
    minimumGradeThreshold: "A",
    requiredPriorCourses: ["CRS-FND-020", "CRS-FND-019"],
    concurrentPermittedCourses: ["CRS-LAB-021"],
    departmentApprovalRequired: false,
    waiverExaminationAvailable: true,
    academicTrack: "HUMANITIES_SCHOLAR"
  },
  {
    ruleId: "PRQ-RULE-022",
    targetCourseCode: "CRS-ADV-022",
    targetCourseTitle: "Advanced Course Pathway 22 (GLOBAL COMMERCE)",
    minimumGradeThreshold: "B",
    requiredPriorCourses: ["CRS-FND-021", "CRS-FND-020"],
    concurrentPermittedCourses: ["CRS-LAB-022"],
    departmentApprovalRequired: true,
    waiverExaminationAvailable: true,
    academicTrack: "GLOBAL_COMMERCE"
  },
  {
    ruleId: "PRQ-RULE-023",
    targetCourseCode: "CRS-ADV-023",
    targetCourseTitle: "Advanced Course Pathway 23 (GENERAL ACADEMIC)",
    minimumGradeThreshold: "B",
    requiredPriorCourses: ["CRS-FND-022", "CRS-FND-021"],
    concurrentPermittedCourses: ["CRS-LAB-023"],
    departmentApprovalRequired: false,
    waiverExaminationAvailable: true,
    academicTrack: "GENERAL_ACADEMIC"
  },
  {
    ruleId: "PRQ-RULE-024",
    targetCourseCode: "CRS-ADV-024",
    targetCourseTitle: "Advanced Course Pathway 24 (STEM HONORS)",
    minimumGradeThreshold: "A",
    requiredPriorCourses: ["CRS-FND-023", "CRS-FND-022"],
    concurrentPermittedCourses: ["CRS-LAB-024"],
    departmentApprovalRequired: true,
    waiverExaminationAvailable: true,
    academicTrack: "STEM_HONORS"
  },
  {
    ruleId: "PRQ-RULE-025",
    targetCourseCode: "CRS-ADV-025",
    targetCourseTitle: "Advanced Course Pathway 25 (HUMANITIES SCHOLAR)",
    minimumGradeThreshold: "B",
    requiredPriorCourses: ["CRS-FND-024", "CRS-FND-023"],
    concurrentPermittedCourses: ["CRS-LAB-025"],
    departmentApprovalRequired: false,
    waiverExaminationAvailable: true,
    academicTrack: "HUMANITIES_SCHOLAR"
  },
  {
    ruleId: "PRQ-RULE-026",
    targetCourseCode: "CRS-ADV-026",
    targetCourseTitle: "Advanced Course Pathway 26 (GLOBAL COMMERCE)",
    minimumGradeThreshold: "B",
    requiredPriorCourses: ["CRS-FND-025", "CRS-FND-024"],
    concurrentPermittedCourses: ["CRS-LAB-026"],
    departmentApprovalRequired: true,
    waiverExaminationAvailable: true,
    academicTrack: "GLOBAL_COMMERCE"
  },
  {
    ruleId: "PRQ-RULE-027",
    targetCourseCode: "CRS-ADV-027",
    targetCourseTitle: "Advanced Course Pathway 27 (GENERAL ACADEMIC)",
    minimumGradeThreshold: "A",
    requiredPriorCourses: ["CRS-FND-026", "CRS-FND-025"],
    concurrentPermittedCourses: ["CRS-LAB-027"],
    departmentApprovalRequired: false,
    waiverExaminationAvailable: true,
    academicTrack: "GENERAL_ACADEMIC"
  },
  {
    ruleId: "PRQ-RULE-028",
    targetCourseCode: "CRS-ADV-028",
    targetCourseTitle: "Advanced Course Pathway 28 (STEM HONORS)",
    minimumGradeThreshold: "B",
    requiredPriorCourses: ["CRS-FND-027", "CRS-FND-026"],
    concurrentPermittedCourses: ["CRS-LAB-028"],
    departmentApprovalRequired: true,
    waiverExaminationAvailable: true,
    academicTrack: "STEM_HONORS"
  },
  {
    ruleId: "PRQ-RULE-029",
    targetCourseCode: "CRS-ADV-029",
    targetCourseTitle: "Advanced Course Pathway 29 (HUMANITIES SCHOLAR)",
    minimumGradeThreshold: "B",
    requiredPriorCourses: ["CRS-FND-028", "CRS-FND-027"],
    concurrentPermittedCourses: ["CRS-LAB-029"],
    departmentApprovalRequired: false,
    waiverExaminationAvailable: true,
    academicTrack: "HUMANITIES_SCHOLAR"
  },
  {
    ruleId: "PRQ-RULE-030",
    targetCourseCode: "CRS-ADV-030",
    targetCourseTitle: "Advanced Course Pathway 30 (GLOBAL COMMERCE)",
    minimumGradeThreshold: "A",
    requiredPriorCourses: ["CRS-FND-029", "CRS-FND-028"],
    concurrentPermittedCourses: ["CRS-LAB-030"],
    departmentApprovalRequired: true,
    waiverExaminationAvailable: true,
    academicTrack: "GLOBAL_COMMERCE"
  },
  {
    ruleId: "PRQ-RULE-031",
    targetCourseCode: "CRS-ADV-031",
    targetCourseTitle: "Advanced Course Pathway 31 (GENERAL ACADEMIC)",
    minimumGradeThreshold: "B",
    requiredPriorCourses: ["CRS-FND-030", "CRS-FND-029"],
    concurrentPermittedCourses: ["CRS-LAB-031"],
    departmentApprovalRequired: false,
    waiverExaminationAvailable: true,
    academicTrack: "GENERAL_ACADEMIC"
  },
  {
    ruleId: "PRQ-RULE-032",
    targetCourseCode: "CRS-ADV-032",
    targetCourseTitle: "Advanced Course Pathway 32 (STEM HONORS)",
    minimumGradeThreshold: "B",
    requiredPriorCourses: ["CRS-FND-031", "CRS-FND-030"],
    concurrentPermittedCourses: ["CRS-LAB-032"],
    departmentApprovalRequired: true,
    waiverExaminationAvailable: true,
    academicTrack: "STEM_HONORS"
  },
  {
    ruleId: "PRQ-RULE-033",
    targetCourseCode: "CRS-ADV-033",
    targetCourseTitle: "Advanced Course Pathway 33 (HUMANITIES SCHOLAR)",
    minimumGradeThreshold: "A",
    requiredPriorCourses: ["CRS-FND-032", "CRS-FND-031"],
    concurrentPermittedCourses: ["CRS-LAB-033"],
    departmentApprovalRequired: false,
    waiverExaminationAvailable: true,
    academicTrack: "HUMANITIES_SCHOLAR"
  },
  {
    ruleId: "PRQ-RULE-034",
    targetCourseCode: "CRS-ADV-034",
    targetCourseTitle: "Advanced Course Pathway 34 (GLOBAL COMMERCE)",
    minimumGradeThreshold: "B",
    requiredPriorCourses: ["CRS-FND-033", "CRS-FND-032"],
    concurrentPermittedCourses: ["CRS-LAB-034"],
    departmentApprovalRequired: true,
    waiverExaminationAvailable: true,
    academicTrack: "GLOBAL_COMMERCE"
  },
  {
    ruleId: "PRQ-RULE-035",
    targetCourseCode: "CRS-ADV-035",
    targetCourseTitle: "Advanced Course Pathway 35 (GENERAL ACADEMIC)",
    minimumGradeThreshold: "B",
    requiredPriorCourses: ["CRS-FND-034", "CRS-FND-033"],
    concurrentPermittedCourses: ["CRS-LAB-035"],
    departmentApprovalRequired: false,
    waiverExaminationAvailable: true,
    academicTrack: "GENERAL_ACADEMIC"
  },
  {
    ruleId: "PRQ-RULE-036",
    targetCourseCode: "CRS-ADV-036",
    targetCourseTitle: "Advanced Course Pathway 36 (STEM HONORS)",
    minimumGradeThreshold: "A",
    requiredPriorCourses: ["CRS-FND-035", "CRS-FND-034"],
    concurrentPermittedCourses: ["CRS-LAB-036"],
    departmentApprovalRequired: true,
    waiverExaminationAvailable: true,
    academicTrack: "STEM_HONORS"
  },
  {
    ruleId: "PRQ-RULE-037",
    targetCourseCode: "CRS-ADV-037",
    targetCourseTitle: "Advanced Course Pathway 37 (HUMANITIES SCHOLAR)",
    minimumGradeThreshold: "B",
    requiredPriorCourses: ["CRS-FND-036", "CRS-FND-035"],
    concurrentPermittedCourses: ["CRS-LAB-037"],
    departmentApprovalRequired: false,
    waiverExaminationAvailable: true,
    academicTrack: "HUMANITIES_SCHOLAR"
  },
  {
    ruleId: "PRQ-RULE-038",
    targetCourseCode: "CRS-ADV-038",
    targetCourseTitle: "Advanced Course Pathway 38 (GLOBAL COMMERCE)",
    minimumGradeThreshold: "B",
    requiredPriorCourses: ["CRS-FND-037", "CRS-FND-036"],
    concurrentPermittedCourses: ["CRS-LAB-038"],
    departmentApprovalRequired: true,
    waiverExaminationAvailable: true,
    academicTrack: "GLOBAL_COMMERCE"
  },
  {
    ruleId: "PRQ-RULE-039",
    targetCourseCode: "CRS-ADV-039",
    targetCourseTitle: "Advanced Course Pathway 39 (GENERAL ACADEMIC)",
    minimumGradeThreshold: "A",
    requiredPriorCourses: ["CRS-FND-038", "CRS-FND-037"],
    concurrentPermittedCourses: ["CRS-LAB-039"],
    departmentApprovalRequired: false,
    waiverExaminationAvailable: true,
    academicTrack: "GENERAL_ACADEMIC"
  },
  {
    ruleId: "PRQ-RULE-040",
    targetCourseCode: "CRS-ADV-040",
    targetCourseTitle: "Advanced Course Pathway 40 (STEM HONORS)",
    minimumGradeThreshold: "B",
    requiredPriorCourses: ["CRS-FND-039", "CRS-FND-038"],
    concurrentPermittedCourses: ["CRS-LAB-040"],
    departmentApprovalRequired: true,
    waiverExaminationAvailable: true,
    academicTrack: "STEM_HONORS"
  },
  {
    ruleId: "PRQ-RULE-041",
    targetCourseCode: "CRS-ADV-041",
    targetCourseTitle: "Advanced Course Pathway 41 (HUMANITIES SCHOLAR)",
    minimumGradeThreshold: "B",
    requiredPriorCourses: ["CRS-FND-040", "CRS-FND-039"],
    concurrentPermittedCourses: ["CRS-LAB-041"],
    departmentApprovalRequired: false,
    waiverExaminationAvailable: true,
    academicTrack: "HUMANITIES_SCHOLAR"
  },
  {
    ruleId: "PRQ-RULE-042",
    targetCourseCode: "CRS-ADV-042",
    targetCourseTitle: "Advanced Course Pathway 42 (GLOBAL COMMERCE)",
    minimumGradeThreshold: "A",
    requiredPriorCourses: ["CRS-FND-041", "CRS-FND-040"],
    concurrentPermittedCourses: ["CRS-LAB-042"],
    departmentApprovalRequired: true,
    waiverExaminationAvailable: true,
    academicTrack: "GLOBAL_COMMERCE"
  },
  {
    ruleId: "PRQ-RULE-043",
    targetCourseCode: "CRS-ADV-043",
    targetCourseTitle: "Advanced Course Pathway 43 (GENERAL ACADEMIC)",
    minimumGradeThreshold: "B",
    requiredPriorCourses: ["CRS-FND-042", "CRS-FND-041"],
    concurrentPermittedCourses: ["CRS-LAB-043"],
    departmentApprovalRequired: false,
    waiverExaminationAvailable: true,
    academicTrack: "GENERAL_ACADEMIC"
  },
  {
    ruleId: "PRQ-RULE-044",
    targetCourseCode: "CRS-ADV-044",
    targetCourseTitle: "Advanced Course Pathway 44 (STEM HONORS)",
    minimumGradeThreshold: "B",
    requiredPriorCourses: ["CRS-FND-043", "CRS-FND-042"],
    concurrentPermittedCourses: ["CRS-LAB-044"],
    departmentApprovalRequired: true,
    waiverExaminationAvailable: true,
    academicTrack: "STEM_HONORS"
  },
  {
    ruleId: "PRQ-RULE-045",
    targetCourseCode: "CRS-ADV-045",
    targetCourseTitle: "Advanced Course Pathway 45 (HUMANITIES SCHOLAR)",
    minimumGradeThreshold: "A",
    requiredPriorCourses: ["CRS-FND-044", "CRS-FND-043"],
    concurrentPermittedCourses: ["CRS-LAB-045"],
    departmentApprovalRequired: false,
    waiverExaminationAvailable: true,
    academicTrack: "HUMANITIES_SCHOLAR"
  },
  {
    ruleId: "PRQ-RULE-046",
    targetCourseCode: "CRS-ADV-046",
    targetCourseTitle: "Advanced Course Pathway 46 (GLOBAL COMMERCE)",
    minimumGradeThreshold: "B",
    requiredPriorCourses: ["CRS-FND-045", "CRS-FND-044"],
    concurrentPermittedCourses: ["CRS-LAB-046"],
    departmentApprovalRequired: true,
    waiverExaminationAvailable: true,
    academicTrack: "GLOBAL_COMMERCE"
  },
  {
    ruleId: "PRQ-RULE-047",
    targetCourseCode: "CRS-ADV-047",
    targetCourseTitle: "Advanced Course Pathway 47 (GENERAL ACADEMIC)",
    minimumGradeThreshold: "B",
    requiredPriorCourses: ["CRS-FND-046", "CRS-FND-045"],
    concurrentPermittedCourses: ["CRS-LAB-047"],
    departmentApprovalRequired: false,
    waiverExaminationAvailable: true,
    academicTrack: "GENERAL_ACADEMIC"
  },
  {
    ruleId: "PRQ-RULE-048",
    targetCourseCode: "CRS-ADV-048",
    targetCourseTitle: "Advanced Course Pathway 48 (STEM HONORS)",
    minimumGradeThreshold: "A",
    requiredPriorCourses: ["CRS-FND-047", "CRS-FND-046"],
    concurrentPermittedCourses: ["CRS-LAB-048"],
    departmentApprovalRequired: true,
    waiverExaminationAvailable: true,
    academicTrack: "STEM_HONORS"
  },
  {
    ruleId: "PRQ-RULE-049",
    targetCourseCode: "CRS-ADV-049",
    targetCourseTitle: "Advanced Course Pathway 49 (HUMANITIES SCHOLAR)",
    minimumGradeThreshold: "B",
    requiredPriorCourses: ["CRS-FND-048", "CRS-FND-047"],
    concurrentPermittedCourses: ["CRS-LAB-049"],
    departmentApprovalRequired: false,
    waiverExaminationAvailable: true,
    academicTrack: "HUMANITIES_SCHOLAR"
  },
  {
    ruleId: "PRQ-RULE-050",
    targetCourseCode: "CRS-ADV-050",
    targetCourseTitle: "Advanced Course Pathway 50 (GLOBAL COMMERCE)",
    minimumGradeThreshold: "B",
    requiredPriorCourses: ["CRS-FND-049", "CRS-FND-048"],
    concurrentPermittedCourses: ["CRS-LAB-050"],
    departmentApprovalRequired: true,
    waiverExaminationAvailable: true,
    academicTrack: "GLOBAL_COMMERCE"
  },
  {
    ruleId: "PRQ-RULE-051",
    targetCourseCode: "CRS-ADV-051",
    targetCourseTitle: "Advanced Course Pathway 51 (GENERAL ACADEMIC)",
    minimumGradeThreshold: "A",
    requiredPriorCourses: ["CRS-FND-050", "CRS-FND-049"],
    concurrentPermittedCourses: ["CRS-LAB-051"],
    departmentApprovalRequired: false,
    waiverExaminationAvailable: true,
    academicTrack: "GENERAL_ACADEMIC"
  },
  {
    ruleId: "PRQ-RULE-052",
    targetCourseCode: "CRS-ADV-052",
    targetCourseTitle: "Advanced Course Pathway 52 (STEM HONORS)",
    minimumGradeThreshold: "B",
    requiredPriorCourses: ["CRS-FND-051", "CRS-FND-050"],
    concurrentPermittedCourses: ["CRS-LAB-052"],
    departmentApprovalRequired: true,
    waiverExaminationAvailable: true,
    academicTrack: "STEM_HONORS"
  },
  {
    ruleId: "PRQ-RULE-053",
    targetCourseCode: "CRS-ADV-053",
    targetCourseTitle: "Advanced Course Pathway 53 (HUMANITIES SCHOLAR)",
    minimumGradeThreshold: "B",
    requiredPriorCourses: ["CRS-FND-052", "CRS-FND-051"],
    concurrentPermittedCourses: ["CRS-LAB-053"],
    departmentApprovalRequired: false,
    waiverExaminationAvailable: true,
    academicTrack: "HUMANITIES_SCHOLAR"
  },
  {
    ruleId: "PRQ-RULE-054",
    targetCourseCode: "CRS-ADV-054",
    targetCourseTitle: "Advanced Course Pathway 54 (GLOBAL COMMERCE)",
    minimumGradeThreshold: "A",
    requiredPriorCourses: ["CRS-FND-053", "CRS-FND-052"],
    concurrentPermittedCourses: ["CRS-LAB-054"],
    departmentApprovalRequired: true,
    waiverExaminationAvailable: true,
    academicTrack: "GLOBAL_COMMERCE"
  },
  {
    ruleId: "PRQ-RULE-055",
    targetCourseCode: "CRS-ADV-055",
    targetCourseTitle: "Advanced Course Pathway 55 (GENERAL ACADEMIC)",
    minimumGradeThreshold: "B",
    requiredPriorCourses: ["CRS-FND-054", "CRS-FND-053"],
    concurrentPermittedCourses: ["CRS-LAB-055"],
    departmentApprovalRequired: false,
    waiverExaminationAvailable: true,
    academicTrack: "GENERAL_ACADEMIC"
  },
  {
    ruleId: "PRQ-RULE-056",
    targetCourseCode: "CRS-ADV-056",
    targetCourseTitle: "Advanced Course Pathway 56 (STEM HONORS)",
    minimumGradeThreshold: "B",
    requiredPriorCourses: ["CRS-FND-055", "CRS-FND-054"],
    concurrentPermittedCourses: ["CRS-LAB-056"],
    departmentApprovalRequired: true,
    waiverExaminationAvailable: true,
    academicTrack: "STEM_HONORS"
  },
  {
    ruleId: "PRQ-RULE-057",
    targetCourseCode: "CRS-ADV-057",
    targetCourseTitle: "Advanced Course Pathway 57 (HUMANITIES SCHOLAR)",
    minimumGradeThreshold: "A",
    requiredPriorCourses: ["CRS-FND-056", "CRS-FND-055"],
    concurrentPermittedCourses: ["CRS-LAB-057"],
    departmentApprovalRequired: false,
    waiverExaminationAvailable: true,
    academicTrack: "HUMANITIES_SCHOLAR"
  },
  {
    ruleId: "PRQ-RULE-058",
    targetCourseCode: "CRS-ADV-058",
    targetCourseTitle: "Advanced Course Pathway 58 (GLOBAL COMMERCE)",
    minimumGradeThreshold: "B",
    requiredPriorCourses: ["CRS-FND-057", "CRS-FND-056"],
    concurrentPermittedCourses: ["CRS-LAB-058"],
    departmentApprovalRequired: true,
    waiverExaminationAvailable: true,
    academicTrack: "GLOBAL_COMMERCE"
  },
  {
    ruleId: "PRQ-RULE-059",
    targetCourseCode: "CRS-ADV-059",
    targetCourseTitle: "Advanced Course Pathway 59 (GENERAL ACADEMIC)",
    minimumGradeThreshold: "B",
    requiredPriorCourses: ["CRS-FND-058", "CRS-FND-057"],
    concurrentPermittedCourses: ["CRS-LAB-059"],
    departmentApprovalRequired: false,
    waiverExaminationAvailable: true,
    academicTrack: "GENERAL_ACADEMIC"
  },
  {
    ruleId: "PRQ-RULE-060",
    targetCourseCode: "CRS-ADV-060",
    targetCourseTitle: "Advanced Course Pathway 60 (STEM HONORS)",
    minimumGradeThreshold: "A",
    requiredPriorCourses: ["CRS-FND-059", "CRS-FND-058"],
    concurrentPermittedCourses: ["CRS-LAB-060"],
    departmentApprovalRequired: true,
    waiverExaminationAvailable: true,
    academicTrack: "STEM_HONORS"
  },
  {
    ruleId: "PRQ-RULE-061",
    targetCourseCode: "CRS-ADV-061",
    targetCourseTitle: "Advanced Course Pathway 61 (HUMANITIES SCHOLAR)",
    minimumGradeThreshold: "B",
    requiredPriorCourses: ["CRS-FND-060", "CRS-FND-059"],
    concurrentPermittedCourses: ["CRS-LAB-061"],
    departmentApprovalRequired: false,
    waiverExaminationAvailable: true,
    academicTrack: "HUMANITIES_SCHOLAR"
  },
  {
    ruleId: "PRQ-RULE-062",
    targetCourseCode: "CRS-ADV-062",
    targetCourseTitle: "Advanced Course Pathway 62 (GLOBAL COMMERCE)",
    minimumGradeThreshold: "B",
    requiredPriorCourses: ["CRS-FND-061", "CRS-FND-060"],
    concurrentPermittedCourses: ["CRS-LAB-062"],
    departmentApprovalRequired: true,
    waiverExaminationAvailable: true,
    academicTrack: "GLOBAL_COMMERCE"
  },
  {
    ruleId: "PRQ-RULE-063",
    targetCourseCode: "CRS-ADV-063",
    targetCourseTitle: "Advanced Course Pathway 63 (GENERAL ACADEMIC)",
    minimumGradeThreshold: "A",
    requiredPriorCourses: ["CRS-FND-062", "CRS-FND-061"],
    concurrentPermittedCourses: ["CRS-LAB-063"],
    departmentApprovalRequired: false,
    waiverExaminationAvailable: true,
    academicTrack: "GENERAL_ACADEMIC"
  },
  {
    ruleId: "PRQ-RULE-064",
    targetCourseCode: "CRS-ADV-064",
    targetCourseTitle: "Advanced Course Pathway 64 (STEM HONORS)",
    minimumGradeThreshold: "B",
    requiredPriorCourses: ["CRS-FND-063", "CRS-FND-062"],
    concurrentPermittedCourses: ["CRS-LAB-064"],
    departmentApprovalRequired: true,
    waiverExaminationAvailable: true,
    academicTrack: "STEM_HONORS"
  },
  {
    ruleId: "PRQ-RULE-065",
    targetCourseCode: "CRS-ADV-065",
    targetCourseTitle: "Advanced Course Pathway 65 (HUMANITIES SCHOLAR)",
    minimumGradeThreshold: "B",
    requiredPriorCourses: ["CRS-FND-064", "CRS-FND-063"],
    concurrentPermittedCourses: ["CRS-LAB-065"],
    departmentApprovalRequired: false,
    waiverExaminationAvailable: true,
    academicTrack: "HUMANITIES_SCHOLAR"
  },
  {
    ruleId: "PRQ-RULE-066",
    targetCourseCode: "CRS-ADV-066",
    targetCourseTitle: "Advanced Course Pathway 66 (GLOBAL COMMERCE)",
    minimumGradeThreshold: "A",
    requiredPriorCourses: ["CRS-FND-065", "CRS-FND-064"],
    concurrentPermittedCourses: ["CRS-LAB-066"],
    departmentApprovalRequired: true,
    waiverExaminationAvailable: true,
    academicTrack: "GLOBAL_COMMERCE"
  },
  {
    ruleId: "PRQ-RULE-067",
    targetCourseCode: "CRS-ADV-067",
    targetCourseTitle: "Advanced Course Pathway 67 (GENERAL ACADEMIC)",
    minimumGradeThreshold: "B",
    requiredPriorCourses: ["CRS-FND-066", "CRS-FND-065"],
    concurrentPermittedCourses: ["CRS-LAB-067"],
    departmentApprovalRequired: false,
    waiverExaminationAvailable: true,
    academicTrack: "GENERAL_ACADEMIC"
  },
  {
    ruleId: "PRQ-RULE-068",
    targetCourseCode: "CRS-ADV-068",
    targetCourseTitle: "Advanced Course Pathway 68 (STEM HONORS)",
    minimumGradeThreshold: "B",
    requiredPriorCourses: ["CRS-FND-067", "CRS-FND-066"],
    concurrentPermittedCourses: ["CRS-LAB-068"],
    departmentApprovalRequired: true,
    waiverExaminationAvailable: true,
    academicTrack: "STEM_HONORS"
  },
  {
    ruleId: "PRQ-RULE-069",
    targetCourseCode: "CRS-ADV-069",
    targetCourseTitle: "Advanced Course Pathway 69 (HUMANITIES SCHOLAR)",
    minimumGradeThreshold: "A",
    requiredPriorCourses: ["CRS-FND-068", "CRS-FND-067"],
    concurrentPermittedCourses: ["CRS-LAB-069"],
    departmentApprovalRequired: false,
    waiverExaminationAvailable: true,
    academicTrack: "HUMANITIES_SCHOLAR"
  },
  {
    ruleId: "PRQ-RULE-070",
    targetCourseCode: "CRS-ADV-070",
    targetCourseTitle: "Advanced Course Pathway 70 (GLOBAL COMMERCE)",
    minimumGradeThreshold: "B",
    requiredPriorCourses: ["CRS-FND-069", "CRS-FND-068"],
    concurrentPermittedCourses: ["CRS-LAB-070"],
    departmentApprovalRequired: true,
    waiverExaminationAvailable: true,
    academicTrack: "GLOBAL_COMMERCE"
  },
  {
    ruleId: "PRQ-RULE-071",
    targetCourseCode: "CRS-ADV-071",
    targetCourseTitle: "Advanced Course Pathway 71 (GENERAL ACADEMIC)",
    minimumGradeThreshold: "B",
    requiredPriorCourses: ["CRS-FND-070", "CRS-FND-069"],
    concurrentPermittedCourses: ["CRS-LAB-071"],
    departmentApprovalRequired: false,
    waiverExaminationAvailable: true,
    academicTrack: "GENERAL_ACADEMIC"
  },
  {
    ruleId: "PRQ-RULE-072",
    targetCourseCode: "CRS-ADV-072",
    targetCourseTitle: "Advanced Course Pathway 72 (STEM HONORS)",
    minimumGradeThreshold: "A",
    requiredPriorCourses: ["CRS-FND-071", "CRS-FND-070"],
    concurrentPermittedCourses: ["CRS-LAB-072"],
    departmentApprovalRequired: true,
    waiverExaminationAvailable: true,
    academicTrack: "STEM_HONORS"
  },
  {
    ruleId: "PRQ-RULE-073",
    targetCourseCode: "CRS-ADV-073",
    targetCourseTitle: "Advanced Course Pathway 73 (HUMANITIES SCHOLAR)",
    minimumGradeThreshold: "B",
    requiredPriorCourses: ["CRS-FND-072", "CRS-FND-071"],
    concurrentPermittedCourses: ["CRS-LAB-073"],
    departmentApprovalRequired: false,
    waiverExaminationAvailable: true,
    academicTrack: "HUMANITIES_SCHOLAR"
  },
  {
    ruleId: "PRQ-RULE-074",
    targetCourseCode: "CRS-ADV-074",
    targetCourseTitle: "Advanced Course Pathway 74 (GLOBAL COMMERCE)",
    minimumGradeThreshold: "B",
    requiredPriorCourses: ["CRS-FND-073", "CRS-FND-072"],
    concurrentPermittedCourses: ["CRS-LAB-074"],
    departmentApprovalRequired: true,
    waiverExaminationAvailable: true,
    academicTrack: "GLOBAL_COMMERCE"
  },
  {
    ruleId: "PRQ-RULE-075",
    targetCourseCode: "CRS-ADV-075",
    targetCourseTitle: "Advanced Course Pathway 75 (GENERAL ACADEMIC)",
    minimumGradeThreshold: "A",
    requiredPriorCourses: ["CRS-FND-074", "CRS-FND-073"],
    concurrentPermittedCourses: ["CRS-LAB-075"],
    departmentApprovalRequired: false,
    waiverExaminationAvailable: true,
    academicTrack: "GENERAL_ACADEMIC"
  },
  {
    ruleId: "PRQ-RULE-076",
    targetCourseCode: "CRS-ADV-076",
    targetCourseTitle: "Advanced Course Pathway 76 (STEM HONORS)",
    minimumGradeThreshold: "B",
    requiredPriorCourses: ["CRS-FND-075", "CRS-FND-074"],
    concurrentPermittedCourses: ["CRS-LAB-076"],
    departmentApprovalRequired: true,
    waiverExaminationAvailable: true,
    academicTrack: "STEM_HONORS"
  },
  {
    ruleId: "PRQ-RULE-077",
    targetCourseCode: "CRS-ADV-077",
    targetCourseTitle: "Advanced Course Pathway 77 (HUMANITIES SCHOLAR)",
    minimumGradeThreshold: "B",
    requiredPriorCourses: ["CRS-FND-076", "CRS-FND-075"],
    concurrentPermittedCourses: ["CRS-LAB-077"],
    departmentApprovalRequired: false,
    waiverExaminationAvailable: true,
    academicTrack: "HUMANITIES_SCHOLAR"
  },
  {
    ruleId: "PRQ-RULE-078",
    targetCourseCode: "CRS-ADV-078",
    targetCourseTitle: "Advanced Course Pathway 78 (GLOBAL COMMERCE)",
    minimumGradeThreshold: "A",
    requiredPriorCourses: ["CRS-FND-077", "CRS-FND-076"],
    concurrentPermittedCourses: ["CRS-LAB-078"],
    departmentApprovalRequired: true,
    waiverExaminationAvailable: true,
    academicTrack: "GLOBAL_COMMERCE"
  },
  {
    ruleId: "PRQ-RULE-079",
    targetCourseCode: "CRS-ADV-079",
    targetCourseTitle: "Advanced Course Pathway 79 (GENERAL ACADEMIC)",
    minimumGradeThreshold: "B",
    requiredPriorCourses: ["CRS-FND-078", "CRS-FND-077"],
    concurrentPermittedCourses: ["CRS-LAB-079"],
    departmentApprovalRequired: false,
    waiverExaminationAvailable: true,
    academicTrack: "GENERAL_ACADEMIC"
  },
  {
    ruleId: "PRQ-RULE-080",
    targetCourseCode: "CRS-ADV-080",
    targetCourseTitle: "Advanced Course Pathway 80 (STEM HONORS)",
    minimumGradeThreshold: "B",
    requiredPriorCourses: ["CRS-FND-079", "CRS-FND-078"],
    concurrentPermittedCourses: ["CRS-LAB-080"],
    departmentApprovalRequired: true,
    waiverExaminationAvailable: true,
    academicTrack: "STEM_HONORS"
  },
];

@Injectable()
export class PrerequisiteRulesMasterService {
  public getAllRules(): CoursePrerequisiteRule[] {
    return MASTER_PREREQUISITE_RULES;
  }
}
