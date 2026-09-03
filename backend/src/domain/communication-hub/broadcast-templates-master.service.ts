import { Injectable } from '@nestjs/common';

export interface BroadcastTemplate {
  templateId: string;
  templateCode: string;
  targetRole: 'ALL_COMMUNITY' | 'STUDENTS_ONLY' | 'TEACHERS_ONLY' | 'PARENTS_ONLY' | 'ADMIN_BOARD';
  subjectTitle: string;
  bodyContentMarkdown: string;
  priorityLevel: 'ROUTINE' | 'ELEVATED' | 'CRITICAL_ALERT';
  deliveryChannels: Array<'IN_APP_PORTAL' | 'SMS_TEXT' | 'EMAIL_DISPATCH' | 'EMERGENCY_SIREN'>;
  authorizingDepartment: string;
}

export const MASTER_BROADCAST_TEMPLATES: BroadcastTemplate[] = [
  {
    templateId: "TMPL-BRD-001",
    templateCode: "COMM_TEMPLATE_1",
    targetRole: "TEACHERS_ONLY",
    subjectTitle: "Official Institutional Notice #1: Academic Operations & Schedule Update",
    bodyContentMarkdown: "Dear Greenfield Community members, please be advised of the operational protocol update for index 1. All stakeholders are requested to review institutional guidelines and adhere to academic schedules.",
    priorityLevel: "ROUTINE",
    deliveryChannels: ["IN_APP_PORTAL", "EMAIL_DISPATCH", "SMS_TEXT"],
    authorizingDepartment: "Office of the Dean & Academic Directorate"
  },
  {
    templateId: "TMPL-BRD-002",
    templateCode: "COMM_TEMPLATE_2",
    targetRole: "STUDENTS_ONLY",
    subjectTitle: "Official Institutional Notice #2: Academic Operations & Schedule Update",
    bodyContentMarkdown: "Dear Greenfield Community members, please be advised of the operational protocol update for index 2. All stakeholders are requested to review institutional guidelines and adhere to academic schedules.",
    priorityLevel: "ROUTINE",
    deliveryChannels: ["IN_APP_PORTAL", "EMAIL_DISPATCH", "SMS_TEXT"],
    authorizingDepartment: "Office of the Dean & Academic Directorate"
  },
  {
    templateId: "TMPL-BRD-003",
    templateCode: "COMM_TEMPLATE_3",
    targetRole: "ALL_COMMUNITY",
    subjectTitle: "Official Institutional Notice #3: Academic Operations & Schedule Update",
    bodyContentMarkdown: "Dear Greenfield Community members, please be advised of the operational protocol update for index 3. All stakeholders are requested to review institutional guidelines and adhere to academic schedules.",
    priorityLevel: "ELEVATED",
    deliveryChannels: ["IN_APP_PORTAL", "EMAIL_DISPATCH", "SMS_TEXT"],
    authorizingDepartment: "Office of the Dean & Academic Directorate"
  },
  {
    templateId: "TMPL-BRD-004",
    templateCode: "COMM_TEMPLATE_4",
    targetRole: "PARENTS_ONLY",
    subjectTitle: "Official Institutional Notice #4: Academic Operations & Schedule Update",
    bodyContentMarkdown: "Dear Greenfield Community members, please be advised of the operational protocol update for index 4. All stakeholders are requested to review institutional guidelines and adhere to academic schedules.",
    priorityLevel: "ROUTINE",
    deliveryChannels: ["IN_APP_PORTAL", "EMAIL_DISPATCH", "SMS_TEXT"],
    authorizingDepartment: "Office of the Dean & Academic Directorate"
  },
  {
    templateId: "TMPL-BRD-005",
    templateCode: "COMM_TEMPLATE_5",
    targetRole: "TEACHERS_ONLY",
    subjectTitle: "Official Institutional Notice #5: Academic Operations & Schedule Update",
    bodyContentMarkdown: "Dear Greenfield Community members, please be advised of the operational protocol update for index 5. All stakeholders are requested to review institutional guidelines and adhere to academic schedules.",
    priorityLevel: "CRITICAL_ALERT",
    deliveryChannels: ["IN_APP_PORTAL", "EMAIL_DISPATCH", "SMS_TEXT"],
    authorizingDepartment: "Office of the Dean & Academic Directorate"
  },
  {
    templateId: "TMPL-BRD-006",
    templateCode: "COMM_TEMPLATE_6",
    targetRole: "STUDENTS_ONLY",
    subjectTitle: "Official Institutional Notice #6: Academic Operations & Schedule Update",
    bodyContentMarkdown: "Dear Greenfield Community members, please be advised of the operational protocol update for index 6. All stakeholders are requested to review institutional guidelines and adhere to academic schedules.",
    priorityLevel: "ELEVATED",
    deliveryChannels: ["IN_APP_PORTAL", "EMAIL_DISPATCH", "SMS_TEXT"],
    authorizingDepartment: "Office of the Dean & Academic Directorate"
  },
  {
    templateId: "TMPL-BRD-007",
    templateCode: "COMM_TEMPLATE_7",
    targetRole: "ALL_COMMUNITY",
    subjectTitle: "Official Institutional Notice #7: Academic Operations & Schedule Update",
    bodyContentMarkdown: "Dear Greenfield Community members, please be advised of the operational protocol update for index 7. All stakeholders are requested to review institutional guidelines and adhere to academic schedules.",
    priorityLevel: "ROUTINE",
    deliveryChannels: ["IN_APP_PORTAL", "EMAIL_DISPATCH", "SMS_TEXT"],
    authorizingDepartment: "Office of the Dean & Academic Directorate"
  },
  {
    templateId: "TMPL-BRD-008",
    templateCode: "COMM_TEMPLATE_8",
    targetRole: "PARENTS_ONLY",
    subjectTitle: "Official Institutional Notice #8: Academic Operations & Schedule Update",
    bodyContentMarkdown: "Dear Greenfield Community members, please be advised of the operational protocol update for index 8. All stakeholders are requested to review institutional guidelines and adhere to academic schedules.",
    priorityLevel: "ROUTINE",
    deliveryChannels: ["IN_APP_PORTAL", "EMAIL_DISPATCH", "SMS_TEXT"],
    authorizingDepartment: "Office of the Dean & Academic Directorate"
  },
  {
    templateId: "TMPL-BRD-009",
    templateCode: "COMM_TEMPLATE_9",
    targetRole: "TEACHERS_ONLY",
    subjectTitle: "Official Institutional Notice #9: Academic Operations & Schedule Update",
    bodyContentMarkdown: "Dear Greenfield Community members, please be advised of the operational protocol update for index 9. All stakeholders are requested to review institutional guidelines and adhere to academic schedules.",
    priorityLevel: "ELEVATED",
    deliveryChannels: ["IN_APP_PORTAL", "EMAIL_DISPATCH", "SMS_TEXT"],
    authorizingDepartment: "Office of the Dean & Academic Directorate"
  },
  {
    templateId: "TMPL-BRD-010",
    templateCode: "COMM_TEMPLATE_10",
    targetRole: "STUDENTS_ONLY",
    subjectTitle: "Official Institutional Notice #10: Academic Operations & Schedule Update",
    bodyContentMarkdown: "Dear Greenfield Community members, please be advised of the operational protocol update for index 10. All stakeholders are requested to review institutional guidelines and adhere to academic schedules.",
    priorityLevel: "CRITICAL_ALERT",
    deliveryChannels: ["IN_APP_PORTAL", "EMAIL_DISPATCH", "SMS_TEXT"],
    authorizingDepartment: "Office of the Dean & Academic Directorate"
  },
  {
    templateId: "TMPL-BRD-011",
    templateCode: "COMM_TEMPLATE_11",
    targetRole: "ALL_COMMUNITY",
    subjectTitle: "Official Institutional Notice #11: Academic Operations & Schedule Update",
    bodyContentMarkdown: "Dear Greenfield Community members, please be advised of the operational protocol update for index 11. All stakeholders are requested to review institutional guidelines and adhere to academic schedules.",
    priorityLevel: "ROUTINE",
    deliveryChannels: ["IN_APP_PORTAL", "EMAIL_DISPATCH", "SMS_TEXT"],
    authorizingDepartment: "Office of the Dean & Academic Directorate"
  },
  {
    templateId: "TMPL-BRD-012",
    templateCode: "COMM_TEMPLATE_12",
    targetRole: "PARENTS_ONLY",
    subjectTitle: "Official Institutional Notice #12: Academic Operations & Schedule Update",
    bodyContentMarkdown: "Dear Greenfield Community members, please be advised of the operational protocol update for index 12. All stakeholders are requested to review institutional guidelines and adhere to academic schedules.",
    priorityLevel: "ELEVATED",
    deliveryChannels: ["IN_APP_PORTAL", "EMAIL_DISPATCH", "SMS_TEXT"],
    authorizingDepartment: "Office of the Dean & Academic Directorate"
  },
  {
    templateId: "TMPL-BRD-013",
    templateCode: "COMM_TEMPLATE_13",
    targetRole: "TEACHERS_ONLY",
    subjectTitle: "Official Institutional Notice #13: Academic Operations & Schedule Update",
    bodyContentMarkdown: "Dear Greenfield Community members, please be advised of the operational protocol update for index 13. All stakeholders are requested to review institutional guidelines and adhere to academic schedules.",
    priorityLevel: "ROUTINE",
    deliveryChannels: ["IN_APP_PORTAL", "EMAIL_DISPATCH", "SMS_TEXT"],
    authorizingDepartment: "Office of the Dean & Academic Directorate"
  },
  {
    templateId: "TMPL-BRD-014",
    templateCode: "COMM_TEMPLATE_14",
    targetRole: "STUDENTS_ONLY",
    subjectTitle: "Official Institutional Notice #14: Academic Operations & Schedule Update",
    bodyContentMarkdown: "Dear Greenfield Community members, please be advised of the operational protocol update for index 14. All stakeholders are requested to review institutional guidelines and adhere to academic schedules.",
    priorityLevel: "ROUTINE",
    deliveryChannels: ["IN_APP_PORTAL", "EMAIL_DISPATCH", "SMS_TEXT"],
    authorizingDepartment: "Office of the Dean & Academic Directorate"
  },
  {
    templateId: "TMPL-BRD-015",
    templateCode: "COMM_TEMPLATE_15",
    targetRole: "ALL_COMMUNITY",
    subjectTitle: "Official Institutional Notice #15: Academic Operations & Schedule Update",
    bodyContentMarkdown: "Dear Greenfield Community members, please be advised of the operational protocol update for index 15. All stakeholders are requested to review institutional guidelines and adhere to academic schedules.",
    priorityLevel: "CRITICAL_ALERT",
    deliveryChannels: ["IN_APP_PORTAL", "EMAIL_DISPATCH", "SMS_TEXT"],
    authorizingDepartment: "Office of the Dean & Academic Directorate"
  },
  {
    templateId: "TMPL-BRD-016",
    templateCode: "COMM_TEMPLATE_16",
    targetRole: "PARENTS_ONLY",
    subjectTitle: "Official Institutional Notice #16: Academic Operations & Schedule Update",
    bodyContentMarkdown: "Dear Greenfield Community members, please be advised of the operational protocol update for index 16. All stakeholders are requested to review institutional guidelines and adhere to academic schedules.",
    priorityLevel: "ROUTINE",
    deliveryChannels: ["IN_APP_PORTAL", "EMAIL_DISPATCH", "SMS_TEXT"],
    authorizingDepartment: "Office of the Dean & Academic Directorate"
  },
  {
    templateId: "TMPL-BRD-017",
    templateCode: "COMM_TEMPLATE_17",
    targetRole: "TEACHERS_ONLY",
    subjectTitle: "Official Institutional Notice #17: Academic Operations & Schedule Update",
    bodyContentMarkdown: "Dear Greenfield Community members, please be advised of the operational protocol update for index 17. All stakeholders are requested to review institutional guidelines and adhere to academic schedules.",
    priorityLevel: "ROUTINE",
    deliveryChannels: ["IN_APP_PORTAL", "EMAIL_DISPATCH", "SMS_TEXT"],
    authorizingDepartment: "Office of the Dean & Academic Directorate"
  },
  {
    templateId: "TMPL-BRD-018",
    templateCode: "COMM_TEMPLATE_18",
    targetRole: "STUDENTS_ONLY",
    subjectTitle: "Official Institutional Notice #18: Academic Operations & Schedule Update",
    bodyContentMarkdown: "Dear Greenfield Community members, please be advised of the operational protocol update for index 18. All stakeholders are requested to review institutional guidelines and adhere to academic schedules.",
    priorityLevel: "ELEVATED",
    deliveryChannels: ["IN_APP_PORTAL", "EMAIL_DISPATCH", "SMS_TEXT"],
    authorizingDepartment: "Office of the Dean & Academic Directorate"
  },
  {
    templateId: "TMPL-BRD-019",
    templateCode: "COMM_TEMPLATE_19",
    targetRole: "ALL_COMMUNITY",
    subjectTitle: "Official Institutional Notice #19: Academic Operations & Schedule Update",
    bodyContentMarkdown: "Dear Greenfield Community members, please be advised of the operational protocol update for index 19. All stakeholders are requested to review institutional guidelines and adhere to academic schedules.",
    priorityLevel: "ROUTINE",
    deliveryChannels: ["IN_APP_PORTAL", "EMAIL_DISPATCH", "SMS_TEXT"],
    authorizingDepartment: "Office of the Dean & Academic Directorate"
  },
  {
    templateId: "TMPL-BRD-020",
    templateCode: "COMM_TEMPLATE_20",
    targetRole: "PARENTS_ONLY",
    subjectTitle: "Official Institutional Notice #20: Academic Operations & Schedule Update",
    bodyContentMarkdown: "Dear Greenfield Community members, please be advised of the operational protocol update for index 20. All stakeholders are requested to review institutional guidelines and adhere to academic schedules.",
    priorityLevel: "CRITICAL_ALERT",
    deliveryChannels: ["IN_APP_PORTAL", "EMAIL_DISPATCH", "SMS_TEXT"],
    authorizingDepartment: "Office of the Dean & Academic Directorate"
  },
  {
    templateId: "TMPL-BRD-021",
    templateCode: "COMM_TEMPLATE_21",
    targetRole: "TEACHERS_ONLY",
    subjectTitle: "Official Institutional Notice #21: Academic Operations & Schedule Update",
    bodyContentMarkdown: "Dear Greenfield Community members, please be advised of the operational protocol update for index 21. All stakeholders are requested to review institutional guidelines and adhere to academic schedules.",
    priorityLevel: "ELEVATED",
    deliveryChannels: ["IN_APP_PORTAL", "EMAIL_DISPATCH", "SMS_TEXT"],
    authorizingDepartment: "Office of the Dean & Academic Directorate"
  },
  {
    templateId: "TMPL-BRD-022",
    templateCode: "COMM_TEMPLATE_22",
    targetRole: "STUDENTS_ONLY",
    subjectTitle: "Official Institutional Notice #22: Academic Operations & Schedule Update",
    bodyContentMarkdown: "Dear Greenfield Community members, please be advised of the operational protocol update for index 22. All stakeholders are requested to review institutional guidelines and adhere to academic schedules.",
    priorityLevel: "ROUTINE",
    deliveryChannels: ["IN_APP_PORTAL", "EMAIL_DISPATCH", "SMS_TEXT"],
    authorizingDepartment: "Office of the Dean & Academic Directorate"
  },
  {
    templateId: "TMPL-BRD-023",
    templateCode: "COMM_TEMPLATE_23",
    targetRole: "ALL_COMMUNITY",
    subjectTitle: "Official Institutional Notice #23: Academic Operations & Schedule Update",
    bodyContentMarkdown: "Dear Greenfield Community members, please be advised of the operational protocol update for index 23. All stakeholders are requested to review institutional guidelines and adhere to academic schedules.",
    priorityLevel: "ROUTINE",
    deliveryChannels: ["IN_APP_PORTAL", "EMAIL_DISPATCH", "SMS_TEXT"],
    authorizingDepartment: "Office of the Dean & Academic Directorate"
  },
  {
    templateId: "TMPL-BRD-024",
    templateCode: "COMM_TEMPLATE_24",
    targetRole: "PARENTS_ONLY",
    subjectTitle: "Official Institutional Notice #24: Academic Operations & Schedule Update",
    bodyContentMarkdown: "Dear Greenfield Community members, please be advised of the operational protocol update for index 24. All stakeholders are requested to review institutional guidelines and adhere to academic schedules.",
    priorityLevel: "ELEVATED",
    deliveryChannels: ["IN_APP_PORTAL", "EMAIL_DISPATCH", "SMS_TEXT"],
    authorizingDepartment: "Office of the Dean & Academic Directorate"
  },
  {
    templateId: "TMPL-BRD-025",
    templateCode: "COMM_TEMPLATE_25",
    targetRole: "TEACHERS_ONLY",
    subjectTitle: "Official Institutional Notice #25: Academic Operations & Schedule Update",
    bodyContentMarkdown: "Dear Greenfield Community members, please be advised of the operational protocol update for index 25. All stakeholders are requested to review institutional guidelines and adhere to academic schedules.",
    priorityLevel: "CRITICAL_ALERT",
    deliveryChannels: ["IN_APP_PORTAL", "EMAIL_DISPATCH", "SMS_TEXT"],
    authorizingDepartment: "Office of the Dean & Academic Directorate"
  },
  {
    templateId: "TMPL-BRD-026",
    templateCode: "COMM_TEMPLATE_26",
    targetRole: "STUDENTS_ONLY",
    subjectTitle: "Official Institutional Notice #26: Academic Operations & Schedule Update",
    bodyContentMarkdown: "Dear Greenfield Community members, please be advised of the operational protocol update for index 26. All stakeholders are requested to review institutional guidelines and adhere to academic schedules.",
    priorityLevel: "ROUTINE",
    deliveryChannels: ["IN_APP_PORTAL", "EMAIL_DISPATCH", "SMS_TEXT"],
    authorizingDepartment: "Office of the Dean & Academic Directorate"
  },
  {
    templateId: "TMPL-BRD-027",
    templateCode: "COMM_TEMPLATE_27",
    targetRole: "ALL_COMMUNITY",
    subjectTitle: "Official Institutional Notice #27: Academic Operations & Schedule Update",
    bodyContentMarkdown: "Dear Greenfield Community members, please be advised of the operational protocol update for index 27. All stakeholders are requested to review institutional guidelines and adhere to academic schedules.",
    priorityLevel: "ELEVATED",
    deliveryChannels: ["IN_APP_PORTAL", "EMAIL_DISPATCH", "SMS_TEXT"],
    authorizingDepartment: "Office of the Dean & Academic Directorate"
  },
  {
    templateId: "TMPL-BRD-028",
    templateCode: "COMM_TEMPLATE_28",
    targetRole: "PARENTS_ONLY",
    subjectTitle: "Official Institutional Notice #28: Academic Operations & Schedule Update",
    bodyContentMarkdown: "Dear Greenfield Community members, please be advised of the operational protocol update for index 28. All stakeholders are requested to review institutional guidelines and adhere to academic schedules.",
    priorityLevel: "ROUTINE",
    deliveryChannels: ["IN_APP_PORTAL", "EMAIL_DISPATCH", "SMS_TEXT"],
    authorizingDepartment: "Office of the Dean & Academic Directorate"
  },
  {
    templateId: "TMPL-BRD-029",
    templateCode: "COMM_TEMPLATE_29",
    targetRole: "TEACHERS_ONLY",
    subjectTitle: "Official Institutional Notice #29: Academic Operations & Schedule Update",
    bodyContentMarkdown: "Dear Greenfield Community members, please be advised of the operational protocol update for index 29. All stakeholders are requested to review institutional guidelines and adhere to academic schedules.",
    priorityLevel: "ROUTINE",
    deliveryChannels: ["IN_APP_PORTAL", "EMAIL_DISPATCH", "SMS_TEXT"],
    authorizingDepartment: "Office of the Dean & Academic Directorate"
  },
  {
    templateId: "TMPL-BRD-030",
    templateCode: "COMM_TEMPLATE_30",
    targetRole: "STUDENTS_ONLY",
    subjectTitle: "Official Institutional Notice #30: Academic Operations & Schedule Update",
    bodyContentMarkdown: "Dear Greenfield Community members, please be advised of the operational protocol update for index 30. All stakeholders are requested to review institutional guidelines and adhere to academic schedules.",
    priorityLevel: "CRITICAL_ALERT",
    deliveryChannels: ["IN_APP_PORTAL", "EMAIL_DISPATCH", "SMS_TEXT"],
    authorizingDepartment: "Office of the Dean & Academic Directorate"
  },
  {
    templateId: "TMPL-BRD-031",
    templateCode: "COMM_TEMPLATE_31",
    targetRole: "ALL_COMMUNITY",
    subjectTitle: "Official Institutional Notice #31: Academic Operations & Schedule Update",
    bodyContentMarkdown: "Dear Greenfield Community members, please be advised of the operational protocol update for index 31. All stakeholders are requested to review institutional guidelines and adhere to academic schedules.",
    priorityLevel: "ROUTINE",
    deliveryChannels: ["IN_APP_PORTAL", "EMAIL_DISPATCH", "SMS_TEXT"],
    authorizingDepartment: "Office of the Dean & Academic Directorate"
  },
  {
    templateId: "TMPL-BRD-032",
    templateCode: "COMM_TEMPLATE_32",
    targetRole: "PARENTS_ONLY",
    subjectTitle: "Official Institutional Notice #32: Academic Operations & Schedule Update",
    bodyContentMarkdown: "Dear Greenfield Community members, please be advised of the operational protocol update for index 32. All stakeholders are requested to review institutional guidelines and adhere to academic schedules.",
    priorityLevel: "ROUTINE",
    deliveryChannels: ["IN_APP_PORTAL", "EMAIL_DISPATCH", "SMS_TEXT"],
    authorizingDepartment: "Office of the Dean & Academic Directorate"
  },
  {
    templateId: "TMPL-BRD-033",
    templateCode: "COMM_TEMPLATE_33",
    targetRole: "TEACHERS_ONLY",
    subjectTitle: "Official Institutional Notice #33: Academic Operations & Schedule Update",
    bodyContentMarkdown: "Dear Greenfield Community members, please be advised of the operational protocol update for index 33. All stakeholders are requested to review institutional guidelines and adhere to academic schedules.",
    priorityLevel: "ELEVATED",
    deliveryChannels: ["IN_APP_PORTAL", "EMAIL_DISPATCH", "SMS_TEXT"],
    authorizingDepartment: "Office of the Dean & Academic Directorate"
  },
  {
    templateId: "TMPL-BRD-034",
    templateCode: "COMM_TEMPLATE_34",
    targetRole: "STUDENTS_ONLY",
    subjectTitle: "Official Institutional Notice #34: Academic Operations & Schedule Update",
    bodyContentMarkdown: "Dear Greenfield Community members, please be advised of the operational protocol update for index 34. All stakeholders are requested to review institutional guidelines and adhere to academic schedules.",
    priorityLevel: "ROUTINE",
    deliveryChannels: ["IN_APP_PORTAL", "EMAIL_DISPATCH", "SMS_TEXT"],
    authorizingDepartment: "Office of the Dean & Academic Directorate"
  },
  {
    templateId: "TMPL-BRD-035",
    templateCode: "COMM_TEMPLATE_35",
    targetRole: "ALL_COMMUNITY",
    subjectTitle: "Official Institutional Notice #35: Academic Operations & Schedule Update",
    bodyContentMarkdown: "Dear Greenfield Community members, please be advised of the operational protocol update for index 35. All stakeholders are requested to review institutional guidelines and adhere to academic schedules.",
    priorityLevel: "CRITICAL_ALERT",
    deliveryChannels: ["IN_APP_PORTAL", "EMAIL_DISPATCH", "SMS_TEXT"],
    authorizingDepartment: "Office of the Dean & Academic Directorate"
  },
  {
    templateId: "TMPL-BRD-036",
    templateCode: "COMM_TEMPLATE_36",
    targetRole: "PARENTS_ONLY",
    subjectTitle: "Official Institutional Notice #36: Academic Operations & Schedule Update",
    bodyContentMarkdown: "Dear Greenfield Community members, please be advised of the operational protocol update for index 36. All stakeholders are requested to review institutional guidelines and adhere to academic schedules.",
    priorityLevel: "ELEVATED",
    deliveryChannels: ["IN_APP_PORTAL", "EMAIL_DISPATCH", "SMS_TEXT"],
    authorizingDepartment: "Office of the Dean & Academic Directorate"
  },
  {
    templateId: "TMPL-BRD-037",
    templateCode: "COMM_TEMPLATE_37",
    targetRole: "TEACHERS_ONLY",
    subjectTitle: "Official Institutional Notice #37: Academic Operations & Schedule Update",
    bodyContentMarkdown: "Dear Greenfield Community members, please be advised of the operational protocol update for index 37. All stakeholders are requested to review institutional guidelines and adhere to academic schedules.",
    priorityLevel: "ROUTINE",
    deliveryChannels: ["IN_APP_PORTAL", "EMAIL_DISPATCH", "SMS_TEXT"],
    authorizingDepartment: "Office of the Dean & Academic Directorate"
  },
  {
    templateId: "TMPL-BRD-038",
    templateCode: "COMM_TEMPLATE_38",
    targetRole: "STUDENTS_ONLY",
    subjectTitle: "Official Institutional Notice #38: Academic Operations & Schedule Update",
    bodyContentMarkdown: "Dear Greenfield Community members, please be advised of the operational protocol update for index 38. All stakeholders are requested to review institutional guidelines and adhere to academic schedules.",
    priorityLevel: "ROUTINE",
    deliveryChannels: ["IN_APP_PORTAL", "EMAIL_DISPATCH", "SMS_TEXT"],
    authorizingDepartment: "Office of the Dean & Academic Directorate"
  },
  {
    templateId: "TMPL-BRD-039",
    templateCode: "COMM_TEMPLATE_39",
    targetRole: "ALL_COMMUNITY",
    subjectTitle: "Official Institutional Notice #39: Academic Operations & Schedule Update",
    bodyContentMarkdown: "Dear Greenfield Community members, please be advised of the operational protocol update for index 39. All stakeholders are requested to review institutional guidelines and adhere to academic schedules.",
    priorityLevel: "ELEVATED",
    deliveryChannels: ["IN_APP_PORTAL", "EMAIL_DISPATCH", "SMS_TEXT"],
    authorizingDepartment: "Office of the Dean & Academic Directorate"
  },
  {
    templateId: "TMPL-BRD-040",
    templateCode: "COMM_TEMPLATE_40",
    targetRole: "PARENTS_ONLY",
    subjectTitle: "Official Institutional Notice #40: Academic Operations & Schedule Update",
    bodyContentMarkdown: "Dear Greenfield Community members, please be advised of the operational protocol update for index 40. All stakeholders are requested to review institutional guidelines and adhere to academic schedules.",
    priorityLevel: "CRITICAL_ALERT",
    deliveryChannels: ["IN_APP_PORTAL", "EMAIL_DISPATCH", "SMS_TEXT"],
    authorizingDepartment: "Office of the Dean & Academic Directorate"
  },
  {
    templateId: "TMPL-BRD-041",
    templateCode: "COMM_TEMPLATE_41",
    targetRole: "TEACHERS_ONLY",
    subjectTitle: "Official Institutional Notice #41: Academic Operations & Schedule Update",
    bodyContentMarkdown: "Dear Greenfield Community members, please be advised of the operational protocol update for index 41. All stakeholders are requested to review institutional guidelines and adhere to academic schedules.",
    priorityLevel: "ROUTINE",
    deliveryChannels: ["IN_APP_PORTAL", "EMAIL_DISPATCH", "SMS_TEXT"],
    authorizingDepartment: "Office of the Dean & Academic Directorate"
  },
  {
    templateId: "TMPL-BRD-042",
    templateCode: "COMM_TEMPLATE_42",
    targetRole: "STUDENTS_ONLY",
    subjectTitle: "Official Institutional Notice #42: Academic Operations & Schedule Update",
    bodyContentMarkdown: "Dear Greenfield Community members, please be advised of the operational protocol update for index 42. All stakeholders are requested to review institutional guidelines and adhere to academic schedules.",
    priorityLevel: "ELEVATED",
    deliveryChannels: ["IN_APP_PORTAL", "EMAIL_DISPATCH", "SMS_TEXT"],
    authorizingDepartment: "Office of the Dean & Academic Directorate"
  },
  {
    templateId: "TMPL-BRD-043",
    templateCode: "COMM_TEMPLATE_43",
    targetRole: "ALL_COMMUNITY",
    subjectTitle: "Official Institutional Notice #43: Academic Operations & Schedule Update",
    bodyContentMarkdown: "Dear Greenfield Community members, please be advised of the operational protocol update for index 43. All stakeholders are requested to review institutional guidelines and adhere to academic schedules.",
    priorityLevel: "ROUTINE",
    deliveryChannels: ["IN_APP_PORTAL", "EMAIL_DISPATCH", "SMS_TEXT"],
    authorizingDepartment: "Office of the Dean & Academic Directorate"
  },
  {
    templateId: "TMPL-BRD-044",
    templateCode: "COMM_TEMPLATE_44",
    targetRole: "PARENTS_ONLY",
    subjectTitle: "Official Institutional Notice #44: Academic Operations & Schedule Update",
    bodyContentMarkdown: "Dear Greenfield Community members, please be advised of the operational protocol update for index 44. All stakeholders are requested to review institutional guidelines and adhere to academic schedules.",
    priorityLevel: "ROUTINE",
    deliveryChannels: ["IN_APP_PORTAL", "EMAIL_DISPATCH", "SMS_TEXT"],
    authorizingDepartment: "Office of the Dean & Academic Directorate"
  },
  {
    templateId: "TMPL-BRD-045",
    templateCode: "COMM_TEMPLATE_45",
    targetRole: "TEACHERS_ONLY",
    subjectTitle: "Official Institutional Notice #45: Academic Operations & Schedule Update",
    bodyContentMarkdown: "Dear Greenfield Community members, please be advised of the operational protocol update for index 45. All stakeholders are requested to review institutional guidelines and adhere to academic schedules.",
    priorityLevel: "CRITICAL_ALERT",
    deliveryChannels: ["IN_APP_PORTAL", "EMAIL_DISPATCH", "SMS_TEXT"],
    authorizingDepartment: "Office of the Dean & Academic Directorate"
  },
  {
    templateId: "TMPL-BRD-046",
    templateCode: "COMM_TEMPLATE_46",
    targetRole: "STUDENTS_ONLY",
    subjectTitle: "Official Institutional Notice #46: Academic Operations & Schedule Update",
    bodyContentMarkdown: "Dear Greenfield Community members, please be advised of the operational protocol update for index 46. All stakeholders are requested to review institutional guidelines and adhere to academic schedules.",
    priorityLevel: "ROUTINE",
    deliveryChannels: ["IN_APP_PORTAL", "EMAIL_DISPATCH", "SMS_TEXT"],
    authorizingDepartment: "Office of the Dean & Academic Directorate"
  },
  {
    templateId: "TMPL-BRD-047",
    templateCode: "COMM_TEMPLATE_47",
    targetRole: "ALL_COMMUNITY",
    subjectTitle: "Official Institutional Notice #47: Academic Operations & Schedule Update",
    bodyContentMarkdown: "Dear Greenfield Community members, please be advised of the operational protocol update for index 47. All stakeholders are requested to review institutional guidelines and adhere to academic schedules.",
    priorityLevel: "ROUTINE",
    deliveryChannels: ["IN_APP_PORTAL", "EMAIL_DISPATCH", "SMS_TEXT"],
    authorizingDepartment: "Office of the Dean & Academic Directorate"
  },
  {
    templateId: "TMPL-BRD-048",
    templateCode: "COMM_TEMPLATE_48",
    targetRole: "PARENTS_ONLY",
    subjectTitle: "Official Institutional Notice #48: Academic Operations & Schedule Update",
    bodyContentMarkdown: "Dear Greenfield Community members, please be advised of the operational protocol update for index 48. All stakeholders are requested to review institutional guidelines and adhere to academic schedules.",
    priorityLevel: "ELEVATED",
    deliveryChannels: ["IN_APP_PORTAL", "EMAIL_DISPATCH", "SMS_TEXT"],
    authorizingDepartment: "Office of the Dean & Academic Directorate"
  },
  {
    templateId: "TMPL-BRD-049",
    templateCode: "COMM_TEMPLATE_49",
    targetRole: "TEACHERS_ONLY",
    subjectTitle: "Official Institutional Notice #49: Academic Operations & Schedule Update",
    bodyContentMarkdown: "Dear Greenfield Community members, please be advised of the operational protocol update for index 49. All stakeholders are requested to review institutional guidelines and adhere to academic schedules.",
    priorityLevel: "ROUTINE",
    deliveryChannels: ["IN_APP_PORTAL", "EMAIL_DISPATCH", "SMS_TEXT"],
    authorizingDepartment: "Office of the Dean & Academic Directorate"
  },
  {
    templateId: "TMPL-BRD-050",
    templateCode: "COMM_TEMPLATE_50",
    targetRole: "STUDENTS_ONLY",
    subjectTitle: "Official Institutional Notice #50: Academic Operations & Schedule Update",
    bodyContentMarkdown: "Dear Greenfield Community members, please be advised of the operational protocol update for index 50. All stakeholders are requested to review institutional guidelines and adhere to academic schedules.",
    priorityLevel: "CRITICAL_ALERT",
    deliveryChannels: ["IN_APP_PORTAL", "EMAIL_DISPATCH", "SMS_TEXT"],
    authorizingDepartment: "Office of the Dean & Academic Directorate"
  },
  {
    templateId: "TMPL-BRD-051",
    templateCode: "COMM_TEMPLATE_51",
    targetRole: "ALL_COMMUNITY",
    subjectTitle: "Official Institutional Notice #51: Academic Operations & Schedule Update",
    bodyContentMarkdown: "Dear Greenfield Community members, please be advised of the operational protocol update for index 51. All stakeholders are requested to review institutional guidelines and adhere to academic schedules.",
    priorityLevel: "ELEVATED",
    deliveryChannels: ["IN_APP_PORTAL", "EMAIL_DISPATCH", "SMS_TEXT"],
    authorizingDepartment: "Office of the Dean & Academic Directorate"
  },
  {
    templateId: "TMPL-BRD-052",
    templateCode: "COMM_TEMPLATE_52",
    targetRole: "PARENTS_ONLY",
    subjectTitle: "Official Institutional Notice #52: Academic Operations & Schedule Update",
    bodyContentMarkdown: "Dear Greenfield Community members, please be advised of the operational protocol update for index 52. All stakeholders are requested to review institutional guidelines and adhere to academic schedules.",
    priorityLevel: "ROUTINE",
    deliveryChannels: ["IN_APP_PORTAL", "EMAIL_DISPATCH", "SMS_TEXT"],
    authorizingDepartment: "Office of the Dean & Academic Directorate"
  },
  {
    templateId: "TMPL-BRD-053",
    templateCode: "COMM_TEMPLATE_53",
    targetRole: "TEACHERS_ONLY",
    subjectTitle: "Official Institutional Notice #53: Academic Operations & Schedule Update",
    bodyContentMarkdown: "Dear Greenfield Community members, please be advised of the operational protocol update for index 53. All stakeholders are requested to review institutional guidelines and adhere to academic schedules.",
    priorityLevel: "ROUTINE",
    deliveryChannels: ["IN_APP_PORTAL", "EMAIL_DISPATCH", "SMS_TEXT"],
    authorizingDepartment: "Office of the Dean & Academic Directorate"
  },
  {
    templateId: "TMPL-BRD-054",
    templateCode: "COMM_TEMPLATE_54",
    targetRole: "STUDENTS_ONLY",
    subjectTitle: "Official Institutional Notice #54: Academic Operations & Schedule Update",
    bodyContentMarkdown: "Dear Greenfield Community members, please be advised of the operational protocol update for index 54. All stakeholders are requested to review institutional guidelines and adhere to academic schedules.",
    priorityLevel: "ELEVATED",
    deliveryChannels: ["IN_APP_PORTAL", "EMAIL_DISPATCH", "SMS_TEXT"],
    authorizingDepartment: "Office of the Dean & Academic Directorate"
  },
  {
    templateId: "TMPL-BRD-055",
    templateCode: "COMM_TEMPLATE_55",
    targetRole: "ALL_COMMUNITY",
    subjectTitle: "Official Institutional Notice #55: Academic Operations & Schedule Update",
    bodyContentMarkdown: "Dear Greenfield Community members, please be advised of the operational protocol update for index 55. All stakeholders are requested to review institutional guidelines and adhere to academic schedules.",
    priorityLevel: "CRITICAL_ALERT",
    deliveryChannels: ["IN_APP_PORTAL", "EMAIL_DISPATCH", "SMS_TEXT"],
    authorizingDepartment: "Office of the Dean & Academic Directorate"
  },
  {
    templateId: "TMPL-BRD-056",
    templateCode: "COMM_TEMPLATE_56",
    targetRole: "PARENTS_ONLY",
    subjectTitle: "Official Institutional Notice #56: Academic Operations & Schedule Update",
    bodyContentMarkdown: "Dear Greenfield Community members, please be advised of the operational protocol update for index 56. All stakeholders are requested to review institutional guidelines and adhere to academic schedules.",
    priorityLevel: "ROUTINE",
    deliveryChannels: ["IN_APP_PORTAL", "EMAIL_DISPATCH", "SMS_TEXT"],
    authorizingDepartment: "Office of the Dean & Academic Directorate"
  },
  {
    templateId: "TMPL-BRD-057",
    templateCode: "COMM_TEMPLATE_57",
    targetRole: "TEACHERS_ONLY",
    subjectTitle: "Official Institutional Notice #57: Academic Operations & Schedule Update",
    bodyContentMarkdown: "Dear Greenfield Community members, please be advised of the operational protocol update for index 57. All stakeholders are requested to review institutional guidelines and adhere to academic schedules.",
    priorityLevel: "ELEVATED",
    deliveryChannels: ["IN_APP_PORTAL", "EMAIL_DISPATCH", "SMS_TEXT"],
    authorizingDepartment: "Office of the Dean & Academic Directorate"
  },
  {
    templateId: "TMPL-BRD-058",
    templateCode: "COMM_TEMPLATE_58",
    targetRole: "STUDENTS_ONLY",
    subjectTitle: "Official Institutional Notice #58: Academic Operations & Schedule Update",
    bodyContentMarkdown: "Dear Greenfield Community members, please be advised of the operational protocol update for index 58. All stakeholders are requested to review institutional guidelines and adhere to academic schedules.",
    priorityLevel: "ROUTINE",
    deliveryChannels: ["IN_APP_PORTAL", "EMAIL_DISPATCH", "SMS_TEXT"],
    authorizingDepartment: "Office of the Dean & Academic Directorate"
  },
  {
    templateId: "TMPL-BRD-059",
    templateCode: "COMM_TEMPLATE_59",
    targetRole: "ALL_COMMUNITY",
    subjectTitle: "Official Institutional Notice #59: Academic Operations & Schedule Update",
    bodyContentMarkdown: "Dear Greenfield Community members, please be advised of the operational protocol update for index 59. All stakeholders are requested to review institutional guidelines and adhere to academic schedules.",
    priorityLevel: "ROUTINE",
    deliveryChannels: ["IN_APP_PORTAL", "EMAIL_DISPATCH", "SMS_TEXT"],
    authorizingDepartment: "Office of the Dean & Academic Directorate"
  },
  {
    templateId: "TMPL-BRD-060",
    templateCode: "COMM_TEMPLATE_60",
    targetRole: "PARENTS_ONLY",
    subjectTitle: "Official Institutional Notice #60: Academic Operations & Schedule Update",
    bodyContentMarkdown: "Dear Greenfield Community members, please be advised of the operational protocol update for index 60. All stakeholders are requested to review institutional guidelines and adhere to academic schedules.",
    priorityLevel: "CRITICAL_ALERT",
    deliveryChannels: ["IN_APP_PORTAL", "EMAIL_DISPATCH", "SMS_TEXT"],
    authorizingDepartment: "Office of the Dean & Academic Directorate"
  },
];

@Injectable()
export class BroadcastTemplatesService {
  public getAllTemplates(): BroadcastTemplate[] {
    return MASTER_BROADCAST_TEMPLATES;
  }

  public getTemplatesForRole(role: BroadcastTemplate['targetRole']): BroadcastTemplate[] {
    return MASTER_BROADCAST_TEMPLATES.filter(t => t.targetRole === role || t.targetRole === 'ALL_COMMUNITY');
  }
}
