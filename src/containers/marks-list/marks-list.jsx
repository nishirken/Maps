import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { markerChoice } from 'Actions';
import { MarksList } from 'Components';

@connect(
    state => ({
        markers: state.getMarkers,
        currentMarkerPayload: state.getCurrentMarker,
    }),
    dispatch => ({
        _markerChoice: bindActionCreators(markerChoice, dispatch),
    })
)
export default class MarksListContainer extends PureComponent {
    static propTypes = {
        markers: PropTypes.arrayOf(PropTypes.shape({
            payload: PropTypes.shape({
                coords: PropTypes.shape({
                    lat: PropTypes.number,
                    lng: PropTypes.number,
                    x: PropTypes.number,
                    y: PropTypes.number,
                }),
                name: PropTypes.string,
            }),
        })).isRequired,
        currentMarkerPayload: PropTypes.shape({
            markerIndex: PropTypes.number,
            coords: PropTypes.objectOf(PropTypes.number),
        }),
        _markerChoice: PropTypes.func,
    }

    markerChoice(markerIndex, coords) {
        this.props._markerChoice(markerIndex, coords);
    }

    render() {
        return (
            <MarksList
                currentMarkerPayload={this.props.currentMarkerPayload}
                markerChoice={::this.markerChoice}
                markers={this.props.markers}
            />
        );
    }
}
