import React, { Component, PropTypes } from 'react';
import { Map } from '../../components';
import { MAP_SETTINGS } from '../../constants';

export default class MapContainer extends Component {
  render() {
    return (
      <Map
        apiSettings={MAP_SETTINGS.API}
        defaultSettings={MAP_SETTINGS.SETTINGS}
        options={MAP_SETTINGS.OPTIONS}
      />
    );
  }
}
