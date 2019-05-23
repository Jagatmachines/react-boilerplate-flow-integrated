import type { RouterHistory } from 'react-router-dom';

export type AuthenticationProps = {
  history: RouterHistory,

  loginAuthentication: (username: string, password: string) => Promise<void>,
  addNotificationToken: (notificationToken: string) => Promise<void>
};

export type Values = {
  username: string,
  password: string
};
