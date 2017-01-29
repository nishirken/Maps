import GoogleMap from 'google-map-react';

import { Map } from 'Components';
import { MAP_SETTINGS } from 'Constants';

export class MapContainer extends PureComponent {
    static propTypes = {
        apiSettings: PropTypes.shape({
            key: PropTypes.string.isRequired,
            lang: PropTypes.string.isRequired,
        }),
        defaultSettings: PropTypes.shape({
            center: PropTypes.object.isRequired,
            zoom: PropTypes.number.isRequired,
        }),
        options: PropTypes.shape({
            styles: PropTypes.arrayOf(PropTypes.object),
        }),
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

    render() {
        return (
            <Map>
                <GoogleMap
                    bootstrapURLKeys={{
                        key: this.props.apiSettings.key,
                        language: this.props.apiSettings.lang,
                    }}
                    defaultCenter={this.props.defaultSettings.center}
                    defaultZoom={this.props.defaultSettings.zoom}
                    options={this.props.options}
                />
            </Map>
        );
    }
}
