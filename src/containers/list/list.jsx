import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import {
    setMarkerName,
    setCurrentMarker,
    setMarkerSearchIndexes,
    setMarkerDeleteIndex,
    setObject,
    setObjectDeleteIndex,
} from 'Actions';
import { List } from 'Components';

@connect(
    state => ({
        getMarkerCoords: state.getMarkerCoords,
        getMarkerName: state.getMarkerName,
        getCurrentMarker: state.getCurrentMarker,
        getMarkerSearchIndexes: state.getMarkerSearchIndexes,
        getMarkerDeleteIndexes: state.getMarkerDeleteIndexes,
        getObjects: state.getObjects,
        getObjectDeleteIndexes: state.getObjectDeleteIndexes,
    }),
    dispatch => ({
        setMarkerName: bindActionCreators(setMarkerName, dispatch),
        setCurrentMarker: bindActionCreators(setCurrentMarker, dispatch),
        setMarkerSearchIndexes: bindActionCreators(setMarkerSearchIndexes, dispatch),
        setMarkerDeleteIndex: bindActionCreators(setMarkerDeleteIndex, dispatch),
        setObject: bindActionCreators(setObject, dispatch),
        setObjectDeleteIndex: bindActionCreators(setObjectDeleteIndex, dispatch),
    })
)
export default class MarksListContainer extends PureComponent {
    static propTypes = {
        getMarkerCoords: PropTypes.arrayOf(PropTypes.shape({
            index: PropTypes.number,
            coords: PropTypes.objectOf(PropTypes.number),
        })).isRequired,
        getMarkerName: PropTypes.arrayOf(PropTypes.shape({
            index: PropTypes.number,
            name: PropTypes.string,
        })).isRequired,
        getCurrentMarker: PropTypes.shape({
            index: PropTypes.number,
            coords: PropTypes.objectOf(PropTypes.number),
        }),
        getMarkerDeleteIndexes: PropTypes.arrayOf(PropTypes.number),
        getMarkerSearchIndexes: PropTypes.arrayOf(PropTypes.number),
        getObjects: PropTypes.arrayOf(
            PropTypes.shape({
                markerIndex: PropTypes.number,
                object: PropTypes.shape({
                    index: PropTypes.number,
                    name: PropTypes.string,
                }),
            })
        ),
        getObjectDeleteIndexes: PropTypes.arrayOf(PropTypes.shape({
            markerIndex: PropTypes.number,
            index: PropTypes.number,
        })),
        setMarkerName: PropTypes.func,
        setCurrentMarker: PropTypes.func,
        setMarkerSearchIndexes: PropTypes.func,
        setMarkerDeleteIndex: PropTypes.func,
        setObject: PropTypes.func,
        setObjectDeleteIndex: PropTypes.func,
    }
    render() {
        return (
            <List
                getCurrentMarker={this.props.getCurrentMarker}
                getMarkerCoords={this.props.getMarkerCoords}
                getMarkerDeleteIndexes={this.props.getMarkerDeleteIndexes}
                getMarkerName={this.props.getMarkerName}
                getMarkerSearchIndexes={this.props.getMarkerSearchIndexes}
                getObjectDeleteIndexes={this.props.getObjectDeleteIndexes}
                getObjects={this.props.getObjects}
                setCurrentMarker={this.props.setCurrentMarker}
                setMarkerDeleteIndex={this.props.setMarkerDeleteIndex}
                setMarkerName={this.props.setMarkerName}
                setMarkerSearchIndexes={this.props.setMarkerSearchIndexes}
                setObject={this.props.setObject}
                setObjectDeleteIndex={this.props.setObjectDeleteIndex}
            />
        );
    }
}
