import * as React from 'react';
import type { IWithDashboardProps } from './types';
import type { RootState } from '../../../store/reducers';
import { connect } from 'react-redux';
import * as DashboardAction from '../../../services/dashboard/actions';
import { withRouter } from 'react-router-dom';

const withDashboard = (WrappedComponent: any) => {
  class withDashboardComponent extends React.Component<IWithDashboardProps> {
    async componentWillMount() {
      await this.props.fetchVehicleLocations();
      await this.props.fetchStartStopVehicle(this.props.vehicleTrack.totalVehicle);

      /* newSubscribeLiveTracking(data => {
        this.props.updateVehicleLastLocation(data);
      }); */
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  }

  const mapStateToProps = ({ vehicleTrack, setting }: RootState) => {
    return {
      vehicleTrack,
      setting
    };
  };

  const mapDispatchToProps = dispatch => ({
    fetchVehicleLocations: () => dispatch(DashboardAction.fetchVehicleLocations()),
    fetchStartStopVehicle: vehicleList => dispatch(DashboardAction.fetchStartStopVehicle(vehicleList)),
    fetchVehiclePath: (vehicleNumber, filterDate) =>
      dispatch(DashboardAction.fetchVehiclePath(vehicleNumber, filterDate)),
    fetchGeoAddressVehicle: (vehicleId, coordinates) =>
      dispatch(DashboardAction.fetchGeoAddressVehicle(vehicleId, coordinates)),
    updateVehicleLastLocation: individualVehicleDetail =>
      dispatch(DashboardAction.updateVehicleLastLocation(individualVehicleDetail))
  });

  return connect(
    mapStateToProps,
    mapDispatchToProps
  )(withRouter(withDashboardComponent));
};

export default withDashboard;
