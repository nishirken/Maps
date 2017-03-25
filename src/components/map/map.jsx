import { includes } from 'lodash';
import GoogleMapReact from 'google-map-react';

import StyledMap from './styled-map';
import { Marker, MarkerNameField } from 'Components';
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
        getMarkerIndex: PropTypes.number.isRequired,
        getMarkerCoords: PropTypes.arrayOf(PropTypes.shape({
            index: PropTypes.number,
            coords: PropTypes.objectOf(PropTypes.number),
        })).isRequired,
        getCurrentMarker: PropTypes.shape({
            index: PropTypes.number,
            coords: PropTypes.objectOf(PropTypes.number),
        }),
        getMarkerSearchIndexes: PropTypes.arrayOf(PropTypes.number),
        getMarkerDeleteIndexes: PropTypes.arrayOf(PropTypes.number),
        setMarkerIndex: PropTypes.func,
        setMarkerCoords: PropTypes.func,
        setMarkerName: PropTypes.func,
        setCurrentMarker: PropTypes.func,
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

    markersRender() {
        let markersCoords = this.props.getMarkerCoords;

        if (this.props.getMarkerDeleteIndexes && this.props.getMarkerDeleteIndexes.length > 0)
            markersCoords = markersCoords.filter(marker =>
                !includes(this.props.getMarkerDeleteIndexes, marker.index));

        if (this.props.getMarkerSearchIndexes && this.props.getMarkerSearchIndexes.length > 0)
            markersCoords = markersCoords.filter(marker =>
                includes(this.props.getMarkerSearchIndexes, marker.index));

        return markersCoords.map(marker => {
            const coords = marker.coords;
            let center = false;

            if (this.props.getCurrentMarker)
                if (this.props.getCurrentMarker.index === marker.index) center = true;

            return (
                <Marker
                    center={center}
                    key={marker.index}
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
                    center={this.props.getCurrentMarker && this.props.getCurrentMarker.coords}
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
