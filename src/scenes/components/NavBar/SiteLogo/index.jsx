import * as React from 'react';
import type { ISiteLogoProps } from './types';

const SiteLogo = (props: ISiteLogoProps) => {
  return (
    <div className="layout-left">
      <div className="site-logo">
        <a href="#">
          <img src={''} alt="" />
        </a>
      </div>
    </div>
  );
};

export default SiteLogo;
