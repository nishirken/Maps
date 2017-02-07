import StyledMarksListItem from './styled-marks-list-item';
import Text from './text/text';
import Buttons from './buttons/buttons';

export default class MarksListItem extends PureComponent {
    static propTypes = {
        markerName: PropTypes.string,
        markerCoords: PropTypes.shape({
            lat: PropTypes.number,
            lng: PropTypes.number,
        }),
        markerOrdinal: PropTypes.number,
    }

    render() {
        return (
            <StyledMarksListItem >
                <Text
                    markerCoords={this.props.markerCoords}
                    markerName={this.props.markerName}
                    markerOrdinal={this.props.markerOrdinal}
                />
                <Buttons />
            </StyledMarksListItem>
        );
    }
}
