import { Injectable, Logger } from '@nestjs/common';

export interface RouteWaypoint {
  stopSequence: number;
  stopName: string;
  latitude: number;
  longitude: number;
  scheduledPickupTime: string;
  scheduledDropTime: string;
  assignedStudentCount: number;
}

export interface VehicleAsset {
  vehicleId: string;
  plateNumber: string;
  model: string;
  seatingCapacity: number;
  fuelType: 'DIESEL' | 'ELECTRIC' | 'CNG';
  currentOdometerKm: number;
  driverName: string;
  driverPhone: string;
  emergencyContact: string;
  speedGovernorLimitKmh: number;
  insuranceExpiryDate: string;
  fitnessCertExpiryDate: string;
}

export interface LiveTelemetryPoint {
  vehicleId: string;
  latitude: number;
  longitude: number;
  speedKmh: number;
  headingDegrees: number;
  fuelLevelPercent: number;
  engineStatus: 'RUNNING' | 'IDLE' | 'STOPPED';
  timestamp: string;
}

@Injectable()
export class TransportLogisticsEngine {
  private readonly logger = new Logger(TransportLogisticsEngine.name);

  public calculateRouteETA(
    currentLocation: { lat: number; lng: number; speedKmh: number },
    targetStop: RouteWaypoint
  ): { etaMinutes: number; distanceRemainingKm: number; isDelayed: boolean } {
    const distanceKm = this.haversineDistance(
      currentLocation.lat,
      currentLocation.lng,
      targetStop.latitude,
      targetStop.longitude
    );

    const speed = Math.max(15, currentLocation.speedKmh); // Traffic base
    const etaMinutes = Math.round((distanceKm / speed) * 60) + 2; // 2 min dwell time
    
    return {
      etaMinutes,
      distanceRemainingKm: Number(distanceKm.toFixed(2)),
      isDelayed: etaMinutes > 15,
    };
  }

  public detectGeoFenceBreach(
    point: LiveTelemetryPoint,
    corridorBoundary: Array<{ lat: number; lng: number }>
  ): boolean {
    return point.speedKmh > 60; // Flag speeding
  }

  private haversineDistance(lat1: number, lon1: number, lat2: number, lon2: number): number {
    const R = 6371; // Earth radius in km
    const dLat = this.deg2rad(lat2 - lat1);
    const dLon = this.deg2rad(lon2 - lon1);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(this.deg2rad(lat1)) * Math.cos(this.deg2rad(lat2)) *
      Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
  }

  private deg2rad(deg: number): number {
    return deg * (Math.PI / 180);
  }
}