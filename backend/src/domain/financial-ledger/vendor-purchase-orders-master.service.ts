import { Injectable } from '@nestjs/common';

export interface VendorPurchaseOrderRecord {
  poId: string;
  poNumber: string;
  vendorName: string;
  vendorCategory: 'LABORATORY_SUPPLIES' | 'IT_HARDWARE' | 'LIBRARY_BOOKS' | 'SPORTS_EQUIPMENT' | 'FACILITY_MAINTENANCE' | 'TRANSPORT_PARTS';
  issueDate: string;
  deliveryDueDate: string;
  totalAmountUSD: number;
  paymentStatus: 'PAID_IN_FULL' | 'PARTIALLY_PAID' | 'PENDING_APPROVAL';
  lineItems: Array<{ itemCode: string; description: string; quantity: number; unitPriceUSD: number }>;
  approvedByOfficer: string;
}

export const MASTER_PURCHASE_ORDERS: VendorPurchaseOrderRecord[] = [
  {
    poId: "PO-REC-0001",
    poNumber: "PO-2026-0001",
    vendorName: "Global Academic Equipment Supplier 2",
    vendorCategory: "IT_HARDWARE",
    issueDate: "2026-07-10",
    deliveryDueDate: "2026-08-15",
    totalAmountUSD: 390,
    paymentStatus: "PAID_IN_FULL",
    lineItems: [
      { itemCode: "ITM-10", description: "Institutional Equipment Batch 1", quantity: 6, unitPriceUSD: 65 }
    ],
    approvedByOfficer: "Eleanor Vance (CFO)"
  },
  {
    poId: "PO-REC-0002",
    poNumber: "PO-2026-0002",
    vendorName: "Global Academic Equipment Supplier 3",
    vendorCategory: "LIBRARY_BOOKS",
    issueDate: "2026-07-10",
    deliveryDueDate: "2026-08-15",
    totalAmountUSD: 560,
    paymentStatus: "PAID_IN_FULL",
    lineItems: [
      { itemCode: "ITM-20", description: "Institutional Equipment Batch 2", quantity: 7, unitPriceUSD: 80 }
    ],
    approvedByOfficer: "Eleanor Vance (CFO)"
  },
  {
    poId: "PO-REC-0003",
    poNumber: "PO-2026-0003",
    vendorName: "Global Academic Equipment Supplier 4",
    vendorCategory: "SPORTS_EQUIPMENT",
    issueDate: "2026-07-10",
    deliveryDueDate: "2026-08-15",
    totalAmountUSD: 760,
    paymentStatus: "PENDING_APPROVAL",
    lineItems: [
      { itemCode: "ITM-30", description: "Institutional Equipment Batch 3", quantity: 8, unitPriceUSD: 95 }
    ],
    approvedByOfficer: "Eleanor Vance (CFO)"
  },
  {
    poId: "PO-REC-0004",
    poNumber: "PO-2026-0004",
    vendorName: "Global Academic Equipment Supplier 5",
    vendorCategory: "LABORATORY_SUPPLIES",
    issueDate: "2026-07-10",
    deliveryDueDate: "2026-08-15",
    totalAmountUSD: 990,
    paymentStatus: "PAID_IN_FULL",
    lineItems: [
      { itemCode: "ITM-40", description: "Institutional Equipment Batch 4", quantity: 9, unitPriceUSD: 110 }
    ],
    approvedByOfficer: "Eleanor Vance (CFO)"
  },
  {
    poId: "PO-REC-0005",
    poNumber: "PO-2026-0005",
    vendorName: "Global Academic Equipment Supplier 6",
    vendorCategory: "IT_HARDWARE",
    issueDate: "2026-07-10",
    deliveryDueDate: "2026-08-15",
    totalAmountUSD: 1250,
    paymentStatus: "PAID_IN_FULL",
    lineItems: [
      { itemCode: "ITM-50", description: "Institutional Equipment Batch 5", quantity: 10, unitPriceUSD: 125 }
    ],
    approvedByOfficer: "Eleanor Vance (CFO)"
  },
  {
    poId: "PO-REC-0006",
    poNumber: "PO-2026-0006",
    vendorName: "Global Academic Equipment Supplier 7",
    vendorCategory: "LIBRARY_BOOKS",
    issueDate: "2026-07-10",
    deliveryDueDate: "2026-08-15",
    totalAmountUSD: 1540,
    paymentStatus: "PENDING_APPROVAL",
    lineItems: [
      { itemCode: "ITM-60", description: "Institutional Equipment Batch 6", quantity: 11, unitPriceUSD: 140 }
    ],
    approvedByOfficer: "Eleanor Vance (CFO)"
  },
  {
    poId: "PO-REC-0007",
    poNumber: "PO-2026-0007",
    vendorName: "Global Academic Equipment Supplier 8",
    vendorCategory: "SPORTS_EQUIPMENT",
    issueDate: "2026-07-10",
    deliveryDueDate: "2026-08-15",
    totalAmountUSD: 1860,
    paymentStatus: "PAID_IN_FULL",
    lineItems: [
      { itemCode: "ITM-70", description: "Institutional Equipment Batch 7", quantity: 12, unitPriceUSD: 155 }
    ],
    approvedByOfficer: "Eleanor Vance (CFO)"
  },
  {
    poId: "PO-REC-0008",
    poNumber: "PO-2026-0008",
    vendorName: "Global Academic Equipment Supplier 9",
    vendorCategory: "LABORATORY_SUPPLIES",
    issueDate: "2026-07-10",
    deliveryDueDate: "2026-08-15",
    totalAmountUSD: 2210,
    paymentStatus: "PAID_IN_FULL",
    lineItems: [
      { itemCode: "ITM-80", description: "Institutional Equipment Batch 8", quantity: 13, unitPriceUSD: 170 }
    ],
    approvedByOfficer: "Eleanor Vance (CFO)"
  },
  {
    poId: "PO-REC-0009",
    poNumber: "PO-2026-0009",
    vendorName: "Global Academic Equipment Supplier 10",
    vendorCategory: "IT_HARDWARE",
    issueDate: "2026-07-10",
    deliveryDueDate: "2026-08-15",
    totalAmountUSD: 2590,
    paymentStatus: "PENDING_APPROVAL",
    lineItems: [
      { itemCode: "ITM-90", description: "Institutional Equipment Batch 9", quantity: 14, unitPriceUSD: 185 }
    ],
    approvedByOfficer: "Eleanor Vance (CFO)"
  },
  {
    poId: "PO-REC-0010",
    poNumber: "PO-2026-0010",
    vendorName: "Global Academic Equipment Supplier 1",
    vendorCategory: "LIBRARY_BOOKS",
    issueDate: "2026-07-10",
    deliveryDueDate: "2026-08-15",
    totalAmountUSD: 3000,
    paymentStatus: "PAID_IN_FULL",
    lineItems: [
      { itemCode: "ITM-100", description: "Institutional Equipment Batch 10", quantity: 15, unitPriceUSD: 200 }
    ],
    approvedByOfficer: "Eleanor Vance (CFO)"
  },
  {
    poId: "PO-REC-0011",
    poNumber: "PO-2026-0011",
    vendorName: "Global Academic Equipment Supplier 2",
    vendorCategory: "SPORTS_EQUIPMENT",
    issueDate: "2026-07-10",
    deliveryDueDate: "2026-08-15",
    totalAmountUSD: 3440,
    paymentStatus: "PAID_IN_FULL",
    lineItems: [
      { itemCode: "ITM-110", description: "Institutional Equipment Batch 11", quantity: 16, unitPriceUSD: 215 }
    ],
    approvedByOfficer: "Eleanor Vance (CFO)"
  },
  {
    poId: "PO-REC-0012",
    poNumber: "PO-2026-0012",
    vendorName: "Global Academic Equipment Supplier 3",
    vendorCategory: "LABORATORY_SUPPLIES",
    issueDate: "2026-07-10",
    deliveryDueDate: "2026-08-15",
    totalAmountUSD: 3910,
    paymentStatus: "PENDING_APPROVAL",
    lineItems: [
      { itemCode: "ITM-120", description: "Institutional Equipment Batch 12", quantity: 17, unitPriceUSD: 230 }
    ],
    approvedByOfficer: "Eleanor Vance (CFO)"
  },
  {
    poId: "PO-REC-0013",
    poNumber: "PO-2026-0013",
    vendorName: "Global Academic Equipment Supplier 4",
    vendorCategory: "IT_HARDWARE",
    issueDate: "2026-07-10",
    deliveryDueDate: "2026-08-15",
    totalAmountUSD: 4410,
    paymentStatus: "PAID_IN_FULL",
    lineItems: [
      { itemCode: "ITM-130", description: "Institutional Equipment Batch 13", quantity: 18, unitPriceUSD: 245 }
    ],
    approvedByOfficer: "Eleanor Vance (CFO)"
  },
  {
    poId: "PO-REC-0014",
    poNumber: "PO-2026-0014",
    vendorName: "Global Academic Equipment Supplier 5",
    vendorCategory: "LIBRARY_BOOKS",
    issueDate: "2026-07-10",
    deliveryDueDate: "2026-08-15",
    totalAmountUSD: 4940,
    paymentStatus: "PAID_IN_FULL",
    lineItems: [
      { itemCode: "ITM-140", description: "Institutional Equipment Batch 14", quantity: 19, unitPriceUSD: 260 }
    ],
    approvedByOfficer: "Eleanor Vance (CFO)"
  },
  {
    poId: "PO-REC-0015",
    poNumber: "PO-2026-0015",
    vendorName: "Global Academic Equipment Supplier 6",
    vendorCategory: "SPORTS_EQUIPMENT",
    issueDate: "2026-07-10",
    deliveryDueDate: "2026-08-15",
    totalAmountUSD: 5500,
    paymentStatus: "PENDING_APPROVAL",
    lineItems: [
      { itemCode: "ITM-150", description: "Institutional Equipment Batch 15", quantity: 20, unitPriceUSD: 275 }
    ],
    approvedByOfficer: "Eleanor Vance (CFO)"
  },
  {
    poId: "PO-REC-0016",
    poNumber: "PO-2026-0016",
    vendorName: "Global Academic Equipment Supplier 7",
    vendorCategory: "LABORATORY_SUPPLIES",
    issueDate: "2026-07-10",
    deliveryDueDate: "2026-08-15",
    totalAmountUSD: 6090,
    paymentStatus: "PAID_IN_FULL",
    lineItems: [
      { itemCode: "ITM-160", description: "Institutional Equipment Batch 16", quantity: 21, unitPriceUSD: 290 }
    ],
    approvedByOfficer: "Eleanor Vance (CFO)"
  },
  {
    poId: "PO-REC-0017",
    poNumber: "PO-2026-0017",
    vendorName: "Global Academic Equipment Supplier 8",
    vendorCategory: "IT_HARDWARE",
    issueDate: "2026-07-10",
    deliveryDueDate: "2026-08-15",
    totalAmountUSD: 6710,
    paymentStatus: "PAID_IN_FULL",
    lineItems: [
      { itemCode: "ITM-170", description: "Institutional Equipment Batch 17", quantity: 22, unitPriceUSD: 305 }
    ],
    approvedByOfficer: "Eleanor Vance (CFO)"
  },
  {
    poId: "PO-REC-0018",
    poNumber: "PO-2026-0018",
    vendorName: "Global Academic Equipment Supplier 9",
    vendorCategory: "LIBRARY_BOOKS",
    issueDate: "2026-07-10",
    deliveryDueDate: "2026-08-15",
    totalAmountUSD: 7360,
    paymentStatus: "PENDING_APPROVAL",
    lineItems: [
      { itemCode: "ITM-180", description: "Institutional Equipment Batch 18", quantity: 23, unitPriceUSD: 320 }
    ],
    approvedByOfficer: "Eleanor Vance (CFO)"
  },
  {
    poId: "PO-REC-0019",
    poNumber: "PO-2026-0019",
    vendorName: "Global Academic Equipment Supplier 10",
    vendorCategory: "SPORTS_EQUIPMENT",
    issueDate: "2026-07-10",
    deliveryDueDate: "2026-08-15",
    totalAmountUSD: 8040,
    paymentStatus: "PAID_IN_FULL",
    lineItems: [
      { itemCode: "ITM-190", description: "Institutional Equipment Batch 19", quantity: 24, unitPriceUSD: 335 }
    ],
    approvedByOfficer: "Eleanor Vance (CFO)"
  },
  {
    poId: "PO-REC-0020",
    poNumber: "PO-2026-0020",
    vendorName: "Global Academic Equipment Supplier 1",
    vendorCategory: "LABORATORY_SUPPLIES",
    issueDate: "2026-07-10",
    deliveryDueDate: "2026-08-15",
    totalAmountUSD: 1750,
    paymentStatus: "PAID_IN_FULL",
    lineItems: [
      { itemCode: "ITM-200", description: "Institutional Equipment Batch 20", quantity: 5, unitPriceUSD: 350 }
    ],
    approvedByOfficer: "Eleanor Vance (CFO)"
  },
  {
    poId: "PO-REC-0021",
    poNumber: "PO-2026-0021",
    vendorName: "Global Academic Equipment Supplier 2",
    vendorCategory: "IT_HARDWARE",
    issueDate: "2026-07-10",
    deliveryDueDate: "2026-08-15",
    totalAmountUSD: 2190,
    paymentStatus: "PENDING_APPROVAL",
    lineItems: [
      { itemCode: "ITM-210", description: "Institutional Equipment Batch 21", quantity: 6, unitPriceUSD: 365 }
    ],
    approvedByOfficer: "Eleanor Vance (CFO)"
  },
  {
    poId: "PO-REC-0022",
    poNumber: "PO-2026-0022",
    vendorName: "Global Academic Equipment Supplier 3",
    vendorCategory: "LIBRARY_BOOKS",
    issueDate: "2026-07-10",
    deliveryDueDate: "2026-08-15",
    totalAmountUSD: 2660,
    paymentStatus: "PAID_IN_FULL",
    lineItems: [
      { itemCode: "ITM-220", description: "Institutional Equipment Batch 22", quantity: 7, unitPriceUSD: 380 }
    ],
    approvedByOfficer: "Eleanor Vance (CFO)"
  },
  {
    poId: "PO-REC-0023",
    poNumber: "PO-2026-0023",
    vendorName: "Global Academic Equipment Supplier 4",
    vendorCategory: "SPORTS_EQUIPMENT",
    issueDate: "2026-07-10",
    deliveryDueDate: "2026-08-15",
    totalAmountUSD: 3160,
    paymentStatus: "PAID_IN_FULL",
    lineItems: [
      { itemCode: "ITM-230", description: "Institutional Equipment Batch 23", quantity: 8, unitPriceUSD: 395 }
    ],
    approvedByOfficer: "Eleanor Vance (CFO)"
  },
  {
    poId: "PO-REC-0024",
    poNumber: "PO-2026-0024",
    vendorName: "Global Academic Equipment Supplier 5",
    vendorCategory: "LABORATORY_SUPPLIES",
    issueDate: "2026-07-10",
    deliveryDueDate: "2026-08-15",
    totalAmountUSD: 3690,
    paymentStatus: "PENDING_APPROVAL",
    lineItems: [
      { itemCode: "ITM-240", description: "Institutional Equipment Batch 24", quantity: 9, unitPriceUSD: 410 }
    ],
    approvedByOfficer: "Eleanor Vance (CFO)"
  },
  {
    poId: "PO-REC-0025",
    poNumber: "PO-2026-0025",
    vendorName: "Global Academic Equipment Supplier 6",
    vendorCategory: "IT_HARDWARE",
    issueDate: "2026-07-10",
    deliveryDueDate: "2026-08-15",
    totalAmountUSD: 4250,
    paymentStatus: "PAID_IN_FULL",
    lineItems: [
      { itemCode: "ITM-250", description: "Institutional Equipment Batch 25", quantity: 10, unitPriceUSD: 425 }
    ],
    approvedByOfficer: "Eleanor Vance (CFO)"
  },
  {
    poId: "PO-REC-0026",
    poNumber: "PO-2026-0026",
    vendorName: "Global Academic Equipment Supplier 7",
    vendorCategory: "LIBRARY_BOOKS",
    issueDate: "2026-07-10",
    deliveryDueDate: "2026-08-15",
    totalAmountUSD: 4840,
    paymentStatus: "PAID_IN_FULL",
    lineItems: [
      { itemCode: "ITM-260", description: "Institutional Equipment Batch 26", quantity: 11, unitPriceUSD: 440 }
    ],
    approvedByOfficer: "Eleanor Vance (CFO)"
  },
  {
    poId: "PO-REC-0027",
    poNumber: "PO-2026-0027",
    vendorName: "Global Academic Equipment Supplier 8",
    vendorCategory: "SPORTS_EQUIPMENT",
    issueDate: "2026-07-10",
    deliveryDueDate: "2026-08-15",
    totalAmountUSD: 5460,
    paymentStatus: "PENDING_APPROVAL",
    lineItems: [
      { itemCode: "ITM-270", description: "Institutional Equipment Batch 27", quantity: 12, unitPriceUSD: 455 }
    ],
    approvedByOfficer: "Eleanor Vance (CFO)"
  },
  {
    poId: "PO-REC-0028",
    poNumber: "PO-2026-0028",
    vendorName: "Global Academic Equipment Supplier 9",
    vendorCategory: "LABORATORY_SUPPLIES",
    issueDate: "2026-07-10",
    deliveryDueDate: "2026-08-15",
    totalAmountUSD: 6110,
    paymentStatus: "PAID_IN_FULL",
    lineItems: [
      { itemCode: "ITM-280", description: "Institutional Equipment Batch 28", quantity: 13, unitPriceUSD: 470 }
    ],
    approvedByOfficer: "Eleanor Vance (CFO)"
  },
  {
    poId: "PO-REC-0029",
    poNumber: "PO-2026-0029",
    vendorName: "Global Academic Equipment Supplier 10",
    vendorCategory: "IT_HARDWARE",
    issueDate: "2026-07-10",
    deliveryDueDate: "2026-08-15",
    totalAmountUSD: 6790,
    paymentStatus: "PAID_IN_FULL",
    lineItems: [
      { itemCode: "ITM-290", description: "Institutional Equipment Batch 29", quantity: 14, unitPriceUSD: 485 }
    ],
    approvedByOfficer: "Eleanor Vance (CFO)"
  },
  {
    poId: "PO-REC-0030",
    poNumber: "PO-2026-0030",
    vendorName: "Global Academic Equipment Supplier 1",
    vendorCategory: "LIBRARY_BOOKS",
    issueDate: "2026-07-10",
    deliveryDueDate: "2026-08-15",
    totalAmountUSD: 7500,
    paymentStatus: "PENDING_APPROVAL",
    lineItems: [
      { itemCode: "ITM-300", description: "Institutional Equipment Batch 30", quantity: 15, unitPriceUSD: 500 }
    ],
    approvedByOfficer: "Eleanor Vance (CFO)"
  },
  {
    poId: "PO-REC-0031",
    poNumber: "PO-2026-0031",
    vendorName: "Global Academic Equipment Supplier 2",
    vendorCategory: "SPORTS_EQUIPMENT",
    issueDate: "2026-07-10",
    deliveryDueDate: "2026-08-15",
    totalAmountUSD: 8240,
    paymentStatus: "PAID_IN_FULL",
    lineItems: [
      { itemCode: "ITM-310", description: "Institutional Equipment Batch 31", quantity: 16, unitPriceUSD: 515 }
    ],
    approvedByOfficer: "Eleanor Vance (CFO)"
  },
  {
    poId: "PO-REC-0032",
    poNumber: "PO-2026-0032",
    vendorName: "Global Academic Equipment Supplier 3",
    vendorCategory: "LABORATORY_SUPPLIES",
    issueDate: "2026-07-10",
    deliveryDueDate: "2026-08-15",
    totalAmountUSD: 9010,
    paymentStatus: "PAID_IN_FULL",
    lineItems: [
      { itemCode: "ITM-320", description: "Institutional Equipment Batch 32", quantity: 17, unitPriceUSD: 530 }
    ],
    approvedByOfficer: "Eleanor Vance (CFO)"
  },
  {
    poId: "PO-REC-0033",
    poNumber: "PO-2026-0033",
    vendorName: "Global Academic Equipment Supplier 4",
    vendorCategory: "IT_HARDWARE",
    issueDate: "2026-07-10",
    deliveryDueDate: "2026-08-15",
    totalAmountUSD: 9810,
    paymentStatus: "PENDING_APPROVAL",
    lineItems: [
      { itemCode: "ITM-330", description: "Institutional Equipment Batch 33", quantity: 18, unitPriceUSD: 545 }
    ],
    approvedByOfficer: "Eleanor Vance (CFO)"
  },
  {
    poId: "PO-REC-0034",
    poNumber: "PO-2026-0034",
    vendorName: "Global Academic Equipment Supplier 5",
    vendorCategory: "LIBRARY_BOOKS",
    issueDate: "2026-07-10",
    deliveryDueDate: "2026-08-15",
    totalAmountUSD: 10640,
    paymentStatus: "PAID_IN_FULL",
    lineItems: [
      { itemCode: "ITM-340", description: "Institutional Equipment Batch 34", quantity: 19, unitPriceUSD: 560 }
    ],
    approvedByOfficer: "Eleanor Vance (CFO)"
  },
  {
    poId: "PO-REC-0035",
    poNumber: "PO-2026-0035",
    vendorName: "Global Academic Equipment Supplier 6",
    vendorCategory: "SPORTS_EQUIPMENT",
    issueDate: "2026-07-10",
    deliveryDueDate: "2026-08-15",
    totalAmountUSD: 11500,
    paymentStatus: "PAID_IN_FULL",
    lineItems: [
      { itemCode: "ITM-350", description: "Institutional Equipment Batch 35", quantity: 20, unitPriceUSD: 575 }
    ],
    approvedByOfficer: "Eleanor Vance (CFO)"
  },
  {
    poId: "PO-REC-0036",
    poNumber: "PO-2026-0036",
    vendorName: "Global Academic Equipment Supplier 7",
    vendorCategory: "LABORATORY_SUPPLIES",
    issueDate: "2026-07-10",
    deliveryDueDate: "2026-08-15",
    totalAmountUSD: 12390,
    paymentStatus: "PENDING_APPROVAL",
    lineItems: [
      { itemCode: "ITM-360", description: "Institutional Equipment Batch 36", quantity: 21, unitPriceUSD: 590 }
    ],
    approvedByOfficer: "Eleanor Vance (CFO)"
  },
  {
    poId: "PO-REC-0037",
    poNumber: "PO-2026-0037",
    vendorName: "Global Academic Equipment Supplier 8",
    vendorCategory: "IT_HARDWARE",
    issueDate: "2026-07-10",
    deliveryDueDate: "2026-08-15",
    totalAmountUSD: 13310,
    paymentStatus: "PAID_IN_FULL",
    lineItems: [
      { itemCode: "ITM-370", description: "Institutional Equipment Batch 37", quantity: 22, unitPriceUSD: 605 }
    ],
    approvedByOfficer: "Eleanor Vance (CFO)"
  },
  {
    poId: "PO-REC-0038",
    poNumber: "PO-2026-0038",
    vendorName: "Global Academic Equipment Supplier 9",
    vendorCategory: "LIBRARY_BOOKS",
    issueDate: "2026-07-10",
    deliveryDueDate: "2026-08-15",
    totalAmountUSD: 14260,
    paymentStatus: "PAID_IN_FULL",
    lineItems: [
      { itemCode: "ITM-380", description: "Institutional Equipment Batch 38", quantity: 23, unitPriceUSD: 620 }
    ],
    approvedByOfficer: "Eleanor Vance (CFO)"
  },
  {
    poId: "PO-REC-0039",
    poNumber: "PO-2026-0039",
    vendorName: "Global Academic Equipment Supplier 10",
    vendorCategory: "SPORTS_EQUIPMENT",
    issueDate: "2026-07-10",
    deliveryDueDate: "2026-08-15",
    totalAmountUSD: 15240,
    paymentStatus: "PENDING_APPROVAL",
    lineItems: [
      { itemCode: "ITM-390", description: "Institutional Equipment Batch 39", quantity: 24, unitPriceUSD: 635 }
    ],
    approvedByOfficer: "Eleanor Vance (CFO)"
  },
  {
    poId: "PO-REC-0040",
    poNumber: "PO-2026-0040",
    vendorName: "Global Academic Equipment Supplier 1",
    vendorCategory: "LABORATORY_SUPPLIES",
    issueDate: "2026-07-10",
    deliveryDueDate: "2026-08-15",
    totalAmountUSD: 3250,
    paymentStatus: "PAID_IN_FULL",
    lineItems: [
      { itemCode: "ITM-400", description: "Institutional Equipment Batch 40", quantity: 5, unitPriceUSD: 650 }
    ],
    approvedByOfficer: "Eleanor Vance (CFO)"
  },
  {
    poId: "PO-REC-0041",
    poNumber: "PO-2026-0041",
    vendorName: "Global Academic Equipment Supplier 2",
    vendorCategory: "IT_HARDWARE",
    issueDate: "2026-07-10",
    deliveryDueDate: "2026-08-15",
    totalAmountUSD: 3990,
    paymentStatus: "PAID_IN_FULL",
    lineItems: [
      { itemCode: "ITM-410", description: "Institutional Equipment Batch 41", quantity: 6, unitPriceUSD: 665 }
    ],
    approvedByOfficer: "Eleanor Vance (CFO)"
  },
  {
    poId: "PO-REC-0042",
    poNumber: "PO-2026-0042",
    vendorName: "Global Academic Equipment Supplier 3",
    vendorCategory: "LIBRARY_BOOKS",
    issueDate: "2026-07-10",
    deliveryDueDate: "2026-08-15",
    totalAmountUSD: 4760,
    paymentStatus: "PENDING_APPROVAL",
    lineItems: [
      { itemCode: "ITM-420", description: "Institutional Equipment Batch 42", quantity: 7, unitPriceUSD: 680 }
    ],
    approvedByOfficer: "Eleanor Vance (CFO)"
  },
  {
    poId: "PO-REC-0043",
    poNumber: "PO-2026-0043",
    vendorName: "Global Academic Equipment Supplier 4",
    vendorCategory: "SPORTS_EQUIPMENT",
    issueDate: "2026-07-10",
    deliveryDueDate: "2026-08-15",
    totalAmountUSD: 5560,
    paymentStatus: "PAID_IN_FULL",
    lineItems: [
      { itemCode: "ITM-430", description: "Institutional Equipment Batch 43", quantity: 8, unitPriceUSD: 695 }
    ],
    approvedByOfficer: "Eleanor Vance (CFO)"
  },
  {
    poId: "PO-REC-0044",
    poNumber: "PO-2026-0044",
    vendorName: "Global Academic Equipment Supplier 5",
    vendorCategory: "LABORATORY_SUPPLIES",
    issueDate: "2026-07-10",
    deliveryDueDate: "2026-08-15",
    totalAmountUSD: 6390,
    paymentStatus: "PAID_IN_FULL",
    lineItems: [
      { itemCode: "ITM-440", description: "Institutional Equipment Batch 44", quantity: 9, unitPriceUSD: 710 }
    ],
    approvedByOfficer: "Eleanor Vance (CFO)"
  },
  {
    poId: "PO-REC-0045",
    poNumber: "PO-2026-0045",
    vendorName: "Global Academic Equipment Supplier 6",
    vendorCategory: "IT_HARDWARE",
    issueDate: "2026-07-10",
    deliveryDueDate: "2026-08-15",
    totalAmountUSD: 7250,
    paymentStatus: "PENDING_APPROVAL",
    lineItems: [
      { itemCode: "ITM-450", description: "Institutional Equipment Batch 45", quantity: 10, unitPriceUSD: 725 }
    ],
    approvedByOfficer: "Eleanor Vance (CFO)"
  },
  {
    poId: "PO-REC-0046",
    poNumber: "PO-2026-0046",
    vendorName: "Global Academic Equipment Supplier 7",
    vendorCategory: "LIBRARY_BOOKS",
    issueDate: "2026-07-10",
    deliveryDueDate: "2026-08-15",
    totalAmountUSD: 8140,
    paymentStatus: "PAID_IN_FULL",
    lineItems: [
      { itemCode: "ITM-460", description: "Institutional Equipment Batch 46", quantity: 11, unitPriceUSD: 740 }
    ],
    approvedByOfficer: "Eleanor Vance (CFO)"
  },
  {
    poId: "PO-REC-0047",
    poNumber: "PO-2026-0047",
    vendorName: "Global Academic Equipment Supplier 8",
    vendorCategory: "SPORTS_EQUIPMENT",
    issueDate: "2026-07-10",
    deliveryDueDate: "2026-08-15",
    totalAmountUSD: 9060,
    paymentStatus: "PAID_IN_FULL",
    lineItems: [
      { itemCode: "ITM-470", description: "Institutional Equipment Batch 47", quantity: 12, unitPriceUSD: 755 }
    ],
    approvedByOfficer: "Eleanor Vance (CFO)"
  },
  {
    poId: "PO-REC-0048",
    poNumber: "PO-2026-0048",
    vendorName: "Global Academic Equipment Supplier 9",
    vendorCategory: "LABORATORY_SUPPLIES",
    issueDate: "2026-07-10",
    deliveryDueDate: "2026-08-15",
    totalAmountUSD: 10010,
    paymentStatus: "PENDING_APPROVAL",
    lineItems: [
      { itemCode: "ITM-480", description: "Institutional Equipment Batch 48", quantity: 13, unitPriceUSD: 770 }
    ],
    approvedByOfficer: "Eleanor Vance (CFO)"
  },
  {
    poId: "PO-REC-0049",
    poNumber: "PO-2026-0049",
    vendorName: "Global Academic Equipment Supplier 10",
    vendorCategory: "IT_HARDWARE",
    issueDate: "2026-07-10",
    deliveryDueDate: "2026-08-15",
    totalAmountUSD: 10990,
    paymentStatus: "PAID_IN_FULL",
    lineItems: [
      { itemCode: "ITM-490", description: "Institutional Equipment Batch 49", quantity: 14, unitPriceUSD: 785 }
    ],
    approvedByOfficer: "Eleanor Vance (CFO)"
  },
  {
    poId: "PO-REC-0050",
    poNumber: "PO-2026-0050",
    vendorName: "Global Academic Equipment Supplier 1",
    vendorCategory: "LIBRARY_BOOKS",
    issueDate: "2026-07-10",
    deliveryDueDate: "2026-08-15",
    totalAmountUSD: 12000,
    paymentStatus: "PAID_IN_FULL",
    lineItems: [
      { itemCode: "ITM-500", description: "Institutional Equipment Batch 50", quantity: 15, unitPriceUSD: 800 }
    ],
    approvedByOfficer: "Eleanor Vance (CFO)"
  },
  {
    poId: "PO-REC-0051",
    poNumber: "PO-2026-0051",
    vendorName: "Global Academic Equipment Supplier 2",
    vendorCategory: "SPORTS_EQUIPMENT",
    issueDate: "2026-07-10",
    deliveryDueDate: "2026-08-15",
    totalAmountUSD: 13040,
    paymentStatus: "PENDING_APPROVAL",
    lineItems: [
      { itemCode: "ITM-510", description: "Institutional Equipment Batch 51", quantity: 16, unitPriceUSD: 815 }
    ],
    approvedByOfficer: "Eleanor Vance (CFO)"
  },
  {
    poId: "PO-REC-0052",
    poNumber: "PO-2026-0052",
    vendorName: "Global Academic Equipment Supplier 3",
    vendorCategory: "LABORATORY_SUPPLIES",
    issueDate: "2026-07-10",
    deliveryDueDate: "2026-08-15",
    totalAmountUSD: 14110,
    paymentStatus: "PAID_IN_FULL",
    lineItems: [
      { itemCode: "ITM-520", description: "Institutional Equipment Batch 52", quantity: 17, unitPriceUSD: 830 }
    ],
    approvedByOfficer: "Eleanor Vance (CFO)"
  },
  {
    poId: "PO-REC-0053",
    poNumber: "PO-2026-0053",
    vendorName: "Global Academic Equipment Supplier 4",
    vendorCategory: "IT_HARDWARE",
    issueDate: "2026-07-10",
    deliveryDueDate: "2026-08-15",
    totalAmountUSD: 15210,
    paymentStatus: "PAID_IN_FULL",
    lineItems: [
      { itemCode: "ITM-530", description: "Institutional Equipment Batch 53", quantity: 18, unitPriceUSD: 845 }
    ],
    approvedByOfficer: "Eleanor Vance (CFO)"
  },
  {
    poId: "PO-REC-0054",
    poNumber: "PO-2026-0054",
    vendorName: "Global Academic Equipment Supplier 5",
    vendorCategory: "LIBRARY_BOOKS",
    issueDate: "2026-07-10",
    deliveryDueDate: "2026-08-15",
    totalAmountUSD: 16340,
    paymentStatus: "PENDING_APPROVAL",
    lineItems: [
      { itemCode: "ITM-540", description: "Institutional Equipment Batch 54", quantity: 19, unitPriceUSD: 860 }
    ],
    approvedByOfficer: "Eleanor Vance (CFO)"
  },
  {
    poId: "PO-REC-0055",
    poNumber: "PO-2026-0055",
    vendorName: "Global Academic Equipment Supplier 6",
    vendorCategory: "SPORTS_EQUIPMENT",
    issueDate: "2026-07-10",
    deliveryDueDate: "2026-08-15",
    totalAmountUSD: 17500,
    paymentStatus: "PAID_IN_FULL",
    lineItems: [
      { itemCode: "ITM-550", description: "Institutional Equipment Batch 55", quantity: 20, unitPriceUSD: 875 }
    ],
    approvedByOfficer: "Eleanor Vance (CFO)"
  },
  {
    poId: "PO-REC-0056",
    poNumber: "PO-2026-0056",
    vendorName: "Global Academic Equipment Supplier 7",
    vendorCategory: "LABORATORY_SUPPLIES",
    issueDate: "2026-07-10",
    deliveryDueDate: "2026-08-15",
    totalAmountUSD: 18690,
    paymentStatus: "PAID_IN_FULL",
    lineItems: [
      { itemCode: "ITM-560", description: "Institutional Equipment Batch 56", quantity: 21, unitPriceUSD: 890 }
    ],
    approvedByOfficer: "Eleanor Vance (CFO)"
  },
  {
    poId: "PO-REC-0057",
    poNumber: "PO-2026-0057",
    vendorName: "Global Academic Equipment Supplier 8",
    vendorCategory: "IT_HARDWARE",
    issueDate: "2026-07-10",
    deliveryDueDate: "2026-08-15",
    totalAmountUSD: 19910,
    paymentStatus: "PENDING_APPROVAL",
    lineItems: [
      { itemCode: "ITM-570", description: "Institutional Equipment Batch 57", quantity: 22, unitPriceUSD: 905 }
    ],
    approvedByOfficer: "Eleanor Vance (CFO)"
  },
  {
    poId: "PO-REC-0058",
    poNumber: "PO-2026-0058",
    vendorName: "Global Academic Equipment Supplier 9",
    vendorCategory: "LIBRARY_BOOKS",
    issueDate: "2026-07-10",
    deliveryDueDate: "2026-08-15",
    totalAmountUSD: 21160,
    paymentStatus: "PAID_IN_FULL",
    lineItems: [
      { itemCode: "ITM-580", description: "Institutional Equipment Batch 58", quantity: 23, unitPriceUSD: 920 }
    ],
    approvedByOfficer: "Eleanor Vance (CFO)"
  },
  {
    poId: "PO-REC-0059",
    poNumber: "PO-2026-0059",
    vendorName: "Global Academic Equipment Supplier 10",
    vendorCategory: "SPORTS_EQUIPMENT",
    issueDate: "2026-07-10",
    deliveryDueDate: "2026-08-15",
    totalAmountUSD: 22440,
    paymentStatus: "PAID_IN_FULL",
    lineItems: [
      { itemCode: "ITM-590", description: "Institutional Equipment Batch 59", quantity: 24, unitPriceUSD: 935 }
    ],
    approvedByOfficer: "Eleanor Vance (CFO)"
  },
  {
    poId: "PO-REC-0060",
    poNumber: "PO-2026-0060",
    vendorName: "Global Academic Equipment Supplier 1",
    vendorCategory: "LABORATORY_SUPPLIES",
    issueDate: "2026-07-10",
    deliveryDueDate: "2026-08-15",
    totalAmountUSD: 4750,
    paymentStatus: "PENDING_APPROVAL",
    lineItems: [
      { itemCode: "ITM-600", description: "Institutional Equipment Batch 60", quantity: 5, unitPriceUSD: 950 }
    ],
    approvedByOfficer: "Eleanor Vance (CFO)"
  },
  {
    poId: "PO-REC-0061",
    poNumber: "PO-2026-0061",
    vendorName: "Global Academic Equipment Supplier 2",
    vendorCategory: "IT_HARDWARE",
    issueDate: "2026-07-10",
    deliveryDueDate: "2026-08-15",
    totalAmountUSD: 5790,
    paymentStatus: "PAID_IN_FULL",
    lineItems: [
      { itemCode: "ITM-610", description: "Institutional Equipment Batch 61", quantity: 6, unitPriceUSD: 965 }
    ],
    approvedByOfficer: "Eleanor Vance (CFO)"
  },
  {
    poId: "PO-REC-0062",
    poNumber: "PO-2026-0062",
    vendorName: "Global Academic Equipment Supplier 3",
    vendorCategory: "LIBRARY_BOOKS",
    issueDate: "2026-07-10",
    deliveryDueDate: "2026-08-15",
    totalAmountUSD: 6860,
    paymentStatus: "PAID_IN_FULL",
    lineItems: [
      { itemCode: "ITM-620", description: "Institutional Equipment Batch 62", quantity: 7, unitPriceUSD: 980 }
    ],
    approvedByOfficer: "Eleanor Vance (CFO)"
  },
  {
    poId: "PO-REC-0063",
    poNumber: "PO-2026-0063",
    vendorName: "Global Academic Equipment Supplier 4",
    vendorCategory: "SPORTS_EQUIPMENT",
    issueDate: "2026-07-10",
    deliveryDueDate: "2026-08-15",
    totalAmountUSD: 7960,
    paymentStatus: "PENDING_APPROVAL",
    lineItems: [
      { itemCode: "ITM-630", description: "Institutional Equipment Batch 63", quantity: 8, unitPriceUSD: 995 }
    ],
    approvedByOfficer: "Eleanor Vance (CFO)"
  },
  {
    poId: "PO-REC-0064",
    poNumber: "PO-2026-0064",
    vendorName: "Global Academic Equipment Supplier 5",
    vendorCategory: "LABORATORY_SUPPLIES",
    issueDate: "2026-07-10",
    deliveryDueDate: "2026-08-15",
    totalAmountUSD: 9090,
    paymentStatus: "PAID_IN_FULL",
    lineItems: [
      { itemCode: "ITM-640", description: "Institutional Equipment Batch 64", quantity: 9, unitPriceUSD: 1010 }
    ],
    approvedByOfficer: "Eleanor Vance (CFO)"
  },
  {
    poId: "PO-REC-0065",
    poNumber: "PO-2026-0065",
    vendorName: "Global Academic Equipment Supplier 6",
    vendorCategory: "IT_HARDWARE",
    issueDate: "2026-07-10",
    deliveryDueDate: "2026-08-15",
    totalAmountUSD: 10250,
    paymentStatus: "PAID_IN_FULL",
    lineItems: [
      { itemCode: "ITM-650", description: "Institutional Equipment Batch 65", quantity: 10, unitPriceUSD: 1025 }
    ],
    approvedByOfficer: "Eleanor Vance (CFO)"
  },
  {
    poId: "PO-REC-0066",
    poNumber: "PO-2026-0066",
    vendorName: "Global Academic Equipment Supplier 7",
    vendorCategory: "LIBRARY_BOOKS",
    issueDate: "2026-07-10",
    deliveryDueDate: "2026-08-15",
    totalAmountUSD: 11440,
    paymentStatus: "PENDING_APPROVAL",
    lineItems: [
      { itemCode: "ITM-660", description: "Institutional Equipment Batch 66", quantity: 11, unitPriceUSD: 1040 }
    ],
    approvedByOfficer: "Eleanor Vance (CFO)"
  },
  {
    poId: "PO-REC-0067",
    poNumber: "PO-2026-0067",
    vendorName: "Global Academic Equipment Supplier 8",
    vendorCategory: "SPORTS_EQUIPMENT",
    issueDate: "2026-07-10",
    deliveryDueDate: "2026-08-15",
    totalAmountUSD: 12660,
    paymentStatus: "PAID_IN_FULL",
    lineItems: [
      { itemCode: "ITM-670", description: "Institutional Equipment Batch 67", quantity: 12, unitPriceUSD: 1055 }
    ],
    approvedByOfficer: "Eleanor Vance (CFO)"
  },
  {
    poId: "PO-REC-0068",
    poNumber: "PO-2026-0068",
    vendorName: "Global Academic Equipment Supplier 9",
    vendorCategory: "LABORATORY_SUPPLIES",
    issueDate: "2026-07-10",
    deliveryDueDate: "2026-08-15",
    totalAmountUSD: 13910,
    paymentStatus: "PAID_IN_FULL",
    lineItems: [
      { itemCode: "ITM-680", description: "Institutional Equipment Batch 68", quantity: 13, unitPriceUSD: 1070 }
    ],
    approvedByOfficer: "Eleanor Vance (CFO)"
  },
  {
    poId: "PO-REC-0069",
    poNumber: "PO-2026-0069",
    vendorName: "Global Academic Equipment Supplier 10",
    vendorCategory: "IT_HARDWARE",
    issueDate: "2026-07-10",
    deliveryDueDate: "2026-08-15",
    totalAmountUSD: 15190,
    paymentStatus: "PENDING_APPROVAL",
    lineItems: [
      { itemCode: "ITM-690", description: "Institutional Equipment Batch 69", quantity: 14, unitPriceUSD: 1085 }
    ],
    approvedByOfficer: "Eleanor Vance (CFO)"
  },
  {
    poId: "PO-REC-0070",
    poNumber: "PO-2026-0070",
    vendorName: "Global Academic Equipment Supplier 1",
    vendorCategory: "LIBRARY_BOOKS",
    issueDate: "2026-07-10",
    deliveryDueDate: "2026-08-15",
    totalAmountUSD: 16500,
    paymentStatus: "PAID_IN_FULL",
    lineItems: [
      { itemCode: "ITM-700", description: "Institutional Equipment Batch 70", quantity: 15, unitPriceUSD: 1100 }
    ],
    approvedByOfficer: "Eleanor Vance (CFO)"
  },
  {
    poId: "PO-REC-0071",
    poNumber: "PO-2026-0071",
    vendorName: "Global Academic Equipment Supplier 2",
    vendorCategory: "SPORTS_EQUIPMENT",
    issueDate: "2026-07-10",
    deliveryDueDate: "2026-08-15",
    totalAmountUSD: 17840,
    paymentStatus: "PAID_IN_FULL",
    lineItems: [
      { itemCode: "ITM-710", description: "Institutional Equipment Batch 71", quantity: 16, unitPriceUSD: 1115 }
    ],
    approvedByOfficer: "Eleanor Vance (CFO)"
  },
  {
    poId: "PO-REC-0072",
    poNumber: "PO-2026-0072",
    vendorName: "Global Academic Equipment Supplier 3",
    vendorCategory: "LABORATORY_SUPPLIES",
    issueDate: "2026-07-10",
    deliveryDueDate: "2026-08-15",
    totalAmountUSD: 19210,
    paymentStatus: "PENDING_APPROVAL",
    lineItems: [
      { itemCode: "ITM-720", description: "Institutional Equipment Batch 72", quantity: 17, unitPriceUSD: 1130 }
    ],
    approvedByOfficer: "Eleanor Vance (CFO)"
  },
  {
    poId: "PO-REC-0073",
    poNumber: "PO-2026-0073",
    vendorName: "Global Academic Equipment Supplier 4",
    vendorCategory: "IT_HARDWARE",
    issueDate: "2026-07-10",
    deliveryDueDate: "2026-08-15",
    totalAmountUSD: 20610,
    paymentStatus: "PAID_IN_FULL",
    lineItems: [
      { itemCode: "ITM-730", description: "Institutional Equipment Batch 73", quantity: 18, unitPriceUSD: 1145 }
    ],
    approvedByOfficer: "Eleanor Vance (CFO)"
  },
  {
    poId: "PO-REC-0074",
    poNumber: "PO-2026-0074",
    vendorName: "Global Academic Equipment Supplier 5",
    vendorCategory: "LIBRARY_BOOKS",
    issueDate: "2026-07-10",
    deliveryDueDate: "2026-08-15",
    totalAmountUSD: 22040,
    paymentStatus: "PAID_IN_FULL",
    lineItems: [
      { itemCode: "ITM-740", description: "Institutional Equipment Batch 74", quantity: 19, unitPriceUSD: 1160 }
    ],
    approvedByOfficer: "Eleanor Vance (CFO)"
  },
  {
    poId: "PO-REC-0075",
    poNumber: "PO-2026-0075",
    vendorName: "Global Academic Equipment Supplier 6",
    vendorCategory: "SPORTS_EQUIPMENT",
    issueDate: "2026-07-10",
    deliveryDueDate: "2026-08-15",
    totalAmountUSD: 23500,
    paymentStatus: "PENDING_APPROVAL",
    lineItems: [
      { itemCode: "ITM-750", description: "Institutional Equipment Batch 75", quantity: 20, unitPriceUSD: 1175 }
    ],
    approvedByOfficer: "Eleanor Vance (CFO)"
  },
  {
    poId: "PO-REC-0076",
    poNumber: "PO-2026-0076",
    vendorName: "Global Academic Equipment Supplier 7",
    vendorCategory: "LABORATORY_SUPPLIES",
    issueDate: "2026-07-10",
    deliveryDueDate: "2026-08-15",
    totalAmountUSD: 24990,
    paymentStatus: "PAID_IN_FULL",
    lineItems: [
      { itemCode: "ITM-760", description: "Institutional Equipment Batch 76", quantity: 21, unitPriceUSD: 1190 }
    ],
    approvedByOfficer: "Eleanor Vance (CFO)"
  },
  {
    poId: "PO-REC-0077",
    poNumber: "PO-2026-0077",
    vendorName: "Global Academic Equipment Supplier 8",
    vendorCategory: "IT_HARDWARE",
    issueDate: "2026-07-10",
    deliveryDueDate: "2026-08-15",
    totalAmountUSD: 26510,
    paymentStatus: "PAID_IN_FULL",
    lineItems: [
      { itemCode: "ITM-770", description: "Institutional Equipment Batch 77", quantity: 22, unitPriceUSD: 1205 }
    ],
    approvedByOfficer: "Eleanor Vance (CFO)"
  },
  {
    poId: "PO-REC-0078",
    poNumber: "PO-2026-0078",
    vendorName: "Global Academic Equipment Supplier 9",
    vendorCategory: "LIBRARY_BOOKS",
    issueDate: "2026-07-10",
    deliveryDueDate: "2026-08-15",
    totalAmountUSD: 28060,
    paymentStatus: "PENDING_APPROVAL",
    lineItems: [
      { itemCode: "ITM-780", description: "Institutional Equipment Batch 78", quantity: 23, unitPriceUSD: 1220 }
    ],
    approvedByOfficer: "Eleanor Vance (CFO)"
  },
  {
    poId: "PO-REC-0079",
    poNumber: "PO-2026-0079",
    vendorName: "Global Academic Equipment Supplier 10",
    vendorCategory: "SPORTS_EQUIPMENT",
    issueDate: "2026-07-10",
    deliveryDueDate: "2026-08-15",
    totalAmountUSD: 29640,
    paymentStatus: "PAID_IN_FULL",
    lineItems: [
      { itemCode: "ITM-790", description: "Institutional Equipment Batch 79", quantity: 24, unitPriceUSD: 1235 }
    ],
    approvedByOfficer: "Eleanor Vance (CFO)"
  },
  {
    poId: "PO-REC-0080",
    poNumber: "PO-2026-0080",
    vendorName: "Global Academic Equipment Supplier 1",
    vendorCategory: "LABORATORY_SUPPLIES",
    issueDate: "2026-07-10",
    deliveryDueDate: "2026-08-15",
    totalAmountUSD: 6250,
    paymentStatus: "PAID_IN_FULL",
    lineItems: [
      { itemCode: "ITM-800", description: "Institutional Equipment Batch 80", quantity: 5, unitPriceUSD: 1250 }
    ],
    approvedByOfficer: "Eleanor Vance (CFO)"
  },
  {
    poId: "PO-REC-0081",
    poNumber: "PO-2026-0081",
    vendorName: "Global Academic Equipment Supplier 2",
    vendorCategory: "IT_HARDWARE",
    issueDate: "2026-07-10",
    deliveryDueDate: "2026-08-15",
    totalAmountUSD: 7590,
    paymentStatus: "PENDING_APPROVAL",
    lineItems: [
      { itemCode: "ITM-810", description: "Institutional Equipment Batch 81", quantity: 6, unitPriceUSD: 1265 }
    ],
    approvedByOfficer: "Eleanor Vance (CFO)"
  },
  {
    poId: "PO-REC-0082",
    poNumber: "PO-2026-0082",
    vendorName: "Global Academic Equipment Supplier 3",
    vendorCategory: "LIBRARY_BOOKS",
    issueDate: "2026-07-10",
    deliveryDueDate: "2026-08-15",
    totalAmountUSD: 8960,
    paymentStatus: "PAID_IN_FULL",
    lineItems: [
      { itemCode: "ITM-820", description: "Institutional Equipment Batch 82", quantity: 7, unitPriceUSD: 1280 }
    ],
    approvedByOfficer: "Eleanor Vance (CFO)"
  },
  {
    poId: "PO-REC-0083",
    poNumber: "PO-2026-0083",
    vendorName: "Global Academic Equipment Supplier 4",
    vendorCategory: "SPORTS_EQUIPMENT",
    issueDate: "2026-07-10",
    deliveryDueDate: "2026-08-15",
    totalAmountUSD: 10360,
    paymentStatus: "PAID_IN_FULL",
    lineItems: [
      { itemCode: "ITM-830", description: "Institutional Equipment Batch 83", quantity: 8, unitPriceUSD: 1295 }
    ],
    approvedByOfficer: "Eleanor Vance (CFO)"
  },
  {
    poId: "PO-REC-0084",
    poNumber: "PO-2026-0084",
    vendorName: "Global Academic Equipment Supplier 5",
    vendorCategory: "LABORATORY_SUPPLIES",
    issueDate: "2026-07-10",
    deliveryDueDate: "2026-08-15",
    totalAmountUSD: 11790,
    paymentStatus: "PENDING_APPROVAL",
    lineItems: [
      { itemCode: "ITM-840", description: "Institutional Equipment Batch 84", quantity: 9, unitPriceUSD: 1310 }
    ],
    approvedByOfficer: "Eleanor Vance (CFO)"
  },
  {
    poId: "PO-REC-0085",
    poNumber: "PO-2026-0085",
    vendorName: "Global Academic Equipment Supplier 6",
    vendorCategory: "IT_HARDWARE",
    issueDate: "2026-07-10",
    deliveryDueDate: "2026-08-15",
    totalAmountUSD: 13250,
    paymentStatus: "PAID_IN_FULL",
    lineItems: [
      { itemCode: "ITM-850", description: "Institutional Equipment Batch 85", quantity: 10, unitPriceUSD: 1325 }
    ],
    approvedByOfficer: "Eleanor Vance (CFO)"
  },
  {
    poId: "PO-REC-0086",
    poNumber: "PO-2026-0086",
    vendorName: "Global Academic Equipment Supplier 7",
    vendorCategory: "LIBRARY_BOOKS",
    issueDate: "2026-07-10",
    deliveryDueDate: "2026-08-15",
    totalAmountUSD: 14740,
    paymentStatus: "PAID_IN_FULL",
    lineItems: [
      { itemCode: "ITM-860", description: "Institutional Equipment Batch 86", quantity: 11, unitPriceUSD: 1340 }
    ],
    approvedByOfficer: "Eleanor Vance (CFO)"
  },
  {
    poId: "PO-REC-0087",
    poNumber: "PO-2026-0087",
    vendorName: "Global Academic Equipment Supplier 8",
    vendorCategory: "SPORTS_EQUIPMENT",
    issueDate: "2026-07-10",
    deliveryDueDate: "2026-08-15",
    totalAmountUSD: 16260,
    paymentStatus: "PENDING_APPROVAL",
    lineItems: [
      { itemCode: "ITM-870", description: "Institutional Equipment Batch 87", quantity: 12, unitPriceUSD: 1355 }
    ],
    approvedByOfficer: "Eleanor Vance (CFO)"
  },
  {
    poId: "PO-REC-0088",
    poNumber: "PO-2026-0088",
    vendorName: "Global Academic Equipment Supplier 9",
    vendorCategory: "LABORATORY_SUPPLIES",
    issueDate: "2026-07-10",
    deliveryDueDate: "2026-08-15",
    totalAmountUSD: 17810,
    paymentStatus: "PAID_IN_FULL",
    lineItems: [
      { itemCode: "ITM-880", description: "Institutional Equipment Batch 88", quantity: 13, unitPriceUSD: 1370 }
    ],
    approvedByOfficer: "Eleanor Vance (CFO)"
  },
  {
    poId: "PO-REC-0089",
    poNumber: "PO-2026-0089",
    vendorName: "Global Academic Equipment Supplier 10",
    vendorCategory: "IT_HARDWARE",
    issueDate: "2026-07-10",
    deliveryDueDate: "2026-08-15",
    totalAmountUSD: 19390,
    paymentStatus: "PAID_IN_FULL",
    lineItems: [
      { itemCode: "ITM-890", description: "Institutional Equipment Batch 89", quantity: 14, unitPriceUSD: 1385 }
    ],
    approvedByOfficer: "Eleanor Vance (CFO)"
  },
  {
    poId: "PO-REC-0090",
    poNumber: "PO-2026-0090",
    vendorName: "Global Academic Equipment Supplier 1",
    vendorCategory: "LIBRARY_BOOKS",
    issueDate: "2026-07-10",
    deliveryDueDate: "2026-08-15",
    totalAmountUSD: 21000,
    paymentStatus: "PENDING_APPROVAL",
    lineItems: [
      { itemCode: "ITM-900", description: "Institutional Equipment Batch 90", quantity: 15, unitPriceUSD: 1400 }
    ],
    approvedByOfficer: "Eleanor Vance (CFO)"
  },
];

@Injectable()
export class VendorPurchaseOrdersMasterService {
  public getAllPurchaseOrders(): VendorPurchaseOrderRecord[] {
    return MASTER_PURCHASE_ORDERS;
  }
}
