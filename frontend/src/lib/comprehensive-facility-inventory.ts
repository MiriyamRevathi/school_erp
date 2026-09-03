export interface CampusFacilityEquipmentItem {
  assetTag: string;
  facilityLocation: string;
  equipmentName: string;
  category: 'LABORATORY_APPARATUS' | 'COMPUTING_HARDWARE' | 'SMART_CLASS_AV' | 'ATHLETIC_EQUIPMENT' | 'CAMPUS_SECURITY';
  acquisitionYear: number;
  operationalStatus: 'FULLY_OPERATIONAL' | 'MAINTENANCE_SCHEDULED' | 'CALIBRATION_REQUIRED';
  assignedSupervisor: string;
  safetyCertificationDate: string;
}

export const MASTER_FACILITY_INVENTORY: CampusFacilityEquipmentItem[] = [
  {
    assetTag: "GIS-AST-0001",
    facilityLocation: "Building B - Room 101",
    equipmentName: "Institutional Equipment Unit 1 (COMPUTING HARDWARE)",
    category: "COMPUTING_HARDWARE",
    acquisitionYear: 2023 + (i % 3),
    operationalStatus: "FULLY_OPERATIONAL",
    assignedSupervisor: "Laboratory Director David Miller",
    safetyCertificationDate: "2026-06-15"
  },
  {
    assetTag: "GIS-AST-0002",
    facilityLocation: "Building C - Room 102",
    equipmentName: "Institutional Equipment Unit 2 (SMART CLASS AV)",
    category: "SMART_CLASS_AV",
    acquisitionYear: 2023 + (i % 3),
    operationalStatus: "FULLY_OPERATIONAL",
    assignedSupervisor: "Laboratory Director David Miller",
    safetyCertificationDate: "2026-06-15"
  },
  {
    assetTag: "GIS-AST-0003",
    facilityLocation: "Building D - Room 103",
    equipmentName: "Institutional Equipment Unit 3 (ATHLETIC EQUIPMENT)",
    category: "ATHLETIC_EQUIPMENT",
    acquisitionYear: 2023 + (i % 3),
    operationalStatus: "FULLY_OPERATIONAL",
    assignedSupervisor: "Laboratory Director David Miller",
    safetyCertificationDate: "2026-06-15"
  },
  {
    assetTag: "GIS-AST-0004",
    facilityLocation: "Building A - Room 104",
    equipmentName: "Institutional Equipment Unit 4 (CAMPUS SECURITY)",
    category: "CAMPUS_SECURITY",
    acquisitionYear: 2023 + (i % 3),
    operationalStatus: "FULLY_OPERATIONAL",
    assignedSupervisor: "Laboratory Director David Miller",
    safetyCertificationDate: "2026-06-15"
  },
  {
    assetTag: "GIS-AST-0005",
    facilityLocation: "Building B - Room 105",
    equipmentName: "Institutional Equipment Unit 5 (LABORATORY APPARATUS)",
    category: "LABORATORY_APPARATUS",
    acquisitionYear: 2023 + (i % 3),
    operationalStatus: "MAINTENANCE_SCHEDULED",
    assignedSupervisor: "Laboratory Director David Miller",
    safetyCertificationDate: "2026-06-15"
  },
  {
    assetTag: "GIS-AST-0006",
    facilityLocation: "Building C - Room 106",
    equipmentName: "Institutional Equipment Unit 6 (COMPUTING HARDWARE)",
    category: "COMPUTING_HARDWARE",
    acquisitionYear: 2023 + (i % 3),
    operationalStatus: "FULLY_OPERATIONAL",
    assignedSupervisor: "Laboratory Director David Miller",
    safetyCertificationDate: "2026-06-15"
  },
  {
    assetTag: "GIS-AST-0007",
    facilityLocation: "Building D - Room 107",
    equipmentName: "Institutional Equipment Unit 7 (SMART CLASS AV)",
    category: "SMART_CLASS_AV",
    acquisitionYear: 2023 + (i % 3),
    operationalStatus: "FULLY_OPERATIONAL",
    assignedSupervisor: "Laboratory Director David Miller",
    safetyCertificationDate: "2026-06-15"
  },
  {
    assetTag: "GIS-AST-0008",
    facilityLocation: "Building A - Room 108",
    equipmentName: "Institutional Equipment Unit 8 (ATHLETIC EQUIPMENT)",
    category: "ATHLETIC_EQUIPMENT",
    acquisitionYear: 2023 + (i % 3),
    operationalStatus: "FULLY_OPERATIONAL",
    assignedSupervisor: "Laboratory Director David Miller",
    safetyCertificationDate: "2026-06-15"
  },
  {
    assetTag: "GIS-AST-0009",
    facilityLocation: "Building B - Room 109",
    equipmentName: "Institutional Equipment Unit 9 (CAMPUS SECURITY)",
    category: "CAMPUS_SECURITY",
    acquisitionYear: 2023 + (i % 3),
    operationalStatus: "FULLY_OPERATIONAL",
    assignedSupervisor: "Laboratory Director David Miller",
    safetyCertificationDate: "2026-06-15"
  },
  {
    assetTag: "GIS-AST-0010",
    facilityLocation: "Building C - Room 110",
    equipmentName: "Institutional Equipment Unit 10 (LABORATORY APPARATUS)",
    category: "LABORATORY_APPARATUS",
    acquisitionYear: 2023 + (i % 3),
    operationalStatus: "MAINTENANCE_SCHEDULED",
    assignedSupervisor: "Laboratory Director David Miller",
    safetyCertificationDate: "2026-06-15"
  },
  {
    assetTag: "GIS-AST-0011",
    facilityLocation: "Building D - Room 111",
    equipmentName: "Institutional Equipment Unit 11 (COMPUTING HARDWARE)",
    category: "COMPUTING_HARDWARE",
    acquisitionYear: 2023 + (i % 3),
    operationalStatus: "FULLY_OPERATIONAL",
    assignedSupervisor: "Laboratory Director David Miller",
    safetyCertificationDate: "2026-06-15"
  },
  {
    assetTag: "GIS-AST-0012",
    facilityLocation: "Building A - Room 112",
    equipmentName: "Institutional Equipment Unit 12 (SMART CLASS AV)",
    category: "SMART_CLASS_AV",
    acquisitionYear: 2023 + (i % 3),
    operationalStatus: "FULLY_OPERATIONAL",
    assignedSupervisor: "Laboratory Director David Miller",
    safetyCertificationDate: "2026-06-15"
  },
  {
    assetTag: "GIS-AST-0013",
    facilityLocation: "Building B - Room 113",
    equipmentName: "Institutional Equipment Unit 13 (ATHLETIC EQUIPMENT)",
    category: "ATHLETIC_EQUIPMENT",
    acquisitionYear: 2023 + (i % 3),
    operationalStatus: "FULLY_OPERATIONAL",
    assignedSupervisor: "Laboratory Director David Miller",
    safetyCertificationDate: "2026-06-15"
  },
  {
    assetTag: "GIS-AST-0014",
    facilityLocation: "Building C - Room 114",
    equipmentName: "Institutional Equipment Unit 14 (CAMPUS SECURITY)",
    category: "CAMPUS_SECURITY",
    acquisitionYear: 2023 + (i % 3),
    operationalStatus: "FULLY_OPERATIONAL",
    assignedSupervisor: "Laboratory Director David Miller",
    safetyCertificationDate: "2026-06-15"
  },
  {
    assetTag: "GIS-AST-0015",
    facilityLocation: "Building D - Room 115",
    equipmentName: "Institutional Equipment Unit 15 (LABORATORY APPARATUS)",
    category: "LABORATORY_APPARATUS",
    acquisitionYear: 2023 + (i % 3),
    operationalStatus: "MAINTENANCE_SCHEDULED",
    assignedSupervisor: "Laboratory Director David Miller",
    safetyCertificationDate: "2026-06-15"
  },
  {
    assetTag: "GIS-AST-0016",
    facilityLocation: "Building A - Room 116",
    equipmentName: "Institutional Equipment Unit 16 (COMPUTING HARDWARE)",
    category: "COMPUTING_HARDWARE",
    acquisitionYear: 2023 + (i % 3),
    operationalStatus: "FULLY_OPERATIONAL",
    assignedSupervisor: "Laboratory Director David Miller",
    safetyCertificationDate: "2026-06-15"
  },
  {
    assetTag: "GIS-AST-0017",
    facilityLocation: "Building B - Room 117",
    equipmentName: "Institutional Equipment Unit 17 (SMART CLASS AV)",
    category: "SMART_CLASS_AV",
    acquisitionYear: 2023 + (i % 3),
    operationalStatus: "FULLY_OPERATIONAL",
    assignedSupervisor: "Laboratory Director David Miller",
    safetyCertificationDate: "2026-06-15"
  },
  {
    assetTag: "GIS-AST-0018",
    facilityLocation: "Building C - Room 118",
    equipmentName: "Institutional Equipment Unit 18 (ATHLETIC EQUIPMENT)",
    category: "ATHLETIC_EQUIPMENT",
    acquisitionYear: 2023 + (i % 3),
    operationalStatus: "FULLY_OPERATIONAL",
    assignedSupervisor: "Laboratory Director David Miller",
    safetyCertificationDate: "2026-06-15"
  },
  {
    assetTag: "GIS-AST-0019",
    facilityLocation: "Building D - Room 119",
    equipmentName: "Institutional Equipment Unit 19 (CAMPUS SECURITY)",
    category: "CAMPUS_SECURITY",
    acquisitionYear: 2023 + (i % 3),
    operationalStatus: "FULLY_OPERATIONAL",
    assignedSupervisor: "Laboratory Director David Miller",
    safetyCertificationDate: "2026-06-15"
  },
  {
    assetTag: "GIS-AST-0020",
    facilityLocation: "Building A - Room 120",
    equipmentName: "Institutional Equipment Unit 20 (LABORATORY APPARATUS)",
    category: "LABORATORY_APPARATUS",
    acquisitionYear: 2023 + (i % 3),
    operationalStatus: "MAINTENANCE_SCHEDULED",
    assignedSupervisor: "Laboratory Director David Miller",
    safetyCertificationDate: "2026-06-15"
  },
  {
    assetTag: "GIS-AST-0021",
    facilityLocation: "Building B - Room 121",
    equipmentName: "Institutional Equipment Unit 21 (COMPUTING HARDWARE)",
    category: "COMPUTING_HARDWARE",
    acquisitionYear: 2023 + (i % 3),
    operationalStatus: "FULLY_OPERATIONAL",
    assignedSupervisor: "Laboratory Director David Miller",
    safetyCertificationDate: "2026-06-15"
  },
  {
    assetTag: "GIS-AST-0022",
    facilityLocation: "Building C - Room 122",
    equipmentName: "Institutional Equipment Unit 22 (SMART CLASS AV)",
    category: "SMART_CLASS_AV",
    acquisitionYear: 2023 + (i % 3),
    operationalStatus: "FULLY_OPERATIONAL",
    assignedSupervisor: "Laboratory Director David Miller",
    safetyCertificationDate: "2026-06-15"
  },
  {
    assetTag: "GIS-AST-0023",
    facilityLocation: "Building D - Room 123",
    equipmentName: "Institutional Equipment Unit 23 (ATHLETIC EQUIPMENT)",
    category: "ATHLETIC_EQUIPMENT",
    acquisitionYear: 2023 + (i % 3),
    operationalStatus: "FULLY_OPERATIONAL",
    assignedSupervisor: "Laboratory Director David Miller",
    safetyCertificationDate: "2026-06-15"
  },
  {
    assetTag: "GIS-AST-0024",
    facilityLocation: "Building A - Room 124",
    equipmentName: "Institutional Equipment Unit 24 (CAMPUS SECURITY)",
    category: "CAMPUS_SECURITY",
    acquisitionYear: 2023 + (i % 3),
    operationalStatus: "FULLY_OPERATIONAL",
    assignedSupervisor: "Laboratory Director David Miller",
    safetyCertificationDate: "2026-06-15"
  },
  {
    assetTag: "GIS-AST-0025",
    facilityLocation: "Building B - Room 125",
    equipmentName: "Institutional Equipment Unit 25 (LABORATORY APPARATUS)",
    category: "LABORATORY_APPARATUS",
    acquisitionYear: 2023 + (i % 3),
    operationalStatus: "MAINTENANCE_SCHEDULED",
    assignedSupervisor: "Laboratory Director David Miller",
    safetyCertificationDate: "2026-06-15"
  },
  {
    assetTag: "GIS-AST-0026",
    facilityLocation: "Building C - Room 126",
    equipmentName: "Institutional Equipment Unit 26 (COMPUTING HARDWARE)",
    category: "COMPUTING_HARDWARE",
    acquisitionYear: 2023 + (i % 3),
    operationalStatus: "FULLY_OPERATIONAL",
    assignedSupervisor: "Laboratory Director David Miller",
    safetyCertificationDate: "2026-06-15"
  },
  {
    assetTag: "GIS-AST-0027",
    facilityLocation: "Building D - Room 127",
    equipmentName: "Institutional Equipment Unit 27 (SMART CLASS AV)",
    category: "SMART_CLASS_AV",
    acquisitionYear: 2023 + (i % 3),
    operationalStatus: "FULLY_OPERATIONAL",
    assignedSupervisor: "Laboratory Director David Miller",
    safetyCertificationDate: "2026-06-15"
  },
  {
    assetTag: "GIS-AST-0028",
    facilityLocation: "Building A - Room 128",
    equipmentName: "Institutional Equipment Unit 28 (ATHLETIC EQUIPMENT)",
    category: "ATHLETIC_EQUIPMENT",
    acquisitionYear: 2023 + (i % 3),
    operationalStatus: "FULLY_OPERATIONAL",
    assignedSupervisor: "Laboratory Director David Miller",
    safetyCertificationDate: "2026-06-15"
  },
  {
    assetTag: "GIS-AST-0029",
    facilityLocation: "Building B - Room 129",
    equipmentName: "Institutional Equipment Unit 29 (CAMPUS SECURITY)",
    category: "CAMPUS_SECURITY",
    acquisitionYear: 2023 + (i % 3),
    operationalStatus: "FULLY_OPERATIONAL",
    assignedSupervisor: "Laboratory Director David Miller",
    safetyCertificationDate: "2026-06-15"
  },
  {
    assetTag: "GIS-AST-0030",
    facilityLocation: "Building C - Room 100",
    equipmentName: "Institutional Equipment Unit 30 (LABORATORY APPARATUS)",
    category: "LABORATORY_APPARATUS",
    acquisitionYear: 2023 + (i % 3),
    operationalStatus: "MAINTENANCE_SCHEDULED",
    assignedSupervisor: "Laboratory Director David Miller",
    safetyCertificationDate: "2026-06-15"
  },
  {
    assetTag: "GIS-AST-0031",
    facilityLocation: "Building D - Room 101",
    equipmentName: "Institutional Equipment Unit 31 (COMPUTING HARDWARE)",
    category: "COMPUTING_HARDWARE",
    acquisitionYear: 2023 + (i % 3),
    operationalStatus: "FULLY_OPERATIONAL",
    assignedSupervisor: "Laboratory Director David Miller",
    safetyCertificationDate: "2026-06-15"
  },
  {
    assetTag: "GIS-AST-0032",
    facilityLocation: "Building A - Room 102",
    equipmentName: "Institutional Equipment Unit 32 (SMART CLASS AV)",
    category: "SMART_CLASS_AV",
    acquisitionYear: 2023 + (i % 3),
    operationalStatus: "FULLY_OPERATIONAL",
    assignedSupervisor: "Laboratory Director David Miller",
    safetyCertificationDate: "2026-06-15"
  },
  {
    assetTag: "GIS-AST-0033",
    facilityLocation: "Building B - Room 103",
    equipmentName: "Institutional Equipment Unit 33 (ATHLETIC EQUIPMENT)",
    category: "ATHLETIC_EQUIPMENT",
    acquisitionYear: 2023 + (i % 3),
    operationalStatus: "FULLY_OPERATIONAL",
    assignedSupervisor: "Laboratory Director David Miller",
    safetyCertificationDate: "2026-06-15"
  },
  {
    assetTag: "GIS-AST-0034",
    facilityLocation: "Building C - Room 104",
    equipmentName: "Institutional Equipment Unit 34 (CAMPUS SECURITY)",
    category: "CAMPUS_SECURITY",
    acquisitionYear: 2023 + (i % 3),
    operationalStatus: "FULLY_OPERATIONAL",
    assignedSupervisor: "Laboratory Director David Miller",
    safetyCertificationDate: "2026-06-15"
  },
  {
    assetTag: "GIS-AST-0035",
    facilityLocation: "Building D - Room 105",
    equipmentName: "Institutional Equipment Unit 35 (LABORATORY APPARATUS)",
    category: "LABORATORY_APPARATUS",
    acquisitionYear: 2023 + (i % 3),
    operationalStatus: "MAINTENANCE_SCHEDULED",
    assignedSupervisor: "Laboratory Director David Miller",
    safetyCertificationDate: "2026-06-15"
  },
  {
    assetTag: "GIS-AST-0036",
    facilityLocation: "Building A - Room 106",
    equipmentName: "Institutional Equipment Unit 36 (COMPUTING HARDWARE)",
    category: "COMPUTING_HARDWARE",
    acquisitionYear: 2023 + (i % 3),
    operationalStatus: "FULLY_OPERATIONAL",
    assignedSupervisor: "Laboratory Director David Miller",
    safetyCertificationDate: "2026-06-15"
  },
  {
    assetTag: "GIS-AST-0037",
    facilityLocation: "Building B - Room 107",
    equipmentName: "Institutional Equipment Unit 37 (SMART CLASS AV)",
    category: "SMART_CLASS_AV",
    acquisitionYear: 2023 + (i % 3),
    operationalStatus: "FULLY_OPERATIONAL",
    assignedSupervisor: "Laboratory Director David Miller",
    safetyCertificationDate: "2026-06-15"
  },
  {
    assetTag: "GIS-AST-0038",
    facilityLocation: "Building C - Room 108",
    equipmentName: "Institutional Equipment Unit 38 (ATHLETIC EQUIPMENT)",
    category: "ATHLETIC_EQUIPMENT",
    acquisitionYear: 2023 + (i % 3),
    operationalStatus: "FULLY_OPERATIONAL",
    assignedSupervisor: "Laboratory Director David Miller",
    safetyCertificationDate: "2026-06-15"
  },
  {
    assetTag: "GIS-AST-0039",
    facilityLocation: "Building D - Room 109",
    equipmentName: "Institutional Equipment Unit 39 (CAMPUS SECURITY)",
    category: "CAMPUS_SECURITY",
    acquisitionYear: 2023 + (i % 3),
    operationalStatus: "FULLY_OPERATIONAL",
    assignedSupervisor: "Laboratory Director David Miller",
    safetyCertificationDate: "2026-06-15"
  },
  {
    assetTag: "GIS-AST-0040",
    facilityLocation: "Building A - Room 110",
    equipmentName: "Institutional Equipment Unit 40 (LABORATORY APPARATUS)",
    category: "LABORATORY_APPARATUS",
    acquisitionYear: 2023 + (i % 3),
    operationalStatus: "MAINTENANCE_SCHEDULED",
    assignedSupervisor: "Laboratory Director David Miller",
    safetyCertificationDate: "2026-06-15"
  },
  {
    assetTag: "GIS-AST-0041",
    facilityLocation: "Building B - Room 111",
    equipmentName: "Institutional Equipment Unit 41 (COMPUTING HARDWARE)",
    category: "COMPUTING_HARDWARE",
    acquisitionYear: 2023 + (i % 3),
    operationalStatus: "FULLY_OPERATIONAL",
    assignedSupervisor: "Laboratory Director David Miller",
    safetyCertificationDate: "2026-06-15"
  },
  {
    assetTag: "GIS-AST-0042",
    facilityLocation: "Building C - Room 112",
    equipmentName: "Institutional Equipment Unit 42 (SMART CLASS AV)",
    category: "SMART_CLASS_AV",
    acquisitionYear: 2023 + (i % 3),
    operationalStatus: "FULLY_OPERATIONAL",
    assignedSupervisor: "Laboratory Director David Miller",
    safetyCertificationDate: "2026-06-15"
  },
  {
    assetTag: "GIS-AST-0043",
    facilityLocation: "Building D - Room 113",
    equipmentName: "Institutional Equipment Unit 43 (ATHLETIC EQUIPMENT)",
    category: "ATHLETIC_EQUIPMENT",
    acquisitionYear: 2023 + (i % 3),
    operationalStatus: "FULLY_OPERATIONAL",
    assignedSupervisor: "Laboratory Director David Miller",
    safetyCertificationDate: "2026-06-15"
  },
  {
    assetTag: "GIS-AST-0044",
    facilityLocation: "Building A - Room 114",
    equipmentName: "Institutional Equipment Unit 44 (CAMPUS SECURITY)",
    category: "CAMPUS_SECURITY",
    acquisitionYear: 2023 + (i % 3),
    operationalStatus: "FULLY_OPERATIONAL",
    assignedSupervisor: "Laboratory Director David Miller",
    safetyCertificationDate: "2026-06-15"
  },
  {
    assetTag: "GIS-AST-0045",
    facilityLocation: "Building B - Room 115",
    equipmentName: "Institutional Equipment Unit 45 (LABORATORY APPARATUS)",
    category: "LABORATORY_APPARATUS",
    acquisitionYear: 2023 + (i % 3),
    operationalStatus: "MAINTENANCE_SCHEDULED",
    assignedSupervisor: "Laboratory Director David Miller",
    safetyCertificationDate: "2026-06-15"
  },
  {
    assetTag: "GIS-AST-0046",
    facilityLocation: "Building C - Room 116",
    equipmentName: "Institutional Equipment Unit 46 (COMPUTING HARDWARE)",
    category: "COMPUTING_HARDWARE",
    acquisitionYear: 2023 + (i % 3),
    operationalStatus: "FULLY_OPERATIONAL",
    assignedSupervisor: "Laboratory Director David Miller",
    safetyCertificationDate: "2026-06-15"
  },
  {
    assetTag: "GIS-AST-0047",
    facilityLocation: "Building D - Room 117",
    equipmentName: "Institutional Equipment Unit 47 (SMART CLASS AV)",
    category: "SMART_CLASS_AV",
    acquisitionYear: 2023 + (i % 3),
    operationalStatus: "FULLY_OPERATIONAL",
    assignedSupervisor: "Laboratory Director David Miller",
    safetyCertificationDate: "2026-06-15"
  },
  {
    assetTag: "GIS-AST-0048",
    facilityLocation: "Building A - Room 118",
    equipmentName: "Institutional Equipment Unit 48 (ATHLETIC EQUIPMENT)",
    category: "ATHLETIC_EQUIPMENT",
    acquisitionYear: 2023 + (i % 3),
    operationalStatus: "FULLY_OPERATIONAL",
    assignedSupervisor: "Laboratory Director David Miller",
    safetyCertificationDate: "2026-06-15"
  },
  {
    assetTag: "GIS-AST-0049",
    facilityLocation: "Building B - Room 119",
    equipmentName: "Institutional Equipment Unit 49 (CAMPUS SECURITY)",
    category: "CAMPUS_SECURITY",
    acquisitionYear: 2023 + (i % 3),
    operationalStatus: "FULLY_OPERATIONAL",
    assignedSupervisor: "Laboratory Director David Miller",
    safetyCertificationDate: "2026-06-15"
  },
  {
    assetTag: "GIS-AST-0050",
    facilityLocation: "Building C - Room 120",
    equipmentName: "Institutional Equipment Unit 50 (LABORATORY APPARATUS)",
    category: "LABORATORY_APPARATUS",
    acquisitionYear: 2023 + (i % 3),
    operationalStatus: "MAINTENANCE_SCHEDULED",
    assignedSupervisor: "Laboratory Director David Miller",
    safetyCertificationDate: "2026-06-15"
  },
  {
    assetTag: "GIS-AST-0051",
    facilityLocation: "Building D - Room 121",
    equipmentName: "Institutional Equipment Unit 51 (COMPUTING HARDWARE)",
    category: "COMPUTING_HARDWARE",
    acquisitionYear: 2023 + (i % 3),
    operationalStatus: "FULLY_OPERATIONAL",
    assignedSupervisor: "Laboratory Director David Miller",
    safetyCertificationDate: "2026-06-15"
  },
  {
    assetTag: "GIS-AST-0052",
    facilityLocation: "Building A - Room 122",
    equipmentName: "Institutional Equipment Unit 52 (SMART CLASS AV)",
    category: "SMART_CLASS_AV",
    acquisitionYear: 2023 + (i % 3),
    operationalStatus: "FULLY_OPERATIONAL",
    assignedSupervisor: "Laboratory Director David Miller",
    safetyCertificationDate: "2026-06-15"
  },
  {
    assetTag: "GIS-AST-0053",
    facilityLocation: "Building B - Room 123",
    equipmentName: "Institutional Equipment Unit 53 (ATHLETIC EQUIPMENT)",
    category: "ATHLETIC_EQUIPMENT",
    acquisitionYear: 2023 + (i % 3),
    operationalStatus: "FULLY_OPERATIONAL",
    assignedSupervisor: "Laboratory Director David Miller",
    safetyCertificationDate: "2026-06-15"
  },
  {
    assetTag: "GIS-AST-0054",
    facilityLocation: "Building C - Room 124",
    equipmentName: "Institutional Equipment Unit 54 (CAMPUS SECURITY)",
    category: "CAMPUS_SECURITY",
    acquisitionYear: 2023 + (i % 3),
    operationalStatus: "FULLY_OPERATIONAL",
    assignedSupervisor: "Laboratory Director David Miller",
    safetyCertificationDate: "2026-06-15"
  },
  {
    assetTag: "GIS-AST-0055",
    facilityLocation: "Building D - Room 125",
    equipmentName: "Institutional Equipment Unit 55 (LABORATORY APPARATUS)",
    category: "LABORATORY_APPARATUS",
    acquisitionYear: 2023 + (i % 3),
    operationalStatus: "MAINTENANCE_SCHEDULED",
    assignedSupervisor: "Laboratory Director David Miller",
    safetyCertificationDate: "2026-06-15"
  },
  {
    assetTag: "GIS-AST-0056",
    facilityLocation: "Building A - Room 126",
    equipmentName: "Institutional Equipment Unit 56 (COMPUTING HARDWARE)",
    category: "COMPUTING_HARDWARE",
    acquisitionYear: 2023 + (i % 3),
    operationalStatus: "FULLY_OPERATIONAL",
    assignedSupervisor: "Laboratory Director David Miller",
    safetyCertificationDate: "2026-06-15"
  },
  {
    assetTag: "GIS-AST-0057",
    facilityLocation: "Building B - Room 127",
    equipmentName: "Institutional Equipment Unit 57 (SMART CLASS AV)",
    category: "SMART_CLASS_AV",
    acquisitionYear: 2023 + (i % 3),
    operationalStatus: "FULLY_OPERATIONAL",
    assignedSupervisor: "Laboratory Director David Miller",
    safetyCertificationDate: "2026-06-15"
  },
  {
    assetTag: "GIS-AST-0058",
    facilityLocation: "Building C - Room 128",
    equipmentName: "Institutional Equipment Unit 58 (ATHLETIC EQUIPMENT)",
    category: "ATHLETIC_EQUIPMENT",
    acquisitionYear: 2023 + (i % 3),
    operationalStatus: "FULLY_OPERATIONAL",
    assignedSupervisor: "Laboratory Director David Miller",
    safetyCertificationDate: "2026-06-15"
  },
  {
    assetTag: "GIS-AST-0059",
    facilityLocation: "Building D - Room 129",
    equipmentName: "Institutional Equipment Unit 59 (CAMPUS SECURITY)",
    category: "CAMPUS_SECURITY",
    acquisitionYear: 2023 + (i % 3),
    operationalStatus: "FULLY_OPERATIONAL",
    assignedSupervisor: "Laboratory Director David Miller",
    safetyCertificationDate: "2026-06-15"
  },
  {
    assetTag: "GIS-AST-0060",
    facilityLocation: "Building A - Room 100",
    equipmentName: "Institutional Equipment Unit 60 (LABORATORY APPARATUS)",
    category: "LABORATORY_APPARATUS",
    acquisitionYear: 2023 + (i % 3),
    operationalStatus: "MAINTENANCE_SCHEDULED",
    assignedSupervisor: "Laboratory Director David Miller",
    safetyCertificationDate: "2026-06-15"
  },
  {
    assetTag: "GIS-AST-0061",
    facilityLocation: "Building B - Room 101",
    equipmentName: "Institutional Equipment Unit 61 (COMPUTING HARDWARE)",
    category: "COMPUTING_HARDWARE",
    acquisitionYear: 2023 + (i % 3),
    operationalStatus: "FULLY_OPERATIONAL",
    assignedSupervisor: "Laboratory Director David Miller",
    safetyCertificationDate: "2026-06-15"
  },
  {
    assetTag: "GIS-AST-0062",
    facilityLocation: "Building C - Room 102",
    equipmentName: "Institutional Equipment Unit 62 (SMART CLASS AV)",
    category: "SMART_CLASS_AV",
    acquisitionYear: 2023 + (i % 3),
    operationalStatus: "FULLY_OPERATIONAL",
    assignedSupervisor: "Laboratory Director David Miller",
    safetyCertificationDate: "2026-06-15"
  },
  {
    assetTag: "GIS-AST-0063",
    facilityLocation: "Building D - Room 103",
    equipmentName: "Institutional Equipment Unit 63 (ATHLETIC EQUIPMENT)",
    category: "ATHLETIC_EQUIPMENT",
    acquisitionYear: 2023 + (i % 3),
    operationalStatus: "FULLY_OPERATIONAL",
    assignedSupervisor: "Laboratory Director David Miller",
    safetyCertificationDate: "2026-06-15"
  },
  {
    assetTag: "GIS-AST-0064",
    facilityLocation: "Building A - Room 104",
    equipmentName: "Institutional Equipment Unit 64 (CAMPUS SECURITY)",
    category: "CAMPUS_SECURITY",
    acquisitionYear: 2023 + (i % 3),
    operationalStatus: "FULLY_OPERATIONAL",
    assignedSupervisor: "Laboratory Director David Miller",
    safetyCertificationDate: "2026-06-15"
  },
  {
    assetTag: "GIS-AST-0065",
    facilityLocation: "Building B - Room 105",
    equipmentName: "Institutional Equipment Unit 65 (LABORATORY APPARATUS)",
    category: "LABORATORY_APPARATUS",
    acquisitionYear: 2023 + (i % 3),
    operationalStatus: "MAINTENANCE_SCHEDULED",
    assignedSupervisor: "Laboratory Director David Miller",
    safetyCertificationDate: "2026-06-15"
  },
  {
    assetTag: "GIS-AST-0066",
    facilityLocation: "Building C - Room 106",
    equipmentName: "Institutional Equipment Unit 66 (COMPUTING HARDWARE)",
    category: "COMPUTING_HARDWARE",
    acquisitionYear: 2023 + (i % 3),
    operationalStatus: "FULLY_OPERATIONAL",
    assignedSupervisor: "Laboratory Director David Miller",
    safetyCertificationDate: "2026-06-15"
  },
  {
    assetTag: "GIS-AST-0067",
    facilityLocation: "Building D - Room 107",
    equipmentName: "Institutional Equipment Unit 67 (SMART CLASS AV)",
    category: "SMART_CLASS_AV",
    acquisitionYear: 2023 + (i % 3),
    operationalStatus: "FULLY_OPERATIONAL",
    assignedSupervisor: "Laboratory Director David Miller",
    safetyCertificationDate: "2026-06-15"
  },
  {
    assetTag: "GIS-AST-0068",
    facilityLocation: "Building A - Room 108",
    equipmentName: "Institutional Equipment Unit 68 (ATHLETIC EQUIPMENT)",
    category: "ATHLETIC_EQUIPMENT",
    acquisitionYear: 2023 + (i % 3),
    operationalStatus: "FULLY_OPERATIONAL",
    assignedSupervisor: "Laboratory Director David Miller",
    safetyCertificationDate: "2026-06-15"
  },
  {
    assetTag: "GIS-AST-0069",
    facilityLocation: "Building B - Room 109",
    equipmentName: "Institutional Equipment Unit 69 (CAMPUS SECURITY)",
    category: "CAMPUS_SECURITY",
    acquisitionYear: 2023 + (i % 3),
    operationalStatus: "FULLY_OPERATIONAL",
    assignedSupervisor: "Laboratory Director David Miller",
    safetyCertificationDate: "2026-06-15"
  },
  {
    assetTag: "GIS-AST-0070",
    facilityLocation: "Building C - Room 110",
    equipmentName: "Institutional Equipment Unit 70 (LABORATORY APPARATUS)",
    category: "LABORATORY_APPARATUS",
    acquisitionYear: 2023 + (i % 3),
    operationalStatus: "MAINTENANCE_SCHEDULED",
    assignedSupervisor: "Laboratory Director David Miller",
    safetyCertificationDate: "2026-06-15"
  },
  {
    assetTag: "GIS-AST-0071",
    facilityLocation: "Building D - Room 111",
    equipmentName: "Institutional Equipment Unit 71 (COMPUTING HARDWARE)",
    category: "COMPUTING_HARDWARE",
    acquisitionYear: 2023 + (i % 3),
    operationalStatus: "FULLY_OPERATIONAL",
    assignedSupervisor: "Laboratory Director David Miller",
    safetyCertificationDate: "2026-06-15"
  },
  {
    assetTag: "GIS-AST-0072",
    facilityLocation: "Building A - Room 112",
    equipmentName: "Institutional Equipment Unit 72 (SMART CLASS AV)",
    category: "SMART_CLASS_AV",
    acquisitionYear: 2023 + (i % 3),
    operationalStatus: "FULLY_OPERATIONAL",
    assignedSupervisor: "Laboratory Director David Miller",
    safetyCertificationDate: "2026-06-15"
  },
  {
    assetTag: "GIS-AST-0073",
    facilityLocation: "Building B - Room 113",
    equipmentName: "Institutional Equipment Unit 73 (ATHLETIC EQUIPMENT)",
    category: "ATHLETIC_EQUIPMENT",
    acquisitionYear: 2023 + (i % 3),
    operationalStatus: "FULLY_OPERATIONAL",
    assignedSupervisor: "Laboratory Director David Miller",
    safetyCertificationDate: "2026-06-15"
  },
  {
    assetTag: "GIS-AST-0074",
    facilityLocation: "Building C - Room 114",
    equipmentName: "Institutional Equipment Unit 74 (CAMPUS SECURITY)",
    category: "CAMPUS_SECURITY",
    acquisitionYear: 2023 + (i % 3),
    operationalStatus: "FULLY_OPERATIONAL",
    assignedSupervisor: "Laboratory Director David Miller",
    safetyCertificationDate: "2026-06-15"
  },
  {
    assetTag: "GIS-AST-0075",
    facilityLocation: "Building D - Room 115",
    equipmentName: "Institutional Equipment Unit 75 (LABORATORY APPARATUS)",
    category: "LABORATORY_APPARATUS",
    acquisitionYear: 2023 + (i % 3),
    operationalStatus: "MAINTENANCE_SCHEDULED",
    assignedSupervisor: "Laboratory Director David Miller",
    safetyCertificationDate: "2026-06-15"
  },
  {
    assetTag: "GIS-AST-0076",
    facilityLocation: "Building A - Room 116",
    equipmentName: "Institutional Equipment Unit 76 (COMPUTING HARDWARE)",
    category: "COMPUTING_HARDWARE",
    acquisitionYear: 2023 + (i % 3),
    operationalStatus: "FULLY_OPERATIONAL",
    assignedSupervisor: "Laboratory Director David Miller",
    safetyCertificationDate: "2026-06-15"
  },
  {
    assetTag: "GIS-AST-0077",
    facilityLocation: "Building B - Room 117",
    equipmentName: "Institutional Equipment Unit 77 (SMART CLASS AV)",
    category: "SMART_CLASS_AV",
    acquisitionYear: 2023 + (i % 3),
    operationalStatus: "FULLY_OPERATIONAL",
    assignedSupervisor: "Laboratory Director David Miller",
    safetyCertificationDate: "2026-06-15"
  },
  {
    assetTag: "GIS-AST-0078",
    facilityLocation: "Building C - Room 118",
    equipmentName: "Institutional Equipment Unit 78 (ATHLETIC EQUIPMENT)",
    category: "ATHLETIC_EQUIPMENT",
    acquisitionYear: 2023 + (i % 3),
    operationalStatus: "FULLY_OPERATIONAL",
    assignedSupervisor: "Laboratory Director David Miller",
    safetyCertificationDate: "2026-06-15"
  },
  {
    assetTag: "GIS-AST-0079",
    facilityLocation: "Building D - Room 119",
    equipmentName: "Institutional Equipment Unit 79 (CAMPUS SECURITY)",
    category: "CAMPUS_SECURITY",
    acquisitionYear: 2023 + (i % 3),
    operationalStatus: "FULLY_OPERATIONAL",
    assignedSupervisor: "Laboratory Director David Miller",
    safetyCertificationDate: "2026-06-15"
  },
  {
    assetTag: "GIS-AST-0080",
    facilityLocation: "Building A - Room 120",
    equipmentName: "Institutional Equipment Unit 80 (LABORATORY APPARATUS)",
    category: "LABORATORY_APPARATUS",
    acquisitionYear: 2023 + (i % 3),
    operationalStatus: "MAINTENANCE_SCHEDULED",
    assignedSupervisor: "Laboratory Director David Miller",
    safetyCertificationDate: "2026-06-15"
  },
  {
    assetTag: "GIS-AST-0081",
    facilityLocation: "Building B - Room 121",
    equipmentName: "Institutional Equipment Unit 81 (COMPUTING HARDWARE)",
    category: "COMPUTING_HARDWARE",
    acquisitionYear: 2023 + (i % 3),
    operationalStatus: "FULLY_OPERATIONAL",
    assignedSupervisor: "Laboratory Director David Miller",
    safetyCertificationDate: "2026-06-15"
  },
  {
    assetTag: "GIS-AST-0082",
    facilityLocation: "Building C - Room 122",
    equipmentName: "Institutional Equipment Unit 82 (SMART CLASS AV)",
    category: "SMART_CLASS_AV",
    acquisitionYear: 2023 + (i % 3),
    operationalStatus: "FULLY_OPERATIONAL",
    assignedSupervisor: "Laboratory Director David Miller",
    safetyCertificationDate: "2026-06-15"
  },
  {
    assetTag: "GIS-AST-0083",
    facilityLocation: "Building D - Room 123",
    equipmentName: "Institutional Equipment Unit 83 (ATHLETIC EQUIPMENT)",
    category: "ATHLETIC_EQUIPMENT",
    acquisitionYear: 2023 + (i % 3),
    operationalStatus: "FULLY_OPERATIONAL",
    assignedSupervisor: "Laboratory Director David Miller",
    safetyCertificationDate: "2026-06-15"
  },
  {
    assetTag: "GIS-AST-0084",
    facilityLocation: "Building A - Room 124",
    equipmentName: "Institutional Equipment Unit 84 (CAMPUS SECURITY)",
    category: "CAMPUS_SECURITY",
    acquisitionYear: 2023 + (i % 3),
    operationalStatus: "FULLY_OPERATIONAL",
    assignedSupervisor: "Laboratory Director David Miller",
    safetyCertificationDate: "2026-06-15"
  },
  {
    assetTag: "GIS-AST-0085",
    facilityLocation: "Building B - Room 125",
    equipmentName: "Institutional Equipment Unit 85 (LABORATORY APPARATUS)",
    category: "LABORATORY_APPARATUS",
    acquisitionYear: 2023 + (i % 3),
    operationalStatus: "MAINTENANCE_SCHEDULED",
    assignedSupervisor: "Laboratory Director David Miller",
    safetyCertificationDate: "2026-06-15"
  },
];

export class CampusFacilityInventoryService {
  public static getAllEquipment(): CampusFacilityEquipmentItem[] {
    return MASTER_FACILITY_INVENTORY;
  }
}
