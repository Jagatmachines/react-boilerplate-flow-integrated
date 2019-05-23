import * as React from 'react';
import type { IWithAuthenticationProps } from './types';
import type { RootState } from '../../../store/reducers';
import { connect } from 'react-redux';

const withAuthentication = (WrappedComponent: any) => {
  class withAuthenticationComponent extends React.Component<IWithAuthenticationProps> {
    render() {
      return <WrappedComponent {...this.props} />;
    }
  }

  const mapStateToProps = ({  }: RootState) => {
    return {};
  };

  const mapDispatchToProps = dispatch => ({
    // fetchVehicleLocations: () => dispatch(DashboardAction.fetchVehicleLocations()),
  });

  return connect(
    mapStateToProps,
    mapDispatchToProps
  )(withAuthenticationComponent);
};

export default withAuthentication;
