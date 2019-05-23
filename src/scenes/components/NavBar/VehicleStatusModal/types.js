import type { IVehicleLocationStatesType } from '../../../../services/dashboard/state';

export type IVehicleStatusModalProps = {
  vehicleStatusModal: boolean,
  showVehicleStatusModal: Function,
  vehicleTrack: IVehicleLocationStatesType
};
