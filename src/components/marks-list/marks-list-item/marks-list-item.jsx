import { findLast } from 'lodash';
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
            canSendMarkerName: false,
        };
        this.newMarkerNameValue = '';
    }

    componentWillUpdate(nextProps, nextState) {
        if (this.state.editMarkerName && !nextState.editMarkerName && nextState.canSendMarkerName)
            this.props.setNewMarkerName(this.props.markerIndex, this.newMarkerNameValue);
    }

    getNewMarkerName() {
        const lastNewMarkerName = findLast(
            this.props.getNewMarkerName,
            { markerIndex: this.props.markerIndex }
            );

        if (lastNewMarkerName)
            return lastNewMarkerName.newMarkerName;
    }

    setNewMarkerName(newMarkerName) {
        this.newMarkerNameValue = newMarkerName;
    }

    switchEditMarkerName(canSendMarkerName = true) {
        this.setState({
            ...this.state,
            editMarkerName: !this.state.editMarkerName,
            canSendMarkerName,
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
                    lastNewMarkerName={::this.getNewMarkerName}
                    markerCoords={this.props.markerCoords}
                    markerName={this.props.markerName}
                    markerNumber={this.props.markerNumber}
                    setNewMarkerName={::this.setNewMarkerName}
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
