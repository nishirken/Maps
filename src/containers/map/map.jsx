import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { Map } from 'Components';
import { createMarker } from 'Actions';

@connect(
    state => ({
        markers: state.getMarkers,
    }),
    dispatch => ({
        _createMarker: bindActionCreators(createMarker, dispatch),
    })
)
export default class MapContainer extends PureComponent {
    static propTypes = {
        _createMarker: PropTypes.func,
        markers: PropTypes.arrayOf(PropTypes.object),
    }

    createMarker(coords, name) {
        this.props._createMarker(coords, name);
    }

    render() {
        return (
            <Map
                createMarker={::this.createMarker}
                markers={this.props.markers}
            />
        );
    }
}
