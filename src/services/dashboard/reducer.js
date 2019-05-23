import {
  VehicleLocationStates,
  type IVehicleLocationStatesType,
  type ISingleVehicleLocationStateType,
  type IVehiclePathDetail
} from './state';
import { type IActionType, ActionType } from '../../constants';
import { normalize } from 'normalizr';
import * as schema from '../../utils/schema';

export default function vehicleTrack(state: IVehicleLocationStatesType = VehicleLocationStates, action: IActionType) {
  let newStates: IVehicleLocationStatesType = Object.assign({}, state);
  let vehicleLocNormaliz;
  let vehicleId: string,
    onlineVehicle: Array<string> = [],
    offlineVehicle: Array<string> = [],
    vehicleDetail: ISingleVehicleLocationStateType = {},
    lastPosition: IVehiclePathDetail = {};

  switch (action.type) {
    case ActionType.vehicleActions.GET_VEHICLE_LOCATION:
      vehicleLocNormaliz = normalize(action.payload, [schema.vehicleLocation]);
      action.payload.map(vehicle => {
        if (new Date(vehicle.timestamp).toDateString() === new Date().toDateString()) {
          return (onlineVehicle = [...onlineVehicle, ...[vehicle.vehicle]]);
        } else {
          return (offlineVehicle = [...offlineVehicle, ...[vehicle.vehicle]]);
        }
      });

      return {
        ...state,
        vehicleLocation: vehicleLocNormaliz.entities.vehicleLocation,
        totalVehicle: vehicleLocNormaliz.result,
        onlineVehicle,
        offlineVehicle,
        totalVehicleDetail: action.payload
      };

    case ActionType.vehicleActions.GET_VEHICLE_PATH:
      return {
        ...state,
        vehiclePath: {
          vehicleNumber: action.payload.vehicleNumber,
          pathDetails: action.payload.responseData
        }
      };

    case ActionType.vehicleActions.GET_INDIVIDUAL_GEOADDRESS:
      vehicleId = action.payload.vehicleId;
      newStates.vehicleLocation[vehicleId].address = action.payload.responseData.display_name;
      return newStates;

    case ActionType.vehicleActions.GET_VEHICLE_START_STOP:
      action.payload.forEach(vehicleDetail => {
        newStates.vehicleLocation[vehicleDetail.vehicleId].start = vehicleDetail.start;
        newStates.vehicleLocation[vehicleDetail.vehicleId].stop = vehicleDetail.stop;
      });
      return newStates;

    case ActionType.vehicleActions.UPDATE_VEHICLE_SOCKET:
      const { datetime, latitude, longitude, speed } = action.payload;
      const timestamp = new Date(datetime).toISOString();
      vehicleId = action.payload.vehicle_id;

      if (newStates.vehiclePath.vehicleNumber == vehicleId) {
        lastPosition = {
          direction: 0,
          id: 750978,
          position: {
            x: latitude,
            y: longitude
          },
          speed,
          timestamp
        };
        newStates.vehiclePath.pathDetails = [...newStates.vehiclePath.pathDetails, ...[lastPosition]];
      }
      return newStates;

    default:
      return state;
  }
}
