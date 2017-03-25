import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { Map } from 'Components';
import { setMarkerIndex, setMarkerCoords, setMarkerName, setCurrentMarker } from 'Actions';

@connect(
    state => ({
        getMarkerIndex: state.getMarkerIndex,
        getMarkerCoords: state.getMarkerCoords,
        getMarkerName: state.getMarkerName,
        getCurrentMarker: state.getCurrentMarker,
        getMarkerSearchIndexes: state.getMarkerSearchIndexes,
        getMarkerDeleteIndexes: state.getMarkerDeleteIndexes,
    }),
    dispatch => ({
        setMarkerIndex: bindActionCreators(setMarkerIndex, dispatch),
        setMarkerCoords: bindActionCreators(setMarkerCoords, dispatch),
        setMarkerName: bindActionCreators(setMarkerName, dispatch),
        setCurrentMarker: bindActionCreators(setCurrentMarker, dispatch),
    })
)
export default class MapContainer extends PureComponent {
    static propTypes = {
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
    }

    render() {
        return (
            <Map
                getCurrentMarker={this.props.getCurrentMarker}
                getMarkerCoords={this.props.getMarkerCoords}
                getMarkerDeleteIndexes={this.props.getMarkerDeleteIndexes}
                getMarkerIndex={this.props.getMarkerIndex}
                getMarkerSearchIndexes={this.props.getMarkerSearchIndexes}
                setCurrentMarker={this.props.setCurrentMarker}
                setMarkerCoords={this.props.setMarkerCoords}
                setMarkerIndex={this.props.setMarkerIndex}
                setMarkerName={this.props.setMarkerName}
            />
        );
    }
}
