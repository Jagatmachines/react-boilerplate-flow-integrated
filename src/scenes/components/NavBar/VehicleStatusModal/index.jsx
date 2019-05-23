import * as React from 'react';
import type { IVehicleStatusModalProps } from './types';
import { Modal } from 'react-bootstrap';

const VehicleStatusModal = (props: IVehicleStatusModalProps) => (
  <Modal className="melo-model melo-model-sm" show={props.vehicleStatusModal} onHide={props.showVehicleStatusModal}>
    <header>
      <h3>Vechile Offline Status</h3>
      <div className="btn-close">
        <i className="melo-icon melo-icon-cancel" onClick={props.showVehicleStatusModal} />
      </div>
    </header>
    <div className="notification-model-cnt">
      <figure>
        <div className="fig-icon">
          <i className={`melo-icon melo-icon-truck1`} />
        </div>
        <figcaption>
          <ul>
            {props.vehicleTrack.offlineVehicle.map(vehicleId => (
              <li key={vehicleId}>
                <h6 onClick={props.showVehicleStatusModal}>
                  {props.vehicleTrack.vehicleLocation[vehicleId].vehicle_no}
                </h6>
              </li>
            ))}
          </ul>
        </figcaption>
      </figure>
    </div>
  </Modal>
);

export default VehicleStatusModal;
