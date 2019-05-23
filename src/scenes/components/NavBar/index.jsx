import * as React from 'react';
import type { INavBarProps } from './types';
// import SiteLogo from '../../../assets/images/site-logo.svg';

const NavBar = (props: INavBarProps) => {
  const siteHeader = 'site-header';

  return (
    <React.Fragment>
      <header role={siteHeader} className="layout">
        {props.siteLogo}
        <div className="layout-right">
          <div className="container-fluid">
            <div className="row">
              <div className="col-5">
                <div className="left-nav">
                  <ul>
                    <li>
                      <div className="ham-icon" onClick={props.toggleHamburger}>
                        <span />
                        <span />
                        <span />
                      </div>
                    </li>
                    <li>{props.navSearch}</li>
                  </ul>
                </div>
              </div>
              <div className="col-7 text-right">
                <div className="right-nav">
                  <ul>
                    <li>{props.vehicleStatusBar}</li>
                    <li>{props.notificationBar}</li>
                    <li>{props.profileBar}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </React.Fragment>
  );
};

export default NavBar;
