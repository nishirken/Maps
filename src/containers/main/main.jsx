import { Component } from 'react';

import { Main } from "Components";
import MapContainer from "../map/map";
import ListsBlockContainer from "../lists-block/lists-block";

export default class MainContainer extends Component {
  render() {
    return (
      <Main>
        <MapContainer/>
        <ListsBlockContainer/>
      </Main>
    )
  }
}
