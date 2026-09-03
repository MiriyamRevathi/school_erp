import { Injectable } from '@nestjs/common';

export interface DetailedLessonPlan {
  planId: string;
  courseCode: string;
  courseTitle: string;
  gradeLevel: string;
  unitTitle: string;
  lessonNumber: number;
  lessonTopic: string;
  durationMinutes: number;
  pedagogicalApproach: 'DIRECT_INSTRUCTION' | 'INQUIRY_BASED' | 'FLIPPED_CLASSROOM' | 'PROJECT_BASED' | 'LAB_WORK';
  essentialQuestions: string[];
  learningObjectives: string[];
  materialsAndResources: string[];
  vocabularyTerms: string[];
  instructionalPhases: {
    hookWarmUp: { duration: number; activityDescription: string; teacherPrompt: string };
    directInstruction: { duration: number; coreConceptsCovered: string[]; demonstrationSteps: string[] };
    guidedPractice: { duration: number; groupTaskDescription: string; scaffoldingStrategies: string[] };
    independentPractice: { duration: number; assignmentDetails: string; rubricCriteria: string[] };
    closureReflection: { duration: number; exitTicketPrompt: string; homeworkAssigned: string };
  };
  differentiationPlan: {
    giftedAndTalentedExtension: string;
    strugglingLearnerRemediation: string;
    englishLanguageLearnerSupport: string;
  };
  assessmentType: 'FORMATIVE_QUIZ' | 'RUBRIC_OBSERVATION' | 'PEER_REVIEW' | 'LAB_REPORT' | 'EXIT_TICKET';
}

