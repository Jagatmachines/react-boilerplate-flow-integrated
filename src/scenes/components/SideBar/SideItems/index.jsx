import * as React from 'react';
import { Link, withRouter } from 'react-router-dom';
import type { ISideBarItemProps } from './types';

const menus = [
  {
    id: 1,
    title: 'Dashboard',
    url: '/dashboard',
    class: '',
    icon: 'dashboard'
  },
  {
    id: 2,
    title: 'Next Page',
    url: '/vehicle/1',
    class: '',
    icon: 'statistics'
  }
];

const SideItems = (props: ISideBarItemProps) => {
  return (
    <ul>
      {menus.map((menu, key) => {
        return (
          <li key={key} className={`${props.location.pathname === menu.url ? 'active' : ''}  ${menu.class}`}>
            <Link to={`${menu.url}`}>
              <i className={`melo-icon melo-icon-${menu.icon}`} /> <span>{menu.title}</span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default withRouter(SideItems);
