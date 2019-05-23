import type { IVehicleLocationStatesType } from '../../../../services/dashboard/state';

export type INavSearchBarProps = {
  vehicleTrack: IVehicleLocationStatesType,
  fetchVehiclePath: (vehicleNumber: number, filterDate: string) => Promise<void>
};

export type INavSearchBarState = {
  value: string,
  suggestions: Array<any>
};
