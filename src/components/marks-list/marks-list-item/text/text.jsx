import StyledMarkerName from './styled-marker-name';
import StyledMarkerNameEditField from './styled-marker-name-edit-field';
import StyledMarkerCoords from './styled-marker-coords';

export default class Text extends PureComponent {
    static propTypes = {
        markerName: PropTypes.string,
        markerCoords: PropTypes.shape({
            lat: PropTypes.number,
            lng: PropTypes.number,
        }),
        markerNumber: PropTypes.number,
        switchEditMarkerName: PropTypes.func,
        editMarkerName: PropTypes.bool,
        lastNewMarkerName: PropTypes.func,
        setNewMarkerName: PropTypes.func,
    }

    constructor(props) {
        super(props);
        this.state = {
            markerName: this.props.lastNewMarkerName() || this.props.markerName || 'Your marker',
        };
    }

    componentDidUpdate() {
        if (this.props.editMarkerName && this.input)
            this.input.focus();
    }

    onChangeMarkerEditName(e) {
        if (e.target.value !== this.props.markerName)
            this.props.setNewMarkerName(e.target.value);

        if (e.keyCode === 13)
            this.props.switchEditMarkerName();

        if (e.keyCode === 27)
            this.props.switchEditMarkerName(false);
    }

    renderMarkerName() {
        if (this.props.editMarkerName)
            return (
                <StyledMarkerNameEditField
                    defaultValue={this.state.markerName}
                    innerRef={input => {
                        this.input = input;
                    }}
                    type="text"
                    onKeyDown={::this.onChangeMarkerEditName}
                />
            );

        return (
            <StyledMarkerName>
                {this.state.markerName}
            </StyledMarkerName>
        );
    }

    render() {
        return (
            <div>
                {this.renderMarkerName()}
                <StyledMarkerCoords>
                    coords: {this.props.markerCoords.lat.toFixed(2)},
                    &nbsp;{this.props.markerCoords.lng.toFixed(2)} <br />
                    №: {this.props.markerNumber}
                </StyledMarkerCoords>
            </div>
        );
    }
}
