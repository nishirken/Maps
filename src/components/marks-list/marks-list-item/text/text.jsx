import { find } from 'lodash';
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
        markerIndex: PropTypes.number,
        switchEditMarkerName: PropTypes.func,
        editMarkerName: PropTypes.bool,
        getNewMarkerName: PropTypes.arrayOf(PropTypes.shape({
            markerIndex: PropTypes.number,
            newMarkerName: PropTypes.string,
        })),
        setNewMarkerName: PropTypes.func,
    }

    constructor(props) {
        super(props);
        this.state = {
            markerName: this.props.markerName || 'Your marker',
        };
    }

    componentWillMount() {
        this.updateMarkerName();
    }

    componentWillReceiveProps(nextProps) {
        if (!nextProps.editMarkerName) {
            this.props.setNewMarkerName(this.props.markerIndex, this.state.newMarkerName);
            this.updateMarkerName(nextProps);
        }
    }

    componentDidUpdate() {
        if (this.props.editMarkerName && this.input)
            this.input.focus();
    }

    onKeyDownMarkerName(e) {
        if (e.keyCode === 27 || e.keyCode === 13)
            this.props.switchEditMarkerName();
    }

    onChangeMarkerName(e) {
        if (e.target.value !== this.state.markerName)
            this.setState({
                ...this.state,
                newMarkerName: e.target.value,
            });
    }

    updateMarkerName(props = this.props) {
        const newMarkerNameObject = find(
            props.getNewMarkerName,
            { markerIndex: props.markerIndex }
        );

        if (newMarkerNameObject)
            this.setState({
                ...this.state,
                markerName: newMarkerNameObject.newMarkerName,
            });
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
                    onChange={::this.onChangeMarkerName}
                    onKeyDown={::this.onKeyDownMarkerName}
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
