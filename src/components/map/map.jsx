import { map, filter, includes } from 'lodash';
import GoogleMapReact from 'google-map-react';

import StyledMap from './styled-map';
import Marker from './marker/marker';
import MarkerNameField from '../marker-name-field/marker-name-field';
import { MAP_SETTINGS } from 'Constants';

export default class Map extends PureComponent {
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
        options: PropTypes.shape({
            styles: PropTypes.arrayOf(PropTypes.object),
        }),
        createMarker: PropTypes.func,
        markerChoice: PropTypes.func,
        currentMarkerPayload: PropTypes.shape({
            markerIndex: PropTypes.number,
            coords: PropTypes.objectOf(PropTypes.number),
        }),
        markers: PropTypes.arrayOf(PropTypes.object),
        filterMarkers: PropTypes.arrayOf(PropTypes.number),
        getDeleteMarkerIndexes: PropTypes.arrayOf(PropTypes.number),
    };

    static defaultProps = {
        apiSettings: {
            key: MAP_SETTINGS.API.key,
            lang: MAP_SETTINGS.API.lang,
        },
        defaultSettings: {
            center: MAP_SETTINGS.SETTINGS.center,
            zoom: MAP_SETTINGS.SETTINGS.zoom,
        },
        options: MAP_SETTINGS.OPTIONS,
    };

    constructor(props) {
        super(props);
        this.state = {
            markerInit: false,
        };
    }

    getMarkerCoords(coords) {
        this.setState({
            ...this.state,
            coords,
            markerInit: !this.state.markerInit,
            x: coords.x,
            y: coords.y,
        });
        this.props.markerChoice(null);
    }

    getMarkerName(name) {
        this.setState({
            ...this.state,
            markerInit: false,
        });

        this.props.createMarker(this.state.coords, name, this.state.markerIndex);
    }

    markerChoice(markerIndex, coords) {
        const { lat, lng } = coords;

        this.props.markerChoice(Number(markerIndex), { lat, lng });
    }

    markerNameFieldRender() {
        if (this.state.markerInit)
            return (
                <MarkerNameField
                    getMarkerName={::this.getMarkerName}
                    x={this.state.x}
                    y={this.state.y}
                />
            );

        return null;
    }

    markersRender() {
        let markers = this.props.markers;

        if (this.props.getDeleteMarkerIndexes)
            markers = filter(markers, (marker, key) => !includes(this.props.getDeleteMarkerIndexes, key));

        if (this.props.filterMarkers.length > 0)
            markers = filter(markers, (marker, key) => {
                return includes(this.props.filterMarkers, key);
            });

        return map(markers, (markerPayload, key) => {
            const coords = markerPayload.coords;
            let center = false;

            if (this.props.currentMarkerPayload.markerIndex === key) center = true;

            return (
                <Marker
                    center={center}
                    key={key}
                    lat={coords.lat}
                    lng={coords.lng}
                />
            );
        });
    }

    render() {
        return (
            <StyledMap>
                {this.markerNameFieldRender()}
                <GoogleMapReact
                    bootstrapURLKeys={{
                        key: this.props.apiSettings.key,
                        language: this.props.apiSettings.lang,
                    }}
                    center={this.props.currentMarkerPayload && this.props.currentMarkerPayload.coords}
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
}
