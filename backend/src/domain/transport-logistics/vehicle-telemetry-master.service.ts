import { Injectable } from '@nestjs/common';

export interface VehicleTelemetryStreamItem {
  streamId: string;
  vehicleRegistrationNo: string;
  routeCode: string;
  timestamp: string;
  gpsCoordinates: { latitude: number; longitude: number };
  speedKilometersPerHour: number;
  engineRPM: number;
  fuelTankLevelPercentage: number;
  engineCoolantTempCelsius: number;
  doorSensorStatus: 'CLOSED_SECURE' | 'OPEN_AT_STOP' | 'AJAR_WARNING';
  driverAlertFlag: 'NORMAL_OPERATION' | 'HARSH_BRAKING' | 'SPEED_EXCEEDED' | 'IDLE_TOO_LONG';
}

export const MASTER_VEHICLE_TELEMETRY: VehicleTelemetryStreamItem[] = [
  {
    streamId: "TEL-V01-P001",
    vehicleRegistrationNo: "IL-SCH-BUS-001",
    routeCode: "BUS-RT-01",
    timestamp: "2026-09-03T07:14:00Z",
    gpsCoordinates: {
      latitude: 39.7937,
      longitude: -89.6406
    },
    speedKilometersPerHour: 32,
    engineRPM: 2184,
    fuelTankLevelPercentage: 93,
    engineCoolantTempCelsius: 88,
    doorSensorStatus: "CLOSED_SECURE",
    driverAlertFlag: "NORMAL_OPERATION"
  },
  {
    streamId: "TEL-V01-P002",
    vehicleRegistrationNo: "IL-SCH-BUS-001",
    routeCode: "BUS-RT-01",
    timestamp: "2026-09-03T07:18:00Z",
    gpsCoordinates: {
      latitude: 39.7957,
      longitude: -89.6391
    },
    speedKilometersPerHour: 39,
    engineRPM: 2268,
    fuelTankLevelPercentage: 91,
    engineCoolantTempCelsius: 88,
    doorSensorStatus: "CLOSED_SECURE",
    driverAlertFlag: "NORMAL_OPERATION"
  },
  {
    streamId: "TEL-V01-P003",
    vehicleRegistrationNo: "IL-SCH-BUS-001",
    routeCode: "BUS-RT-01",
    timestamp: "2026-09-03T07:22:00Z",
    gpsCoordinates: {
      latitude: 39.7977,
      longitude: -89.6376
    },
    speedKilometersPerHour: 46,
    engineRPM: 2352,
    fuelTankLevelPercentage: 89,
    engineCoolantTempCelsius: 88,
    doorSensorStatus: "OPEN_AT_STOP",
    driverAlertFlag: "NORMAL_OPERATION"
  },
  {
    streamId: "TEL-V01-P004",
    vehicleRegistrationNo: "IL-SCH-BUS-001",
    routeCode: "BUS-RT-01",
    timestamp: "2026-09-03T07:26:00Z",
    gpsCoordinates: {
      latitude: 39.7997,
      longitude: -89.6361
    },
    speedKilometersPerHour: 53,
    engineRPM: 2436,
    fuelTankLevelPercentage: 87,
    engineCoolantTempCelsius: 88,
    doorSensorStatus: "CLOSED_SECURE",
    driverAlertFlag: "NORMAL_OPERATION"
  },
  {
    streamId: "TEL-V01-P005",
    vehicleRegistrationNo: "IL-SCH-BUS-001",
    routeCode: "BUS-RT-01",
    timestamp: "2026-09-03T07:30:00Z",
    gpsCoordinates: {
      latitude: 39.8017,
      longitude: -89.6346
    },
    speedKilometersPerHour: 25,
    engineRPM: 2100,
    fuelTankLevelPercentage: 85,
    engineCoolantTempCelsius: 88,
    doorSensorStatus: "CLOSED_SECURE",
    driverAlertFlag: "NORMAL_OPERATION"
  },
  {
    streamId: "TEL-V01-P006",
    vehicleRegistrationNo: "IL-SCH-BUS-001",
    routeCode: "BUS-RT-01",
    timestamp: "2026-09-03T07:34:00Z",
    gpsCoordinates: {
      latitude: 39.8037,
      longitude: -89.6331
    },
    speedKilometersPerHour: 32,
    engineRPM: 2184,
    fuelTankLevelPercentage: 83,
    engineCoolantTempCelsius: 88,
    doorSensorStatus: "OPEN_AT_STOP",
    driverAlertFlag: "NORMAL_OPERATION"
  },
  {
    streamId: "TEL-V01-P007",
    vehicleRegistrationNo: "IL-SCH-BUS-001",
    routeCode: "BUS-RT-01",
    timestamp: "2026-09-03T07:38:00Z",
    gpsCoordinates: {
      latitude: 39.8057,
      longitude: -89.6316
    },
    speedKilometersPerHour: 39,
    engineRPM: 2268,
    fuelTankLevelPercentage: 81,
    engineCoolantTempCelsius: 88,
    doorSensorStatus: "CLOSED_SECURE",
    driverAlertFlag: "NORMAL_OPERATION"
  },
  {
    streamId: "TEL-V01-P008",
    vehicleRegistrationNo: "IL-SCH-BUS-001",
    routeCode: "BUS-RT-01",
    timestamp: "2026-09-03T07:42:00Z",
    gpsCoordinates: {
      latitude: 39.8077,
      longitude: -89.6301
    },
    speedKilometersPerHour: 46,
    engineRPM: 2352,
    fuelTankLevelPercentage: 79,
    engineCoolantTempCelsius: 88,
    doorSensorStatus: "CLOSED_SECURE",
    driverAlertFlag: "NORMAL_OPERATION"
  },
  {
    streamId: "TEL-V01-P009",
    vehicleRegistrationNo: "IL-SCH-BUS-001",
    routeCode: "BUS-RT-01",
    timestamp: "2026-09-03T07:46:00Z",
    gpsCoordinates: {
      latitude: 39.8097,
      longitude: -89.6286
    },
    speedKilometersPerHour: 53,
    engineRPM: 2436,
    fuelTankLevelPercentage: 77,
    engineCoolantTempCelsius: 88,
    doorSensorStatus: "OPEN_AT_STOP",
    driverAlertFlag: "NORMAL_OPERATION"
  },
  {
    streamId: "TEL-V01-P010",
    vehicleRegistrationNo: "IL-SCH-BUS-001",
    routeCode: "BUS-RT-01",
    timestamp: "2026-09-03T07:50:00Z",
    gpsCoordinates: {
      latitude: 39.8117,
      longitude: -89.6271
    },
    speedKilometersPerHour: 25,
    engineRPM: 2100,
    fuelTankLevelPercentage: 75,
    engineCoolantTempCelsius: 88,
    doorSensorStatus: "CLOSED_SECURE",
    driverAlertFlag: "NORMAL_OPERATION"
  },
  {
    streamId: "TEL-V02-P001",
    vehicleRegistrationNo: "IL-SCH-BUS-002",
    routeCode: "BUS-RT-02",
    timestamp: "2026-09-03T07:14:00Z",
    gpsCoordinates: {
      latitude: 39.8037,
      longitude: -89.6326
    },
    speedKilometersPerHour: 32,
    engineRPM: 2184,
    fuelTankLevelPercentage: 93,
    engineCoolantTempCelsius: 88,
    doorSensorStatus: "CLOSED_SECURE",
    driverAlertFlag: "NORMAL_OPERATION"
  },
  {
    streamId: "TEL-V02-P002",
    vehicleRegistrationNo: "IL-SCH-BUS-002",
    routeCode: "BUS-RT-02",
    timestamp: "2026-09-03T07:18:00Z",
    gpsCoordinates: {
      latitude: 39.8057,
      longitude: -89.6311
    },
    speedKilometersPerHour: 39,
    engineRPM: 2268,
    fuelTankLevelPercentage: 91,
    engineCoolantTempCelsius: 88,
    doorSensorStatus: "CLOSED_SECURE",
    driverAlertFlag: "NORMAL_OPERATION"
  },
  {
    streamId: "TEL-V02-P003",
    vehicleRegistrationNo: "IL-SCH-BUS-002",
    routeCode: "BUS-RT-02",
    timestamp: "2026-09-03T07:22:00Z",
    gpsCoordinates: {
      latitude: 39.8077,
      longitude: -89.6296
    },
    speedKilometersPerHour: 46,
    engineRPM: 2352,
    fuelTankLevelPercentage: 89,
    engineCoolantTempCelsius: 88,
    doorSensorStatus: "OPEN_AT_STOP",
    driverAlertFlag: "NORMAL_OPERATION"
  },
  {
    streamId: "TEL-V02-P004",
    vehicleRegistrationNo: "IL-SCH-BUS-002",
    routeCode: "BUS-RT-02",
    timestamp: "2026-09-03T07:26:00Z",
    gpsCoordinates: {
      latitude: 39.8097,
      longitude: -89.6281
    },
    speedKilometersPerHour: 53,
    engineRPM: 2436,
    fuelTankLevelPercentage: 87,
    engineCoolantTempCelsius: 88,
    doorSensorStatus: "CLOSED_SECURE",
    driverAlertFlag: "NORMAL_OPERATION"
  },
  {
    streamId: "TEL-V02-P005",
    vehicleRegistrationNo: "IL-SCH-BUS-002",
    routeCode: "BUS-RT-02",
    timestamp: "2026-09-03T07:30:00Z",
    gpsCoordinates: {
      latitude: 39.8117,
      longitude: -89.6266
    },
    speedKilometersPerHour: 25,
    engineRPM: 2100,
    fuelTankLevelPercentage: 85,
    engineCoolantTempCelsius: 88,
    doorSensorStatus: "CLOSED_SECURE",
    driverAlertFlag: "NORMAL_OPERATION"
  },
  {
    streamId: "TEL-V02-P006",
    vehicleRegistrationNo: "IL-SCH-BUS-002",
    routeCode: "BUS-RT-02",
    timestamp: "2026-09-03T07:34:00Z",
    gpsCoordinates: {
      latitude: 39.8137,
      longitude: -89.6251
    },
    speedKilometersPerHour: 32,
    engineRPM: 2184,
    fuelTankLevelPercentage: 83,
    engineCoolantTempCelsius: 88,
    doorSensorStatus: "OPEN_AT_STOP",
    driverAlertFlag: "NORMAL_OPERATION"
  },
  {
    streamId: "TEL-V02-P007",
    vehicleRegistrationNo: "IL-SCH-BUS-002",
    routeCode: "BUS-RT-02",
    timestamp: "2026-09-03T07:38:00Z",
    gpsCoordinates: {
      latitude: 39.8157,
      longitude: -89.6236
    },
    speedKilometersPerHour: 39,
    engineRPM: 2268,
    fuelTankLevelPercentage: 81,
    engineCoolantTempCelsius: 88,
    doorSensorStatus: "CLOSED_SECURE",
    driverAlertFlag: "NORMAL_OPERATION"
  },
  {
    streamId: "TEL-V02-P008",
    vehicleRegistrationNo: "IL-SCH-BUS-002",
    routeCode: "BUS-RT-02",
    timestamp: "2026-09-03T07:42:00Z",
    gpsCoordinates: {
      latitude: 39.8177,
      longitude: -89.6221
    },
    speedKilometersPerHour: 46,
    engineRPM: 2352,
    fuelTankLevelPercentage: 79,
    engineCoolantTempCelsius: 88,
    doorSensorStatus: "CLOSED_SECURE",
    driverAlertFlag: "NORMAL_OPERATION"
  },
  {
    streamId: "TEL-V02-P009",
    vehicleRegistrationNo: "IL-SCH-BUS-002",
    routeCode: "BUS-RT-02",
    timestamp: "2026-09-03T07:46:00Z",
    gpsCoordinates: {
      latitude: 39.8197,
      longitude: -89.6206
    },
    speedKilometersPerHour: 53,
    engineRPM: 2436,
    fuelTankLevelPercentage: 77,
    engineCoolantTempCelsius: 88,
    doorSensorStatus: "OPEN_AT_STOP",
    driverAlertFlag: "NORMAL_OPERATION"
  },
  {
    streamId: "TEL-V02-P010",
    vehicleRegistrationNo: "IL-SCH-BUS-002",
    routeCode: "BUS-RT-02",
    timestamp: "2026-09-03T07:50:00Z",
    gpsCoordinates: {
      latitude: 39.8217,
      longitude: -89.6191
    },
    speedKilometersPerHour: 25,
    engineRPM: 2100,
    fuelTankLevelPercentage: 75,
    engineCoolantTempCelsius: 88,
    doorSensorStatus: "CLOSED_SECURE",
    driverAlertFlag: "NORMAL_OPERATION"
  },
  {
    streamId: "TEL-V03-P001",
    vehicleRegistrationNo: "IL-SCH-BUS-003",
    routeCode: "BUS-RT-03",
    timestamp: "2026-09-03T07:14:00Z",
    gpsCoordinates: {
      latitude: 39.8137,
      longitude: -89.6246
    },
    speedKilometersPerHour: 32,
    engineRPM: 2184,
    fuelTankLevelPercentage: 93,
    engineCoolantTempCelsius: 88,
    doorSensorStatus: "CLOSED_SECURE",
    driverAlertFlag: "NORMAL_OPERATION"
  },
  {
    streamId: "TEL-V03-P002",
    vehicleRegistrationNo: "IL-SCH-BUS-003",
    routeCode: "BUS-RT-03",
    timestamp: "2026-09-03T07:18:00Z",
    gpsCoordinates: {
      latitude: 39.8157,
      longitude: -89.6231
    },
    speedKilometersPerHour: 39,
    engineRPM: 2268,
    fuelTankLevelPercentage: 91,
    engineCoolantTempCelsius: 88,
    doorSensorStatus: "CLOSED_SECURE",
    driverAlertFlag: "NORMAL_OPERATION"
  },
  {
    streamId: "TEL-V03-P003",
    vehicleRegistrationNo: "IL-SCH-BUS-003",
    routeCode: "BUS-RT-03",
    timestamp: "2026-09-03T07:22:00Z",
    gpsCoordinates: {
      latitude: 39.8177,
      longitude: -89.6216
    },
    speedKilometersPerHour: 46,
    engineRPM: 2352,
    fuelTankLevelPercentage: 89,
    engineCoolantTempCelsius: 88,
    doorSensorStatus: "OPEN_AT_STOP",
    driverAlertFlag: "NORMAL_OPERATION"
  },
  {
    streamId: "TEL-V03-P004",
    vehicleRegistrationNo: "IL-SCH-BUS-003",
    routeCode: "BUS-RT-03",
    timestamp: "2026-09-03T07:26:00Z",
    gpsCoordinates: {
      latitude: 39.8197,
      longitude: -89.6201
    },
    speedKilometersPerHour: 53,
    engineRPM: 2436,
    fuelTankLevelPercentage: 87,
    engineCoolantTempCelsius: 88,
    doorSensorStatus: "CLOSED_SECURE",
    driverAlertFlag: "NORMAL_OPERATION"
  },
  {
    streamId: "TEL-V03-P005",
    vehicleRegistrationNo: "IL-SCH-BUS-003",
    routeCode: "BUS-RT-03",
    timestamp: "2026-09-03T07:30:00Z",
    gpsCoordinates: {
      latitude: 39.8217,
      longitude: -89.6186
    },
    speedKilometersPerHour: 25,
    engineRPM: 2100,
    fuelTankLevelPercentage: 85,
    engineCoolantTempCelsius: 88,
    doorSensorStatus: "CLOSED_SECURE",
    driverAlertFlag: "NORMAL_OPERATION"
  },
  {
    streamId: "TEL-V03-P006",
    vehicleRegistrationNo: "IL-SCH-BUS-003",
    routeCode: "BUS-RT-03",
    timestamp: "2026-09-03T07:34:00Z",
    gpsCoordinates: {
      latitude: 39.8237,
      longitude: -89.6171
    },
    speedKilometersPerHour: 32,
    engineRPM: 2184,
    fuelTankLevelPercentage: 83,
    engineCoolantTempCelsius: 88,
    doorSensorStatus: "OPEN_AT_STOP",
    driverAlertFlag: "NORMAL_OPERATION"
  },
  {
    streamId: "TEL-V03-P007",
    vehicleRegistrationNo: "IL-SCH-BUS-003",
    routeCode: "BUS-RT-03",
    timestamp: "2026-09-03T07:38:00Z",
    gpsCoordinates: {
      latitude: 39.8257,
      longitude: -89.6156
    },
    speedKilometersPerHour: 39,
    engineRPM: 2268,
    fuelTankLevelPercentage: 81,
    engineCoolantTempCelsius: 88,
    doorSensorStatus: "CLOSED_SECURE",
    driverAlertFlag: "NORMAL_OPERATION"
  },
  {
    streamId: "TEL-V03-P008",
    vehicleRegistrationNo: "IL-SCH-BUS-003",
    routeCode: "BUS-RT-03",
    timestamp: "2026-09-03T07:42:00Z",
    gpsCoordinates: {
      latitude: 39.8277,
      longitude: -89.6141
    },
    speedKilometersPerHour: 46,
    engineRPM: 2352,
    fuelTankLevelPercentage: 79,
    engineCoolantTempCelsius: 88,
    doorSensorStatus: "CLOSED_SECURE",
    driverAlertFlag: "NORMAL_OPERATION"
  },
  {
    streamId: "TEL-V03-P009",
    vehicleRegistrationNo: "IL-SCH-BUS-003",
    routeCode: "BUS-RT-03",
    timestamp: "2026-09-03T07:46:00Z",
    gpsCoordinates: {
      latitude: 39.8297,
      longitude: -89.6126
    },
    speedKilometersPerHour: 53,
    engineRPM: 2436,
    fuelTankLevelPercentage: 77,
    engineCoolantTempCelsius: 88,
    doorSensorStatus: "OPEN_AT_STOP",
    driverAlertFlag: "NORMAL_OPERATION"
  },
  {
    streamId: "TEL-V03-P010",
    vehicleRegistrationNo: "IL-SCH-BUS-003",
    routeCode: "BUS-RT-03",
    timestamp: "2026-09-03T07:50:00Z",
    gpsCoordinates: {
      latitude: 39.8317,
      longitude: -89.6111
    },
    speedKilometersPerHour: 25,
    engineRPM: 2100,
    fuelTankLevelPercentage: 75,
    engineCoolantTempCelsius: 88,
    doorSensorStatus: "CLOSED_SECURE",
    driverAlertFlag: "NORMAL_OPERATION"
  },
  {
    streamId: "TEL-V04-P001",
    vehicleRegistrationNo: "IL-SCH-BUS-004",
    routeCode: "BUS-RT-04",
    timestamp: "2026-09-03T07:14:00Z",
    gpsCoordinates: {
      latitude: 39.8237,
      longitude: -89.6166
    },
    speedKilometersPerHour: 32,
    engineRPM: 2184,
    fuelTankLevelPercentage: 93,
    engineCoolantTempCelsius: 88,
    doorSensorStatus: "CLOSED_SECURE",
    driverAlertFlag: "NORMAL_OPERATION"
  },
  {
    streamId: "TEL-V04-P002",
    vehicleRegistrationNo: "IL-SCH-BUS-004",
    routeCode: "BUS-RT-04",
    timestamp: "2026-09-03T07:18:00Z",
    gpsCoordinates: {
      latitude: 39.8257,
      longitude: -89.6151
    },
    speedKilometersPerHour: 39,
    engineRPM: 2268,
    fuelTankLevelPercentage: 91,
    engineCoolantTempCelsius: 88,
    doorSensorStatus: "CLOSED_SECURE",
    driverAlertFlag: "NORMAL_OPERATION"
  },
  {
    streamId: "TEL-V04-P003",
    vehicleRegistrationNo: "IL-SCH-BUS-004",
    routeCode: "BUS-RT-04",
    timestamp: "2026-09-03T07:22:00Z",
    gpsCoordinates: {
      latitude: 39.8277,
      longitude: -89.6136
    },
    speedKilometersPerHour: 46,
    engineRPM: 2352,
    fuelTankLevelPercentage: 89,
    engineCoolantTempCelsius: 88,
    doorSensorStatus: "OPEN_AT_STOP",
    driverAlertFlag: "NORMAL_OPERATION"
  },
  {
    streamId: "TEL-V04-P004",
    vehicleRegistrationNo: "IL-SCH-BUS-004",
    routeCode: "BUS-RT-04",
    timestamp: "2026-09-03T07:26:00Z",
    gpsCoordinates: {
      latitude: 39.8297,
      longitude: -89.6121
    },
    speedKilometersPerHour: 53,
    engineRPM: 2436,
    fuelTankLevelPercentage: 87,
    engineCoolantTempCelsius: 88,
    doorSensorStatus: "CLOSED_SECURE",
    driverAlertFlag: "NORMAL_OPERATION"
  },
  {
    streamId: "TEL-V04-P005",
    vehicleRegistrationNo: "IL-SCH-BUS-004",
    routeCode: "BUS-RT-04",
    timestamp: "2026-09-03T07:30:00Z",
    gpsCoordinates: {
      latitude: 39.8317,
      longitude: -89.6106
    },
    speedKilometersPerHour: 25,
    engineRPM: 2100,
    fuelTankLevelPercentage: 85,
    engineCoolantTempCelsius: 88,
    doorSensorStatus: "CLOSED_SECURE",
    driverAlertFlag: "NORMAL_OPERATION"
  },
  {
    streamId: "TEL-V04-P006",
    vehicleRegistrationNo: "IL-SCH-BUS-004",
    routeCode: "BUS-RT-04",
    timestamp: "2026-09-03T07:34:00Z",
    gpsCoordinates: {
      latitude: 39.8337,
      longitude: -89.6091
    },
    speedKilometersPerHour: 32,
    engineRPM: 2184,
    fuelTankLevelPercentage: 83,
    engineCoolantTempCelsius: 88,
    doorSensorStatus: "OPEN_AT_STOP",
    driverAlertFlag: "NORMAL_OPERATION"
  },
  {
    streamId: "TEL-V04-P007",
    vehicleRegistrationNo: "IL-SCH-BUS-004",
    routeCode: "BUS-RT-04",
    timestamp: "2026-09-03T07:38:00Z",
    gpsCoordinates: {
      latitude: 39.8357,
      longitude: -89.6076
    },
    speedKilometersPerHour: 39,
    engineRPM: 2268,
    fuelTankLevelPercentage: 81,
    engineCoolantTempCelsius: 88,
    doorSensorStatus: "CLOSED_SECURE",
    driverAlertFlag: "NORMAL_OPERATION"
  },
  {
    streamId: "TEL-V04-P008",
    vehicleRegistrationNo: "IL-SCH-BUS-004",
    routeCode: "BUS-RT-04",
    timestamp: "2026-09-03T07:42:00Z",
    gpsCoordinates: {
      latitude: 39.8377,
      longitude: -89.6061
    },
    speedKilometersPerHour: 46,
    engineRPM: 2352,
    fuelTankLevelPercentage: 79,
    engineCoolantTempCelsius: 88,
    doorSensorStatus: "CLOSED_SECURE",
    driverAlertFlag: "NORMAL_OPERATION"
  },
  {
    streamId: "TEL-V04-P009",
    vehicleRegistrationNo: "IL-SCH-BUS-004",
    routeCode: "BUS-RT-04",
    timestamp: "2026-09-03T07:46:00Z",
    gpsCoordinates: {
      latitude: 39.8397,
      longitude: -89.6046
    },
    speedKilometersPerHour: 53,
    engineRPM: 2436,
    fuelTankLevelPercentage: 77,
    engineCoolantTempCelsius: 88,
    doorSensorStatus: "OPEN_AT_STOP",
    driverAlertFlag: "NORMAL_OPERATION"
  },
  {
    streamId: "TEL-V04-P010",
    vehicleRegistrationNo: "IL-SCH-BUS-004",
    routeCode: "BUS-RT-04",
    timestamp: "2026-09-03T07:50:00Z",
    gpsCoordinates: {
      latitude: 39.8417,
      longitude: -89.6031
    },
    speedKilometersPerHour: 25,
    engineRPM: 2100,
    fuelTankLevelPercentage: 75,
    engineCoolantTempCelsius: 88,
    doorSensorStatus: "CLOSED_SECURE",
    driverAlertFlag: "NORMAL_OPERATION"
  },
  {
    streamId: "TEL-V05-P001",
    vehicleRegistrationNo: "IL-SCH-BUS-005",
    routeCode: "BUS-RT-05",
    timestamp: "2026-09-03T07:14:00Z",
    gpsCoordinates: {
      latitude: 39.8337,
      longitude: -89.6086
    },
    speedKilometersPerHour: 32,
    engineRPM: 2184,
    fuelTankLevelPercentage: 93,
    engineCoolantTempCelsius: 88,
    doorSensorStatus: "CLOSED_SECURE",
    driverAlertFlag: "NORMAL_OPERATION"
  },
  {
    streamId: "TEL-V05-P002",
    vehicleRegistrationNo: "IL-SCH-BUS-005",
    routeCode: "BUS-RT-05",
    timestamp: "2026-09-03T07:18:00Z",
    gpsCoordinates: {
      latitude: 39.8357,
      longitude: -89.6071
    },
    speedKilometersPerHour: 39,
    engineRPM: 2268,
    fuelTankLevelPercentage: 91,
    engineCoolantTempCelsius: 88,
    doorSensorStatus: "CLOSED_SECURE",
    driverAlertFlag: "NORMAL_OPERATION"
  },
  {
    streamId: "TEL-V05-P003",
    vehicleRegistrationNo: "IL-SCH-BUS-005",
    routeCode: "BUS-RT-05",
    timestamp: "2026-09-03T07:22:00Z",
    gpsCoordinates: {
      latitude: 39.8377,
      longitude: -89.6056
    },
    speedKilometersPerHour: 46,
    engineRPM: 2352,
    fuelTankLevelPercentage: 89,
    engineCoolantTempCelsius: 88,
    doorSensorStatus: "OPEN_AT_STOP",
    driverAlertFlag: "NORMAL_OPERATION"
  },
  {
    streamId: "TEL-V05-P004",
    vehicleRegistrationNo: "IL-SCH-BUS-005",
    routeCode: "BUS-RT-05",
    timestamp: "2026-09-03T07:26:00Z",
    gpsCoordinates: {
      latitude: 39.8397,
      longitude: -89.6041
    },
    speedKilometersPerHour: 53,
    engineRPM: 2436,
    fuelTankLevelPercentage: 87,
    engineCoolantTempCelsius: 88,
    doorSensorStatus: "CLOSED_SECURE",
    driverAlertFlag: "NORMAL_OPERATION"
  },
  {
    streamId: "TEL-V05-P005",
    vehicleRegistrationNo: "IL-SCH-BUS-005",
    routeCode: "BUS-RT-05",
    timestamp: "2026-09-03T07:30:00Z",
    gpsCoordinates: {
      latitude: 39.8417,
      longitude: -89.6026
    },
    speedKilometersPerHour: 25,
    engineRPM: 2100,
    fuelTankLevelPercentage: 85,
    engineCoolantTempCelsius: 88,
    doorSensorStatus: "CLOSED_SECURE",
    driverAlertFlag: "NORMAL_OPERATION"
  },
  {
    streamId: "TEL-V05-P006",
    vehicleRegistrationNo: "IL-SCH-BUS-005",
    routeCode: "BUS-RT-05",
    timestamp: "2026-09-03T07:34:00Z",
    gpsCoordinates: {
      latitude: 39.8437,
      longitude: -89.6011
    },
    speedKilometersPerHour: 32,
    engineRPM: 2184,
    fuelTankLevelPercentage: 83,
    engineCoolantTempCelsius: 88,
    doorSensorStatus: "OPEN_AT_STOP",
    driverAlertFlag: "NORMAL_OPERATION"
  },
  {
    streamId: "TEL-V05-P007",
    vehicleRegistrationNo: "IL-SCH-BUS-005",
    routeCode: "BUS-RT-05",
    timestamp: "2026-09-03T07:38:00Z",
    gpsCoordinates: {
      latitude: 39.8457,
      longitude: -89.5996
    },
    speedKilometersPerHour: 39,
    engineRPM: 2268,
    fuelTankLevelPercentage: 81,
    engineCoolantTempCelsius: 88,
    doorSensorStatus: "CLOSED_SECURE",
    driverAlertFlag: "NORMAL_OPERATION"
  },
  {
    streamId: "TEL-V05-P008",
    vehicleRegistrationNo: "IL-SCH-BUS-005",
    routeCode: "BUS-RT-05",
    timestamp: "2026-09-03T07:42:00Z",
    gpsCoordinates: {
      latitude: 39.8477,
      longitude: -89.5981
    },
    speedKilometersPerHour: 46,
    engineRPM: 2352,
    fuelTankLevelPercentage: 79,
    engineCoolantTempCelsius: 88,
    doorSensorStatus: "CLOSED_SECURE",
    driverAlertFlag: "NORMAL_OPERATION"
  },
  {
    streamId: "TEL-V05-P009",
    vehicleRegistrationNo: "IL-SCH-BUS-005",
    routeCode: "BUS-RT-05",
    timestamp: "2026-09-03T07:46:00Z",
    gpsCoordinates: {
      latitude: 39.8497,
      longitude: -89.5966
    },
    speedKilometersPerHour: 53,
    engineRPM: 2436,
    fuelTankLevelPercentage: 77,
    engineCoolantTempCelsius: 88,
    doorSensorStatus: "OPEN_AT_STOP",
    driverAlertFlag: "NORMAL_OPERATION"
  },
  {
    streamId: "TEL-V05-P010",
    vehicleRegistrationNo: "IL-SCH-BUS-005",
    routeCode: "BUS-RT-05",
    timestamp: "2026-09-03T07:50:00Z",
    gpsCoordinates: {
      latitude: 39.8517,
      longitude: -89.5951
    },
    speedKilometersPerHour: 25,
    engineRPM: 2100,
    fuelTankLevelPercentage: 75,
    engineCoolantTempCelsius: 88,
    doorSensorStatus: "CLOSED_SECURE",
    driverAlertFlag: "NORMAL_OPERATION"
  },
  {
    streamId: "TEL-V06-P001",
    vehicleRegistrationNo: "IL-SCH-BUS-006",
    routeCode: "BUS-RT-06",
    timestamp: "2026-09-03T07:14:00Z",
    gpsCoordinates: {
      latitude: 39.8437,
      longitude: -89.6006
    },
    speedKilometersPerHour: 32,
    engineRPM: 2184,
    fuelTankLevelPercentage: 93,
    engineCoolantTempCelsius: 88,
    doorSensorStatus: "CLOSED_SECURE",
    driverAlertFlag: "NORMAL_OPERATION"
  },
  {
    streamId: "TEL-V06-P002",
    vehicleRegistrationNo: "IL-SCH-BUS-006",
    routeCode: "BUS-RT-06",
    timestamp: "2026-09-03T07:18:00Z",
    gpsCoordinates: {
      latitude: 39.8457,
      longitude: -89.5991
    },
    speedKilometersPerHour: 39,
    engineRPM: 2268,
    fuelTankLevelPercentage: 91,
    engineCoolantTempCelsius: 88,
    doorSensorStatus: "CLOSED_SECURE",
    driverAlertFlag: "NORMAL_OPERATION"
  },
  {
    streamId: "TEL-V06-P003",
    vehicleRegistrationNo: "IL-SCH-BUS-006",
    routeCode: "BUS-RT-06",
    timestamp: "2026-09-03T07:22:00Z",
    gpsCoordinates: {
      latitude: 39.8477,
      longitude: -89.5976
    },
    speedKilometersPerHour: 46,
    engineRPM: 2352,
    fuelTankLevelPercentage: 89,
    engineCoolantTempCelsius: 88,
    doorSensorStatus: "OPEN_AT_STOP",
    driverAlertFlag: "NORMAL_OPERATION"
  },
  {
    streamId: "TEL-V06-P004",
    vehicleRegistrationNo: "IL-SCH-BUS-006",
    routeCode: "BUS-RT-06",
    timestamp: "2026-09-03T07:26:00Z",
    gpsCoordinates: {
      latitude: 39.8497,
      longitude: -89.5961
    },
    speedKilometersPerHour: 53,
    engineRPM: 2436,
    fuelTankLevelPercentage: 87,
    engineCoolantTempCelsius: 88,
    doorSensorStatus: "CLOSED_SECURE",
    driverAlertFlag: "NORMAL_OPERATION"
  },
  {
    streamId: "TEL-V06-P005",
    vehicleRegistrationNo: "IL-SCH-BUS-006",
    routeCode: "BUS-RT-06",
    timestamp: "2026-09-03T07:30:00Z",
    gpsCoordinates: {
      latitude: 39.8517,
      longitude: -89.5946
    },
    speedKilometersPerHour: 25,
    engineRPM: 2100,
    fuelTankLevelPercentage: 85,
    engineCoolantTempCelsius: 88,
    doorSensorStatus: "CLOSED_SECURE",
    driverAlertFlag: "NORMAL_OPERATION"
  },
  {
    streamId: "TEL-V06-P006",
    vehicleRegistrationNo: "IL-SCH-BUS-006",
    routeCode: "BUS-RT-06",
    timestamp: "2026-09-03T07:34:00Z",
    gpsCoordinates: {
      latitude: 39.8537,
      longitude: -89.5931
    },
    speedKilometersPerHour: 32,
    engineRPM: 2184,
    fuelTankLevelPercentage: 83,
    engineCoolantTempCelsius: 88,
    doorSensorStatus: "OPEN_AT_STOP",
    driverAlertFlag: "NORMAL_OPERATION"
  },
  {
    streamId: "TEL-V06-P007",
    vehicleRegistrationNo: "IL-SCH-BUS-006",
    routeCode: "BUS-RT-06",
    timestamp: "2026-09-03T07:38:00Z",
    gpsCoordinates: {
      latitude: 39.8557,
      longitude: -89.5916
    },
    speedKilometersPerHour: 39,
    engineRPM: 2268,
    fuelTankLevelPercentage: 81,
    engineCoolantTempCelsius: 88,
    doorSensorStatus: "CLOSED_SECURE",
    driverAlertFlag: "NORMAL_OPERATION"
  },
  {
    streamId: "TEL-V06-P008",
    vehicleRegistrationNo: "IL-SCH-BUS-006",
    routeCode: "BUS-RT-06",
    timestamp: "2026-09-03T07:42:00Z",
    gpsCoordinates: {
      latitude: 39.8577,
      longitude: -89.5901
    },
    speedKilometersPerHour: 46,
    engineRPM: 2352,
    fuelTankLevelPercentage: 79,
    engineCoolantTempCelsius: 88,
    doorSensorStatus: "CLOSED_SECURE",
    driverAlertFlag: "NORMAL_OPERATION"
  },
  {
    streamId: "TEL-V06-P009",
    vehicleRegistrationNo: "IL-SCH-BUS-006",
    routeCode: "BUS-RT-06",
    timestamp: "2026-09-03T07:46:00Z",
    gpsCoordinates: {
      latitude: 39.8597,
      longitude: -89.5886
    },
    speedKilometersPerHour: 53,
    engineRPM: 2436,
    fuelTankLevelPercentage: 77,
    engineCoolantTempCelsius: 88,
    doorSensorStatus: "OPEN_AT_STOP",
    driverAlertFlag: "NORMAL_OPERATION"
  },
  {
    streamId: "TEL-V06-P010",
    vehicleRegistrationNo: "IL-SCH-BUS-006",
    routeCode: "BUS-RT-06",
    timestamp: "2026-09-03T07:50:00Z",
    gpsCoordinates: {
      latitude: 39.8617,
      longitude: -89.5871
    },
    speedKilometersPerHour: 25,
    engineRPM: 2100,
    fuelTankLevelPercentage: 75,
    engineCoolantTempCelsius: 88,
    doorSensorStatus: "CLOSED_SECURE",
    driverAlertFlag: "NORMAL_OPERATION"
  },
  {
    streamId: "TEL-V07-P001",
    vehicleRegistrationNo: "IL-SCH-BUS-007",
    routeCode: "BUS-RT-07",
    timestamp: "2026-09-03T07:14:00Z",
    gpsCoordinates: {
      latitude: 39.8537,
      longitude: -89.5926
    },
    speedKilometersPerHour: 32,
    engineRPM: 2184,
    fuelTankLevelPercentage: 93,
    engineCoolantTempCelsius: 88,
    doorSensorStatus: "CLOSED_SECURE",
    driverAlertFlag: "NORMAL_OPERATION"
  },
  {
    streamId: "TEL-V07-P002",
    vehicleRegistrationNo: "IL-SCH-BUS-007",
    routeCode: "BUS-RT-07",
    timestamp: "2026-09-03T07:18:00Z",
    gpsCoordinates: {
      latitude: 39.8557,
      longitude: -89.5911
    },
    speedKilometersPerHour: 39,
    engineRPM: 2268,
    fuelTankLevelPercentage: 91,
    engineCoolantTempCelsius: 88,
    doorSensorStatus: "CLOSED_SECURE",
    driverAlertFlag: "NORMAL_OPERATION"
  },
  {
    streamId: "TEL-V07-P003",
    vehicleRegistrationNo: "IL-SCH-BUS-007",
    routeCode: "BUS-RT-07",
    timestamp: "2026-09-03T07:22:00Z",
    gpsCoordinates: {
      latitude: 39.8577,
      longitude: -89.5896
    },
    speedKilometersPerHour: 46,
    engineRPM: 2352,
    fuelTankLevelPercentage: 89,
    engineCoolantTempCelsius: 88,
    doorSensorStatus: "OPEN_AT_STOP",
    driverAlertFlag: "NORMAL_OPERATION"
  },
  {
    streamId: "TEL-V07-P004",
    vehicleRegistrationNo: "IL-SCH-BUS-007",
    routeCode: "BUS-RT-07",
    timestamp: "2026-09-03T07:26:00Z",
    gpsCoordinates: {
      latitude: 39.8597,
      longitude: -89.5881
    },
    speedKilometersPerHour: 53,
    engineRPM: 2436,
    fuelTankLevelPercentage: 87,
    engineCoolantTempCelsius: 88,
    doorSensorStatus: "CLOSED_SECURE",
    driverAlertFlag: "NORMAL_OPERATION"
  },
  {
    streamId: "TEL-V07-P005",
    vehicleRegistrationNo: "IL-SCH-BUS-007",
    routeCode: "BUS-RT-07",
    timestamp: "2026-09-03T07:30:00Z",
    gpsCoordinates: {
      latitude: 39.8617,
      longitude: -89.5866
    },
    speedKilometersPerHour: 25,
    engineRPM: 2100,
    fuelTankLevelPercentage: 85,
    engineCoolantTempCelsius: 88,
    doorSensorStatus: "CLOSED_SECURE",
    driverAlertFlag: "NORMAL_OPERATION"
  },
  {
    streamId: "TEL-V07-P006",
    vehicleRegistrationNo: "IL-SCH-BUS-007",
    routeCode: "BUS-RT-07",
    timestamp: "2026-09-03T07:34:00Z",
    gpsCoordinates: {
      latitude: 39.8637,
      longitude: -89.5851
    },
    speedKilometersPerHour: 32,
    engineRPM: 2184,
    fuelTankLevelPercentage: 83,
    engineCoolantTempCelsius: 88,
    doorSensorStatus: "OPEN_AT_STOP",
    driverAlertFlag: "NORMAL_OPERATION"
  },
  {
    streamId: "TEL-V07-P007",
    vehicleRegistrationNo: "IL-SCH-BUS-007",
    routeCode: "BUS-RT-07",
    timestamp: "2026-09-03T07:38:00Z",
    gpsCoordinates: {
      latitude: 39.8657,
      longitude: -89.5836
    },
    speedKilometersPerHour: 39,
    engineRPM: 2268,
    fuelTankLevelPercentage: 81,
    engineCoolantTempCelsius: 88,
    doorSensorStatus: "CLOSED_SECURE",
    driverAlertFlag: "NORMAL_OPERATION"
  },
  {
    streamId: "TEL-V07-P008",
    vehicleRegistrationNo: "IL-SCH-BUS-007",
    routeCode: "BUS-RT-07",
    timestamp: "2026-09-03T07:42:00Z",
    gpsCoordinates: {
      latitude: 39.8677,
      longitude: -89.5821
    },
    speedKilometersPerHour: 46,
    engineRPM: 2352,
    fuelTankLevelPercentage: 79,
    engineCoolantTempCelsius: 88,
    doorSensorStatus: "CLOSED_SECURE",
    driverAlertFlag: "NORMAL_OPERATION"
  },
  {
    streamId: "TEL-V07-P009",
    vehicleRegistrationNo: "IL-SCH-BUS-007",
    routeCode: "BUS-RT-07",
    timestamp: "2026-09-03T07:46:00Z",
    gpsCoordinates: {
      latitude: 39.8697,
      longitude: -89.5806
    },
    speedKilometersPerHour: 53,
    engineRPM: 2436,
    fuelTankLevelPercentage: 77,
    engineCoolantTempCelsius: 88,
    doorSensorStatus: "OPEN_AT_STOP",
    driverAlertFlag: "NORMAL_OPERATION"
  },
  {
    streamId: "TEL-V07-P010",
    vehicleRegistrationNo: "IL-SCH-BUS-007",
    routeCode: "BUS-RT-07",
    timestamp: "2026-09-03T07:50:00Z",
    gpsCoordinates: {
      latitude: 39.8717,
      longitude: -89.5791
    },
    speedKilometersPerHour: 25,
    engineRPM: 2100,
    fuelTankLevelPercentage: 75,
    engineCoolantTempCelsius: 88,
    doorSensorStatus: "CLOSED_SECURE",
    driverAlertFlag: "NORMAL_OPERATION"
  },
  {
    streamId: "TEL-V08-P001",
    vehicleRegistrationNo: "IL-SCH-BUS-008",
    routeCode: "BUS-RT-08",
    timestamp: "2026-09-03T07:14:00Z",
    gpsCoordinates: {
      latitude: 39.8637,
      longitude: -89.5846
    },
    speedKilometersPerHour: 32,
    engineRPM: 2184,
    fuelTankLevelPercentage: 93,
    engineCoolantTempCelsius: 88,
    doorSensorStatus: "CLOSED_SECURE",
    driverAlertFlag: "NORMAL_OPERATION"
  },
  {
    streamId: "TEL-V08-P002",
    vehicleRegistrationNo: "IL-SCH-BUS-008",
    routeCode: "BUS-RT-08",
    timestamp: "2026-09-03T07:18:00Z",
    gpsCoordinates: {
      latitude: 39.8657,
      longitude: -89.5831
    },
    speedKilometersPerHour: 39,
    engineRPM: 2268,
    fuelTankLevelPercentage: 91,
    engineCoolantTempCelsius: 88,
    doorSensorStatus: "CLOSED_SECURE",
    driverAlertFlag: "NORMAL_OPERATION"
  },
  {
    streamId: "TEL-V08-P003",
    vehicleRegistrationNo: "IL-SCH-BUS-008",
    routeCode: "BUS-RT-08",
    timestamp: "2026-09-03T07:22:00Z",
    gpsCoordinates: {
      latitude: 39.8677,
      longitude: -89.5816
    },
    speedKilometersPerHour: 46,
    engineRPM: 2352,
    fuelTankLevelPercentage: 89,
    engineCoolantTempCelsius: 88,
    doorSensorStatus: "OPEN_AT_STOP",
    driverAlertFlag: "NORMAL_OPERATION"
  },
  {
    streamId: "TEL-V08-P004",
    vehicleRegistrationNo: "IL-SCH-BUS-008",
    routeCode: "BUS-RT-08",
    timestamp: "2026-09-03T07:26:00Z",
    gpsCoordinates: {
      latitude: 39.8697,
      longitude: -89.5801
    },
    speedKilometersPerHour: 53,
    engineRPM: 2436,
    fuelTankLevelPercentage: 87,
    engineCoolantTempCelsius: 88,
    doorSensorStatus: "CLOSED_SECURE",
    driverAlertFlag: "NORMAL_OPERATION"
  },
  {
    streamId: "TEL-V08-P005",
    vehicleRegistrationNo: "IL-SCH-BUS-008",
    routeCode: "BUS-RT-08",
    timestamp: "2026-09-03T07:30:00Z",
    gpsCoordinates: {
      latitude: 39.8717,
      longitude: -89.5786
    },
    speedKilometersPerHour: 25,
    engineRPM: 2100,
    fuelTankLevelPercentage: 85,
    engineCoolantTempCelsius: 88,
    doorSensorStatus: "CLOSED_SECURE",
    driverAlertFlag: "NORMAL_OPERATION"
  },
  {
    streamId: "TEL-V08-P006",
    vehicleRegistrationNo: "IL-SCH-BUS-008",
    routeCode: "BUS-RT-08",
    timestamp: "2026-09-03T07:34:00Z",
    gpsCoordinates: {
      latitude: 39.8737,
      longitude: -89.5771
    },
    speedKilometersPerHour: 32,
    engineRPM: 2184,
    fuelTankLevelPercentage: 83,
    engineCoolantTempCelsius: 88,
    doorSensorStatus: "OPEN_AT_STOP",
    driverAlertFlag: "NORMAL_OPERATION"
  },
  {
    streamId: "TEL-V08-P007",
    vehicleRegistrationNo: "IL-SCH-BUS-008",
    routeCode: "BUS-RT-08",
    timestamp: "2026-09-03T07:38:00Z",
    gpsCoordinates: {
      latitude: 39.8757,
      longitude: -89.5756
    },
    speedKilometersPerHour: 39,
    engineRPM: 2268,
    fuelTankLevelPercentage: 81,
    engineCoolantTempCelsius: 88,
    doorSensorStatus: "CLOSED_SECURE",
    driverAlertFlag: "NORMAL_OPERATION"
  },
  {
    streamId: "TEL-V08-P008",
    vehicleRegistrationNo: "IL-SCH-BUS-008",
    routeCode: "BUS-RT-08",
    timestamp: "2026-09-03T07:42:00Z",
    gpsCoordinates: {
      latitude: 39.8777,
      longitude: -89.5741
    },
    speedKilometersPerHour: 46,
    engineRPM: 2352,
    fuelTankLevelPercentage: 79,
    engineCoolantTempCelsius: 88,
    doorSensorStatus: "CLOSED_SECURE",
    driverAlertFlag: "NORMAL_OPERATION"
  },
  {
    streamId: "TEL-V08-P009",
    vehicleRegistrationNo: "IL-SCH-BUS-008",
    routeCode: "BUS-RT-08",
    timestamp: "2026-09-03T07:46:00Z",
    gpsCoordinates: {
      latitude: 39.8797,
      longitude: -89.5726
    },
    speedKilometersPerHour: 53,
    engineRPM: 2436,
    fuelTankLevelPercentage: 77,
    engineCoolantTempCelsius: 88,
    doorSensorStatus: "OPEN_AT_STOP",
    driverAlertFlag: "NORMAL_OPERATION"
  },
  {
    streamId: "TEL-V08-P010",
    vehicleRegistrationNo: "IL-SCH-BUS-008",
    routeCode: "BUS-RT-08",
    timestamp: "2026-09-03T07:50:00Z",
    gpsCoordinates: {
      latitude: 39.8817,
      longitude: -89.5711
    },
    speedKilometersPerHour: 25,
    engineRPM: 2100,
    fuelTankLevelPercentage: 75,
    engineCoolantTempCelsius: 88,
    doorSensorStatus: "CLOSED_SECURE",
    driverAlertFlag: "NORMAL_OPERATION"
  },
  {
    streamId: "TEL-V09-P001",
    vehicleRegistrationNo: "IL-SCH-BUS-009",
    routeCode: "BUS-RT-09",
    timestamp: "2026-09-03T07:14:00Z",
    gpsCoordinates: {
      latitude: 39.8737,
      longitude: -89.5766
    },
    speedKilometersPerHour: 32,
    engineRPM: 2184,
    fuelTankLevelPercentage: 93,
    engineCoolantTempCelsius: 88,
    doorSensorStatus: "CLOSED_SECURE",
    driverAlertFlag: "NORMAL_OPERATION"
  },
  {
    streamId: "TEL-V09-P002",
    vehicleRegistrationNo: "IL-SCH-BUS-009",
    routeCode: "BUS-RT-09",
    timestamp: "2026-09-03T07:18:00Z",
    gpsCoordinates: {
      latitude: 39.8757,
      longitude: -89.5751
    },
    speedKilometersPerHour: 39,
    engineRPM: 2268,
    fuelTankLevelPercentage: 91,
    engineCoolantTempCelsius: 88,
    doorSensorStatus: "CLOSED_SECURE",
    driverAlertFlag: "NORMAL_OPERATION"
  },
  {
    streamId: "TEL-V09-P003",
    vehicleRegistrationNo: "IL-SCH-BUS-009",
    routeCode: "BUS-RT-09",
    timestamp: "2026-09-03T07:22:00Z",
    gpsCoordinates: {
      latitude: 39.8777,
      longitude: -89.5736
    },
    speedKilometersPerHour: 46,
    engineRPM: 2352,
    fuelTankLevelPercentage: 89,
    engineCoolantTempCelsius: 88,
    doorSensorStatus: "OPEN_AT_STOP",
    driverAlertFlag: "NORMAL_OPERATION"
  },
  {
    streamId: "TEL-V09-P004",
    vehicleRegistrationNo: "IL-SCH-BUS-009",
    routeCode: "BUS-RT-09",
    timestamp: "2026-09-03T07:26:00Z",
    gpsCoordinates: {
      latitude: 39.8797,
      longitude: -89.5721
    },
    speedKilometersPerHour: 53,
    engineRPM: 2436,
    fuelTankLevelPercentage: 87,
    engineCoolantTempCelsius: 88,
    doorSensorStatus: "CLOSED_SECURE",
    driverAlertFlag: "NORMAL_OPERATION"
  },
  {
    streamId: "TEL-V09-P005",
    vehicleRegistrationNo: "IL-SCH-BUS-009",
    routeCode: "BUS-RT-09",
    timestamp: "2026-09-03T07:30:00Z",
    gpsCoordinates: {
      latitude: 39.8817,
      longitude: -89.5706
    },
    speedKilometersPerHour: 25,
    engineRPM: 2100,
    fuelTankLevelPercentage: 85,
    engineCoolantTempCelsius: 88,
    doorSensorStatus: "CLOSED_SECURE",
    driverAlertFlag: "NORMAL_OPERATION"
  },
  {
    streamId: "TEL-V09-P006",
    vehicleRegistrationNo: "IL-SCH-BUS-009",
    routeCode: "BUS-RT-09",
    timestamp: "2026-09-03T07:34:00Z",
    gpsCoordinates: {
      latitude: 39.8837,
      longitude: -89.5691
    },
    speedKilometersPerHour: 32,
    engineRPM: 2184,
    fuelTankLevelPercentage: 83,
    engineCoolantTempCelsius: 88,
    doorSensorStatus: "OPEN_AT_STOP",
    driverAlertFlag: "NORMAL_OPERATION"
  },
  {
    streamId: "TEL-V09-P007",
    vehicleRegistrationNo: "IL-SCH-BUS-009",
    routeCode: "BUS-RT-09",
    timestamp: "2026-09-03T07:38:00Z",
    gpsCoordinates: {
      latitude: 39.8857,
      longitude: -89.5676
    },
    speedKilometersPerHour: 39,
    engineRPM: 2268,
    fuelTankLevelPercentage: 81,
    engineCoolantTempCelsius: 88,
    doorSensorStatus: "CLOSED_SECURE",
    driverAlertFlag: "NORMAL_OPERATION"
  },
  {
    streamId: "TEL-V09-P008",
    vehicleRegistrationNo: "IL-SCH-BUS-009",
    routeCode: "BUS-RT-09",
    timestamp: "2026-09-03T07:42:00Z",
    gpsCoordinates: {
      latitude: 39.8877,
      longitude: -89.5661
    },
    speedKilometersPerHour: 46,
    engineRPM: 2352,
    fuelTankLevelPercentage: 79,
    engineCoolantTempCelsius: 88,
    doorSensorStatus: "CLOSED_SECURE",
    driverAlertFlag: "NORMAL_OPERATION"
  },
  {
    streamId: "TEL-V09-P009",
    vehicleRegistrationNo: "IL-SCH-BUS-009",
    routeCode: "BUS-RT-09",
    timestamp: "2026-09-03T07:46:00Z",
    gpsCoordinates: {
      latitude: 39.8897,
      longitude: -89.5646
    },
    speedKilometersPerHour: 53,
    engineRPM: 2436,
    fuelTankLevelPercentage: 77,
    engineCoolantTempCelsius: 88,
    doorSensorStatus: "OPEN_AT_STOP",
    driverAlertFlag: "NORMAL_OPERATION"
  },
  {
    streamId: "TEL-V09-P010",
    vehicleRegistrationNo: "IL-SCH-BUS-009",
    routeCode: "BUS-RT-09",
    timestamp: "2026-09-03T07:50:00Z",
    gpsCoordinates: {
      latitude: 39.8917,
      longitude: -89.5631
    },
    speedKilometersPerHour: 25,
    engineRPM: 2100,
    fuelTankLevelPercentage: 75,
    engineCoolantTempCelsius: 88,
    doorSensorStatus: "CLOSED_SECURE",
    driverAlertFlag: "NORMAL_OPERATION"
  },
  {
    streamId: "TEL-V010-P001",
    vehicleRegistrationNo: "IL-SCH-BUS-0010",
    routeCode: "BUS-RT-010",
    timestamp: "2026-09-03T07:14:00Z",
    gpsCoordinates: {
      latitude: 39.8837,
      longitude: -89.5686
    },
    speedKilometersPerHour: 32,
    engineRPM: 2184,
    fuelTankLevelPercentage: 93,
    engineCoolantTempCelsius: 88,
    doorSensorStatus: "CLOSED_SECURE",
    driverAlertFlag: "NORMAL_OPERATION"
  },
  {
    streamId: "TEL-V010-P002",
    vehicleRegistrationNo: "IL-SCH-BUS-0010",
    routeCode: "BUS-RT-010",
    timestamp: "2026-09-03T07:18:00Z",
    gpsCoordinates: {
      latitude: 39.8857,
      longitude: -89.5671
    },
    speedKilometersPerHour: 39,
    engineRPM: 2268,
    fuelTankLevelPercentage: 91,
    engineCoolantTempCelsius: 88,
    doorSensorStatus: "CLOSED_SECURE",
    driverAlertFlag: "NORMAL_OPERATION"
  },
  {
    streamId: "TEL-V010-P003",
    vehicleRegistrationNo: "IL-SCH-BUS-0010",
    routeCode: "BUS-RT-010",
    timestamp: "2026-09-03T07:22:00Z",
    gpsCoordinates: {
      latitude: 39.8877,
      longitude: -89.5656
    },
    speedKilometersPerHour: 46,
    engineRPM: 2352,
    fuelTankLevelPercentage: 89,
    engineCoolantTempCelsius: 88,
    doorSensorStatus: "OPEN_AT_STOP",
    driverAlertFlag: "NORMAL_OPERATION"
  },
  {
    streamId: "TEL-V010-P004",
    vehicleRegistrationNo: "IL-SCH-BUS-0010",
    routeCode: "BUS-RT-010",
    timestamp: "2026-09-03T07:26:00Z",
    gpsCoordinates: {
      latitude: 39.8897,
      longitude: -89.5641
    },
    speedKilometersPerHour: 53,
    engineRPM: 2436,
    fuelTankLevelPercentage: 87,
    engineCoolantTempCelsius: 88,
    doorSensorStatus: "CLOSED_SECURE",
    driverAlertFlag: "NORMAL_OPERATION"
  },
  {
    streamId: "TEL-V010-P005",
    vehicleRegistrationNo: "IL-SCH-BUS-0010",
    routeCode: "BUS-RT-010",
    timestamp: "2026-09-03T07:30:00Z",
    gpsCoordinates: {
      latitude: 39.8917,
      longitude: -89.5626
    },
    speedKilometersPerHour: 25,
    engineRPM: 2100,
    fuelTankLevelPercentage: 85,
    engineCoolantTempCelsius: 88,
    doorSensorStatus: "CLOSED_SECURE",
    driverAlertFlag: "NORMAL_OPERATION"
  },
  {
    streamId: "TEL-V010-P006",
    vehicleRegistrationNo: "IL-SCH-BUS-0010",
    routeCode: "BUS-RT-010",
    timestamp: "2026-09-03T07:34:00Z",
    gpsCoordinates: {
      latitude: 39.8937,
      longitude: -89.5611
    },
    speedKilometersPerHour: 32,
    engineRPM: 2184,
    fuelTankLevelPercentage: 83,
    engineCoolantTempCelsius: 88,
    doorSensorStatus: "OPEN_AT_STOP",
    driverAlertFlag: "NORMAL_OPERATION"
  },
  {
    streamId: "TEL-V010-P007",
    vehicleRegistrationNo: "IL-SCH-BUS-0010",
    routeCode: "BUS-RT-010",
    timestamp: "2026-09-03T07:38:00Z",
    gpsCoordinates: {
      latitude: 39.8957,
      longitude: -89.5596
    },
    speedKilometersPerHour: 39,
    engineRPM: 2268,
    fuelTankLevelPercentage: 81,
    engineCoolantTempCelsius: 88,
    doorSensorStatus: "CLOSED_SECURE",
    driverAlertFlag: "NORMAL_OPERATION"
  },
  {
    streamId: "TEL-V010-P008",
    vehicleRegistrationNo: "IL-SCH-BUS-0010",
    routeCode: "BUS-RT-010",
    timestamp: "2026-09-03T07:42:00Z",
    gpsCoordinates: {
      latitude: 39.8977,
      longitude: -89.5581
    },
    speedKilometersPerHour: 46,
    engineRPM: 2352,
    fuelTankLevelPercentage: 79,
    engineCoolantTempCelsius: 88,
    doorSensorStatus: "CLOSED_SECURE",
    driverAlertFlag: "NORMAL_OPERATION"
  },
  {
    streamId: "TEL-V010-P009",
    vehicleRegistrationNo: "IL-SCH-BUS-0010",
    routeCode: "BUS-RT-010",
    timestamp: "2026-09-03T07:46:00Z",
    gpsCoordinates: {
      latitude: 39.8997,
      longitude: -89.5566
    },
    speedKilometersPerHour: 53,
    engineRPM: 2436,
    fuelTankLevelPercentage: 77,
    engineCoolantTempCelsius: 88,
    doorSensorStatus: "OPEN_AT_STOP",
    driverAlertFlag: "NORMAL_OPERATION"
  },
  {
    streamId: "TEL-V010-P010",
    vehicleRegistrationNo: "IL-SCH-BUS-0010",
    routeCode: "BUS-RT-010",
    timestamp: "2026-09-03T07:50:00Z",
    gpsCoordinates: {
      latitude: 39.9017,
      longitude: -89.5551
    },
    speedKilometersPerHour: 25,
    engineRPM: 2100,
    fuelTankLevelPercentage: 75,
    engineCoolantTempCelsius: 88,
    doorSensorStatus: "CLOSED_SECURE",
    driverAlertFlag: "NORMAL_OPERATION"
  },
];

@Injectable()
export class VehicleTelemetryMasterService {
  public getAllTelemetry(): VehicleTelemetryStreamItem[] {
    return MASTER_VEHICLE_TELEMETRY;
  }
}
