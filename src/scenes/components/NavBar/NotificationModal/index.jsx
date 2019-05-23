import * as React from 'react';
import type { INotificationModalProps } from './types';
import { IntialNotification } from '../../../../services/push-notification/state';
import { Modal } from 'react-bootstrap';
import moment from 'moment';

const NotificationModal = (props: INotificationModalProps) => (
  <Modal
    className="melo-model melo-model-sm"
    show={props.notificationModal}
    onHide={() => {
      props.showNotificationModal(IntialNotification);
    }}
  >
    <header>
      <h3>Notification Details</h3>
      <div className="btn-close">
        <i
          className="melo-icon melo-icon-cancel"
          onClick={() => {
            props.showNotificationModal(IntialNotification);
          }}
        />
      </div>
    </header>
    <div className="notification-model-cnt">
      {props.notificationDetail.vehicleDetails.id ? (
        <figure>
          <div className="fig-icon">
            <i className={`melo-icon melo-icon-${props.notificationDetail.vehicleDetails.type.toLowerCase()}`} />
          </div>
          <figcaption>
            <h6>
              {props.notificationDetail.vehicleDetails.vehicle_no}
              <span>
                {moment(props.notificationDetail.timestamp).isValid()
                  ? `(${moment(props.notificationDetail.timestamp).fromNow()})`
                  : ''}
              </span>
            </h6>
            <p>{props.notificationDetail.title}</p>
          </figcaption>
        </figure>
      ) : (
        ''
      )}
    </div>
    {/* <footer>
      <button className="btn btn-grey">Cancel</button>
      <button className="btn btn-blue">Save</button>
    </footer> */}
  </Modal>
);

export default NotificationModal;
