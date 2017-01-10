import React, { PropTypes } from 'react';
import GoogleMap from 'google-map-react';

import './map.styl';

export default function Map(props) {
  return (
    <section className="map">
      <GoogleMap
        bootstrapURLKeys={props.apiSettings}
        defaultCenter={props.defaultSettings.center}
        defaultZoom={props.defaultSettings.zoom}
        options={props.options}
      />
    </section>
  );
}

Map.propTypes = {
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