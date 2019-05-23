import * as React from 'react';
import type { IHomeProps, IHomeStates } from './types';
import withHome from './withHomeHOC';
import Header from '../components/NavBar';
import SideBar from '../components/SideBar';
import UserInfo from '../components/SideBar/UserInfo';
import ProfileBar from '../components/NavBar/ProfileBar';
import VehicleStatusBar from '../components/NavBar/VehicleStatusBar';
import SiteLogo from '../components/NavBar/SiteLogo';
import NavSearchBar from '../components/NavBar/NavSearchBar';


class Home extends React.Component<IHomeProps, IHomeStates> {
  constructor(props: IHomeProps) {
    super(props);

    this.state = {
      hamburger: false
    };
  }

  toggleHamburger = () => {
    this.setState({
      hamburger: !this.state.hamburger
    });
  };

  render() {
    const { userInfo, vehicleTrack, notification, fetchNotification, location } = this.props;
    const { hamburger } = this.state;
    const homeRole = 'main-content';

    return (
      <div className={hamburger ? 'collapse-sidebar' : ''}>
        <Header
          siteLogo={<SiteLogo hamburger={hamburger} />}
          profileBar={<ProfileBar userInfo={userInfo} />}
          notificationBar={
            ''
          }
          vehicleStatusBar={<VehicleStatusBar vehicleTrack={vehicleTrack} />}
          toggleHamburger={this.toggleHamburger}
          navSearch={
            location.pathname.includes('dashboard') ? (
              <NavSearchBar vehicleTrack={vehicleTrack} fetchVehiclePath={this.props.fetchVehiclePath} />
            ) : (
              ''
            )
          }
        />
        <div className="layout">
          <SideBar userInfo={<UserInfo userInfo={userInfo} />} />
          <main role={homeRole} className="layout-right">
            {this.props.render(this.state.hamburger)}
          </main>
        </div>
      </div>
    );
  }
}

export default withHome(Home);
