import type { Match } from 'react-router-dom';
import type { IVehicleLocationStatesType, IVehicleSocket, ICoordinateType } from '../../services/dashboard/state';

export type IVehcileDetailProps = {
  fetchVehicleLocations: () => Promise<void>,
  fetchVehiclePath: (vehicleNumber: string, filterDate: string) => Promise<void>,
  updateVehicleLastLocation: (responseData: IVehicleSocket) => Promise<void>,
  match: Match,
  vehicleTrack: IVehicleLocationStatesType,
  hamburger: boolean
};

export type IVehcileDetailStates = {
  startPosition: boolean,
  endPosition: boolean,
  stoppagePoint: boolean,
  tabVehicleKey: number,

  removalDecorator: Object,

  pathLongLat: Array<[number, number]>,
  stoppage: Object,
  graphPath: Array<[number, number]>,
  graphPathReduce: Array<[number, number]>,
  timeStampArray: Array<string>,

  vehicleDetailTabToggle: boolean,
  vehicleId: string
};

export type IStoppageDetail = {
  vehicle_no: string,
  stoppage: Array<IStoppagePoint>
};

export type IStoppagePoint = {
  end_id: number,
  start_id: number,
  timeDuration: number,
  position: ICoordinateType
};
