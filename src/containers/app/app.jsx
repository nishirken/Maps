import React, { PureComponent, PropTypes } from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { connect } from 'react-redux';
import { List } from 'immutable';

import { StyledApp } from 'Components';
import { ListContainer, MapContainer } from 'Containers';

@connect(
    state => ({
        fetchMarkers: state.fetchMarkers,
    }),
)
export default class AppContainer extends PureComponent {
    render() {
        const fetchMarkers = this.props.fetchMarkers;
        const markers = List(fetchMarkers.get('json'));

        return (
            <StyledApp>
                <ListContainer markers={markers} />
                <MapContainer markers={markers} />
            </StyledApp>
        );
    }

    static propTypes = {
        fetchMarkers: ImmutablePropTypes.mapContains({
            status: PropTypes.string,
            json: ImmutablePropTypes.listOf(ImmutablePropTypes.mapContains({
                index: PropTypes.number,
                name: PropTypes.string,
                coords: ImmutablePropTypes.mapContains({
                    lat: PropTypes.number,
                    lng: PropTypes.number,
                }),
                objects: ImmutablePropTypes.listOf(ImmutablePropTypes.mapContains({
                    index: PropTypes.number,
                    name: PropTypes.string,
                })),
            })),
            error: ImmutablePropTypes.map,
        }),
    }
}
