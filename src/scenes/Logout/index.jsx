import * as React from 'react';
import type { ILogoutProps } from './types';

import { endLiveTracking } from '../../utils/socket';

class Logout extends React.Component<ILogoutProps> {
  componentWillMount() {
    localStorage.clear();
    endLiveTracking();
    this.props.history.push('/login');
  }

  render() {
    return '';
  }
}

export default Logout;
