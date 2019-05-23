import * as React from 'react';
import { Map, TileLayer, Marker, FeatureGroup, Tooltip } from 'react-leaflet';
import withDashboard from '../Dashboard/withDashboardHOC';
import type { IVehcileDetailProps, IVehcileDetailStates, IStoppageDetail, IStoppagePoint } from './types';

class VehicleDetail extends React.Component<IVehcileDetailProps, IVehcileDetailStates> {
  constructor(props: IVehcileDetailProps) {
    super(props);

    this.state = {
      startPosition: true,
      endPosition: true,
      stoppagePoint: false,
      tabVehicleKey: 1,

      removalDecorator: {},

      pathLongLat: [[0, 0]],
      stoppage: {},
      graphPath: [[0, 0]],
      graphPathReduce: [[0, 0]],
      timeStampArray: [],
      vehicleDetailTabToggle: false,
      vehicleId: ''
    };
  }

    render() {

    const sideBarWidth = this.props.hamburger ? 54 : 200;
    const height = window.innerHeight - 50 - 0;
    const width = window.innerWidth - sideBarWidth;
    const position = [27.7172, 85.324];
    const zoom = 9;
    const maxZoom = 18;


    return (
      <React.Fragment>


          <Map ref="meloMaps" center={position} zoom={zoom} maxZoom={maxZoom} style={{ height, width }}>
            <TileLayer
              attribution='Map from <a href="https://maps.google.com">Google Maps</a>'
              url="https://mt{s}.google.com/vt/lyrs=m&amp;x={x}&amp;y={y}&amp;z={z}"
              subdomains="0123"
            />

          </Map>

      </React.Fragment>
    );
  }
}

export default withDashboard(VehicleDetail);
