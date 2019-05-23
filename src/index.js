import React from 'react';
import ReactDOM from 'react-dom';

import 'noty/lib/noty.css';
import 'noty/lib/themes/mint.css';
import 'leaflet-elevation-v3/leaflet-elevation.css';
import 'leaflet-timedimension/dist/leaflet.timedimension.control.min.css';
import 'react-dates/lib/css/_datepicker.css';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import 'leaflet/dist/leaflet.css';
import 'leaflet-elevation-v3/leaflet-elevation.css';
import 'leaflet-timedimension/dist/leaflet.timedimension.control.min.css';
import 'react-dates/lib/css/_datepicker.css';
import './assets/styles/bootstrap/bootstrap.min.scss';
import './assets/styles/custom/styles.min.scss';

import * as serviceWorker from './serviceWorker';

import { Provider } from 'react-redux';
import Store from './store';
import MainRoutes from './scenes/routes';

const root: ?Element = document.getElementById('root');

if (root != null) {
  ReactDOM.render(
    <Provider store={Store}>
      <MainRoutes />
    </Provider>,
    root
  );
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
