import * as React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

// import App from './App';
import Loading from './components/Loading';
// import Authenticaiton from './Authentication';
import Logout from './Logout';
import Home from './Home';
// import Dashboard from './Dashboard';
// import VehicleDetail from './VehicleDetail';
// import Setting from './Setting';

const Authenticaiton = React.lazy(() => import('./Authentication'));
const Dashboard = React.lazy(() => import('./Dashboard'));
const VehicleDetail = React.lazy(() => import('./VehicleDetail'));

const MainRoutes = () => (
  <Router>
    <React.Suspense fallback={<Loading />}>
      <Switch>
        <Route exact path="/login" component={Authenticaiton} />
        <Route exact path="/logout" component={Logout} />
        <Home
          render={hamburger => (
            <Switch>
              <Route exact path="/dashboard" render={() => <Dashboard hamburger={hamburger} />} />
              <Route exact path="/vehicle/:vehicleId" render={() => <VehicleDetail hamburger={hamburger} />} />
              <Redirect strict from="/" to="/dashboard" />
            </Switch>
          )}
        />
        <Redirect strict from="*" to="/404" />
      </Switch>
    </React.Suspense>
  </Router>
);

export default MainRoutes;
