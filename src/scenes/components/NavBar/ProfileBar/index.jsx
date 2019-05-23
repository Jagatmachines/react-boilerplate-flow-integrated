import * as React from 'react';
import type { IProfileBarProps } from './types';
import { Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ProfileBar = (props: IProfileBarProps) => {
  const { userInfo } = props;
  return (
    <Dropdown className="profile-dropdown">
      <Dropdown.Toggle>
        <div className="dropdown-img">{/* <img src="" alt="" /> */}</div>
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <div className="user-info">
          <figure>
            <div className="fig-img">{/* <img src="" /> */}</div>
            <figcaption>
              {/* <h5>{userInfo.company_name}</h5>
              <div className="user-type">{userInfo.privilege}</div> */}
            </figcaption>
          </figure>
        </div>
        <ul>
          <li className="disabled">
            <a href="#" alt="">
              <i className="melo-icon melo-icon-setting" /> Setting
            </a>
          </li>
          <li>
            <Link to="/logout">
              <i className="melo-icon melo-icon-logout" /> Logout
            </Link>
          </li>
        </ul>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default ProfileBar;
