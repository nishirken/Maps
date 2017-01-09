import React, { Component, PropTypes } from 'react';
import GoogleMap from 'google-map-react';

import './map.styl';

export default class Map extends Component {
  constructor(props) {
    super(props);
    this.defaultProps = {
      center: {lat: 59.938043, lng: 30.337157},
      zoom: 9,
      greatPlaceCoords: {lat: 59.724465, lng: 30.080121}
    };
  }

  render() {
    return (
        <section className="map">
          <GoogleMap
              defaultCenter={this.props.center}
              defaultZoom={this.props.zoom}>
          </GoogleMap>
        </section>
    );
  }
}