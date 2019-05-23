import * as React from 'react';
import type { IUserInfoStateType } from '../../services/userInfo/state';
import type { IVehicleLocationStatesType } from '../../services/dashboard/state';
import type { INotificationStateType } from '../../services/push-notification/state';
import type { Location } from 'react-router-dom';

export type IHomeProps = {
  children: React.Node,
  userInfo: IUserInfoStateType,
  vehicleTrack: IVehicleLocationStatesType,
  render: Function,
  notification: INotificationStateType,
  location: Location,
  fetchNotification: Function,
  fetchVehiclePath: (vehicleNumber: number, filterDate: string) => Promise<void>
};

export type IHomeStates = {
  hamburger: boolean
};
