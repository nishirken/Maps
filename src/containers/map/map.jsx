import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { Map } from 'Components';
import { createMarker, markerChoice } from 'Actions';

@connect(
    state => ({
        currentMarkerPayload: state.getCurrentMarker,
        markers: state.getMarkers,
        filterMarkers: state.getMarkerSearchIndexes,
        getDeleteMarkerIndexes: state.getDeleteMarkerIndexes,
    }),
    dispatch => ({
        createMarker: bindActionCreators(createMarker, dispatch),
        markerChoice: bindActionCreators(markerChoice, dispatch),
    })
)
export default class MapContainer extends PureComponent {
    static propTypes = {
        createMarker: PropTypes.func,
        markerChoice: PropTypes.func,
        currentMarkerPayload: PropTypes.shape({
            markerIndex: PropTypes.number,
            coords: PropTypes.objectOf(PropTypes.number),
        }),
        markers: PropTypes.arrayOf(PropTypes.object),
        filterMarkers: PropTypes.arrayOf(PropTypes.number),
        getDeleteMarkerIndexes: PropTypes.arrayOf(PropTypes.number),
    }

    render() {
        return (
            <Map
                createMarker={this.props.createMarker}
                currentMarkerPayload={this.props.currentMarkerPayload}
                filterMarkers={this.props.filterMarkers}
                getDeleteMarkerIndexes={this.props.getDeleteMarkerIndexes}
                markerChoice={this.props.markerChoice}
                markers={this.props.markers}
            />
        );
    }
}
