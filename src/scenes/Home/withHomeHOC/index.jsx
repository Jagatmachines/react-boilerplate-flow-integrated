import * as React from 'react';
import type { IWithHomeProps, IWithHomeState } from './types';
import type { RootState } from '../../../store/reducers';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as DashboardAction from '../../../services/dashboard/actions';
import { showNotification } from '../../../utils/notification';
// import { getUserInfo } from '../../../utils/storage';

const withHome = (WrappedComponent: any) => {
  class withHomeComponent extends React.Component<IWithHomeProps, IWithHomeState> {
    constructor(props: IWithHomeProps) {
      super(props);

      this.state = {
        isLogin: false
      };
    }

    async componentWillMount() {
      /* await this.props
        .fetchUserInfo()
        .then(() => {
          this.setState({
            isLogin: true
          });
          this.props.fetchVehiclePopOverState();
          this.props.fetchVehicleLocations();
        })
        .catch(() => {
          this.props.history.push('/login');
          // showNotification('Unauthorized', true);
        }); */
        // this.props.history.push('/dashboard');
        this.setState({
          isLogin: true
        });
    }

    render() {
      const { isLogin } = this.state;

      if (isLogin) {
        return <WrappedComponent {...this.props} />;
      } else {
        return '';
      }
    }
  }

  const mapStateToProps = ({ userInfo, vehicleTrack, notification }: RootState) => {
    return {
      userInfo,
      vehicleTrack,
      notification
    };
  };

  const mapDispatchToProps = dispatch => ({
    fetchVehicleLocations: () => dispatch(DashboardAction.fetchVehicleLocations()),
    fetchVehiclePath: (vehicleNumber, filterDate) =>
      dispatch(DashboardAction.fetchVehiclePath(vehicleNumber, filterDate))
  });

  return connect(
    mapStateToProps,
    mapDispatchToProps
  )(withRouter(withHomeComponent));
};

export default withHome;
