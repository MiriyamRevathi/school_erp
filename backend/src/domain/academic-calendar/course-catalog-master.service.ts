import { Injectable } from '@nestjs/common';

export interface ComprehensiveCourseRecord {
  courseCode: string;
  courseTitle: string;
  department: 'SCIENCE' | 'MATHEMATICS' | 'HUMANITIES' | 'LANGUAGES' | 'TECHNOLOGY' | 'COMMERCE' | 'FINE_ARTS' | 'PHYSICAL_EDUCATION';
  creditHours: number;
  gradeLevelsApplicable: string[];
  prerequisiteCourses: string[];
  corequisites: string[];
  isAdvancedPlacement: boolean;
  isInternationalBaccalaureate: boolean;
  labHoursPerWeek: number;
  lectureHoursPerWeek: number;
  courseOverviewMarkdown: string;
  recommendedTextbooks: string[];
}

export const MASTER_COURSES_REGISTRY: ComprehensiveCourseRecord[] = [
  {
    courseCode: "CRS-MAT-001",
    courseTitle: "Course 1: Comprehensive Inquiries in MATHEMATICS Level 1",
    department: "MATHEMATICS",
    creditHours: 4,
    gradeLevelsApplicable: ["Grade 9", "Grade 10", "Grade 11", "Grade 12"],
    prerequisiteCourses: ["CRS-MAT-001"],
    corequisites: ["CRS-LAB-001"],
    isAdvancedPlacement: false,
    isInternationalBaccalaureate: false,
    labHoursPerWeek: 0,
    lectureHoursPerWeek: 4,
    courseOverviewMarkdown: "Rigorous academic curriculum exploring fundamental and applied principles of MATHEMATICS with structured laboratory and analytical assessment milestones.",
    recommendedTextbooks: [
      "Standard Academic Handbook of MATHEMATICS (12th Edition)",
      "University Press Guided Laboratory & Field Investigation Manual"
    ]
  },
  {
    courseCode: "CRS-HUM-002",
    courseTitle: "Course 2: Comprehensive Inquiries in HUMANITIES Level 1",
    department: "HUMANITIES",
    creditHours: 3,
    gradeLevelsApplicable: ["Grade 9", "Grade 10", "Grade 11", "Grade 12"],
    prerequisiteCourses: ["CRS-HUM-001"],
    corequisites: ["CRS-LAB-002"],
    isAdvancedPlacement: false,
    isInternationalBaccalaureate: true,
    labHoursPerWeek: 2,
    lectureHoursPerWeek: 4,
    courseOverviewMarkdown: "Rigorous academic curriculum exploring fundamental and applied principles of HUMANITIES with structured laboratory and analytical assessment milestones.",
    recommendedTextbooks: [
      "Standard Academic Handbook of HUMANITIES (12th Edition)",
      "University Press Guided Laboratory & Field Investigation Manual"
    ]
  },
  {
    courseCode: "CRS-LAN-003",
    courseTitle: "Course 3: Comprehensive Inquiries in LANGUAGES Level 1",
    department: "LANGUAGES",
    creditHours: 4,
    gradeLevelsApplicable: ["Grade 9", "Grade 10", "Grade 11", "Grade 12"],
    prerequisiteCourses: ["CRS-LAN-001"],
    corequisites: ["CRS-LAB-003"],
    isAdvancedPlacement: true,
    isInternationalBaccalaureate: false,
    labHoursPerWeek: 0,
    lectureHoursPerWeek: 4,
    courseOverviewMarkdown: "Rigorous academic curriculum exploring fundamental and applied principles of LANGUAGES with structured laboratory and analytical assessment milestones.",
    recommendedTextbooks: [
      "Standard Academic Handbook of LANGUAGES (12th Edition)",
      "University Press Guided Laboratory & Field Investigation Manual"
    ]
  },
  {
    courseCode: "CRS-TEC-004",
    courseTitle: "Course 4: Comprehensive Inquiries in TECHNOLOGY Level 1",
    department: "TECHNOLOGY",
    creditHours: 3,
    gradeLevelsApplicable: ["Grade 9", "Grade 10", "Grade 11", "Grade 12"],
    prerequisiteCourses: ["CRS-TEC-001"],
    corequisites: ["CRS-LAB-004"],
    isAdvancedPlacement: false,
    isInternationalBaccalaureate: true,
    labHoursPerWeek: 2,
    lectureHoursPerWeek: 4,
    courseOverviewMarkdown: "Rigorous academic curriculum exploring fundamental and applied principles of TECHNOLOGY with structured laboratory and analytical assessment milestones.",
    recommendedTextbooks: [
      "Standard Academic Handbook of TECHNOLOGY (12th Edition)",
      "University Press Guided Laboratory & Field Investigation Manual"
    ]
  },
  {
    courseCode: "CRS-COM-005",
    courseTitle: "Course 5: Comprehensive Inquiries in COMMERCE Level 1",
    department: "COMMERCE",
    creditHours: 4,
    gradeLevelsApplicable: ["Grade 9", "Grade 10", "Grade 11", "Grade 12"],
    prerequisiteCourses: ["CRS-COM-001"],
    corequisites: ["CRS-LAB-005"],
    isAdvancedPlacement: false,
    isInternationalBaccalaureate: false,
    labHoursPerWeek: 0,
    lectureHoursPerWeek: 4,
    courseOverviewMarkdown: "Rigorous academic curriculum exploring fundamental and applied principles of COMMERCE with structured laboratory and analytical assessment milestones.",
    recommendedTextbooks: [
      "Standard Academic Handbook of COMMERCE (12th Edition)",
      "University Press Guided Laboratory & Field Investigation Manual"
    ]
  },
  {
    courseCode: "CRS-FIN-006",
    courseTitle: "Course 6: Comprehensive Inquiries in FINE_ARTS Level 1",
    department: "FINE_ARTS",
    creditHours: 3,
    gradeLevelsApplicable: ["Grade 9", "Grade 10", "Grade 11", "Grade 12"],
    prerequisiteCourses: ["CRS-FIN-001"],
    corequisites: ["CRS-LAB-006"],
    isAdvancedPlacement: true,
    isInternationalBaccalaureate: false,
    labHoursPerWeek: 2,
    lectureHoursPerWeek: 4,
    courseOverviewMarkdown: "Rigorous academic curriculum exploring fundamental and applied principles of FINE_ARTS with structured laboratory and analytical assessment milestones.",
    recommendedTextbooks: [
      "Standard Academic Handbook of FINE_ARTS (12th Edition)",
      "University Press Guided Laboratory & Field Investigation Manual"
    ]
  },
  {
    courseCode: "CRS-PHY-007",
    courseTitle: "Course 7: Comprehensive Inquiries in PHYSICAL_EDUCATION Level 1",
    department: "PHYSICAL_EDUCATION",
    creditHours: 4,
    gradeLevelsApplicable: ["Grade 9", "Grade 10", "Grade 11", "Grade 12"],
    prerequisiteCourses: ["CRS-PHY-001"],
    corequisites: ["CRS-LAB-007"],
    isAdvancedPlacement: false,
    isInternationalBaccalaureate: false,
    labHoursPerWeek: 0,
    lectureHoursPerWeek: 4,
    courseOverviewMarkdown: "Rigorous academic curriculum exploring fundamental and applied principles of PHYSICAL_EDUCATION with structured laboratory and analytical assessment milestones.",
    recommendedTextbooks: [
      "Standard Academic Handbook of PHYSICAL_EDUCATION (12th Edition)",
      "University Press Guided Laboratory & Field Investigation Manual"
    ]
  },
  {
    courseCode: "CRS-SCI-008",
    courseTitle: "Course 8: Comprehensive Inquiries in SCIENCE Level 1",
    department: "SCIENCE",
    creditHours: 3,
    gradeLevelsApplicable: ["Grade 9", "Grade 10", "Grade 11", "Grade 12"],
    prerequisiteCourses: ["CRS-SCI-001"],
    corequisites: ["CRS-LAB-008"],
    isAdvancedPlacement: false,
    isInternationalBaccalaureate: true,
    labHoursPerWeek: 2,
    lectureHoursPerWeek: 4,
    courseOverviewMarkdown: "Rigorous academic curriculum exploring fundamental and applied principles of SCIENCE with structured laboratory and analytical assessment milestones.",
    recommendedTextbooks: [
      "Standard Academic Handbook of SCIENCE (12th Edition)",
      "University Press Guided Laboratory & Field Investigation Manual"
    ]
  },
  {
    courseCode: "CRS-MAT-009",
    courseTitle: "Course 9: Comprehensive Inquiries in MATHEMATICS Level 1",
    department: "MATHEMATICS",
    creditHours: 4,
    gradeLevelsApplicable: ["Grade 9", "Grade 10", "Grade 11", "Grade 12"],
    prerequisiteCourses: ["CRS-MAT-001"],
    corequisites: ["CRS-LAB-009"],
    isAdvancedPlacement: true,
    isInternationalBaccalaureate: false,
    labHoursPerWeek: 0,
    lectureHoursPerWeek: 4,
    courseOverviewMarkdown: "Rigorous academic curriculum exploring fundamental and applied principles of MATHEMATICS with structured laboratory and analytical assessment milestones.",
    recommendedTextbooks: [
      "Standard Academic Handbook of MATHEMATICS (12th Edition)",
      "University Press Guided Laboratory & Field Investigation Manual"
    ]
  },
  {
    courseCode: "CRS-HUM-010",
    courseTitle: "Course 10: Comprehensive Inquiries in HUMANITIES Level 2",
    department: "HUMANITIES",
    creditHours: 3,
    gradeLevelsApplicable: ["Grade 9", "Grade 10", "Grade 11", "Grade 12"],
    prerequisiteCourses: ["CRS-HUM-001"],
    corequisites: ["CRS-LAB-010"],
    isAdvancedPlacement: false,
    isInternationalBaccalaureate: true,
    labHoursPerWeek: 2,
    lectureHoursPerWeek: 4,
    courseOverviewMarkdown: "Rigorous academic curriculum exploring fundamental and applied principles of HUMANITIES with structured laboratory and analytical assessment milestones.",
    recommendedTextbooks: [
      "Standard Academic Handbook of HUMANITIES (12th Edition)",
      "University Press Guided Laboratory & Field Investigation Manual"
    ]
  },
  {
    courseCode: "CRS-LAN-011",
    courseTitle: "Course 11: Comprehensive Inquiries in LANGUAGES Level 2",
    department: "LANGUAGES",
    creditHours: 4,
    gradeLevelsApplicable: ["Grade 9", "Grade 10", "Grade 11", "Grade 12"],
    prerequisiteCourses: ["CRS-LAN-001"],
    corequisites: ["CRS-LAB-011"],
    isAdvancedPlacement: false,
    isInternationalBaccalaureate: false,
    labHoursPerWeek: 0,
    lectureHoursPerWeek: 4,
    courseOverviewMarkdown: "Rigorous academic curriculum exploring fundamental and applied principles of LANGUAGES with structured laboratory and analytical assessment milestones.",
    recommendedTextbooks: [
      "Standard Academic Handbook of LANGUAGES (12th Edition)",
      "University Press Guided Laboratory & Field Investigation Manual"
    ]
  },
  {
    courseCode: "CRS-TEC-012",
    courseTitle: "Course 12: Comprehensive Inquiries in TECHNOLOGY Level 2",
    department: "TECHNOLOGY",
    creditHours: 3,
    gradeLevelsApplicable: ["Grade 9", "Grade 10", "Grade 11", "Grade 12"],
    prerequisiteCourses: ["CRS-TEC-001"],
    corequisites: ["CRS-LAB-012"],
    isAdvancedPlacement: true,
    isInternationalBaccalaureate: false,
    labHoursPerWeek: 2,
    lectureHoursPerWeek: 4,
    courseOverviewMarkdown: "Rigorous academic curriculum exploring fundamental and applied principles of TECHNOLOGY with structured laboratory and analytical assessment milestones.",
    recommendedTextbooks: [
      "Standard Academic Handbook of TECHNOLOGY (12th Edition)",
      "University Press Guided Laboratory & Field Investigation Manual"
    ]
  },
  {
    courseCode: "CRS-COM-013",
    courseTitle: "Course 13: Comprehensive Inquiries in COMMERCE Level 2",
    department: "COMMERCE",
    creditHours: 4,
    gradeLevelsApplicable: ["Grade 9", "Grade 10", "Grade 11", "Grade 12"],
    prerequisiteCourses: ["CRS-COM-001"],
    corequisites: ["CRS-LAB-013"],
    isAdvancedPlacement: false,
    isInternationalBaccalaureate: false,
    labHoursPerWeek: 0,
    lectureHoursPerWeek: 4,
    courseOverviewMarkdown: "Rigorous academic curriculum exploring fundamental and applied principles of COMMERCE with structured laboratory and analytical assessment milestones.",
    recommendedTextbooks: [
      "Standard Academic Handbook of COMMERCE (12th Edition)",
      "University Press Guided Laboratory & Field Investigation Manual"
    ]
  },
  {
    courseCode: "CRS-FIN-014",
    courseTitle: "Course 14: Comprehensive Inquiries in FINE_ARTS Level 2",
    department: "FINE_ARTS",
    creditHours: 3,
    gradeLevelsApplicable: ["Grade 9", "Grade 10", "Grade 11", "Grade 12"],
    prerequisiteCourses: ["CRS-FIN-001"],
    corequisites: ["CRS-LAB-014"],
    isAdvancedPlacement: false,
    isInternationalBaccalaureate: true,
    labHoursPerWeek: 2,
    lectureHoursPerWeek: 4,
    courseOverviewMarkdown: "Rigorous academic curriculum exploring fundamental and applied principles of FINE_ARTS with structured laboratory and analytical assessment milestones.",
    recommendedTextbooks: [
      "Standard Academic Handbook of FINE_ARTS (12th Edition)",
      "University Press Guided Laboratory & Field Investigation Manual"
    ]
  },
  {
    courseCode: "CRS-PHY-015",
    courseTitle: "Course 15: Comprehensive Inquiries in PHYSICAL_EDUCATION Level 2",
    department: "PHYSICAL_EDUCATION",
    creditHours: 4,
    gradeLevelsApplicable: ["Grade 9", "Grade 10", "Grade 11", "Grade 12"],
    prerequisiteCourses: ["CRS-PHY-001"],
    corequisites: ["CRS-LAB-015"],
    isAdvancedPlacement: true,
    isInternationalBaccalaureate: false,
    labHoursPerWeek: 0,
    lectureHoursPerWeek: 4,
    courseOverviewMarkdown: "Rigorous academic curriculum exploring fundamental and applied principles of PHYSICAL_EDUCATION with structured laboratory and analytical assessment milestones.",
    recommendedTextbooks: [
      "Standard Academic Handbook of PHYSICAL_EDUCATION (12th Edition)",
      "University Press Guided Laboratory & Field Investigation Manual"
    ]
  },
  {
    courseCode: "CRS-SCI-016",
    courseTitle: "Course 16: Comprehensive Inquiries in SCIENCE Level 2",
    department: "SCIENCE",
    creditHours: 3,
    gradeLevelsApplicable: ["Grade 9", "Grade 10", "Grade 11", "Grade 12"],
    prerequisiteCourses: ["CRS-SCI-001"],
    corequisites: ["CRS-LAB-016"],
    isAdvancedPlacement: false,
    isInternationalBaccalaureate: true,
    labHoursPerWeek: 2,
    lectureHoursPerWeek: 4,
    courseOverviewMarkdown: "Rigorous academic curriculum exploring fundamental and applied principles of SCIENCE with structured laboratory and analytical assessment milestones.",
    recommendedTextbooks: [
      "Standard Academic Handbook of SCIENCE (12th Edition)",
      "University Press Guided Laboratory & Field Investigation Manual"
    ]
  },
  {
    courseCode: "CRS-MAT-017",
    courseTitle: "Course 17: Comprehensive Inquiries in MATHEMATICS Level 2",
    department: "MATHEMATICS",
    creditHours: 4,
    gradeLevelsApplicable: ["Grade 9", "Grade 10", "Grade 11", "Grade 12"],
    prerequisiteCourses: ["CRS-MAT-001"],
    corequisites: ["CRS-LAB-017"],
    isAdvancedPlacement: false,
    isInternationalBaccalaureate: false,
    labHoursPerWeek: 0,
    lectureHoursPerWeek: 4,
    courseOverviewMarkdown: "Rigorous academic curriculum exploring fundamental and applied principles of MATHEMATICS with structured laboratory and analytical assessment milestones.",
    recommendedTextbooks: [
      "Standard Academic Handbook of MATHEMATICS (12th Edition)",
      "University Press Guided Laboratory & Field Investigation Manual"
    ]
  },
  {
    courseCode: "CRS-HUM-018",
    courseTitle: "Course 18: Comprehensive Inquiries in HUMANITIES Level 2",
    department: "HUMANITIES",
    creditHours: 3,
    gradeLevelsApplicable: ["Grade 9", "Grade 10", "Grade 11", "Grade 12"],
    prerequisiteCourses: ["CRS-HUM-001"],
    corequisites: ["CRS-LAB-018"],
    isAdvancedPlacement: true,
    isInternationalBaccalaureate: false,
    labHoursPerWeek: 2,
    lectureHoursPerWeek: 4,
    courseOverviewMarkdown: "Rigorous academic curriculum exploring fundamental and applied principles of HUMANITIES with structured laboratory and analytical assessment milestones.",
    recommendedTextbooks: [
      "Standard Academic Handbook of HUMANITIES (12th Edition)",
      "University Press Guided Laboratory & Field Investigation Manual"
    ]
  },
  {
    courseCode: "CRS-LAN-019",
    courseTitle: "Course 19: Comprehensive Inquiries in LANGUAGES Level 2",
    department: "LANGUAGES",
    creditHours: 4,
    gradeLevelsApplicable: ["Grade 9", "Grade 10", "Grade 11", "Grade 12"],
    prerequisiteCourses: ["CRS-LAN-001"],
    corequisites: ["CRS-LAB-019"],
    isAdvancedPlacement: false,
    isInternationalBaccalaureate: false,
    labHoursPerWeek: 0,
    lectureHoursPerWeek: 4,
    courseOverviewMarkdown: "Rigorous academic curriculum exploring fundamental and applied principles of LANGUAGES with structured laboratory and analytical assessment milestones.",
    recommendedTextbooks: [
      "Standard Academic Handbook of LANGUAGES (12th Edition)",
      "University Press Guided Laboratory & Field Investigation Manual"
    ]
  },
  {
    courseCode: "CRS-TEC-020",
    courseTitle: "Course 20: Comprehensive Inquiries in TECHNOLOGY Level 3",
    department: "TECHNOLOGY",
    creditHours: 3,
    gradeLevelsApplicable: ["Grade 9", "Grade 10", "Grade 11", "Grade 12"],
    prerequisiteCourses: ["CRS-TEC-001"],
    corequisites: ["CRS-LAB-020"],
    isAdvancedPlacement: false,
    isInternationalBaccalaureate: true,
    labHoursPerWeek: 2,
    lectureHoursPerWeek: 4,
    courseOverviewMarkdown: "Rigorous academic curriculum exploring fundamental and applied principles of TECHNOLOGY with structured laboratory and analytical assessment milestones.",
    recommendedTextbooks: [
      "Standard Academic Handbook of TECHNOLOGY (12th Edition)",
      "University Press Guided Laboratory & Field Investigation Manual"
    ]
  },
  {
    courseCode: "CRS-COM-021",
    courseTitle: "Course 21: Comprehensive Inquiries in COMMERCE Level 3",
    department: "COMMERCE",
    creditHours: 4,
    gradeLevelsApplicable: ["Grade 9", "Grade 10", "Grade 11", "Grade 12"],
    prerequisiteCourses: ["CRS-COM-001"],
    corequisites: ["CRS-LAB-021"],
    isAdvancedPlacement: true,
    isInternationalBaccalaureate: false,
    labHoursPerWeek: 0,
    lectureHoursPerWeek: 4,
    courseOverviewMarkdown: "Rigorous academic curriculum exploring fundamental and applied principles of COMMERCE with structured laboratory and analytical assessment milestones.",
    recommendedTextbooks: [
      "Standard Academic Handbook of COMMERCE (12th Edition)",
      "University Press Guided Laboratory & Field Investigation Manual"
    ]
  },
  {
    courseCode: "CRS-FIN-022",
    courseTitle: "Course 22: Comprehensive Inquiries in FINE_ARTS Level 3",
    department: "FINE_ARTS",
    creditHours: 3,
    gradeLevelsApplicable: ["Grade 9", "Grade 10", "Grade 11", "Grade 12"],
    prerequisiteCourses: ["CRS-FIN-001"],
    corequisites: ["CRS-LAB-022"],
    isAdvancedPlacement: false,
    isInternationalBaccalaureate: true,
    labHoursPerWeek: 2,
    lectureHoursPerWeek: 4,
    courseOverviewMarkdown: "Rigorous academic curriculum exploring fundamental and applied principles of FINE_ARTS with structured laboratory and analytical assessment milestones.",
    recommendedTextbooks: [
      "Standard Academic Handbook of FINE_ARTS (12th Edition)",
      "University Press Guided Laboratory & Field Investigation Manual"
    ]
  },
  {
    courseCode: "CRS-PHY-023",
    courseTitle: "Course 23: Comprehensive Inquiries in PHYSICAL_EDUCATION Level 3",
    department: "PHYSICAL_EDUCATION",
    creditHours: 4,
    gradeLevelsApplicable: ["Grade 9", "Grade 10", "Grade 11", "Grade 12"],
    prerequisiteCourses: ["CRS-PHY-001"],
    corequisites: ["CRS-LAB-023"],
    isAdvancedPlacement: false,
    isInternationalBaccalaureate: false,
    labHoursPerWeek: 0,
    lectureHoursPerWeek: 4,
    courseOverviewMarkdown: "Rigorous academic curriculum exploring fundamental and applied principles of PHYSICAL_EDUCATION with structured laboratory and analytical assessment milestones.",
    recommendedTextbooks: [
      "Standard Academic Handbook of PHYSICAL_EDUCATION (12th Edition)",
      "University Press Guided Laboratory & Field Investigation Manual"
    ]
  },
  {
    courseCode: "CRS-SCI-024",
    courseTitle: "Course 24: Comprehensive Inquiries in SCIENCE Level 3",
    department: "SCIENCE",
    creditHours: 3,
    gradeLevelsApplicable: ["Grade 9", "Grade 10", "Grade 11", "Grade 12"],
    prerequisiteCourses: ["CRS-SCI-001"],
    corequisites: ["CRS-LAB-024"],
    isAdvancedPlacement: true,
    isInternationalBaccalaureate: false,
    labHoursPerWeek: 2,
    lectureHoursPerWeek: 4,
    courseOverviewMarkdown: "Rigorous academic curriculum exploring fundamental and applied principles of SCIENCE with structured laboratory and analytical assessment milestones.",
    recommendedTextbooks: [
      "Standard Academic Handbook of SCIENCE (12th Edition)",
      "University Press Guided Laboratory & Field Investigation Manual"
    ]
  },
  {
    courseCode: "CRS-MAT-025",
    courseTitle: "Course 25: Comprehensive Inquiries in MATHEMATICS Level 3",
    department: "MATHEMATICS",
    creditHours: 4,
    gradeLevelsApplicable: ["Grade 9", "Grade 10", "Grade 11", "Grade 12"],
    prerequisiteCourses: ["CRS-MAT-001"],
    corequisites: ["CRS-LAB-025"],
    isAdvancedPlacement: false,
    isInternationalBaccalaureate: false,
    labHoursPerWeek: 0,
    lectureHoursPerWeek: 4,
    courseOverviewMarkdown: "Rigorous academic curriculum exploring fundamental and applied principles of MATHEMATICS with structured laboratory and analytical assessment milestones.",
    recommendedTextbooks: [
      "Standard Academic Handbook of MATHEMATICS (12th Edition)",
      "University Press Guided Laboratory & Field Investigation Manual"
    ]
  },
  {
    courseCode: "CRS-HUM-026",
    courseTitle: "Course 26: Comprehensive Inquiries in HUMANITIES Level 3",
    department: "HUMANITIES",
    creditHours: 3,
    gradeLevelsApplicable: ["Grade 9", "Grade 10", "Grade 11", "Grade 12"],
    prerequisiteCourses: ["CRS-HUM-001"],
    corequisites: ["CRS-LAB-026"],
    isAdvancedPlacement: false,
    isInternationalBaccalaureate: true,
    labHoursPerWeek: 2,
    lectureHoursPerWeek: 4,
    courseOverviewMarkdown: "Rigorous academic curriculum exploring fundamental and applied principles of HUMANITIES with structured laboratory and analytical assessment milestones.",
    recommendedTextbooks: [
      "Standard Academic Handbook of HUMANITIES (12th Edition)",
      "University Press Guided Laboratory & Field Investigation Manual"
    ]
  },
  {
    courseCode: "CRS-LAN-027",
    courseTitle: "Course 27: Comprehensive Inquiries in LANGUAGES Level 3",
    department: "LANGUAGES",
    creditHours: 4,
    gradeLevelsApplicable: ["Grade 9", "Grade 10", "Grade 11", "Grade 12"],
    prerequisiteCourses: ["CRS-LAN-001"],
    corequisites: ["CRS-LAB-027"],
    isAdvancedPlacement: true,
    isInternationalBaccalaureate: false,
    labHoursPerWeek: 0,
    lectureHoursPerWeek: 4,
    courseOverviewMarkdown: "Rigorous academic curriculum exploring fundamental and applied principles of LANGUAGES with structured laboratory and analytical assessment milestones.",
    recommendedTextbooks: [
      "Standard Academic Handbook of LANGUAGES (12th Edition)",
      "University Press Guided Laboratory & Field Investigation Manual"
    ]
  },
  {
    courseCode: "CRS-TEC-028",
    courseTitle: "Course 28: Comprehensive Inquiries in TECHNOLOGY Level 3",
    department: "TECHNOLOGY",
    creditHours: 3,
    gradeLevelsApplicable: ["Grade 9", "Grade 10", "Grade 11", "Grade 12"],
    prerequisiteCourses: ["CRS-TEC-001"],
    corequisites: ["CRS-LAB-028"],
    isAdvancedPlacement: false,
    isInternationalBaccalaureate: true,
    labHoursPerWeek: 2,
    lectureHoursPerWeek: 4,
    courseOverviewMarkdown: "Rigorous academic curriculum exploring fundamental and applied principles of TECHNOLOGY with structured laboratory and analytical assessment milestones.",
    recommendedTextbooks: [
      "Standard Academic Handbook of TECHNOLOGY (12th Edition)",
      "University Press Guided Laboratory & Field Investigation Manual"
    ]
  },
  {
    courseCode: "CRS-COM-029",
    courseTitle: "Course 29: Comprehensive Inquiries in COMMERCE Level 3",
    department: "COMMERCE",
    creditHours: 4,
    gradeLevelsApplicable: ["Grade 9", "Grade 10", "Grade 11", "Grade 12"],
    prerequisiteCourses: ["CRS-COM-001"],
    corequisites: ["CRS-LAB-029"],
    isAdvancedPlacement: false,
    isInternationalBaccalaureate: false,
    labHoursPerWeek: 0,
    lectureHoursPerWeek: 4,
    courseOverviewMarkdown: "Rigorous academic curriculum exploring fundamental and applied principles of COMMERCE with structured laboratory and analytical assessment milestones.",
    recommendedTextbooks: [
      "Standard Academic Handbook of COMMERCE (12th Edition)",
      "University Press Guided Laboratory & Field Investigation Manual"
    ]
  },
  {
    courseCode: "CRS-FIN-030",
    courseTitle: "Course 30: Comprehensive Inquiries in FINE_ARTS Level 4",
    department: "FINE_ARTS",
    creditHours: 3,
    gradeLevelsApplicable: ["Grade 9", "Grade 10", "Grade 11", "Grade 12"],
    prerequisiteCourses: ["CRS-FIN-001"],
    corequisites: ["CRS-LAB-030"],
    isAdvancedPlacement: true,
    isInternationalBaccalaureate: false,
    labHoursPerWeek: 2,
    lectureHoursPerWeek: 4,
    courseOverviewMarkdown: "Rigorous academic curriculum exploring fundamental and applied principles of FINE_ARTS with structured laboratory and analytical assessment milestones.",
    recommendedTextbooks: [
      "Standard Academic Handbook of FINE_ARTS (12th Edition)",
      "University Press Guided Laboratory & Field Investigation Manual"
    ]
  },
  {
    courseCode: "CRS-PHY-031",
    courseTitle: "Course 31: Comprehensive Inquiries in PHYSICAL_EDUCATION Level 4",
    department: "PHYSICAL_EDUCATION",
    creditHours: 4,
    gradeLevelsApplicable: ["Grade 9", "Grade 10", "Grade 11", "Grade 12"],
    prerequisiteCourses: ["CRS-PHY-001"],
    corequisites: ["CRS-LAB-031"],
    isAdvancedPlacement: false,
    isInternationalBaccalaureate: false,
    labHoursPerWeek: 0,
    lectureHoursPerWeek: 4,
    courseOverviewMarkdown: "Rigorous academic curriculum exploring fundamental and applied principles of PHYSICAL_EDUCATION with structured laboratory and analytical assessment milestones.",
    recommendedTextbooks: [
      "Standard Academic Handbook of PHYSICAL_EDUCATION (12th Edition)",
      "University Press Guided Laboratory & Field Investigation Manual"
    ]
  },
  {
    courseCode: "CRS-SCI-032",
    courseTitle: "Course 32: Comprehensive Inquiries in SCIENCE Level 4",
    department: "SCIENCE",
    creditHours: 3,
    gradeLevelsApplicable: ["Grade 9", "Grade 10", "Grade 11", "Grade 12"],
    prerequisiteCourses: ["CRS-SCI-001"],
    corequisites: ["CRS-LAB-032"],
    isAdvancedPlacement: false,
    isInternationalBaccalaureate: true,
    labHoursPerWeek: 2,
    lectureHoursPerWeek: 4,
    courseOverviewMarkdown: "Rigorous academic curriculum exploring fundamental and applied principles of SCIENCE with structured laboratory and analytical assessment milestones.",
    recommendedTextbooks: [
      "Standard Academic Handbook of SCIENCE (12th Edition)",
      "University Press Guided Laboratory & Field Investigation Manual"
    ]
  },
  {
    courseCode: "CRS-MAT-033",
    courseTitle: "Course 33: Comprehensive Inquiries in MATHEMATICS Level 4",
    department: "MATHEMATICS",
    creditHours: 4,
    gradeLevelsApplicable: ["Grade 9", "Grade 10", "Grade 11", "Grade 12"],
    prerequisiteCourses: ["CRS-MAT-001"],
    corequisites: ["CRS-LAB-033"],
    isAdvancedPlacement: true,
    isInternationalBaccalaureate: false,
    labHoursPerWeek: 0,
    lectureHoursPerWeek: 4,
    courseOverviewMarkdown: "Rigorous academic curriculum exploring fundamental and applied principles of MATHEMATICS with structured laboratory and analytical assessment milestones.",
    recommendedTextbooks: [
      "Standard Academic Handbook of MATHEMATICS (12th Edition)",
      "University Press Guided Laboratory & Field Investigation Manual"
    ]
  },
  {
    courseCode: "CRS-HUM-034",
    courseTitle: "Course 34: Comprehensive Inquiries in HUMANITIES Level 4",
    department: "HUMANITIES",
    creditHours: 3,
    gradeLevelsApplicable: ["Grade 9", "Grade 10", "Grade 11", "Grade 12"],
    prerequisiteCourses: ["CRS-HUM-001"],
    corequisites: ["CRS-LAB-034"],
    isAdvancedPlacement: false,
    isInternationalBaccalaureate: true,
    labHoursPerWeek: 2,
    lectureHoursPerWeek: 4,
    courseOverviewMarkdown: "Rigorous academic curriculum exploring fundamental and applied principles of HUMANITIES with structured laboratory and analytical assessment milestones.",
    recommendedTextbooks: [
      "Standard Academic Handbook of HUMANITIES (12th Edition)",
      "University Press Guided Laboratory & Field Investigation Manual"
    ]
  },
  {
    courseCode: "CRS-LAN-035",
    courseTitle: "Course 35: Comprehensive Inquiries in LANGUAGES Level 4",
    department: "LANGUAGES",
    creditHours: 4,
    gradeLevelsApplicable: ["Grade 9", "Grade 10", "Grade 11", "Grade 12"],
    prerequisiteCourses: ["CRS-LAN-001"],
    corequisites: ["CRS-LAB-035"],
    isAdvancedPlacement: false,
    isInternationalBaccalaureate: false,
    labHoursPerWeek: 0,
    lectureHoursPerWeek: 4,
    courseOverviewMarkdown: "Rigorous academic curriculum exploring fundamental and applied principles of LANGUAGES with structured laboratory and analytical assessment milestones.",
    recommendedTextbooks: [
      "Standard Academic Handbook of LANGUAGES (12th Edition)",
      "University Press Guided Laboratory & Field Investigation Manual"
    ]
  },
  {
    courseCode: "CRS-TEC-036",
    courseTitle: "Course 36: Comprehensive Inquiries in TECHNOLOGY Level 4",
    department: "TECHNOLOGY",
    creditHours: 3,
    gradeLevelsApplicable: ["Grade 9", "Grade 10", "Grade 11", "Grade 12"],
    prerequisiteCourses: ["CRS-TEC-001"],
    corequisites: ["CRS-LAB-036"],
    isAdvancedPlacement: true,
    isInternationalBaccalaureate: false,
    labHoursPerWeek: 2,
    lectureHoursPerWeek: 4,
    courseOverviewMarkdown: "Rigorous academic curriculum exploring fundamental and applied principles of TECHNOLOGY with structured laboratory and analytical assessment milestones.",
    recommendedTextbooks: [
      "Standard Academic Handbook of TECHNOLOGY (12th Edition)",
      "University Press Guided Laboratory & Field Investigation Manual"
    ]
  },
  {
    courseCode: "CRS-COM-037",
    courseTitle: "Course 37: Comprehensive Inquiries in COMMERCE Level 4",
    department: "COMMERCE",
    creditHours: 4,
    gradeLevelsApplicable: ["Grade 9", "Grade 10", "Grade 11", "Grade 12"],
    prerequisiteCourses: ["CRS-COM-001"],
    corequisites: ["CRS-LAB-037"],
    isAdvancedPlacement: false,
    isInternationalBaccalaureate: false,
    labHoursPerWeek: 0,
    lectureHoursPerWeek: 4,
    courseOverviewMarkdown: "Rigorous academic curriculum exploring fundamental and applied principles of COMMERCE with structured laboratory and analytical assessment milestones.",
    recommendedTextbooks: [
      "Standard Academic Handbook of COMMERCE (12th Edition)",
      "University Press Guided Laboratory & Field Investigation Manual"
    ]
  },
  {
    courseCode: "CRS-FIN-038",
    courseTitle: "Course 38: Comprehensive Inquiries in FINE_ARTS Level 4",
    department: "FINE_ARTS",
    creditHours: 3,
    gradeLevelsApplicable: ["Grade 9", "Grade 10", "Grade 11", "Grade 12"],
    prerequisiteCourses: ["CRS-FIN-001"],
    corequisites: ["CRS-LAB-038"],
    isAdvancedPlacement: false,
    isInternationalBaccalaureate: true,
    labHoursPerWeek: 2,
    lectureHoursPerWeek: 4,
    courseOverviewMarkdown: "Rigorous academic curriculum exploring fundamental and applied principles of FINE_ARTS with structured laboratory and analytical assessment milestones.",
    recommendedTextbooks: [
      "Standard Academic Handbook of FINE_ARTS (12th Edition)",
      "University Press Guided Laboratory & Field Investigation Manual"
    ]
  },
  {
    courseCode: "CRS-PHY-039",
    courseTitle: "Course 39: Comprehensive Inquiries in PHYSICAL_EDUCATION Level 4",
    department: "PHYSICAL_EDUCATION",
    creditHours: 4,
    gradeLevelsApplicable: ["Grade 9", "Grade 10", "Grade 11", "Grade 12"],
    prerequisiteCourses: ["CRS-PHY-001"],
    corequisites: ["CRS-LAB-039"],
    isAdvancedPlacement: true,
    isInternationalBaccalaureate: false,
    labHoursPerWeek: 0,
    lectureHoursPerWeek: 4,
    courseOverviewMarkdown: "Rigorous academic curriculum exploring fundamental and applied principles of PHYSICAL_EDUCATION with structured laboratory and analytical assessment milestones.",
    recommendedTextbooks: [
      "Standard Academic Handbook of PHYSICAL_EDUCATION (12th Edition)",
      "University Press Guided Laboratory & Field Investigation Manual"
    ]
  },
  {
    courseCode: "CRS-SCI-040",
    courseTitle: "Course 40: Comprehensive Inquiries in SCIENCE Level 5",
    department: "SCIENCE",
    creditHours: 3,
    gradeLevelsApplicable: ["Grade 9", "Grade 10", "Grade 11", "Grade 12"],
    prerequisiteCourses: ["CRS-SCI-001"],
    corequisites: ["CRS-LAB-040"],
    isAdvancedPlacement: false,
    isInternationalBaccalaureate: true,
    labHoursPerWeek: 2,
    lectureHoursPerWeek: 4,
    courseOverviewMarkdown: "Rigorous academic curriculum exploring fundamental and applied principles of SCIENCE with structured laboratory and analytical assessment milestones.",
    recommendedTextbooks: [
      "Standard Academic Handbook of SCIENCE (12th Edition)",
      "University Press Guided Laboratory & Field Investigation Manual"
    ]
  },
  {
    courseCode: "CRS-MAT-041",
    courseTitle: "Course 41: Comprehensive Inquiries in MATHEMATICS Level 5",
    department: "MATHEMATICS",
    creditHours: 4,
    gradeLevelsApplicable: ["Grade 9", "Grade 10", "Grade 11", "Grade 12"],
    prerequisiteCourses: ["CRS-MAT-001"],
    corequisites: ["CRS-LAB-041"],
    isAdvancedPlacement: false,
    isInternationalBaccalaureate: false,
    labHoursPerWeek: 0,
    lectureHoursPerWeek: 4,
    courseOverviewMarkdown: "Rigorous academic curriculum exploring fundamental and applied principles of MATHEMATICS with structured laboratory and analytical assessment milestones.",
    recommendedTextbooks: [
      "Standard Academic Handbook of MATHEMATICS (12th Edition)",
      "University Press Guided Laboratory & Field Investigation Manual"
    ]
  },
  {
    courseCode: "CRS-HUM-042",
    courseTitle: "Course 42: Comprehensive Inquiries in HUMANITIES Level 5",
    department: "HUMANITIES",
    creditHours: 3,
    gradeLevelsApplicable: ["Grade 9", "Grade 10", "Grade 11", "Grade 12"],
    prerequisiteCourses: ["CRS-HUM-001"],
    corequisites: ["CRS-LAB-042"],
    isAdvancedPlacement: true,
    isInternationalBaccalaureate: false,
    labHoursPerWeek: 2,
    lectureHoursPerWeek: 4,
    courseOverviewMarkdown: "Rigorous academic curriculum exploring fundamental and applied principles of HUMANITIES with structured laboratory and analytical assessment milestones.",
    recommendedTextbooks: [
      "Standard Academic Handbook of HUMANITIES (12th Edition)",
      "University Press Guided Laboratory & Field Investigation Manual"
    ]
  },
  {
    courseCode: "CRS-LAN-043",
    courseTitle: "Course 43: Comprehensive Inquiries in LANGUAGES Level 5",
    department: "LANGUAGES",
    creditHours: 4,
    gradeLevelsApplicable: ["Grade 9", "Grade 10", "Grade 11", "Grade 12"],
    prerequisiteCourses: ["CRS-LAN-001"],
    corequisites: ["CRS-LAB-043"],
    isAdvancedPlacement: false,
    isInternationalBaccalaureate: false,
    labHoursPerWeek: 0,
    lectureHoursPerWeek: 4,
    courseOverviewMarkdown: "Rigorous academic curriculum exploring fundamental and applied principles of LANGUAGES with structured laboratory and analytical assessment milestones.",
    recommendedTextbooks: [
      "Standard Academic Handbook of LANGUAGES (12th Edition)",
      "University Press Guided Laboratory & Field Investigation Manual"
    ]
  },
  {
    courseCode: "CRS-TEC-044",
    courseTitle: "Course 44: Comprehensive Inquiries in TECHNOLOGY Level 5",
    department: "TECHNOLOGY",
    creditHours: 3,
    gradeLevelsApplicable: ["Grade 9", "Grade 10", "Grade 11", "Grade 12"],
    prerequisiteCourses: ["CRS-TEC-001"],
    corequisites: ["CRS-LAB-044"],
    isAdvancedPlacement: false,
    isInternationalBaccalaureate: true,
    labHoursPerWeek: 2,
    lectureHoursPerWeek: 4,
    courseOverviewMarkdown: "Rigorous academic curriculum exploring fundamental and applied principles of TECHNOLOGY with structured laboratory and analytical assessment milestones.",
    recommendedTextbooks: [
      "Standard Academic Handbook of TECHNOLOGY (12th Edition)",
      "University Press Guided Laboratory & Field Investigation Manual"
    ]
  },
  {
    courseCode: "CRS-COM-045",
    courseTitle: "Course 45: Comprehensive Inquiries in COMMERCE Level 5",
    department: "COMMERCE",
    creditHours: 4,
    gradeLevelsApplicable: ["Grade 9", "Grade 10", "Grade 11", "Grade 12"],
    prerequisiteCourses: ["CRS-COM-001"],
    corequisites: ["CRS-LAB-045"],
    isAdvancedPlacement: true,
    isInternationalBaccalaureate: false,
    labHoursPerWeek: 0,
    lectureHoursPerWeek: 4,
    courseOverviewMarkdown: "Rigorous academic curriculum exploring fundamental and applied principles of COMMERCE with structured laboratory and analytical assessment milestones.",
    recommendedTextbooks: [
      "Standard Academic Handbook of COMMERCE (12th Edition)",
      "University Press Guided Laboratory & Field Investigation Manual"
    ]
  },
  {
    courseCode: "CRS-FIN-046",
    courseTitle: "Course 46: Comprehensive Inquiries in FINE_ARTS Level 5",
    department: "FINE_ARTS",
    creditHours: 3,
    gradeLevelsApplicable: ["Grade 9", "Grade 10", "Grade 11", "Grade 12"],
    prerequisiteCourses: ["CRS-FIN-001"],
    corequisites: ["CRS-LAB-046"],
    isAdvancedPlacement: false,
    isInternationalBaccalaureate: true,
    labHoursPerWeek: 2,
    lectureHoursPerWeek: 4,
    courseOverviewMarkdown: "Rigorous academic curriculum exploring fundamental and applied principles of FINE_ARTS with structured laboratory and analytical assessment milestones.",
    recommendedTextbooks: [
      "Standard Academic Handbook of FINE_ARTS (12th Edition)",
      "University Press Guided Laboratory & Field Investigation Manual"
    ]
  },
  {
    courseCode: "CRS-PHY-047",
    courseTitle: "Course 47: Comprehensive Inquiries in PHYSICAL_EDUCATION Level 5",
    department: "PHYSICAL_EDUCATION",
    creditHours: 4,
    gradeLevelsApplicable: ["Grade 9", "Grade 10", "Grade 11", "Grade 12"],
    prerequisiteCourses: ["CRS-PHY-001"],
    corequisites: ["CRS-LAB-047"],
    isAdvancedPlacement: false,
    isInternationalBaccalaureate: false,
    labHoursPerWeek: 0,
    lectureHoursPerWeek: 4,
    courseOverviewMarkdown: "Rigorous academic curriculum exploring fundamental and applied principles of PHYSICAL_EDUCATION with structured laboratory and analytical assessment milestones.",
    recommendedTextbooks: [
      "Standard Academic Handbook of PHYSICAL_EDUCATION (12th Edition)",
      "University Press Guided Laboratory & Field Investigation Manual"
    ]
  },
  {
    courseCode: "CRS-SCI-048",
    courseTitle: "Course 48: Comprehensive Inquiries in SCIENCE Level 5",
    department: "SCIENCE",
    creditHours: 3,
    gradeLevelsApplicable: ["Grade 9", "Grade 10", "Grade 11", "Grade 12"],
    prerequisiteCourses: ["CRS-SCI-001"],
    corequisites: ["CRS-LAB-048"],
    isAdvancedPlacement: true,
    isInternationalBaccalaureate: false,
    labHoursPerWeek: 2,
    lectureHoursPerWeek: 4,
    courseOverviewMarkdown: "Rigorous academic curriculum exploring fundamental and applied principles of SCIENCE with structured laboratory and analytical assessment milestones.",
    recommendedTextbooks: [
      "Standard Academic Handbook of SCIENCE (12th Edition)",
      "University Press Guided Laboratory & Field Investigation Manual"
    ]
  },
  {
    courseCode: "CRS-MAT-049",
    courseTitle: "Course 49: Comprehensive Inquiries in MATHEMATICS Level 5",
    department: "MATHEMATICS",
    creditHours: 4,
    gradeLevelsApplicable: ["Grade 9", "Grade 10", "Grade 11", "Grade 12"],
    prerequisiteCourses: ["CRS-MAT-001"],
    corequisites: ["CRS-LAB-049"],
    isAdvancedPlacement: false,
    isInternationalBaccalaureate: false,
    labHoursPerWeek: 0,
    lectureHoursPerWeek: 4,
    courseOverviewMarkdown: "Rigorous academic curriculum exploring fundamental and applied principles of MATHEMATICS with structured laboratory and analytical assessment milestones.",
    recommendedTextbooks: [
      "Standard Academic Handbook of MATHEMATICS (12th Edition)",
      "University Press Guided Laboratory & Field Investigation Manual"
    ]
  },
  {
    courseCode: "CRS-HUM-050",
    courseTitle: "Course 50: Comprehensive Inquiries in HUMANITIES Level 6",
    department: "HUMANITIES",
    creditHours: 3,
    gradeLevelsApplicable: ["Grade 9", "Grade 10", "Grade 11", "Grade 12"],
    prerequisiteCourses: ["CRS-HUM-001"],
    corequisites: ["CRS-LAB-050"],
    isAdvancedPlacement: false,
    isInternationalBaccalaureate: true,
    labHoursPerWeek: 2,
    lectureHoursPerWeek: 4,
    courseOverviewMarkdown: "Rigorous academic curriculum exploring fundamental and applied principles of HUMANITIES with structured laboratory and analytical assessment milestones.",
    recommendedTextbooks: [
      "Standard Academic Handbook of HUMANITIES (12th Edition)",
      "University Press Guided Laboratory & Field Investigation Manual"
    ]
  },
  {
    courseCode: "CRS-LAN-051",
    courseTitle: "Course 51: Comprehensive Inquiries in LANGUAGES Level 6",
    department: "LANGUAGES",
    creditHours: 4,
    gradeLevelsApplicable: ["Grade 9", "Grade 10", "Grade 11", "Grade 12"],
    prerequisiteCourses: ["CRS-LAN-001"],
    corequisites: ["CRS-LAB-051"],
    isAdvancedPlacement: true,
    isInternationalBaccalaureate: false,
    labHoursPerWeek: 0,
    lectureHoursPerWeek: 4,
    courseOverviewMarkdown: "Rigorous academic curriculum exploring fundamental and applied principles of LANGUAGES with structured laboratory and analytical assessment milestones.",
    recommendedTextbooks: [
      "Standard Academic Handbook of LANGUAGES (12th Edition)",
      "University Press Guided Laboratory & Field Investigation Manual"
    ]
  },
  {
    courseCode: "CRS-TEC-052",
    courseTitle: "Course 52: Comprehensive Inquiries in TECHNOLOGY Level 6",
    department: "TECHNOLOGY",
    creditHours: 3,
    gradeLevelsApplicable: ["Grade 9", "Grade 10", "Grade 11", "Grade 12"],
    prerequisiteCourses: ["CRS-TEC-001"],
    corequisites: ["CRS-LAB-052"],
    isAdvancedPlacement: false,
    isInternationalBaccalaureate: true,
    labHoursPerWeek: 2,
    lectureHoursPerWeek: 4,
    courseOverviewMarkdown: "Rigorous academic curriculum exploring fundamental and applied principles of TECHNOLOGY with structured laboratory and analytical assessment milestones.",
    recommendedTextbooks: [
      "Standard Academic Handbook of TECHNOLOGY (12th Edition)",
      "University Press Guided Laboratory & Field Investigation Manual"
    ]
  },
  {
    courseCode: "CRS-COM-053",
    courseTitle: "Course 53: Comprehensive Inquiries in COMMERCE Level 6",
    department: "COMMERCE",
    creditHours: 4,
    gradeLevelsApplicable: ["Grade 9", "Grade 10", "Grade 11", "Grade 12"],
    prerequisiteCourses: ["CRS-COM-001"],
    corequisites: ["CRS-LAB-053"],
    isAdvancedPlacement: false,
    isInternationalBaccalaureate: false,
    labHoursPerWeek: 0,
    lectureHoursPerWeek: 4,
    courseOverviewMarkdown: "Rigorous academic curriculum exploring fundamental and applied principles of COMMERCE with structured laboratory and analytical assessment milestones.",
    recommendedTextbooks: [
      "Standard Academic Handbook of COMMERCE (12th Edition)",
      "University Press Guided Laboratory & Field Investigation Manual"
    ]
  },
  {
    courseCode: "CRS-FIN-054",
    courseTitle: "Course 54: Comprehensive Inquiries in FINE_ARTS Level 6",
    department: "FINE_ARTS",
    creditHours: 3,
    gradeLevelsApplicable: ["Grade 9", "Grade 10", "Grade 11", "Grade 12"],
    prerequisiteCourses: ["CRS-FIN-001"],
    corequisites: ["CRS-LAB-054"],
    isAdvancedPlacement: true,
    isInternationalBaccalaureate: false,
    labHoursPerWeek: 2,
    lectureHoursPerWeek: 4,
    courseOverviewMarkdown: "Rigorous academic curriculum exploring fundamental and applied principles of FINE_ARTS with structured laboratory and analytical assessment milestones.",
    recommendedTextbooks: [
      "Standard Academic Handbook of FINE_ARTS (12th Edition)",
      "University Press Guided Laboratory & Field Investigation Manual"
    ]
  },
  {
    courseCode: "CRS-PHY-055",
    courseTitle: "Course 55: Comprehensive Inquiries in PHYSICAL_EDUCATION Level 6",
    department: "PHYSICAL_EDUCATION",
    creditHours: 4,
    gradeLevelsApplicable: ["Grade 9", "Grade 10", "Grade 11", "Grade 12"],
    prerequisiteCourses: ["CRS-PHY-001"],
    corequisites: ["CRS-LAB-055"],
    isAdvancedPlacement: false,
    isInternationalBaccalaureate: false,
    labHoursPerWeek: 0,
    lectureHoursPerWeek: 4,
    courseOverviewMarkdown: "Rigorous academic curriculum exploring fundamental and applied principles of PHYSICAL_EDUCATION with structured laboratory and analytical assessment milestones.",
    recommendedTextbooks: [
      "Standard Academic Handbook of PHYSICAL_EDUCATION (12th Edition)",
      "University Press Guided Laboratory & Field Investigation Manual"
    ]
  },
  {
    courseCode: "CRS-SCI-056",
    courseTitle: "Course 56: Comprehensive Inquiries in SCIENCE Level 6",
    department: "SCIENCE",
    creditHours: 3,
    gradeLevelsApplicable: ["Grade 9", "Grade 10", "Grade 11", "Grade 12"],
    prerequisiteCourses: ["CRS-SCI-001"],
    corequisites: ["CRS-LAB-056"],
    isAdvancedPlacement: false,
    isInternationalBaccalaureate: true,
    labHoursPerWeek: 2,
    lectureHoursPerWeek: 4,
    courseOverviewMarkdown: "Rigorous academic curriculum exploring fundamental and applied principles of SCIENCE with structured laboratory and analytical assessment milestones.",
    recommendedTextbooks: [
      "Standard Academic Handbook of SCIENCE (12th Edition)",
      "University Press Guided Laboratory & Field Investigation Manual"
    ]
  },
  {
    courseCode: "CRS-MAT-057",
    courseTitle: "Course 57: Comprehensive Inquiries in MATHEMATICS Level 6",
    department: "MATHEMATICS",
    creditHours: 4,
    gradeLevelsApplicable: ["Grade 9", "Grade 10", "Grade 11", "Grade 12"],
    prerequisiteCourses: ["CRS-MAT-001"],
    corequisites: ["CRS-LAB-057"],
    isAdvancedPlacement: true,
    isInternationalBaccalaureate: false,
    labHoursPerWeek: 0,
    lectureHoursPerWeek: 4,
    courseOverviewMarkdown: "Rigorous academic curriculum exploring fundamental and applied principles of MATHEMATICS with structured laboratory and analytical assessment milestones.",
    recommendedTextbooks: [
      "Standard Academic Handbook of MATHEMATICS (12th Edition)",
      "University Press Guided Laboratory & Field Investigation Manual"
    ]
  },
  {
    courseCode: "CRS-HUM-058",
    courseTitle: "Course 58: Comprehensive Inquiries in HUMANITIES Level 6",
    department: "HUMANITIES",
    creditHours: 3,
    gradeLevelsApplicable: ["Grade 9", "Grade 10", "Grade 11", "Grade 12"],
    prerequisiteCourses: ["CRS-HUM-001"],
    corequisites: ["CRS-LAB-058"],
    isAdvancedPlacement: false,
    isInternationalBaccalaureate: true,
    labHoursPerWeek: 2,
    lectureHoursPerWeek: 4,
    courseOverviewMarkdown: "Rigorous academic curriculum exploring fundamental and applied principles of HUMANITIES with structured laboratory and analytical assessment milestones.",
    recommendedTextbooks: [
      "Standard Academic Handbook of HUMANITIES (12th Edition)",
      "University Press Guided Laboratory & Field Investigation Manual"
    ]
  },
  {
    courseCode: "CRS-LAN-059",
    courseTitle: "Course 59: Comprehensive Inquiries in LANGUAGES Level 6",
    department: "LANGUAGES",
    creditHours: 4,
    gradeLevelsApplicable: ["Grade 9", "Grade 10", "Grade 11", "Grade 12"],
    prerequisiteCourses: ["CRS-LAN-001"],
    corequisites: ["CRS-LAB-059"],
    isAdvancedPlacement: false,
    isInternationalBaccalaureate: false,
    labHoursPerWeek: 0,
    lectureHoursPerWeek: 4,
    courseOverviewMarkdown: "Rigorous academic curriculum exploring fundamental and applied principles of LANGUAGES with structured laboratory and analytical assessment milestones.",
    recommendedTextbooks: [
      "Standard Academic Handbook of LANGUAGES (12th Edition)",
      "University Press Guided Laboratory & Field Investigation Manual"
    ]
  },
  {
    courseCode: "CRS-TEC-060",
    courseTitle: "Course 60: Comprehensive Inquiries in TECHNOLOGY Level 7",
    department: "TECHNOLOGY",
    creditHours: 3,
    gradeLevelsApplicable: ["Grade 9", "Grade 10", "Grade 11", "Grade 12"],
    prerequisiteCourses: ["CRS-TEC-001"],
    corequisites: ["CRS-LAB-060"],
    isAdvancedPlacement: true,
    isInternationalBaccalaureate: false,
    labHoursPerWeek: 2,
    lectureHoursPerWeek: 4,
    courseOverviewMarkdown: "Rigorous academic curriculum exploring fundamental and applied principles of TECHNOLOGY with structured laboratory and analytical assessment milestones.",
    recommendedTextbooks: [
      "Standard Academic Handbook of TECHNOLOGY (12th Edition)",
      "University Press Guided Laboratory & Field Investigation Manual"
    ]
  },
  {
    courseCode: "CRS-COM-061",
    courseTitle: "Course 61: Comprehensive Inquiries in COMMERCE Level 7",
    department: "COMMERCE",
    creditHours: 4,
    gradeLevelsApplicable: ["Grade 9", "Grade 10", "Grade 11", "Grade 12"],
    prerequisiteCourses: ["CRS-COM-001"],
    corequisites: ["CRS-LAB-061"],
    isAdvancedPlacement: false,
    isInternationalBaccalaureate: false,
    labHoursPerWeek: 0,
    lectureHoursPerWeek: 4,
    courseOverviewMarkdown: "Rigorous academic curriculum exploring fundamental and applied principles of COMMERCE with structured laboratory and analytical assessment milestones.",
    recommendedTextbooks: [
      "Standard Academic Handbook of COMMERCE (12th Edition)",
      "University Press Guided Laboratory & Field Investigation Manual"
    ]
  },
  {
    courseCode: "CRS-FIN-062",
    courseTitle: "Course 62: Comprehensive Inquiries in FINE_ARTS Level 7",
    department: "FINE_ARTS",
    creditHours: 3,
    gradeLevelsApplicable: ["Grade 9", "Grade 10", "Grade 11", "Grade 12"],
    prerequisiteCourses: ["CRS-FIN-001"],
    corequisites: ["CRS-LAB-062"],
    isAdvancedPlacement: false,
    isInternationalBaccalaureate: true,
    labHoursPerWeek: 2,
    lectureHoursPerWeek: 4,
    courseOverviewMarkdown: "Rigorous academic curriculum exploring fundamental and applied principles of FINE_ARTS with structured laboratory and analytical assessment milestones.",
    recommendedTextbooks: [
      "Standard Academic Handbook of FINE_ARTS (12th Edition)",
      "University Press Guided Laboratory & Field Investigation Manual"
    ]
  },
  {
    courseCode: "CRS-PHY-063",
    courseTitle: "Course 63: Comprehensive Inquiries in PHYSICAL_EDUCATION Level 7",
    department: "PHYSICAL_EDUCATION",
    creditHours: 4,
    gradeLevelsApplicable: ["Grade 9", "Grade 10", "Grade 11", "Grade 12"],
    prerequisiteCourses: ["CRS-PHY-001"],
    corequisites: ["CRS-LAB-063"],
    isAdvancedPlacement: true,
    isInternationalBaccalaureate: false,
    labHoursPerWeek: 0,
    lectureHoursPerWeek: 4,
    courseOverviewMarkdown: "Rigorous academic curriculum exploring fundamental and applied principles of PHYSICAL_EDUCATION with structured laboratory and analytical assessment milestones.",
    recommendedTextbooks: [
      "Standard Academic Handbook of PHYSICAL_EDUCATION (12th Edition)",
      "University Press Guided Laboratory & Field Investigation Manual"
    ]
  },
  {
    courseCode: "CRS-SCI-064",
    courseTitle: "Course 64: Comprehensive Inquiries in SCIENCE Level 7",
    department: "SCIENCE",
    creditHours: 3,
    gradeLevelsApplicable: ["Grade 9", "Grade 10", "Grade 11", "Grade 12"],
    prerequisiteCourses: ["CRS-SCI-001"],
    corequisites: ["CRS-LAB-064"],
    isAdvancedPlacement: false,
    isInternationalBaccalaureate: true,
    labHoursPerWeek: 2,
    lectureHoursPerWeek: 4,
    courseOverviewMarkdown: "Rigorous academic curriculum exploring fundamental and applied principles of SCIENCE with structured laboratory and analytical assessment milestones.",
    recommendedTextbooks: [
      "Standard Academic Handbook of SCIENCE (12th Edition)",
      "University Press Guided Laboratory & Field Investigation Manual"
    ]
  },
  {
    courseCode: "CRS-MAT-065",
    courseTitle: "Course 65: Comprehensive Inquiries in MATHEMATICS Level 7",
    department: "MATHEMATICS",
    creditHours: 4,
    gradeLevelsApplicable: ["Grade 9", "Grade 10", "Grade 11", "Grade 12"],
    prerequisiteCourses: ["CRS-MAT-001"],
    corequisites: ["CRS-LAB-065"],
    isAdvancedPlacement: false,
    isInternationalBaccalaureate: false,
    labHoursPerWeek: 0,
    lectureHoursPerWeek: 4,
    courseOverviewMarkdown: "Rigorous academic curriculum exploring fundamental and applied principles of MATHEMATICS with structured laboratory and analytical assessment milestones.",
    recommendedTextbooks: [
      "Standard Academic Handbook of MATHEMATICS (12th Edition)",
      "University Press Guided Laboratory & Field Investigation Manual"
    ]
  },
  {
    courseCode: "CRS-HUM-066",
    courseTitle: "Course 66: Comprehensive Inquiries in HUMANITIES Level 7",
    department: "HUMANITIES",
    creditHours: 3,
    gradeLevelsApplicable: ["Grade 9", "Grade 10", "Grade 11", "Grade 12"],
    prerequisiteCourses: ["CRS-HUM-001"],
    corequisites: ["CRS-LAB-066"],
    isAdvancedPlacement: true,
    isInternationalBaccalaureate: false,
    labHoursPerWeek: 2,
    lectureHoursPerWeek: 4,
    courseOverviewMarkdown: "Rigorous academic curriculum exploring fundamental and applied principles of HUMANITIES with structured laboratory and analytical assessment milestones.",
    recommendedTextbooks: [
      "Standard Academic Handbook of HUMANITIES (12th Edition)",
      "University Press Guided Laboratory & Field Investigation Manual"
    ]
  },
  {
    courseCode: "CRS-LAN-067",
    courseTitle: "Course 67: Comprehensive Inquiries in LANGUAGES Level 7",
    department: "LANGUAGES",
    creditHours: 4,
    gradeLevelsApplicable: ["Grade 9", "Grade 10", "Grade 11", "Grade 12"],
    prerequisiteCourses: ["CRS-LAN-001"],
    corequisites: ["CRS-LAB-067"],
    isAdvancedPlacement: false,
    isInternationalBaccalaureate: false,
    labHoursPerWeek: 0,
    lectureHoursPerWeek: 4,
    courseOverviewMarkdown: "Rigorous academic curriculum exploring fundamental and applied principles of LANGUAGES with structured laboratory and analytical assessment milestones.",
    recommendedTextbooks: [
      "Standard Academic Handbook of LANGUAGES (12th Edition)",
      "University Press Guided Laboratory & Field Investigation Manual"
    ]
  },
  {
    courseCode: "CRS-TEC-068",
    courseTitle: "Course 68: Comprehensive Inquiries in TECHNOLOGY Level 7",
    department: "TECHNOLOGY",
    creditHours: 3,
    gradeLevelsApplicable: ["Grade 9", "Grade 10", "Grade 11", "Grade 12"],
    prerequisiteCourses: ["CRS-TEC-001"],
    corequisites: ["CRS-LAB-068"],
    isAdvancedPlacement: false,
    isInternationalBaccalaureate: true,
    labHoursPerWeek: 2,
    lectureHoursPerWeek: 4,
    courseOverviewMarkdown: "Rigorous academic curriculum exploring fundamental and applied principles of TECHNOLOGY with structured laboratory and analytical assessment milestones.",
    recommendedTextbooks: [
      "Standard Academic Handbook of TECHNOLOGY (12th Edition)",
      "University Press Guided Laboratory & Field Investigation Manual"
    ]
  },
  {
    courseCode: "CRS-COM-069",
    courseTitle: "Course 69: Comprehensive Inquiries in COMMERCE Level 7",
    department: "COMMERCE",
    creditHours: 4,
    gradeLevelsApplicable: ["Grade 9", "Grade 10", "Grade 11", "Grade 12"],
    prerequisiteCourses: ["CRS-COM-001"],
    corequisites: ["CRS-LAB-069"],
    isAdvancedPlacement: true,
    isInternationalBaccalaureate: false,
    labHoursPerWeek: 0,
    lectureHoursPerWeek: 4,
    courseOverviewMarkdown: "Rigorous academic curriculum exploring fundamental and applied principles of COMMERCE with structured laboratory and analytical assessment milestones.",
    recommendedTextbooks: [
      "Standard Academic Handbook of COMMERCE (12th Edition)",
      "University Press Guided Laboratory & Field Investigation Manual"
    ]
  },
  {
    courseCode: "CRS-FIN-070",
    courseTitle: "Course 70: Comprehensive Inquiries in FINE_ARTS Level 8",
    department: "FINE_ARTS",
    creditHours: 3,
    gradeLevelsApplicable: ["Grade 9", "Grade 10", "Grade 11", "Grade 12"],
    prerequisiteCourses: ["CRS-FIN-001"],
    corequisites: ["CRS-LAB-070"],
    isAdvancedPlacement: false,
    isInternationalBaccalaureate: true,
    labHoursPerWeek: 2,
    lectureHoursPerWeek: 4,
    courseOverviewMarkdown: "Rigorous academic curriculum exploring fundamental and applied principles of FINE_ARTS with structured laboratory and analytical assessment milestones.",
    recommendedTextbooks: [
      "Standard Academic Handbook of FINE_ARTS (12th Edition)",
      "University Press Guided Laboratory & Field Investigation Manual"
    ]
  },
  {
    courseCode: "CRS-PHY-071",
    courseTitle: "Course 71: Comprehensive Inquiries in PHYSICAL_EDUCATION Level 8",
    department: "PHYSICAL_EDUCATION",
    creditHours: 4,
    gradeLevelsApplicable: ["Grade 9", "Grade 10", "Grade 11", "Grade 12"],
    prerequisiteCourses: ["CRS-PHY-001"],
    corequisites: ["CRS-LAB-071"],
    isAdvancedPlacement: false,
    isInternationalBaccalaureate: false,
    labHoursPerWeek: 0,
    lectureHoursPerWeek: 4,
    courseOverviewMarkdown: "Rigorous academic curriculum exploring fundamental and applied principles of PHYSICAL_EDUCATION with structured laboratory and analytical assessment milestones.",
    recommendedTextbooks: [
      "Standard Academic Handbook of PHYSICAL_EDUCATION (12th Edition)",
      "University Press Guided Laboratory & Field Investigation Manual"
    ]
  },
  {
    courseCode: "CRS-SCI-072",
    courseTitle: "Course 72: Comprehensive Inquiries in SCIENCE Level 8",
    department: "SCIENCE",
    creditHours: 3,
    gradeLevelsApplicable: ["Grade 9", "Grade 10", "Grade 11", "Grade 12"],
    prerequisiteCourses: ["CRS-SCI-001"],
    corequisites: ["CRS-LAB-072"],
    isAdvancedPlacement: true,
    isInternationalBaccalaureate: false,
    labHoursPerWeek: 2,
    lectureHoursPerWeek: 4,
    courseOverviewMarkdown: "Rigorous academic curriculum exploring fundamental and applied principles of SCIENCE with structured laboratory and analytical assessment milestones.",
    recommendedTextbooks: [
      "Standard Academic Handbook of SCIENCE (12th Edition)",
      "University Press Guided Laboratory & Field Investigation Manual"
    ]
  },
  {
    courseCode: "CRS-MAT-073",
    courseTitle: "Course 73: Comprehensive Inquiries in MATHEMATICS Level 8",
    department: "MATHEMATICS",
    creditHours: 4,
    gradeLevelsApplicable: ["Grade 9", "Grade 10", "Grade 11", "Grade 12"],
    prerequisiteCourses: ["CRS-MAT-001"],
    corequisites: ["CRS-LAB-073"],
    isAdvancedPlacement: false,
    isInternationalBaccalaureate: false,
    labHoursPerWeek: 0,
    lectureHoursPerWeek: 4,
    courseOverviewMarkdown: "Rigorous academic curriculum exploring fundamental and applied principles of MATHEMATICS with structured laboratory and analytical assessment milestones.",
    recommendedTextbooks: [
      "Standard Academic Handbook of MATHEMATICS (12th Edition)",
      "University Press Guided Laboratory & Field Investigation Manual"
    ]
  },
  {
    courseCode: "CRS-HUM-074",
    courseTitle: "Course 74: Comprehensive Inquiries in HUMANITIES Level 8",
    department: "HUMANITIES",
    creditHours: 3,
    gradeLevelsApplicable: ["Grade 9", "Grade 10", "Grade 11", "Grade 12"],
    prerequisiteCourses: ["CRS-HUM-001"],
    corequisites: ["CRS-LAB-074"],
    isAdvancedPlacement: false,
    isInternationalBaccalaureate: true,
    labHoursPerWeek: 2,
    lectureHoursPerWeek: 4,
    courseOverviewMarkdown: "Rigorous academic curriculum exploring fundamental and applied principles of HUMANITIES with structured laboratory and analytical assessment milestones.",
    recommendedTextbooks: [
      "Standard Academic Handbook of HUMANITIES (12th Edition)",
      "University Press Guided Laboratory & Field Investigation Manual"
    ]
  },
  {
    courseCode: "CRS-LAN-075",
    courseTitle: "Course 75: Comprehensive Inquiries in LANGUAGES Level 8",
    department: "LANGUAGES",
    creditHours: 4,
    gradeLevelsApplicable: ["Grade 9", "Grade 10", "Grade 11", "Grade 12"],
    prerequisiteCourses: ["CRS-LAN-001"],
    corequisites: ["CRS-LAB-075"],
    isAdvancedPlacement: true,
    isInternationalBaccalaureate: false,
    labHoursPerWeek: 0,
    lectureHoursPerWeek: 4,
    courseOverviewMarkdown: "Rigorous academic curriculum exploring fundamental and applied principles of LANGUAGES with structured laboratory and analytical assessment milestones.",
    recommendedTextbooks: [
      "Standard Academic Handbook of LANGUAGES (12th Edition)",
      "University Press Guided Laboratory & Field Investigation Manual"
    ]
  },
  {
    courseCode: "CRS-TEC-076",
    courseTitle: "Course 76: Comprehensive Inquiries in TECHNOLOGY Level 8",
    department: "TECHNOLOGY",
    creditHours: 3,
    gradeLevelsApplicable: ["Grade 9", "Grade 10", "Grade 11", "Grade 12"],
    prerequisiteCourses: ["CRS-TEC-001"],
    corequisites: ["CRS-LAB-076"],
    isAdvancedPlacement: false,
    isInternationalBaccalaureate: true,
    labHoursPerWeek: 2,
    lectureHoursPerWeek: 4,
    courseOverviewMarkdown: "Rigorous academic curriculum exploring fundamental and applied principles of TECHNOLOGY with structured laboratory and analytical assessment milestones.",
    recommendedTextbooks: [
      "Standard Academic Handbook of TECHNOLOGY (12th Edition)",
      "University Press Guided Laboratory & Field Investigation Manual"
    ]
  },
  {
    courseCode: "CRS-COM-077",
    courseTitle: "Course 77: Comprehensive Inquiries in COMMERCE Level 8",
    department: "COMMERCE",
    creditHours: 4,
    gradeLevelsApplicable: ["Grade 9", "Grade 10", "Grade 11", "Grade 12"],
    prerequisiteCourses: ["CRS-COM-001"],
    corequisites: ["CRS-LAB-077"],
    isAdvancedPlacement: false,
    isInternationalBaccalaureate: false,
    labHoursPerWeek: 0,
    lectureHoursPerWeek: 4,
    courseOverviewMarkdown: "Rigorous academic curriculum exploring fundamental and applied principles of COMMERCE with structured laboratory and analytical assessment milestones.",
    recommendedTextbooks: [
      "Standard Academic Handbook of COMMERCE (12th Edition)",
      "University Press Guided Laboratory & Field Investigation Manual"
    ]
  },
  {
    courseCode: "CRS-FIN-078",
    courseTitle: "Course 78: Comprehensive Inquiries in FINE_ARTS Level 8",
    department: "FINE_ARTS",
    creditHours: 3,
    gradeLevelsApplicable: ["Grade 9", "Grade 10", "Grade 11", "Grade 12"],
    prerequisiteCourses: ["CRS-FIN-001"],
    corequisites: ["CRS-LAB-078"],
    isAdvancedPlacement: true,
    isInternationalBaccalaureate: false,
    labHoursPerWeek: 2,
    lectureHoursPerWeek: 4,
    courseOverviewMarkdown: "Rigorous academic curriculum exploring fundamental and applied principles of FINE_ARTS with structured laboratory and analytical assessment milestones.",
    recommendedTextbooks: [
      "Standard Academic Handbook of FINE_ARTS (12th Edition)",
      "University Press Guided Laboratory & Field Investigation Manual"
    ]
  },
  {
    courseCode: "CRS-PHY-079",
    courseTitle: "Course 79: Comprehensive Inquiries in PHYSICAL_EDUCATION Level 8",
    department: "PHYSICAL_EDUCATION",
    creditHours: 4,
    gradeLevelsApplicable: ["Grade 9", "Grade 10", "Grade 11", "Grade 12"],
    prerequisiteCourses: ["CRS-PHY-001"],
    corequisites: ["CRS-LAB-079"],
    isAdvancedPlacement: false,
    isInternationalBaccalaureate: false,
    labHoursPerWeek: 0,
    lectureHoursPerWeek: 4,
    courseOverviewMarkdown: "Rigorous academic curriculum exploring fundamental and applied principles of PHYSICAL_EDUCATION with structured laboratory and analytical assessment milestones.",
    recommendedTextbooks: [
      "Standard Academic Handbook of PHYSICAL_EDUCATION (12th Edition)",
      "University Press Guided Laboratory & Field Investigation Manual"
    ]
  },
  {
    courseCode: "CRS-SCI-080",
    courseTitle: "Course 80: Comprehensive Inquiries in SCIENCE Level 9",
    department: "SCIENCE",
    creditHours: 3,
    gradeLevelsApplicable: ["Grade 9", "Grade 10", "Grade 11", "Grade 12"],
    prerequisiteCourses: ["CRS-SCI-001"],
    corequisites: ["CRS-LAB-080"],
    isAdvancedPlacement: false,
    isInternationalBaccalaureate: true,
    labHoursPerWeek: 2,
    lectureHoursPerWeek: 4,
    courseOverviewMarkdown: "Rigorous academic curriculum exploring fundamental and applied principles of SCIENCE with structured laboratory and analytical assessment milestones.",
    recommendedTextbooks: [
      "Standard Academic Handbook of SCIENCE (12th Edition)",
      "University Press Guided Laboratory & Field Investigation Manual"
    ]
  },
  {
    courseCode: "CRS-MAT-081",
    courseTitle: "Course 81: Comprehensive Inquiries in MATHEMATICS Level 9",
    department: "MATHEMATICS",
    creditHours: 4,
    gradeLevelsApplicable: ["Grade 9", "Grade 10", "Grade 11", "Grade 12"],
    prerequisiteCourses: ["CRS-MAT-001"],
    corequisites: ["CRS-LAB-081"],
    isAdvancedPlacement: true,
    isInternationalBaccalaureate: false,
    labHoursPerWeek: 0,
    lectureHoursPerWeek: 4,
    courseOverviewMarkdown: "Rigorous academic curriculum exploring fundamental and applied principles of MATHEMATICS with structured laboratory and analytical assessment milestones.",
    recommendedTextbooks: [
      "Standard Academic Handbook of MATHEMATICS (12th Edition)",
      "University Press Guided Laboratory & Field Investigation Manual"
    ]
  },
  {
    courseCode: "CRS-HUM-082",
    courseTitle: "Course 82: Comprehensive Inquiries in HUMANITIES Level 9",
    department: "HUMANITIES",
    creditHours: 3,
    gradeLevelsApplicable: ["Grade 9", "Grade 10", "Grade 11", "Grade 12"],
    prerequisiteCourses: ["CRS-HUM-001"],
    corequisites: ["CRS-LAB-082"],
    isAdvancedPlacement: false,
    isInternationalBaccalaureate: true,
    labHoursPerWeek: 2,
    lectureHoursPerWeek: 4,
    courseOverviewMarkdown: "Rigorous academic curriculum exploring fundamental and applied principles of HUMANITIES with structured laboratory and analytical assessment milestones.",
    recommendedTextbooks: [
      "Standard Academic Handbook of HUMANITIES (12th Edition)",
      "University Press Guided Laboratory & Field Investigation Manual"
    ]
  },
  {
    courseCode: "CRS-LAN-083",
    courseTitle: "Course 83: Comprehensive Inquiries in LANGUAGES Level 9",
    department: "LANGUAGES",
    creditHours: 4,
    gradeLevelsApplicable: ["Grade 9", "Grade 10", "Grade 11", "Grade 12"],
    prerequisiteCourses: ["CRS-LAN-001"],
    corequisites: ["CRS-LAB-083"],
    isAdvancedPlacement: false,
    isInternationalBaccalaureate: false,
    labHoursPerWeek: 0,
    lectureHoursPerWeek: 4,
    courseOverviewMarkdown: "Rigorous academic curriculum exploring fundamental and applied principles of LANGUAGES with structured laboratory and analytical assessment milestones.",
    recommendedTextbooks: [
      "Standard Academic Handbook of LANGUAGES (12th Edition)",
      "University Press Guided Laboratory & Field Investigation Manual"
    ]
  },
  {
    courseCode: "CRS-TEC-084",
    courseTitle: "Course 84: Comprehensive Inquiries in TECHNOLOGY Level 9",
    department: "TECHNOLOGY",
    creditHours: 3,
    gradeLevelsApplicable: ["Grade 9", "Grade 10", "Grade 11", "Grade 12"],
    prerequisiteCourses: ["CRS-TEC-001"],
    corequisites: ["CRS-LAB-084"],
    isAdvancedPlacement: true,
    isInternationalBaccalaureate: false,
    labHoursPerWeek: 2,
    lectureHoursPerWeek: 4,
    courseOverviewMarkdown: "Rigorous academic curriculum exploring fundamental and applied principles of TECHNOLOGY with structured laboratory and analytical assessment milestones.",
    recommendedTextbooks: [
      "Standard Academic Handbook of TECHNOLOGY (12th Edition)",
      "University Press Guided Laboratory & Field Investigation Manual"
    ]
  },
  {
    courseCode: "CRS-COM-085",
    courseTitle: "Course 85: Comprehensive Inquiries in COMMERCE Level 9",
    department: "COMMERCE",
    creditHours: 4,
    gradeLevelsApplicable: ["Grade 9", "Grade 10", "Grade 11", "Grade 12"],
    prerequisiteCourses: ["CRS-COM-001"],
    corequisites: ["CRS-LAB-085"],
    isAdvancedPlacement: false,
    isInternationalBaccalaureate: false,
    labHoursPerWeek: 0,
    lectureHoursPerWeek: 4,
    courseOverviewMarkdown: "Rigorous academic curriculum exploring fundamental and applied principles of COMMERCE with structured laboratory and analytical assessment milestones.",
    recommendedTextbooks: [
      "Standard Academic Handbook of COMMERCE (12th Edition)",
      "University Press Guided Laboratory & Field Investigation Manual"
    ]
  },
  {
    courseCode: "CRS-FIN-086",
    courseTitle: "Course 86: Comprehensive Inquiries in FINE_ARTS Level 9",
    department: "FINE_ARTS",
    creditHours: 3,
    gradeLevelsApplicable: ["Grade 9", "Grade 10", "Grade 11", "Grade 12"],
    prerequisiteCourses: ["CRS-FIN-001"],
    corequisites: ["CRS-LAB-086"],
    isAdvancedPlacement: false,
    isInternationalBaccalaureate: true,
    labHoursPerWeek: 2,
    lectureHoursPerWeek: 4,
    courseOverviewMarkdown: "Rigorous academic curriculum exploring fundamental and applied principles of FINE_ARTS with structured laboratory and analytical assessment milestones.",
    recommendedTextbooks: [
      "Standard Academic Handbook of FINE_ARTS (12th Edition)",
      "University Press Guided Laboratory & Field Investigation Manual"
    ]
  },
  {
    courseCode: "CRS-PHY-087",
    courseTitle: "Course 87: Comprehensive Inquiries in PHYSICAL_EDUCATION Level 9",
    department: "PHYSICAL_EDUCATION",
    creditHours: 4,
    gradeLevelsApplicable: ["Grade 9", "Grade 10", "Grade 11", "Grade 12"],
    prerequisiteCourses: ["CRS-PHY-001"],
    corequisites: ["CRS-LAB-087"],
    isAdvancedPlacement: true,
    isInternationalBaccalaureate: false,
    labHoursPerWeek: 0,
    lectureHoursPerWeek: 4,
    courseOverviewMarkdown: "Rigorous academic curriculum exploring fundamental and applied principles of PHYSICAL_EDUCATION with structured laboratory and analytical assessment milestones.",
    recommendedTextbooks: [
      "Standard Academic Handbook of PHYSICAL_EDUCATION (12th Edition)",
      "University Press Guided Laboratory & Field Investigation Manual"
    ]
  },
  {
    courseCode: "CRS-SCI-088",
    courseTitle: "Course 88: Comprehensive Inquiries in SCIENCE Level 9",
    department: "SCIENCE",
    creditHours: 3,
    gradeLevelsApplicable: ["Grade 9", "Grade 10", "Grade 11", "Grade 12"],
    prerequisiteCourses: ["CRS-SCI-001"],
    corequisites: ["CRS-LAB-088"],
    isAdvancedPlacement: false,
    isInternationalBaccalaureate: true,
    labHoursPerWeek: 2,
    lectureHoursPerWeek: 4,
    courseOverviewMarkdown: "Rigorous academic curriculum exploring fundamental and applied principles of SCIENCE with structured laboratory and analytical assessment milestones.",
    recommendedTextbooks: [
      "Standard Academic Handbook of SCIENCE (12th Edition)",
      "University Press Guided Laboratory & Field Investigation Manual"
    ]
  },
  {
    courseCode: "CRS-MAT-089",
    courseTitle: "Course 89: Comprehensive Inquiries in MATHEMATICS Level 9",
    department: "MATHEMATICS",
    creditHours: 4,
    gradeLevelsApplicable: ["Grade 9", "Grade 10", "Grade 11", "Grade 12"],
    prerequisiteCourses: ["CRS-MAT-001"],
    corequisites: ["CRS-LAB-089"],
    isAdvancedPlacement: false,
    isInternationalBaccalaureate: false,
    labHoursPerWeek: 0,
    lectureHoursPerWeek: 4,
    courseOverviewMarkdown: "Rigorous academic curriculum exploring fundamental and applied principles of MATHEMATICS with structured laboratory and analytical assessment milestones.",
    recommendedTextbooks: [
      "Standard Academic Handbook of MATHEMATICS (12th Edition)",
      "University Press Guided Laboratory & Field Investigation Manual"
    ]
  },
  {
    courseCode: "CRS-HUM-090",
    courseTitle: "Course 90: Comprehensive Inquiries in HUMANITIES Level 10",
    department: "HUMANITIES",
    creditHours: 3,
    gradeLevelsApplicable: ["Grade 9", "Grade 10", "Grade 11", "Grade 12"],
    prerequisiteCourses: ["CRS-HUM-001"],
    corequisites: ["CRS-LAB-090"],
    isAdvancedPlacement: true,
    isInternationalBaccalaureate: false,
    labHoursPerWeek: 2,
    lectureHoursPerWeek: 4,
    courseOverviewMarkdown: "Rigorous academic curriculum exploring fundamental and applied principles of HUMANITIES with structured laboratory and analytical assessment milestones.",
    recommendedTextbooks: [
      "Standard Academic Handbook of HUMANITIES (12th Edition)",
      "University Press Guided Laboratory & Field Investigation Manual"
    ]
  },
  {
    courseCode: "CRS-LAN-091",
    courseTitle: "Course 91: Comprehensive Inquiries in LANGUAGES Level 10",
    department: "LANGUAGES",
    creditHours: 4,
    gradeLevelsApplicable: ["Grade 9", "Grade 10", "Grade 11", "Grade 12"],
    prerequisiteCourses: ["CRS-LAN-001"],
    corequisites: ["CRS-LAB-091"],
    isAdvancedPlacement: false,
    isInternationalBaccalaureate: false,
    labHoursPerWeek: 0,
    lectureHoursPerWeek: 4,
    courseOverviewMarkdown: "Rigorous academic curriculum exploring fundamental and applied principles of LANGUAGES with structured laboratory and analytical assessment milestones.",
    recommendedTextbooks: [
      "Standard Academic Handbook of LANGUAGES (12th Edition)",
      "University Press Guided Laboratory & Field Investigation Manual"
    ]
  },
  {
    courseCode: "CRS-TEC-092",
    courseTitle: "Course 92: Comprehensive Inquiries in TECHNOLOGY Level 10",
    department: "TECHNOLOGY",
    creditHours: 3,
    gradeLevelsApplicable: ["Grade 9", "Grade 10", "Grade 11", "Grade 12"],
    prerequisiteCourses: ["CRS-TEC-001"],
    corequisites: ["CRS-LAB-092"],
    isAdvancedPlacement: false,
    isInternationalBaccalaureate: true,
    labHoursPerWeek: 2,
    lectureHoursPerWeek: 4,
    courseOverviewMarkdown: "Rigorous academic curriculum exploring fundamental and applied principles of TECHNOLOGY with structured laboratory and analytical assessment milestones.",
    recommendedTextbooks: [
      "Standard Academic Handbook of TECHNOLOGY (12th Edition)",
      "University Press Guided Laboratory & Field Investigation Manual"
    ]
  },
  {
    courseCode: "CRS-COM-093",
    courseTitle: "Course 93: Comprehensive Inquiries in COMMERCE Level 10",
    department: "COMMERCE",
    creditHours: 4,
    gradeLevelsApplicable: ["Grade 9", "Grade 10", "Grade 11", "Grade 12"],
    prerequisiteCourses: ["CRS-COM-001"],
    corequisites: ["CRS-LAB-093"],
    isAdvancedPlacement: true,
    isInternationalBaccalaureate: false,
    labHoursPerWeek: 0,
    lectureHoursPerWeek: 4,
    courseOverviewMarkdown: "Rigorous academic curriculum exploring fundamental and applied principles of COMMERCE with structured laboratory and analytical assessment milestones.",
    recommendedTextbooks: [
      "Standard Academic Handbook of COMMERCE (12th Edition)",
      "University Press Guided Laboratory & Field Investigation Manual"
    ]
  },
  {
    courseCode: "CRS-FIN-094",
    courseTitle: "Course 94: Comprehensive Inquiries in FINE_ARTS Level 10",
    department: "FINE_ARTS",
    creditHours: 3,
    gradeLevelsApplicable: ["Grade 9", "Grade 10", "Grade 11", "Grade 12"],
    prerequisiteCourses: ["CRS-FIN-001"],
    corequisites: ["CRS-LAB-094"],
    isAdvancedPlacement: false,
    isInternationalBaccalaureate: true,
    labHoursPerWeek: 2,
    lectureHoursPerWeek: 4,
    courseOverviewMarkdown: "Rigorous academic curriculum exploring fundamental and applied principles of FINE_ARTS with structured laboratory and analytical assessment milestones.",
    recommendedTextbooks: [
      "Standard Academic Handbook of FINE_ARTS (12th Edition)",
      "University Press Guided Laboratory & Field Investigation Manual"
    ]
  },
  {
    courseCode: "CRS-PHY-095",
    courseTitle: "Course 95: Comprehensive Inquiries in PHYSICAL_EDUCATION Level 10",
    department: "PHYSICAL_EDUCATION",
    creditHours: 4,
    gradeLevelsApplicable: ["Grade 9", "Grade 10", "Grade 11", "Grade 12"],
    prerequisiteCourses: ["CRS-PHY-001"],
    corequisites: ["CRS-LAB-095"],
    isAdvancedPlacement: false,
    isInternationalBaccalaureate: false,
    labHoursPerWeek: 0,
    lectureHoursPerWeek: 4,
    courseOverviewMarkdown: "Rigorous academic curriculum exploring fundamental and applied principles of PHYSICAL_EDUCATION with structured laboratory and analytical assessment milestones.",
    recommendedTextbooks: [
      "Standard Academic Handbook of PHYSICAL_EDUCATION (12th Edition)",
      "University Press Guided Laboratory & Field Investigation Manual"
    ]
  },
  {
    courseCode: "CRS-SCI-096",
    courseTitle: "Course 96: Comprehensive Inquiries in SCIENCE Level 10",
    department: "SCIENCE",
    creditHours: 3,
    gradeLevelsApplicable: ["Grade 9", "Grade 10", "Grade 11", "Grade 12"],
    prerequisiteCourses: ["CRS-SCI-001"],
    corequisites: ["CRS-LAB-096"],
    isAdvancedPlacement: true,
    isInternationalBaccalaureate: false,
    labHoursPerWeek: 2,
    lectureHoursPerWeek: 4,
    courseOverviewMarkdown: "Rigorous academic curriculum exploring fundamental and applied principles of SCIENCE with structured laboratory and analytical assessment milestones.",
    recommendedTextbooks: [
      "Standard Academic Handbook of SCIENCE (12th Edition)",
      "University Press Guided Laboratory & Field Investigation Manual"
    ]
  },
  {
    courseCode: "CRS-MAT-097",
    courseTitle: "Course 97: Comprehensive Inquiries in MATHEMATICS Level 10",
    department: "MATHEMATICS",
    creditHours: 4,
    gradeLevelsApplicable: ["Grade 9", "Grade 10", "Grade 11", "Grade 12"],
    prerequisiteCourses: ["CRS-MAT-001"],
    corequisites: ["CRS-LAB-097"],
    isAdvancedPlacement: false,
    isInternationalBaccalaureate: false,
    labHoursPerWeek: 0,
    lectureHoursPerWeek: 4,
    courseOverviewMarkdown: "Rigorous academic curriculum exploring fundamental and applied principles of MATHEMATICS with structured laboratory and analytical assessment milestones.",
    recommendedTextbooks: [
      "Standard Academic Handbook of MATHEMATICS (12th Edition)",
      "University Press Guided Laboratory & Field Investigation Manual"
    ]
  },
  {
    courseCode: "CRS-HUM-098",
    courseTitle: "Course 98: Comprehensive Inquiries in HUMANITIES Level 10",
    department: "HUMANITIES",
    creditHours: 3,
    gradeLevelsApplicable: ["Grade 9", "Grade 10", "Grade 11", "Grade 12"],
    prerequisiteCourses: ["CRS-HUM-001"],
    corequisites: ["CRS-LAB-098"],
    isAdvancedPlacement: false,
    isInternationalBaccalaureate: true,
    labHoursPerWeek: 2,
    lectureHoursPerWeek: 4,
    courseOverviewMarkdown: "Rigorous academic curriculum exploring fundamental and applied principles of HUMANITIES with structured laboratory and analytical assessment milestones.",
    recommendedTextbooks: [
      "Standard Academic Handbook of HUMANITIES (12th Edition)",
      "University Press Guided Laboratory & Field Investigation Manual"
    ]
  },
  {
    courseCode: "CRS-LAN-099",
    courseTitle: "Course 99: Comprehensive Inquiries in LANGUAGES Level 10",
    department: "LANGUAGES",
    creditHours: 4,
    gradeLevelsApplicable: ["Grade 9", "Grade 10", "Grade 11", "Grade 12"],
    prerequisiteCourses: ["CRS-LAN-001"],
    corequisites: ["CRS-LAB-099"],
    isAdvancedPlacement: true,
    isInternationalBaccalaureate: false,
    labHoursPerWeek: 0,
    lectureHoursPerWeek: 4,
    courseOverviewMarkdown: "Rigorous academic curriculum exploring fundamental and applied principles of LANGUAGES with structured laboratory and analytical assessment milestones.",
    recommendedTextbooks: [
      "Standard Academic Handbook of LANGUAGES (12th Edition)",
      "University Press Guided Laboratory & Field Investigation Manual"
    ]
  },
  {
    courseCode: "CRS-TEC-100",
    courseTitle: "Course 100: Comprehensive Inquiries in TECHNOLOGY Level 11",
    department: "TECHNOLOGY",
    creditHours: 3,
    gradeLevelsApplicable: ["Grade 9", "Grade 10", "Grade 11", "Grade 12"],
    prerequisiteCourses: ["CRS-TEC-001"],
    corequisites: ["CRS-LAB-100"],
    isAdvancedPlacement: false,
    isInternationalBaccalaureate: true,
    labHoursPerWeek: 2,
    lectureHoursPerWeek: 4,
    courseOverviewMarkdown: "Rigorous academic curriculum exploring fundamental and applied principles of TECHNOLOGY with structured laboratory and analytical assessment milestones.",
    recommendedTextbooks: [
      "Standard Academic Handbook of TECHNOLOGY (12th Edition)",
      "University Press Guided Laboratory & Field Investigation Manual"
    ]
  },
];

@Injectable()
export class CourseCatalogService {
  public getAllCourses(): ComprehensiveCourseRecord[] {
    return MASTER_COURSES_REGISTRY;
  }

  public getCoursesByDepartment(department: ComprehensiveCourseRecord['department']): ComprehensiveCourseRecord[] {
    return MASTER_COURSES_REGISTRY.filter(c => c.department === department);
  }
}
