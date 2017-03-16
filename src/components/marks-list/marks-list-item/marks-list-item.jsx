import StyledMarksListItem from './styled-marks-list-item';
import Text from './text/text';
import Buttons from '../buttons/buttons';

export default class MarksListItem extends PureComponent {
    static propTypes = {
        markerName: PropTypes.string,
        markerCoords: PropTypes.shape({
            lat: PropTypes.number,
            lng: PropTypes.number,
        }),
        markerIndex: PropTypes.number,
        markerNumber: PropTypes.number,
        current: PropTypes.bool,
        markerChoice: PropTypes.func,
        deleteMarker: PropTypes.func,
        getNewMarkerName: PropTypes.arrayOf(PropTypes.shape({
            markerIndex: PropTypes.number,
            newMarkerName: PropTypes.string,
        })),
        setNewMarkerName: PropTypes.func,
    }

    constructor(props) {
        super(props);
        this.state = {
            editMarkerName: false,
        };
    }

    switchEditMarkerName() {
        this.setState({
            editMarkerName: !this.state.editMarkerName,
        });
    }

    render() {
        return (
            <StyledMarksListItem
                current={this.props.current}
                onClick={this.props.markerChoice.bind(this, this.props.markerIndex, this.props.markerCoords)}
            >
                <Text
                    editMarkerName={this.state.editMarkerName}
                    getNewMarkerName={this.props.getNewMarkerName}
                    markerCoords={this.props.markerCoords}
                    markerIndex={this.props.markerIndex}
                    markerName={this.props.markerName}
                    markerNumber={this.props.markerNumber}
                    setNewMarkerName={this.props.setNewMarkerName}
                    switchEditMarkerName={::this.switchEditMarkerName}
                />
                <Buttons
                    deleteMarker={this.props.deleteMarker}
                    markerIndex={this.props.markerIndex}
                    setNewMarkerName={this.props.setNewMarkerName}
                    switchEditMarkerName={::this.switchEditMarkerName}
                />
            </StyledMarksListItem>
        );
    }
}
