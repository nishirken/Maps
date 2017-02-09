import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { Map } from 'Components';
import { createMarker, markerChoice } from 'Actions';

@connect(
    state => ({
        currentMarkerPayload: state.getCurrentMarker,
        markers: state.getMarkers,
    }),
    dispatch => ({
        _createMarker: bindActionCreators(createMarker, dispatch),
        _markerChoice: bindActionCreators(markerChoice, dispatch),
    })
)
export default class MapContainer extends PureComponent {
    static propTypes = {
        _createMarker: PropTypes.func,
        _markerChoice: PropTypes.func,
        currentMarkerPayload: PropTypes.shape({
            markerIndex: PropTypes.number,
            coords: PropTypes.objectOf(PropTypes.number),
        }),
        markers: PropTypes.arrayOf(PropTypes.object),
    }

    createMarker(coords, name) {
        this.props._createMarker(coords, name);
    }

    markerChoice(markerIndex, coords) {
        this.props._markerChoice(markerIndex, coords);
    }

    render() {
        return (
            <Map
                createMarker={::this.createMarker}
                currentMarkerPayload={this.props.currentMarkerPayload}
                markerChoice={::this.markerChoice}
                markers={this.props.markers}
            />
        );
    }
}
