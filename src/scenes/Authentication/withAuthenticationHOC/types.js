// import type { IVehicleLocationStatesType } from '../../../services/dashboard/state';
import { Dispatch } from 'react-redux';

export type IDispatchActions = {
  // fetchVehicleLocations: () => Promise<void>,
  loginAuthentication: (username: string, password: string) => Promise<void>,
  addNotificationToken: (notificationToken: string) => Promise<any>
};

export type IWithAuthenticationProps = IDispatchActions & {};

export type IWithAuthenticationDispatchProp = (dispatch: Dispatch<void>) => IDispatchActions;
