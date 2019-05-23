import { combineReducers } from 'redux';

import type { IVehicleLocationStatesType } from '../services/dashboard/state';

import vehicleTrack from '../services/dashboard/reducer';

export type RootState = {
  vehicleTrack: IVehicleLocationStatesType
};

const reducers: RootState = {
  vehicleTrack
};

// export type Reducers = typeof reducers;

export default combineReducers(reducers);
