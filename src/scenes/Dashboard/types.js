import type {
  IVehicleLocationStatesType,
  ICoordinateType /* , ISingleVehicleLocationStateType, */
} from '../../services/dashboard/state';
import type { ISettingStatesType } from '../../services/settings/state';
import type { RouterHistory } from 'react-router-dom';

export type IDashboardProps = {
  vehicleTrack: IVehicleLocationStatesType,
  setting: ISettingStatesType,
  history: RouterHistory,
  hamburger: boolean,

  fetchVehicleLocations: () => Promise<void>,
  fetchVehiclePath: (vehicleNumber: number) => Promise<void>,
  fetchGeoAddressVehicle: (vehicleId: string, coordinates: ICoordinateType) => Promise<void>
};

export type IDashboardStates = {
  vehicleFilterListShow: boolean,
  /* showTotalVehicle: {
    vehicleDetail: ISingleVehicleLocationStateType,
    type: string
  }, */
  startPosition: boolean,
  endPosition: boolean,
  stoppagePoint: boolean,
  vehicleFilterList: Array<string>,
  vehicleZoomFilter: Array<string>,

  vehicleMarkerReference: any
};
