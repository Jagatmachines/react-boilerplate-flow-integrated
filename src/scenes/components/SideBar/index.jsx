import * as React from 'react';
import type { ISideBarProps } from './types';
// import UserInfo from './UserInfo';
import SideItems from './SideItems';

const SideBar = (props: ISideBarProps) => {
  const sidebar = 'sidebar-left';
  const sideNavigation = 'site-navigation';
  return (
    <React.Fragment>
      <aside role={sidebar} className="layout-left">
        <div className="fixed">
          {props.userInfo}
          <nav role={sideNavigation}>
            <SideItems />
          </nav>
        </div>
      </aside>
    </React.Fragment>
  );
};

export default SideBar;
