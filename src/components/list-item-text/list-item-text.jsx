import StyledMarkerName from './styled-marker-name';
import StyledMarkerNameEditField from './styled-marker-name-edit-field';
import StyledMarkerCoords from './styled-marker-coords';

export default class ListItemText extends PureComponent {
    static propTypes = {
        markerName: PropTypes.string,
        markerCoords: PropTypes.shape({
            lat: PropTypes.number,
            lng: PropTypes.number,
        }),
        markerNumber: PropTypes.number,
        setNewMarkerName: PropTypes.func,
        switchEditMarkerName: PropTypes.func,
        editMarkerName: PropTypes.bool,
    }

    componentDidUpdate() {
        if (this.props.editMarkerName && this.input)
            this.input.focus();
    }

    onKeyDownMarkerName(e) {
        if (e.keyCode === 27)
            this.props.switchEditMarkerName(false);

        if (e.keyCode === 13)
            this.props.switchEditMarkerName(true);
    }

    onChangeMarkerName(e) {
        const value = e.target.value;

        this.props.setNewMarkerName(value);
    }

    renderMarkerName() {
        if (this.props.editMarkerName)
            return (
                <StyledMarkerNameEditField
                    defaultValue={this.props.markerName}
                    innerRef={input => {
                        this.input = input;
                    }}
                    type="text"
                    onChange={::this.onChangeMarkerName}
                    onKeyDown={::this.onKeyDownMarkerName}
                />
            );

        return (
            <StyledMarkerName>
                {this.props.markerName}
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
