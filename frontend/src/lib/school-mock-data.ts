export interface ComprehensiveStudentSeed {
  id: string;
  admissionNo: string;
  rollNo: string;
  fullName: string;
  gradeLevel: string;
  section: string;
  gender: 'MALE' | 'FEMALE';
  dateOfBirth: string;
  bloodGroup: string;
  parentName: string;
  parentPhone: string;
  parentEmail: string;
  residentialAddress: string;
  attendancePercentage: number;
  cumulativeGPA: number;
  feeStatus: 'PAID' | 'PARTIAL' | 'OVERDUE';
  busRouteCode: string;
  dormRoom: string | null;
}

export const COMPREHENSIVE_STUDENTS_DATABASE: ComprehensiveStudentSeed[] = Array.from({ length: 150 }, (_, i) => {
  const idNum = (i + 1).toString().padStart(4, '0');
  const grade = i < 30 ? 'Grade 8' : i < 60 ? 'Grade 9' : i < 100 ? 'Grade 10' : i < 130 ? 'Grade 11' : 'Grade 12';
  const section = i % 2 === 0 ? 'Section A' : 'Section B';
  const gpa = Number((3.0 + (Math.sin(i) * 0.9 + 0.9) / 2).toFixed(2));
  const att = Number((88 + (i % 12)).toFixed(1));

  const firstNames = ['Liam', 'Emma', 'Noah', 'Olivia', 'Ethan', 'Sophia', 'Mason', 'Isabella', 'Lucas', 'Mia', 'Aiden', 'Harper', 'James', 'Evelyn'];
  const lastNames = ['Davis', 'Smith', 'Johnson', 'Williams', 'Brown', 'Jones', 'Garcia', 'Miller', 'Wilson', 'Moore', 'Taylor', 'Anderson'];
  const fn = firstNames[i % firstNames.length];
  const ln = lastNames[i % lastNames.length];

  return {
    id: `std-${idNum}`,
    admissionNo: `ADM-2025-${idNum}`,
    rollNo: `${(i % 35) + 101}`,
    fullName: `${fn} ${ln}`,
    gradeLevel: grade,
    section,
    gender: i % 2 === 0 ? 'MALE' : 'FEMALE',
    dateOfBirth: '2009-05-14',
    bloodGroup: i % 4 === 0 ? 'O+' : i % 4 === 1 ? 'A+' : i % 4 === 2 ? 'B+' : 'AB+',
    parentName: `Robert ${ln}`,
    parentPhone: `+1 (555) 01${(i % 90 + 10)}`,
    parentEmail: `parent.${ln.toLowerCase()}${i}@example.com`,
    residentialAddress: `${100 + i} Academic Parkway, Springfield, IL`,
    attendancePercentage: Math.min(100, att),
    cumulativeGPA: Math.min(4.0, gpa),
    feeStatus: i % 5 === 0 ? 'OVERDUE' : i % 7 === 0 ? 'PARTIAL' : 'PAID',
    busRouteCode: `BUS-RT-0${(i % 6) + 1}`,
    dormRoom: i % 3 === 0 ? `RM-20${(i % 8) + 1}` : null,
  };
});

export const MASTER_COURSES_CATALOG = [
  { code: 'PHY-101', title: 'Physics: Kinematics & Electromagnetism', credits: 4, department: 'Science' },
  { code: 'CHM-101', title: 'Chemistry: Atomic Theory & Stoichiometry', credits: 4, department: 'Science' },
  { code: 'BIO-101', title: 'Biology: Cell Structure & Genetics', credits: 4, department: 'Science' },
  { code: 'MTH-101', title: 'Advanced Calculus & Analytical Geometry', credits: 4, department: 'Mathematics' },
  { code: 'ENG-101', title: 'World Literature & Rhetoric Composition', credits: 3, department: 'Languages' },
  { code: 'COM-101', title: 'Computer Science: Algorithms & Python', credits: 4, department: 'Technology' },
  { code: 'ECO-101', title: 'Micro & Macroeconomics Principles', credits: 3, department: 'Commerce' },
  { code: 'HIS-101', title: 'World History: Civilizations & Modernity', credits: 3, department: 'Social Sciences' },
];