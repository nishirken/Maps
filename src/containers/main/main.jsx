import React, { Component, PropTypes } from 'react';
import CSSModules from 'react-css-modules';

import MapContainer from '../lists-block/lists-block';
import ListsBlockContainer from '../map/map';

import styles from '../../common-styles/index.styl'

@CSSModules(styles)
export default class Main extends Component {
  render() {
    return (
      <main styleName="main">
        <MapContainer/>
        <ListsBlockContainer/>
      </main>
    )
  }
}