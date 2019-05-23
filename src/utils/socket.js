import { showNotification } from './notification';
import type { IVehicleSocket } from '../services/dashboard/state';

let socket = new WebSocket('ws://139.162.2.53:6677');

export const startLiveTracking = (): Promise<any> => {
  return new Promise((resolve, reject) => {
    if (socket.readyState !== 0 && socket.readyState !== 1) {
      socket = new WebSocket('ws://139.162.2.53:6677');
      resolve();
    } else {
      reject();
    }
    socket.onopen = () => {
      showNotification('Live Tracking started', true);
    };
  });
};

const subscribeLiveTracking = (): Promise<any> => {
  return new Promise((resolve, reject) => {
    socket.onmessage = (e: any) => {
      resolve(JSON.parse(e.data));
    };

    socket.onerror = error => {
      showNotification('Error in Live Tracking', true);
      reject(error);
    };
  });
};

export const newSubscribeLiveTracking = (resolve: (data: IVehicleSocket) => void) => {
  try {
    socket.onmessage = (e: any) => {
      resolve(JSON.parse(e.data));
    };

    socket.onerror = error => {
      showNotification('Error in Live Tracking', true);
    };
  } catch (e) {
    console.log('socket error', e);
  }
};

export const endLiveTracking = () => {
  socket.close();
  socket.onclose = error => {
    showNotification('Live Tracking ended', true);
  };
};

export default subscribeLiveTracking;
