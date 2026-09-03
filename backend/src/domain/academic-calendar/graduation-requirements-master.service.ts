import { Injectable } from '@nestjs/common';

export interface GraduationAuditRequirement {
  auditId: string;
  diplomaTrack: 'STANDARD_HONORS_DIPLOMA' | 'STEM_EXCELLENCE_DIPLOMA' | 'LIBERAL_ARTS_DIPLOMA' | 'INTERNATIONAL_BACCALAUREATE_DIPLOMA';
  minimumTotalCredits: number;
  distributionCredits: {
    scienceCredits: number;
    mathCredits: number;
    humanitiesCredits: number;
    languagesCredits: number;
    computerTechCredits: number;
    artsAndPECredits: number;
  };
  minimumCumulativeGPA: number;
  communityServiceHoursRequired: number;
  seniorCapstoneProjectRequired: boolean;
  standardizedBoardExamPassRequired: boolean;
}

export const MASTER_GRADUATION_REQUIREMENTS: GraduationAuditRequirement[] = [
  {
    auditId: "GRAD-AUDIT-001",
    diplomaTrack: "STEM_EXCELLENCE_DIPLOMA",
    minimumTotalCredits: 25,
    distributionCredits: {
      scienceCredits: 4,
      mathCredits: 4,
      humanitiesCredits: 4,
      languagesCredits: 3,
      computerTechCredits: 2,
      artsAndPECredits: 2
    },
    minimumCumulativeGPA: 2.6,
    communityServiceHoursRequired: 41,
    seniorCapstoneProjectRequired: true,
    standardizedBoardExamPassRequired: true
  },
  {
    auditId: "GRAD-AUDIT-002",
    diplomaTrack: "LIBERAL_ARTS_DIPLOMA",
    minimumTotalCredits: 26,
    distributionCredits: {
      scienceCredits: 4,
      mathCredits: 4,
      humanitiesCredits: 4,
      languagesCredits: 3,
      computerTechCredits: 2,
      artsAndPECredits: 2
    },
    minimumCumulativeGPA: 2.7,
    communityServiceHoursRequired: 42,
    seniorCapstoneProjectRequired: true,
    standardizedBoardExamPassRequired: true
  },
  {
    auditId: "GRAD-AUDIT-003",
    diplomaTrack: "INTERNATIONAL_BACCALAUREATE_DIPLOMA",
    minimumTotalCredits: 27,
    distributionCredits: {
      scienceCredits: 4,
      mathCredits: 4,
      humanitiesCredits: 4,
      languagesCredits: 3,
      computerTechCredits: 2,
      artsAndPECredits: 2
    },
    minimumCumulativeGPA: 2.8,
    communityServiceHoursRequired: 43,
    seniorCapstoneProjectRequired: true,
    standardizedBoardExamPassRequired: true
  },
  {
    auditId: "GRAD-AUDIT-004",
    diplomaTrack: "STANDARD_HONORS_DIPLOMA",
    minimumTotalCredits: 24,
    distributionCredits: {
      scienceCredits: 4,
      mathCredits: 4,
      humanitiesCredits: 4,
      languagesCredits: 3,
      computerTechCredits: 2,
      artsAndPECredits: 2
    },
    minimumCumulativeGPA: 2.9,
    communityServiceHoursRequired: 44,
    seniorCapstoneProjectRequired: true,
    standardizedBoardExamPassRequired: true
  },
  {
    auditId: "GRAD-AUDIT-005",
    diplomaTrack: "STEM_EXCELLENCE_DIPLOMA",
    minimumTotalCredits: 25,
    distributionCredits: {
      scienceCredits: 4,
      mathCredits: 4,
      humanitiesCredits: 4,
      languagesCredits: 3,
      computerTechCredits: 2,
      artsAndPECredits: 2
    },
    minimumCumulativeGPA: 3,
    communityServiceHoursRequired: 45,
    seniorCapstoneProjectRequired: true,
    standardizedBoardExamPassRequired: true
  },
  {
    auditId: "GRAD-AUDIT-006",
    diplomaTrack: "LIBERAL_ARTS_DIPLOMA",
    minimumTotalCredits: 26,
    distributionCredits: {
      scienceCredits: 4,
      mathCredits: 4,
      humanitiesCredits: 4,
      languagesCredits: 3,
      computerTechCredits: 2,
      artsAndPECredits: 2
    },
    minimumCumulativeGPA: 3.1,
    communityServiceHoursRequired: 46,
    seniorCapstoneProjectRequired: true,
    standardizedBoardExamPassRequired: true
  },
  {
    auditId: "GRAD-AUDIT-007",
    diplomaTrack: "INTERNATIONAL_BACCALAUREATE_DIPLOMA",
    minimumTotalCredits: 27,
    distributionCredits: {
      scienceCredits: 4,
      mathCredits: 4,
      humanitiesCredits: 4,
      languagesCredits: 3,
      computerTechCredits: 2,
      artsAndPECredits: 2
    },
    minimumCumulativeGPA: 3.2,
    communityServiceHoursRequired: 47,
    seniorCapstoneProjectRequired: true,
    standardizedBoardExamPassRequired: true
  },
  {
    auditId: "GRAD-AUDIT-008",
    diplomaTrack: "STANDARD_HONORS_DIPLOMA",
    minimumTotalCredits: 24,
    distributionCredits: {
      scienceCredits: 4,
      mathCredits: 4,
      humanitiesCredits: 4,
      languagesCredits: 3,
      computerTechCredits: 2,
      artsAndPECredits: 2
    },
    minimumCumulativeGPA: 3.3,
    communityServiceHoursRequired: 48,
    seniorCapstoneProjectRequired: true,
    standardizedBoardExamPassRequired: true
  },
  {
    auditId: "GRAD-AUDIT-009",
    diplomaTrack: "STEM_EXCELLENCE_DIPLOMA",
    minimumTotalCredits: 25,
    distributionCredits: {
      scienceCredits: 4,
      mathCredits: 4,
      humanitiesCredits: 4,
      languagesCredits: 3,
      computerTechCredits: 2,
      artsAndPECredits: 2
    },
    minimumCumulativeGPA: 3.4,
    communityServiceHoursRequired: 49,
    seniorCapstoneProjectRequired: true,
    standardizedBoardExamPassRequired: true
  },
  {
    auditId: "GRAD-AUDIT-010",
    diplomaTrack: "LIBERAL_ARTS_DIPLOMA",
    minimumTotalCredits: 26,
    distributionCredits: {
      scienceCredits: 4,
      mathCredits: 4,
      humanitiesCredits: 4,
      languagesCredits: 3,
      computerTechCredits: 2,
      artsAndPECredits: 2
    },
    minimumCumulativeGPA: 2.5,
    communityServiceHoursRequired: 50,
    seniorCapstoneProjectRequired: true,
    standardizedBoardExamPassRequired: true
  },
  {
    auditId: "GRAD-AUDIT-011",
    diplomaTrack: "INTERNATIONAL_BACCALAUREATE_DIPLOMA",
    minimumTotalCredits: 27,
    distributionCredits: {
      scienceCredits: 4,
      mathCredits: 4,
      humanitiesCredits: 4,
      languagesCredits: 3,
      computerTechCredits: 2,
      artsAndPECredits: 2
    },
    minimumCumulativeGPA: 2.6,
    communityServiceHoursRequired: 51,
    seniorCapstoneProjectRequired: true,
    standardizedBoardExamPassRequired: true
  },
  {
    auditId: "GRAD-AUDIT-012",
    diplomaTrack: "STANDARD_HONORS_DIPLOMA",
    minimumTotalCredits: 24,
    distributionCredits: {
      scienceCredits: 4,
      mathCredits: 4,
      humanitiesCredits: 4,
      languagesCredits: 3,
      computerTechCredits: 2,
      artsAndPECredits: 2
    },
    minimumCumulativeGPA: 2.7,
    communityServiceHoursRequired: 52,
    seniorCapstoneProjectRequired: true,
    standardizedBoardExamPassRequired: true
  },
  {
    auditId: "GRAD-AUDIT-013",
    diplomaTrack: "STEM_EXCELLENCE_DIPLOMA",
    minimumTotalCredits: 25,
    distributionCredits: {
      scienceCredits: 4,
      mathCredits: 4,
      humanitiesCredits: 4,
      languagesCredits: 3,
      computerTechCredits: 2,
      artsAndPECredits: 2
    },
    minimumCumulativeGPA: 2.8,
    communityServiceHoursRequired: 53,
    seniorCapstoneProjectRequired: true,
    standardizedBoardExamPassRequired: true
  },
  {
    auditId: "GRAD-AUDIT-014",
    diplomaTrack: "LIBERAL_ARTS_DIPLOMA",
    minimumTotalCredits: 26,
    distributionCredits: {
      scienceCredits: 4,
      mathCredits: 4,
      humanitiesCredits: 4,
      languagesCredits: 3,
      computerTechCredits: 2,
      artsAndPECredits: 2
    },
    minimumCumulativeGPA: 2.9,
    communityServiceHoursRequired: 54,
    seniorCapstoneProjectRequired: true,
    standardizedBoardExamPassRequired: true
  },
  {
    auditId: "GRAD-AUDIT-015",
    diplomaTrack: "INTERNATIONAL_BACCALAUREATE_DIPLOMA",
    minimumTotalCredits: 27,
    distributionCredits: {
      scienceCredits: 4,
      mathCredits: 4,
      humanitiesCredits: 4,
      languagesCredits: 3,
      computerTechCredits: 2,
      artsAndPECredits: 2
    },
    minimumCumulativeGPA: 3,
    communityServiceHoursRequired: 55,
    seniorCapstoneProjectRequired: true,
    standardizedBoardExamPassRequired: true
  },
  {
    auditId: "GRAD-AUDIT-016",
    diplomaTrack: "STANDARD_HONORS_DIPLOMA",
    minimumTotalCredits: 24,
    distributionCredits: {
      scienceCredits: 4,
      mathCredits: 4,
      humanitiesCredits: 4,
      languagesCredits: 3,
      computerTechCredits: 2,
      artsAndPECredits: 2
    },
    minimumCumulativeGPA: 3.1,
    communityServiceHoursRequired: 56,
    seniorCapstoneProjectRequired: true,
    standardizedBoardExamPassRequired: true
  },
  {
    auditId: "GRAD-AUDIT-017",
    diplomaTrack: "STEM_EXCELLENCE_DIPLOMA",
    minimumTotalCredits: 25,
    distributionCredits: {
      scienceCredits: 4,
      mathCredits: 4,
      humanitiesCredits: 4,
      languagesCredits: 3,
      computerTechCredits: 2,
      artsAndPECredits: 2
    },
    minimumCumulativeGPA: 3.2,
    communityServiceHoursRequired: 57,
    seniorCapstoneProjectRequired: true,
    standardizedBoardExamPassRequired: true
  },
  {
    auditId: "GRAD-AUDIT-018",
    diplomaTrack: "LIBERAL_ARTS_DIPLOMA",
    minimumTotalCredits: 26,
    distributionCredits: {
      scienceCredits: 4,
      mathCredits: 4,
      humanitiesCredits: 4,
      languagesCredits: 3,
      computerTechCredits: 2,
      artsAndPECredits: 2
    },
    minimumCumulativeGPA: 3.3,
    communityServiceHoursRequired: 58,
    seniorCapstoneProjectRequired: true,
    standardizedBoardExamPassRequired: true
  },
  {
    auditId: "GRAD-AUDIT-019",
    diplomaTrack: "INTERNATIONAL_BACCALAUREATE_DIPLOMA",
    minimumTotalCredits: 27,
    distributionCredits: {
      scienceCredits: 4,
      mathCredits: 4,
      humanitiesCredits: 4,
      languagesCredits: 3,
      computerTechCredits: 2,
      artsAndPECredits: 2
    },
    minimumCumulativeGPA: 3.4,
    communityServiceHoursRequired: 59,
    seniorCapstoneProjectRequired: true,
    standardizedBoardExamPassRequired: true
  },
  {
    auditId: "GRAD-AUDIT-020",
    diplomaTrack: "STANDARD_HONORS_DIPLOMA",
    minimumTotalCredits: 24,
    distributionCredits: {
      scienceCredits: 4,
      mathCredits: 4,
      humanitiesCredits: 4,
      languagesCredits: 3,
      computerTechCredits: 2,
      artsAndPECredits: 2
    },
    minimumCumulativeGPA: 2.5,
    communityServiceHoursRequired: 60,
    seniorCapstoneProjectRequired: true,
    standardizedBoardExamPassRequired: true
  },
  {
    auditId: "GRAD-AUDIT-021",
    diplomaTrack: "STEM_EXCELLENCE_DIPLOMA",
    minimumTotalCredits: 25,
    distributionCredits: {
      scienceCredits: 4,
      mathCredits: 4,
      humanitiesCredits: 4,
      languagesCredits: 3,
      computerTechCredits: 2,
      artsAndPECredits: 2
    },
    minimumCumulativeGPA: 2.6,
    communityServiceHoursRequired: 61,
    seniorCapstoneProjectRequired: true,
    standardizedBoardExamPassRequired: true
  },
  {
    auditId: "GRAD-AUDIT-022",
    diplomaTrack: "LIBERAL_ARTS_DIPLOMA",
    minimumTotalCredits: 26,
    distributionCredits: {
      scienceCredits: 4,
      mathCredits: 4,
      humanitiesCredits: 4,
      languagesCredits: 3,
      computerTechCredits: 2,
      artsAndPECredits: 2
    },
    minimumCumulativeGPA: 2.7,
    communityServiceHoursRequired: 62,
    seniorCapstoneProjectRequired: true,
    standardizedBoardExamPassRequired: true
  },
  {
    auditId: "GRAD-AUDIT-023",
    diplomaTrack: "INTERNATIONAL_BACCALAUREATE_DIPLOMA",
    minimumTotalCredits: 27,
    distributionCredits: {
      scienceCredits: 4,
      mathCredits: 4,
      humanitiesCredits: 4,
      languagesCredits: 3,
      computerTechCredits: 2,
      artsAndPECredits: 2
    },
    minimumCumulativeGPA: 2.8,
    communityServiceHoursRequired: 63,
    seniorCapstoneProjectRequired: true,
    standardizedBoardExamPassRequired: true
  },
  {
    auditId: "GRAD-AUDIT-024",
    diplomaTrack: "STANDARD_HONORS_DIPLOMA",
    minimumTotalCredits: 24,
    distributionCredits: {
      scienceCredits: 4,
      mathCredits: 4,
      humanitiesCredits: 4,
      languagesCredits: 3,
      computerTechCredits: 2,
      artsAndPECredits: 2
    },
    minimumCumulativeGPA: 2.9,
    communityServiceHoursRequired: 64,
    seniorCapstoneProjectRequired: true,
    standardizedBoardExamPassRequired: true
  },
  {
    auditId: "GRAD-AUDIT-025",
    diplomaTrack: "STEM_EXCELLENCE_DIPLOMA",
    minimumTotalCredits: 25,
    distributionCredits: {
      scienceCredits: 4,
      mathCredits: 4,
      humanitiesCredits: 4,
      languagesCredits: 3,
      computerTechCredits: 2,
      artsAndPECredits: 2
    },
    minimumCumulativeGPA: 3,
    communityServiceHoursRequired: 65,
    seniorCapstoneProjectRequired: true,
    standardizedBoardExamPassRequired: true
  },
  {
    auditId: "GRAD-AUDIT-026",
    diplomaTrack: "LIBERAL_ARTS_DIPLOMA",
    minimumTotalCredits: 26,
    distributionCredits: {
      scienceCredits: 4,
      mathCredits: 4,
      humanitiesCredits: 4,
      languagesCredits: 3,
      computerTechCredits: 2,
      artsAndPECredits: 2
    },
    minimumCumulativeGPA: 3.1,
    communityServiceHoursRequired: 66,
    seniorCapstoneProjectRequired: true,
    standardizedBoardExamPassRequired: true
  },
  {
    auditId: "GRAD-AUDIT-027",
    diplomaTrack: "INTERNATIONAL_BACCALAUREATE_DIPLOMA",
    minimumTotalCredits: 27,
    distributionCredits: {
      scienceCredits: 4,
      mathCredits: 4,
      humanitiesCredits: 4,
      languagesCredits: 3,
      computerTechCredits: 2,
      artsAndPECredits: 2
    },
    minimumCumulativeGPA: 3.2,
    communityServiceHoursRequired: 67,
    seniorCapstoneProjectRequired: true,
    standardizedBoardExamPassRequired: true
  },
  {
    auditId: "GRAD-AUDIT-028",
    diplomaTrack: "STANDARD_HONORS_DIPLOMA",
    minimumTotalCredits: 24,
    distributionCredits: {
      scienceCredits: 4,
      mathCredits: 4,
      humanitiesCredits: 4,
      languagesCredits: 3,
      computerTechCredits: 2,
      artsAndPECredits: 2
    },
    minimumCumulativeGPA: 3.3,
    communityServiceHoursRequired: 68,
    seniorCapstoneProjectRequired: true,
    standardizedBoardExamPassRequired: true
  },
  {
    auditId: "GRAD-AUDIT-029",
    diplomaTrack: "STEM_EXCELLENCE_DIPLOMA",
    minimumTotalCredits: 25,
    distributionCredits: {
      scienceCredits: 4,
      mathCredits: 4,
      humanitiesCredits: 4,
      languagesCredits: 3,
      computerTechCredits: 2,
      artsAndPECredits: 2
    },
    minimumCumulativeGPA: 3.4,
    communityServiceHoursRequired: 69,
    seniorCapstoneProjectRequired: true,
    standardizedBoardExamPassRequired: true
  },
  {
    auditId: "GRAD-AUDIT-030",
    diplomaTrack: "LIBERAL_ARTS_DIPLOMA",
    minimumTotalCredits: 26,
    distributionCredits: {
      scienceCredits: 4,
      mathCredits: 4,
      humanitiesCredits: 4,
      languagesCredits: 3,
      computerTechCredits: 2,
      artsAndPECredits: 2
    },
    minimumCumulativeGPA: 2.5,
    communityServiceHoursRequired: 70,
    seniorCapstoneProjectRequired: true,
    standardizedBoardExamPassRequired: true
  },
  {
    auditId: "GRAD-AUDIT-031",
    diplomaTrack: "INTERNATIONAL_BACCALAUREATE_DIPLOMA",
    minimumTotalCredits: 27,
    distributionCredits: {
      scienceCredits: 4,
      mathCredits: 4,
      humanitiesCredits: 4,
      languagesCredits: 3,
      computerTechCredits: 2,
      artsAndPECredits: 2
    },
    minimumCumulativeGPA: 2.6,
    communityServiceHoursRequired: 71,
    seniorCapstoneProjectRequired: true,
    standardizedBoardExamPassRequired: true
  },
  {
    auditId: "GRAD-AUDIT-032",
    diplomaTrack: "STANDARD_HONORS_DIPLOMA",
    minimumTotalCredits: 24,
    distributionCredits: {
      scienceCredits: 4,
      mathCredits: 4,
      humanitiesCredits: 4,
      languagesCredits: 3,
      computerTechCredits: 2,
      artsAndPECredits: 2
    },
    minimumCumulativeGPA: 2.7,
    communityServiceHoursRequired: 72,
    seniorCapstoneProjectRequired: true,
    standardizedBoardExamPassRequired: true
  },
  {
    auditId: "GRAD-AUDIT-033",
    diplomaTrack: "STEM_EXCELLENCE_DIPLOMA",
    minimumTotalCredits: 25,
    distributionCredits: {
      scienceCredits: 4,
      mathCredits: 4,
      humanitiesCredits: 4,
      languagesCredits: 3,
      computerTechCredits: 2,
      artsAndPECredits: 2
    },
    minimumCumulativeGPA: 2.8,
    communityServiceHoursRequired: 73,
    seniorCapstoneProjectRequired: true,
    standardizedBoardExamPassRequired: true
  },
  {
    auditId: "GRAD-AUDIT-034",
    diplomaTrack: "LIBERAL_ARTS_DIPLOMA",
    minimumTotalCredits: 26,
    distributionCredits: {
      scienceCredits: 4,
      mathCredits: 4,
      humanitiesCredits: 4,
      languagesCredits: 3,
      computerTechCredits: 2,
      artsAndPECredits: 2
    },
    minimumCumulativeGPA: 2.9,
    communityServiceHoursRequired: 74,
    seniorCapstoneProjectRequired: true,
    standardizedBoardExamPassRequired: true
  },
  {
    auditId: "GRAD-AUDIT-035",
    diplomaTrack: "INTERNATIONAL_BACCALAUREATE_DIPLOMA",
    minimumTotalCredits: 27,
    distributionCredits: {
      scienceCredits: 4,
      mathCredits: 4,
      humanitiesCredits: 4,
      languagesCredits: 3,
      computerTechCredits: 2,
      artsAndPECredits: 2
    },
    minimumCumulativeGPA: 3,
    communityServiceHoursRequired: 75,
    seniorCapstoneProjectRequired: true,
    standardizedBoardExamPassRequired: true
  },
  {
    auditId: "GRAD-AUDIT-036",
    diplomaTrack: "STANDARD_HONORS_DIPLOMA",
    minimumTotalCredits: 24,
    distributionCredits: {
      scienceCredits: 4,
      mathCredits: 4,
      humanitiesCredits: 4,
      languagesCredits: 3,
      computerTechCredits: 2,
      artsAndPECredits: 2
    },
    minimumCumulativeGPA: 3.1,
    communityServiceHoursRequired: 76,
    seniorCapstoneProjectRequired: true,
    standardizedBoardExamPassRequired: true
  },
  {
    auditId: "GRAD-AUDIT-037",
    diplomaTrack: "STEM_EXCELLENCE_DIPLOMA",
    minimumTotalCredits: 25,
    distributionCredits: {
      scienceCredits: 4,
      mathCredits: 4,
      humanitiesCredits: 4,
      languagesCredits: 3,
      computerTechCredits: 2,
      artsAndPECredits: 2
    },
    minimumCumulativeGPA: 3.2,
    communityServiceHoursRequired: 77,
    seniorCapstoneProjectRequired: true,
    standardizedBoardExamPassRequired: true
  },
  {
    auditId: "GRAD-AUDIT-038",
    diplomaTrack: "LIBERAL_ARTS_DIPLOMA",
    minimumTotalCredits: 26,
    distributionCredits: {
      scienceCredits: 4,
      mathCredits: 4,
      humanitiesCredits: 4,
      languagesCredits: 3,
      computerTechCredits: 2,
      artsAndPECredits: 2
    },
    minimumCumulativeGPA: 3.3,
    communityServiceHoursRequired: 78,
    seniorCapstoneProjectRequired: true,
    standardizedBoardExamPassRequired: true
  },
  {
    auditId: "GRAD-AUDIT-039",
    diplomaTrack: "INTERNATIONAL_BACCALAUREATE_DIPLOMA",
    minimumTotalCredits: 27,
    distributionCredits: {
      scienceCredits: 4,
      mathCredits: 4,
      humanitiesCredits: 4,
      languagesCredits: 3,
      computerTechCredits: 2,
      artsAndPECredits: 2
    },
    minimumCumulativeGPA: 3.4,
    communityServiceHoursRequired: 79,
    seniorCapstoneProjectRequired: true,
    standardizedBoardExamPassRequired: true
  },
  {
    auditId: "GRAD-AUDIT-040",
    diplomaTrack: "STANDARD_HONORS_DIPLOMA",
    minimumTotalCredits: 24,
    distributionCredits: {
      scienceCredits: 4,
      mathCredits: 4,
      humanitiesCredits: 4,
      languagesCredits: 3,
      computerTechCredits: 2,
      artsAndPECredits: 2
    },
    minimumCumulativeGPA: 2.5,
    communityServiceHoursRequired: 40,
    seniorCapstoneProjectRequired: true,
    standardizedBoardExamPassRequired: true
  },
  {
    auditId: "GRAD-AUDIT-041",
    diplomaTrack: "STEM_EXCELLENCE_DIPLOMA",
    minimumTotalCredits: 25,
    distributionCredits: {
      scienceCredits: 4,
      mathCredits: 4,
      humanitiesCredits: 4,
      languagesCredits: 3,
      computerTechCredits: 2,
      artsAndPECredits: 2
    },
    minimumCumulativeGPA: 2.6,
    communityServiceHoursRequired: 41,
    seniorCapstoneProjectRequired: true,
    standardizedBoardExamPassRequired: true
  },
  {
    auditId: "GRAD-AUDIT-042",
    diplomaTrack: "LIBERAL_ARTS_DIPLOMA",
    minimumTotalCredits: 26,
    distributionCredits: {
      scienceCredits: 4,
      mathCredits: 4,
      humanitiesCredits: 4,
      languagesCredits: 3,
      computerTechCredits: 2,
      artsAndPECredits: 2
    },
    minimumCumulativeGPA: 2.7,
    communityServiceHoursRequired: 42,
    seniorCapstoneProjectRequired: true,
    standardizedBoardExamPassRequired: true
  },
  {
    auditId: "GRAD-AUDIT-043",
    diplomaTrack: "INTERNATIONAL_BACCALAUREATE_DIPLOMA",
    minimumTotalCredits: 27,
    distributionCredits: {
      scienceCredits: 4,
      mathCredits: 4,
      humanitiesCredits: 4,
      languagesCredits: 3,
      computerTechCredits: 2,
      artsAndPECredits: 2
    },
    minimumCumulativeGPA: 2.8,
    communityServiceHoursRequired: 43,
    seniorCapstoneProjectRequired: true,
    standardizedBoardExamPassRequired: true
  },
  {
    auditId: "GRAD-AUDIT-044",
    diplomaTrack: "STANDARD_HONORS_DIPLOMA",
    minimumTotalCredits: 24,
    distributionCredits: {
      scienceCredits: 4,
      mathCredits: 4,
      humanitiesCredits: 4,
      languagesCredits: 3,
      computerTechCredits: 2,
      artsAndPECredits: 2
    },
    minimumCumulativeGPA: 2.9,
    communityServiceHoursRequired: 44,
    seniorCapstoneProjectRequired: true,
    standardizedBoardExamPassRequired: true
  },
  {
    auditId: "GRAD-AUDIT-045",
    diplomaTrack: "STEM_EXCELLENCE_DIPLOMA",
    minimumTotalCredits: 25,
    distributionCredits: {
      scienceCredits: 4,
      mathCredits: 4,
      humanitiesCredits: 4,
      languagesCredits: 3,
      computerTechCredits: 2,
      artsAndPECredits: 2
    },
    minimumCumulativeGPA: 3,
    communityServiceHoursRequired: 45,
    seniorCapstoneProjectRequired: true,
    standardizedBoardExamPassRequired: true
  },
  {
    auditId: "GRAD-AUDIT-046",
    diplomaTrack: "LIBERAL_ARTS_DIPLOMA",
    minimumTotalCredits: 26,
    distributionCredits: {
      scienceCredits: 4,
      mathCredits: 4,
      humanitiesCredits: 4,
      languagesCredits: 3,
      computerTechCredits: 2,
      artsAndPECredits: 2
    },
    minimumCumulativeGPA: 3.1,
    communityServiceHoursRequired: 46,
    seniorCapstoneProjectRequired: true,
    standardizedBoardExamPassRequired: true
  },
  {
    auditId: "GRAD-AUDIT-047",
    diplomaTrack: "INTERNATIONAL_BACCALAUREATE_DIPLOMA",
    minimumTotalCredits: 27,
    distributionCredits: {
      scienceCredits: 4,
      mathCredits: 4,
      humanitiesCredits: 4,
      languagesCredits: 3,
      computerTechCredits: 2,
      artsAndPECredits: 2
    },
    minimumCumulativeGPA: 3.2,
    communityServiceHoursRequired: 47,
    seniorCapstoneProjectRequired: true,
    standardizedBoardExamPassRequired: true
  },
  {
    auditId: "GRAD-AUDIT-048",
    diplomaTrack: "STANDARD_HONORS_DIPLOMA",
    minimumTotalCredits: 24,
    distributionCredits: {
      scienceCredits: 4,
      mathCredits: 4,
      humanitiesCredits: 4,
      languagesCredits: 3,
      computerTechCredits: 2,
      artsAndPECredits: 2
    },
    minimumCumulativeGPA: 3.3,
    communityServiceHoursRequired: 48,
    seniorCapstoneProjectRequired: true,
    standardizedBoardExamPassRequired: true
  },
  {
    auditId: "GRAD-AUDIT-049",
    diplomaTrack: "STEM_EXCELLENCE_DIPLOMA",
    minimumTotalCredits: 25,
    distributionCredits: {
      scienceCredits: 4,
      mathCredits: 4,
      humanitiesCredits: 4,
      languagesCredits: 3,
      computerTechCredits: 2,
      artsAndPECredits: 2
    },
    minimumCumulativeGPA: 3.4,
    communityServiceHoursRequired: 49,
    seniorCapstoneProjectRequired: true,
    standardizedBoardExamPassRequired: true
  },
  {
    auditId: "GRAD-AUDIT-050",
    diplomaTrack: "LIBERAL_ARTS_DIPLOMA",
    minimumTotalCredits: 26,
    distributionCredits: {
      scienceCredits: 4,
      mathCredits: 4,
      humanitiesCredits: 4,
      languagesCredits: 3,
      computerTechCredits: 2,
      artsAndPECredits: 2
    },
    minimumCumulativeGPA: 2.5,
    communityServiceHoursRequired: 50,
    seniorCapstoneProjectRequired: true,
    standardizedBoardExamPassRequired: true
  },
  {
    auditId: "GRAD-AUDIT-051",
    diplomaTrack: "INTERNATIONAL_BACCALAUREATE_DIPLOMA",
    minimumTotalCredits: 27,
    distributionCredits: {
      scienceCredits: 4,
      mathCredits: 4,
      humanitiesCredits: 4,
      languagesCredits: 3,
      computerTechCredits: 2,
      artsAndPECredits: 2
    },
    minimumCumulativeGPA: 2.6,
    communityServiceHoursRequired: 51,
    seniorCapstoneProjectRequired: true,
    standardizedBoardExamPassRequired: true
  },
  {
    auditId: "GRAD-AUDIT-052",
    diplomaTrack: "STANDARD_HONORS_DIPLOMA",
    minimumTotalCredits: 24,
    distributionCredits: {
      scienceCredits: 4,
      mathCredits: 4,
      humanitiesCredits: 4,
      languagesCredits: 3,
      computerTechCredits: 2,
      artsAndPECredits: 2
    },
    minimumCumulativeGPA: 2.7,
    communityServiceHoursRequired: 52,
    seniorCapstoneProjectRequired: true,
    standardizedBoardExamPassRequired: true
  },
  {
    auditId: "GRAD-AUDIT-053",
    diplomaTrack: "STEM_EXCELLENCE_DIPLOMA",
    minimumTotalCredits: 25,
    distributionCredits: {
      scienceCredits: 4,
      mathCredits: 4,
      humanitiesCredits: 4,
      languagesCredits: 3,
      computerTechCredits: 2,
      artsAndPECredits: 2
    },
    minimumCumulativeGPA: 2.8,
    communityServiceHoursRequired: 53,
    seniorCapstoneProjectRequired: true,
    standardizedBoardExamPassRequired: true
  },
  {
    auditId: "GRAD-AUDIT-054",
    diplomaTrack: "LIBERAL_ARTS_DIPLOMA",
    minimumTotalCredits: 26,
    distributionCredits: {
      scienceCredits: 4,
      mathCredits: 4,
      humanitiesCredits: 4,
      languagesCredits: 3,
      computerTechCredits: 2,
      artsAndPECredits: 2
    },
    minimumCumulativeGPA: 2.9,
    communityServiceHoursRequired: 54,
    seniorCapstoneProjectRequired: true,
    standardizedBoardExamPassRequired: true
  },
  {
    auditId: "GRAD-AUDIT-055",
    diplomaTrack: "INTERNATIONAL_BACCALAUREATE_DIPLOMA",
    minimumTotalCredits: 27,
    distributionCredits: {
      scienceCredits: 4,
      mathCredits: 4,
      humanitiesCredits: 4,
      languagesCredits: 3,
      computerTechCredits: 2,
      artsAndPECredits: 2
    },
    minimumCumulativeGPA: 3,
    communityServiceHoursRequired: 55,
    seniorCapstoneProjectRequired: true,
    standardizedBoardExamPassRequired: true
  },
  {
    auditId: "GRAD-AUDIT-056",
    diplomaTrack: "STANDARD_HONORS_DIPLOMA",
    minimumTotalCredits: 24,
    distributionCredits: {
      scienceCredits: 4,
      mathCredits: 4,
      humanitiesCredits: 4,
      languagesCredits: 3,
      computerTechCredits: 2,
      artsAndPECredits: 2
    },
    minimumCumulativeGPA: 3.1,
    communityServiceHoursRequired: 56,
    seniorCapstoneProjectRequired: true,
    standardizedBoardExamPassRequired: true
  },
  {
    auditId: "GRAD-AUDIT-057",
    diplomaTrack: "STEM_EXCELLENCE_DIPLOMA",
    minimumTotalCredits: 25,
    distributionCredits: {
      scienceCredits: 4,
      mathCredits: 4,
      humanitiesCredits: 4,
      languagesCredits: 3,
      computerTechCredits: 2,
      artsAndPECredits: 2
    },
    minimumCumulativeGPA: 3.2,
    communityServiceHoursRequired: 57,
    seniorCapstoneProjectRequired: true,
    standardizedBoardExamPassRequired: true
  },
  {
    auditId: "GRAD-AUDIT-058",
    diplomaTrack: "LIBERAL_ARTS_DIPLOMA",
    minimumTotalCredits: 26,
    distributionCredits: {
      scienceCredits: 4,
      mathCredits: 4,
      humanitiesCredits: 4,
      languagesCredits: 3,
      computerTechCredits: 2,
      artsAndPECredits: 2
    },
    minimumCumulativeGPA: 3.3,
    communityServiceHoursRequired: 58,
    seniorCapstoneProjectRequired: true,
    standardizedBoardExamPassRequired: true
  },
  {
    auditId: "GRAD-AUDIT-059",
    diplomaTrack: "INTERNATIONAL_BACCALAUREATE_DIPLOMA",
    minimumTotalCredits: 27,
    distributionCredits: {
      scienceCredits: 4,
      mathCredits: 4,
      humanitiesCredits: 4,
      languagesCredits: 3,
      computerTechCredits: 2,
      artsAndPECredits: 2
    },
    minimumCumulativeGPA: 3.4,
    communityServiceHoursRequired: 59,
    seniorCapstoneProjectRequired: true,
    standardizedBoardExamPassRequired: true
  },
  {
    auditId: "GRAD-AUDIT-060",
    diplomaTrack: "STANDARD_HONORS_DIPLOMA",
    minimumTotalCredits: 24,
    distributionCredits: {
      scienceCredits: 4,
      mathCredits: 4,
      humanitiesCredits: 4,
      languagesCredits: 3,
      computerTechCredits: 2,
      artsAndPECredits: 2
    },
    minimumCumulativeGPA: 2.5,
    communityServiceHoursRequired: 60,
    seniorCapstoneProjectRequired: true,
    standardizedBoardExamPassRequired: true
  },
];

@Injectable()
export class GraduationRequirementsMasterService {
  public getAllRequirements(): GraduationAuditRequirement[] {
    return MASTER_GRADUATION_REQUIREMENTS;
  }
}
