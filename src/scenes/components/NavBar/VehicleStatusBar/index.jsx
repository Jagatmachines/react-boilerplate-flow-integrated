import * as React from 'react';
import type { IVehicleStatusBarProps, IVehicleStatusBarState } from './types';
import VehicleStatusModal from '../VehicleStatusModal';

class VehicleStatusBar extends React.Component<IVehicleStatusBarProps, IVehicleStatusBarState> {
  constructor(props: IVehicleStatusBarProps) {
    super(props);

    this.state = {
      vehicleStatusModal: false
    };
  }

  showVehicleStatusModal = () => {
    this.setState({
      vehicleStatusModal: !this.state.vehicleStatusModal
    });
  };

  render() {
    const { vehicleStatusModal } = this.state;
    const { vehicleTrack } = this.props;

    return (
      <div className="vehicle-status">
        <div className="vehicle-status-on">
          {vehicleTrack.onlineVehicle.length} Online <i className="melo-icon melo-icon-status" />
        </div>
        <div className="vehicle-status-off" onClick={this.showVehicleStatusModal}>
          {vehicleTrack.offlineVehicle.length} Offline <i className="melo-icon melo-icon-status" />
        </div>

        <VehicleStatusModal
          vehicleStatusModal={vehicleStatusModal}
          showVehicleStatusModal={this.showVehicleStatusModal}
          vehicleTrack={vehicleTrack}
        />
      </div>
    );
  }
}

export default VehicleStatusBar;
