import { Component, PropTypes } from 'react';
import { Map } from 'Components';
import { MAP_SETTINGS } from 'Constants';

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
