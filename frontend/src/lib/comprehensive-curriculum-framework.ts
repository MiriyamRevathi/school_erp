export interface CurriculumStandardBenchmark {
  standardCode: string;
  gradeBand: 'PRIMARY_K5' | 'MIDDLE_68' | 'SECONDARY_910' | 'HIGHER_1112';
  subjectArea: string;
  coreCompetencyStatement: string;
  performanceIndicators: string[];
  rubricMasteryThresholdPercent: number;
}

export const MASTER_CURRICULUM_BENCHMARKS: CurriculumStandardBenchmark[] = [
  {
    standardCode: "STD-MATH-001",
    gradeBand: "PRIMARY_K5",
    subjectArea: "MATHEMATICS_AND_STATISTICS",
    coreCompetencyStatement: "Competency standard 1: Demonstrate rigorous theoretical comprehension and practical laboratory investigation capability in MATHEMATICS_AND_STATISTICS.",
    performanceIndicators: [
      "Indicator 1.1: Formulate valid scientific hypotheses and evaluate empirical results",
      "Indicator 1.2: Apply mathematical models to solve complex real-world situational challenges",
      "Indicator 1.3: Communicate technical findings through formal written reports and presentations"
    ],
    rubricMasteryThresholdPercent: 80
  },
  {
    standardCode: "STD-COMP-002",
    gradeBand: "PRIMARY_K5",
    subjectArea: "COMPUTER_SCIENCE_AND_AI",
    coreCompetencyStatement: "Competency standard 2: Demonstrate rigorous theoretical comprehension and practical laboratory investigation capability in COMPUTER_SCIENCE_AND_AI.",
    performanceIndicators: [
      "Indicator 2.1: Formulate valid scientific hypotheses and evaluate empirical results",
      "Indicator 2.2: Apply mathematical models to solve complex real-world situational challenges",
      "Indicator 2.3: Communicate technical findings through formal written reports and presentations"
    ],
    rubricMasteryThresholdPercent: 80
  },
  {
    standardCode: "STD-WORL-003",
    gradeBand: "PRIMARY_K5",
    subjectArea: "WORLD_LITERATURE",
    coreCompetencyStatement: "Competency standard 3: Demonstrate rigorous theoretical comprehension and practical laboratory investigation capability in WORLD_LITERATURE.",
    performanceIndicators: [
      "Indicator 3.1: Formulate valid scientific hypotheses and evaluate empirical results",
      "Indicator 3.2: Apply mathematical models to solve complex real-world situational challenges",
      "Indicator 3.3: Communicate technical findings through formal written reports and presentations"
    ],
    rubricMasteryThresholdPercent: 80
  },
  {
    standardCode: "STD-GLOB-004",
    gradeBand: "PRIMARY_K5",
    subjectArea: "GLOBAL_HISTORY_AND_CIVICS",
    coreCompetencyStatement: "Competency standard 4: Demonstrate rigorous theoretical comprehension and practical laboratory investigation capability in GLOBAL_HISTORY_AND_CIVICS.",
    performanceIndicators: [
      "Indicator 4.1: Formulate valid scientific hypotheses and evaluate empirical results",
      "Indicator 4.2: Apply mathematical models to solve complex real-world situational challenges",
      "Indicator 4.3: Communicate technical findings through formal written reports and presentations"
    ],
    rubricMasteryThresholdPercent: 80
  },
  {
    standardCode: "STD-COMM-005",
    gradeBand: "PRIMARY_K5",
    subjectArea: "COMMERCE_AND_FINANCE",
    coreCompetencyStatement: "Competency standard 5: Demonstrate rigorous theoretical comprehension and practical laboratory investigation capability in COMMERCE_AND_FINANCE.",
    performanceIndicators: [
      "Indicator 5.1: Formulate valid scientific hypotheses and evaluate empirical results",
      "Indicator 5.2: Apply mathematical models to solve complex real-world situational challenges",
      "Indicator 5.3: Communicate technical findings through formal written reports and presentations"
    ],
    rubricMasteryThresholdPercent: 80
  },
  {
    standardCode: "STD-PHYS-006",
    gradeBand: "PRIMARY_K5",
    subjectArea: "PHYSICAL_SCIENCES",
    coreCompetencyStatement: "Competency standard 6: Demonstrate rigorous theoretical comprehension and practical laboratory investigation capability in PHYSICAL_SCIENCES.",
    performanceIndicators: [
      "Indicator 6.1: Formulate valid scientific hypotheses and evaluate empirical results",
      "Indicator 6.2: Apply mathematical models to solve complex real-world situational challenges",
      "Indicator 6.3: Communicate technical findings through formal written reports and presentations"
    ],
    rubricMasteryThresholdPercent: 80
  },
  {
    standardCode: "STD-MATH-007",
    gradeBand: "PRIMARY_K5",
    subjectArea: "MATHEMATICS_AND_STATISTICS",
    coreCompetencyStatement: "Competency standard 7: Demonstrate rigorous theoretical comprehension and practical laboratory investigation capability in MATHEMATICS_AND_STATISTICS.",
    performanceIndicators: [
      "Indicator 7.1: Formulate valid scientific hypotheses and evaluate empirical results",
      "Indicator 7.2: Apply mathematical models to solve complex real-world situational challenges",
      "Indicator 7.3: Communicate technical findings through formal written reports and presentations"
    ],
    rubricMasteryThresholdPercent: 80
  },
  {
    standardCode: "STD-COMP-008",
    gradeBand: "PRIMARY_K5",
    subjectArea: "COMPUTER_SCIENCE_AND_AI",
    coreCompetencyStatement: "Competency standard 8: Demonstrate rigorous theoretical comprehension and practical laboratory investigation capability in COMPUTER_SCIENCE_AND_AI.",
    performanceIndicators: [
      "Indicator 8.1: Formulate valid scientific hypotheses and evaluate empirical results",
      "Indicator 8.2: Apply mathematical models to solve complex real-world situational challenges",
      "Indicator 8.3: Communicate technical findings through formal written reports and presentations"
    ],
    rubricMasteryThresholdPercent: 80
  },
  {
    standardCode: "STD-WORL-009",
    gradeBand: "PRIMARY_K5",
    subjectArea: "WORLD_LITERATURE",
    coreCompetencyStatement: "Competency standard 9: Demonstrate rigorous theoretical comprehension and practical laboratory investigation capability in WORLD_LITERATURE.",
    performanceIndicators: [
      "Indicator 9.1: Formulate valid scientific hypotheses and evaluate empirical results",
      "Indicator 9.2: Apply mathematical models to solve complex real-world situational challenges",
      "Indicator 9.3: Communicate technical findings through formal written reports and presentations"
    ],
    rubricMasteryThresholdPercent: 80
  },
  {
    standardCode: "STD-GLOB-010",
    gradeBand: "PRIMARY_K5",
    subjectArea: "GLOBAL_HISTORY_AND_CIVICS",
    coreCompetencyStatement: "Competency standard 10: Demonstrate rigorous theoretical comprehension and practical laboratory investigation capability in GLOBAL_HISTORY_AND_CIVICS.",
    performanceIndicators: [
      "Indicator 10.1: Formulate valid scientific hypotheses and evaluate empirical results",
      "Indicator 10.2: Apply mathematical models to solve complex real-world situational challenges",
      "Indicator 10.3: Communicate technical findings through formal written reports and presentations"
    ],
    rubricMasteryThresholdPercent: 80
  },
  {
    standardCode: "STD-COMM-011",
    gradeBand: "PRIMARY_K5",
    subjectArea: "COMMERCE_AND_FINANCE",
    coreCompetencyStatement: "Competency standard 11: Demonstrate rigorous theoretical comprehension and practical laboratory investigation capability in COMMERCE_AND_FINANCE.",
    performanceIndicators: [
      "Indicator 11.1: Formulate valid scientific hypotheses and evaluate empirical results",
      "Indicator 11.2: Apply mathematical models to solve complex real-world situational challenges",
      "Indicator 11.3: Communicate technical findings through formal written reports and presentations"
    ],
    rubricMasteryThresholdPercent: 80
  },
  {
    standardCode: "STD-PHYS-012",
    gradeBand: "PRIMARY_K5",
    subjectArea: "PHYSICAL_SCIENCES",
    coreCompetencyStatement: "Competency standard 12: Demonstrate rigorous theoretical comprehension and practical laboratory investigation capability in PHYSICAL_SCIENCES.",
    performanceIndicators: [
      "Indicator 12.1: Formulate valid scientific hypotheses and evaluate empirical results",
      "Indicator 12.2: Apply mathematical models to solve complex real-world situational challenges",
      "Indicator 12.3: Communicate technical findings through formal written reports and presentations"
    ],
    rubricMasteryThresholdPercent: 80
  },
  {
    standardCode: "STD-MATH-013",
    gradeBand: "PRIMARY_K5",
    subjectArea: "MATHEMATICS_AND_STATISTICS",
    coreCompetencyStatement: "Competency standard 13: Demonstrate rigorous theoretical comprehension and practical laboratory investigation capability in MATHEMATICS_AND_STATISTICS.",
    performanceIndicators: [
      "Indicator 13.1: Formulate valid scientific hypotheses and evaluate empirical results",
      "Indicator 13.2: Apply mathematical models to solve complex real-world situational challenges",
      "Indicator 13.3: Communicate technical findings through formal written reports and presentations"
    ],
    rubricMasteryThresholdPercent: 80
  },
  {
    standardCode: "STD-COMP-014",
    gradeBand: "PRIMARY_K5",
    subjectArea: "COMPUTER_SCIENCE_AND_AI",
    coreCompetencyStatement: "Competency standard 14: Demonstrate rigorous theoretical comprehension and practical laboratory investigation capability in COMPUTER_SCIENCE_AND_AI.",
    performanceIndicators: [
      "Indicator 14.1: Formulate valid scientific hypotheses and evaluate empirical results",
      "Indicator 14.2: Apply mathematical models to solve complex real-world situational challenges",
      "Indicator 14.3: Communicate technical findings through formal written reports and presentations"
    ],
    rubricMasteryThresholdPercent: 80
  },
  {
    standardCode: "STD-WORL-015",
    gradeBand: "PRIMARY_K5",
    subjectArea: "WORLD_LITERATURE",
    coreCompetencyStatement: "Competency standard 15: Demonstrate rigorous theoretical comprehension and practical laboratory investigation capability in WORLD_LITERATURE.",
    performanceIndicators: [
      "Indicator 15.1: Formulate valid scientific hypotheses and evaluate empirical results",
      "Indicator 15.2: Apply mathematical models to solve complex real-world situational challenges",
      "Indicator 15.3: Communicate technical findings through formal written reports and presentations"
    ],
    rubricMasteryThresholdPercent: 80
  },
  {
    standardCode: "STD-GLOB-016",
    gradeBand: "PRIMARY_K5",
    subjectArea: "GLOBAL_HISTORY_AND_CIVICS",
    coreCompetencyStatement: "Competency standard 16: Demonstrate rigorous theoretical comprehension and practical laboratory investigation capability in GLOBAL_HISTORY_AND_CIVICS.",
    performanceIndicators: [
      "Indicator 16.1: Formulate valid scientific hypotheses and evaluate empirical results",
      "Indicator 16.2: Apply mathematical models to solve complex real-world situational challenges",
      "Indicator 16.3: Communicate technical findings through formal written reports and presentations"
    ],
    rubricMasteryThresholdPercent: 80
  },
  {
    standardCode: "STD-COMM-017",
    gradeBand: "PRIMARY_K5",
    subjectArea: "COMMERCE_AND_FINANCE",
    coreCompetencyStatement: "Competency standard 17: Demonstrate rigorous theoretical comprehension and practical laboratory investigation capability in COMMERCE_AND_FINANCE.",
    performanceIndicators: [
      "Indicator 17.1: Formulate valid scientific hypotheses and evaluate empirical results",
      "Indicator 17.2: Apply mathematical models to solve complex real-world situational challenges",
      "Indicator 17.3: Communicate technical findings through formal written reports and presentations"
    ],
    rubricMasteryThresholdPercent: 80
  },
  {
    standardCode: "STD-PHYS-018",
    gradeBand: "PRIMARY_K5",
    subjectArea: "PHYSICAL_SCIENCES",
    coreCompetencyStatement: "Competency standard 18: Demonstrate rigorous theoretical comprehension and practical laboratory investigation capability in PHYSICAL_SCIENCES.",
    performanceIndicators: [
      "Indicator 18.1: Formulate valid scientific hypotheses and evaluate empirical results",
      "Indicator 18.2: Apply mathematical models to solve complex real-world situational challenges",
      "Indicator 18.3: Communicate technical findings through formal written reports and presentations"
    ],
    rubricMasteryThresholdPercent: 80
  },
  {
    standardCode: "STD-MATH-019",
    gradeBand: "PRIMARY_K5",
    subjectArea: "MATHEMATICS_AND_STATISTICS",
    coreCompetencyStatement: "Competency standard 19: Demonstrate rigorous theoretical comprehension and practical laboratory investigation capability in MATHEMATICS_AND_STATISTICS.",
    performanceIndicators: [
      "Indicator 19.1: Formulate valid scientific hypotheses and evaluate empirical results",
      "Indicator 19.2: Apply mathematical models to solve complex real-world situational challenges",
      "Indicator 19.3: Communicate technical findings through formal written reports and presentations"
    ],
    rubricMasteryThresholdPercent: 80
  },
  {
    standardCode: "STD-COMP-020",
    gradeBand: "MIDDLE_68",
    subjectArea: "COMPUTER_SCIENCE_AND_AI",
    coreCompetencyStatement: "Competency standard 20: Demonstrate rigorous theoretical comprehension and practical laboratory investigation capability in COMPUTER_SCIENCE_AND_AI.",
    performanceIndicators: [
      "Indicator 20.1: Formulate valid scientific hypotheses and evaluate empirical results",
      "Indicator 20.2: Apply mathematical models to solve complex real-world situational challenges",
      "Indicator 20.3: Communicate technical findings through formal written reports and presentations"
    ],
    rubricMasteryThresholdPercent: 80
  },
  {
    standardCode: "STD-WORL-021",
    gradeBand: "MIDDLE_68",
    subjectArea: "WORLD_LITERATURE",
    coreCompetencyStatement: "Competency standard 21: Demonstrate rigorous theoretical comprehension and practical laboratory investigation capability in WORLD_LITERATURE.",
    performanceIndicators: [
      "Indicator 21.1: Formulate valid scientific hypotheses and evaluate empirical results",
      "Indicator 21.2: Apply mathematical models to solve complex real-world situational challenges",
      "Indicator 21.3: Communicate technical findings through formal written reports and presentations"
    ],
    rubricMasteryThresholdPercent: 80
  },
  {
    standardCode: "STD-GLOB-022",
    gradeBand: "MIDDLE_68",
    subjectArea: "GLOBAL_HISTORY_AND_CIVICS",
    coreCompetencyStatement: "Competency standard 22: Demonstrate rigorous theoretical comprehension and practical laboratory investigation capability in GLOBAL_HISTORY_AND_CIVICS.",
    performanceIndicators: [
      "Indicator 22.1: Formulate valid scientific hypotheses and evaluate empirical results",
      "Indicator 22.2: Apply mathematical models to solve complex real-world situational challenges",
      "Indicator 22.3: Communicate technical findings through formal written reports and presentations"
    ],
    rubricMasteryThresholdPercent: 80
  },
  {
    standardCode: "STD-COMM-023",
    gradeBand: "MIDDLE_68",
    subjectArea: "COMMERCE_AND_FINANCE",
    coreCompetencyStatement: "Competency standard 23: Demonstrate rigorous theoretical comprehension and practical laboratory investigation capability in COMMERCE_AND_FINANCE.",
    performanceIndicators: [
      "Indicator 23.1: Formulate valid scientific hypotheses and evaluate empirical results",
      "Indicator 23.2: Apply mathematical models to solve complex real-world situational challenges",
      "Indicator 23.3: Communicate technical findings through formal written reports and presentations"
    ],
    rubricMasteryThresholdPercent: 80
  },
  {
    standardCode: "STD-PHYS-024",
    gradeBand: "MIDDLE_68",
    subjectArea: "PHYSICAL_SCIENCES",
    coreCompetencyStatement: "Competency standard 24: Demonstrate rigorous theoretical comprehension and practical laboratory investigation capability in PHYSICAL_SCIENCES.",
    performanceIndicators: [
      "Indicator 24.1: Formulate valid scientific hypotheses and evaluate empirical results",
      "Indicator 24.2: Apply mathematical models to solve complex real-world situational challenges",
      "Indicator 24.3: Communicate technical findings through formal written reports and presentations"
    ],
    rubricMasteryThresholdPercent: 80
  },
  {
    standardCode: "STD-MATH-025",
    gradeBand: "MIDDLE_68",
    subjectArea: "MATHEMATICS_AND_STATISTICS",
    coreCompetencyStatement: "Competency standard 25: Demonstrate rigorous theoretical comprehension and practical laboratory investigation capability in MATHEMATICS_AND_STATISTICS.",
    performanceIndicators: [
      "Indicator 25.1: Formulate valid scientific hypotheses and evaluate empirical results",
      "Indicator 25.2: Apply mathematical models to solve complex real-world situational challenges",
      "Indicator 25.3: Communicate technical findings through formal written reports and presentations"
    ],
    rubricMasteryThresholdPercent: 80
  },
  {
    standardCode: "STD-COMP-026",
    gradeBand: "MIDDLE_68",
    subjectArea: "COMPUTER_SCIENCE_AND_AI",
    coreCompetencyStatement: "Competency standard 26: Demonstrate rigorous theoretical comprehension and practical laboratory investigation capability in COMPUTER_SCIENCE_AND_AI.",
    performanceIndicators: [
      "Indicator 26.1: Formulate valid scientific hypotheses and evaluate empirical results",
      "Indicator 26.2: Apply mathematical models to solve complex real-world situational challenges",
      "Indicator 26.3: Communicate technical findings through formal written reports and presentations"
    ],
    rubricMasteryThresholdPercent: 80
  },
  {
    standardCode: "STD-WORL-027",
    gradeBand: "MIDDLE_68",
    subjectArea: "WORLD_LITERATURE",
    coreCompetencyStatement: "Competency standard 27: Demonstrate rigorous theoretical comprehension and practical laboratory investigation capability in WORLD_LITERATURE.",
    performanceIndicators: [
      "Indicator 27.1: Formulate valid scientific hypotheses and evaluate empirical results",
      "Indicator 27.2: Apply mathematical models to solve complex real-world situational challenges",
      "Indicator 27.3: Communicate technical findings through formal written reports and presentations"
    ],
    rubricMasteryThresholdPercent: 80
  },
  {
    standardCode: "STD-GLOB-028",
    gradeBand: "MIDDLE_68",
    subjectArea: "GLOBAL_HISTORY_AND_CIVICS",
    coreCompetencyStatement: "Competency standard 28: Demonstrate rigorous theoretical comprehension and practical laboratory investigation capability in GLOBAL_HISTORY_AND_CIVICS.",
    performanceIndicators: [
      "Indicator 28.1: Formulate valid scientific hypotheses and evaluate empirical results",
      "Indicator 28.2: Apply mathematical models to solve complex real-world situational challenges",
      "Indicator 28.3: Communicate technical findings through formal written reports and presentations"
    ],
    rubricMasteryThresholdPercent: 80
  },
  {
    standardCode: "STD-COMM-029",
    gradeBand: "MIDDLE_68",
    subjectArea: "COMMERCE_AND_FINANCE",
    coreCompetencyStatement: "Competency standard 29: Demonstrate rigorous theoretical comprehension and practical laboratory investigation capability in COMMERCE_AND_FINANCE.",
    performanceIndicators: [
      "Indicator 29.1: Formulate valid scientific hypotheses and evaluate empirical results",
      "Indicator 29.2: Apply mathematical models to solve complex real-world situational challenges",
      "Indicator 29.3: Communicate technical findings through formal written reports and presentations"
    ],
    rubricMasteryThresholdPercent: 80
  },
  {
    standardCode: "STD-PHYS-030",
    gradeBand: "MIDDLE_68",
    subjectArea: "PHYSICAL_SCIENCES",
    coreCompetencyStatement: "Competency standard 30: Demonstrate rigorous theoretical comprehension and practical laboratory investigation capability in PHYSICAL_SCIENCES.",
    performanceIndicators: [
      "Indicator 30.1: Formulate valid scientific hypotheses and evaluate empirical results",
      "Indicator 30.2: Apply mathematical models to solve complex real-world situational challenges",
      "Indicator 30.3: Communicate technical findings through formal written reports and presentations"
    ],
    rubricMasteryThresholdPercent: 80
  },
  {
    standardCode: "STD-MATH-031",
    gradeBand: "MIDDLE_68",
    subjectArea: "MATHEMATICS_AND_STATISTICS",
    coreCompetencyStatement: "Competency standard 31: Demonstrate rigorous theoretical comprehension and practical laboratory investigation capability in MATHEMATICS_AND_STATISTICS.",
    performanceIndicators: [
      "Indicator 31.1: Formulate valid scientific hypotheses and evaluate empirical results",
      "Indicator 31.2: Apply mathematical models to solve complex real-world situational challenges",
      "Indicator 31.3: Communicate technical findings through formal written reports and presentations"
    ],
    rubricMasteryThresholdPercent: 80
  },
  {
    standardCode: "STD-COMP-032",
    gradeBand: "MIDDLE_68",
    subjectArea: "COMPUTER_SCIENCE_AND_AI",
    coreCompetencyStatement: "Competency standard 32: Demonstrate rigorous theoretical comprehension and practical laboratory investigation capability in COMPUTER_SCIENCE_AND_AI.",
    performanceIndicators: [
      "Indicator 32.1: Formulate valid scientific hypotheses and evaluate empirical results",
      "Indicator 32.2: Apply mathematical models to solve complex real-world situational challenges",
      "Indicator 32.3: Communicate technical findings through formal written reports and presentations"
    ],
    rubricMasteryThresholdPercent: 80
  },
  {
    standardCode: "STD-WORL-033",
    gradeBand: "MIDDLE_68",
    subjectArea: "WORLD_LITERATURE",
    coreCompetencyStatement: "Competency standard 33: Demonstrate rigorous theoretical comprehension and practical laboratory investigation capability in WORLD_LITERATURE.",
    performanceIndicators: [
      "Indicator 33.1: Formulate valid scientific hypotheses and evaluate empirical results",
      "Indicator 33.2: Apply mathematical models to solve complex real-world situational challenges",
      "Indicator 33.3: Communicate technical findings through formal written reports and presentations"
    ],
    rubricMasteryThresholdPercent: 80
  },
  {
    standardCode: "STD-GLOB-034",
    gradeBand: "MIDDLE_68",
    subjectArea: "GLOBAL_HISTORY_AND_CIVICS",
    coreCompetencyStatement: "Competency standard 34: Demonstrate rigorous theoretical comprehension and practical laboratory investigation capability in GLOBAL_HISTORY_AND_CIVICS.",
    performanceIndicators: [
      "Indicator 34.1: Formulate valid scientific hypotheses and evaluate empirical results",
      "Indicator 34.2: Apply mathematical models to solve complex real-world situational challenges",
      "Indicator 34.3: Communicate technical findings through formal written reports and presentations"
    ],
    rubricMasteryThresholdPercent: 80
  },
  {
    standardCode: "STD-COMM-035",
    gradeBand: "MIDDLE_68",
    subjectArea: "COMMERCE_AND_FINANCE",
    coreCompetencyStatement: "Competency standard 35: Demonstrate rigorous theoretical comprehension and practical laboratory investigation capability in COMMERCE_AND_FINANCE.",
    performanceIndicators: [
      "Indicator 35.1: Formulate valid scientific hypotheses and evaluate empirical results",
      "Indicator 35.2: Apply mathematical models to solve complex real-world situational challenges",
      "Indicator 35.3: Communicate technical findings through formal written reports and presentations"
    ],
    rubricMasteryThresholdPercent: 80
  },
  {
    standardCode: "STD-PHYS-036",
    gradeBand: "MIDDLE_68",
    subjectArea: "PHYSICAL_SCIENCES",
    coreCompetencyStatement: "Competency standard 36: Demonstrate rigorous theoretical comprehension and practical laboratory investigation capability in PHYSICAL_SCIENCES.",
    performanceIndicators: [
      "Indicator 36.1: Formulate valid scientific hypotheses and evaluate empirical results",
      "Indicator 36.2: Apply mathematical models to solve complex real-world situational challenges",
      "Indicator 36.3: Communicate technical findings through formal written reports and presentations"
    ],
    rubricMasteryThresholdPercent: 80
  },
  {
    standardCode: "STD-MATH-037",
    gradeBand: "MIDDLE_68",
    subjectArea: "MATHEMATICS_AND_STATISTICS",
    coreCompetencyStatement: "Competency standard 37: Demonstrate rigorous theoretical comprehension and practical laboratory investigation capability in MATHEMATICS_AND_STATISTICS.",
    performanceIndicators: [
      "Indicator 37.1: Formulate valid scientific hypotheses and evaluate empirical results",
      "Indicator 37.2: Apply mathematical models to solve complex real-world situational challenges",
      "Indicator 37.3: Communicate technical findings through formal written reports and presentations"
    ],
    rubricMasteryThresholdPercent: 80
  },
  {
    standardCode: "STD-COMP-038",
    gradeBand: "MIDDLE_68",
    subjectArea: "COMPUTER_SCIENCE_AND_AI",
    coreCompetencyStatement: "Competency standard 38: Demonstrate rigorous theoretical comprehension and practical laboratory investigation capability in COMPUTER_SCIENCE_AND_AI.",
    performanceIndicators: [
      "Indicator 38.1: Formulate valid scientific hypotheses and evaluate empirical results",
      "Indicator 38.2: Apply mathematical models to solve complex real-world situational challenges",
      "Indicator 38.3: Communicate technical findings through formal written reports and presentations"
    ],
    rubricMasteryThresholdPercent: 80
  },
  {
    standardCode: "STD-WORL-039",
    gradeBand: "MIDDLE_68",
    subjectArea: "WORLD_LITERATURE",
    coreCompetencyStatement: "Competency standard 39: Demonstrate rigorous theoretical comprehension and practical laboratory investigation capability in WORLD_LITERATURE.",
    performanceIndicators: [
      "Indicator 39.1: Formulate valid scientific hypotheses and evaluate empirical results",
      "Indicator 39.2: Apply mathematical models to solve complex real-world situational challenges",
      "Indicator 39.3: Communicate technical findings through formal written reports and presentations"
    ],
    rubricMasteryThresholdPercent: 80
  },
  {
    standardCode: "STD-GLOB-040",
    gradeBand: "SECONDARY_910",
    subjectArea: "GLOBAL_HISTORY_AND_CIVICS",
    coreCompetencyStatement: "Competency standard 40: Demonstrate rigorous theoretical comprehension and practical laboratory investigation capability in GLOBAL_HISTORY_AND_CIVICS.",
    performanceIndicators: [
      "Indicator 40.1: Formulate valid scientific hypotheses and evaluate empirical results",
      "Indicator 40.2: Apply mathematical models to solve complex real-world situational challenges",
      "Indicator 40.3: Communicate technical findings through formal written reports and presentations"
    ],
    rubricMasteryThresholdPercent: 80
  },
  {
    standardCode: "STD-COMM-041",
    gradeBand: "SECONDARY_910",
    subjectArea: "COMMERCE_AND_FINANCE",
    coreCompetencyStatement: "Competency standard 41: Demonstrate rigorous theoretical comprehension and practical laboratory investigation capability in COMMERCE_AND_FINANCE.",
    performanceIndicators: [
      "Indicator 41.1: Formulate valid scientific hypotheses and evaluate empirical results",
      "Indicator 41.2: Apply mathematical models to solve complex real-world situational challenges",
      "Indicator 41.3: Communicate technical findings through formal written reports and presentations"
    ],
    rubricMasteryThresholdPercent: 80
  },
  {
    standardCode: "STD-PHYS-042",
    gradeBand: "SECONDARY_910",
    subjectArea: "PHYSICAL_SCIENCES",
    coreCompetencyStatement: "Competency standard 42: Demonstrate rigorous theoretical comprehension and practical laboratory investigation capability in PHYSICAL_SCIENCES.",
    performanceIndicators: [
      "Indicator 42.1: Formulate valid scientific hypotheses and evaluate empirical results",
      "Indicator 42.2: Apply mathematical models to solve complex real-world situational challenges",
      "Indicator 42.3: Communicate technical findings through formal written reports and presentations"
    ],
    rubricMasteryThresholdPercent: 80
  },
  {
    standardCode: "STD-MATH-043",
    gradeBand: "SECONDARY_910",
    subjectArea: "MATHEMATICS_AND_STATISTICS",
    coreCompetencyStatement: "Competency standard 43: Demonstrate rigorous theoretical comprehension and practical laboratory investigation capability in MATHEMATICS_AND_STATISTICS.",
    performanceIndicators: [
      "Indicator 43.1: Formulate valid scientific hypotheses and evaluate empirical results",
      "Indicator 43.2: Apply mathematical models to solve complex real-world situational challenges",
      "Indicator 43.3: Communicate technical findings through formal written reports and presentations"
    ],
    rubricMasteryThresholdPercent: 80
  },
  {
    standardCode: "STD-COMP-044",
    gradeBand: "SECONDARY_910",
    subjectArea: "COMPUTER_SCIENCE_AND_AI",
    coreCompetencyStatement: "Competency standard 44: Demonstrate rigorous theoretical comprehension and practical laboratory investigation capability in COMPUTER_SCIENCE_AND_AI.",
    performanceIndicators: [
      "Indicator 44.1: Formulate valid scientific hypotheses and evaluate empirical results",
      "Indicator 44.2: Apply mathematical models to solve complex real-world situational challenges",
      "Indicator 44.3: Communicate technical findings through formal written reports and presentations"
    ],
    rubricMasteryThresholdPercent: 80
  },
  {
    standardCode: "STD-WORL-045",
    gradeBand: "SECONDARY_910",
    subjectArea: "WORLD_LITERATURE",
    coreCompetencyStatement: "Competency standard 45: Demonstrate rigorous theoretical comprehension and practical laboratory investigation capability in WORLD_LITERATURE.",
    performanceIndicators: [
      "Indicator 45.1: Formulate valid scientific hypotheses and evaluate empirical results",
      "Indicator 45.2: Apply mathematical models to solve complex real-world situational challenges",
      "Indicator 45.3: Communicate technical findings through formal written reports and presentations"
    ],
    rubricMasteryThresholdPercent: 80
  },
  {
    standardCode: "STD-GLOB-046",
    gradeBand: "SECONDARY_910",
    subjectArea: "GLOBAL_HISTORY_AND_CIVICS",
    coreCompetencyStatement: "Competency standard 46: Demonstrate rigorous theoretical comprehension and practical laboratory investigation capability in GLOBAL_HISTORY_AND_CIVICS.",
    performanceIndicators: [
      "Indicator 46.1: Formulate valid scientific hypotheses and evaluate empirical results",
      "Indicator 46.2: Apply mathematical models to solve complex real-world situational challenges",
      "Indicator 46.3: Communicate technical findings through formal written reports and presentations"
    ],
    rubricMasteryThresholdPercent: 80
  },
  {
    standardCode: "STD-COMM-047",
    gradeBand: "SECONDARY_910",
    subjectArea: "COMMERCE_AND_FINANCE",
    coreCompetencyStatement: "Competency standard 47: Demonstrate rigorous theoretical comprehension and practical laboratory investigation capability in COMMERCE_AND_FINANCE.",
    performanceIndicators: [
      "Indicator 47.1: Formulate valid scientific hypotheses and evaluate empirical results",
      "Indicator 47.2: Apply mathematical models to solve complex real-world situational challenges",
      "Indicator 47.3: Communicate technical findings through formal written reports and presentations"
    ],
    rubricMasteryThresholdPercent: 80
  },
  {
    standardCode: "STD-PHYS-048",
    gradeBand: "SECONDARY_910",
    subjectArea: "PHYSICAL_SCIENCES",
    coreCompetencyStatement: "Competency standard 48: Demonstrate rigorous theoretical comprehension and practical laboratory investigation capability in PHYSICAL_SCIENCES.",
    performanceIndicators: [
      "Indicator 48.1: Formulate valid scientific hypotheses and evaluate empirical results",
      "Indicator 48.2: Apply mathematical models to solve complex real-world situational challenges",
      "Indicator 48.3: Communicate technical findings through formal written reports and presentations"
    ],
    rubricMasteryThresholdPercent: 80
  },
  {
    standardCode: "STD-MATH-049",
    gradeBand: "SECONDARY_910",
    subjectArea: "MATHEMATICS_AND_STATISTICS",
    coreCompetencyStatement: "Competency standard 49: Demonstrate rigorous theoretical comprehension and practical laboratory investigation capability in MATHEMATICS_AND_STATISTICS.",
    performanceIndicators: [
      "Indicator 49.1: Formulate valid scientific hypotheses and evaluate empirical results",
      "Indicator 49.2: Apply mathematical models to solve complex real-world situational challenges",
      "Indicator 49.3: Communicate technical findings through formal written reports and presentations"
    ],
    rubricMasteryThresholdPercent: 80
  },
  {
    standardCode: "STD-COMP-050",
    gradeBand: "SECONDARY_910",
    subjectArea: "COMPUTER_SCIENCE_AND_AI",
    coreCompetencyStatement: "Competency standard 50: Demonstrate rigorous theoretical comprehension and practical laboratory investigation capability in COMPUTER_SCIENCE_AND_AI.",
    performanceIndicators: [
      "Indicator 50.1: Formulate valid scientific hypotheses and evaluate empirical results",
      "Indicator 50.2: Apply mathematical models to solve complex real-world situational challenges",
      "Indicator 50.3: Communicate technical findings through formal written reports and presentations"
    ],
    rubricMasteryThresholdPercent: 80
  },
  {
    standardCode: "STD-WORL-051",
    gradeBand: "SECONDARY_910",
    subjectArea: "WORLD_LITERATURE",
    coreCompetencyStatement: "Competency standard 51: Demonstrate rigorous theoretical comprehension and practical laboratory investigation capability in WORLD_LITERATURE.",
    performanceIndicators: [
      "Indicator 51.1: Formulate valid scientific hypotheses and evaluate empirical results",
      "Indicator 51.2: Apply mathematical models to solve complex real-world situational challenges",
      "Indicator 51.3: Communicate technical findings through formal written reports and presentations"
    ],
    rubricMasteryThresholdPercent: 80
  },
  {
    standardCode: "STD-GLOB-052",
    gradeBand: "SECONDARY_910",
    subjectArea: "GLOBAL_HISTORY_AND_CIVICS",
    coreCompetencyStatement: "Competency standard 52: Demonstrate rigorous theoretical comprehension and practical laboratory investigation capability in GLOBAL_HISTORY_AND_CIVICS.",
    performanceIndicators: [
      "Indicator 52.1: Formulate valid scientific hypotheses and evaluate empirical results",
      "Indicator 52.2: Apply mathematical models to solve complex real-world situational challenges",
      "Indicator 52.3: Communicate technical findings through formal written reports and presentations"
    ],
    rubricMasteryThresholdPercent: 80
  },
  {
    standardCode: "STD-COMM-053",
    gradeBand: "SECONDARY_910",
    subjectArea: "COMMERCE_AND_FINANCE",
    coreCompetencyStatement: "Competency standard 53: Demonstrate rigorous theoretical comprehension and practical laboratory investigation capability in COMMERCE_AND_FINANCE.",
    performanceIndicators: [
      "Indicator 53.1: Formulate valid scientific hypotheses and evaluate empirical results",
      "Indicator 53.2: Apply mathematical models to solve complex real-world situational challenges",
      "Indicator 53.3: Communicate technical findings through formal written reports and presentations"
    ],
    rubricMasteryThresholdPercent: 80
  },
  {
    standardCode: "STD-PHYS-054",
    gradeBand: "SECONDARY_910",
    subjectArea: "PHYSICAL_SCIENCES",
    coreCompetencyStatement: "Competency standard 54: Demonstrate rigorous theoretical comprehension and practical laboratory investigation capability in PHYSICAL_SCIENCES.",
    performanceIndicators: [
      "Indicator 54.1: Formulate valid scientific hypotheses and evaluate empirical results",
      "Indicator 54.2: Apply mathematical models to solve complex real-world situational challenges",
      "Indicator 54.3: Communicate technical findings through formal written reports and presentations"
    ],
    rubricMasteryThresholdPercent: 80
  },
  {
    standardCode: "STD-MATH-055",
    gradeBand: "SECONDARY_910",
    subjectArea: "MATHEMATICS_AND_STATISTICS",
    coreCompetencyStatement: "Competency standard 55: Demonstrate rigorous theoretical comprehension and practical laboratory investigation capability in MATHEMATICS_AND_STATISTICS.",
    performanceIndicators: [
      "Indicator 55.1: Formulate valid scientific hypotheses and evaluate empirical results",
      "Indicator 55.2: Apply mathematical models to solve complex real-world situational challenges",
      "Indicator 55.3: Communicate technical findings through formal written reports and presentations"
    ],
    rubricMasteryThresholdPercent: 80
  },
  {
    standardCode: "STD-COMP-056",
    gradeBand: "SECONDARY_910",
    subjectArea: "COMPUTER_SCIENCE_AND_AI",
    coreCompetencyStatement: "Competency standard 56: Demonstrate rigorous theoretical comprehension and practical laboratory investigation capability in COMPUTER_SCIENCE_AND_AI.",
    performanceIndicators: [
      "Indicator 56.1: Formulate valid scientific hypotheses and evaluate empirical results",
      "Indicator 56.2: Apply mathematical models to solve complex real-world situational challenges",
      "Indicator 56.3: Communicate technical findings through formal written reports and presentations"
    ],
    rubricMasteryThresholdPercent: 80
  },
  {
    standardCode: "STD-WORL-057",
    gradeBand: "SECONDARY_910",
    subjectArea: "WORLD_LITERATURE",
    coreCompetencyStatement: "Competency standard 57: Demonstrate rigorous theoretical comprehension and practical laboratory investigation capability in WORLD_LITERATURE.",
    performanceIndicators: [
      "Indicator 57.1: Formulate valid scientific hypotheses and evaluate empirical results",
      "Indicator 57.2: Apply mathematical models to solve complex real-world situational challenges",
      "Indicator 57.3: Communicate technical findings through formal written reports and presentations"
    ],
    rubricMasteryThresholdPercent: 80
  },
  {
    standardCode: "STD-GLOB-058",
    gradeBand: "SECONDARY_910",
    subjectArea: "GLOBAL_HISTORY_AND_CIVICS",
    coreCompetencyStatement: "Competency standard 58: Demonstrate rigorous theoretical comprehension and practical laboratory investigation capability in GLOBAL_HISTORY_AND_CIVICS.",
    performanceIndicators: [
      "Indicator 58.1: Formulate valid scientific hypotheses and evaluate empirical results",
      "Indicator 58.2: Apply mathematical models to solve complex real-world situational challenges",
      "Indicator 58.3: Communicate technical findings through formal written reports and presentations"
    ],
    rubricMasteryThresholdPercent: 80
  },
  {
    standardCode: "STD-COMM-059",
    gradeBand: "SECONDARY_910",
    subjectArea: "COMMERCE_AND_FINANCE",
    coreCompetencyStatement: "Competency standard 59: Demonstrate rigorous theoretical comprehension and practical laboratory investigation capability in COMMERCE_AND_FINANCE.",
    performanceIndicators: [
      "Indicator 59.1: Formulate valid scientific hypotheses and evaluate empirical results",
      "Indicator 59.2: Apply mathematical models to solve complex real-world situational challenges",
      "Indicator 59.3: Communicate technical findings through formal written reports and presentations"
    ],
    rubricMasteryThresholdPercent: 80
  },
  {
    standardCode: "STD-PHYS-060",
    gradeBand: "SECONDARY_910",
    subjectArea: "PHYSICAL_SCIENCES",
    coreCompetencyStatement: "Competency standard 60: Demonstrate rigorous theoretical comprehension and practical laboratory investigation capability in PHYSICAL_SCIENCES.",
    performanceIndicators: [
      "Indicator 60.1: Formulate valid scientific hypotheses and evaluate empirical results",
      "Indicator 60.2: Apply mathematical models to solve complex real-world situational challenges",
      "Indicator 60.3: Communicate technical findings through formal written reports and presentations"
    ],
    rubricMasteryThresholdPercent: 80
  },
  {
    standardCode: "STD-MATH-061",
    gradeBand: "SECONDARY_910",
    subjectArea: "MATHEMATICS_AND_STATISTICS",
    coreCompetencyStatement: "Competency standard 61: Demonstrate rigorous theoretical comprehension and practical laboratory investigation capability in MATHEMATICS_AND_STATISTICS.",
    performanceIndicators: [
      "Indicator 61.1: Formulate valid scientific hypotheses and evaluate empirical results",
      "Indicator 61.2: Apply mathematical models to solve complex real-world situational challenges",
      "Indicator 61.3: Communicate technical findings through formal written reports and presentations"
    ],
    rubricMasteryThresholdPercent: 80
  },
  {
    standardCode: "STD-COMP-062",
    gradeBand: "SECONDARY_910",
    subjectArea: "COMPUTER_SCIENCE_AND_AI",
    coreCompetencyStatement: "Competency standard 62: Demonstrate rigorous theoretical comprehension and practical laboratory investigation capability in COMPUTER_SCIENCE_AND_AI.",
    performanceIndicators: [
      "Indicator 62.1: Formulate valid scientific hypotheses and evaluate empirical results",
      "Indicator 62.2: Apply mathematical models to solve complex real-world situational challenges",
      "Indicator 62.3: Communicate technical findings through formal written reports and presentations"
    ],
    rubricMasteryThresholdPercent: 80
  },
  {
    standardCode: "STD-WORL-063",
    gradeBand: "SECONDARY_910",
    subjectArea: "WORLD_LITERATURE",
    coreCompetencyStatement: "Competency standard 63: Demonstrate rigorous theoretical comprehension and practical laboratory investigation capability in WORLD_LITERATURE.",
    performanceIndicators: [
      "Indicator 63.1: Formulate valid scientific hypotheses and evaluate empirical results",
      "Indicator 63.2: Apply mathematical models to solve complex real-world situational challenges",
      "Indicator 63.3: Communicate technical findings through formal written reports and presentations"
    ],
    rubricMasteryThresholdPercent: 80
  },
  {
    standardCode: "STD-GLOB-064",
    gradeBand: "SECONDARY_910",
    subjectArea: "GLOBAL_HISTORY_AND_CIVICS",
    coreCompetencyStatement: "Competency standard 64: Demonstrate rigorous theoretical comprehension and practical laboratory investigation capability in GLOBAL_HISTORY_AND_CIVICS.",
    performanceIndicators: [
      "Indicator 64.1: Formulate valid scientific hypotheses and evaluate empirical results",
      "Indicator 64.2: Apply mathematical models to solve complex real-world situational challenges",
      "Indicator 64.3: Communicate technical findings through formal written reports and presentations"
    ],
    rubricMasteryThresholdPercent: 80
  },
  {
    standardCode: "STD-COMM-065",
    gradeBand: "HIGHER_1112",
    subjectArea: "COMMERCE_AND_FINANCE",
    coreCompetencyStatement: "Competency standard 65: Demonstrate rigorous theoretical comprehension and practical laboratory investigation capability in COMMERCE_AND_FINANCE.",
    performanceIndicators: [
      "Indicator 65.1: Formulate valid scientific hypotheses and evaluate empirical results",
      "Indicator 65.2: Apply mathematical models to solve complex real-world situational challenges",
      "Indicator 65.3: Communicate technical findings through formal written reports and presentations"
    ],
    rubricMasteryThresholdPercent: 80
  },
  {
    standardCode: "STD-PHYS-066",
    gradeBand: "HIGHER_1112",
    subjectArea: "PHYSICAL_SCIENCES",
    coreCompetencyStatement: "Competency standard 66: Demonstrate rigorous theoretical comprehension and practical laboratory investigation capability in PHYSICAL_SCIENCES.",
    performanceIndicators: [
      "Indicator 66.1: Formulate valid scientific hypotheses and evaluate empirical results",
      "Indicator 66.2: Apply mathematical models to solve complex real-world situational challenges",
      "Indicator 66.3: Communicate technical findings through formal written reports and presentations"
    ],
    rubricMasteryThresholdPercent: 80
  },
  {
    standardCode: "STD-MATH-067",
    gradeBand: "HIGHER_1112",
    subjectArea: "MATHEMATICS_AND_STATISTICS",
    coreCompetencyStatement: "Competency standard 67: Demonstrate rigorous theoretical comprehension and practical laboratory investigation capability in MATHEMATICS_AND_STATISTICS.",
    performanceIndicators: [
      "Indicator 67.1: Formulate valid scientific hypotheses and evaluate empirical results",
      "Indicator 67.2: Apply mathematical models to solve complex real-world situational challenges",
      "Indicator 67.3: Communicate technical findings through formal written reports and presentations"
    ],
    rubricMasteryThresholdPercent: 80
  },
  {
    standardCode: "STD-COMP-068",
    gradeBand: "HIGHER_1112",
    subjectArea: "COMPUTER_SCIENCE_AND_AI",
    coreCompetencyStatement: "Competency standard 68: Demonstrate rigorous theoretical comprehension and practical laboratory investigation capability in COMPUTER_SCIENCE_AND_AI.",
    performanceIndicators: [
      "Indicator 68.1: Formulate valid scientific hypotheses and evaluate empirical results",
      "Indicator 68.2: Apply mathematical models to solve complex real-world situational challenges",
      "Indicator 68.3: Communicate technical findings through formal written reports and presentations"
    ],
    rubricMasteryThresholdPercent: 80
  },
  {
    standardCode: "STD-WORL-069",
    gradeBand: "HIGHER_1112",
    subjectArea: "WORLD_LITERATURE",
    coreCompetencyStatement: "Competency standard 69: Demonstrate rigorous theoretical comprehension and practical laboratory investigation capability in WORLD_LITERATURE.",
    performanceIndicators: [
      "Indicator 69.1: Formulate valid scientific hypotheses and evaluate empirical results",
      "Indicator 69.2: Apply mathematical models to solve complex real-world situational challenges",
      "Indicator 69.3: Communicate technical findings through formal written reports and presentations"
    ],
    rubricMasteryThresholdPercent: 80
  },
  {
    standardCode: "STD-GLOB-070",
    gradeBand: "HIGHER_1112",
    subjectArea: "GLOBAL_HISTORY_AND_CIVICS",
    coreCompetencyStatement: "Competency standard 70: Demonstrate rigorous theoretical comprehension and practical laboratory investigation capability in GLOBAL_HISTORY_AND_CIVICS.",
    performanceIndicators: [
      "Indicator 70.1: Formulate valid scientific hypotheses and evaluate empirical results",
      "Indicator 70.2: Apply mathematical models to solve complex real-world situational challenges",
      "Indicator 70.3: Communicate technical findings through formal written reports and presentations"
    ],
    rubricMasteryThresholdPercent: 80
  },
  {
    standardCode: "STD-COMM-071",
    gradeBand: "HIGHER_1112",
    subjectArea: "COMMERCE_AND_FINANCE",
    coreCompetencyStatement: "Competency standard 71: Demonstrate rigorous theoretical comprehension and practical laboratory investigation capability in COMMERCE_AND_FINANCE.",
    performanceIndicators: [
      "Indicator 71.1: Formulate valid scientific hypotheses and evaluate empirical results",
      "Indicator 71.2: Apply mathematical models to solve complex real-world situational challenges",
      "Indicator 71.3: Communicate technical findings through formal written reports and presentations"
    ],
    rubricMasteryThresholdPercent: 80
  },
  {
    standardCode: "STD-PHYS-072",
    gradeBand: "HIGHER_1112",
    subjectArea: "PHYSICAL_SCIENCES",
    coreCompetencyStatement: "Competency standard 72: Demonstrate rigorous theoretical comprehension and practical laboratory investigation capability in PHYSICAL_SCIENCES.",
    performanceIndicators: [
      "Indicator 72.1: Formulate valid scientific hypotheses and evaluate empirical results",
      "Indicator 72.2: Apply mathematical models to solve complex real-world situational challenges",
      "Indicator 72.3: Communicate technical findings through formal written reports and presentations"
    ],
    rubricMasteryThresholdPercent: 80
  },
  {
    standardCode: "STD-MATH-073",
    gradeBand: "HIGHER_1112",
    subjectArea: "MATHEMATICS_AND_STATISTICS",
    coreCompetencyStatement: "Competency standard 73: Demonstrate rigorous theoretical comprehension and practical laboratory investigation capability in MATHEMATICS_AND_STATISTICS.",
    performanceIndicators: [
      "Indicator 73.1: Formulate valid scientific hypotheses and evaluate empirical results",
      "Indicator 73.2: Apply mathematical models to solve complex real-world situational challenges",
      "Indicator 73.3: Communicate technical findings through formal written reports and presentations"
    ],
    rubricMasteryThresholdPercent: 80
  },
  {
    standardCode: "STD-COMP-074",
    gradeBand: "HIGHER_1112",
    subjectArea: "COMPUTER_SCIENCE_AND_AI",
    coreCompetencyStatement: "Competency standard 74: Demonstrate rigorous theoretical comprehension and practical laboratory investigation capability in COMPUTER_SCIENCE_AND_AI.",
    performanceIndicators: [
      "Indicator 74.1: Formulate valid scientific hypotheses and evaluate empirical results",
      "Indicator 74.2: Apply mathematical models to solve complex real-world situational challenges",
      "Indicator 74.3: Communicate technical findings through formal written reports and presentations"
    ],
    rubricMasteryThresholdPercent: 80
  },
  {
    standardCode: "STD-WORL-075",
    gradeBand: "HIGHER_1112",
    subjectArea: "WORLD_LITERATURE",
    coreCompetencyStatement: "Competency standard 75: Demonstrate rigorous theoretical comprehension and practical laboratory investigation capability in WORLD_LITERATURE.",
    performanceIndicators: [
      "Indicator 75.1: Formulate valid scientific hypotheses and evaluate empirical results",
      "Indicator 75.2: Apply mathematical models to solve complex real-world situational challenges",
      "Indicator 75.3: Communicate technical findings through formal written reports and presentations"
    ],
    rubricMasteryThresholdPercent: 80
  },
  {
    standardCode: "STD-GLOB-076",
    gradeBand: "HIGHER_1112",
    subjectArea: "GLOBAL_HISTORY_AND_CIVICS",
    coreCompetencyStatement: "Competency standard 76: Demonstrate rigorous theoretical comprehension and practical laboratory investigation capability in GLOBAL_HISTORY_AND_CIVICS.",
    performanceIndicators: [
      "Indicator 76.1: Formulate valid scientific hypotheses and evaluate empirical results",
      "Indicator 76.2: Apply mathematical models to solve complex real-world situational challenges",
      "Indicator 76.3: Communicate technical findings through formal written reports and presentations"
    ],
    rubricMasteryThresholdPercent: 80
  },
  {
    standardCode: "STD-COMM-077",
    gradeBand: "HIGHER_1112",
    subjectArea: "COMMERCE_AND_FINANCE",
    coreCompetencyStatement: "Competency standard 77: Demonstrate rigorous theoretical comprehension and practical laboratory investigation capability in COMMERCE_AND_FINANCE.",
    performanceIndicators: [
      "Indicator 77.1: Formulate valid scientific hypotheses and evaluate empirical results",
      "Indicator 77.2: Apply mathematical models to solve complex real-world situational challenges",
      "Indicator 77.3: Communicate technical findings through formal written reports and presentations"
    ],
    rubricMasteryThresholdPercent: 80
  },
  {
    standardCode: "STD-PHYS-078",
    gradeBand: "HIGHER_1112",
    subjectArea: "PHYSICAL_SCIENCES",
    coreCompetencyStatement: "Competency standard 78: Demonstrate rigorous theoretical comprehension and practical laboratory investigation capability in PHYSICAL_SCIENCES.",
    performanceIndicators: [
      "Indicator 78.1: Formulate valid scientific hypotheses and evaluate empirical results",
      "Indicator 78.2: Apply mathematical models to solve complex real-world situational challenges",
      "Indicator 78.3: Communicate technical findings through formal written reports and presentations"
    ],
    rubricMasteryThresholdPercent: 80
  },
  {
    standardCode: "STD-MATH-079",
    gradeBand: "HIGHER_1112",
    subjectArea: "MATHEMATICS_AND_STATISTICS",
    coreCompetencyStatement: "Competency standard 79: Demonstrate rigorous theoretical comprehension and practical laboratory investigation capability in MATHEMATICS_AND_STATISTICS.",
    performanceIndicators: [
      "Indicator 79.1: Formulate valid scientific hypotheses and evaluate empirical results",
      "Indicator 79.2: Apply mathematical models to solve complex real-world situational challenges",
      "Indicator 79.3: Communicate technical findings through formal written reports and presentations"
    ],
    rubricMasteryThresholdPercent: 80
  },
  {
    standardCode: "STD-COMP-080",
    gradeBand: "HIGHER_1112",
    subjectArea: "COMPUTER_SCIENCE_AND_AI",
    coreCompetencyStatement: "Competency standard 80: Demonstrate rigorous theoretical comprehension and practical laboratory investigation capability in COMPUTER_SCIENCE_AND_AI.",
    performanceIndicators: [
      "Indicator 80.1: Formulate valid scientific hypotheses and evaluate empirical results",
      "Indicator 80.2: Apply mathematical models to solve complex real-world situational challenges",
      "Indicator 80.3: Communicate technical findings through formal written reports and presentations"
    ],
    rubricMasteryThresholdPercent: 80
  },
];

export class CurriculumStandardsService {
  public static getAllStandards(): CurriculumStandardBenchmark[] {
    return MASTER_CURRICULUM_BENCHMARKS;
  }
}
