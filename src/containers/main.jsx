import { Component } from 'react';

import MapContainer from './lists-block/lists-block';
import ListsBlockContainer from './map/map';

export default class Main extends Component {
  render() {
    return (
      <main className="main">
        <MapContainer/>
        <ListsBlockContainer/>
      </main>
    )
  }
}