import React, { PropTypes } from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import GoogleMapReact from 'google-map-react';

import StyledMap from './styled-map';
import { Marker, MarkerNameField } from 'Components';
import Filter from 'Components/filter/filter';
import { MAP_SETTINGS } from 'Constants';

export default class Map extends Filter {
    render() {
        return (
            <StyledMap>
                {this.markerNameFieldRender()}
                <GoogleMapReact
                    bootstrapURLKeys={{
                        key: this.props.apiSettings.key,
                        language: this.props.apiSettings.lang,
                    }}
                    center={this.centerMap(this.props.getCurrentMarker)}
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

    /**
     * Render markers on the map
     * @return {object} immutable List of react components
     */
    markersRender() {
        let markers = this.props.getMarkerCoords;

        if (this.props.getMarkerDeleteIndexes.size)
            markers = this.processingMarkerDeleteIndexes(markers, this.props.getMarkerDeleteIndexes);

        if (this.props.getMarkerSearchIndexes.size)
            markers = this.processingMarkerSearchNames(markers, this.props.getMarkerSearchIndexes);

        return markers.map(marker => {
            const coords = marker.get('coords');
            const index = marker.get('index');
            let center = false;

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

    /**
     * Gives coords object from current marker Map
     * @param {object} currentMarker - immutable Map
     * @return {object} of coords or {boolean}
     */
    centerMap(currentMarker) {
        if (currentMarker.get('index') !== null)
            return {
                lat: currentMarker.get('coords').get('lat'),
                lng: currentMarker.get('coords').get('lng'),
            };

        return false;
    }

    /**
     * Set state with coords object
     * Executed when clicking on the map
     * @param {object} coords - arise when clicking on the map
     * @return {undefined}
     */
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

    /**
     * Set state for hide MarkerNameField
     * Send info of marker index, coords and name, when completed create it
     * Executed on enter button from keyboard
     * @param {string} markerName - name of marker from MarkerNameField
     * @return {undefined}
     */
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

    /**
     * Set state for hide MarkerNameField, without saving an info of the marker
     * Executed on esc button from keyboard
     * @return {undefined}
     */
    cancelCreateMarker() {
        this.setState({
            ...this.state,
            markerInit: false,
        });
    }

    /**
     * Select current marker, executed when clicking on the marker
     * Get params from GoogleMapReact component
     * @param {number} index - marker index
     * @param {object} coords - info of the marker
     * @return {undefined}
     */
    markerChoice(index, coords) {
        const { lat, lng } = coords;

        this.props.setCurrentMarker(Number(index), { lat, lng });
    }

    /**
     * Render name field for entering a marker name, executed with clicking on the map
     * @return {XML} react component MarkerNameField or {null}
     */
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
        options: {
            styles: MAP_SETTINGS.OPTIONS.get('styles'),
        },
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
        getMarkerCoords: ImmutablePropTypes.listOf(ImmutablePropTypes.mapContains({
            index: PropTypes.number,
            coords: ImmutablePropTypes.mapOf(PropTypes.number),
        })).isRequired,
        getMarkerDeleteIndexes: ImmutablePropTypes.listOf(PropTypes.number),
        getMarkerIndex: PropTypes.number.isRequired,
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
