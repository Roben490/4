import { Bus } from "./Bus";

export interface GetLimitBuses {
  buses: Bus[];
  totalPages: number;
  currentPage: number;
  totalBuses: number;
}
