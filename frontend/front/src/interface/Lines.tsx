
export interface Lines {
    _id?: string
    lineNumber: string;
    name: string;
    stations: string[];
    schedule: Schedule[];
    createdAt?: Date;
  }


  export interface Schedule {
    departureTime: string;
    arrivalTime: string;
    station: string;
    createdAt?: Date;
  } 