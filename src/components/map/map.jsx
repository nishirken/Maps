import React, { PureComponent, PropTypes } from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import GoogleMapReact from 'google-map-react';
import { List } from 'immutable';

import StyledMap from './styled-map';
import { Marker, MarkerNameField } from 'Components';
import { MAP_SETTINGS } from 'Constants';
import { sendToApi } from 'Api';

export default class Map extends PureComponent {
    render() {
        const coords = this.props.getMarkerCoords;

        return (
            <StyledMap>
                {this.markerNameFieldRender()}
                <GoogleMapReact
                    bootstrapURLKeys={{
                        key: this.props.apiSettings.key,
                        language: this.props.apiSettings.lang,
                    }}
                    center={
                            {
                                lat: this.props.getMarkerCoords.get('lat'),
                                lng: this.props.getMarkerCoords.get('lng'),
                            }
                    }
                    defaultCenter={this.props.defaultSettings.center}
                    defaultZoom={this.props.defaultSettings.zoom}
                    options={this.props.options}
                    onChildClick={::this.markerChoice}
                    onClick={::this.getMarkerCoords}
                >
                    {this.markersRender()}
                </GoogleMapReact>
            </StyledMap>
        );
    }

    markersRender() {
        const markers = this.props.getMarkerCoords;

//        If (this.props.getMarkerDeleteIndexes && this.props.getMarkerDeleteIndexes.length > 0)
//            markersCoords = markersCoords.filter(marker =>
//                !includes(this.props.getMarkerDeleteIndexes, marker.index));
//
//        if (this.props.getMarkerSearchIndexes && this.props.getMarkerSearchIndexes.length > 0)
//            markersCoords = markersCoords.filter(marker =>
//                includes(this.props.getMarkerSearchIndexes, marker.index));

        return markers.map(marker => {
            const coords = marker.get('coords');
            const index = marker.get('index');
            let center = false;
            console.log(this.props.getCurrentMarker);
            if (this.props.getCurrentMarker.get('index') === index) center = true;

            return (
                <Marker
                    center={center}
                    key={index}
                    lat={coords.get('lat')}
                    lng={coords.get('lng')}
                />
            );
        });
    }

    getMarkerCoords(coords) {
        delete coords.event;

        this.setState({
            ...this.state,
            coords,
            markerInit: !this.state.markerInit,
            x: coords.x,
            y: coords.y,
        });
    }

    completeCreateMarker(markerName) {
        const currentMarkerIndex = this.props.getMarkerIndex + 1;

        this.setState({
            ...this.state,
            markerInit: false,
        });

        this.props.setMarkerIndex(currentMarkerIndex);
        this.props.setMarkerCoords(currentMarkerIndex, this.state.coords);
        this.props.setMarkerName(currentMarkerIndex, markerName);
    }

    cancelCreateMarker() {
        this.setState({
            ...this.state,
            markerInit: false,
        });
    }

    markerChoice(index, coords) {
        const { lat, lng } = coords;

        this.props.setCurrentMarker(Number(index), { lat, lng });
    }

    markerNameFieldRender() {
        if (this.state.markerInit)
            return (
                <MarkerNameField
                    cancelCreateMarker={::this.cancelCreateMarker}
                    completeCreateMarker={::this.completeCreateMarker}
                    x={this.state.x}
                    y={this.state.y}
                />
            );

        return null;
    }

    constructor(props) {
        super(props);
        this.state = {
            markerInit: false,
        };
    }

    static defaultProps = {
        apiSettings: {
            key: MAP_SETTINGS.API.get('key'),
            lang: MAP_SETTINGS.API.get('lang'),
        },
        defaultSettings: {
            center: MAP_SETTINGS.SETTINGS.get('center'),
            zoom: MAP_SETTINGS.SETTINGS.get('zoom'),
        },
        options: MAP_SETTINGS.OPTIONS.first(),
    }

    static propTypes = {
        apiSettings: PropTypes.shape({
            key: PropTypes.string.isRequired,
            lang: PropTypes.string.isRequired,
        }).isRequired,
        defaultSettings: PropTypes.shape({
            center: PropTypes.shape({
                lat: PropTypes.number.isRequired,
                lng: PropTypes.number.isRequired,
            }).isRequired,
            zoom: PropTypes.number.isRequired,
        }),
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
        options: PropTypes.shape({
            styles: PropTypes.arrayOf(PropTypes.object),
        }),
        setCurrentMarker: PropTypes.func,
        setMarkerCoords: PropTypes.func,
        setMarkerIndex: PropTypes.func,
        setMarkerName: PropTypes.func,
    }
}
