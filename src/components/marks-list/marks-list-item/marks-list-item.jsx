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
        markerIndex: PropTypes.number,
        current: PropTypes.bool,
        markerChoice: PropTypes.func,
    }

    markerChoice(markerIndex) {
        this.props.markerChoice(markerIndex);
    }

    render() {
        return (
            <StyledMarksListItem
                current={this.props.current}
                onClick={this.markerChoice.bind(this, this.props.markerIndex)}
            >
                <Text
                    markerCoords={this.props.markerCoords}
                    markerIndex={this.props.markerIndex}
                    markerName={this.props.markerName}
                />
                <Buttons />
            </StyledMarksListItem>
        );
    }
}
