import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { markerChoice, filterMarkers, deleteMarker, setNewMarkerName } from 'Actions';
import { MarksList } from 'Components';

@connect(
    state => ({
        markers: state.getMarkers,
        currentMarkerPayload: state.getCurrentMarker,
        filterMarkers: state.getMarkerSearchIndexes,
        getDeleteMarkerIndexes: state.getDeleteMarkerIndexes,
        getNewMarkerName: state.getNewMarkerName,
    }),
    dispatch => ({
        markerChoice: bindActionCreators(markerChoice, dispatch),
        getMarkerSearchIndexes: bindActionCreators(filterMarkers, dispatch),
        deleteMarker: bindActionCreators(deleteMarker, dispatch),
        setNewMarkerName: bindActionCreators(setNewMarkerName, dispatch),
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
        markerChoice: PropTypes.func,
        getMarkerSearchIndexes: PropTypes.func,
        deleteMarker: PropTypes.func,
        getDeleteMarkerIndexes: PropTypes.arrayOf(PropTypes.number),
        filterMarkers: PropTypes.arrayOf(PropTypes.number),
        getNewMarkerName: PropTypes.arrayOf(PropTypes.shape({
            markerIndex: PropTypes.number,
            newMarkerName: PropTypes.string,
        })),
        setNewMarkerName: PropTypes.func,
    }

    render() {
        return (
            <MarksList
                currentMarkerPayload={this.props.currentMarkerPayload}
                deleteMarker={this.props.deleteMarker}
                filterMarkers={this.props.filterMarkers}
                getDeleteMarkerIndexes={this.props.getDeleteMarkerIndexes}
                getMarkerSearchIndexes={this.props.getMarkerSearchIndexes}
                getNewMarkerName={this.props.getNewMarkerName}
                markerChoice={this.props.markerChoice}
                markers={this.props.markers}
                setNewMarkerName={this.props.setNewMarkerName}
            />
        );
    }
}
