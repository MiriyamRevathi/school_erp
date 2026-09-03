export interface StudentSocietyClub {
  clubId: string;
  clubName: string;
  category: 'STEM_AND_ROBOTICS' | 'DEBATE_AND_MODEL_UN' | 'PERFORMING_ARTS' | 'COMMUNITY_SERVICE' | 'ENVIRONMENTAL_ACTION' | 'LITERATURE_AND_JOURNALISM';
  foundingYear: number;
  facultyAdvisorName: string;
  studentPresidentName: string;
  activeMemberCount: number;
  weeklyMeetingSchedule: string;
  meetingLocation: string;
  annualKeyEvents: string[];
  clubMissionStatement: string;
}

export const MASTER_CLUBS_REGISTRY: StudentSocietyClub[] = [
  {
    clubId: "CLB-001",
    clubName: "Greenfield DEBATE AND MODEL UN Society 1",
    category: "DEBATE_AND_MODEL_UN",
    foundingYear: 2012 + (i % 12),
    facultyAdvisorName: "Prof. Sarah Jenkins",
    studentPresidentName: "Scholar Leader 1",
    activeMemberCount: 27,
    weeklyMeetingSchedule: "Every Tuesday 16:00 - 17:30",
    meetingLocation: "Student Center Complex - Room 101",
    annualKeyEvents: [
      "Annual Inter-School Invitational Tournament",
      "Community Outreach & Knowledge Workshop",
      "End-of-Term Project Showcase & Awards Gala"
    ],
    clubMissionStatement: "Fostering collaboration, critical inquiry, and experiential leadership among students passionate about DEBATE_AND_MODEL_UN."
  },
  {
    clubId: "CLB-002",
    clubName: "Greenfield PERFORMING ARTS Society 2",
    category: "PERFORMING_ARTS",
    foundingYear: 2012 + (i % 12),
    facultyAdvisorName: "Prof. Sarah Jenkins",
    studentPresidentName: "Scholar Leader 2",
    activeMemberCount: 29,
    weeklyMeetingSchedule: "Every Tuesday 16:00 - 17:30",
    meetingLocation: "Student Center Complex - Room 102",
    annualKeyEvents: [
      "Annual Inter-School Invitational Tournament",
      "Community Outreach & Knowledge Workshop",
      "End-of-Term Project Showcase & Awards Gala"
    ],
    clubMissionStatement: "Fostering collaboration, critical inquiry, and experiential leadership among students passionate about PERFORMING_ARTS."
  },
  {
    clubId: "CLB-003",
    clubName: "Greenfield COMMUNITY SERVICE Society 3",
    category: "COMMUNITY_SERVICE",
    foundingYear: 2012 + (i % 12),
    facultyAdvisorName: "Prof. Sarah Jenkins",
    studentPresidentName: "Scholar Leader 3",
    activeMemberCount: 31,
    weeklyMeetingSchedule: "Every Tuesday 16:00 - 17:30",
    meetingLocation: "Student Center Complex - Room 103",
    annualKeyEvents: [
      "Annual Inter-School Invitational Tournament",
      "Community Outreach & Knowledge Workshop",
      "End-of-Term Project Showcase & Awards Gala"
    ],
    clubMissionStatement: "Fostering collaboration, critical inquiry, and experiential leadership among students passionate about COMMUNITY_SERVICE."
  },
  {
    clubId: "CLB-004",
    clubName: "Greenfield ENVIRONMENTAL ACTION Society 4",
    category: "ENVIRONMENTAL_ACTION",
    foundingYear: 2012 + (i % 12),
    facultyAdvisorName: "Prof. Sarah Jenkins",
    studentPresidentName: "Scholar Leader 4",
    activeMemberCount: 33,
    weeklyMeetingSchedule: "Every Tuesday 16:00 - 17:30",
    meetingLocation: "Student Center Complex - Room 104",
    annualKeyEvents: [
      "Annual Inter-School Invitational Tournament",
      "Community Outreach & Knowledge Workshop",
      "End-of-Term Project Showcase & Awards Gala"
    ],
    clubMissionStatement: "Fostering collaboration, critical inquiry, and experiential leadership among students passionate about ENVIRONMENTAL_ACTION."
  },
  {
    clubId: "CLB-005",
    clubName: "Greenfield LITERATURE AND JOURNALISM Society 5",
    category: "LITERATURE_AND_JOURNALISM",
    foundingYear: 2012 + (i % 12),
    facultyAdvisorName: "Prof. Sarah Jenkins",
    studentPresidentName: "Scholar Leader 5",
    activeMemberCount: 35,
    weeklyMeetingSchedule: "Every Tuesday 16:00 - 17:30",
    meetingLocation: "Student Center Complex - Room 105",
    annualKeyEvents: [
      "Annual Inter-School Invitational Tournament",
      "Community Outreach & Knowledge Workshop",
      "End-of-Term Project Showcase & Awards Gala"
    ],
    clubMissionStatement: "Fostering collaboration, critical inquiry, and experiential leadership among students passionate about LITERATURE_AND_JOURNALISM."
  },
  {
    clubId: "CLB-006",
    clubName: "Greenfield STEM AND ROBOTICS Society 6",
    category: "STEM_AND_ROBOTICS",
    foundingYear: 2012 + (i % 12),
    facultyAdvisorName: "Prof. Sarah Jenkins",
    studentPresidentName: "Scholar Leader 6",
    activeMemberCount: 37,
    weeklyMeetingSchedule: "Every Tuesday 16:00 - 17:30",
    meetingLocation: "Student Center Complex - Room 106",
    annualKeyEvents: [
      "Annual Inter-School Invitational Tournament",
      "Community Outreach & Knowledge Workshop",
      "End-of-Term Project Showcase & Awards Gala"
    ],
    clubMissionStatement: "Fostering collaboration, critical inquiry, and experiential leadership among students passionate about STEM_AND_ROBOTICS."
  },
  {
    clubId: "CLB-007",
    clubName: "Greenfield DEBATE AND MODEL UN Society 7",
    category: "DEBATE_AND_MODEL_UN",
    foundingYear: 2012 + (i % 12),
    facultyAdvisorName: "Prof. Sarah Jenkins",
    studentPresidentName: "Scholar Leader 7",
    activeMemberCount: 39,
    weeklyMeetingSchedule: "Every Tuesday 16:00 - 17:30",
    meetingLocation: "Student Center Complex - Room 107",
    annualKeyEvents: [
      "Annual Inter-School Invitational Tournament",
      "Community Outreach & Knowledge Workshop",
      "End-of-Term Project Showcase & Awards Gala"
    ],
    clubMissionStatement: "Fostering collaboration, critical inquiry, and experiential leadership among students passionate about DEBATE_AND_MODEL_UN."
  },
  {
    clubId: "CLB-008",
    clubName: "Greenfield PERFORMING ARTS Society 8",
    category: "PERFORMING_ARTS",
    foundingYear: 2012 + (i % 12),
    facultyAdvisorName: "Prof. Sarah Jenkins",
    studentPresidentName: "Scholar Leader 8",
    activeMemberCount: 41,
    weeklyMeetingSchedule: "Every Tuesday 16:00 - 17:30",
    meetingLocation: "Student Center Complex - Room 108",
    annualKeyEvents: [
      "Annual Inter-School Invitational Tournament",
      "Community Outreach & Knowledge Workshop",
      "End-of-Term Project Showcase & Awards Gala"
    ],
    clubMissionStatement: "Fostering collaboration, critical inquiry, and experiential leadership among students passionate about PERFORMING_ARTS."
  },
  {
    clubId: "CLB-009",
    clubName: "Greenfield COMMUNITY SERVICE Society 9",
    category: "COMMUNITY_SERVICE",
    foundingYear: 2012 + (i % 12),
    facultyAdvisorName: "Prof. Sarah Jenkins",
    studentPresidentName: "Scholar Leader 9",
    activeMemberCount: 43,
    weeklyMeetingSchedule: "Every Tuesday 16:00 - 17:30",
    meetingLocation: "Student Center Complex - Room 109",
    annualKeyEvents: [
      "Annual Inter-School Invitational Tournament",
      "Community Outreach & Knowledge Workshop",
      "End-of-Term Project Showcase & Awards Gala"
    ],
    clubMissionStatement: "Fostering collaboration, critical inquiry, and experiential leadership among students passionate about COMMUNITY_SERVICE."
  },
  {
    clubId: "CLB-010",
    clubName: "Greenfield ENVIRONMENTAL ACTION Society 10",
    category: "ENVIRONMENTAL_ACTION",
    foundingYear: 2012 + (i % 12),
    facultyAdvisorName: "Prof. Sarah Jenkins",
    studentPresidentName: "Scholar Leader 10",
    activeMemberCount: 45,
    weeklyMeetingSchedule: "Every Tuesday 16:00 - 17:30",
    meetingLocation: "Student Center Complex - Room 110",
    annualKeyEvents: [
      "Annual Inter-School Invitational Tournament",
      "Community Outreach & Knowledge Workshop",
      "End-of-Term Project Showcase & Awards Gala"
    ],
    clubMissionStatement: "Fostering collaboration, critical inquiry, and experiential leadership among students passionate about ENVIRONMENTAL_ACTION."
  },
  {
    clubId: "CLB-011",
    clubName: "Greenfield LITERATURE AND JOURNALISM Society 11",
    category: "LITERATURE_AND_JOURNALISM",
    foundingYear: 2012 + (i % 12),
    facultyAdvisorName: "Prof. Sarah Jenkins",
    studentPresidentName: "Scholar Leader 11",
    activeMemberCount: 47,
    weeklyMeetingSchedule: "Every Tuesday 16:00 - 17:30",
    meetingLocation: "Student Center Complex - Room 111",
    annualKeyEvents: [
      "Annual Inter-School Invitational Tournament",
      "Community Outreach & Knowledge Workshop",
      "End-of-Term Project Showcase & Awards Gala"
    ],
    clubMissionStatement: "Fostering collaboration, critical inquiry, and experiential leadership among students passionate about LITERATURE_AND_JOURNALISM."
  },
  {
    clubId: "CLB-012",
    clubName: "Greenfield STEM AND ROBOTICS Society 12",
    category: "STEM_AND_ROBOTICS",
    foundingYear: 2012 + (i % 12),
    facultyAdvisorName: "Prof. Sarah Jenkins",
    studentPresidentName: "Scholar Leader 12",
    activeMemberCount: 49,
    weeklyMeetingSchedule: "Every Tuesday 16:00 - 17:30",
    meetingLocation: "Student Center Complex - Room 112",
    annualKeyEvents: [
      "Annual Inter-School Invitational Tournament",
      "Community Outreach & Knowledge Workshop",
      "End-of-Term Project Showcase & Awards Gala"
    ],
    clubMissionStatement: "Fostering collaboration, critical inquiry, and experiential leadership among students passionate about STEM_AND_ROBOTICS."
  },
  {
    clubId: "CLB-013",
    clubName: "Greenfield DEBATE AND MODEL UN Society 13",
    category: "DEBATE_AND_MODEL_UN",
    foundingYear: 2012 + (i % 12),
    facultyAdvisorName: "Prof. Sarah Jenkins",
    studentPresidentName: "Scholar Leader 13",
    activeMemberCount: 51,
    weeklyMeetingSchedule: "Every Tuesday 16:00 - 17:30",
    meetingLocation: "Student Center Complex - Room 113",
    annualKeyEvents: [
      "Annual Inter-School Invitational Tournament",
      "Community Outreach & Knowledge Workshop",
      "End-of-Term Project Showcase & Awards Gala"
    ],
    clubMissionStatement: "Fostering collaboration, critical inquiry, and experiential leadership among students passionate about DEBATE_AND_MODEL_UN."
  },
  {
    clubId: "CLB-014",
    clubName: "Greenfield PERFORMING ARTS Society 14",
    category: "PERFORMING_ARTS",
    foundingYear: 2012 + (i % 12),
    facultyAdvisorName: "Prof. Sarah Jenkins",
    studentPresidentName: "Scholar Leader 14",
    activeMemberCount: 53,
    weeklyMeetingSchedule: "Every Tuesday 16:00 - 17:30",
    meetingLocation: "Student Center Complex - Room 114",
    annualKeyEvents: [
      "Annual Inter-School Invitational Tournament",
      "Community Outreach & Knowledge Workshop",
      "End-of-Term Project Showcase & Awards Gala"
    ],
    clubMissionStatement: "Fostering collaboration, critical inquiry, and experiential leadership among students passionate about PERFORMING_ARTS."
  },
  {
    clubId: "CLB-015",
    clubName: "Greenfield COMMUNITY SERVICE Society 15",
    category: "COMMUNITY_SERVICE",
    foundingYear: 2012 + (i % 12),
    facultyAdvisorName: "Prof. Sarah Jenkins",
    studentPresidentName: "Scholar Leader 15",
    activeMemberCount: 55,
    weeklyMeetingSchedule: "Every Tuesday 16:00 - 17:30",
    meetingLocation: "Student Center Complex - Room 115",
    annualKeyEvents: [
      "Annual Inter-School Invitational Tournament",
      "Community Outreach & Knowledge Workshop",
      "End-of-Term Project Showcase & Awards Gala"
    ],
    clubMissionStatement: "Fostering collaboration, critical inquiry, and experiential leadership among students passionate about COMMUNITY_SERVICE."
  },
  {
    clubId: "CLB-016",
    clubName: "Greenfield ENVIRONMENTAL ACTION Society 16",
    category: "ENVIRONMENTAL_ACTION",
    foundingYear: 2012 + (i % 12),
    facultyAdvisorName: "Prof. Sarah Jenkins",
    studentPresidentName: "Scholar Leader 16",
    activeMemberCount: 57,
    weeklyMeetingSchedule: "Every Tuesday 16:00 - 17:30",
    meetingLocation: "Student Center Complex - Room 116",
    annualKeyEvents: [
      "Annual Inter-School Invitational Tournament",
      "Community Outreach & Knowledge Workshop",
      "End-of-Term Project Showcase & Awards Gala"
    ],
    clubMissionStatement: "Fostering collaboration, critical inquiry, and experiential leadership among students passionate about ENVIRONMENTAL_ACTION."
  },
  {
    clubId: "CLB-017",
    clubName: "Greenfield LITERATURE AND JOURNALISM Society 17",
    category: "LITERATURE_AND_JOURNALISM",
    foundingYear: 2012 + (i % 12),
    facultyAdvisorName: "Prof. Sarah Jenkins",
    studentPresidentName: "Scholar Leader 17",
    activeMemberCount: 59,
    weeklyMeetingSchedule: "Every Tuesday 16:00 - 17:30",
    meetingLocation: "Student Center Complex - Room 117",
    annualKeyEvents: [
      "Annual Inter-School Invitational Tournament",
      "Community Outreach & Knowledge Workshop",
      "End-of-Term Project Showcase & Awards Gala"
    ],
    clubMissionStatement: "Fostering collaboration, critical inquiry, and experiential leadership among students passionate about LITERATURE_AND_JOURNALISM."
  },
  {
    clubId: "CLB-018",
    clubName: "Greenfield STEM AND ROBOTICS Society 18",
    category: "STEM_AND_ROBOTICS",
    foundingYear: 2012 + (i % 12),
    facultyAdvisorName: "Prof. Sarah Jenkins",
    studentPresidentName: "Scholar Leader 18",
    activeMemberCount: 61,
    weeklyMeetingSchedule: "Every Tuesday 16:00 - 17:30",
    meetingLocation: "Student Center Complex - Room 118",
    annualKeyEvents: [
      "Annual Inter-School Invitational Tournament",
      "Community Outreach & Knowledge Workshop",
      "End-of-Term Project Showcase & Awards Gala"
    ],
    clubMissionStatement: "Fostering collaboration, critical inquiry, and experiential leadership among students passionate about STEM_AND_ROBOTICS."
  },
  {
    clubId: "CLB-019",
    clubName: "Greenfield DEBATE AND MODEL UN Society 19",
    category: "DEBATE_AND_MODEL_UN",
    foundingYear: 2012 + (i % 12),
    facultyAdvisorName: "Prof. Sarah Jenkins",
    studentPresidentName: "Scholar Leader 19",
    activeMemberCount: 63,
    weeklyMeetingSchedule: "Every Tuesday 16:00 - 17:30",
    meetingLocation: "Student Center Complex - Room 119",
    annualKeyEvents: [
      "Annual Inter-School Invitational Tournament",
      "Community Outreach & Knowledge Workshop",
      "End-of-Term Project Showcase & Awards Gala"
    ],
    clubMissionStatement: "Fostering collaboration, critical inquiry, and experiential leadership among students passionate about DEBATE_AND_MODEL_UN."
  },
  {
    clubId: "CLB-020",
    clubName: "Greenfield PERFORMING ARTS Society 20",
    category: "PERFORMING_ARTS",
    foundingYear: 2012 + (i % 12),
    facultyAdvisorName: "Prof. Sarah Jenkins",
    studentPresidentName: "Scholar Leader 20",
    activeMemberCount: 65,
    weeklyMeetingSchedule: "Every Tuesday 16:00 - 17:30",
    meetingLocation: "Student Center Complex - Room 120",
    annualKeyEvents: [
      "Annual Inter-School Invitational Tournament",
      "Community Outreach & Knowledge Workshop",
      "End-of-Term Project Showcase & Awards Gala"
    ],
    clubMissionStatement: "Fostering collaboration, critical inquiry, and experiential leadership among students passionate about PERFORMING_ARTS."
  },
  {
    clubId: "CLB-021",
    clubName: "Greenfield COMMUNITY SERVICE Society 21",
    category: "COMMUNITY_SERVICE",
    foundingYear: 2012 + (i % 12),
    facultyAdvisorName: "Prof. Sarah Jenkins",
    studentPresidentName: "Scholar Leader 21",
    activeMemberCount: 67,
    weeklyMeetingSchedule: "Every Tuesday 16:00 - 17:30",
    meetingLocation: "Student Center Complex - Room 121",
    annualKeyEvents: [
      "Annual Inter-School Invitational Tournament",
      "Community Outreach & Knowledge Workshop",
      "End-of-Term Project Showcase & Awards Gala"
    ],
    clubMissionStatement: "Fostering collaboration, critical inquiry, and experiential leadership among students passionate about COMMUNITY_SERVICE."
  },
  {
    clubId: "CLB-022",
    clubName: "Greenfield ENVIRONMENTAL ACTION Society 22",
    category: "ENVIRONMENTAL_ACTION",
    foundingYear: 2012 + (i % 12),
    facultyAdvisorName: "Prof. Sarah Jenkins",
    studentPresidentName: "Scholar Leader 22",
    activeMemberCount: 69,
    weeklyMeetingSchedule: "Every Tuesday 16:00 - 17:30",
    meetingLocation: "Student Center Complex - Room 122",
    annualKeyEvents: [
      "Annual Inter-School Invitational Tournament",
      "Community Outreach & Knowledge Workshop",
      "End-of-Term Project Showcase & Awards Gala"
    ],
    clubMissionStatement: "Fostering collaboration, critical inquiry, and experiential leadership among students passionate about ENVIRONMENTAL_ACTION."
  },
  {
    clubId: "CLB-023",
    clubName: "Greenfield LITERATURE AND JOURNALISM Society 23",
    category: "LITERATURE_AND_JOURNALISM",
    foundingYear: 2012 + (i % 12),
    facultyAdvisorName: "Prof. Sarah Jenkins",
    studentPresidentName: "Scholar Leader 23",
    activeMemberCount: 71,
    weeklyMeetingSchedule: "Every Tuesday 16:00 - 17:30",
    meetingLocation: "Student Center Complex - Room 123",
    annualKeyEvents: [
      "Annual Inter-School Invitational Tournament",
      "Community Outreach & Knowledge Workshop",
      "End-of-Term Project Showcase & Awards Gala"
    ],
    clubMissionStatement: "Fostering collaboration, critical inquiry, and experiential leadership among students passionate about LITERATURE_AND_JOURNALISM."
  },
  {
    clubId: "CLB-024",
    clubName: "Greenfield STEM AND ROBOTICS Society 24",
    category: "STEM_AND_ROBOTICS",
    foundingYear: 2012 + (i % 12),
    facultyAdvisorName: "Prof. Sarah Jenkins",
    studentPresidentName: "Scholar Leader 24",
    activeMemberCount: 73,
    weeklyMeetingSchedule: "Every Tuesday 16:00 - 17:30",
    meetingLocation: "Student Center Complex - Room 124",
    annualKeyEvents: [
      "Annual Inter-School Invitational Tournament",
      "Community Outreach & Knowledge Workshop",
      "End-of-Term Project Showcase & Awards Gala"
    ],
    clubMissionStatement: "Fostering collaboration, critical inquiry, and experiential leadership among students passionate about STEM_AND_ROBOTICS."
  },
  {
    clubId: "CLB-025",
    clubName: "Greenfield DEBATE AND MODEL UN Society 25",
    category: "DEBATE_AND_MODEL_UN",
    foundingYear: 2012 + (i % 12),
    facultyAdvisorName: "Prof. Sarah Jenkins",
    studentPresidentName: "Scholar Leader 25",
    activeMemberCount: 75,
    weeklyMeetingSchedule: "Every Tuesday 16:00 - 17:30",
    meetingLocation: "Student Center Complex - Room 125",
    annualKeyEvents: [
      "Annual Inter-School Invitational Tournament",
      "Community Outreach & Knowledge Workshop",
      "End-of-Term Project Showcase & Awards Gala"
    ],
    clubMissionStatement: "Fostering collaboration, critical inquiry, and experiential leadership among students passionate about DEBATE_AND_MODEL_UN."
  },
  {
    clubId: "CLB-026",
    clubName: "Greenfield PERFORMING ARTS Society 26",
    category: "PERFORMING_ARTS",
    foundingYear: 2012 + (i % 12),
    facultyAdvisorName: "Prof. Sarah Jenkins",
    studentPresidentName: "Scholar Leader 26",
    activeMemberCount: 77,
    weeklyMeetingSchedule: "Every Tuesday 16:00 - 17:30",
    meetingLocation: "Student Center Complex - Room 126",
    annualKeyEvents: [
      "Annual Inter-School Invitational Tournament",
      "Community Outreach & Knowledge Workshop",
      "End-of-Term Project Showcase & Awards Gala"
    ],
    clubMissionStatement: "Fostering collaboration, critical inquiry, and experiential leadership among students passionate about PERFORMING_ARTS."
  },
  {
    clubId: "CLB-027",
    clubName: "Greenfield COMMUNITY SERVICE Society 27",
    category: "COMMUNITY_SERVICE",
    foundingYear: 2012 + (i % 12),
    facultyAdvisorName: "Prof. Sarah Jenkins",
    studentPresidentName: "Scholar Leader 27",
    activeMemberCount: 79,
    weeklyMeetingSchedule: "Every Tuesday 16:00 - 17:30",
    meetingLocation: "Student Center Complex - Room 127",
    annualKeyEvents: [
      "Annual Inter-School Invitational Tournament",
      "Community Outreach & Knowledge Workshop",
      "End-of-Term Project Showcase & Awards Gala"
    ],
    clubMissionStatement: "Fostering collaboration, critical inquiry, and experiential leadership among students passionate about COMMUNITY_SERVICE."
  },
  {
    clubId: "CLB-028",
    clubName: "Greenfield ENVIRONMENTAL ACTION Society 28",
    category: "ENVIRONMENTAL_ACTION",
    foundingYear: 2012 + (i % 12),
    facultyAdvisorName: "Prof. Sarah Jenkins",
    studentPresidentName: "Scholar Leader 28",
    activeMemberCount: 81,
    weeklyMeetingSchedule: "Every Tuesday 16:00 - 17:30",
    meetingLocation: "Student Center Complex - Room 128",
    annualKeyEvents: [
      "Annual Inter-School Invitational Tournament",
      "Community Outreach & Knowledge Workshop",
      "End-of-Term Project Showcase & Awards Gala"
    ],
    clubMissionStatement: "Fostering collaboration, critical inquiry, and experiential leadership among students passionate about ENVIRONMENTAL_ACTION."
  },
  {
    clubId: "CLB-029",
    clubName: "Greenfield LITERATURE AND JOURNALISM Society 29",
    category: "LITERATURE_AND_JOURNALISM",
    foundingYear: 2012 + (i % 12),
    facultyAdvisorName: "Prof. Sarah Jenkins",
    studentPresidentName: "Scholar Leader 29",
    activeMemberCount: 83,
    weeklyMeetingSchedule: "Every Tuesday 16:00 - 17:30",
    meetingLocation: "Student Center Complex - Room 129",
    annualKeyEvents: [
      "Annual Inter-School Invitational Tournament",
      "Community Outreach & Knowledge Workshop",
      "End-of-Term Project Showcase & Awards Gala"
    ],
    clubMissionStatement: "Fostering collaboration, critical inquiry, and experiential leadership among students passionate about LITERATURE_AND_JOURNALISM."
  },
  {
    clubId: "CLB-030",
    clubName: "Greenfield STEM AND ROBOTICS Society 30",
    category: "STEM_AND_ROBOTICS",
    foundingYear: 2012 + (i % 12),
    facultyAdvisorName: "Prof. Sarah Jenkins",
    studentPresidentName: "Scholar Leader 30",
    activeMemberCount: 85,
    weeklyMeetingSchedule: "Every Tuesday 16:00 - 17:30",
    meetingLocation: "Student Center Complex - Room 130",
    annualKeyEvents: [
      "Annual Inter-School Invitational Tournament",
      "Community Outreach & Knowledge Workshop",
      "End-of-Term Project Showcase & Awards Gala"
    ],
    clubMissionStatement: "Fostering collaboration, critical inquiry, and experiential leadership among students passionate about STEM_AND_ROBOTICS."
  },
  {
    clubId: "CLB-031",
    clubName: "Greenfield DEBATE AND MODEL UN Society 31",
    category: "DEBATE_AND_MODEL_UN",
    foundingYear: 2012 + (i % 12),
    facultyAdvisorName: "Prof. Sarah Jenkins",
    studentPresidentName: "Scholar Leader 31",
    activeMemberCount: 87,
    weeklyMeetingSchedule: "Every Tuesday 16:00 - 17:30",
    meetingLocation: "Student Center Complex - Room 131",
    annualKeyEvents: [
      "Annual Inter-School Invitational Tournament",
      "Community Outreach & Knowledge Workshop",
      "End-of-Term Project Showcase & Awards Gala"
    ],
    clubMissionStatement: "Fostering collaboration, critical inquiry, and experiential leadership among students passionate about DEBATE_AND_MODEL_UN."
  },
  {
    clubId: "CLB-032",
    clubName: "Greenfield PERFORMING ARTS Society 32",
    category: "PERFORMING_ARTS",
    foundingYear: 2012 + (i % 12),
    facultyAdvisorName: "Prof. Sarah Jenkins",
    studentPresidentName: "Scholar Leader 32",
    activeMemberCount: 89,
    weeklyMeetingSchedule: "Every Tuesday 16:00 - 17:30",
    meetingLocation: "Student Center Complex - Room 132",
    annualKeyEvents: [
      "Annual Inter-School Invitational Tournament",
      "Community Outreach & Knowledge Workshop",
      "End-of-Term Project Showcase & Awards Gala"
    ],
    clubMissionStatement: "Fostering collaboration, critical inquiry, and experiential leadership among students passionate about PERFORMING_ARTS."
  },
  {
    clubId: "CLB-033",
    clubName: "Greenfield COMMUNITY SERVICE Society 33",
    category: "COMMUNITY_SERVICE",
    foundingYear: 2012 + (i % 12),
    facultyAdvisorName: "Prof. Sarah Jenkins",
    studentPresidentName: "Scholar Leader 33",
    activeMemberCount: 91,
    weeklyMeetingSchedule: "Every Tuesday 16:00 - 17:30",
    meetingLocation: "Student Center Complex - Room 133",
    annualKeyEvents: [
      "Annual Inter-School Invitational Tournament",
      "Community Outreach & Knowledge Workshop",
      "End-of-Term Project Showcase & Awards Gala"
    ],
    clubMissionStatement: "Fostering collaboration, critical inquiry, and experiential leadership among students passionate about COMMUNITY_SERVICE."
  },
  {
    clubId: "CLB-034",
    clubName: "Greenfield ENVIRONMENTAL ACTION Society 34",
    category: "ENVIRONMENTAL_ACTION",
    foundingYear: 2012 + (i % 12),
    facultyAdvisorName: "Prof. Sarah Jenkins",
    studentPresidentName: "Scholar Leader 34",
    activeMemberCount: 93,
    weeklyMeetingSchedule: "Every Tuesday 16:00 - 17:30",
    meetingLocation: "Student Center Complex - Room 134",
    annualKeyEvents: [
      "Annual Inter-School Invitational Tournament",
      "Community Outreach & Knowledge Workshop",
      "End-of-Term Project Showcase & Awards Gala"
    ],
    clubMissionStatement: "Fostering collaboration, critical inquiry, and experiential leadership among students passionate about ENVIRONMENTAL_ACTION."
  },
  {
    clubId: "CLB-035",
    clubName: "Greenfield LITERATURE AND JOURNALISM Society 35",
    category: "LITERATURE_AND_JOURNALISM",
    foundingYear: 2012 + (i % 12),
    facultyAdvisorName: "Prof. Sarah Jenkins",
    studentPresidentName: "Scholar Leader 35",
    activeMemberCount: 95,
    weeklyMeetingSchedule: "Every Tuesday 16:00 - 17:30",
    meetingLocation: "Student Center Complex - Room 135",
    annualKeyEvents: [
      "Annual Inter-School Invitational Tournament",
      "Community Outreach & Knowledge Workshop",
      "End-of-Term Project Showcase & Awards Gala"
    ],
    clubMissionStatement: "Fostering collaboration, critical inquiry, and experiential leadership among students passionate about LITERATURE_AND_JOURNALISM."
  },
  {
    clubId: "CLB-036",
    clubName: "Greenfield STEM AND ROBOTICS Society 36",
    category: "STEM_AND_ROBOTICS",
    foundingYear: 2012 + (i % 12),
    facultyAdvisorName: "Prof. Sarah Jenkins",
    studentPresidentName: "Scholar Leader 36",
    activeMemberCount: 97,
    weeklyMeetingSchedule: "Every Tuesday 16:00 - 17:30",
    meetingLocation: "Student Center Complex - Room 136",
    annualKeyEvents: [
      "Annual Inter-School Invitational Tournament",
      "Community Outreach & Knowledge Workshop",
      "End-of-Term Project Showcase & Awards Gala"
    ],
    clubMissionStatement: "Fostering collaboration, critical inquiry, and experiential leadership among students passionate about STEM_AND_ROBOTICS."
  },
  {
    clubId: "CLB-037",
    clubName: "Greenfield DEBATE AND MODEL UN Society 37",
    category: "DEBATE_AND_MODEL_UN",
    foundingYear: 2012 + (i % 12),
    facultyAdvisorName: "Prof. Sarah Jenkins",
    studentPresidentName: "Scholar Leader 37",
    activeMemberCount: 99,
    weeklyMeetingSchedule: "Every Tuesday 16:00 - 17:30",
    meetingLocation: "Student Center Complex - Room 137",
    annualKeyEvents: [
      "Annual Inter-School Invitational Tournament",
      "Community Outreach & Knowledge Workshop",
      "End-of-Term Project Showcase & Awards Gala"
    ],
    clubMissionStatement: "Fostering collaboration, critical inquiry, and experiential leadership among students passionate about DEBATE_AND_MODEL_UN."
  },
  {
    clubId: "CLB-038",
    clubName: "Greenfield PERFORMING ARTS Society 38",
    category: "PERFORMING_ARTS",
    foundingYear: 2012 + (i % 12),
    facultyAdvisorName: "Prof. Sarah Jenkins",
    studentPresidentName: "Scholar Leader 38",
    activeMemberCount: 101,
    weeklyMeetingSchedule: "Every Tuesday 16:00 - 17:30",
    meetingLocation: "Student Center Complex - Room 138",
    annualKeyEvents: [
      "Annual Inter-School Invitational Tournament",
      "Community Outreach & Knowledge Workshop",
      "End-of-Term Project Showcase & Awards Gala"
    ],
    clubMissionStatement: "Fostering collaboration, critical inquiry, and experiential leadership among students passionate about PERFORMING_ARTS."
  },
  {
    clubId: "CLB-039",
    clubName: "Greenfield COMMUNITY SERVICE Society 39",
    category: "COMMUNITY_SERVICE",
    foundingYear: 2012 + (i % 12),
    facultyAdvisorName: "Prof. Sarah Jenkins",
    studentPresidentName: "Scholar Leader 39",
    activeMemberCount: 103,
    weeklyMeetingSchedule: "Every Tuesday 16:00 - 17:30",
    meetingLocation: "Student Center Complex - Room 139",
    annualKeyEvents: [
      "Annual Inter-School Invitational Tournament",
      "Community Outreach & Knowledge Workshop",
      "End-of-Term Project Showcase & Awards Gala"
    ],
    clubMissionStatement: "Fostering collaboration, critical inquiry, and experiential leadership among students passionate about COMMUNITY_SERVICE."
  },
  {
    clubId: "CLB-040",
    clubName: "Greenfield ENVIRONMENTAL ACTION Society 40",
    category: "ENVIRONMENTAL_ACTION",
    foundingYear: 2012 + (i % 12),
    facultyAdvisorName: "Prof. Sarah Jenkins",
    studentPresidentName: "Scholar Leader 40",
    activeMemberCount: 105,
    weeklyMeetingSchedule: "Every Tuesday 16:00 - 17:30",
    meetingLocation: "Student Center Complex - Room 140",
    annualKeyEvents: [
      "Annual Inter-School Invitational Tournament",
      "Community Outreach & Knowledge Workshop",
      "End-of-Term Project Showcase & Awards Gala"
    ],
    clubMissionStatement: "Fostering collaboration, critical inquiry, and experiential leadership among students passionate about ENVIRONMENTAL_ACTION."
  },
  {
    clubId: "CLB-041",
    clubName: "Greenfield LITERATURE AND JOURNALISM Society 41",
    category: "LITERATURE_AND_JOURNALISM",
    foundingYear: 2012 + (i % 12),
    facultyAdvisorName: "Prof. Sarah Jenkins",
    studentPresidentName: "Scholar Leader 41",
    activeMemberCount: 107,
    weeklyMeetingSchedule: "Every Tuesday 16:00 - 17:30",
    meetingLocation: "Student Center Complex - Room 141",
    annualKeyEvents: [
      "Annual Inter-School Invitational Tournament",
      "Community Outreach & Knowledge Workshop",
      "End-of-Term Project Showcase & Awards Gala"
    ],
    clubMissionStatement: "Fostering collaboration, critical inquiry, and experiential leadership among students passionate about LITERATURE_AND_JOURNALISM."
  },
  {
    clubId: "CLB-042",
    clubName: "Greenfield STEM AND ROBOTICS Society 42",
    category: "STEM_AND_ROBOTICS",
    foundingYear: 2012 + (i % 12),
    facultyAdvisorName: "Prof. Sarah Jenkins",
    studentPresidentName: "Scholar Leader 42",
    activeMemberCount: 109,
    weeklyMeetingSchedule: "Every Tuesday 16:00 - 17:30",
    meetingLocation: "Student Center Complex - Room 142",
    annualKeyEvents: [
      "Annual Inter-School Invitational Tournament",
      "Community Outreach & Knowledge Workshop",
      "End-of-Term Project Showcase & Awards Gala"
    ],
    clubMissionStatement: "Fostering collaboration, critical inquiry, and experiential leadership among students passionate about STEM_AND_ROBOTICS."
  },
  {
    clubId: "CLB-043",
    clubName: "Greenfield DEBATE AND MODEL UN Society 43",
    category: "DEBATE_AND_MODEL_UN",
    foundingYear: 2012 + (i % 12),
    facultyAdvisorName: "Prof. Sarah Jenkins",
    studentPresidentName: "Scholar Leader 43",
    activeMemberCount: 111,
    weeklyMeetingSchedule: "Every Tuesday 16:00 - 17:30",
    meetingLocation: "Student Center Complex - Room 143",
    annualKeyEvents: [
      "Annual Inter-School Invitational Tournament",
      "Community Outreach & Knowledge Workshop",
      "End-of-Term Project Showcase & Awards Gala"
    ],
    clubMissionStatement: "Fostering collaboration, critical inquiry, and experiential leadership among students passionate about DEBATE_AND_MODEL_UN."
  },
  {
    clubId: "CLB-044",
    clubName: "Greenfield PERFORMING ARTS Society 44",
    category: "PERFORMING_ARTS",
    foundingYear: 2012 + (i % 12),
    facultyAdvisorName: "Prof. Sarah Jenkins",
    studentPresidentName: "Scholar Leader 44",
    activeMemberCount: 113,
    weeklyMeetingSchedule: "Every Tuesday 16:00 - 17:30",
    meetingLocation: "Student Center Complex - Room 144",
    annualKeyEvents: [
      "Annual Inter-School Invitational Tournament",
      "Community Outreach & Knowledge Workshop",
      "End-of-Term Project Showcase & Awards Gala"
    ],
    clubMissionStatement: "Fostering collaboration, critical inquiry, and experiential leadership among students passionate about PERFORMING_ARTS."
  },
  {
    clubId: "CLB-045",
    clubName: "Greenfield COMMUNITY SERVICE Society 45",
    category: "COMMUNITY_SERVICE",
    foundingYear: 2012 + (i % 12),
    facultyAdvisorName: "Prof. Sarah Jenkins",
    studentPresidentName: "Scholar Leader 45",
    activeMemberCount: 115,
    weeklyMeetingSchedule: "Every Tuesday 16:00 - 17:30",
    meetingLocation: "Student Center Complex - Room 145",
    annualKeyEvents: [
      "Annual Inter-School Invitational Tournament",
      "Community Outreach & Knowledge Workshop",
      "End-of-Term Project Showcase & Awards Gala"
    ],
    clubMissionStatement: "Fostering collaboration, critical inquiry, and experiential leadership among students passionate about COMMUNITY_SERVICE."
  },
  {
    clubId: "CLB-046",
    clubName: "Greenfield ENVIRONMENTAL ACTION Society 46",
    category: "ENVIRONMENTAL_ACTION",
    foundingYear: 2012 + (i % 12),
    facultyAdvisorName: "Prof. Sarah Jenkins",
    studentPresidentName: "Scholar Leader 46",
    activeMemberCount: 117,
    weeklyMeetingSchedule: "Every Tuesday 16:00 - 17:30",
    meetingLocation: "Student Center Complex - Room 146",
    annualKeyEvents: [
      "Annual Inter-School Invitational Tournament",
      "Community Outreach & Knowledge Workshop",
      "End-of-Term Project Showcase & Awards Gala"
    ],
    clubMissionStatement: "Fostering collaboration, critical inquiry, and experiential leadership among students passionate about ENVIRONMENTAL_ACTION."
  },
  {
    clubId: "CLB-047",
    clubName: "Greenfield LITERATURE AND JOURNALISM Society 47",
    category: "LITERATURE_AND_JOURNALISM",
    foundingYear: 2012 + (i % 12),
    facultyAdvisorName: "Prof. Sarah Jenkins",
    studentPresidentName: "Scholar Leader 47",
    activeMemberCount: 119,
    weeklyMeetingSchedule: "Every Tuesday 16:00 - 17:30",
    meetingLocation: "Student Center Complex - Room 147",
    annualKeyEvents: [
      "Annual Inter-School Invitational Tournament",
      "Community Outreach & Knowledge Workshop",
      "End-of-Term Project Showcase & Awards Gala"
    ],
    clubMissionStatement: "Fostering collaboration, critical inquiry, and experiential leadership among students passionate about LITERATURE_AND_JOURNALISM."
  },
  {
    clubId: "CLB-048",
    clubName: "Greenfield STEM AND ROBOTICS Society 48",
    category: "STEM_AND_ROBOTICS",
    foundingYear: 2012 + (i % 12),
    facultyAdvisorName: "Prof. Sarah Jenkins",
    studentPresidentName: "Scholar Leader 48",
    activeMemberCount: 121,
    weeklyMeetingSchedule: "Every Tuesday 16:00 - 17:30",
    meetingLocation: "Student Center Complex - Room 148",
    annualKeyEvents: [
      "Annual Inter-School Invitational Tournament",
      "Community Outreach & Knowledge Workshop",
      "End-of-Term Project Showcase & Awards Gala"
    ],
    clubMissionStatement: "Fostering collaboration, critical inquiry, and experiential leadership among students passionate about STEM_AND_ROBOTICS."
  },
  {
    clubId: "CLB-049",
    clubName: "Greenfield DEBATE AND MODEL UN Society 49",
    category: "DEBATE_AND_MODEL_UN",
    foundingYear: 2012 + (i % 12),
    facultyAdvisorName: "Prof. Sarah Jenkins",
    studentPresidentName: "Scholar Leader 49",
    activeMemberCount: 123,
    weeklyMeetingSchedule: "Every Tuesday 16:00 - 17:30",
    meetingLocation: "Student Center Complex - Room 149",
    annualKeyEvents: [
      "Annual Inter-School Invitational Tournament",
      "Community Outreach & Knowledge Workshop",
      "End-of-Term Project Showcase & Awards Gala"
    ],
    clubMissionStatement: "Fostering collaboration, critical inquiry, and experiential leadership among students passionate about DEBATE_AND_MODEL_UN."
  },
  {
    clubId: "CLB-050",
    clubName: "Greenfield PERFORMING ARTS Society 50",
    category: "PERFORMING_ARTS",
    foundingYear: 2012 + (i % 12),
    facultyAdvisorName: "Prof. Sarah Jenkins",
    studentPresidentName: "Scholar Leader 50",
    activeMemberCount: 125,
    weeklyMeetingSchedule: "Every Tuesday 16:00 - 17:30",
    meetingLocation: "Student Center Complex - Room 150",
    annualKeyEvents: [
      "Annual Inter-School Invitational Tournament",
      "Community Outreach & Knowledge Workshop",
      "End-of-Term Project Showcase & Awards Gala"
    ],
    clubMissionStatement: "Fostering collaboration, critical inquiry, and experiential leadership among students passionate about PERFORMING_ARTS."
  },
  {
    clubId: "CLB-051",
    clubName: "Greenfield COMMUNITY SERVICE Society 51",
    category: "COMMUNITY_SERVICE",
    foundingYear: 2012 + (i % 12),
    facultyAdvisorName: "Prof. Sarah Jenkins",
    studentPresidentName: "Scholar Leader 51",
    activeMemberCount: 127,
    weeklyMeetingSchedule: "Every Tuesday 16:00 - 17:30",
    meetingLocation: "Student Center Complex - Room 151",
    annualKeyEvents: [
      "Annual Inter-School Invitational Tournament",
      "Community Outreach & Knowledge Workshop",
      "End-of-Term Project Showcase & Awards Gala"
    ],
    clubMissionStatement: "Fostering collaboration, critical inquiry, and experiential leadership among students passionate about COMMUNITY_SERVICE."
  },
  {
    clubId: "CLB-052",
    clubName: "Greenfield ENVIRONMENTAL ACTION Society 52",
    category: "ENVIRONMENTAL_ACTION",
    foundingYear: 2012 + (i % 12),
    facultyAdvisorName: "Prof. Sarah Jenkins",
    studentPresidentName: "Scholar Leader 52",
    activeMemberCount: 129,
    weeklyMeetingSchedule: "Every Tuesday 16:00 - 17:30",
    meetingLocation: "Student Center Complex - Room 152",
    annualKeyEvents: [
      "Annual Inter-School Invitational Tournament",
      "Community Outreach & Knowledge Workshop",
      "End-of-Term Project Showcase & Awards Gala"
    ],
    clubMissionStatement: "Fostering collaboration, critical inquiry, and experiential leadership among students passionate about ENVIRONMENTAL_ACTION."
  },
  {
    clubId: "CLB-053",
    clubName: "Greenfield LITERATURE AND JOURNALISM Society 53",
    category: "LITERATURE_AND_JOURNALISM",
    foundingYear: 2012 + (i % 12),
    facultyAdvisorName: "Prof. Sarah Jenkins",
    studentPresidentName: "Scholar Leader 53",
    activeMemberCount: 131,
    weeklyMeetingSchedule: "Every Tuesday 16:00 - 17:30",
    meetingLocation: "Student Center Complex - Room 153",
    annualKeyEvents: [
      "Annual Inter-School Invitational Tournament",
      "Community Outreach & Knowledge Workshop",
      "End-of-Term Project Showcase & Awards Gala"
    ],
    clubMissionStatement: "Fostering collaboration, critical inquiry, and experiential leadership among students passionate about LITERATURE_AND_JOURNALISM."
  },
  {
    clubId: "CLB-054",
    clubName: "Greenfield STEM AND ROBOTICS Society 54",
    category: "STEM_AND_ROBOTICS",
    foundingYear: 2012 + (i % 12),
    facultyAdvisorName: "Prof. Sarah Jenkins",
    studentPresidentName: "Scholar Leader 54",
    activeMemberCount: 133,
    weeklyMeetingSchedule: "Every Tuesday 16:00 - 17:30",
    meetingLocation: "Student Center Complex - Room 154",
    annualKeyEvents: [
      "Annual Inter-School Invitational Tournament",
      "Community Outreach & Knowledge Workshop",
      "End-of-Term Project Showcase & Awards Gala"
    ],
    clubMissionStatement: "Fostering collaboration, critical inquiry, and experiential leadership among students passionate about STEM_AND_ROBOTICS."
  },
  {
    clubId: "CLB-055",
    clubName: "Greenfield DEBATE AND MODEL UN Society 55",
    category: "DEBATE_AND_MODEL_UN",
    foundingYear: 2012 + (i % 12),
    facultyAdvisorName: "Prof. Sarah Jenkins",
    studentPresidentName: "Scholar Leader 55",
    activeMemberCount: 135,
    weeklyMeetingSchedule: "Every Tuesday 16:00 - 17:30",
    meetingLocation: "Student Center Complex - Room 155",
    annualKeyEvents: [
      "Annual Inter-School Invitational Tournament",
      "Community Outreach & Knowledge Workshop",
      "End-of-Term Project Showcase & Awards Gala"
    ],
    clubMissionStatement: "Fostering collaboration, critical inquiry, and experiential leadership among students passionate about DEBATE_AND_MODEL_UN."
  },
  {
    clubId: "CLB-056",
    clubName: "Greenfield PERFORMING ARTS Society 56",
    category: "PERFORMING_ARTS",
    foundingYear: 2012 + (i % 12),
    facultyAdvisorName: "Prof. Sarah Jenkins",
    studentPresidentName: "Scholar Leader 56",
    activeMemberCount: 137,
    weeklyMeetingSchedule: "Every Tuesday 16:00 - 17:30",
    meetingLocation: "Student Center Complex - Room 156",
    annualKeyEvents: [
      "Annual Inter-School Invitational Tournament",
      "Community Outreach & Knowledge Workshop",
      "End-of-Term Project Showcase & Awards Gala"
    ],
    clubMissionStatement: "Fostering collaboration, critical inquiry, and experiential leadership among students passionate about PERFORMING_ARTS."
  },
  {
    clubId: "CLB-057",
    clubName: "Greenfield COMMUNITY SERVICE Society 57",
    category: "COMMUNITY_SERVICE",
    foundingYear: 2012 + (i % 12),
    facultyAdvisorName: "Prof. Sarah Jenkins",
    studentPresidentName: "Scholar Leader 57",
    activeMemberCount: 139,
    weeklyMeetingSchedule: "Every Tuesday 16:00 - 17:30",
    meetingLocation: "Student Center Complex - Room 157",
    annualKeyEvents: [
      "Annual Inter-School Invitational Tournament",
      "Community Outreach & Knowledge Workshop",
      "End-of-Term Project Showcase & Awards Gala"
    ],
    clubMissionStatement: "Fostering collaboration, critical inquiry, and experiential leadership among students passionate about COMMUNITY_SERVICE."
  },
  {
    clubId: "CLB-058",
    clubName: "Greenfield ENVIRONMENTAL ACTION Society 58",
    category: "ENVIRONMENTAL_ACTION",
    foundingYear: 2012 + (i % 12),
    facultyAdvisorName: "Prof. Sarah Jenkins",
    studentPresidentName: "Scholar Leader 58",
    activeMemberCount: 141,
    weeklyMeetingSchedule: "Every Tuesday 16:00 - 17:30",
    meetingLocation: "Student Center Complex - Room 158",
    annualKeyEvents: [
      "Annual Inter-School Invitational Tournament",
      "Community Outreach & Knowledge Workshop",
      "End-of-Term Project Showcase & Awards Gala"
    ],
    clubMissionStatement: "Fostering collaboration, critical inquiry, and experiential leadership among students passionate about ENVIRONMENTAL_ACTION."
  },
  {
    clubId: "CLB-059",
    clubName: "Greenfield LITERATURE AND JOURNALISM Society 59",
    category: "LITERATURE_AND_JOURNALISM",
    foundingYear: 2012 + (i % 12),
    facultyAdvisorName: "Prof. Sarah Jenkins",
    studentPresidentName: "Scholar Leader 59",
    activeMemberCount: 143,
    weeklyMeetingSchedule: "Every Tuesday 16:00 - 17:30",
    meetingLocation: "Student Center Complex - Room 159",
    annualKeyEvents: [
      "Annual Inter-School Invitational Tournament",
      "Community Outreach & Knowledge Workshop",
      "End-of-Term Project Showcase & Awards Gala"
    ],
    clubMissionStatement: "Fostering collaboration, critical inquiry, and experiential leadership among students passionate about LITERATURE_AND_JOURNALISM."
  },
  {
    clubId: "CLB-060",
    clubName: "Greenfield STEM AND ROBOTICS Society 60",
    category: "STEM_AND_ROBOTICS",
    foundingYear: 2012 + (i % 12),
    facultyAdvisorName: "Prof. Sarah Jenkins",
    studentPresidentName: "Scholar Leader 60",
    activeMemberCount: 145,
    weeklyMeetingSchedule: "Every Tuesday 16:00 - 17:30",
    meetingLocation: "Student Center Complex - Room 160",
    annualKeyEvents: [
      "Annual Inter-School Invitational Tournament",
      "Community Outreach & Knowledge Workshop",
      "End-of-Term Project Showcase & Awards Gala"
    ],
    clubMissionStatement: "Fostering collaboration, critical inquiry, and experiential leadership among students passionate about STEM_AND_ROBOTICS."
  },
];

export class StudentClubsService {
  public static getAllClubs(): StudentSocietyClub[] {
    return MASTER_CLUBS_REGISTRY;
  }
}
