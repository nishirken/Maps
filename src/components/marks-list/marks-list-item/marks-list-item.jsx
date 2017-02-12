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
    }

    render() {
        return (
            <StyledMarksListItem
                current={this.props.current}
                onClick={this.props.markerChoice.bind(this, this.props.markerIndex, this.props.markerCoords)}
            >
                <Text
                    markerCoords={this.props.markerCoords}
                    markerName={this.props.markerName}
                    markerNumber={this.props.markerNumber}
                />
                <Buttons
                    deleteMarker={this.props.deleteMarker}
                    markerIndex={this.props.markerIndex}
                />
            </StyledMarksListItem>
        );
    }
}
