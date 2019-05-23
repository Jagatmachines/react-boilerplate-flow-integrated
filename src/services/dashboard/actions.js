import axios from '../../utils/axios';
import { ActionType, type IActionType } from '../../constants';
import { ThunkAction } from 'redux-thunk';
import { showNotification } from '../../utils/notification';
import type { ICoordinateType, IVehicleSocket } from './state';
import { getAccessToken } from '../../utils/storage';

export const fetchVehicleLocations = (): ThunkAction<Promise<IActionType>, void, void> => {
  const accessToken = getAccessToken();
  return (dispatchEvent): Promise<IActionType> => {
    return new Promise((resolve, reject) => {
      axios
        .request({
          method: 'GET',
          url: `last_position`,
          headers: {
            'x-access-token': accessToken
          }
        })
        .then(response => {
          const responseData = response.data;
          if (responseData.success === false) {
            const errorMessage = responseData.message;
            if (errorMessage) {
              showNotification(errorMessage, true);
              reject();
            }
          } else {
            dispatchEvent({
              type: ActionType.vehicleActions.GET_VEHICLE_LOCATION,
              payload: responseData
            });
            resolve(response.data);
          }
        })
        .catch(error => {
          const errorMessage = error.message;
          if (errorMessage) {
            showNotification(errorMessage, true);
            reject();
          }
        });
    });
  };
};

export const fetchVehiclePath = (
  vehicleNumber: number,
  filterDate: string
): ThunkAction<Promise<IActionType>, void, void> => {
  const accessToken = getAccessToken();
  return (dispatchEvent): Promise<IActionType> => {
    return new Promise((resolve, reject) => {
      axios
        .request({
          method: 'GET',
          url: `vehicle/${vehicleNumber}/${filterDate}`,
          headers: {
            'x-access-token': accessToken
          }
        })
        .then(response => {
          const responseData = response.data;
          dispatchEvent({
            type: ActionType.vehicleActions.GET_VEHICLE_PATH,
            payload: {
              vehicleNumber,
              responseData
            }
          });
          if (responseData.length <= 1) {
            const errorMessage = 'No Data Available for the Vehicle';
            showNotification(errorMessage, true);
          }
          resolve(response.data);
        })
        .catch(error => {
          const errorMessage = error.message;
          if (errorMessage) {
            showNotification(errorMessage, true);
            reject();
          }
        });
    });
  };
};

export const fetchStartStopVehicle = (vehicleList: Array<string>): ThunkAction<Promise<any>, void, void> => {
  const accessToken = getAccessToken();
  let vehicleIds = '';
  vehicleList.forEach(id => {
    vehicleIds = vehicleIds.length === 0 ? id : vehicleIds + ',' + id;
  });

  return (dispatchEvent): Promise<any> => {
    return new Promise((resolve, reject) => {
      axios
        .request({
          method: 'GET',
          url: `http://139.162.2.53:7078/vehicle_time/2017-10-17?vehicle_ids=${vehicleIds}`,
          headers: {
            'x-access-token': accessToken
          }
        })
        .then(response => {
          const responseData = response.data;
          dispatchEvent({
            type: ActionType.vehicleActions.GET_VEHICLE_START_STOP,
            payload: responseData
          });
          resolve(response.data);
        })
        .catch(error => {
          const errorMessage = error.message;
          if (errorMessage) {
            // showNotification(errorMessage, true);
            reject();
          }
        });
    });
  };
};

export const fetchGeoAddressVehicle = (
  vehicleId: string,
  coordinates: ICoordinateType
): ThunkAction<Promise<IActionType>, void, void> => {
  return (dispatchEvent): Promise<IActionType> => {
    return new Promise((resolve, reject) => {
      /* axios
        .request({
          method: 'GET',
          url: `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${coordinates.x}&lon=${coordinates.y}`
        })
        .then(response => {
          const responseData = response.data;
          dispatchEvent({
            type: ActionType.vehicleActions.GET_INDIVIDUAL_GEOADDRESS,
            payload: {
              vehicleId,
              responseData
            }
          });
          resolve(response.data);
        })
        .catch(error => {
          const errorMessage = error.message;
          if (errorMessage) {
            showNotification(errorMessage, true);
            reject();
          }
        }); */
      resolve();
    });
  };
};

export const updateVehicleLastLocation = (
  responseData: IVehicleSocket
): ThunkAction<Promise<IActionType>, void, void> => {
  return (dispatchEvent): Promise<IVehicleSocket> => {
    dispatchEvent({
      type: ActionType.vehicleActions.UPDATE_VEHICLE_SOCKET,
      payload: responseData
    });
    return Promise.resolve(responseData);
  };
};
