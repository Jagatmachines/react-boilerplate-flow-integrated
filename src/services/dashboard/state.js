export type ICoordinateType = {
  x: number,
  y: number
};

export type ISingleVehicleLocationStateType = {
  id: number,
  vehicle_no: string,
  vehicle: number,
  type: string,
  timestamp: string,
  speed: number,
  direction: number,
  position: ICoordinateType,
  distanceTravelled: number,
  driverDetails: IDriverDetail,
  address: string,
  start: Date,
  stop: Date
};

export type IVehiclePathDetail = {
  id: number,
  direction: number,
  position: ICoordinateType,
  speed: number,
  timestamp: string
};

export type IVehicleLocationStatesType = {
  vehicleLocation: { [id: string]: ISingleVehicleLocationStateType },
  totalVehicle: Array<string>,
  onlineVehicle: Array<string>,
  offlineVehicle: Array<string>,
  vehiclePath: {
    vehicleNumber: number,
    pathDetails: Array<IVehiclePathDetail>
  },
  totalVehicleDetail: Array<ISingleVehicleLocationStateType>
};

export type IDriverDetail = {
  id: string,
  name: string,
  contact_no: string,
  license_no: string
};

export type IVehicleSocket = {
  datetime: Date,
  latitude: string,
  longitude: string,
  speed: number,
  vehicle_id: string
};

export const VehicleLocationStates: IVehicleLocationStatesType = {
  vehicleLocation: {},
  totalVehicle: [],
  onlineVehicle: [],
  offlineVehicle: [],
  vehiclePath: {
    vehicleNumber: 0,
    pathDetails: []
  },
  totalVehicleDetail: []
};

export const vehicleDetail: ISingleVehicleLocationStateType = {
  id: 0,
  vehicle_no: '',
  vehicle: 0,
  type: '',
  timestamp: '',
  speed: 0,
  direction: 0,
  position: {
    x: 0,
    y: 0
  },
  distanceTravelled: 0,
  driverDetails: {
    id: '',
    name: '',
    contact_no: '',
    license_no: ''
  },
  address: '',
  start: new Date(),
  stop: new Date()
};
type IVehicleT = {
  ids: Array<string>,
  count: number
};

export type IVehicleType = {
  Tripper: IVehicleT,
  Truck: IVehicleT,
  Car: IVehicleT,
  Bus: IVehicleT,
  Motorcycle: IVehicleT,

  excavator: IVehicleT,
  crane: IVehicleT,
  tanker: IVehicleT,
  microbus: IVehicleT,
  suv: IVehicleT,
  scooter: IVehicleT,
  cementmixer: IVehicleT,
  roadroller: IVehicleT,
  pet: IVehicleT,
  kids: IVehicleT
};

const VehicleCount: IVehicleT = {
  ids: [],
  count: 0
};

export const VehicleTypeIntial = {
  Tripper: VehicleCount,
  Truck: VehicleCount,
  Car: VehicleCount,
  Bus: VehicleCount,
  Motorcycle: VehicleCount,

  excavator: VehicleCount,
  crane: VehicleCount,
  tanker: VehicleCount,
  microbus: VehicleCount,
  suv: VehicleCount,
  scooter: VehicleCount,
  cementmixer: VehicleCount,
  roadroller: VehicleCount,
  pet: VehicleCount,
  kids: VehicleCount
};
