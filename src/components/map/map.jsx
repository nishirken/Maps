import React, { Component, PropTypes } from 'react';
import GoogleMap from 'google-map-react';
import CSSModules from 'react-css-modules';

import styles from './map.styl';

@CSSModules(styles)
export default class Map extends Component {
  static propTypes = {
    apiSettings: PropTypes.shape({
      apiKey: PropTypes.string.isRequired,
      lang: PropTypes.string.isRequired
    }),
    defaultSettings: PropTypes.shape({
      center: PropTypes.object.isRequired,
      zoom: PropTypes.number.isRequired
    }),
    options: PropTypes.shape({
      styles: PropTypes.arrayOf(PropTypes.object)
    })
  }

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section styleName="map">
        <GoogleMap
          bootstrapURLKeys={this.props.apiSettings}
          defaultCenter={this.props.defaultSettings.center}
          defaultZoom={this.props.defaultSettings.zoom}
          options={this.props.options}
        />
      </section>
    )
  }
}
