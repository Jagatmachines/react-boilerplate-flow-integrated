import { schema } from 'normalizr';

export const vehicleLocation = new schema.Entity('vehicleLocation', {}, { idAttribute: 'vehicle' });
export const vehicleReport = new schema.Entity('vehicleReport', {}, { idAttribute: 'vehicle' });
export const vehicleList = new schema.Entity('vehicleList', {}, { idAttribute: 'id' });
export const vehicleListToDevice = new schema.Entity('vehicleListToDevice', {}, { idAttribute: 'device' });
export const imeiDevice = new schema.Entity('deviceList', {}, { idAttribute: 'imei' });
export const driverDetail = new schema.Entity('driverDetail');
