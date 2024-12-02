import { busStatus } from "../enums/busStatus";
import { Lines } from "./Lines";
import { User } from "./User";

export interface Bus {
    _id?: string;
    licensePlate: string;
    busModel: string;
    capacity: number;
    status: busStatus;
    driverId: User['_id']
    routeId: Lines['_id'];
    createdAt?: Date;
  }