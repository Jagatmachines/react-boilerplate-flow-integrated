import * as React from 'react';
import type { IUserInfoProps } from './types';

const UserInfo = (props: IUserInfoProps) => {
  const { userInfo } = props;
  return (
    <div className="user-info">
      <figure>
        <div className="fig-img">{/* <img src="" /> */}</div>
        <figcaption>
          <h5>Jagatjyoti G Tuladhar</h5>
          <div className="user-type">Software Engineer</div>
        </figcaption>
      </figure>
    </div>
  );
};

export default UserInfo;
