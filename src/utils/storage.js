const storageType = localStorage || window.localStorage;

export function setUserInfo(value: any) {
  storageType.setItem('userinfo', JSON.stringify(value));
}

export function getUserInfo(): Promise<{}> {
  const userInfo = storageType.getItem('userinfo');
  if (userInfo) {
    return Promise.resolve(JSON.parse(userInfo));
  } else {
    return Promise.reject();
  }
}

export function fetchUserInfo() {
  const userInfo = storageType.getItem('userinfo');
  if (userInfo) {
    return JSON.parse(userInfo);
  } else {
    return '';
  }
}

export function getAccessToken() {
  const userInfo = storageType.getItem('userinfo');
  if (userInfo) {
    const userDetail = JSON.parse(userInfo);
    return userDetail.token;
  } else {
    return '';
  }
}

export function getDashboardVehiclePop() {
  return storageType.getItem('dashboardVehiclePopOver');
}

export function setDashboardVehiclePop(value: string) {
  return storageType.setItem('dashboardVehiclePopOver', value);
}
