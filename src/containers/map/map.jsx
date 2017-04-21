import React, { PureComponent, PropTypes } from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { Map } from 'Components';
import { setMarkerIndex, setMarkerCoords, setMarkerName, setCurrentMarker } from 'Actions';

@connect(
    state => ({
        getMarkerIndex: state.getMarkerIndex,
        getMarkerCoords: state.getMarkerCoords,
        getMarkerName: state.getMarkerName,
        getCurrentMarker: state.getCurrentMarker,
        getMarkerSearchIndexes: state.getMarkerSearchIndexes,
        getMarkerDeleteIndexes: state.getMarkerDeleteIndexes,
    }),
    dispatch => ({
        setMarkerIndex: bindActionCreators(setMarkerIndex, dispatch),
        setMarkerCoords: bindActionCreators(setMarkerCoords, dispatch),
        setMarkerName: bindActionCreators(setMarkerName, dispatch),
        setCurrentMarker: bindActionCreators(setCurrentMarker, dispatch),
    })
)
export default class MapContainer extends PureComponent {
    render() {
        return (
            <Map
                getCurrentMarker={this.props.getCurrentMarker}
                getMarkerCoords={this.props.getMarkerCoords}
                getMarkerDeleteIndexes={this.props.getMarkerDeleteIndexes}
                getMarkerIndex={this.props.getMarkerIndex}
                getMarkerSearchIndexes={this.props.getMarkerSearchIndexes}
                setCurrentMarker={this.props.setCurrentMarker}
                setMarkerCoords={this.props.setMarkerCoords}
                setMarkerIndex={this.props.setMarkerIndex}
                setMarkerName={this.props.setMarkerName}
            />
        );
    }

    static propTypes = {
        getCurrentMarker: ImmutablePropTypes.mapContains({
            index: PropTypes.number,
            coords: ImmutablePropTypes.mapOf(PropTypes.number),
        }),
        getMarkerCoords: ImmutablePropTypes.mapContains(ImmutablePropTypes.mapContains({
            index: PropTypes.number,
            coords: ImmutablePropTypes.mapOf(PropTypes.number),
        })).isRequired,
        getMarkerDeleteIndexes: ImmutablePropTypes.listOf(PropTypes.number),
        getMarkerIndex: ImmutablePropTypes.mapContains({
            index: PropTypes.number.isRequired,
        }),
        getMarkerSearchIndexes: ImmutablePropTypes.listOf(PropTypes.number),
        setCurrentMarker: PropTypes.func,
        setMarkerCoords: PropTypes.func,
        setMarkerIndex: PropTypes.func,
        setMarkerName: PropTypes.func,
    }
}
