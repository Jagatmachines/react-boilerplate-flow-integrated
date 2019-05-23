import type { IVehicleLocationStatesType, IVehicleSocket, ICoordinateType } from '../../../services/dashboard/state';
import type { ISettingStatesType } from '../../../services/settings/state';
import type { Match } from 'react-router-dom';
import { Dispatch } from 'react-redux';

export type IDispatchActions = {
  fetchVehicleLocations: () => Promise<void>,
  fetchGeoAddressVehicle: (vehicleId: string, coordinates: ICoordinateType) => Promise<void>,
  fetchVehiclePath: (vehicleNumber: number, filterDate: string) => Promise<void>,
  fetchStartStopVehicle: (totalVehicle: Array<string>) => Promise<void>,

  updateVehicleLastLocation: (individualVehicleDetail: IVehicleSocket) => Promise<void>
};

export type IWithDashboardProps = IDispatchActions & {
  vehicleTrack: IVehicleLocationStatesType,
  setting: ISettingStatesType,
  hamburger: boolean,
  match: Match
};

export type IWithDashboardDispatchProp = (dispatch: Dispatch<void>) => IDispatchActions;
