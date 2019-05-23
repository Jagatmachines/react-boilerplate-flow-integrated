import type { IVehicleLocationStatesType } from '../../../../services/dashboard/state';
export type IVehicleStatusBarProps = {
  vehicleTrack: IVehicleLocationStatesType
};

export type IVehicleStatusBarState = {
  vehicleStatusModal: boolean
};
