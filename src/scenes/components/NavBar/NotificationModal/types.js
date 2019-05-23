import type { ISingleNotificationType } from '../../../../services/push-notification/state';

export type INotificationModalProps = {
  showNotificationModal: Function,
  notificationModal: boolean,
  notificationDetail: ISingleNotificationType
};
