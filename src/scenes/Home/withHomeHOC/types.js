import { Dispatch } from 'react-redux';
import type { IUserInfoStateType } from '../../../services/userInfo/state';
import type { RouterHistory } from 'react-router-dom';

export type IDispatchActions = {
  fetchUserInfo: () => Promise<void>,
  fetchNotification: () => Promise<void>,
  fetchVehiclePopOverState: () => Promise<void>,
  fetchVehicleLocations: () => Promise<void>,
  fetchVehiclePath: (vehicleNumber: number, filterDate: string) => Promise<void>
};

export type IWithHomeProps = IDispatchActions & {
  userInfo: IUserInfoStateType,
  history: RouterHistory
};

export type IWithHomeState = {
  isLogin: boolean
};

export type IWithHomeDispatchProp = (dispatch: Dispatch<void>) => IDispatchActions;
