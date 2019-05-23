import * as React from 'react';

import withDashboard from './withDashboardHOC';

import type { IDashboardProps, IDashboardStates } from './types';
import { VehicleTypeIntial } from '../../services/dashboard/state';

class Dashboard extends React.Component<IDashboardProps, IDashboardStates> {
  constructor(props: IDashboardProps) {
    super(props);

    this.state = {
      vehicleFilterListShow: false,
      startPosition: true,
      endPosition: true,
      stoppagePoint: false,
      vehicleFilterList: [],
      vehicleZoomFilter: [],

      vehicleMarkerReference: {}
    };
  }

  async componentDidMount() {
    await this.props.fetchVehicleLocations();
    const { vehicleTrack } = this.props;

    for (const vehicle of vehicleTrack.totalVehicle) {
      this.props.fetchGeoAddressVehicle(vehicle, vehicleTrack.vehicleLocation[vehicle].position);
    }
    this.totalVehicleFilterList();

    // const vehicle = vehicleTrack.totalVehicle[0];
    // await this.props.fetchGeoAddressVehicle(vehicle, vehicleTrack.vehicleLocation[vehicle].position);
  }

  toogleVehicleList = () => {
    this.setState({
      vehicleFilterListShow: !this.state.vehicleFilterListShow
    });
  };

  changeStartMarkerStatus = () => {
    this.setState({
      startPosition: !this.state.startPosition
    });
  };

  changeEndMarkerStatus = () => {
    this.setState({
      endPosition: !this.state.endPosition
    });
  };

  changeStoppageMarkerStatus = () => {
    this.setState({
      stoppagePoint: !this.state.stoppagePoint
    });
  };

  totalVehicleFilterList = () => {
    const { vehicleTrack } = this.props;
    this.setState({
      vehicleZoomFilter: vehicleTrack.totalVehicle,
      vehicleFilterList: vehicleTrack.totalVehicle
    });
  };

  vehicleFilterFunction = vehicleFilterList => {
    this.setState({
      vehicleFilterList
    });
  };

  vehicleZoomFilterFunction = vehicleZoomFilter => {
    this.setState({
      vehicleZoomFilter
    });
  };

  vehicleTypeFunction = (vehicleZoomFilter, vehicleTrack) => {
    let vehicleType = { ...VehicleTypeIntial };
    vehicleZoomFilter.forEach(vehicle => {
      Object.keys(vehicleType).forEach(type => {
        if (vehicleTrack.vehicleLocation[vehicle].type === type && !vehicleType[type].ids.includes(vehicle)) {
          vehicleType[type] = {
            ids: [...vehicleType[type].ids, vehicle],
            count: vehicleType[type].count + 1
          };
        }
      });
    });
    return vehicleType;
  };

  vehicleFilterReferenceFunction = (vehicleMapReference: any) => {
    this.setState({
      vehicleMarkerReference: vehicleMapReference
    });
  };

  render() {
    const { vehicleTrack, fetchVehiclePath, history, hamburger, setting } = this.props;
    const {
      startPosition,
      endPosition,
      stoppagePoint,
      vehicleFilterList,
      vehicleFilterListShow,
      vehicleZoomFilter
    } = this.state;

    const mapSection = 'map-section';

    let vehicleType = this.vehicleTypeFunction(vehicleZoomFilter, vehicleTrack);

    return (
      <React.Fragment>
        <section role={mapSection}>
          <div className="vehicle-info">
            <header>{vehicleZoomFilter.length} Vehicle</header>
            <ul>
              {Object.keys(vehicleType).map((type, i) => {
                if (vehicleType[type].count) {
                  return (
                    <li key={i}>
                      <i className={`melo-icon melo-icon-${type.toLowerCase()}`} /> {vehicleType[type].count} {type}
                    </li>
                  );
                } else {
                  return '';
                }
              })}


            </ul>
            <footer>
              <button onClick={this.toogleVehicleList} className="btn-view-list">
                {vehicleFilterListShow ? 'Hide List' : 'View List'}
              </button>
            </footer>
          </div>

          Dashboard
        </section>
      </React.Fragment>
    );
  }
}

export default withDashboard(Dashboard);
