import { map } from 'lodash';
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
        markers: PropTypes.arrayOf(PropTypes.object),
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
    }

    getMarkerName(name) {
        this.setState({
            ...this.state,
            markerInit: false,
        });

        this.props.createMarker(this.state.coords, name);
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
        return map(this.props.markers, (markerPayload, key) =>
            <Marker
                key={key}
                lat={markerPayload.coords.lat}
                lng={markerPayload.coords.lng}
            />
        );
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
                    defaultCenter={this.props.defaultSettings.center}
                    defaultZoom={this.props.defaultSettings.zoom}
                    options={this.props.options}
                    onClick={::this.getMarkerCoords}
                >
                    {this.markersRender()}
                </GoogleMapReact>
            </StyledMap>
        );
    }
}