export const MASTER_LESSON_PLANS_REGISTRY: DetailedLessonPlan[] = [
  {
    planId: "LP-MTH-10-001",
    courseCode: "MTH-10",
    courseTitle: "Advanced Mathematics Comprehensive Study",
    gradeLevel: "Grade 9",
    unitTitle: "Unit 1: Fundamental Principles of Mathematics",
    lessonNumber: 1,
    lessonTopic: "Core Topic 1: Analytical Exploration & Practical Application in Mathematics",
    durationMinutes: 45,
    pedagogicalApproach: "DIRECT_INSTRUCTION",
    essentialQuestions: [
      "How does the fundamental principle of Mathematics govern real-world physical and computational systems?",
      "In what ways can experimental evidence validate mathematical derivations in this domain?",
      "How do modern scientific breakthroughs rely on the core theorems introduced in Lesson 1?"
    ],
    learningObjectives: [
      "Master the theoretical definition and practical formulation of Topic 1",
      "Execute multi-step problem solving with 95% computational accuracy",
      "Collaborate in peer dyads to synthesize scientific arguments and defend conclusions"
    ],
    materialsAndResources: [
      "Interactive Smart Display & Digital Whiteboard Software",
      "Standard Student Laboratory Notebook & Precision Scientific Calculators",
      "Digital Sensor Probe Kits & Microcontroller Interface Units"
    ],
    vocabularyTerms: [
      "Term_1_Alpha", "Principle_1_Beta", "Hypothesis_1_Gamma", "Equilibrium_1_Delta"
    ],
    instructionalPhases: {
      hookWarmUp: {
        duration: 5,
        activityDescription: "Display a provocative real-world anomaly video related to Mathematics topic 1",
        teacherPrompt: "Observe the anomalous behavior on screen and formulate three hypotheses explaining the cause."
      },
      directInstruction: {
        duration: 15,
        coreConceptsCovered: [
          "Historical derivation and contextual significance of principle 1",
          "Step-by-step mathematical proof and boundary condition constraints",
          "Safety protocols and standard operating procedures for lab exploration"
        ],
        demonstrationSteps: [
          "Step 1: Set up experimental apparatus on instructor demonstration bench",
          "Step 2: Calibrate zero-offset sensor baseline readings",
          "Step 3: Graph real-time data trajectory on main classroom digital projection"
        ]
      },
      guidedPractice: {
        duration: 12,
        groupTaskDescription: "Students work in assigned trios to solve tiered practice problems from Exercise Set 1.",
        scaffoldingStrategies: [
          "Provide worked examples on whiteboard for visual reference",
          "Conduct targeted mini-conferences with student groups needing foundational review",
          "Offer challenge extension problems for accelerated learner pods"
        ]
      },
      independentPractice: {
        duration: 8,
        assignmentDetails: "Complete Individual Problem Set 1 (Questions 1 through 6) showing full working steps.",
        rubricCriteria: [
          "Conceptual accuracy: 40%",
          "Mathematical precision & dimensional analysis: 40%",
          "Clarity of final answer presentation & SI units: 20%"
        ]
      },
      closureReflection: {
        duration: 5,
        exitTicketPrompt: "Summarize the single most critical insight from today's lesson in two complete sentences.",
        homeworkAssigned: "Read textbook Chapter 1, Section 2 and complete problem set."
      }
    },
    differentiationPlan: {
      giftedAndTalentedExtension: "Investigate advanced calculus derivations or computational Python simulations of this concept.",
      strugglingLearnerRemediation: "Utilize visual graphic organizers, formula reference sheets, and 1-on-1 TA guided support.",
      englishLanguageLearnerSupport: "Provide dual-language glossary terms, sentence stems, and multimodal video explanations."
    },
    assessmentType: "LAB_REPORT"
  },
  {
    planId: "LP-CHM-10-002",
    courseCode: "CHM-10",
    courseTitle: "Advanced Chemistry Comprehensive Study",
    gradeLevel: "Grade 9",
    unitTitle: "Unit 1: Fundamental Principles of Chemistry",
    lessonNumber: 2,
    lessonTopic: "Core Topic 2: Analytical Exploration & Practical Application in Chemistry",
    durationMinutes: 45,
    pedagogicalApproach: "INQUIRY_BASED",
    essentialQuestions: [
      "How does the fundamental principle of Chemistry govern real-world physical and computational systems?",
      "In what ways can experimental evidence validate mathematical derivations in this domain?",
      "How do modern scientific breakthroughs rely on the core theorems introduced in Lesson 2?"
    ],
    learningObjectives: [
      "Master the theoretical definition and practical formulation of Topic 2",
      "Execute multi-step problem solving with 95% computational accuracy",
      "Collaborate in peer dyads to synthesize scientific arguments and defend conclusions"
    ],
    materialsAndResources: [
      "Interactive Smart Display & Digital Whiteboard Software",
      "Standard Student Laboratory Notebook & Precision Scientific Calculators",
      "Digital Sensor Probe Kits & Microcontroller Interface Units"
    ],
    vocabularyTerms: [
      "Term_2_Alpha", "Principle_2_Beta", "Hypothesis_2_Gamma", "Equilibrium_2_Delta"
    ],
    instructionalPhases: {
      hookWarmUp: {
        duration: 5,
        activityDescription: "Display a provocative real-world anomaly video related to Chemistry topic 2",
        teacherPrompt: "Observe the anomalous behavior on screen and formulate three hypotheses explaining the cause."
      },
      directInstruction: {
        duration: 15,
        coreConceptsCovered: [
          "Historical derivation and contextual significance of principle 2",
          "Step-by-step mathematical proof and boundary condition constraints",
          "Safety protocols and standard operating procedures for lab exploration"
        ],
        demonstrationSteps: [
          "Step 1: Set up experimental apparatus on instructor demonstration bench",
          "Step 2: Calibrate zero-offset sensor baseline readings",
          "Step 3: Graph real-time data trajectory on main classroom digital projection"
        ]
      },
      guidedPractice: {
        duration: 12,
        groupTaskDescription: "Students work in assigned trios to solve tiered practice problems from Exercise Set 2.",
        scaffoldingStrategies: [
          "Provide worked examples on whiteboard for visual reference",
          "Conduct targeted mini-conferences with student groups needing foundational review",
          "Offer challenge extension problems for accelerated learner pods"
        ]
      },
      independentPractice: {
        duration: 8,
        assignmentDetails: "Complete Individual Problem Set 2 (Questions 1 through 6) showing full working steps.",
        rubricCriteria: [
          "Conceptual accuracy: 40%",
          "Mathematical precision & dimensional analysis: 40%",
          "Clarity of final answer presentation & SI units: 20%"
        ]
      },
      closureReflection: {
        duration: 5,
        exitTicketPrompt: "Summarize the single most critical insight from today's lesson in two complete sentences.",
        homeworkAssigned: "Read textbook Chapter 1, Section 3 and complete problem set."
      }
    },
    differentiationPlan: {
      giftedAndTalentedExtension: "Investigate advanced calculus derivations or computational Python simulations of this concept.",
      strugglingLearnerRemediation: "Utilize visual graphic organizers, formula reference sheets, and 1-on-1 TA guided support.",
      englishLanguageLearnerSupport: "Provide dual-language glossary terms, sentence stems, and multimodal video explanations."
    },
    assessmentType: "EXIT_TICKET"
  },
  {
    planId: "LP-CS-10-003",
    courseCode: "CS-10",
    courseTitle: "Advanced Computer Science Comprehensive Study",
    gradeLevel: "Grade 9",
    unitTitle: "Unit 1: Fundamental Principles of Computer Science",
    lessonNumber: 3,
    lessonTopic: "Core Topic 3: Analytical Exploration & Practical Application in Computer Science",
    durationMinutes: 45,
    pedagogicalApproach: "DIRECT_INSTRUCTION",
    essentialQuestions: [
      "How does the fundamental principle of Computer Science govern real-world physical and computational systems?",
      "In what ways can experimental evidence validate mathematical derivations in this domain?",
      "How do modern scientific breakthroughs rely on the core theorems introduced in Lesson 3?"
    ],
    learningObjectives: [
      "Master the theoretical definition and practical formulation of Topic 3",
      "Execute multi-step problem solving with 95% computational accuracy",
      "Collaborate in peer dyads to synthesize scientific arguments and defend conclusions"
    ],
    materialsAndResources: [
      "Interactive Smart Display & Digital Whiteboard Software",
      "Standard Student Laboratory Notebook & Precision Scientific Calculators",
      "Digital Sensor Probe Kits & Microcontroller Interface Units"
    ],
    vocabularyTerms: [
      "Term_3_Alpha", "Principle_3_Beta", "Hypothesis_3_Gamma", "Equilibrium_3_Delta"
    ],
    instructionalPhases: {
      hookWarmUp: {
        duration: 5,
        activityDescription: "Display a provocative real-world anomaly video related to Computer Science topic 3",
        teacherPrompt: "Observe the anomalous behavior on screen and formulate three hypotheses explaining the cause."
      },
      directInstruction: {
        duration: 15,
        coreConceptsCovered: [
          "Historical derivation and contextual significance of principle 3",
          "Step-by-step mathematical proof and boundary condition constraints",
          "Safety protocols and standard operating procedures for lab exploration"
        ],
        demonstrationSteps: [
          "Step 1: Set up experimental apparatus on instructor demonstration bench",
          "Step 2: Calibrate zero-offset sensor baseline readings",
          "Step 3: Graph real-time data trajectory on main classroom digital projection"
        ]
      },
      guidedPractice: {
        duration: 12,
        groupTaskDescription: "Students work in assigned trios to solve tiered practice problems from Exercise Set 3.",
        scaffoldingStrategies: [
          "Provide worked examples on whiteboard for visual reference",
          "Conduct targeted mini-conferences with student groups needing foundational review",
          "Offer challenge extension problems for accelerated learner pods"
        ]
      },
      independentPractice: {
        duration: 8,
        assignmentDetails: "Complete Individual Problem Set 3 (Questions 1 through 6) showing full working steps.",
        rubricCriteria: [
          "Conceptual accuracy: 40%",
          "Mathematical precision & dimensional analysis: 40%",
          "Clarity of final answer presentation & SI units: 20%"
        ]
      },
      closureReflection: {
        duration: 5,
        exitTicketPrompt: "Summarize the single most critical insight from today's lesson in two complete sentences.",
        homeworkAssigned: "Read textbook Chapter 2, Section 1 and complete problem set."
      }
    },
    differentiationPlan: {
      giftedAndTalentedExtension: "Investigate advanced calculus derivations or computational Python simulations of this concept.",
      strugglingLearnerRemediation: "Utilize visual graphic organizers, formula reference sheets, and 1-on-1 TA guided support.",
      englishLanguageLearnerSupport: "Provide dual-language glossary terms, sentence stems, and multimodal video explanations."
    },
    assessmentType: "FORMATIVE_QUIZ"
  },
  {
    planId: "LP-PHY-10-004",
    courseCode: "PHY-10",
    courseTitle: "Advanced Physics Comprehensive Study",
    gradeLevel: "Grade 9",
    unitTitle: "Unit 1: Fundamental Principles of Physics",
    lessonNumber: 4,
    lessonTopic: "Core Topic 4: Analytical Exploration & Practical Application in Physics",
    durationMinutes: 45,
    pedagogicalApproach: "INQUIRY_BASED",
    essentialQuestions: [
      "How does the fundamental principle of Physics govern real-world physical and computational systems?",
      "In what ways can experimental evidence validate mathematical derivations in this domain?",
      "How do modern scientific breakthroughs rely on the core theorems introduced in Lesson 4?"
    ],
    learningObjectives: [
      "Master the theoretical definition and practical formulation of Topic 4",
      "Execute multi-step problem solving with 95% computational accuracy",
      "Collaborate in peer dyads to synthesize scientific arguments and defend conclusions"
    ],
    materialsAndResources: [
      "Interactive Smart Display & Digital Whiteboard Software",
      "Standard Student Laboratory Notebook & Precision Scientific Calculators",
      "Digital Sensor Probe Kits & Microcontroller Interface Units"
    ],
    vocabularyTerms: [
      "Term_4_Alpha", "Principle_4_Beta", "Hypothesis_4_Gamma", "Equilibrium_4_Delta"
    ],
    instructionalPhases: {
      hookWarmUp: {
        duration: 5,
        activityDescription: "Display a provocative real-world anomaly video related to Physics topic 4",
        teacherPrompt: "Observe the anomalous behavior on screen and formulate three hypotheses explaining the cause."
      },
      directInstruction: {
        duration: 15,
        coreConceptsCovered: [
          "Historical derivation and contextual significance of principle 4",
          "Step-by-step mathematical proof and boundary condition constraints",
          "Safety protocols and standard operating procedures for lab exploration"
        ],
        demonstrationSteps: [
          "Step 1: Set up experimental apparatus on instructor demonstration bench",
          "Step 2: Calibrate zero-offset sensor baseline readings",
          "Step 3: Graph real-time data trajectory on main classroom digital projection"
        ]
      },
      guidedPractice: {
        duration: 12,
        groupTaskDescription: "Students work in assigned trios to solve tiered practice problems from Exercise Set 4.",
        scaffoldingStrategies: [
          "Provide worked examples on whiteboard for visual reference",
          "Conduct targeted mini-conferences with student groups needing foundational review",
          "Offer challenge extension problems for accelerated learner pods"
        ]
      },
      independentPractice: {
        duration: 8,
        assignmentDetails: "Complete Individual Problem Set 4 (Questions 1 through 6) showing full working steps.",
        rubricCriteria: [
          "Conceptual accuracy: 40%",
          "Mathematical precision & dimensional analysis: 40%",
          "Clarity of final answer presentation & SI units: 20%"
        ]
      },
      closureReflection: {
        duration: 5,
        exitTicketPrompt: "Summarize the single most critical insight from today's lesson in two complete sentences.",
        homeworkAssigned: "Read textbook Chapter 2, Section 2 and complete problem set."
      }
    },
    differentiationPlan: {
      giftedAndTalentedExtension: "Investigate advanced calculus derivations or computational Python simulations of this concept.",
      strugglingLearnerRemediation: "Utilize visual graphic organizers, formula reference sheets, and 1-on-1 TA guided support.",
      englishLanguageLearnerSupport: "Provide dual-language glossary terms, sentence stems, and multimodal video explanations."
    },
    assessmentType: "LAB_REPORT"
  },
  {
    planId: "LP-MTH-10-005",
    courseCode: "MTH-10",
    courseTitle: "Advanced Mathematics Comprehensive Study",
    gradeLevel: "Grade 9",
    unitTitle: "Unit 2: Fundamental Principles of Mathematics",
    lessonNumber: 5,
    lessonTopic: "Core Topic 5: Analytical Exploration & Practical Application in Mathematics",
    durationMinutes: 45,
    pedagogicalApproach: "DIRECT_INSTRUCTION",
    essentialQuestions: [
      "How does the fundamental principle of Mathematics govern real-world physical and computational systems?",
      "In what ways can experimental evidence validate mathematical derivations in this domain?",
      "How do modern scientific breakthroughs rely on the core theorems introduced in Lesson 5?"
    ],
    learningObjectives: [
      "Master the theoretical definition and practical formulation of Topic 5",
      "Execute multi-step problem solving with 95% computational accuracy",
      "Collaborate in peer dyads to synthesize scientific arguments and defend conclusions"
    ],
    materialsAndResources: [
      "Interactive Smart Display & Digital Whiteboard Software",
      "Standard Student Laboratory Notebook & Precision Scientific Calculators",
      "Digital Sensor Probe Kits & Microcontroller Interface Units"
    ],
    vocabularyTerms: [
      "Term_5_Alpha", "Principle_5_Beta", "Hypothesis_5_Gamma", "Equilibrium_5_Delta"
    ],
    instructionalPhases: {
      hookWarmUp: {
        duration: 5,
        activityDescription: "Display a provocative real-world anomaly video related to Mathematics topic 5",
        teacherPrompt: "Observe the anomalous behavior on screen and formulate three hypotheses explaining the cause."
      },
      directInstruction: {
        duration: 15,
        coreConceptsCovered: [
          "Historical derivation and contextual significance of principle 5",
          "Step-by-step mathematical proof and boundary condition constraints",
          "Safety protocols and standard operating procedures for lab exploration"
        ],
        demonstrationSteps: [
          "Step 1: Set up experimental apparatus on instructor demonstration bench",
          "Step 2: Calibrate zero-offset sensor baseline readings",
          "Step 3: Graph real-time data trajectory on main classroom digital projection"
        ]
      },
      guidedPractice: {
        duration: 12,
        groupTaskDescription: "Students work in assigned trios to solve tiered practice problems from Exercise Set 5.",
        scaffoldingStrategies: [
          "Provide worked examples on whiteboard for visual reference",
          "Conduct targeted mini-conferences with student groups needing foundational review",
          "Offer challenge extension problems for accelerated learner pods"
        ]
      },
      independentPractice: {
        duration: 8,
        assignmentDetails: "Complete Individual Problem Set 5 (Questions 1 through 6) showing full working steps.",
        rubricCriteria: [
          "Conceptual accuracy: 40%",
          "Mathematical precision & dimensional analysis: 40%",
          "Clarity of final answer presentation & SI units: 20%"
        ]
      },
      closureReflection: {
        duration: 5,
        exitTicketPrompt: "Summarize the single most critical insight from today's lesson in two complete sentences.",
        homeworkAssigned: "Read textbook Chapter 2, Section 3 and complete problem set."
      }
    },
    differentiationPlan: {
      giftedAndTalentedExtension: "Investigate advanced calculus derivations or computational Python simulations of this concept.",
      strugglingLearnerRemediation: "Utilize visual graphic organizers, formula reference sheets, and 1-on-1 TA guided support.",
      englishLanguageLearnerSupport: "Provide dual-language glossary terms, sentence stems, and multimodal video explanations."
    },
    assessmentType: "EXIT_TICKET"
  },
  {
    planId: "LP-CHM-10-006",
    courseCode: "CHM-10",
    courseTitle: "Advanced Chemistry Comprehensive Study",
    gradeLevel: "Grade 9",
    unitTitle: "Unit 2: Fundamental Principles of Chemistry",
    lessonNumber: 6,
    lessonTopic: "Core Topic 6: Analytical Exploration & Practical Application in Chemistry",
    durationMinutes: 45,
    pedagogicalApproach: "INQUIRY_BASED",
    essentialQuestions: [
      "How does the fundamental principle of Chemistry govern real-world physical and computational systems?",
      "In what ways can experimental evidence validate mathematical derivations in this domain?",
      "How do modern scientific breakthroughs rely on the core theorems introduced in Lesson 6?"
    ],
    learningObjectives: [
      "Master the theoretical definition and practical formulation of Topic 6",
      "Execute multi-step problem solving with 95% computational accuracy",
      "Collaborate in peer dyads to synthesize scientific arguments and defend conclusions"
    ],
    materialsAndResources: [
      "Interactive Smart Display & Digital Whiteboard Software",
      "Standard Student Laboratory Notebook & Precision Scientific Calculators",
      "Digital Sensor Probe Kits & Microcontroller Interface Units"
    ],
    vocabularyTerms: [
      "Term_6_Alpha", "Principle_6_Beta", "Hypothesis_6_Gamma", "Equilibrium_6_Delta"
    ],
    instructionalPhases: {
      hookWarmUp: {
        duration: 5,
        activityDescription: "Display a provocative real-world anomaly video related to Chemistry topic 6",
        teacherPrompt: "Observe the anomalous behavior on screen and formulate three hypotheses explaining the cause."
      },
      directInstruction: {
        duration: 15,
        coreConceptsCovered: [
          "Historical derivation and contextual significance of principle 6",
          "Step-by-step mathematical proof and boundary condition constraints",
          "Safety protocols and standard operating procedures for lab exploration"
        ],
        demonstrationSteps: [
          "Step 1: Set up experimental apparatus on instructor demonstration bench",
          "Step 2: Calibrate zero-offset sensor baseline readings",
          "Step 3: Graph real-time data trajectory on main classroom digital projection"
        ]
      },
      guidedPractice: {
        duration: 12,
        groupTaskDescription: "Students work in assigned trios to solve tiered practice problems from Exercise Set 6.",
        scaffoldingStrategies: [
          "Provide worked examples on whiteboard for visual reference",
          "Conduct targeted mini-conferences with student groups needing foundational review",
          "Offer challenge extension problems for accelerated learner pods"
        ]
      },
      independentPractice: {
        duration: 8,
        assignmentDetails: "Complete Individual Problem Set 6 (Questions 1 through 6) showing full working steps.",
        rubricCriteria: [
          "Conceptual accuracy: 40%",
          "Mathematical precision & dimensional analysis: 40%",
          "Clarity of final answer presentation & SI units: 20%"
        ]
      },
      closureReflection: {
        duration: 5,
        exitTicketPrompt: "Summarize the single most critical insight from today's lesson in two complete sentences.",
        homeworkAssigned: "Read textbook Chapter 3, Section 1 and complete problem set."
      }
    },
    differentiationPlan: {
      giftedAndTalentedExtension: "Investigate advanced calculus derivations or computational Python simulations of this concept.",
      strugglingLearnerRemediation: "Utilize visual graphic organizers, formula reference sheets, and 1-on-1 TA guided support.",
      englishLanguageLearnerSupport: "Provide dual-language glossary terms, sentence stems, and multimodal video explanations."
    },
    assessmentType: "FORMATIVE_QUIZ"
  },
  {
    planId: "LP-CS-10-007",
    courseCode: "CS-10",
    courseTitle: "Advanced Computer Science Comprehensive Study",
    gradeLevel: "Grade 9",
    unitTitle: "Unit 2: Fundamental Principles of Computer Science",
    lessonNumber: 7,
    lessonTopic: "Core Topic 7: Analytical Exploration & Practical Application in Computer Science",
    durationMinutes: 45,
    pedagogicalApproach: "DIRECT_INSTRUCTION",
    essentialQuestions: [
      "How does the fundamental principle of Computer Science govern real-world physical and computational systems?",
      "In what ways can experimental evidence validate mathematical derivations in this domain?",
      "How do modern scientific breakthroughs rely on the core theorems introduced in Lesson 7?"
    ],
    learningObjectives: [
      "Master the theoretical definition and practical formulation of Topic 7",
      "Execute multi-step problem solving with 95% computational accuracy",
      "Collaborate in peer dyads to synthesize scientific arguments and defend conclusions"
    ],
    materialsAndResources: [
      "Interactive Smart Display & Digital Whiteboard Software",
      "Standard Student Laboratory Notebook & Precision Scientific Calculators",
      "Digital Sensor Probe Kits & Microcontroller Interface Units"
    ],
    vocabularyTerms: [
      "Term_7_Alpha", "Principle_7_Beta", "Hypothesis_7_Gamma", "Equilibrium_7_Delta"
    ],
    instructionalPhases: {
      hookWarmUp: {
        duration: 5,
        activityDescription: "Display a provocative real-world anomaly video related to Computer Science topic 7",
        teacherPrompt: "Observe the anomalous behavior on screen and formulate three hypotheses explaining the cause."
      },
      directInstruction: {
        duration: 15,
        coreConceptsCovered: [
          "Historical derivation and contextual significance of principle 7",
          "Step-by-step mathematical proof and boundary condition constraints",
          "Safety protocols and standard operating procedures for lab exploration"
        ],
        demonstrationSteps: [
          "Step 1: Set up experimental apparatus on instructor demonstration bench",
          "Step 2: Calibrate zero-offset sensor baseline readings",
          "Step 3: Graph real-time data trajectory on main classroom digital projection"
        ]
      },
      guidedPractice: {
        duration: 12,
        groupTaskDescription: "Students work in assigned trios to solve tiered practice problems from Exercise Set 7.",
        scaffoldingStrategies: [
          "Provide worked examples on whiteboard for visual reference",
          "Conduct targeted mini-conferences with student groups needing foundational review",
          "Offer challenge extension problems for accelerated learner pods"
        ]
      },
      independentPractice: {
        duration: 8,
        assignmentDetails: "Complete Individual Problem Set 7 (Questions 1 through 6) showing full working steps.",
        rubricCriteria: [
          "Conceptual accuracy: 40%",
          "Mathematical precision & dimensional analysis: 40%",
          "Clarity of final answer presentation & SI units: 20%"
        ]
      },
      closureReflection: {
        duration: 5,
        exitTicketPrompt: "Summarize the single most critical insight from today's lesson in two complete sentences.",
        homeworkAssigned: "Read textbook Chapter 3, Section 2 and complete problem set."
      }
    },
    differentiationPlan: {
      giftedAndTalentedExtension: "Investigate advanced calculus derivations or computational Python simulations of this concept.",
      strugglingLearnerRemediation: "Utilize visual graphic organizers, formula reference sheets, and 1-on-1 TA guided support.",
      englishLanguageLearnerSupport: "Provide dual-language glossary terms, sentence stems, and multimodal video explanations."
    },
    assessmentType: "LAB_REPORT"
  },
  {
    planId: "LP-PHY-10-008",
    courseCode: "PHY-10",
    courseTitle: "Advanced Physics Comprehensive Study",
    gradeLevel: "Grade 9",
    unitTitle: "Unit 2: Fundamental Principles of Physics",
    lessonNumber: 8,
    lessonTopic: "Core Topic 8: Analytical Exploration & Practical Application in Physics",
    durationMinutes: 45,
    pedagogicalApproach: "INQUIRY_BASED",
    essentialQuestions: [
      "How does the fundamental principle of Physics govern real-world physical and computational systems?",
      "In what ways can experimental evidence validate mathematical derivations in this domain?",
      "How do modern scientific breakthroughs rely on the core theorems introduced in Lesson 8?"
    ],
    learningObjectives: [
      "Master the theoretical definition and practical formulation of Topic 8",
      "Execute multi-step problem solving with 95% computational accuracy",
      "Collaborate in peer dyads to synthesize scientific arguments and defend conclusions"
    ],
    materialsAndResources: [
      "Interactive Smart Display & Digital Whiteboard Software",
      "Standard Student Laboratory Notebook & Precision Scientific Calculators",
      "Digital Sensor Probe Kits & Microcontroller Interface Units"
    ],
    vocabularyTerms: [
      "Term_8_Alpha", "Principle_8_Beta", "Hypothesis_8_Gamma", "Equilibrium_8_Delta"
    ],
    instructionalPhases: {
      hookWarmUp: {
        duration: 5,
        activityDescription: "Display a provocative real-world anomaly video related to Physics topic 8",
        teacherPrompt: "Observe the anomalous behavior on screen and formulate three hypotheses explaining the cause."
      },
      directInstruction: {
        duration: 15,
        coreConceptsCovered: [
          "Historical derivation and contextual significance of principle 8",
          "Step-by-step mathematical proof and boundary condition constraints",
          "Safety protocols and standard operating procedures for lab exploration"
        ],
        demonstrationSteps: [
          "Step 1: Set up experimental apparatus on instructor demonstration bench",
          "Step 2: Calibrate zero-offset sensor baseline readings",
          "Step 3: Graph real-time data trajectory on main classroom digital projection"
        ]
      },
      guidedPractice: {
        duration: 12,
        groupTaskDescription: "Students work in assigned trios to solve tiered practice problems from Exercise Set 8.",
        scaffoldingStrategies: [
          "Provide worked examples on whiteboard for visual reference",
          "Conduct targeted mini-conferences with student groups needing foundational review",
          "Offer challenge extension problems for accelerated learner pods"
        ]
      },
      independentPractice: {
        duration: 8,
        assignmentDetails: "Complete Individual Problem Set 8 (Questions 1 through 6) showing full working steps.",
        rubricCriteria: [
          "Conceptual accuracy: 40%",
          "Mathematical precision & dimensional analysis: 40%",
          "Clarity of final answer presentation & SI units: 20%"
        ]
      },
      closureReflection: {
        duration: 5,
        exitTicketPrompt: "Summarize the single most critical insight from today's lesson in two complete sentences.",
        homeworkAssigned: "Read textbook Chapter 3, Section 3 and complete problem set."
      }
    },
    differentiationPlan: {
      giftedAndTalentedExtension: "Investigate advanced calculus derivations or computational Python simulations of this concept.",
      strugglingLearnerRemediation: "Utilize visual graphic organizers, formula reference sheets, and 1-on-1 TA guided support.",
      englishLanguageLearnerSupport: "Provide dual-language glossary terms, sentence stems, and multimodal video explanations."
    },
    assessmentType: "EXIT_TICKET"
  },
  {
    planId: "LP-MTH-10-009",
    courseCode: "MTH-10",
    courseTitle: "Advanced Mathematics Comprehensive Study",
    gradeLevel: "Grade 9",
    unitTitle: "Unit 2: Fundamental Principles of Mathematics",
    lessonNumber: 9,
    lessonTopic: "Core Topic 9: Analytical Exploration & Practical Application in Mathematics",
    durationMinutes: 45,
    pedagogicalApproach: "DIRECT_INSTRUCTION",
    essentialQuestions: [
      "How does the fundamental principle of Mathematics govern real-world physical and computational systems?",
      "In what ways can experimental evidence validate mathematical derivations in this domain?",
      "How do modern scientific breakthroughs rely on the core theorems introduced in Lesson 9?"
    ],
    learningObjectives: [
      "Master the theoretical definition and practical formulation of Topic 9",
      "Execute multi-step problem solving with 95% computational accuracy",
      "Collaborate in peer dyads to synthesize scientific arguments and defend conclusions"
    ],
    materialsAndResources: [
      "Interactive Smart Display & Digital Whiteboard Software",
      "Standard Student Laboratory Notebook & Precision Scientific Calculators",
      "Digital Sensor Probe Kits & Microcontroller Interface Units"
    ],
    vocabularyTerms: [
      "Term_9_Alpha", "Principle_9_Beta", "Hypothesis_9_Gamma", "Equilibrium_9_Delta"
    ],
    instructionalPhases: {
      hookWarmUp: {
        duration: 5,
        activityDescription: "Display a provocative real-world anomaly video related to Mathematics topic 9",
        teacherPrompt: "Observe the anomalous behavior on screen and formulate three hypotheses explaining the cause."
      },
      directInstruction: {
        duration: 15,
        coreConceptsCovered: [
          "Historical derivation and contextual significance of principle 9",
          "Step-by-step mathematical proof and boundary condition constraints",
          "Safety protocols and standard operating procedures for lab exploration"
        ],
        demonstrationSteps: [
          "Step 1: Set up experimental apparatus on instructor demonstration bench",
          "Step 2: Calibrate zero-offset sensor baseline readings",
          "Step 3: Graph real-time data trajectory on main classroom digital projection"
        ]
      },
      guidedPractice: {
        duration: 12,
        groupTaskDescription: "Students work in assigned trios to solve tiered practice problems from Exercise Set 9.",
        scaffoldingStrategies: [
          "Provide worked examples on whiteboard for visual reference",
          "Conduct targeted mini-conferences with student groups needing foundational review",
          "Offer challenge extension problems for accelerated learner pods"
        ]
      },
      independentPractice: {
        duration: 8,
        assignmentDetails: "Complete Individual Problem Set 9 (Questions 1 through 6) showing full working steps.",
        rubricCriteria: [
          "Conceptual accuracy: 40%",
          "Mathematical precision & dimensional analysis: 40%",
          "Clarity of final answer presentation & SI units: 20%"
        ]
      },
      closureReflection: {
        duration: 5,
        exitTicketPrompt: "Summarize the single most critical insight from today's lesson in two complete sentences.",
        homeworkAssigned: "Read textbook Chapter 4, Section 1 and complete problem set."
      }
    },
    differentiationPlan: {
      giftedAndTalentedExtension: "Investigate advanced calculus derivations or computational Python simulations of this concept.",
      strugglingLearnerRemediation: "Utilize visual graphic organizers, formula reference sheets, and 1-on-1 TA guided support.",
      englishLanguageLearnerSupport: "Provide dual-language glossary terms, sentence stems, and multimodal video explanations."
    },
    assessmentType: "FORMATIVE_QUIZ"
  },
  {
    planId: "LP-CHM-10-010",
    courseCode: "CHM-10",
    courseTitle: "Advanced Chemistry Comprehensive Study",
    gradeLevel: "Grade 9",
    unitTitle: "Unit 3: Fundamental Principles of Chemistry",
    lessonNumber: 10,
    lessonTopic: "Core Topic 10: Analytical Exploration & Practical Application in Chemistry",
    durationMinutes: 45,
    pedagogicalApproach: "INQUIRY_BASED",
    essentialQuestions: [
      "How does the fundamental principle of Chemistry govern real-world physical and computational systems?",
      "In what ways can experimental evidence validate mathematical derivations in this domain?",
      "How do modern scientific breakthroughs rely on the core theorems introduced in Lesson 10?"
    ],
    learningObjectives: [
      "Master the theoretical definition and practical formulation of Topic 10",
      "Execute multi-step problem solving with 95% computational accuracy",
      "Collaborate in peer dyads to synthesize scientific arguments and defend conclusions"
    ],
    materialsAndResources: [
      "Interactive Smart Display & Digital Whiteboard Software",
      "Standard Student Laboratory Notebook & Precision Scientific Calculators",
      "Digital Sensor Probe Kits & Microcontroller Interface Units"
    ],
    vocabularyTerms: [
      "Term_10_Alpha", "Principle_10_Beta", "Hypothesis_10_Gamma", "Equilibrium_10_Delta"
    ],
    instructionalPhases: {
      hookWarmUp: {
        duration: 5,
        activityDescription: "Display a provocative real-world anomaly video related to Chemistry topic 10",
        teacherPrompt: "Observe the anomalous behavior on screen and formulate three hypotheses explaining the cause."
      },
      directInstruction: {
        duration: 15,
        coreConceptsCovered: [
          "Historical derivation and contextual significance of principle 10",
          "Step-by-step mathematical proof and boundary condition constraints",
          "Safety protocols and standard operating procedures for lab exploration"
        ],
        demonstrationSteps: [
          "Step 1: Set up experimental apparatus on instructor demonstration bench",
          "Step 2: Calibrate zero-offset sensor baseline readings",
          "Step 3: Graph real-time data trajectory on main classroom digital projection"
        ]
      },
      guidedPractice: {
        duration: 12,
        groupTaskDescription: "Students work in assigned trios to solve tiered practice problems from Exercise Set 10.",
        scaffoldingStrategies: [
          "Provide worked examples on whiteboard for visual reference",
          "Conduct targeted mini-conferences with student groups needing foundational review",
          "Offer challenge extension problems for accelerated learner pods"
        ]
      },
      independentPractice: {
        duration: 8,
        assignmentDetails: "Complete Individual Problem Set 10 (Questions 1 through 6) showing full working steps.",
        rubricCriteria: [
          "Conceptual accuracy: 40%",
          "Mathematical precision & dimensional analysis: 40%",
          "Clarity of final answer presentation & SI units: 20%"
        ]
      },
      closureReflection: {
        duration: 5,
        exitTicketPrompt: "Summarize the single most critical insight from today's lesson in two complete sentences.",
        homeworkAssigned: "Read textbook Chapter 4, Section 2 and complete problem set."
      }
    },
    differentiationPlan: {
      giftedAndTalentedExtension: "Investigate advanced calculus derivations or computational Python simulations of this concept.",
      strugglingLearnerRemediation: "Utilize visual graphic organizers, formula reference sheets, and 1-on-1 TA guided support.",
      englishLanguageLearnerSupport: "Provide dual-language glossary terms, sentence stems, and multimodal video explanations."
    },
    assessmentType: "LAB_REPORT"
  },
  {
    planId: "LP-CS-10-011",
    courseCode: "CS-10",
    courseTitle: "Advanced Computer Science Comprehensive Study",
    gradeLevel: "Grade 9",
    unitTitle: "Unit 3: Fundamental Principles of Computer Science",
    lessonNumber: 11,
    lessonTopic: "Core Topic 11: Analytical Exploration & Practical Application in Computer Science",
    durationMinutes: 45,
    pedagogicalApproach: "DIRECT_INSTRUCTION",
    essentialQuestions: [
      "How does the fundamental principle of Computer Science govern real-world physical and computational systems?",
      "In what ways can experimental evidence validate mathematical derivations in this domain?",
      "How do modern scientific breakthroughs rely on the core theorems introduced in Lesson 11?"
    ],
    learningObjectives: [
      "Master the theoretical definition and practical formulation of Topic 11",
      "Execute multi-step problem solving with 95% computational accuracy",
      "Collaborate in peer dyads to synthesize scientific arguments and defend conclusions"
    ],
    materialsAndResources: [
      "Interactive Smart Display & Digital Whiteboard Software",
      "Standard Student Laboratory Notebook & Precision Scientific Calculators",
      "Digital Sensor Probe Kits & Microcontroller Interface Units"
    ],
    vocabularyTerms: [
      "Term_11_Alpha", "Principle_11_Beta", "Hypothesis_11_Gamma", "Equilibrium_11_Delta"
    ],
    instructionalPhases: {
      hookWarmUp: {
        duration: 5,
        activityDescription: "Display a provocative real-world anomaly video related to Computer Science topic 11",
        teacherPrompt: "Observe the anomalous behavior on screen and formulate three hypotheses explaining the cause."
      },
      directInstruction: {
        duration: 15,
        coreConceptsCovered: [
          "Historical derivation and contextual significance of principle 11",
          "Step-by-step mathematical proof and boundary condition constraints",
          "Safety protocols and standard operating procedures for lab exploration"
        ],
        demonstrationSteps: [
          "Step 1: Set up experimental apparatus on instructor demonstration bench",
          "Step 2: Calibrate zero-offset sensor baseline readings",
          "Step 3: Graph real-time data trajectory on main classroom digital projection"
        ]
      },
      guidedPractice: {
        duration: 12,
        groupTaskDescription: "Students work in assigned trios to solve tiered practice problems from Exercise Set 11.",
        scaffoldingStrategies: [
          "Provide worked examples on whiteboard for visual reference",
          "Conduct targeted mini-conferences with student groups needing foundational review",
          "Offer challenge extension problems for accelerated learner pods"
        ]
      },
      independentPractice: {
        duration: 8,
        assignmentDetails: "Complete Individual Problem Set 11 (Questions 1 through 6) showing full working steps.",
        rubricCriteria: [
          "Conceptual accuracy: 40%",
          "Mathematical precision & dimensional analysis: 40%",
          "Clarity of final answer presentation & SI units: 20%"
        ]
      },
      closureReflection: {
        duration: 5,
        exitTicketPrompt: "Summarize the single most critical insight from today's lesson in two complete sentences.",
        homeworkAssigned: "Read textbook Chapter 4, Section 3 and complete problem set."
      }
    },
    differentiationPlan: {
      giftedAndTalentedExtension: "Investigate advanced calculus derivations or computational Python simulations of this concept.",
      strugglingLearnerRemediation: "Utilize visual graphic organizers, formula reference sheets, and 1-on-1 TA guided support.",
      englishLanguageLearnerSupport: "Provide dual-language glossary terms, sentence stems, and multimodal video explanations."
    },
    assessmentType: "EXIT_TICKET"
  },
  {
    planId: "LP-PHY-10-012",
    courseCode: "PHY-10",
    courseTitle: "Advanced Physics Comprehensive Study",
    gradeLevel: "Grade 9",
    unitTitle: "Unit 3: Fundamental Principles of Physics",
    lessonNumber: 12,
    lessonTopic: "Core Topic 12: Analytical Exploration & Practical Application in Physics",
    durationMinutes: 45,
    pedagogicalApproach: "INQUIRY_BASED",
    essentialQuestions: [
      "How does the fundamental principle of Physics govern real-world physical and computational systems?",
      "In what ways can experimental evidence validate mathematical derivations in this domain?",
      "How do modern scientific breakthroughs rely on the core theorems introduced in Lesson 12?"
    ],
    learningObjectives: [
      "Master the theoretical definition and practical formulation of Topic 12",
      "Execute multi-step problem solving with 95% computational accuracy",
      "Collaborate in peer dyads to synthesize scientific arguments and defend conclusions"
    ],
    materialsAndResources: [
      "Interactive Smart Display & Digital Whiteboard Software",
      "Standard Student Laboratory Notebook & Precision Scientific Calculators",
      "Digital Sensor Probe Kits & Microcontroller Interface Units"
    ],
    vocabularyTerms: [
      "Term_12_Alpha", "Principle_12_Beta", "Hypothesis_12_Gamma", "Equilibrium_12_Delta"
    ],
    instructionalPhases: {
      hookWarmUp: {
        duration: 5,
        activityDescription: "Display a provocative real-world anomaly video related to Physics topic 12",
        teacherPrompt: "Observe the anomalous behavior on screen and formulate three hypotheses explaining the cause."
      },
      directInstruction: {
        duration: 15,
        coreConceptsCovered: [
          "Historical derivation and contextual significance of principle 12",
          "Step-by-step mathematical proof and boundary condition constraints",
          "Safety protocols and standard operating procedures for lab exploration"
        ],
        demonstrationSteps: [
          "Step 1: Set up experimental apparatus on instructor demonstration bench",
          "Step 2: Calibrate zero-offset sensor baseline readings",
          "Step 3: Graph real-time data trajectory on main classroom digital projection"
        ]
      },
      guidedPractice: {
        duration: 12,
        groupTaskDescription: "Students work in assigned trios to solve tiered practice problems from Exercise Set 12.",
        scaffoldingStrategies: [
          "Provide worked examples on whiteboard for visual reference",
          "Conduct targeted mini-conferences with student groups needing foundational review",
          "Offer challenge extension problems for accelerated learner pods"
        ]
      },
      independentPractice: {
        duration: 8,
        assignmentDetails: "Complete Individual Problem Set 12 (Questions 1 through 6) showing full working steps.",
        rubricCriteria: [
          "Conceptual accuracy: 40%",
          "Mathematical precision & dimensional analysis: 40%",
          "Clarity of final answer presentation & SI units: 20%"
        ]
      },
      closureReflection: {
        duration: 5,
        exitTicketPrompt: "Summarize the single most critical insight from today's lesson in two complete sentences.",
        homeworkAssigned: "Read textbook Chapter 5, Section 1 and complete problem set."
      }
    },
    differentiationPlan: {
      giftedAndTalentedExtension: "Investigate advanced calculus derivations or computational Python simulations of this concept.",
      strugglingLearnerRemediation: "Utilize visual graphic organizers, formula reference sheets, and 1-on-1 TA guided support.",
      englishLanguageLearnerSupport: "Provide dual-language glossary terms, sentence stems, and multimodal video explanations."
    },
    assessmentType: "FORMATIVE_QUIZ"
  },
  {
    planId: "LP-MTH-10-013",
    courseCode: "MTH-10",
    courseTitle: "Advanced Mathematics Comprehensive Study",
    gradeLevel: "Grade 9",
    unitTitle: "Unit 3: Fundamental Principles of Mathematics",
    lessonNumber: 13,
    lessonTopic: "Core Topic 13: Analytical Exploration & Practical Application in Mathematics",
    durationMinutes: 45,
    pedagogicalApproach: "DIRECT_INSTRUCTION",
    essentialQuestions: [
      "How does the fundamental principle of Mathematics govern real-world physical and computational systems?",
      "In what ways can experimental evidence validate mathematical derivations in this domain?",
      "How do modern scientific breakthroughs rely on the core theorems introduced in Lesson 13?"
    ],
    learningObjectives: [
      "Master the theoretical definition and practical formulation of Topic 13",
      "Execute multi-step problem solving with 95% computational accuracy",
      "Collaborate in peer dyads to synthesize scientific arguments and defend conclusions"
    ],
    materialsAndResources: [
      "Interactive Smart Display & Digital Whiteboard Software",
      "Standard Student Laboratory Notebook & Precision Scientific Calculators",
      "Digital Sensor Probe Kits & Microcontroller Interface Units"
    ],
    vocabularyTerms: [
      "Term_13_Alpha", "Principle_13_Beta", "Hypothesis_13_Gamma", "Equilibrium_13_Delta"
    ],
    instructionalPhases: {
      hookWarmUp: {
        duration: 5,
        activityDescription: "Display a provocative real-world anomaly video related to Mathematics topic 13",
        teacherPrompt: "Observe the anomalous behavior on screen and formulate three hypotheses explaining the cause."
      },
      directInstruction: {
        duration: 15,
        coreConceptsCovered: [
          "Historical derivation and contextual significance of principle 13",
          "Step-by-step mathematical proof and boundary condition constraints",
          "Safety protocols and standard operating procedures for lab exploration"
        ],
        demonstrationSteps: [
          "Step 1: Set up experimental apparatus on instructor demonstration bench",
          "Step 2: Calibrate zero-offset sensor baseline readings",
          "Step 3: Graph real-time data trajectory on main classroom digital projection"
        ]
      },
      guidedPractice: {
        duration: 12,
        groupTaskDescription: "Students work in assigned trios to solve tiered practice problems from Exercise Set 13.",
        scaffoldingStrategies: [
          "Provide worked examples on whiteboard for visual reference",
          "Conduct targeted mini-conferences with student groups needing foundational review",
          "Offer challenge extension problems for accelerated learner pods"
        ]
      },
      independentPractice: {
        duration: 8,
        assignmentDetails: "Complete Individual Problem Set 13 (Questions 1 through 6) showing full working steps.",
        rubricCriteria: [
          "Conceptual accuracy: 40%",
          "Mathematical precision & dimensional analysis: 40%",
          "Clarity of final answer presentation & SI units: 20%"
        ]
      },
      closureReflection: {
        duration: 5,
        exitTicketPrompt: "Summarize the single most critical insight from today's lesson in two complete sentences.",
        homeworkAssigned: "Read textbook Chapter 5, Section 2 and complete problem set."
      }
    },
    differentiationPlan: {
      giftedAndTalentedExtension: "Investigate advanced calculus derivations or computational Python simulations of this concept.",
      strugglingLearnerRemediation: "Utilize visual graphic organizers, formula reference sheets, and 1-on-1 TA guided support.",
      englishLanguageLearnerSupport: "Provide dual-language glossary terms, sentence stems, and multimodal video explanations."
    },
    assessmentType: "LAB_REPORT"
  },
  {
    planId: "LP-CHM-10-014",
    courseCode: "CHM-10",
    courseTitle: "Advanced Chemistry Comprehensive Study",
    gradeLevel: "Grade 9",
    unitTitle: "Unit 3: Fundamental Principles of Chemistry",
    lessonNumber: 14,
    lessonTopic: "Core Topic 14: Analytical Exploration & Practical Application in Chemistry",
    durationMinutes: 45,
    pedagogicalApproach: "INQUIRY_BASED",
    essentialQuestions: [
      "How does the fundamental principle of Chemistry govern real-world physical and computational systems?",
      "In what ways can experimental evidence validate mathematical derivations in this domain?",
      "How do modern scientific breakthroughs rely on the core theorems introduced in Lesson 14?"
    ],
    learningObjectives: [
      "Master the theoretical definition and practical formulation of Topic 14",
      "Execute multi-step problem solving with 95% computational accuracy",
      "Collaborate in peer dyads to synthesize scientific arguments and defend conclusions"
    ],
    materialsAndResources: [
      "Interactive Smart Display & Digital Whiteboard Software",
      "Standard Student Laboratory Notebook & Precision Scientific Calculators",
      "Digital Sensor Probe Kits & Microcontroller Interface Units"
    ],
    vocabularyTerms: [
      "Term_14_Alpha", "Principle_14_Beta", "Hypothesis_14_Gamma", "Equilibrium_14_Delta"
    ],
    instructionalPhases: {
      hookWarmUp: {
        duration: 5,
        activityDescription: "Display a provocative real-world anomaly video related to Chemistry topic 14",
        teacherPrompt: "Observe the anomalous behavior on screen and formulate three hypotheses explaining the cause."
      },
      directInstruction: {
        duration: 15,
        coreConceptsCovered: [
          "Historical derivation and contextual significance of principle 14",
          "Step-by-step mathematical proof and boundary condition constraints",
          "Safety protocols and standard operating procedures for lab exploration"
        ],
        demonstrationSteps: [
          "Step 1: Set up experimental apparatus on instructor demonstration bench",
          "Step 2: Calibrate zero-offset sensor baseline readings",
          "Step 3: Graph real-time data trajectory on main classroom digital projection"
        ]
      },
      guidedPractice: {
        duration: 12,
        groupTaskDescription: "Students work in assigned trios to solve tiered practice problems from Exercise Set 14.",
        scaffoldingStrategies: [
          "Provide worked examples on whiteboard for visual reference",
          "Conduct targeted mini-conferences with student groups needing foundational review",
          "Offer challenge extension problems for accelerated learner pods"
        ]
      },
      independentPractice: {
        duration: 8,
        assignmentDetails: "Complete Individual Problem Set 14 (Questions 1 through 6) showing full working steps.",
        rubricCriteria: [
          "Conceptual accuracy: 40%",
          "Mathematical precision & dimensional analysis: 40%",
          "Clarity of final answer presentation & SI units: 20%"
        ]
      },
      closureReflection: {
        duration: 5,
        exitTicketPrompt: "Summarize the single most critical insight from today's lesson in two complete sentences.",
        homeworkAssigned: "Read textbook Chapter 5, Section 3 and complete problem set."
      }
    },
    differentiationPlan: {
      giftedAndTalentedExtension: "Investigate advanced calculus derivations or computational Python simulations of this concept.",
      strugglingLearnerRemediation: "Utilize visual graphic organizers, formula reference sheets, and 1-on-1 TA guided support.",
      englishLanguageLearnerSupport: "Provide dual-language glossary terms, sentence stems, and multimodal video explanations."
    },
    assessmentType: "EXIT_TICKET"
  },
  {
    planId: "LP-CS-10-015",
    courseCode: "CS-10",
    courseTitle: "Advanced Computer Science Comprehensive Study",
    gradeLevel: "Grade 9",
    unitTitle: "Unit 4: Fundamental Principles of Computer Science",
    lessonNumber: 15,
    lessonTopic: "Core Topic 15: Analytical Exploration & Practical Application in Computer Science",
    durationMinutes: 45,
    pedagogicalApproach: "DIRECT_INSTRUCTION",
    essentialQuestions: [
      "How does the fundamental principle of Computer Science govern real-world physical and computational systems?",
      "In what ways can experimental evidence validate mathematical derivations in this domain?",
      "How do modern scientific breakthroughs rely on the core theorems introduced in Lesson 15?"
    ],
    learningObjectives: [
      "Master the theoretical definition and practical formulation of Topic 15",
      "Execute multi-step problem solving with 95% computational accuracy",
      "Collaborate in peer dyads to synthesize scientific arguments and defend conclusions"
    ],
    materialsAndResources: [
      "Interactive Smart Display & Digital Whiteboard Software",
      "Standard Student Laboratory Notebook & Precision Scientific Calculators",
      "Digital Sensor Probe Kits & Microcontroller Interface Units"
    ],
    vocabularyTerms: [
      "Term_15_Alpha", "Principle_15_Beta", "Hypothesis_15_Gamma", "Equilibrium_15_Delta"
    ],
    instructionalPhases: {
      hookWarmUp: {
        duration: 5,
        activityDescription: "Display a provocative real-world anomaly video related to Computer Science topic 15",
        teacherPrompt: "Observe the anomalous behavior on screen and formulate three hypotheses explaining the cause."
      },
      directInstruction: {
        duration: 15,
        coreConceptsCovered: [
          "Historical derivation and contextual significance of principle 15",
          "Step-by-step mathematical proof and boundary condition constraints",
          "Safety protocols and standard operating procedures for lab exploration"
        ],
        demonstrationSteps: [
          "Step 1: Set up experimental apparatus on instructor demonstration bench",
          "Step 2: Calibrate zero-offset sensor baseline readings",
          "Step 3: Graph real-time data trajectory on main classroom digital projection"
        ]
      },
      guidedPractice: {
        duration: 12,
        groupTaskDescription: "Students work in assigned trios to solve tiered practice problems from Exercise Set 15.",
        scaffoldingStrategies: [
          "Provide worked examples on whiteboard for visual reference",
          "Conduct targeted mini-conferences with student groups needing foundational review",
          "Offer challenge extension problems for accelerated learner pods"
        ]
      },
      independentPractice: {
        duration: 8,
        assignmentDetails: "Complete Individual Problem Set 15 (Questions 1 through 6) showing full working steps.",
        rubricCriteria: [
          "Conceptual accuracy: 40%",
          "Mathematical precision & dimensional analysis: 40%",
          "Clarity of final answer presentation & SI units: 20%"
        ]
      },
      closureReflection: {
        duration: 5,
        exitTicketPrompt: "Summarize the single most critical insight from today's lesson in two complete sentences.",
        homeworkAssigned: "Read textbook Chapter 6, Section 1 and complete problem set."
      }
    },
    differentiationPlan: {
      giftedAndTalentedExtension: "Investigate advanced calculus derivations or computational Python simulations of this concept.",
      strugglingLearnerRemediation: "Utilize visual graphic organizers, formula reference sheets, and 1-on-1 TA guided support.",
      englishLanguageLearnerSupport: "Provide dual-language glossary terms, sentence stems, and multimodal video explanations."
    },
    assessmentType: "FORMATIVE_QUIZ"
  },
  {
    planId: "LP-PHY-10-016",
    courseCode: "PHY-10",
    courseTitle: "Advanced Physics Comprehensive Study",
    gradeLevel: "Grade 9",
    unitTitle: "Unit 4: Fundamental Principles of Physics",
    lessonNumber: 16,
    lessonTopic: "Core Topic 16: Analytical Exploration & Practical Application in Physics",
    durationMinutes: 45,
    pedagogicalApproach: "INQUIRY_BASED",
    essentialQuestions: [
      "How does the fundamental principle of Physics govern real-world physical and computational systems?",
      "In what ways can experimental evidence validate mathematical derivations in this domain?",
      "How do modern scientific breakthroughs rely on the core theorems introduced in Lesson 16?"
    ],
    learningObjectives: [
      "Master the theoretical definition and practical formulation of Topic 16",
      "Execute multi-step problem solving with 95% computational accuracy",
      "Collaborate in peer dyads to synthesize scientific arguments and defend conclusions"
    ],
    materialsAndResources: [
      "Interactive Smart Display & Digital Whiteboard Software",
      "Standard Student Laboratory Notebook & Precision Scientific Calculators",
      "Digital Sensor Probe Kits & Microcontroller Interface Units"
    ],
    vocabularyTerms: [
      "Term_16_Alpha", "Principle_16_Beta", "Hypothesis_16_Gamma", "Equilibrium_16_Delta"
    ],
    instructionalPhases: {
      hookWarmUp: {
        duration: 5,
        activityDescription: "Display a provocative real-world anomaly video related to Physics topic 16",
        teacherPrompt: "Observe the anomalous behavior on screen and formulate three hypotheses explaining the cause."
      },
      directInstruction: {
        duration: 15,
        coreConceptsCovered: [
          "Historical derivation and contextual significance of principle 16",
          "Step-by-step mathematical proof and boundary condition constraints",
          "Safety protocols and standard operating procedures for lab exploration"
        ],
        demonstrationSteps: [
          "Step 1: Set up experimental apparatus on instructor demonstration bench",
          "Step 2: Calibrate zero-offset sensor baseline readings",
          "Step 3: Graph real-time data trajectory on main classroom digital projection"
        ]
      },
      guidedPractice: {
        duration: 12,
        groupTaskDescription: "Students work in assigned trios to solve tiered practice problems from Exercise Set 16.",
        scaffoldingStrategies: [
          "Provide worked examples on whiteboard for visual reference",
          "Conduct targeted mini-conferences with student groups needing foundational review",
          "Offer challenge extension problems for accelerated learner pods"
        ]
      },
      independentPractice: {
        duration: 8,
        assignmentDetails: "Complete Individual Problem Set 16 (Questions 1 through 6) showing full working steps.",
        rubricCriteria: [
          "Conceptual accuracy: 40%",
          "Mathematical precision & dimensional analysis: 40%",
          "Clarity of final answer presentation & SI units: 20%"
        ]
      },
      closureReflection: {
        duration: 5,
        exitTicketPrompt: "Summarize the single most critical insight from today's lesson in two complete sentences.",
        homeworkAssigned: "Read textbook Chapter 6, Section 2 and complete problem set."
      }
    },
    differentiationPlan: {
      giftedAndTalentedExtension: "Investigate advanced calculus derivations or computational Python simulations of this concept.",
      strugglingLearnerRemediation: "Utilize visual graphic organizers, formula reference sheets, and 1-on-1 TA guided support.",
      englishLanguageLearnerSupport: "Provide dual-language glossary terms, sentence stems, and multimodal video explanations."
    },
    assessmentType: "LAB_REPORT"
  },
  {
    planId: "LP-MTH-10-017",
    courseCode: "MTH-10",
    courseTitle: "Advanced Mathematics Comprehensive Study",
    gradeLevel: "Grade 9",
    unitTitle: "Unit 4: Fundamental Principles of Mathematics",
    lessonNumber: 17,
    lessonTopic: "Core Topic 17: Analytical Exploration & Practical Application in Mathematics",
    durationMinutes: 45,
    pedagogicalApproach: "DIRECT_INSTRUCTION",
    essentialQuestions: [
      "How does the fundamental principle of Mathematics govern real-world physical and computational systems?",
      "In what ways can experimental evidence validate mathematical derivations in this domain?",
      "How do modern scientific breakthroughs rely on the core theorems introduced in Lesson 17?"
    ],
    learningObjectives: [
      "Master the theoretical definition and practical formulation of Topic 17",
      "Execute multi-step problem solving with 95% computational accuracy",
      "Collaborate in peer dyads to synthesize scientific arguments and defend conclusions"
    ],
    materialsAndResources: [
      "Interactive Smart Display & Digital Whiteboard Software",
      "Standard Student Laboratory Notebook & Precision Scientific Calculators",
      "Digital Sensor Probe Kits & Microcontroller Interface Units"
    ],
    vocabularyTerms: [
      "Term_17_Alpha", "Principle_17_Beta", "Hypothesis_17_Gamma", "Equilibrium_17_Delta"
    ],
    instructionalPhases: {
      hookWarmUp: {
        duration: 5,
        activityDescription: "Display a provocative real-world anomaly video related to Mathematics topic 17",
        teacherPrompt: "Observe the anomalous behavior on screen and formulate three hypotheses explaining the cause."
      },
      directInstruction: {
        duration: 15,
        coreConceptsCovered: [
          "Historical derivation and contextual significance of principle 17",
          "Step-by-step mathematical proof and boundary condition constraints",
          "Safety protocols and standard operating procedures for lab exploration"
        ],
        demonstrationSteps: [
          "Step 1: Set up experimental apparatus on instructor demonstration bench",
          "Step 2: Calibrate zero-offset sensor baseline readings",
          "Step 3: Graph real-time data trajectory on main classroom digital projection"
        ]
      },
      guidedPractice: {
        duration: 12,
        groupTaskDescription: "Students work in assigned trios to solve tiered practice problems from Exercise Set 17.",
        scaffoldingStrategies: [
          "Provide worked examples on whiteboard for visual reference",
          "Conduct targeted mini-conferences with student groups needing foundational review",
          "Offer challenge extension problems for accelerated learner pods"
        ]
      },
      independentPractice: {
        duration: 8,
        assignmentDetails: "Complete Individual Problem Set 17 (Questions 1 through 6) showing full working steps.",
        rubricCriteria: [
          "Conceptual accuracy: 40%",
          "Mathematical precision & dimensional analysis: 40%",
          "Clarity of final answer presentation & SI units: 20%"
        ]
      },
      closureReflection: {
        duration: 5,
        exitTicketPrompt: "Summarize the single most critical insight from today's lesson in two complete sentences.",
        homeworkAssigned: "Read textbook Chapter 6, Section 3 and complete problem set."
      }
    },
    differentiationPlan: {
      giftedAndTalentedExtension: "Investigate advanced calculus derivations or computational Python simulations of this concept.",
      strugglingLearnerRemediation: "Utilize visual graphic organizers, formula reference sheets, and 1-on-1 TA guided support.",
      englishLanguageLearnerSupport: "Provide dual-language glossary terms, sentence stems, and multimodal video explanations."
    },
    assessmentType: "EXIT_TICKET"
  },
  {
    planId: "LP-CHM-10-018",
    courseCode: "CHM-10",
    courseTitle: "Advanced Chemistry Comprehensive Study",
    gradeLevel: "Grade 9",
    unitTitle: "Unit 4: Fundamental Principles of Chemistry",
    lessonNumber: 18,
    lessonTopic: "Core Topic 18: Analytical Exploration & Practical Application in Chemistry",
    durationMinutes: 45,
    pedagogicalApproach: "INQUIRY_BASED",
    essentialQuestions: [
      "How does the fundamental principle of Chemistry govern real-world physical and computational systems?",
      "In what ways can experimental evidence validate mathematical derivations in this domain?",
      "How do modern scientific breakthroughs rely on the core theorems introduced in Lesson 18?"
    ],
    learningObjectives: [
      "Master the theoretical definition and practical formulation of Topic 18",
      "Execute multi-step problem solving with 95% computational accuracy",
      "Collaborate in peer dyads to synthesize scientific arguments and defend conclusions"
    ],
    materialsAndResources: [
      "Interactive Smart Display & Digital Whiteboard Software",
      "Standard Student Laboratory Notebook & Precision Scientific Calculators",
      "Digital Sensor Probe Kits & Microcontroller Interface Units"
    ],
    vocabularyTerms: [
      "Term_18_Alpha", "Principle_18_Beta", "Hypothesis_18_Gamma", "Equilibrium_18_Delta"
    ],
    instructionalPhases: {
      hookWarmUp: {
        duration: 5,
        activityDescription: "Display a provocative real-world anomaly video related to Chemistry topic 18",
        teacherPrompt: "Observe the anomalous behavior on screen and formulate three hypotheses explaining the cause."
      },
      directInstruction: {
        duration: 15,
        coreConceptsCovered: [
          "Historical derivation and contextual significance of principle 18",
          "Step-by-step mathematical proof and boundary condition constraints",
          "Safety protocols and standard operating procedures for lab exploration"
        ],
        demonstrationSteps: [
          "Step 1: Set up experimental apparatus on instructor demonstration bench",
          "Step 2: Calibrate zero-offset sensor baseline readings",
          "Step 3: Graph real-time data trajectory on main classroom digital projection"
        ]
      },
      guidedPractice: {
        duration: 12,
        groupTaskDescription: "Students work in assigned trios to solve tiered practice problems from Exercise Set 18.",
        scaffoldingStrategies: [
          "Provide worked examples on whiteboard for visual reference",
          "Conduct targeted mini-conferences with student groups needing foundational review",
          "Offer challenge extension problems for accelerated learner pods"
        ]
      },
      independentPractice: {
        duration: 8,
        assignmentDetails: "Complete Individual Problem Set 18 (Questions 1 through 6) showing full working steps.",
        rubricCriteria: [
          "Conceptual accuracy: 40%",
          "Mathematical precision & dimensional analysis: 40%",
          "Clarity of final answer presentation & SI units: 20%"
        ]
      },
      closureReflection: {
        duration: 5,
        exitTicketPrompt: "Summarize the single most critical insight from today's lesson in two complete sentences.",
        homeworkAssigned: "Read textbook Chapter 7, Section 1 and complete problem set."
      }
    },
    differentiationPlan: {
      giftedAndTalentedExtension: "Investigate advanced calculus derivations or computational Python simulations of this concept.",
      strugglingLearnerRemediation: "Utilize visual graphic organizers, formula reference sheets, and 1-on-1 TA guided support.",
      englishLanguageLearnerSupport: "Provide dual-language glossary terms, sentence stems, and multimodal video explanations."
    },
    assessmentType: "FORMATIVE_QUIZ"
  },
  {
    planId: "LP-CS-10-019",
    courseCode: "CS-10",
    courseTitle: "Advanced Computer Science Comprehensive Study",
    gradeLevel: "Grade 9",
    unitTitle: "Unit 4: Fundamental Principles of Computer Science",
    lessonNumber: 19,
    lessonTopic: "Core Topic 19: Analytical Exploration & Practical Application in Computer Science",
    durationMinutes: 45,
    pedagogicalApproach: "DIRECT_INSTRUCTION",
    essentialQuestions: [
      "How does the fundamental principle of Computer Science govern real-world physical and computational systems?",
      "In what ways can experimental evidence validate mathematical derivations in this domain?",
      "How do modern scientific breakthroughs rely on the core theorems introduced in Lesson 19?"
    ],
    learningObjectives: [
      "Master the theoretical definition and practical formulation of Topic 19",
      "Execute multi-step problem solving with 95% computational accuracy",
      "Collaborate in peer dyads to synthesize scientific arguments and defend conclusions"
    ],
    materialsAndResources: [
      "Interactive Smart Display & Digital Whiteboard Software",
      "Standard Student Laboratory Notebook & Precision Scientific Calculators",
      "Digital Sensor Probe Kits & Microcontroller Interface Units"
    ],
    vocabularyTerms: [
      "Term_19_Alpha", "Principle_19_Beta", "Hypothesis_19_Gamma", "Equilibrium_19_Delta"
    ],
    instructionalPhases: {
      hookWarmUp: {
        duration: 5,
        activityDescription: "Display a provocative real-world anomaly video related to Computer Science topic 19",
        teacherPrompt: "Observe the anomalous behavior on screen and formulate three hypotheses explaining the cause."
      },
      directInstruction: {
        duration: 15,
        coreConceptsCovered: [
          "Historical derivation and contextual significance of principle 19",
          "Step-by-step mathematical proof and boundary condition constraints",
          "Safety protocols and standard operating procedures for lab exploration"
        ],
        demonstrationSteps: [
          "Step 1: Set up experimental apparatus on instructor demonstration bench",
          "Step 2: Calibrate zero-offset sensor baseline readings",
          "Step 3: Graph real-time data trajectory on main classroom digital projection"
        ]
      },
      guidedPractice: {
        duration: 12,
        groupTaskDescription: "Students work in assigned trios to solve tiered practice problems from Exercise Set 19.",
        scaffoldingStrategies: [
          "Provide worked examples on whiteboard for visual reference",
          "Conduct targeted mini-conferences with student groups needing foundational review",
          "Offer challenge extension problems for accelerated learner pods"
        ]
      },
      independentPractice: {
        duration: 8,
        assignmentDetails: "Complete Individual Problem Set 19 (Questions 1 through 6) showing full working steps.",
        rubricCriteria: [
          "Conceptual accuracy: 40%",
          "Mathematical precision & dimensional analysis: 40%",
          "Clarity of final answer presentation & SI units: 20%"
        ]
      },
      closureReflection: {
        duration: 5,
        exitTicketPrompt: "Summarize the single most critical insight from today's lesson in two complete sentences.",
        homeworkAssigned: "Read textbook Chapter 7, Section 2 and complete problem set."
      }
    },
    differentiationPlan: {
      giftedAndTalentedExtension: "Investigate advanced calculus derivations or computational Python simulations of this concept.",
      strugglingLearnerRemediation: "Utilize visual graphic organizers, formula reference sheets, and 1-on-1 TA guided support.",
      englishLanguageLearnerSupport: "Provide dual-language glossary terms, sentence stems, and multimodal video explanations."
    },
    assessmentType: "LAB_REPORT"
  },
  {
    planId: "LP-PHY-10-020",
    courseCode: "PHY-10",
    courseTitle: "Advanced Physics Comprehensive Study",
    gradeLevel: "Grade 10",
    unitTitle: "Unit 5: Fundamental Principles of Physics",
    lessonNumber: 20,
    lessonTopic: "Core Topic 20: Analytical Exploration & Practical Application in Physics",
    durationMinutes: 45,
    pedagogicalApproach: "INQUIRY_BASED",
    essentialQuestions: [
      "How does the fundamental principle of Physics govern real-world physical and computational systems?",
      "In what ways can experimental evidence validate mathematical derivations in this domain?",
      "How do modern scientific breakthroughs rely on the core theorems introduced in Lesson 20?"
    ],
    learningObjectives: [
      "Master the theoretical definition and practical formulation of Topic 20",
      "Execute multi-step problem solving with 95% computational accuracy",
      "Collaborate in peer dyads to synthesize scientific arguments and defend conclusions"
    ],
    materialsAndResources: [
      "Interactive Smart Display & Digital Whiteboard Software",
      "Standard Student Laboratory Notebook & Precision Scientific Calculators",
      "Digital Sensor Probe Kits & Microcontroller Interface Units"
    ],
    vocabularyTerms: [
      "Term_20_Alpha", "Principle_20_Beta", "Hypothesis_20_Gamma", "Equilibrium_20_Delta"
    ],
    instructionalPhases: {
      hookWarmUp: {
        duration: 5,
        activityDescription: "Display a provocative real-world anomaly video related to Physics topic 20",
        teacherPrompt: "Observe the anomalous behavior on screen and formulate three hypotheses explaining the cause."
      },
      directInstruction: {
        duration: 15,
        coreConceptsCovered: [
          "Historical derivation and contextual significance of principle 20",
          "Step-by-step mathematical proof and boundary condition constraints",
          "Safety protocols and standard operating procedures for lab exploration"
        ],
        demonstrationSteps: [
          "Step 1: Set up experimental apparatus on instructor demonstration bench",
          "Step 2: Calibrate zero-offset sensor baseline readings",
          "Step 3: Graph real-time data trajectory on main classroom digital projection"
        ]
      },
      guidedPractice: {
        duration: 12,
        groupTaskDescription: "Students work in assigned trios to solve tiered practice problems from Exercise Set 20.",
        scaffoldingStrategies: [
          "Provide worked examples on whiteboard for visual reference",
          "Conduct targeted mini-conferences with student groups needing foundational review",
          "Offer challenge extension problems for accelerated learner pods"
        ]
      },
      independentPractice: {
        duration: 8,
        assignmentDetails: "Complete Individual Problem Set 20 (Questions 1 through 6) showing full working steps.",
        rubricCriteria: [
          "Conceptual accuracy: 40%",
          "Mathematical precision & dimensional analysis: 40%",
          "Clarity of final answer presentation & SI units: 20%"
        ]
      },
      closureReflection: {
        duration: 5,
        exitTicketPrompt: "Summarize the single most critical insight from today's lesson in two complete sentences.",
        homeworkAssigned: "Read textbook Chapter 7, Section 3 and complete problem set."
      }
    },
    differentiationPlan: {
      giftedAndTalentedExtension: "Investigate advanced calculus derivations or computational Python simulations of this concept.",
      strugglingLearnerRemediation: "Utilize visual graphic organizers, formula reference sheets, and 1-on-1 TA guided support.",
      englishLanguageLearnerSupport: "Provide dual-language glossary terms, sentence stems, and multimodal video explanations."
    },
    assessmentType: "EXIT_TICKET"
  },
  {
    planId: "LP-MTH-10-021",
    courseCode: "MTH-10",
    courseTitle: "Advanced Mathematics Comprehensive Study",
    gradeLevel: "Grade 10",
    unitTitle: "Unit 5: Fundamental Principles of Mathematics",
    lessonNumber: 21,
    lessonTopic: "Core Topic 21: Analytical Exploration & Practical Application in Mathematics",
    durationMinutes: 45,
    pedagogicalApproach: "DIRECT_INSTRUCTION",
    essentialQuestions: [
      "How does the fundamental principle of Mathematics govern real-world physical and computational systems?",
      "In what ways can experimental evidence validate mathematical derivations in this domain?",
      "How do modern scientific breakthroughs rely on the core theorems introduced in Lesson 21?"
    ],
    learningObjectives: [
      "Master the theoretical definition and practical formulation of Topic 21",
      "Execute multi-step problem solving with 95% computational accuracy",
      "Collaborate in peer dyads to synthesize scientific arguments and defend conclusions"
    ],
    materialsAndResources: [
      "Interactive Smart Display & Digital Whiteboard Software",
      "Standard Student Laboratory Notebook & Precision Scientific Calculators",
      "Digital Sensor Probe Kits & Microcontroller Interface Units"
    ],
    vocabularyTerms: [
      "Term_21_Alpha", "Principle_21_Beta", "Hypothesis_21_Gamma", "Equilibrium_21_Delta"
    ],
    instructionalPhases: {
      hookWarmUp: {
        duration: 5,
        activityDescription: "Display a provocative real-world anomaly video related to Mathematics topic 21",
        teacherPrompt: "Observe the anomalous behavior on screen and formulate three hypotheses explaining the cause."
      },
      directInstruction: {
        duration: 15,
        coreConceptsCovered: [
          "Historical derivation and contextual significance of principle 21",
          "Step-by-step mathematical proof and boundary condition constraints",
          "Safety protocols and standard operating procedures for lab exploration"
        ],
        demonstrationSteps: [
          "Step 1: Set up experimental apparatus on instructor demonstration bench",
          "Step 2: Calibrate zero-offset sensor baseline readings",
          "Step 3: Graph real-time data trajectory on main classroom digital projection"
        ]
      },
      guidedPractice: {
        duration: 12,
        groupTaskDescription: "Students work in assigned trios to solve tiered practice problems from Exercise Set 21.",
        scaffoldingStrategies: [
          "Provide worked examples on whiteboard for visual reference",
          "Conduct targeted mini-conferences with student groups needing foundational review",
          "Offer challenge extension problems for accelerated learner pods"
        ]
      },
      independentPractice: {
        duration: 8,
        assignmentDetails: "Complete Individual Problem Set 21 (Questions 1 through 6) showing full working steps.",
        rubricCriteria: [
          "Conceptual accuracy: 40%",
          "Mathematical precision & dimensional analysis: 40%",
          "Clarity of final answer presentation & SI units: 20%"
        ]
      },
      closureReflection: {
        duration: 5,
        exitTicketPrompt: "Summarize the single most critical insight from today's lesson in two complete sentences.",
        homeworkAssigned: "Read textbook Chapter 8, Section 1 and complete problem set."
      }
    },
    differentiationPlan: {
      giftedAndTalentedExtension: "Investigate advanced calculus derivations or computational Python simulations of this concept.",
      strugglingLearnerRemediation: "Utilize visual graphic organizers, formula reference sheets, and 1-on-1 TA guided support.",
      englishLanguageLearnerSupport: "Provide dual-language glossary terms, sentence stems, and multimodal video explanations."
    },
    assessmentType: "FORMATIVE_QUIZ"
  },
  {
    planId: "LP-CHM-10-022",
    courseCode: "CHM-10",
    courseTitle: "Advanced Chemistry Comprehensive Study",
    gradeLevel: "Grade 10",
    unitTitle: "Unit 5: Fundamental Principles of Chemistry",
    lessonNumber: 22,
    lessonTopic: "Core Topic 22: Analytical Exploration & Practical Application in Chemistry",
    durationMinutes: 45,
    pedagogicalApproach: "INQUIRY_BASED",
    essentialQuestions: [
      "How does the fundamental principle of Chemistry govern real-world physical and computational systems?",
      "In what ways can experimental evidence validate mathematical derivations in this domain?",
      "How do modern scientific breakthroughs rely on the core theorems introduced in Lesson 22?"
    ],
    learningObjectives: [
      "Master the theoretical definition and practical formulation of Topic 22",
      "Execute multi-step problem solving with 95% computational accuracy",
      "Collaborate in peer dyads to synthesize scientific arguments and defend conclusions"
    ],
    materialsAndResources: [
      "Interactive Smart Display & Digital Whiteboard Software",
      "Standard Student Laboratory Notebook & Precision Scientific Calculators",
      "Digital Sensor Probe Kits & Microcontroller Interface Units"
    ],
    vocabularyTerms: [
      "Term_22_Alpha", "Principle_22_Beta", "Hypothesis_22_Gamma", "Equilibrium_22_Delta"
    ],
    instructionalPhases: {
      hookWarmUp: {
        duration: 5,
        activityDescription: "Display a provocative real-world anomaly video related to Chemistry topic 22",
        teacherPrompt: "Observe the anomalous behavior on screen and formulate three hypotheses explaining the cause."
      },
      directInstruction: {
        duration: 15,
        coreConceptsCovered: [
          "Historical derivation and contextual significance of principle 22",
          "Step-by-step mathematical proof and boundary condition constraints",
          "Safety protocols and standard operating procedures for lab exploration"
        ],
        demonstrationSteps: [
          "Step 1: Set up experimental apparatus on instructor demonstration bench",
          "Step 2: Calibrate zero-offset sensor baseline readings",
          "Step 3: Graph real-time data trajectory on main classroom digital projection"
        ]
      },
      guidedPractice: {
        duration: 12,
        groupTaskDescription: "Students work in assigned trios to solve tiered practice problems from Exercise Set 22.",
        scaffoldingStrategies: [
          "Provide worked examples on whiteboard for visual reference",
          "Conduct targeted mini-conferences with student groups needing foundational review",
          "Offer challenge extension problems for accelerated learner pods"
        ]
      },
      independentPractice: {
        duration: 8,
        assignmentDetails: "Complete Individual Problem Set 22 (Questions 1 through 6) showing full working steps.",
        rubricCriteria: [
          "Conceptual accuracy: 40%",
          "Mathematical precision & dimensional analysis: 40%",
          "Clarity of final answer presentation & SI units: 20%"
        ]
      },
      closureReflection: {
        duration: 5,
        exitTicketPrompt: "Summarize the single most critical insight from today's lesson in two complete sentences.",
        homeworkAssigned: "Read textbook Chapter 8, Section 2 and complete problem set."
      }
    },
    differentiationPlan: {
      giftedAndTalentedExtension: "Investigate advanced calculus derivations or computational Python simulations of this concept.",
      strugglingLearnerRemediation: "Utilize visual graphic organizers, formula reference sheets, and 1-on-1 TA guided support.",
      englishLanguageLearnerSupport: "Provide dual-language glossary terms, sentence stems, and multimodal video explanations."
    },
    assessmentType: "LAB_REPORT"
  },
  {
    planId: "LP-CS-10-023",
    courseCode: "CS-10",
    courseTitle: "Advanced Computer Science Comprehensive Study",
    gradeLevel: "Grade 10",
    unitTitle: "Unit 5: Fundamental Principles of Computer Science",
    lessonNumber: 23,
    lessonTopic: "Core Topic 23: Analytical Exploration & Practical Application in Computer Science",
    durationMinutes: 45,
    pedagogicalApproach: "DIRECT_INSTRUCTION",
    essentialQuestions: [
      "How does the fundamental principle of Computer Science govern real-world physical and computational systems?",
      "In what ways can experimental evidence validate mathematical derivations in this domain?",
      "How do modern scientific breakthroughs rely on the core theorems introduced in Lesson 23?"
    ],
    learningObjectives: [
      "Master the theoretical definition and practical formulation of Topic 23",
      "Execute multi-step problem solving with 95% computational accuracy",
      "Collaborate in peer dyads to synthesize scientific arguments and defend conclusions"
    ],
    materialsAndResources: [
      "Interactive Smart Display & Digital Whiteboard Software",
      "Standard Student Laboratory Notebook & Precision Scientific Calculators",
      "Digital Sensor Probe Kits & Microcontroller Interface Units"
    ],
    vocabularyTerms: [
      "Term_23_Alpha", "Principle_23_Beta", "Hypothesis_23_Gamma", "Equilibrium_23_Delta"
    ],
    instructionalPhases: {
      hookWarmUp: {
        duration: 5,
        activityDescription: "Display a provocative real-world anomaly video related to Computer Science topic 23",
        teacherPrompt: "Observe the anomalous behavior on screen and formulate three hypotheses explaining the cause."
      },
      directInstruction: {
        duration: 15,
        coreConceptsCovered: [
          "Historical derivation and contextual significance of principle 23",
          "Step-by-step mathematical proof and boundary condition constraints",
          "Safety protocols and standard operating procedures for lab exploration"
        ],
        demonstrationSteps: [
          "Step 1: Set up experimental apparatus on instructor demonstration bench",
          "Step 2: Calibrate zero-offset sensor baseline readings",
          "Step 3: Graph real-time data trajectory on main classroom digital projection"
        ]
      },
      guidedPractice: {
        duration: 12,
        groupTaskDescription: "Students work in assigned trios to solve tiered practice problems from Exercise Set 23.",
        scaffoldingStrategies: [
          "Provide worked examples on whiteboard for visual reference",
          "Conduct targeted mini-conferences with student groups needing foundational review",
          "Offer challenge extension problems for accelerated learner pods"
        ]
      },
      independentPractice: {
        duration: 8,
        assignmentDetails: "Complete Individual Problem Set 23 (Questions 1 through 6) showing full working steps.",
        rubricCriteria: [
          "Conceptual accuracy: 40%",
          "Mathematical precision & dimensional analysis: 40%",
          "Clarity of final answer presentation & SI units: 20%"
        ]
      },
      closureReflection: {
        duration: 5,
        exitTicketPrompt: "Summarize the single most critical insight from today's lesson in two complete sentences.",
        homeworkAssigned: "Read textbook Chapter 8, Section 3 and complete problem set."
      }
    },
    differentiationPlan: {
      giftedAndTalentedExtension: "Investigate advanced calculus derivations or computational Python simulations of this concept.",
      strugglingLearnerRemediation: "Utilize visual graphic organizers, formula reference sheets, and 1-on-1 TA guided support.",
      englishLanguageLearnerSupport: "Provide dual-language glossary terms, sentence stems, and multimodal video explanations."
    },
    assessmentType: "EXIT_TICKET"
  },
  {
    planId: "LP-PHY-10-024",
    courseCode: "PHY-10",
    courseTitle: "Advanced Physics Comprehensive Study",
    gradeLevel: "Grade 10",
    unitTitle: "Unit 5: Fundamental Principles of Physics",
    lessonNumber: 24,
    lessonTopic: "Core Topic 24: Analytical Exploration & Practical Application in Physics",
    durationMinutes: 45,
    pedagogicalApproach: "INQUIRY_BASED",
    essentialQuestions: [
      "How does the fundamental principle of Physics govern real-world physical and computational systems?",
      "In what ways can experimental evidence validate mathematical derivations in this domain?",
      "How do modern scientific breakthroughs rely on the core theorems introduced in Lesson 24?"
    ],
    learningObjectives: [
      "Master the theoretical definition and practical formulation of Topic 24",
      "Execute multi-step problem solving with 95% computational accuracy",
      "Collaborate in peer dyads to synthesize scientific arguments and defend conclusions"
    ],
    materialsAndResources: [
      "Interactive Smart Display & Digital Whiteboard Software",
      "Standard Student Laboratory Notebook & Precision Scientific Calculators",
      "Digital Sensor Probe Kits & Microcontroller Interface Units"
    ],
    vocabularyTerms: [
      "Term_24_Alpha", "Principle_24_Beta", "Hypothesis_24_Gamma", "Equilibrium_24_Delta"
    ],
    instructionalPhases: {
      hookWarmUp: {
        duration: 5,
        activityDescription: "Display a provocative real-world anomaly video related to Physics topic 24",
        teacherPrompt: "Observe the anomalous behavior on screen and formulate three hypotheses explaining the cause."
      },
      directInstruction: {
        duration: 15,
        coreConceptsCovered: [
          "Historical derivation and contextual significance of principle 24",
          "Step-by-step mathematical proof and boundary condition constraints",
          "Safety protocols and standard operating procedures for lab exploration"
        ],
        demonstrationSteps: [
          "Step 1: Set up experimental apparatus on instructor demonstration bench",
          "Step 2: Calibrate zero-offset sensor baseline readings",
          "Step 3: Graph real-time data trajectory on main classroom digital projection"
        ]
      },
      guidedPractice: {
        duration: 12,
        groupTaskDescription: "Students work in assigned trios to solve tiered practice problems from Exercise Set 24.",
        scaffoldingStrategies: [
          "Provide worked examples on whiteboard for visual reference",
          "Conduct targeted mini-conferences with student groups needing foundational review",
          "Offer challenge extension problems for accelerated learner pods"
        ]
      },
      independentPractice: {
        duration: 8,
        assignmentDetails: "Complete Individual Problem Set 24 (Questions 1 through 6) showing full working steps.",
        rubricCriteria: [
          "Conceptual accuracy: 40%",
          "Mathematical precision & dimensional analysis: 40%",
          "Clarity of final answer presentation & SI units: 20%"
        ]
      },
      closureReflection: {
        duration: 5,
        exitTicketPrompt: "Summarize the single most critical insight from today's lesson in two complete sentences.",
        homeworkAssigned: "Read textbook Chapter 9, Section 1 and complete problem set."
      }
    },
    differentiationPlan: {
      giftedAndTalentedExtension: "Investigate advanced calculus derivations or computational Python simulations of this concept.",
      strugglingLearnerRemediation: "Utilize visual graphic organizers, formula reference sheets, and 1-on-1 TA guided support.",
      englishLanguageLearnerSupport: "Provide dual-language glossary terms, sentence stems, and multimodal video explanations."
    },
    assessmentType: "FORMATIVE_QUIZ"
  },
  {
    planId: "LP-MTH-10-025",
    courseCode: "MTH-10",
    courseTitle: "Advanced Mathematics Comprehensive Study",
    gradeLevel: "Grade 10",
    unitTitle: "Unit 6: Fundamental Principles of Mathematics",
    lessonNumber: 25,
    lessonTopic: "Core Topic 25: Analytical Exploration & Practical Application in Mathematics",
    durationMinutes: 45,
    pedagogicalApproach: "DIRECT_INSTRUCTION",
    essentialQuestions: [
      "How does the fundamental principle of Mathematics govern real-world physical and computational systems?",
      "In what ways can experimental evidence validate mathematical derivations in this domain?",
      "How do modern scientific breakthroughs rely on the core theorems introduced in Lesson 25?"
    ],
    learningObjectives: [
      "Master the theoretical definition and practical formulation of Topic 25",
      "Execute multi-step problem solving with 95% computational accuracy",
      "Collaborate in peer dyads to synthesize scientific arguments and defend conclusions"
    ],
    materialsAndResources: [
      "Interactive Smart Display & Digital Whiteboard Software",
      "Standard Student Laboratory Notebook & Precision Scientific Calculators",
      "Digital Sensor Probe Kits & Microcontroller Interface Units"
    ],
    vocabularyTerms: [
      "Term_25_Alpha", "Principle_25_Beta", "Hypothesis_25_Gamma", "Equilibrium_25_Delta"
    ],
    instructionalPhases: {
      hookWarmUp: {
        duration: 5,
        activityDescription: "Display a provocative real-world anomaly video related to Mathematics topic 25",
        teacherPrompt: "Observe the anomalous behavior on screen and formulate three hypotheses explaining the cause."
      },
      directInstruction: {
        duration: 15,
        coreConceptsCovered: [
          "Historical derivation and contextual significance of principle 25",
          "Step-by-step mathematical proof and boundary condition constraints",
          "Safety protocols and standard operating procedures for lab exploration"
        ],
        demonstrationSteps: [
          "Step 1: Set up experimental apparatus on instructor demonstration bench",
          "Step 2: Calibrate zero-offset sensor baseline readings",
          "Step 3: Graph real-time data trajectory on main classroom digital projection"
        ]
      },
      guidedPractice: {
        duration: 12,
        groupTaskDescription: "Students work in assigned trios to solve tiered practice problems from Exercise Set 25.",
        scaffoldingStrategies: [
          "Provide worked examples on whiteboard for visual reference",
          "Conduct targeted mini-conferences with student groups needing foundational review",
          "Offer challenge extension problems for accelerated learner pods"
        ]
      },
      independentPractice: {
        duration: 8,
        assignmentDetails: "Complete Individual Problem Set 25 (Questions 1 through 6) showing full working steps.",
        rubricCriteria: [
          "Conceptual accuracy: 40%",
          "Mathematical precision & dimensional analysis: 40%",
          "Clarity of final answer presentation & SI units: 20%"
        ]
      },
      closureReflection: {
        duration: 5,
        exitTicketPrompt: "Summarize the single most critical insight from today's lesson in two complete sentences.",
        homeworkAssigned: "Read textbook Chapter 9, Section 2 and complete problem set."
      }
    },
    differentiationPlan: {
      giftedAndTalentedExtension: "Investigate advanced calculus derivations or computational Python simulations of this concept.",
      strugglingLearnerRemediation: "Utilize visual graphic organizers, formula reference sheets, and 1-on-1 TA guided support.",
      englishLanguageLearnerSupport: "Provide dual-language glossary terms, sentence stems, and multimodal video explanations."
    },
    assessmentType: "LAB_REPORT"
  },
  {
    planId: "LP-CHM-10-026",
    courseCode: "CHM-10",
    courseTitle: "Advanced Chemistry Comprehensive Study",
    gradeLevel: "Grade 10",
    unitTitle: "Unit 6: Fundamental Principles of Chemistry",
    lessonNumber: 26,
    lessonTopic: "Core Topic 26: Analytical Exploration & Practical Application in Chemistry",
    durationMinutes: 45,
    pedagogicalApproach: "INQUIRY_BASED",
    essentialQuestions: [
      "How does the fundamental principle of Chemistry govern real-world physical and computational systems?",
      "In what ways can experimental evidence validate mathematical derivations in this domain?",
      "How do modern scientific breakthroughs rely on the core theorems introduced in Lesson 26?"
    ],
    learningObjectives: [
      "Master the theoretical definition and practical formulation of Topic 26",
      "Execute multi-step problem solving with 95% computational accuracy",
      "Collaborate in peer dyads to synthesize scientific arguments and defend conclusions"
    ],
    materialsAndResources: [
      "Interactive Smart Display & Digital Whiteboard Software",
      "Standard Student Laboratory Notebook & Precision Scientific Calculators",
      "Digital Sensor Probe Kits & Microcontroller Interface Units"
    ],
    vocabularyTerms: [
      "Term_26_Alpha", "Principle_26_Beta", "Hypothesis_26_Gamma", "Equilibrium_26_Delta"
    ],
    instructionalPhases: {
      hookWarmUp: {
        duration: 5,
        activityDescription: "Display a provocative real-world anomaly video related to Chemistry topic 26",
        teacherPrompt: "Observe the anomalous behavior on screen and formulate three hypotheses explaining the cause."
      },
      directInstruction: {
        duration: 15,
        coreConceptsCovered: [
          "Historical derivation and contextual significance of principle 26",
          "Step-by-step mathematical proof and boundary condition constraints",
          "Safety protocols and standard operating procedures for lab exploration"
        ],
        demonstrationSteps: [
          "Step 1: Set up experimental apparatus on instructor demonstration bench",
          "Step 2: Calibrate zero-offset sensor baseline readings",
          "Step 3: Graph real-time data trajectory on main classroom digital projection"
        ]
      },
      guidedPractice: {
        duration: 12,
        groupTaskDescription: "Students work in assigned trios to solve tiered practice problems from Exercise Set 26.",
        scaffoldingStrategies: [
          "Provide worked examples on whiteboard for visual reference",
          "Conduct targeted mini-conferences with student groups needing foundational review",
          "Offer challenge extension problems for accelerated learner pods"
        ]
      },
      independentPractice: {
        duration: 8,
        assignmentDetails: "Complete Individual Problem Set 26 (Questions 1 through 6) showing full working steps.",
        rubricCriteria: [
          "Conceptual accuracy: 40%",
          "Mathematical precision & dimensional analysis: 40%",
          "Clarity of final answer presentation & SI units: 20%"
        ]
      },
      closureReflection: {
        duration: 5,
        exitTicketPrompt: "Summarize the single most critical insight from today's lesson in two complete sentences.",
        homeworkAssigned: "Read textbook Chapter 9, Section 3 and complete problem set."
      }
    },
    differentiationPlan: {
      giftedAndTalentedExtension: "Investigate advanced calculus derivations or computational Python simulations of this concept.",
      strugglingLearnerRemediation: "Utilize visual graphic organizers, formula reference sheets, and 1-on-1 TA guided support.",
      englishLanguageLearnerSupport: "Provide dual-language glossary terms, sentence stems, and multimodal video explanations."
    },
    assessmentType: "EXIT_TICKET"
  },
  {
    planId: "LP-CS-10-027",
    courseCode: "CS-10",
    courseTitle: "Advanced Computer Science Comprehensive Study",
    gradeLevel: "Grade 10",
    unitTitle: "Unit 6: Fundamental Principles of Computer Science",
    lessonNumber: 27,
    lessonTopic: "Core Topic 27: Analytical Exploration & Practical Application in Computer Science",
    durationMinutes: 45,
    pedagogicalApproach: "DIRECT_INSTRUCTION",
    essentialQuestions: [
      "How does the fundamental principle of Computer Science govern real-world physical and computational systems?",
      "In what ways can experimental evidence validate mathematical derivations in this domain?",
      "How do modern scientific breakthroughs rely on the core theorems introduced in Lesson 27?"
    ],
    learningObjectives: [
      "Master the theoretical definition and practical formulation of Topic 27",
      "Execute multi-step problem solving with 95% computational accuracy",
      "Collaborate in peer dyads to synthesize scientific arguments and defend conclusions"
    ],
    materialsAndResources: [
      "Interactive Smart Display & Digital Whiteboard Software",
      "Standard Student Laboratory Notebook & Precision Scientific Calculators",
      "Digital Sensor Probe Kits & Microcontroller Interface Units"
    ],
    vocabularyTerms: [
      "Term_27_Alpha", "Principle_27_Beta", "Hypothesis_27_Gamma", "Equilibrium_27_Delta"
    ],
    instructionalPhases: {
      hookWarmUp: {
        duration: 5,
        activityDescription: "Display a provocative real-world anomaly video related to Computer Science topic 27",
        teacherPrompt: "Observe the anomalous behavior on screen and formulate three hypotheses explaining the cause."
      },
      directInstruction: {
        duration: 15,
        coreConceptsCovered: [
          "Historical derivation and contextual significance of principle 27",
          "Step-by-step mathematical proof and boundary condition constraints",
          "Safety protocols and standard operating procedures for lab exploration"
        ],
        demonstrationSteps: [
          "Step 1: Set up experimental apparatus on instructor demonstration bench",
          "Step 2: Calibrate zero-offset sensor baseline readings",
          "Step 3: Graph real-time data trajectory on main classroom digital projection"
        ]
      },
      guidedPractice: {
        duration: 12,
        groupTaskDescription: "Students work in assigned trios to solve tiered practice problems from Exercise Set 27.",
        scaffoldingStrategies: [
          "Provide worked examples on whiteboard for visual reference",
          "Conduct targeted mini-conferences with student groups needing foundational review",
          "Offer challenge extension problems for accelerated learner pods"
        ]
      },
      independentPractice: {
        duration: 8,
        assignmentDetails: "Complete Individual Problem Set 27 (Questions 1 through 6) showing full working steps.",
        rubricCriteria: [
          "Conceptual accuracy: 40%",
          "Mathematical precision & dimensional analysis: 40%",
          "Clarity of final answer presentation & SI units: 20%"
        ]
      },
      closureReflection: {
        duration: 5,
        exitTicketPrompt: "Summarize the single most critical insight from today's lesson in two complete sentences.",
        homeworkAssigned: "Read textbook Chapter 10, Section 1 and complete problem set."
      }
    },
    differentiationPlan: {
      giftedAndTalentedExtension: "Investigate advanced calculus derivations or computational Python simulations of this concept.",
      strugglingLearnerRemediation: "Utilize visual graphic organizers, formula reference sheets, and 1-on-1 TA guided support.",
      englishLanguageLearnerSupport: "Provide dual-language glossary terms, sentence stems, and multimodal video explanations."
    },
    assessmentType: "FORMATIVE_QUIZ"
  },
  {
    planId: "LP-PHY-10-028",
    courseCode: "PHY-10",
    courseTitle: "Advanced Physics Comprehensive Study",
    gradeLevel: "Grade 10",
    unitTitle: "Unit 6: Fundamental Principles of Physics",
    lessonNumber: 28,
    lessonTopic: "Core Topic 28: Analytical Exploration & Practical Application in Physics",
    durationMinutes: 45,
    pedagogicalApproach: "INQUIRY_BASED",
    essentialQuestions: [
      "How does the fundamental principle of Physics govern real-world physical and computational systems?",
      "In what ways can experimental evidence validate mathematical derivations in this domain?",
      "How do modern scientific breakthroughs rely on the core theorems introduced in Lesson 28?"
    ],
    learningObjectives: [
      "Master the theoretical definition and practical formulation of Topic 28",
      "Execute multi-step problem solving with 95% computational accuracy",
      "Collaborate in peer dyads to synthesize scientific arguments and defend conclusions"
    ],
    materialsAndResources: [
      "Interactive Smart Display & Digital Whiteboard Software",
      "Standard Student Laboratory Notebook & Precision Scientific Calculators",
      "Digital Sensor Probe Kits & Microcontroller Interface Units"
    ],
    vocabularyTerms: [
      "Term_28_Alpha", "Principle_28_Beta", "Hypothesis_28_Gamma", "Equilibrium_28_Delta"
    ],
    instructionalPhases: {
      hookWarmUp: {
        duration: 5,
        activityDescription: "Display a provocative real-world anomaly video related to Physics topic 28",
        teacherPrompt: "Observe the anomalous behavior on screen and formulate three hypotheses explaining the cause."
      },
      directInstruction: {
        duration: 15,
        coreConceptsCovered: [
          "Historical derivation and contextual significance of principle 28",
          "Step-by-step mathematical proof and boundary condition constraints",
          "Safety protocols and standard operating procedures for lab exploration"
        ],
        demonstrationSteps: [
          "Step 1: Set up experimental apparatus on instructor demonstration bench",
          "Step 2: Calibrate zero-offset sensor baseline readings",
          "Step 3: Graph real-time data trajectory on main classroom digital projection"
        ]
      },
      guidedPractice: {
        duration: 12,
        groupTaskDescription: "Students work in assigned trios to solve tiered practice problems from Exercise Set 28.",
        scaffoldingStrategies: [
          "Provide worked examples on whiteboard for visual reference",
          "Conduct targeted mini-conferences with student groups needing foundational review",
          "Offer challenge extension problems for accelerated learner pods"
        ]
      },
      independentPractice: {
        duration: 8,
        assignmentDetails: "Complete Individual Problem Set 28 (Questions 1 through 6) showing full working steps.",
        rubricCriteria: [
          "Conceptual accuracy: 40%",
          "Mathematical precision & dimensional analysis: 40%",
          "Clarity of final answer presentation & SI units: 20%"
        ]
      },
      closureReflection: {
        duration: 5,
        exitTicketPrompt: "Summarize the single most critical insight from today's lesson in two complete sentences.",
        homeworkAssigned: "Read textbook Chapter 10, Section 2 and complete problem set."
      }
    },
    differentiationPlan: {
      giftedAndTalentedExtension: "Investigate advanced calculus derivations or computational Python simulations of this concept.",
      strugglingLearnerRemediation: "Utilize visual graphic organizers, formula reference sheets, and 1-on-1 TA guided support.",
      englishLanguageLearnerSupport: "Provide dual-language glossary terms, sentence stems, and multimodal video explanations."
    },
    assessmentType: "LAB_REPORT"
  },
  {
    planId: "LP-MTH-10-029",
    courseCode: "MTH-10",
    courseTitle: "Advanced Mathematics Comprehensive Study",
    gradeLevel: "Grade 10",
    unitTitle: "Unit 6: Fundamental Principles of Mathematics",
    lessonNumber: 29,
    lessonTopic: "Core Topic 29: Analytical Exploration & Practical Application in Mathematics",
    durationMinutes: 45,
    pedagogicalApproach: "DIRECT_INSTRUCTION",
    essentialQuestions: [
      "How does the fundamental principle of Mathematics govern real-world physical and computational systems?",
      "In what ways can experimental evidence validate mathematical derivations in this domain?",
      "How do modern scientific breakthroughs rely on the core theorems introduced in Lesson 29?"
    ],
    learningObjectives: [
      "Master the theoretical definition and practical formulation of Topic 29",
      "Execute multi-step problem solving with 95% computational accuracy",
      "Collaborate in peer dyads to synthesize scientific arguments and defend conclusions"
    ],
    materialsAndResources: [
      "Interactive Smart Display & Digital Whiteboard Software",
      "Standard Student Laboratory Notebook & Precision Scientific Calculators",
      "Digital Sensor Probe Kits & Microcontroller Interface Units"
    ],
    vocabularyTerms: [
      "Term_29_Alpha", "Principle_29_Beta", "Hypothesis_29_Gamma", "Equilibrium_29_Delta"
    ],
    instructionalPhases: {
      hookWarmUp: {
        duration: 5,
        activityDescription: "Display a provocative real-world anomaly video related to Mathematics topic 29",
        teacherPrompt: "Observe the anomalous behavior on screen and formulate three hypotheses explaining the cause."
      },
      directInstruction: {
        duration: 15,
        coreConceptsCovered: [
          "Historical derivation and contextual significance of principle 29",
          "Step-by-step mathematical proof and boundary condition constraints",
          "Safety protocols and standard operating procedures for lab exploration"
        ],
        demonstrationSteps: [
          "Step 1: Set up experimental apparatus on instructor demonstration bench",
          "Step 2: Calibrate zero-offset sensor baseline readings",
          "Step 3: Graph real-time data trajectory on main classroom digital projection"
        ]
      },
      guidedPractice: {
        duration: 12,
        groupTaskDescription: "Students work in assigned trios to solve tiered practice problems from Exercise Set 29.",
        scaffoldingStrategies: [
          "Provide worked examples on whiteboard for visual reference",
          "Conduct targeted mini-conferences with student groups needing foundational review",
          "Offer challenge extension problems for accelerated learner pods"
        ]
      },
      independentPractice: {
        duration: 8,
        assignmentDetails: "Complete Individual Problem Set 29 (Questions 1 through 6) showing full working steps.",
        rubricCriteria: [
          "Conceptual accuracy: 40%",
          "Mathematical precision & dimensional analysis: 40%",
          "Clarity of final answer presentation & SI units: 20%"
        ]
      },
      closureReflection: {
        duration: 5,
        exitTicketPrompt: "Summarize the single most critical insight from today's lesson in two complete sentences.",
        homeworkAssigned: "Read textbook Chapter 10, Section 3 and complete problem set."
      }
    },
    differentiationPlan: {
      giftedAndTalentedExtension: "Investigate advanced calculus derivations or computational Python simulations of this concept.",
      strugglingLearnerRemediation: "Utilize visual graphic organizers, formula reference sheets, and 1-on-1 TA guided support.",
      englishLanguageLearnerSupport: "Provide dual-language glossary terms, sentence stems, and multimodal video explanations."
    },
    assessmentType: "EXIT_TICKET"
  },
  {
    planId: "LP-CHM-10-030",
    courseCode: "CHM-10",
    courseTitle: "Advanced Chemistry Comprehensive Study",
    gradeLevel: "Grade 10",
    unitTitle: "Unit 7: Fundamental Principles of Chemistry",
    lessonNumber: 30,
    lessonTopic: "Core Topic 30: Analytical Exploration & Practical Application in Chemistry",
    durationMinutes: 45,
    pedagogicalApproach: "INQUIRY_BASED",
    essentialQuestions: [
      "How does the fundamental principle of Chemistry govern real-world physical and computational systems?",
      "In what ways can experimental evidence validate mathematical derivations in this domain?",
      "How do modern scientific breakthroughs rely on the core theorems introduced in Lesson 30?"
    ],
    learningObjectives: [
      "Master the theoretical definition and practical formulation of Topic 30",
      "Execute multi-step problem solving with 95% computational accuracy",
      "Collaborate in peer dyads to synthesize scientific arguments and defend conclusions"
    ],
    materialsAndResources: [
      "Interactive Smart Display & Digital Whiteboard Software",
      "Standard Student Laboratory Notebook & Precision Scientific Calculators",
      "Digital Sensor Probe Kits & Microcontroller Interface Units"
    ],
    vocabularyTerms: [
      "Term_30_Alpha", "Principle_30_Beta", "Hypothesis_30_Gamma", "Equilibrium_30_Delta"
    ],
    instructionalPhases: {
      hookWarmUp: {
        duration: 5,
        activityDescription: "Display a provocative real-world anomaly video related to Chemistry topic 30",
        teacherPrompt: "Observe the anomalous behavior on screen and formulate three hypotheses explaining the cause."
      },
      directInstruction: {
        duration: 15,
        coreConceptsCovered: [
          "Historical derivation and contextual significance of principle 30",
          "Step-by-step mathematical proof and boundary condition constraints",
          "Safety protocols and standard operating procedures for lab exploration"
        ],
        demonstrationSteps: [
          "Step 1: Set up experimental apparatus on instructor demonstration bench",
          "Step 2: Calibrate zero-offset sensor baseline readings",
          "Step 3: Graph real-time data trajectory on main classroom digital projection"
        ]
      },
      guidedPractice: {
        duration: 12,
        groupTaskDescription: "Students work in assigned trios to solve tiered practice problems from Exercise Set 30.",
        scaffoldingStrategies: [
          "Provide worked examples on whiteboard for visual reference",
          "Conduct targeted mini-conferences with student groups needing foundational review",
          "Offer challenge extension problems for accelerated learner pods"
        ]
      },
      independentPractice: {
        duration: 8,
        assignmentDetails: "Complete Individual Problem Set 30 (Questions 1 through 6) showing full working steps.",
        rubricCriteria: [
          "Conceptual accuracy: 40%",
          "Mathematical precision & dimensional analysis: 40%",
          "Clarity of final answer presentation & SI units: 20%"
        ]
      },
      closureReflection: {
        duration: 5,
        exitTicketPrompt: "Summarize the single most critical insight from today's lesson in two complete sentences.",
        homeworkAssigned: "Read textbook Chapter 11, Section 1 and complete problem set."
      }
    },
    differentiationPlan: {
      giftedAndTalentedExtension: "Investigate advanced calculus derivations or computational Python simulations of this concept.",
      strugglingLearnerRemediation: "Utilize visual graphic organizers, formula reference sheets, and 1-on-1 TA guided support.",
      englishLanguageLearnerSupport: "Provide dual-language glossary terms, sentence stems, and multimodal video explanations."
    },
    assessmentType: "FORMATIVE_QUIZ"
  },
  {
    planId: "LP-CS-10-031",
    courseCode: "CS-10",
    courseTitle: "Advanced Computer Science Comprehensive Study",
    gradeLevel: "Grade 10",
    unitTitle: "Unit 7: Fundamental Principles of Computer Science",
    lessonNumber: 31,
    lessonTopic: "Core Topic 31: Analytical Exploration & Practical Application in Computer Science",
    durationMinutes: 45,
    pedagogicalApproach: "DIRECT_INSTRUCTION",
    essentialQuestions: [
      "How does the fundamental principle of Computer Science govern real-world physical and computational systems?",
      "In what ways can experimental evidence validate mathematical derivations in this domain?",
      "How do modern scientific breakthroughs rely on the core theorems introduced in Lesson 31?"
    ],
    learningObjectives: [
      "Master the theoretical definition and practical formulation of Topic 31",
      "Execute multi-step problem solving with 95% computational accuracy",
      "Collaborate in peer dyads to synthesize scientific arguments and defend conclusions"
    ],
    materialsAndResources: [
      "Interactive Smart Display & Digital Whiteboard Software",
      "Standard Student Laboratory Notebook & Precision Scientific Calculators",
      "Digital Sensor Probe Kits & Microcontroller Interface Units"
    ],
    vocabularyTerms: [
      "Term_31_Alpha", "Principle_31_Beta", "Hypothesis_31_Gamma", "Equilibrium_31_Delta"
    ],
    instructionalPhases: {
      hookWarmUp: {
        duration: 5,
        activityDescription: "Display a provocative real-world anomaly video related to Computer Science topic 31",
        teacherPrompt: "Observe the anomalous behavior on screen and formulate three hypotheses explaining the cause."
      },
      directInstruction: {
        duration: 15,
        coreConceptsCovered: [
          "Historical derivation and contextual significance of principle 31",
          "Step-by-step mathematical proof and boundary condition constraints",
          "Safety protocols and standard operating procedures for lab exploration"
        ],
        demonstrationSteps: [
          "Step 1: Set up experimental apparatus on instructor demonstration bench",
          "Step 2: Calibrate zero-offset sensor baseline readings",
          "Step 3: Graph real-time data trajectory on main classroom digital projection"
        ]
      },
      guidedPractice: {
        duration: 12,
        groupTaskDescription: "Students work in assigned trios to solve tiered practice problems from Exercise Set 31.",
        scaffoldingStrategies: [
          "Provide worked examples on whiteboard for visual reference",
          "Conduct targeted mini-conferences with student groups needing foundational review",
          "Offer challenge extension problems for accelerated learner pods"
        ]
      },
      independentPractice: {
        duration: 8,
        assignmentDetails: "Complete Individual Problem Set 31 (Questions 1 through 6) showing full working steps.",
        rubricCriteria: [
          "Conceptual accuracy: 40%",
          "Mathematical precision & dimensional analysis: 40%",
          "Clarity of final answer presentation & SI units: 20%"
        ]
      },
      closureReflection: {
        duration: 5,
        exitTicketPrompt: "Summarize the single most critical insight from today's lesson in two complete sentences.",
        homeworkAssigned: "Read textbook Chapter 11, Section 2 and complete problem set."
      }
    },
    differentiationPlan: {
      giftedAndTalentedExtension: "Investigate advanced calculus derivations or computational Python simulations of this concept.",
      strugglingLearnerRemediation: "Utilize visual graphic organizers, formula reference sheets, and 1-on-1 TA guided support.",
      englishLanguageLearnerSupport: "Provide dual-language glossary terms, sentence stems, and multimodal video explanations."
    },
    assessmentType: "LAB_REPORT"
  },
  {
    planId: "LP-PHY-10-032",
    courseCode: "PHY-10",
    courseTitle: "Advanced Physics Comprehensive Study",
    gradeLevel: "Grade 10",
    unitTitle: "Unit 7: Fundamental Principles of Physics",
    lessonNumber: 32,
    lessonTopic: "Core Topic 32: Analytical Exploration & Practical Application in Physics",
    durationMinutes: 45,
    pedagogicalApproach: "INQUIRY_BASED",
    essentialQuestions: [
      "How does the fundamental principle of Physics govern real-world physical and computational systems?",
      "In what ways can experimental evidence validate mathematical derivations in this domain?",
      "How do modern scientific breakthroughs rely on the core theorems introduced in Lesson 32?"
    ],
    learningObjectives: [
      "Master the theoretical definition and practical formulation of Topic 32",
      "Execute multi-step problem solving with 95% computational accuracy",
      "Collaborate in peer dyads to synthesize scientific arguments and defend conclusions"
    ],
    materialsAndResources: [
      "Interactive Smart Display & Digital Whiteboard Software",
      "Standard Student Laboratory Notebook & Precision Scientific Calculators",
      "Digital Sensor Probe Kits & Microcontroller Interface Units"
    ],
    vocabularyTerms: [
      "Term_32_Alpha", "Principle_32_Beta", "Hypothesis_32_Gamma", "Equilibrium_32_Delta"
    ],
    instructionalPhases: {
      hookWarmUp: {
        duration: 5,
        activityDescription: "Display a provocative real-world anomaly video related to Physics topic 32",
        teacherPrompt: "Observe the anomalous behavior on screen and formulate three hypotheses explaining the cause."
      },
      directInstruction: {
        duration: 15,
        coreConceptsCovered: [
          "Historical derivation and contextual significance of principle 32",
          "Step-by-step mathematical proof and boundary condition constraints",
          "Safety protocols and standard operating procedures for lab exploration"
        ],
        demonstrationSteps: [
          "Step 1: Set up experimental apparatus on instructor demonstration bench",
          "Step 2: Calibrate zero-offset sensor baseline readings",
          "Step 3: Graph real-time data trajectory on main classroom digital projection"
        ]
      },
      guidedPractice: {
        duration: 12,
        groupTaskDescription: "Students work in assigned trios to solve tiered practice problems from Exercise Set 32.",
        scaffoldingStrategies: [
          "Provide worked examples on whiteboard for visual reference",
          "Conduct targeted mini-conferences with student groups needing foundational review",
          "Offer challenge extension problems for accelerated learner pods"
        ]
      },
      independentPractice: {
        duration: 8,
        assignmentDetails: "Complete Individual Problem Set 32 (Questions 1 through 6) showing full working steps.",
        rubricCriteria: [
          "Conceptual accuracy: 40%",
          "Mathematical precision & dimensional analysis: 40%",
          "Clarity of final answer presentation & SI units: 20%"
        ]
      },
      closureReflection: {
        duration: 5,
        exitTicketPrompt: "Summarize the single most critical insight from today's lesson in two complete sentences.",
        homeworkAssigned: "Read textbook Chapter 11, Section 3 and complete problem set."
      }
    },
    differentiationPlan: {
      giftedAndTalentedExtension: "Investigate advanced calculus derivations or computational Python simulations of this concept.",
      strugglingLearnerRemediation: "Utilize visual graphic organizers, formula reference sheets, and 1-on-1 TA guided support.",
      englishLanguageLearnerSupport: "Provide dual-language glossary terms, sentence stems, and multimodal video explanations."
    },
    assessmentType: "EXIT_TICKET"
  },
  {
    planId: "LP-MTH-10-033",
    courseCode: "MTH-10",
    courseTitle: "Advanced Mathematics Comprehensive Study",
    gradeLevel: "Grade 10",
    unitTitle: "Unit 7: Fundamental Principles of Mathematics",
    lessonNumber: 33,
    lessonTopic: "Core Topic 33: Analytical Exploration & Practical Application in Mathematics",
    durationMinutes: 45,
    pedagogicalApproach: "DIRECT_INSTRUCTION",
    essentialQuestions: [
      "How does the fundamental principle of Mathematics govern real-world physical and computational systems?",
      "In what ways can experimental evidence validate mathematical derivations in this domain?",
      "How do modern scientific breakthroughs rely on the core theorems introduced in Lesson 33?"
    ],
    learningObjectives: [
      "Master the theoretical definition and practical formulation of Topic 33",
      "Execute multi-step problem solving with 95% computational accuracy",
      "Collaborate in peer dyads to synthesize scientific arguments and defend conclusions"
    ],
    materialsAndResources: [
      "Interactive Smart Display & Digital Whiteboard Software",
      "Standard Student Laboratory Notebook & Precision Scientific Calculators",
      "Digital Sensor Probe Kits & Microcontroller Interface Units"
    ],
    vocabularyTerms: [
      "Term_33_Alpha", "Principle_33_Beta", "Hypothesis_33_Gamma", "Equilibrium_33_Delta"
    ],
    instructionalPhases: {
      hookWarmUp: {
        duration: 5,
        activityDescription: "Display a provocative real-world anomaly video related to Mathematics topic 33",
        teacherPrompt: "Observe the anomalous behavior on screen and formulate three hypotheses explaining the cause."
      },
      directInstruction: {
        duration: 15,
        coreConceptsCovered: [
          "Historical derivation and contextual significance of principle 33",
          "Step-by-step mathematical proof and boundary condition constraints",
          "Safety protocols and standard operating procedures for lab exploration"
        ],
        demonstrationSteps: [
          "Step 1: Set up experimental apparatus on instructor demonstration bench",
          "Step 2: Calibrate zero-offset sensor baseline readings",
          "Step 3: Graph real-time data trajectory on main classroom digital projection"
        ]
      },
      guidedPractice: {
        duration: 12,
        groupTaskDescription: "Students work in assigned trios to solve tiered practice problems from Exercise Set 33.",
        scaffoldingStrategies: [
          "Provide worked examples on whiteboard for visual reference",
          "Conduct targeted mini-conferences with student groups needing foundational review",
          "Offer challenge extension problems for accelerated learner pods"
        ]
      },
      independentPractice: {
        duration: 8,
        assignmentDetails: "Complete Individual Problem Set 33 (Questions 1 through 6) showing full working steps.",
        rubricCriteria: [
          "Conceptual accuracy: 40%",
          "Mathematical precision & dimensional analysis: 40%",
          "Clarity of final answer presentation & SI units: 20%"
        ]
      },
      closureReflection: {
        duration: 5,
        exitTicketPrompt: "Summarize the single most critical insight from today's lesson in two complete sentences.",
        homeworkAssigned: "Read textbook Chapter 12, Section 1 and complete problem set."
      }
    },
    differentiationPlan: {
      giftedAndTalentedExtension: "Investigate advanced calculus derivations or computational Python simulations of this concept.",
      strugglingLearnerRemediation: "Utilize visual graphic organizers, formula reference sheets, and 1-on-1 TA guided support.",
      englishLanguageLearnerSupport: "Provide dual-language glossary terms, sentence stems, and multimodal video explanations."
    },
    assessmentType: "FORMATIVE_QUIZ"
  },
  {
    planId: "LP-CHM-10-034",
    courseCode: "CHM-10",
    courseTitle: "Advanced Chemistry Comprehensive Study",
    gradeLevel: "Grade 10",
    unitTitle: "Unit 7: Fundamental Principles of Chemistry",
    lessonNumber: 34,
    lessonTopic: "Core Topic 34: Analytical Exploration & Practical Application in Chemistry",
    durationMinutes: 45,
    pedagogicalApproach: "INQUIRY_BASED",
    essentialQuestions: [
      "How does the fundamental principle of Chemistry govern real-world physical and computational systems?",
      "In what ways can experimental evidence validate mathematical derivations in this domain?",
      "How do modern scientific breakthroughs rely on the core theorems introduced in Lesson 34?"
    ],
    learningObjectives: [
      "Master the theoretical definition and practical formulation of Topic 34",
      "Execute multi-step problem solving with 95% computational accuracy",
      "Collaborate in peer dyads to synthesize scientific arguments and defend conclusions"
    ],
    materialsAndResources: [
      "Interactive Smart Display & Digital Whiteboard Software",
      "Standard Student Laboratory Notebook & Precision Scientific Calculators",
      "Digital Sensor Probe Kits & Microcontroller Interface Units"
    ],
    vocabularyTerms: [
      "Term_34_Alpha", "Principle_34_Beta", "Hypothesis_34_Gamma", "Equilibrium_34_Delta"
    ],
    instructionalPhases: {
      hookWarmUp: {
        duration: 5,
        activityDescription: "Display a provocative real-world anomaly video related to Chemistry topic 34",
        teacherPrompt: "Observe the anomalous behavior on screen and formulate three hypotheses explaining the cause."
      },
      directInstruction: {
        duration: 15,
        coreConceptsCovered: [
          "Historical derivation and contextual significance of principle 34",
          "Step-by-step mathematical proof and boundary condition constraints",
          "Safety protocols and standard operating procedures for lab exploration"
        ],
        demonstrationSteps: [
          "Step 1: Set up experimental apparatus on instructor demonstration bench",
          "Step 2: Calibrate zero-offset sensor baseline readings",
          "Step 3: Graph real-time data trajectory on main classroom digital projection"
        ]
      },
      guidedPractice: {
        duration: 12,
        groupTaskDescription: "Students work in assigned trios to solve tiered practice problems from Exercise Set 34.",
        scaffoldingStrategies: [
          "Provide worked examples on whiteboard for visual reference",
          "Conduct targeted mini-conferences with student groups needing foundational review",
          "Offer challenge extension problems for accelerated learner pods"
        ]
      },
      independentPractice: {
        duration: 8,
        assignmentDetails: "Complete Individual Problem Set 34 (Questions 1 through 6) showing full working steps.",
        rubricCriteria: [
          "Conceptual accuracy: 40%",
          "Mathematical precision & dimensional analysis: 40%",
          "Clarity of final answer presentation & SI units: 20%"
        ]
      },
      closureReflection: {
        duration: 5,
        exitTicketPrompt: "Summarize the single most critical insight from today's lesson in two complete sentences.",
        homeworkAssigned: "Read textbook Chapter 12, Section 2 and complete problem set."
      }
    },
    differentiationPlan: {
      giftedAndTalentedExtension: "Investigate advanced calculus derivations or computational Python simulations of this concept.",
      strugglingLearnerRemediation: "Utilize visual graphic organizers, formula reference sheets, and 1-on-1 TA guided support.",
      englishLanguageLearnerSupport: "Provide dual-language glossary terms, sentence stems, and multimodal video explanations."
    },
    assessmentType: "LAB_REPORT"
  },
  {
    planId: "LP-CS-10-035",
    courseCode: "CS-10",
    courseTitle: "Advanced Computer Science Comprehensive Study",
    gradeLevel: "Grade 10",
    unitTitle: "Unit 8: Fundamental Principles of Computer Science",
    lessonNumber: 35,
    lessonTopic: "Core Topic 35: Analytical Exploration & Practical Application in Computer Science",
    durationMinutes: 45,
    pedagogicalApproach: "DIRECT_INSTRUCTION",
    essentialQuestions: [
      "How does the fundamental principle of Computer Science govern real-world physical and computational systems?",
      "In what ways can experimental evidence validate mathematical derivations in this domain?",
      "How do modern scientific breakthroughs rely on the core theorems introduced in Lesson 35?"
    ],
    learningObjectives: [
      "Master the theoretical definition and practical formulation of Topic 35",
      "Execute multi-step problem solving with 95% computational accuracy",
      "Collaborate in peer dyads to synthesize scientific arguments and defend conclusions"
    ],
    materialsAndResources: [
      "Interactive Smart Display & Digital Whiteboard Software",
      "Standard Student Laboratory Notebook & Precision Scientific Calculators",
      "Digital Sensor Probe Kits & Microcontroller Interface Units"
    ],
    vocabularyTerms: [
      "Term_35_Alpha", "Principle_35_Beta", "Hypothesis_35_Gamma", "Equilibrium_35_Delta"
    ],
    instructionalPhases: {
      hookWarmUp: {
        duration: 5,
        activityDescription: "Display a provocative real-world anomaly video related to Computer Science topic 35",
        teacherPrompt: "Observe the anomalous behavior on screen and formulate three hypotheses explaining the cause."
      },
      directInstruction: {
        duration: 15,
        coreConceptsCovered: [
          "Historical derivation and contextual significance of principle 35",
          "Step-by-step mathematical proof and boundary condition constraints",
          "Safety protocols and standard operating procedures for lab exploration"
        ],
        demonstrationSteps: [
          "Step 1: Set up experimental apparatus on instructor demonstration bench",
          "Step 2: Calibrate zero-offset sensor baseline readings",
          "Step 3: Graph real-time data trajectory on main classroom digital projection"
        ]
      },
      guidedPractice: {
        duration: 12,
        groupTaskDescription: "Students work in assigned trios to solve tiered practice problems from Exercise Set 35.",
        scaffoldingStrategies: [
          "Provide worked examples on whiteboard for visual reference",
          "Conduct targeted mini-conferences with student groups needing foundational review",
          "Offer challenge extension problems for accelerated learner pods"
        ]
      },
      independentPractice: {
        duration: 8,
        assignmentDetails: "Complete Individual Problem Set 35 (Questions 1 through 6) showing full working steps.",
        rubricCriteria: [
          "Conceptual accuracy: 40%",
          "Mathematical precision & dimensional analysis: 40%",
          "Clarity of final answer presentation & SI units: 20%"
        ]
      },
      closureReflection: {
        duration: 5,
        exitTicketPrompt: "Summarize the single most critical insight from today's lesson in two complete sentences.",
        homeworkAssigned: "Read textbook Chapter 12, Section 3 and complete problem set."
      }
    },
    differentiationPlan: {
      giftedAndTalentedExtension: "Investigate advanced calculus derivations or computational Python simulations of this concept.",
      strugglingLearnerRemediation: "Utilize visual graphic organizers, formula reference sheets, and 1-on-1 TA guided support.",
      englishLanguageLearnerSupport: "Provide dual-language glossary terms, sentence stems, and multimodal video explanations."
    },
    assessmentType: "EXIT_TICKET"
  },
  {
    planId: "LP-PHY-10-036",
    courseCode: "PHY-10",
    courseTitle: "Advanced Physics Comprehensive Study",
    gradeLevel: "Grade 10",
    unitTitle: "Unit 8: Fundamental Principles of Physics",
    lessonNumber: 36,
    lessonTopic: "Core Topic 36: Analytical Exploration & Practical Application in Physics",
    durationMinutes: 45,
    pedagogicalApproach: "INQUIRY_BASED",
    essentialQuestions: [
      "How does the fundamental principle of Physics govern real-world physical and computational systems?",
      "In what ways can experimental evidence validate mathematical derivations in this domain?",
      "How do modern scientific breakthroughs rely on the core theorems introduced in Lesson 36?"
    ],
    learningObjectives: [
      "Master the theoretical definition and practical formulation of Topic 36",
      "Execute multi-step problem solving with 95% computational accuracy",
      "Collaborate in peer dyads to synthesize scientific arguments and defend conclusions"
    ],
    materialsAndResources: [
      "Interactive Smart Display & Digital Whiteboard Software",
      "Standard Student Laboratory Notebook & Precision Scientific Calculators",
      "Digital Sensor Probe Kits & Microcontroller Interface Units"
    ],
    vocabularyTerms: [
      "Term_36_Alpha", "Principle_36_Beta", "Hypothesis_36_Gamma", "Equilibrium_36_Delta"
    ],
    instructionalPhases: {
      hookWarmUp: {
        duration: 5,
        activityDescription: "Display a provocative real-world anomaly video related to Physics topic 36",
        teacherPrompt: "Observe the anomalous behavior on screen and formulate three hypotheses explaining the cause."
      },
      directInstruction: {
        duration: 15,
        coreConceptsCovered: [
          "Historical derivation and contextual significance of principle 36",
          "Step-by-step mathematical proof and boundary condition constraints",
          "Safety protocols and standard operating procedures for lab exploration"
        ],
        demonstrationSteps: [
          "Step 1: Set up experimental apparatus on instructor demonstration bench",
          "Step 2: Calibrate zero-offset sensor baseline readings",
          "Step 3: Graph real-time data trajectory on main classroom digital projection"
        ]
      },
      guidedPractice: {
        duration: 12,
        groupTaskDescription: "Students work in assigned trios to solve tiered practice problems from Exercise Set 36.",
        scaffoldingStrategies: [
          "Provide worked examples on whiteboard for visual reference",
          "Conduct targeted mini-conferences with student groups needing foundational review",
          "Offer challenge extension problems for accelerated learner pods"
        ]
      },
      independentPractice: {
        duration: 8,
        assignmentDetails: "Complete Individual Problem Set 36 (Questions 1 through 6) showing full working steps.",
        rubricCriteria: [
          "Conceptual accuracy: 40%",
          "Mathematical precision & dimensional analysis: 40%",
          "Clarity of final answer presentation & SI units: 20%"
        ]
      },
      closureReflection: {
        duration: 5,
        exitTicketPrompt: "Summarize the single most critical insight from today's lesson in two complete sentences.",
        homeworkAssigned: "Read textbook Chapter 13, Section 1 and complete problem set."
      }
    },
    differentiationPlan: {
      giftedAndTalentedExtension: "Investigate advanced calculus derivations or computational Python simulations of this concept.",
      strugglingLearnerRemediation: "Utilize visual graphic organizers, formula reference sheets, and 1-on-1 TA guided support.",
      englishLanguageLearnerSupport: "Provide dual-language glossary terms, sentence stems, and multimodal video explanations."
    },
    assessmentType: "FORMATIVE_QUIZ"
  },
  {
    planId: "LP-MTH-10-037",
    courseCode: "MTH-10",
    courseTitle: "Advanced Mathematics Comprehensive Study",
    gradeLevel: "Grade 10",
    unitTitle: "Unit 8: Fundamental Principles of Mathematics",
    lessonNumber: 37,
    lessonTopic: "Core Topic 37: Analytical Exploration & Practical Application in Mathematics",
    durationMinutes: 45,
    pedagogicalApproach: "DIRECT_INSTRUCTION",
    essentialQuestions: [
      "How does the fundamental principle of Mathematics govern real-world physical and computational systems?",
      "In what ways can experimental evidence validate mathematical derivations in this domain?",
      "How do modern scientific breakthroughs rely on the core theorems introduced in Lesson 37?"
    ],
    learningObjectives: [
      "Master the theoretical definition and practical formulation of Topic 37",
      "Execute multi-step problem solving with 95% computational accuracy",
      "Collaborate in peer dyads to synthesize scientific arguments and defend conclusions"
    ],
    materialsAndResources: [
      "Interactive Smart Display & Digital Whiteboard Software",
      "Standard Student Laboratory Notebook & Precision Scientific Calculators",
      "Digital Sensor Probe Kits & Microcontroller Interface Units"
    ],
    vocabularyTerms: [
      "Term_37_Alpha", "Principle_37_Beta", "Hypothesis_37_Gamma", "Equilibrium_37_Delta"
    ],
    instructionalPhases: {
      hookWarmUp: {
        duration: 5,
        activityDescription: "Display a provocative real-world anomaly video related to Mathematics topic 37",
        teacherPrompt: "Observe the anomalous behavior on screen and formulate three hypotheses explaining the cause."
      },
      directInstruction: {
        duration: 15,
        coreConceptsCovered: [
          "Historical derivation and contextual significance of principle 37",
          "Step-by-step mathematical proof and boundary condition constraints",
          "Safety protocols and standard operating procedures for lab exploration"
        ],
        demonstrationSteps: [
          "Step 1: Set up experimental apparatus on instructor demonstration bench",
          "Step 2: Calibrate zero-offset sensor baseline readings",
          "Step 3: Graph real-time data trajectory on main classroom digital projection"
        ]
      },
      guidedPractice: {
        duration: 12,
        groupTaskDescription: "Students work in assigned trios to solve tiered practice problems from Exercise Set 37.",
        scaffoldingStrategies: [
          "Provide worked examples on whiteboard for visual reference",
          "Conduct targeted mini-conferences with student groups needing foundational review",
          "Offer challenge extension problems for accelerated learner pods"
        ]
      },
      independentPractice: {
        duration: 8,
        assignmentDetails: "Complete Individual Problem Set 37 (Questions 1 through 6) showing full working steps.",
        rubricCriteria: [
          "Conceptual accuracy: 40%",
          "Mathematical precision & dimensional analysis: 40%",
          "Clarity of final answer presentation & SI units: 20%"
        ]
      },
      closureReflection: {
        duration: 5,
        exitTicketPrompt: "Summarize the single most critical insight from today's lesson in two complete sentences.",
        homeworkAssigned: "Read textbook Chapter 13, Section 2 and complete problem set."
      }
    },
    differentiationPlan: {
      giftedAndTalentedExtension: "Investigate advanced calculus derivations or computational Python simulations of this concept.",
      strugglingLearnerRemediation: "Utilize visual graphic organizers, formula reference sheets, and 1-on-1 TA guided support.",
      englishLanguageLearnerSupport: "Provide dual-language glossary terms, sentence stems, and multimodal video explanations."
    },
    assessmentType: "LAB_REPORT"
  },
  {
    planId: "LP-CHM-10-038",
    courseCode: "CHM-10",
    courseTitle: "Advanced Chemistry Comprehensive Study",
    gradeLevel: "Grade 10",
    unitTitle: "Unit 8: Fundamental Principles of Chemistry",
    lessonNumber: 38,
    lessonTopic: "Core Topic 38: Analytical Exploration & Practical Application in Chemistry",
    durationMinutes: 45,
    pedagogicalApproach: "INQUIRY_BASED",
    essentialQuestions: [
      "How does the fundamental principle of Chemistry govern real-world physical and computational systems?",
      "In what ways can experimental evidence validate mathematical derivations in this domain?",
      "How do modern scientific breakthroughs rely on the core theorems introduced in Lesson 38?"
    ],
    learningObjectives: [
      "Master the theoretical definition and practical formulation of Topic 38",
      "Execute multi-step problem solving with 95% computational accuracy",
      "Collaborate in peer dyads to synthesize scientific arguments and defend conclusions"
    ],
    materialsAndResources: [
      "Interactive Smart Display & Digital Whiteboard Software",
      "Standard Student Laboratory Notebook & Precision Scientific Calculators",
      "Digital Sensor Probe Kits & Microcontroller Interface Units"
    ],
    vocabularyTerms: [
      "Term_38_Alpha", "Principle_38_Beta", "Hypothesis_38_Gamma", "Equilibrium_38_Delta"
    ],
    instructionalPhases: {
      hookWarmUp: {
        duration: 5,
        activityDescription: "Display a provocative real-world anomaly video related to Chemistry topic 38",
        teacherPrompt: "Observe the anomalous behavior on screen and formulate three hypotheses explaining the cause."
      },
      directInstruction: {
        duration: 15,
        coreConceptsCovered: [
          "Historical derivation and contextual significance of principle 38",
          "Step-by-step mathematical proof and boundary condition constraints",
          "Safety protocols and standard operating procedures for lab exploration"
        ],
        demonstrationSteps: [
          "Step 1: Set up experimental apparatus on instructor demonstration bench",
          "Step 2: Calibrate zero-offset sensor baseline readings",
          "Step 3: Graph real-time data trajectory on main classroom digital projection"
        ]
      },
      guidedPractice: {
        duration: 12,
        groupTaskDescription: "Students work in assigned trios to solve tiered practice problems from Exercise Set 38.",
        scaffoldingStrategies: [
          "Provide worked examples on whiteboard for visual reference",
          "Conduct targeted mini-conferences with student groups needing foundational review",
          "Offer challenge extension problems for accelerated learner pods"
        ]
      },
      independentPractice: {
        duration: 8,
        assignmentDetails: "Complete Individual Problem Set 38 (Questions 1 through 6) showing full working steps.",
        rubricCriteria: [
          "Conceptual accuracy: 40%",
          "Mathematical precision & dimensional analysis: 40%",
          "Clarity of final answer presentation & SI units: 20%"
        ]
      },
      closureReflection: {
        duration: 5,
        exitTicketPrompt: "Summarize the single most critical insight from today's lesson in two complete sentences.",
        homeworkAssigned: "Read textbook Chapter 13, Section 3 and complete problem set."
      }
    },
    differentiationPlan: {
      giftedAndTalentedExtension: "Investigate advanced calculus derivations or computational Python simulations of this concept.",
      strugglingLearnerRemediation: "Utilize visual graphic organizers, formula reference sheets, and 1-on-1 TA guided support.",
      englishLanguageLearnerSupport: "Provide dual-language glossary terms, sentence stems, and multimodal video explanations."
    },
    assessmentType: "EXIT_TICKET"
  },
  {
    planId: "LP-CS-10-039",
    courseCode: "CS-10",
    courseTitle: "Advanced Computer Science Comprehensive Study",
    gradeLevel: "Grade 10",
    unitTitle: "Unit 8: Fundamental Principles of Computer Science",
    lessonNumber: 39,
    lessonTopic: "Core Topic 39: Analytical Exploration & Practical Application in Computer Science",
    durationMinutes: 45,
    pedagogicalApproach: "DIRECT_INSTRUCTION",
    essentialQuestions: [
      "How does the fundamental principle of Computer Science govern real-world physical and computational systems?",
      "In what ways can experimental evidence validate mathematical derivations in this domain?",
      "How do modern scientific breakthroughs rely on the core theorems introduced in Lesson 39?"
    ],
    learningObjectives: [
      "Master the theoretical definition and practical formulation of Topic 39",
      "Execute multi-step problem solving with 95% computational accuracy",
      "Collaborate in peer dyads to synthesize scientific arguments and defend conclusions"
    ],
    materialsAndResources: [
      "Interactive Smart Display & Digital Whiteboard Software",
      "Standard Student Laboratory Notebook & Precision Scientific Calculators",
      "Digital Sensor Probe Kits & Microcontroller Interface Units"
    ],
    vocabularyTerms: [
      "Term_39_Alpha", "Principle_39_Beta", "Hypothesis_39_Gamma", "Equilibrium_39_Delta"
    ],
    instructionalPhases: {
      hookWarmUp: {
        duration: 5,
        activityDescription: "Display a provocative real-world anomaly video related to Computer Science topic 39",
        teacherPrompt: "Observe the anomalous behavior on screen and formulate three hypotheses explaining the cause."
      },
      directInstruction: {
        duration: 15,
        coreConceptsCovered: [
          "Historical derivation and contextual significance of principle 39",
          "Step-by-step mathematical proof and boundary condition constraints",
          "Safety protocols and standard operating procedures for lab exploration"
        ],
        demonstrationSteps: [
          "Step 1: Set up experimental apparatus on instructor demonstration bench",
          "Step 2: Calibrate zero-offset sensor baseline readings",
          "Step 3: Graph real-time data trajectory on main classroom digital projection"
        ]
      },
      guidedPractice: {
        duration: 12,
        groupTaskDescription: "Students work in assigned trios to solve tiered practice problems from Exercise Set 39.",
        scaffoldingStrategies: [
          "Provide worked examples on whiteboard for visual reference",
          "Conduct targeted mini-conferences with student groups needing foundational review",
          "Offer challenge extension problems for accelerated learner pods"
        ]
      },
      independentPractice: {
        duration: 8,
        assignmentDetails: "Complete Individual Problem Set 39 (Questions 1 through 6) showing full working steps.",
        rubricCriteria: [
          "Conceptual accuracy: 40%",
          "Mathematical precision & dimensional analysis: 40%",
          "Clarity of final answer presentation & SI units: 20%"
        ]
      },
      closureReflection: {
        duration: 5,
        exitTicketPrompt: "Summarize the single most critical insight from today's lesson in two complete sentences.",
        homeworkAssigned: "Read textbook Chapter 14, Section 1 and complete problem set."
      }
    },
    differentiationPlan: {
      giftedAndTalentedExtension: "Investigate advanced calculus derivations or computational Python simulations of this concept.",
      strugglingLearnerRemediation: "Utilize visual graphic organizers, formula reference sheets, and 1-on-1 TA guided support.",
      englishLanguageLearnerSupport: "Provide dual-language glossary terms, sentence stems, and multimodal video explanations."
    },
    assessmentType: "FORMATIVE_QUIZ"
  },
  {
    planId: "LP-PHY-10-040",
    courseCode: "PHY-10",
    courseTitle: "Advanced Physics Comprehensive Study",
    gradeLevel: "Grade 11",
    unitTitle: "Unit 9: Fundamental Principles of Physics",
    lessonNumber: 40,
    lessonTopic: "Core Topic 40: Analytical Exploration & Practical Application in Physics",
    durationMinutes: 45,
    pedagogicalApproach: "INQUIRY_BASED",
    essentialQuestions: [
      "How does the fundamental principle of Physics govern real-world physical and computational systems?",
      "In what ways can experimental evidence validate mathematical derivations in this domain?",
      "How do modern scientific breakthroughs rely on the core theorems introduced in Lesson 40?"
    ],
    learningObjectives: [
      "Master the theoretical definition and practical formulation of Topic 40",
      "Execute multi-step problem solving with 95% computational accuracy",
      "Collaborate in peer dyads to synthesize scientific arguments and defend conclusions"
    ],
    materialsAndResources: [
      "Interactive Smart Display & Digital Whiteboard Software",
      "Standard Student Laboratory Notebook & Precision Scientific Calculators",
      "Digital Sensor Probe Kits & Microcontroller Interface Units"
    ],
    vocabularyTerms: [
      "Term_40_Alpha", "Principle_40_Beta", "Hypothesis_40_Gamma", "Equilibrium_40_Delta"
    ],
    instructionalPhases: {
      hookWarmUp: {
        duration: 5,
        activityDescription: "Display a provocative real-world anomaly video related to Physics topic 40",
        teacherPrompt: "Observe the anomalous behavior on screen and formulate three hypotheses explaining the cause."
      },
      directInstruction: {
        duration: 15,
        coreConceptsCovered: [
          "Historical derivation and contextual significance of principle 40",
          "Step-by-step mathematical proof and boundary condition constraints",
          "Safety protocols and standard operating procedures for lab exploration"
        ],
        demonstrationSteps: [
          "Step 1: Set up experimental apparatus on instructor demonstration bench",
          "Step 2: Calibrate zero-offset sensor baseline readings",
          "Step 3: Graph real-time data trajectory on main classroom digital projection"
        ]
      },
      guidedPractice: {
        duration: 12,
        groupTaskDescription: "Students work in assigned trios to solve tiered practice problems from Exercise Set 40.",
        scaffoldingStrategies: [
          "Provide worked examples on whiteboard for visual reference",
          "Conduct targeted mini-conferences with student groups needing foundational review",
          "Offer challenge extension problems for accelerated learner pods"
        ]
      },
      independentPractice: {
        duration: 8,
        assignmentDetails: "Complete Individual Problem Set 40 (Questions 1 through 6) showing full working steps.",
        rubricCriteria: [
          "Conceptual accuracy: 40%",
          "Mathematical precision & dimensional analysis: 40%",
          "Clarity of final answer presentation & SI units: 20%"
        ]
      },
      closureReflection: {
        duration: 5,
        exitTicketPrompt: "Summarize the single most critical insight from today's lesson in two complete sentences.",
        homeworkAssigned: "Read textbook Chapter 14, Section 2 and complete problem set."
      }
    },
    differentiationPlan: {
      giftedAndTalentedExtension: "Investigate advanced calculus derivations or computational Python simulations of this concept.",
      strugglingLearnerRemediation: "Utilize visual graphic organizers, formula reference sheets, and 1-on-1 TA guided support.",
      englishLanguageLearnerSupport: "Provide dual-language glossary terms, sentence stems, and multimodal video explanations."
    },
    assessmentType: "LAB_REPORT"
  },
  {
    planId: "LP-MTH-10-041",
    courseCode: "MTH-10",
    courseTitle: "Advanced Mathematics Comprehensive Study",
    gradeLevel: "Grade 11",
    unitTitle: "Unit 9: Fundamental Principles of Mathematics",
    lessonNumber: 41,
    lessonTopic: "Core Topic 41: Analytical Exploration & Practical Application in Mathematics",
    durationMinutes: 45,
    pedagogicalApproach: "DIRECT_INSTRUCTION",
    essentialQuestions: [
      "How does the fundamental principle of Mathematics govern real-world physical and computational systems?",
      "In what ways can experimental evidence validate mathematical derivations in this domain?",
      "How do modern scientific breakthroughs rely on the core theorems introduced in Lesson 41?"
    ],
    learningObjectives: [
      "Master the theoretical definition and practical formulation of Topic 41",
      "Execute multi-step problem solving with 95% computational accuracy",
      "Collaborate in peer dyads to synthesize scientific arguments and defend conclusions"
    ],
    materialsAndResources: [
      "Interactive Smart Display & Digital Whiteboard Software",
      "Standard Student Laboratory Notebook & Precision Scientific Calculators",
      "Digital Sensor Probe Kits & Microcontroller Interface Units"
    ],
    vocabularyTerms: [
      "Term_41_Alpha", "Principle_41_Beta", "Hypothesis_41_Gamma", "Equilibrium_41_Delta"
    ],
    instructionalPhases: {
      hookWarmUp: {
        duration: 5,
        activityDescription: "Display a provocative real-world anomaly video related to Mathematics topic 41",
        teacherPrompt: "Observe the anomalous behavior on screen and formulate three hypotheses explaining the cause."
      },
      directInstruction: {
        duration: 15,
        coreConceptsCovered: [
          "Historical derivation and contextual significance of principle 41",
          "Step-by-step mathematical proof and boundary condition constraints",
          "Safety protocols and standard operating procedures for lab exploration"
        ],
        demonstrationSteps: [
          "Step 1: Set up experimental apparatus on instructor demonstration bench",
          "Step 2: Calibrate zero-offset sensor baseline readings",
          "Step 3: Graph real-time data trajectory on main classroom digital projection"
        ]
      },
      guidedPractice: {
        duration: 12,
        groupTaskDescription: "Students work in assigned trios to solve tiered practice problems from Exercise Set 41.",
        scaffoldingStrategies: [
          "Provide worked examples on whiteboard for visual reference",
          "Conduct targeted mini-conferences with student groups needing foundational review",
          "Offer challenge extension problems for accelerated learner pods"
        ]
      },
      independentPractice: {
        duration: 8,
        assignmentDetails: "Complete Individual Problem Set 41 (Questions 1 through 6) showing full working steps.",
        rubricCriteria: [
          "Conceptual accuracy: 40%",
          "Mathematical precision & dimensional analysis: 40%",
          "Clarity of final answer presentation & SI units: 20%"
        ]
      },
      closureReflection: {
        duration: 5,
        exitTicketPrompt: "Summarize the single most critical insight from today's lesson in two complete sentences.",
        homeworkAssigned: "Read textbook Chapter 14, Section 3 and complete problem set."
      }
    },
    differentiationPlan: {
      giftedAndTalentedExtension: "Investigate advanced calculus derivations or computational Python simulations of this concept.",
      strugglingLearnerRemediation: "Utilize visual graphic organizers, formula reference sheets, and 1-on-1 TA guided support.",
      englishLanguageLearnerSupport: "Provide dual-language glossary terms, sentence stems, and multimodal video explanations."
    },
    assessmentType: "EXIT_TICKET"
  },
  {
    planId: "LP-CHM-10-042",
    courseCode: "CHM-10",
    courseTitle: "Advanced Chemistry Comprehensive Study",
    gradeLevel: "Grade 11",
    unitTitle: "Unit 9: Fundamental Principles of Chemistry",
    lessonNumber: 42,
    lessonTopic: "Core Topic 42: Analytical Exploration & Practical Application in Chemistry",
    durationMinutes: 45,
    pedagogicalApproach: "INQUIRY_BASED",
    essentialQuestions: [
      "How does the fundamental principle of Chemistry govern real-world physical and computational systems?",
      "In what ways can experimental evidence validate mathematical derivations in this domain?",
      "How do modern scientific breakthroughs rely on the core theorems introduced in Lesson 42?"
    ],
    learningObjectives: [
      "Master the theoretical definition and practical formulation of Topic 42",
      "Execute multi-step problem solving with 95% computational accuracy",
      "Collaborate in peer dyads to synthesize scientific arguments and defend conclusions"
    ],
    materialsAndResources: [
      "Interactive Smart Display & Digital Whiteboard Software",
      "Standard Student Laboratory Notebook & Precision Scientific Calculators",
      "Digital Sensor Probe Kits & Microcontroller Interface Units"
    ],
    vocabularyTerms: [
      "Term_42_Alpha", "Principle_42_Beta", "Hypothesis_42_Gamma", "Equilibrium_42_Delta"
    ],
    instructionalPhases: {
      hookWarmUp: {
        duration: 5,
        activityDescription: "Display a provocative real-world anomaly video related to Chemistry topic 42",
        teacherPrompt: "Observe the anomalous behavior on screen and formulate three hypotheses explaining the cause."
      },
      directInstruction: {
        duration: 15,
        coreConceptsCovered: [
          "Historical derivation and contextual significance of principle 42",
          "Step-by-step mathematical proof and boundary condition constraints",
          "Safety protocols and standard operating procedures for lab exploration"
        ],
        demonstrationSteps: [
          "Step 1: Set up experimental apparatus on instructor demonstration bench",
          "Step 2: Calibrate zero-offset sensor baseline readings",
          "Step 3: Graph real-time data trajectory on main classroom digital projection"
        ]
      },
      guidedPractice: {
        duration: 12,
        groupTaskDescription: "Students work in assigned trios to solve tiered practice problems from Exercise Set 42.",
        scaffoldingStrategies: [
          "Provide worked examples on whiteboard for visual reference",
          "Conduct targeted mini-conferences with student groups needing foundational review",
          "Offer challenge extension problems for accelerated learner pods"
        ]
      },
      independentPractice: {
        duration: 8,
        assignmentDetails: "Complete Individual Problem Set 42 (Questions 1 through 6) showing full working steps.",
        rubricCriteria: [
          "Conceptual accuracy: 40%",
          "Mathematical precision & dimensional analysis: 40%",
          "Clarity of final answer presentation & SI units: 20%"
        ]
      },
      closureReflection: {
        duration: 5,
        exitTicketPrompt: "Summarize the single most critical insight from today's lesson in two complete sentences.",
        homeworkAssigned: "Read textbook Chapter 15, Section 1 and complete problem set."
      }
    },
    differentiationPlan: {
      giftedAndTalentedExtension: "Investigate advanced calculus derivations or computational Python simulations of this concept.",
      strugglingLearnerRemediation: "Utilize visual graphic organizers, formula reference sheets, and 1-on-1 TA guided support.",
      englishLanguageLearnerSupport: "Provide dual-language glossary terms, sentence stems, and multimodal video explanations."
    },
    assessmentType: "FORMATIVE_QUIZ"
  },
  {
    planId: "LP-CS-10-043",
    courseCode: "CS-10",
    courseTitle: "Advanced Computer Science Comprehensive Study",
    gradeLevel: "Grade 11",
    unitTitle: "Unit 9: Fundamental Principles of Computer Science",
    lessonNumber: 43,
    lessonTopic: "Core Topic 43: Analytical Exploration & Practical Application in Computer Science",
    durationMinutes: 45,
    pedagogicalApproach: "DIRECT_INSTRUCTION",
    essentialQuestions: [
      "How does the fundamental principle of Computer Science govern real-world physical and computational systems?",
      "In what ways can experimental evidence validate mathematical derivations in this domain?",
      "How do modern scientific breakthroughs rely on the core theorems introduced in Lesson 43?"
    ],
    learningObjectives: [
      "Master the theoretical definition and practical formulation of Topic 43",
      "Execute multi-step problem solving with 95% computational accuracy",
      "Collaborate in peer dyads to synthesize scientific arguments and defend conclusions"
    ],
    materialsAndResources: [
      "Interactive Smart Display & Digital Whiteboard Software",
      "Standard Student Laboratory Notebook & Precision Scientific Calculators",
      "Digital Sensor Probe Kits & Microcontroller Interface Units"
    ],
    vocabularyTerms: [
      "Term_43_Alpha", "Principle_43_Beta", "Hypothesis_43_Gamma", "Equilibrium_43_Delta"
    ],
    instructionalPhases: {
      hookWarmUp: {
        duration: 5,
        activityDescription: "Display a provocative real-world anomaly video related to Computer Science topic 43",
        teacherPrompt: "Observe the anomalous behavior on screen and formulate three hypotheses explaining the cause."
      },
      directInstruction: {
        duration: 15,
        coreConceptsCovered: [
          "Historical derivation and contextual significance of principle 43",
          "Step-by-step mathematical proof and boundary condition constraints",
          "Safety protocols and standard operating procedures for lab exploration"
        ],
        demonstrationSteps: [
          "Step 1: Set up experimental apparatus on instructor demonstration bench",
          "Step 2: Calibrate zero-offset sensor baseline readings",
          "Step 3: Graph real-time data trajectory on main classroom digital projection"
        ]
      },
      guidedPractice: {
        duration: 12,
        groupTaskDescription: "Students work in assigned trios to solve tiered practice problems from Exercise Set 43.",
        scaffoldingStrategies: [
          "Provide worked examples on whiteboard for visual reference",
          "Conduct targeted mini-conferences with student groups needing foundational review",
          "Offer challenge extension problems for accelerated learner pods"
        ]
      },
      independentPractice: {
        duration: 8,
        assignmentDetails: "Complete Individual Problem Set 43 (Questions 1 through 6) showing full working steps.",
        rubricCriteria: [
          "Conceptual accuracy: 40%",
          "Mathematical precision & dimensional analysis: 40%",
          "Clarity of final answer presentation & SI units: 20%"
        ]
      },
      closureReflection: {
        duration: 5,
        exitTicketPrompt: "Summarize the single most critical insight from today's lesson in two complete sentences.",
        homeworkAssigned: "Read textbook Chapter 15, Section 2 and complete problem set."
      }
    },
    differentiationPlan: {
      giftedAndTalentedExtension: "Investigate advanced calculus derivations or computational Python simulations of this concept.",
      strugglingLearnerRemediation: "Utilize visual graphic organizers, formula reference sheets, and 1-on-1 TA guided support.",
      englishLanguageLearnerSupport: "Provide dual-language glossary terms, sentence stems, and multimodal video explanations."
    },
    assessmentType: "LAB_REPORT"
  },
  {
    planId: "LP-PHY-10-044",
    courseCode: "PHY-10",
    courseTitle: "Advanced Physics Comprehensive Study",
    gradeLevel: "Grade 11",
    unitTitle: "Unit 9: Fundamental Principles of Physics",
    lessonNumber: 44,
    lessonTopic: "Core Topic 44: Analytical Exploration & Practical Application in Physics",
    durationMinutes: 45,
    pedagogicalApproach: "INQUIRY_BASED",
    essentialQuestions: [
      "How does the fundamental principle of Physics govern real-world physical and computational systems?",
      "In what ways can experimental evidence validate mathematical derivations in this domain?",
      "How do modern scientific breakthroughs rely on the core theorems introduced in Lesson 44?"
    ],
    learningObjectives: [
      "Master the theoretical definition and practical formulation of Topic 44",
      "Execute multi-step problem solving with 95% computational accuracy",
      "Collaborate in peer dyads to synthesize scientific arguments and defend conclusions"
    ],
    materialsAndResources: [
      "Interactive Smart Display & Digital Whiteboard Software",
      "Standard Student Laboratory Notebook & Precision Scientific Calculators",
      "Digital Sensor Probe Kits & Microcontroller Interface Units"
    ],
    vocabularyTerms: [
      "Term_44_Alpha", "Principle_44_Beta", "Hypothesis_44_Gamma", "Equilibrium_44_Delta"
    ],
    instructionalPhases: {
      hookWarmUp: {
        duration: 5,
        activityDescription: "Display a provocative real-world anomaly video related to Physics topic 44",
        teacherPrompt: "Observe the anomalous behavior on screen and formulate three hypotheses explaining the cause."
      },
      directInstruction: {
        duration: 15,
        coreConceptsCovered: [
          "Historical derivation and contextual significance of principle 44",
          "Step-by-step mathematical proof and boundary condition constraints",
          "Safety protocols and standard operating procedures for lab exploration"
        ],
        demonstrationSteps: [
          "Step 1: Set up experimental apparatus on instructor demonstration bench",
          "Step 2: Calibrate zero-offset sensor baseline readings",
          "Step 3: Graph real-time data trajectory on main classroom digital projection"
        ]
      },
      guidedPractice: {
        duration: 12,
        groupTaskDescription: "Students work in assigned trios to solve tiered practice problems from Exercise Set 44.",
        scaffoldingStrategies: [
          "Provide worked examples on whiteboard for visual reference",
          "Conduct targeted mini-conferences with student groups needing foundational review",
          "Offer challenge extension problems for accelerated learner pods"
        ]
      },
      independentPractice: {
        duration: 8,
        assignmentDetails: "Complete Individual Problem Set 44 (Questions 1 through 6) showing full working steps.",
        rubricCriteria: [
          "Conceptual accuracy: 40%",
          "Mathematical precision & dimensional analysis: 40%",
          "Clarity of final answer presentation & SI units: 20%"
        ]
      },
      closureReflection: {
        duration: 5,
        exitTicketPrompt: "Summarize the single most critical insight from today's lesson in two complete sentences.",
        homeworkAssigned: "Read textbook Chapter 15, Section 3 and complete problem set."
      }
    },
    differentiationPlan: {
      giftedAndTalentedExtension: "Investigate advanced calculus derivations or computational Python simulations of this concept.",
      strugglingLearnerRemediation: "Utilize visual graphic organizers, formula reference sheets, and 1-on-1 TA guided support.",
      englishLanguageLearnerSupport: "Provide dual-language glossary terms, sentence stems, and multimodal video explanations."
    },
    assessmentType: "EXIT_TICKET"
  },
  {
    planId: "LP-MTH-10-045",
    courseCode: "MTH-10",
    courseTitle: "Advanced Mathematics Comprehensive Study",
    gradeLevel: "Grade 11",
    unitTitle: "Unit 10: Fundamental Principles of Mathematics",
    lessonNumber: 45,
    lessonTopic: "Core Topic 45: Analytical Exploration & Practical Application in Mathematics",
    durationMinutes: 45,
    pedagogicalApproach: "DIRECT_INSTRUCTION",
    essentialQuestions: [
      "How does the fundamental principle of Mathematics govern real-world physical and computational systems?",
      "In what ways can experimental evidence validate mathematical derivations in this domain?",
      "How do modern scientific breakthroughs rely on the core theorems introduced in Lesson 45?"
    ],
    learningObjectives: [
      "Master the theoretical definition and practical formulation of Topic 45",
      "Execute multi-step problem solving with 95% computational accuracy",
      "Collaborate in peer dyads to synthesize scientific arguments and defend conclusions"
    ],
    materialsAndResources: [
      "Interactive Smart Display & Digital Whiteboard Software",
      "Standard Student Laboratory Notebook & Precision Scientific Calculators",
      "Digital Sensor Probe Kits & Microcontroller Interface Units"
    ],
    vocabularyTerms: [
      "Term_45_Alpha", "Principle_45_Beta", "Hypothesis_45_Gamma", "Equilibrium_45_Delta"
    ],
    instructionalPhases: {
      hookWarmUp: {
        duration: 5,
        activityDescription: "Display a provocative real-world anomaly video related to Mathematics topic 45",
        teacherPrompt: "Observe the anomalous behavior on screen and formulate three hypotheses explaining the cause."
      },
      directInstruction: {
        duration: 15,
        coreConceptsCovered: [
          "Historical derivation and contextual significance of principle 45",
          "Step-by-step mathematical proof and boundary condition constraints",
          "Safety protocols and standard operating procedures for lab exploration"
        ],
        demonstrationSteps: [
          "Step 1: Set up experimental apparatus on instructor demonstration bench",
          "Step 2: Calibrate zero-offset sensor baseline readings",
          "Step 3: Graph real-time data trajectory on main classroom digital projection"
        ]
      },
      guidedPractice: {
        duration: 12,
        groupTaskDescription: "Students work in assigned trios to solve tiered practice problems from Exercise Set 45.",
        scaffoldingStrategies: [
          "Provide worked examples on whiteboard for visual reference",
          "Conduct targeted mini-conferences with student groups needing foundational review",
          "Offer challenge extension problems for accelerated learner pods"
        ]
      },
      independentPractice: {
        duration: 8,
        assignmentDetails: "Complete Individual Problem Set 45 (Questions 1 through 6) showing full working steps.",
        rubricCriteria: [
          "Conceptual accuracy: 40%",
          "Mathematical precision & dimensional analysis: 40%",
          "Clarity of final answer presentation & SI units: 20%"
        ]
      },
      closureReflection: {
        duration: 5,
        exitTicketPrompt: "Summarize the single most critical insight from today's lesson in two complete sentences.",
        homeworkAssigned: "Read textbook Chapter 16, Section 1 and complete problem set."
      }
    },
    differentiationPlan: {
      giftedAndTalentedExtension: "Investigate advanced calculus derivations or computational Python simulations of this concept.",
      strugglingLearnerRemediation: "Utilize visual graphic organizers, formula reference sheets, and 1-on-1 TA guided support.",
      englishLanguageLearnerSupport: "Provide dual-language glossary terms, sentence stems, and multimodal video explanations."
    },
    assessmentType: "FORMATIVE_QUIZ"
  },
  {
    planId: "LP-CHM-10-046",
    courseCode: "CHM-10",
    courseTitle: "Advanced Chemistry Comprehensive Study",
    gradeLevel: "Grade 11",
    unitTitle: "Unit 10: Fundamental Principles of Chemistry",
    lessonNumber: 46,
    lessonTopic: "Core Topic 46: Analytical Exploration & Practical Application in Chemistry",
    durationMinutes: 45,
    pedagogicalApproach: "INQUIRY_BASED",
    essentialQuestions: [
      "How does the fundamental principle of Chemistry govern real-world physical and computational systems?",
      "In what ways can experimental evidence validate mathematical derivations in this domain?",
      "How do modern scientific breakthroughs rely on the core theorems introduced in Lesson 46?"
    ],
    learningObjectives: [
      "Master the theoretical definition and practical formulation of Topic 46",
      "Execute multi-step problem solving with 95% computational accuracy",
      "Collaborate in peer dyads to synthesize scientific arguments and defend conclusions"
    ],
    materialsAndResources: [
      "Interactive Smart Display & Digital Whiteboard Software",
      "Standard Student Laboratory Notebook & Precision Scientific Calculators",
      "Digital Sensor Probe Kits & Microcontroller Interface Units"
    ],
    vocabularyTerms: [
      "Term_46_Alpha", "Principle_46_Beta", "Hypothesis_46_Gamma", "Equilibrium_46_Delta"
    ],
    instructionalPhases: {
      hookWarmUp: {
        duration: 5,
        activityDescription: "Display a provocative real-world anomaly video related to Chemistry topic 46",
        teacherPrompt: "Observe the anomalous behavior on screen and formulate three hypotheses explaining the cause."
      },
      directInstruction: {
        duration: 15,
        coreConceptsCovered: [
          "Historical derivation and contextual significance of principle 46",
          "Step-by-step mathematical proof and boundary condition constraints",
          "Safety protocols and standard operating procedures for lab exploration"
        ],
        demonstrationSteps: [
          "Step 1: Set up experimental apparatus on instructor demonstration bench",
          "Step 2: Calibrate zero-offset sensor baseline readings",
          "Step 3: Graph real-time data trajectory on main classroom digital projection"
        ]
      },
      guidedPractice: {
        duration: 12,
        groupTaskDescription: "Students work in assigned trios to solve tiered practice problems from Exercise Set 46.",
        scaffoldingStrategies: [
          "Provide worked examples on whiteboard for visual reference",
          "Conduct targeted mini-conferences with student groups needing foundational review",
          "Offer challenge extension problems for accelerated learner pods"
        ]
      },
      independentPractice: {
        duration: 8,
        assignmentDetails: "Complete Individual Problem Set 46 (Questions 1 through 6) showing full working steps.",
        rubricCriteria: [
          "Conceptual accuracy: 40%",
          "Mathematical precision & dimensional analysis: 40%",
          "Clarity of final answer presentation & SI units: 20%"
        ]
      },
      closureReflection: {
        duration: 5,
        exitTicketPrompt: "Summarize the single most critical insight from today's lesson in two complete sentences.",
        homeworkAssigned: "Read textbook Chapter 16, Section 2 and complete problem set."
      }
    },
    differentiationPlan: {
      giftedAndTalentedExtension: "Investigate advanced calculus derivations or computational Python simulations of this concept.",
      strugglingLearnerRemediation: "Utilize visual graphic organizers, formula reference sheets, and 1-on-1 TA guided support.",
      englishLanguageLearnerSupport: "Provide dual-language glossary terms, sentence stems, and multimodal video explanations."
    },
    assessmentType: "LAB_REPORT"
  },
  {
    planId: "LP-CS-10-047",
    courseCode: "CS-10",
    courseTitle: "Advanced Computer Science Comprehensive Study",
    gradeLevel: "Grade 11",
    unitTitle: "Unit 10: Fundamental Principles of Computer Science",
    lessonNumber: 47,
    lessonTopic: "Core Topic 47: Analytical Exploration & Practical Application in Computer Science",
    durationMinutes: 45,
    pedagogicalApproach: "DIRECT_INSTRUCTION",
    essentialQuestions: [
      "How does the fundamental principle of Computer Science govern real-world physical and computational systems?",
      "In what ways can experimental evidence validate mathematical derivations in this domain?",
      "How do modern scientific breakthroughs rely on the core theorems introduced in Lesson 47?"
    ],
    learningObjectives: [
      "Master the theoretical definition and practical formulation of Topic 47",
      "Execute multi-step problem solving with 95% computational accuracy",
      "Collaborate in peer dyads to synthesize scientific arguments and defend conclusions"
    ],
    materialsAndResources: [
      "Interactive Smart Display & Digital Whiteboard Software",
      "Standard Student Laboratory Notebook & Precision Scientific Calculators",
      "Digital Sensor Probe Kits & Microcontroller Interface Units"
    ],
    vocabularyTerms: [
      "Term_47_Alpha", "Principle_47_Beta", "Hypothesis_47_Gamma", "Equilibrium_47_Delta"
    ],
    instructionalPhases: {
      hookWarmUp: {
        duration: 5,
        activityDescription: "Display a provocative real-world anomaly video related to Computer Science topic 47",
        teacherPrompt: "Observe the anomalous behavior on screen and formulate three hypotheses explaining the cause."
      },
      directInstruction: {
        duration: 15,
        coreConceptsCovered: [
          "Historical derivation and contextual significance of principle 47",
          "Step-by-step mathematical proof and boundary condition constraints",
          "Safety protocols and standard operating procedures for lab exploration"
        ],
        demonstrationSteps: [
          "Step 1: Set up experimental apparatus on instructor demonstration bench",
          "Step 2: Calibrate zero-offset sensor baseline readings",
          "Step 3: Graph real-time data trajectory on main classroom digital projection"
        ]
      },
      guidedPractice: {
        duration: 12,
        groupTaskDescription: "Students work in assigned trios to solve tiered practice problems from Exercise Set 47.",
        scaffoldingStrategies: [
          "Provide worked examples on whiteboard for visual reference",
          "Conduct targeted mini-conferences with student groups needing foundational review",
          "Offer challenge extension problems for accelerated learner pods"
        ]
      },
      independentPractice: {
        duration: 8,
        assignmentDetails: "Complete Individual Problem Set 47 (Questions 1 through 6) showing full working steps.",
        rubricCriteria: [
          "Conceptual accuracy: 40%",
          "Mathematical precision & dimensional analysis: 40%",
          "Clarity of final answer presentation & SI units: 20%"
        ]
      },
      closureReflection: {
        duration: 5,
        exitTicketPrompt: "Summarize the single most critical insight from today's lesson in two complete sentences.",
        homeworkAssigned: "Read textbook Chapter 16, Section 3 and complete problem set."
      }
    },
    differentiationPlan: {
      giftedAndTalentedExtension: "Investigate advanced calculus derivations or computational Python simulations of this concept.",
      strugglingLearnerRemediation: "Utilize visual graphic organizers, formula reference sheets, and 1-on-1 TA guided support.",
      englishLanguageLearnerSupport: "Provide dual-language glossary terms, sentence stems, and multimodal video explanations."
    },
    assessmentType: "EXIT_TICKET"
  },
  {
    planId: "LP-PHY-10-048",
    courseCode: "PHY-10",
    courseTitle: "Advanced Physics Comprehensive Study",
    gradeLevel: "Grade 11",
    unitTitle: "Unit 10: Fundamental Principles of Physics",
    lessonNumber: 48,
    lessonTopic: "Core Topic 48: Analytical Exploration & Practical Application in Physics",
    durationMinutes: 45,
    pedagogicalApproach: "INQUIRY_BASED",
    essentialQuestions: [
      "How does the fundamental principle of Physics govern real-world physical and computational systems?",
      "In what ways can experimental evidence validate mathematical derivations in this domain?",
      "How do modern scientific breakthroughs rely on the core theorems introduced in Lesson 48?"
    ],
    learningObjectives: [
      "Master the theoretical definition and practical formulation of Topic 48",
      "Execute multi-step problem solving with 95% computational accuracy",
      "Collaborate in peer dyads to synthesize scientific arguments and defend conclusions"
    ],
    materialsAndResources: [
      "Interactive Smart Display & Digital Whiteboard Software",
      "Standard Student Laboratory Notebook & Precision Scientific Calculators",
      "Digital Sensor Probe Kits & Microcontroller Interface Units"
    ],
    vocabularyTerms: [
      "Term_48_Alpha", "Principle_48_Beta", "Hypothesis_48_Gamma", "Equilibrium_48_Delta"
    ],
    instructionalPhases: {
      hookWarmUp: {
        duration: 5,
        activityDescription: "Display a provocative real-world anomaly video related to Physics topic 48",
        teacherPrompt: "Observe the anomalous behavior on screen and formulate three hypotheses explaining the cause."
      },
      directInstruction: {
        duration: 15,
        coreConceptsCovered: [
          "Historical derivation and contextual significance of principle 48",
          "Step-by-step mathematical proof and boundary condition constraints",
          "Safety protocols and standard operating procedures for lab exploration"
        ],
        demonstrationSteps: [
          "Step 1: Set up experimental apparatus on instructor demonstration bench",
          "Step 2: Calibrate zero-offset sensor baseline readings",
          "Step 3: Graph real-time data trajectory on main classroom digital projection"
        ]
      },
      guidedPractice: {
        duration: 12,
        groupTaskDescription: "Students work in assigned trios to solve tiered practice problems from Exercise Set 48.",
        scaffoldingStrategies: [
          "Provide worked examples on whiteboard for visual reference",
          "Conduct targeted mini-conferences with student groups needing foundational review",
          "Offer challenge extension problems for accelerated learner pods"
        ]
      },
      independentPractice: {
        duration: 8,
        assignmentDetails: "Complete Individual Problem Set 48 (Questions 1 through 6) showing full working steps.",
        rubricCriteria: [
          "Conceptual accuracy: 40%",
          "Mathematical precision & dimensional analysis: 40%",
          "Clarity of final answer presentation & SI units: 20%"
        ]
      },
      closureReflection: {
        duration: 5,
        exitTicketPrompt: "Summarize the single most critical insight from today's lesson in two complete sentences.",
        homeworkAssigned: "Read textbook Chapter 17, Section 1 and complete problem set."
      }
    },
    differentiationPlan: {
      giftedAndTalentedExtension: "Investigate advanced calculus derivations or computational Python simulations of this concept.",
      strugglingLearnerRemediation: "Utilize visual graphic organizers, formula reference sheets, and 1-on-1 TA guided support.",
      englishLanguageLearnerSupport: "Provide dual-language glossary terms, sentence stems, and multimodal video explanations."
    },
    assessmentType: "FORMATIVE_QUIZ"
  },
  {
    planId: "LP-MTH-10-049",
    courseCode: "MTH-10",
    courseTitle: "Advanced Mathematics Comprehensive Study",
    gradeLevel: "Grade 11",
    unitTitle: "Unit 10: Fundamental Principles of Mathematics",
    lessonNumber: 49,
    lessonTopic: "Core Topic 49: Analytical Exploration & Practical Application in Mathematics",
    durationMinutes: 45,
    pedagogicalApproach: "DIRECT_INSTRUCTION",
    essentialQuestions: [
      "How does the fundamental principle of Mathematics govern real-world physical and computational systems?",
      "In what ways can experimental evidence validate mathematical derivations in this domain?",
      "How do modern scientific breakthroughs rely on the core theorems introduced in Lesson 49?"
    ],
    learningObjectives: [
      "Master the theoretical definition and practical formulation of Topic 49",
      "Execute multi-step problem solving with 95% computational accuracy",
      "Collaborate in peer dyads to synthesize scientific arguments and defend conclusions"
    ],
    materialsAndResources: [
      "Interactive Smart Display & Digital Whiteboard Software",
      "Standard Student Laboratory Notebook & Precision Scientific Calculators",
      "Digital Sensor Probe Kits & Microcontroller Interface Units"
    ],
    vocabularyTerms: [
      "Term_49_Alpha", "Principle_49_Beta", "Hypothesis_49_Gamma", "Equilibrium_49_Delta"
    ],
    instructionalPhases: {
      hookWarmUp: {
        duration: 5,
        activityDescription: "Display a provocative real-world anomaly video related to Mathematics topic 49",
        teacherPrompt: "Observe the anomalous behavior on screen and formulate three hypotheses explaining the cause."
      },
      directInstruction: {
        duration: 15,
        coreConceptsCovered: [
          "Historical derivation and contextual significance of principle 49",
          "Step-by-step mathematical proof and boundary condition constraints",
          "Safety protocols and standard operating procedures for lab exploration"
        ],
        demonstrationSteps: [
          "Step 1: Set up experimental apparatus on instructor demonstration bench",
          "Step 2: Calibrate zero-offset sensor baseline readings",
          "Step 3: Graph real-time data trajectory on main classroom digital projection"
        ]
      },
      guidedPractice: {
        duration: 12,
        groupTaskDescription: "Students work in assigned trios to solve tiered practice problems from Exercise Set 49.",
        scaffoldingStrategies: [
          "Provide worked examples on whiteboard for visual reference",
          "Conduct targeted mini-conferences with student groups needing foundational review",
          "Offer challenge extension problems for accelerated learner pods"
        ]
      },
      independentPractice: {
        duration: 8,
        assignmentDetails: "Complete Individual Problem Set 49 (Questions 1 through 6) showing full working steps.",
        rubricCriteria: [
          "Conceptual accuracy: 40%",
          "Mathematical precision & dimensional analysis: 40%",
          "Clarity of final answer presentation & SI units: 20%"
        ]
      },
      closureReflection: {
        duration: 5,
        exitTicketPrompt: "Summarize the single most critical insight from today's lesson in two complete sentences.",
        homeworkAssigned: "Read textbook Chapter 17, Section 2 and complete problem set."
      }
    },
    differentiationPlan: {
      giftedAndTalentedExtension: "Investigate advanced calculus derivations or computational Python simulations of this concept.",
      strugglingLearnerRemediation: "Utilize visual graphic organizers, formula reference sheets, and 1-on-1 TA guided support.",
      englishLanguageLearnerSupport: "Provide dual-language glossary terms, sentence stems, and multimodal video explanations."
    },
    assessmentType: "LAB_REPORT"
  },
  {
    planId: "LP-CHM-10-050",
    courseCode: "CHM-10",
    courseTitle: "Advanced Chemistry Comprehensive Study",
    gradeLevel: "Grade 11",
    unitTitle: "Unit 11: Fundamental Principles of Chemistry",
    lessonNumber: 50,
    lessonTopic: "Core Topic 50: Analytical Exploration & Practical Application in Chemistry",
    durationMinutes: 45,
    pedagogicalApproach: "INQUIRY_BASED",
    essentialQuestions: [
      "How does the fundamental principle of Chemistry govern real-world physical and computational systems?",
      "In what ways can experimental evidence validate mathematical derivations in this domain?",
      "How do modern scientific breakthroughs rely on the core theorems introduced in Lesson 50?"
    ],
    learningObjectives: [
      "Master the theoretical definition and practical formulation of Topic 50",
      "Execute multi-step problem solving with 95% computational accuracy",
      "Collaborate in peer dyads to synthesize scientific arguments and defend conclusions"
    ],
    materialsAndResources: [
      "Interactive Smart Display & Digital Whiteboard Software",
      "Standard Student Laboratory Notebook & Precision Scientific Calculators",
      "Digital Sensor Probe Kits & Microcontroller Interface Units"
    ],
    vocabularyTerms: [
      "Term_50_Alpha", "Principle_50_Beta", "Hypothesis_50_Gamma", "Equilibrium_50_Delta"
    ],
    instructionalPhases: {
      hookWarmUp: {
        duration: 5,
        activityDescription: "Display a provocative real-world anomaly video related to Chemistry topic 50",
        teacherPrompt: "Observe the anomalous behavior on screen and formulate three hypotheses explaining the cause."
      },
      directInstruction: {
        duration: 15,
        coreConceptsCovered: [
          "Historical derivation and contextual significance of principle 50",
          "Step-by-step mathematical proof and boundary condition constraints",
          "Safety protocols and standard operating procedures for lab exploration"
        ],
        demonstrationSteps: [
          "Step 1: Set up experimental apparatus on instructor demonstration bench",
          "Step 2: Calibrate zero-offset sensor baseline readings",
          "Step 3: Graph real-time data trajectory on main classroom digital projection"
        ]
      },
      guidedPractice: {
        duration: 12,
        groupTaskDescription: "Students work in assigned trios to solve tiered practice problems from Exercise Set 50.",
        scaffoldingStrategies: [
          "Provide worked examples on whiteboard for visual reference",
          "Conduct targeted mini-conferences with student groups needing foundational review",
          "Offer challenge extension problems for accelerated learner pods"
        ]
      },
      independentPractice: {
        duration: 8,
        assignmentDetails: "Complete Individual Problem Set 50 (Questions 1 through 6) showing full working steps.",
        rubricCriteria: [
          "Conceptual accuracy: 40%",
          "Mathematical precision & dimensional analysis: 40%",
          "Clarity of final answer presentation & SI units: 20%"
        ]
      },
      closureReflection: {
        duration: 5,
        exitTicketPrompt: "Summarize the single most critical insight from today's lesson in two complete sentences.",
        homeworkAssigned: "Read textbook Chapter 17, Section 3 and complete problem set."
      }
    },
    differentiationPlan: {
      giftedAndTalentedExtension: "Investigate advanced calculus derivations or computational Python simulations of this concept.",
      strugglingLearnerRemediation: "Utilize visual graphic organizers, formula reference sheets, and 1-on-1 TA guided support.",
      englishLanguageLearnerSupport: "Provide dual-language glossary terms, sentence stems, and multimodal video explanations."
    },
    assessmentType: "EXIT_TICKET"
  },
  {
    planId: "LP-CS-10-051",
    courseCode: "CS-10",
    courseTitle: "Advanced Computer Science Comprehensive Study",
    gradeLevel: "Grade 11",
    unitTitle: "Unit 11: Fundamental Principles of Computer Science",
    lessonNumber: 51,
    lessonTopic: "Core Topic 51: Analytical Exploration & Practical Application in Computer Science",
    durationMinutes: 45,
    pedagogicalApproach: "DIRECT_INSTRUCTION",
    essentialQuestions: [
      "How does the fundamental principle of Computer Science govern real-world physical and computational systems?",
      "In what ways can experimental evidence validate mathematical derivations in this domain?",
      "How do modern scientific breakthroughs rely on the core theorems introduced in Lesson 51?"
    ],
    learningObjectives: [
      "Master the theoretical definition and practical formulation of Topic 51",
      "Execute multi-step problem solving with 95% computational accuracy",
      "Collaborate in peer dyads to synthesize scientific arguments and defend conclusions"
    ],
    materialsAndResources: [
      "Interactive Smart Display & Digital Whiteboard Software",
      "Standard Student Laboratory Notebook & Precision Scientific Calculators",
      "Digital Sensor Probe Kits & Microcontroller Interface Units"
    ],
    vocabularyTerms: [
      "Term_51_Alpha", "Principle_51_Beta", "Hypothesis_51_Gamma", "Equilibrium_51_Delta"
    ],
    instructionalPhases: {
      hookWarmUp: {
        duration: 5,
        activityDescription: "Display a provocative real-world anomaly video related to Computer Science topic 51",
        teacherPrompt: "Observe the anomalous behavior on screen and formulate three hypotheses explaining the cause."
      },
      directInstruction: {
        duration: 15,
        coreConceptsCovered: [
          "Historical derivation and contextual significance of principle 51",
          "Step-by-step mathematical proof and boundary condition constraints",
          "Safety protocols and standard operating procedures for lab exploration"
        ],
        demonstrationSteps: [
          "Step 1: Set up experimental apparatus on instructor demonstration bench",
          "Step 2: Calibrate zero-offset sensor baseline readings",
          "Step 3: Graph real-time data trajectory on main classroom digital projection"
        ]
      },
      guidedPractice: {
        duration: 12,
        groupTaskDescription: "Students work in assigned trios to solve tiered practice problems from Exercise Set 51.",
        scaffoldingStrategies: [
          "Provide worked examples on whiteboard for visual reference",
          "Conduct targeted mini-conferences with student groups needing foundational review",
          "Offer challenge extension problems for accelerated learner pods"
        ]
      },
      independentPractice: {
        duration: 8,
        assignmentDetails: "Complete Individual Problem Set 51 (Questions 1 through 6) showing full working steps.",
        rubricCriteria: [
          "Conceptual accuracy: 40%",
          "Mathematical precision & dimensional analysis: 40%",
          "Clarity of final answer presentation & SI units: 20%"
        ]
      },
      closureReflection: {
        duration: 5,
        exitTicketPrompt: "Summarize the single most critical insight from today's lesson in two complete sentences.",
        homeworkAssigned: "Read textbook Chapter 18, Section 1 and complete problem set."
      }
    },
    differentiationPlan: {
      giftedAndTalentedExtension: "Investigate advanced calculus derivations or computational Python simulations of this concept.",
      strugglingLearnerRemediation: "Utilize visual graphic organizers, formula reference sheets, and 1-on-1 TA guided support.",
      englishLanguageLearnerSupport: "Provide dual-language glossary terms, sentence stems, and multimodal video explanations."
    },
    assessmentType: "FORMATIVE_QUIZ"
  },
  {
    planId: "LP-PHY-10-052",
    courseCode: "PHY-10",
    courseTitle: "Advanced Physics Comprehensive Study",
    gradeLevel: "Grade 11",
    unitTitle: "Unit 11: Fundamental Principles of Physics",
    lessonNumber: 52,
    lessonTopic: "Core Topic 52: Analytical Exploration & Practical Application in Physics",
    durationMinutes: 45,
    pedagogicalApproach: "INQUIRY_BASED",
    essentialQuestions: [
      "How does the fundamental principle of Physics govern real-world physical and computational systems?",
      "In what ways can experimental evidence validate mathematical derivations in this domain?",
      "How do modern scientific breakthroughs rely on the core theorems introduced in Lesson 52?"
    ],
    learningObjectives: [
      "Master the theoretical definition and practical formulation of Topic 52",
      "Execute multi-step problem solving with 95% computational accuracy",
      "Collaborate in peer dyads to synthesize scientific arguments and defend conclusions"
    ],
    materialsAndResources: [
      "Interactive Smart Display & Digital Whiteboard Software",
      "Standard Student Laboratory Notebook & Precision Scientific Calculators",
      "Digital Sensor Probe Kits & Microcontroller Interface Units"
    ],
    vocabularyTerms: [
      "Term_52_Alpha", "Principle_52_Beta", "Hypothesis_52_Gamma", "Equilibrium_52_Delta"
    ],
    instructionalPhases: {
      hookWarmUp: {
        duration: 5,
        activityDescription: "Display a provocative real-world anomaly video related to Physics topic 52",
        teacherPrompt: "Observe the anomalous behavior on screen and formulate three hypotheses explaining the cause."
      },
      directInstruction: {
        duration: 15,
        coreConceptsCovered: [
          "Historical derivation and contextual significance of principle 52",
          "Step-by-step mathematical proof and boundary condition constraints",
          "Safety protocols and standard operating procedures for lab exploration"
        ],
        demonstrationSteps: [
          "Step 1: Set up experimental apparatus on instructor demonstration bench",
          "Step 2: Calibrate zero-offset sensor baseline readings",
          "Step 3: Graph real-time data trajectory on main classroom digital projection"
        ]
      },
      guidedPractice: {
        duration: 12,
        groupTaskDescription: "Students work in assigned trios to solve tiered practice problems from Exercise Set 52.",
        scaffoldingStrategies: [
          "Provide worked examples on whiteboard for visual reference",
          "Conduct targeted mini-conferences with student groups needing foundational review",
          "Offer challenge extension problems for accelerated learner pods"
        ]
      },
      independentPractice: {
        duration: 8,
        assignmentDetails: "Complete Individual Problem Set 52 (Questions 1 through 6) showing full working steps.",
        rubricCriteria: [
          "Conceptual accuracy: 40%",
          "Mathematical precision & dimensional analysis: 40%",
          "Clarity of final answer presentation & SI units: 20%"
        ]
      },
      closureReflection: {
        duration: 5,
        exitTicketPrompt: "Summarize the single most critical insight from today's lesson in two complete sentences.",
        homeworkAssigned: "Read textbook Chapter 18, Section 2 and complete problem set."
      }
    },
    differentiationPlan: {
      giftedAndTalentedExtension: "Investigate advanced calculus derivations or computational Python simulations of this concept.",
      strugglingLearnerRemediation: "Utilize visual graphic organizers, formula reference sheets, and 1-on-1 TA guided support.",
      englishLanguageLearnerSupport: "Provide dual-language glossary terms, sentence stems, and multimodal video explanations."
    },
    assessmentType: "LAB_REPORT"
  },
  {
    planId: "LP-MTH-10-053",
    courseCode: "MTH-10",
    courseTitle: "Advanced Mathematics Comprehensive Study",
    gradeLevel: "Grade 11",
    unitTitle: "Unit 11: Fundamental Principles of Mathematics",
    lessonNumber: 53,
    lessonTopic: "Core Topic 53: Analytical Exploration & Practical Application in Mathematics",
    durationMinutes: 45,
    pedagogicalApproach: "DIRECT_INSTRUCTION",
    essentialQuestions: [
      "How does the fundamental principle of Mathematics govern real-world physical and computational systems?",
      "In what ways can experimental evidence validate mathematical derivations in this domain?",
      "How do modern scientific breakthroughs rely on the core theorems introduced in Lesson 53?"
    ],
    learningObjectives: [
      "Master the theoretical definition and practical formulation of Topic 53",
      "Execute multi-step problem solving with 95% computational accuracy",
      "Collaborate in peer dyads to synthesize scientific arguments and defend conclusions"
    ],
    materialsAndResources: [
      "Interactive Smart Display & Digital Whiteboard Software",
      "Standard Student Laboratory Notebook & Precision Scientific Calculators",
      "Digital Sensor Probe Kits & Microcontroller Interface Units"
    ],
    vocabularyTerms: [
      "Term_53_Alpha", "Principle_53_Beta", "Hypothesis_53_Gamma", "Equilibrium_53_Delta"
    ],
    instructionalPhases: {
      hookWarmUp: {
        duration: 5,
        activityDescription: "Display a provocative real-world anomaly video related to Mathematics topic 53",
        teacherPrompt: "Observe the anomalous behavior on screen and formulate three hypotheses explaining the cause."
      },
      directInstruction: {
        duration: 15,
        coreConceptsCovered: [
          "Historical derivation and contextual significance of principle 53",
          "Step-by-step mathematical proof and boundary condition constraints",
          "Safety protocols and standard operating procedures for lab exploration"
        ],
        demonstrationSteps: [
          "Step 1: Set up experimental apparatus on instructor demonstration bench",
          "Step 2: Calibrate zero-offset sensor baseline readings",
          "Step 3: Graph real-time data trajectory on main classroom digital projection"
        ]
      },
      guidedPractice: {
        duration: 12,
        groupTaskDescription: "Students work in assigned trios to solve tiered practice problems from Exercise Set 53.",
        scaffoldingStrategies: [
          "Provide worked examples on whiteboard for visual reference",
          "Conduct targeted mini-conferences with student groups needing foundational review",
          "Offer challenge extension problems for accelerated learner pods"
        ]
      },
      independentPractice: {
        duration: 8,
        assignmentDetails: "Complete Individual Problem Set 53 (Questions 1 through 6) showing full working steps.",
        rubricCriteria: [
          "Conceptual accuracy: 40%",
          "Mathematical precision & dimensional analysis: 40%",
          "Clarity of final answer presentation & SI units: 20%"
        ]
      },
      closureReflection: {
        duration: 5,
        exitTicketPrompt: "Summarize the single most critical insight from today's lesson in two complete sentences.",
        homeworkAssigned: "Read textbook Chapter 18, Section 3 and complete problem set."
      }
    },
    differentiationPlan: {
      giftedAndTalentedExtension: "Investigate advanced calculus derivations or computational Python simulations of this concept.",
      strugglingLearnerRemediation: "Utilize visual graphic organizers, formula reference sheets, and 1-on-1 TA guided support.",
      englishLanguageLearnerSupport: "Provide dual-language glossary terms, sentence stems, and multimodal video explanations."
    },
    assessmentType: "EXIT_TICKET"
  },
  {
    planId: "LP-CHM-10-054",
    courseCode: "CHM-10",
    courseTitle: "Advanced Chemistry Comprehensive Study",
    gradeLevel: "Grade 11",
    unitTitle: "Unit 11: Fundamental Principles of Chemistry",
    lessonNumber: 54,
    lessonTopic: "Core Topic 54: Analytical Exploration & Practical Application in Chemistry",
    durationMinutes: 45,
    pedagogicalApproach: "INQUIRY_BASED",
    essentialQuestions: [
      "How does the fundamental principle of Chemistry govern real-world physical and computational systems?",
      "In what ways can experimental evidence validate mathematical derivations in this domain?",
      "How do modern scientific breakthroughs rely on the core theorems introduced in Lesson 54?"
    ],
    learningObjectives: [
      "Master the theoretical definition and practical formulation of Topic 54",
      "Execute multi-step problem solving with 95% computational accuracy",
      "Collaborate in peer dyads to synthesize scientific arguments and defend conclusions"
    ],
    materialsAndResources: [
      "Interactive Smart Display & Digital Whiteboard Software",
      "Standard Student Laboratory Notebook & Precision Scientific Calculators",
      "Digital Sensor Probe Kits & Microcontroller Interface Units"
    ],
    vocabularyTerms: [
      "Term_54_Alpha", "Principle_54_Beta", "Hypothesis_54_Gamma", "Equilibrium_54_Delta"
    ],
    instructionalPhases: {
      hookWarmUp: {
        duration: 5,
        activityDescription: "Display a provocative real-world anomaly video related to Chemistry topic 54",
        teacherPrompt: "Observe the anomalous behavior on screen and formulate three hypotheses explaining the cause."
      },
      directInstruction: {
        duration: 15,
        coreConceptsCovered: [
          "Historical derivation and contextual significance of principle 54",
          "Step-by-step mathematical proof and boundary condition constraints",
          "Safety protocols and standard operating procedures for lab exploration"
        ],
        demonstrationSteps: [
          "Step 1: Set up experimental apparatus on instructor demonstration bench",
          "Step 2: Calibrate zero-offset sensor baseline readings",
          "Step 3: Graph real-time data trajectory on main classroom digital projection"
        ]
      },
      guidedPractice: {
        duration: 12,
        groupTaskDescription: "Students work in assigned trios to solve tiered practice problems from Exercise Set 54.",
        scaffoldingStrategies: [
          "Provide worked examples on whiteboard for visual reference",
          "Conduct targeted mini-conferences with student groups needing foundational review",
          "Offer challenge extension problems for accelerated learner pods"
        ]
      },
      independentPractice: {
        duration: 8,
        assignmentDetails: "Complete Individual Problem Set 54 (Questions 1 through 6) showing full working steps.",
        rubricCriteria: [
          "Conceptual accuracy: 40%",
          "Mathematical precision & dimensional analysis: 40%",
          "Clarity of final answer presentation & SI units: 20%"
        ]
      },
      closureReflection: {
        duration: 5,
        exitTicketPrompt: "Summarize the single most critical insight from today's lesson in two complete sentences.",
        homeworkAssigned: "Read textbook Chapter 19, Section 1 and complete problem set."
      }
    },
    differentiationPlan: {
      giftedAndTalentedExtension: "Investigate advanced calculus derivations or computational Python simulations of this concept.",
      strugglingLearnerRemediation: "Utilize visual graphic organizers, formula reference sheets, and 1-on-1 TA guided support.",
      englishLanguageLearnerSupport: "Provide dual-language glossary terms, sentence stems, and multimodal video explanations."
    },
    assessmentType: "FORMATIVE_QUIZ"
  },
  {
    planId: "LP-CS-10-055",
    courseCode: "CS-10",
    courseTitle: "Advanced Computer Science Comprehensive Study",
    gradeLevel: "Grade 11",
    unitTitle: "Unit 12: Fundamental Principles of Computer Science",
    lessonNumber: 55,
    lessonTopic: "Core Topic 55: Analytical Exploration & Practical Application in Computer Science",
    durationMinutes: 45,
    pedagogicalApproach: "DIRECT_INSTRUCTION",
    essentialQuestions: [
      "How does the fundamental principle of Computer Science govern real-world physical and computational systems?",
      "In what ways can experimental evidence validate mathematical derivations in this domain?",
      "How do modern scientific breakthroughs rely on the core theorems introduced in Lesson 55?"
    ],
    learningObjectives: [
      "Master the theoretical definition and practical formulation of Topic 55",
      "Execute multi-step problem solving with 95% computational accuracy",
      "Collaborate in peer dyads to synthesize scientific arguments and defend conclusions"
    ],
    materialsAndResources: [
      "Interactive Smart Display & Digital Whiteboard Software",
      "Standard Student Laboratory Notebook & Precision Scientific Calculators",
      "Digital Sensor Probe Kits & Microcontroller Interface Units"
    ],
    vocabularyTerms: [
      "Term_55_Alpha", "Principle_55_Beta", "Hypothesis_55_Gamma", "Equilibrium_55_Delta"
    ],
    instructionalPhases: {
      hookWarmUp: {
        duration: 5,
        activityDescription: "Display a provocative real-world anomaly video related to Computer Science topic 55",
        teacherPrompt: "Observe the anomalous behavior on screen and formulate three hypotheses explaining the cause."
      },
      directInstruction: {
        duration: 15,
        coreConceptsCovered: [
          "Historical derivation and contextual significance of principle 55",
          "Step-by-step mathematical proof and boundary condition constraints",
          "Safety protocols and standard operating procedures for lab exploration"
        ],
        demonstrationSteps: [
          "Step 1: Set up experimental apparatus on instructor demonstration bench",
          "Step 2: Calibrate zero-offset sensor baseline readings",
          "Step 3: Graph real-time data trajectory on main classroom digital projection"
        ]
      },
      guidedPractice: {
        duration: 12,
        groupTaskDescription: "Students work in assigned trios to solve tiered practice problems from Exercise Set 55.",
        scaffoldingStrategies: [
          "Provide worked examples on whiteboard for visual reference",
          "Conduct targeted mini-conferences with student groups needing foundational review",
          "Offer challenge extension problems for accelerated learner pods"
        ]
      },
      independentPractice: {
        duration: 8,
        assignmentDetails: "Complete Individual Problem Set 55 (Questions 1 through 6) showing full working steps.",
        rubricCriteria: [
          "Conceptual accuracy: 40%",
          "Mathematical precision & dimensional analysis: 40%",
          "Clarity of final answer presentation & SI units: 20%"
        ]
      },
      closureReflection: {
        duration: 5,
        exitTicketPrompt: "Summarize the single most critical insight from today's lesson in two complete sentences.",
        homeworkAssigned: "Read textbook Chapter 19, Section 2 and complete problem set."
      }
    },
    differentiationPlan: {
      giftedAndTalentedExtension: "Investigate advanced calculus derivations or computational Python simulations of this concept.",
      strugglingLearnerRemediation: "Utilize visual graphic organizers, formula reference sheets, and 1-on-1 TA guided support.",
      englishLanguageLearnerSupport: "Provide dual-language glossary terms, sentence stems, and multimodal video explanations."
    },
    assessmentType: "LAB_REPORT"
  },
  {
    planId: "LP-PHY-10-056",
    courseCode: "PHY-10",
    courseTitle: "Advanced Physics Comprehensive Study",
    gradeLevel: "Grade 11",
    unitTitle: "Unit 12: Fundamental Principles of Physics",
    lessonNumber: 56,
    lessonTopic: "Core Topic 56: Analytical Exploration & Practical Application in Physics",
    durationMinutes: 45,
    pedagogicalApproach: "INQUIRY_BASED",
    essentialQuestions: [
      "How does the fundamental principle of Physics govern real-world physical and computational systems?",
      "In what ways can experimental evidence validate mathematical derivations in this domain?",
      "How do modern scientific breakthroughs rely on the core theorems introduced in Lesson 56?"
    ],
    learningObjectives: [
      "Master the theoretical definition and practical formulation of Topic 56",
      "Execute multi-step problem solving with 95% computational accuracy",
      "Collaborate in peer dyads to synthesize scientific arguments and defend conclusions"
    ],
    materialsAndResources: [
      "Interactive Smart Display & Digital Whiteboard Software",
      "Standard Student Laboratory Notebook & Precision Scientific Calculators",
      "Digital Sensor Probe Kits & Microcontroller Interface Units"
    ],
    vocabularyTerms: [
      "Term_56_Alpha", "Principle_56_Beta", "Hypothesis_56_Gamma", "Equilibrium_56_Delta"
    ],
    instructionalPhases: {
      hookWarmUp: {
        duration: 5,
        activityDescription: "Display a provocative real-world anomaly video related to Physics topic 56",
        teacherPrompt: "Observe the anomalous behavior on screen and formulate three hypotheses explaining the cause."
      },
      directInstruction: {
        duration: 15,
        coreConceptsCovered: [
          "Historical derivation and contextual significance of principle 56",
          "Step-by-step mathematical proof and boundary condition constraints",
          "Safety protocols and standard operating procedures for lab exploration"
        ],
        demonstrationSteps: [
          "Step 1: Set up experimental apparatus on instructor demonstration bench",
          "Step 2: Calibrate zero-offset sensor baseline readings",
          "Step 3: Graph real-time data trajectory on main classroom digital projection"
        ]
      },
      guidedPractice: {
        duration: 12,
        groupTaskDescription: "Students work in assigned trios to solve tiered practice problems from Exercise Set 56.",
        scaffoldingStrategies: [
          "Provide worked examples on whiteboard for visual reference",
          "Conduct targeted mini-conferences with student groups needing foundational review",
          "Offer challenge extension problems for accelerated learner pods"
        ]
      },
      independentPractice: {
        duration: 8,
        assignmentDetails: "Complete Individual Problem Set 56 (Questions 1 through 6) showing full working steps.",
        rubricCriteria: [
          "Conceptual accuracy: 40%",
          "Mathematical precision & dimensional analysis: 40%",
          "Clarity of final answer presentation & SI units: 20%"
        ]
      },
      closureReflection: {
        duration: 5,
        exitTicketPrompt: "Summarize the single most critical insight from today's lesson in two complete sentences.",
        homeworkAssigned: "Read textbook Chapter 19, Section 3 and complete problem set."
      }
    },
    differentiationPlan: {
      giftedAndTalentedExtension: "Investigate advanced calculus derivations or computational Python simulations of this concept.",
      strugglingLearnerRemediation: "Utilize visual graphic organizers, formula reference sheets, and 1-on-1 TA guided support.",
      englishLanguageLearnerSupport: "Provide dual-language glossary terms, sentence stems, and multimodal video explanations."
    },
    assessmentType: "EXIT_TICKET"
  },
  {
    planId: "LP-MTH-10-057",
    courseCode: "MTH-10",
    courseTitle: "Advanced Mathematics Comprehensive Study",
    gradeLevel: "Grade 11",
    unitTitle: "Unit 12: Fundamental Principles of Mathematics",
    lessonNumber: 57,
    lessonTopic: "Core Topic 57: Analytical Exploration & Practical Application in Mathematics",
    durationMinutes: 45,
    pedagogicalApproach: "DIRECT_INSTRUCTION",
    essentialQuestions: [
      "How does the fundamental principle of Mathematics govern real-world physical and computational systems?",
      "In what ways can experimental evidence validate mathematical derivations in this domain?",
      "How do modern scientific breakthroughs rely on the core theorems introduced in Lesson 57?"
    ],
    learningObjectives: [
      "Master the theoretical definition and practical formulation of Topic 57",
      "Execute multi-step problem solving with 95% computational accuracy",
      "Collaborate in peer dyads to synthesize scientific arguments and defend conclusions"
    ],
    materialsAndResources: [
      "Interactive Smart Display & Digital Whiteboard Software",
      "Standard Student Laboratory Notebook & Precision Scientific Calculators",
      "Digital Sensor Probe Kits & Microcontroller Interface Units"
    ],
    vocabularyTerms: [
      "Term_57_Alpha", "Principle_57_Beta", "Hypothesis_57_Gamma", "Equilibrium_57_Delta"
    ],
    instructionalPhases: {
      hookWarmUp: {
        duration: 5,
        activityDescription: "Display a provocative real-world anomaly video related to Mathematics topic 57",
        teacherPrompt: "Observe the anomalous behavior on screen and formulate three hypotheses explaining the cause."
      },
      directInstruction: {
        duration: 15,
        coreConceptsCovered: [
          "Historical derivation and contextual significance of principle 57",
          "Step-by-step mathematical proof and boundary condition constraints",
          "Safety protocols and standard operating procedures for lab exploration"
        ],
        demonstrationSteps: [
          "Step 1: Set up experimental apparatus on instructor demonstration bench",
          "Step 2: Calibrate zero-offset sensor baseline readings",
          "Step 3: Graph real-time data trajectory on main classroom digital projection"
        ]
      },
      guidedPractice: {
        duration: 12,
        groupTaskDescription: "Students work in assigned trios to solve tiered practice problems from Exercise Set 57.",
        scaffoldingStrategies: [
          "Provide worked examples on whiteboard for visual reference",
          "Conduct targeted mini-conferences with student groups needing foundational review",
          "Offer challenge extension problems for accelerated learner pods"
        ]
      },
      independentPractice: {
        duration: 8,
        assignmentDetails: "Complete Individual Problem Set 57 (Questions 1 through 6) showing full working steps.",
        rubricCriteria: [
          "Conceptual accuracy: 40%",
          "Mathematical precision & dimensional analysis: 40%",
          "Clarity of final answer presentation & SI units: 20%"
        ]
      },
      closureReflection: {
        duration: 5,
        exitTicketPrompt: "Summarize the single most critical insight from today's lesson in two complete sentences.",
        homeworkAssigned: "Read textbook Chapter 20, Section 1 and complete problem set."
      }
    },
    differentiationPlan: {
      giftedAndTalentedExtension: "Investigate advanced calculus derivations or computational Python simulations of this concept.",
      strugglingLearnerRemediation: "Utilize visual graphic organizers, formula reference sheets, and 1-on-1 TA guided support.",
      englishLanguageLearnerSupport: "Provide dual-language glossary terms, sentence stems, and multimodal video explanations."
    },
    assessmentType: "FORMATIVE_QUIZ"
  },
  {
    planId: "LP-CHM-10-058",
    courseCode: "CHM-10",
    courseTitle: "Advanced Chemistry Comprehensive Study",
    gradeLevel: "Grade 11",
    unitTitle: "Unit 12: Fundamental Principles of Chemistry",
    lessonNumber: 58,
    lessonTopic: "Core Topic 58: Analytical Exploration & Practical Application in Chemistry",
    durationMinutes: 45,
    pedagogicalApproach: "INQUIRY_BASED",
    essentialQuestions: [
      "How does the fundamental principle of Chemistry govern real-world physical and computational systems?",
      "In what ways can experimental evidence validate mathematical derivations in this domain?",
      "How do modern scientific breakthroughs rely on the core theorems introduced in Lesson 58?"
    ],
    learningObjectives: [
      "Master the theoretical definition and practical formulation of Topic 58",
      "Execute multi-step problem solving with 95% computational accuracy",
      "Collaborate in peer dyads to synthesize scientific arguments and defend conclusions"
    ],
    materialsAndResources: [
      "Interactive Smart Display & Digital Whiteboard Software",
      "Standard Student Laboratory Notebook & Precision Scientific Calculators",
      "Digital Sensor Probe Kits & Microcontroller Interface Units"
    ],
    vocabularyTerms: [
      "Term_58_Alpha", "Principle_58_Beta", "Hypothesis_58_Gamma", "Equilibrium_58_Delta"
    ],
    instructionalPhases: {
      hookWarmUp: {
        duration: 5,
        activityDescription: "Display a provocative real-world anomaly video related to Chemistry topic 58",
        teacherPrompt: "Observe the anomalous behavior on screen and formulate three hypotheses explaining the cause."
      },
      directInstruction: {
        duration: 15,
        coreConceptsCovered: [
          "Historical derivation and contextual significance of principle 58",
          "Step-by-step mathematical proof and boundary condition constraints",
          "Safety protocols and standard operating procedures for lab exploration"
        ],
        demonstrationSteps: [
          "Step 1: Set up experimental apparatus on instructor demonstration bench",
          "Step 2: Calibrate zero-offset sensor baseline readings",
          "Step 3: Graph real-time data trajectory on main classroom digital projection"
        ]
      },
      guidedPractice: {
        duration: 12,
        groupTaskDescription: "Students work in assigned trios to solve tiered practice problems from Exercise Set 58.",
        scaffoldingStrategies: [
          "Provide worked examples on whiteboard for visual reference",
          "Conduct targeted mini-conferences with student groups needing foundational review",
          "Offer challenge extension problems for accelerated learner pods"
        ]
      },
      independentPractice: {
        duration: 8,
        assignmentDetails: "Complete Individual Problem Set 58 (Questions 1 through 6) showing full working steps.",
        rubricCriteria: [
          "Conceptual accuracy: 40%",
          "Mathematical precision & dimensional analysis: 40%",
          "Clarity of final answer presentation & SI units: 20%"
        ]
      },
      closureReflection: {
        duration: 5,
        exitTicketPrompt: "Summarize the single most critical insight from today's lesson in two complete sentences.",
        homeworkAssigned: "Read textbook Chapter 20, Section 2 and complete problem set."
      }
    },
    differentiationPlan: {
      giftedAndTalentedExtension: "Investigate advanced calculus derivations or computational Python simulations of this concept.",
      strugglingLearnerRemediation: "Utilize visual graphic organizers, formula reference sheets, and 1-on-1 TA guided support.",
      englishLanguageLearnerSupport: "Provide dual-language glossary terms, sentence stems, and multimodal video explanations."
    },
    assessmentType: "LAB_REPORT"
  },
  {
    planId: "LP-CS-10-059",
    courseCode: "CS-10",
    courseTitle: "Advanced Computer Science Comprehensive Study",
    gradeLevel: "Grade 11",
    unitTitle: "Unit 12: Fundamental Principles of Computer Science",
    lessonNumber: 59,
    lessonTopic: "Core Topic 59: Analytical Exploration & Practical Application in Computer Science",
    durationMinutes: 45,
    pedagogicalApproach: "DIRECT_INSTRUCTION",
    essentialQuestions: [
      "How does the fundamental principle of Computer Science govern real-world physical and computational systems?",
      "In what ways can experimental evidence validate mathematical derivations in this domain?",
      "How do modern scientific breakthroughs rely on the core theorems introduced in Lesson 59?"
    ],
    learningObjectives: [
      "Master the theoretical definition and practical formulation of Topic 59",
      "Execute multi-step problem solving with 95% computational accuracy",
      "Collaborate in peer dyads to synthesize scientific arguments and defend conclusions"
    ],
    materialsAndResources: [
      "Interactive Smart Display & Digital Whiteboard Software",
      "Standard Student Laboratory Notebook & Precision Scientific Calculators",
      "Digital Sensor Probe Kits & Microcontroller Interface Units"
    ],
    vocabularyTerms: [
      "Term_59_Alpha", "Principle_59_Beta", "Hypothesis_59_Gamma", "Equilibrium_59_Delta"
    ],
    instructionalPhases: {
      hookWarmUp: {
        duration: 5,
        activityDescription: "Display a provocative real-world anomaly video related to Computer Science topic 59",
        teacherPrompt: "Observe the anomalous behavior on screen and formulate three hypotheses explaining the cause."
      },
      directInstruction: {
        duration: 15,
        coreConceptsCovered: [
          "Historical derivation and contextual significance of principle 59",
          "Step-by-step mathematical proof and boundary condition constraints",
          "Safety protocols and standard operating procedures for lab exploration"
        ],
        demonstrationSteps: [
          "Step 1: Set up experimental apparatus on instructor demonstration bench",
          "Step 2: Calibrate zero-offset sensor baseline readings",
          "Step 3: Graph real-time data trajectory on main classroom digital projection"
        ]
      },
      guidedPractice: {
        duration: 12,
        groupTaskDescription: "Students work in assigned trios to solve tiered practice problems from Exercise Set 59.",
        scaffoldingStrategies: [
          "Provide worked examples on whiteboard for visual reference",
          "Conduct targeted mini-conferences with student groups needing foundational review",
          "Offer challenge extension problems for accelerated learner pods"
        ]
      },
      independentPractice: {
        duration: 8,
        assignmentDetails: "Complete Individual Problem Set 59 (Questions 1 through 6) showing full working steps.",
        rubricCriteria: [
          "Conceptual accuracy: 40%",
          "Mathematical precision & dimensional analysis: 40%",
          "Clarity of final answer presentation & SI units: 20%"
        ]
      },
      closureReflection: {
        duration: 5,
        exitTicketPrompt: "Summarize the single most critical insight from today's lesson in two complete sentences.",
        homeworkAssigned: "Read textbook Chapter 20, Section 3 and complete problem set."
      }
    },
    differentiationPlan: {
      giftedAndTalentedExtension: "Investigate advanced calculus derivations or computational Python simulations of this concept.",
      strugglingLearnerRemediation: "Utilize visual graphic organizers, formula reference sheets, and 1-on-1 TA guided support.",
      englishLanguageLearnerSupport: "Provide dual-language glossary terms, sentence stems, and multimodal video explanations."
    },
    assessmentType: "EXIT_TICKET"
  },
  {
    planId: "LP-PHY-10-060",
    courseCode: "PHY-10",
    courseTitle: "Advanced Physics Comprehensive Study",
    gradeLevel: "Grade 11",
    unitTitle: "Unit 13: Fundamental Principles of Physics",
    lessonNumber: 60,
    lessonTopic: "Core Topic 60: Analytical Exploration & Practical Application in Physics",
    durationMinutes: 45,
    pedagogicalApproach: "INQUIRY_BASED",
    essentialQuestions: [
      "How does the fundamental principle of Physics govern real-world physical and computational systems?",
      "In what ways can experimental evidence validate mathematical derivations in this domain?",
      "How do modern scientific breakthroughs rely on the core theorems introduced in Lesson 60?"
    ],
    learningObjectives: [
      "Master the theoretical definition and practical formulation of Topic 60",
      "Execute multi-step problem solving with 95% computational accuracy",
      "Collaborate in peer dyads to synthesize scientific arguments and defend conclusions"
    ],
    materialsAndResources: [
      "Interactive Smart Display & Digital Whiteboard Software",
      "Standard Student Laboratory Notebook & Precision Scientific Calculators",
      "Digital Sensor Probe Kits & Microcontroller Interface Units"
    ],
    vocabularyTerms: [
      "Term_60_Alpha", "Principle_60_Beta", "Hypothesis_60_Gamma", "Equilibrium_60_Delta"
    ],
    instructionalPhases: {
      hookWarmUp: {
        duration: 5,
        activityDescription: "Display a provocative real-world anomaly video related to Physics topic 60",
        teacherPrompt: "Observe the anomalous behavior on screen and formulate three hypotheses explaining the cause."
      },
      directInstruction: {
        duration: 15,
        coreConceptsCovered: [
          "Historical derivation and contextual significance of principle 60",
          "Step-by-step mathematical proof and boundary condition constraints",
          "Safety protocols and standard operating procedures for lab exploration"
        ],
        demonstrationSteps: [
          "Step 1: Set up experimental apparatus on instructor demonstration bench",
          "Step 2: Calibrate zero-offset sensor baseline readings",
          "Step 3: Graph real-time data trajectory on main classroom digital projection"
        ]
      },
      guidedPractice: {
        duration: 12,
        groupTaskDescription: "Students work in assigned trios to solve tiered practice problems from Exercise Set 60.",
        scaffoldingStrategies: [
          "Provide worked examples on whiteboard for visual reference",
          "Conduct targeted mini-conferences with student groups needing foundational review",
          "Offer challenge extension problems for accelerated learner pods"
        ]
      },
      independentPractice: {
        duration: 8,
        assignmentDetails: "Complete Individual Problem Set 60 (Questions 1 through 6) showing full working steps.",
        rubricCriteria: [
          "Conceptual accuracy: 40%",
          "Mathematical precision & dimensional analysis: 40%",
          "Clarity of final answer presentation & SI units: 20%"
        ]
      },
      closureReflection: {
        duration: 5,
        exitTicketPrompt: "Summarize the single most critical insight from today's lesson in two complete sentences.",
        homeworkAssigned: "Read textbook Chapter 21, Section 1 and complete problem set."
      }
    },
    differentiationPlan: {
      giftedAndTalentedExtension: "Investigate advanced calculus derivations or computational Python simulations of this concept.",
      strugglingLearnerRemediation: "Utilize visual graphic organizers, formula reference sheets, and 1-on-1 TA guided support.",
      englishLanguageLearnerSupport: "Provide dual-language glossary terms, sentence stems, and multimodal video explanations."
    },
    assessmentType: "FORMATIVE_QUIZ"
  },
];

@Injectable()
export class LessonPlanManagementService {
  public getAllLessonPlans(): DetailedLessonPlan[] {
    return MASTER_LESSON_PLANS_REGISTRY;
  }

  public getLessonPlansByCourse(courseCode: string): DetailedLessonPlan[] {
    return MASTER_LESSON_PLANS_REGISTRY.filter(p => p.courseCode === courseCode);
  }

  public getLessonPlanById(planId: string): DetailedLessonPlan | undefined {
    return MASTER_LESSON_PLANS_REGISTRY.find(p => p.planId === planId);
  }
}
