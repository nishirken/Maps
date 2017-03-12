import StyledMarkerNameField from './styled-name-field';
import StyledTitle from './styled-title';
import StyledInput from './styled-input';

export default class MarkerNameField extends PureComponent {
    static propTypes = {
        completeCreateMarker: PropTypes.func,
        cancelCreateMarker: PropTypes.func,
        x: PropTypes.number.isRequired,
        y: PropTypes.number.isRequired,
    }

    constructor(props) {
        super(props);
        this.state = {
            completeCreateMarkerWithoutName: false,
        };
    }

    componentDidMount() {
        this.textInput.focus();
    }

    getMarkerName(element) {
        if (element.keyCode === 13)
            this.props.completeCreateMarker(element.target.value);

        if (element.keyCode === 27)
            this.props.cancelCreateMarker();
    }

    render() {
        if (this.state.completeCreateMarkerWithoutName)
            return null;

        return (
            <StyledMarkerNameField
                x={this.props.x}
                y={this.props.y}
            >
                <StyledTitle>
                    Please enter a name for your marker
                </StyledTitle>
                <StyledInput
                    innerRef={input => {
                        this.textInput = input;
                    }}
                    type="text"
                    onKeyDown={::this.getMarkerName}
                />
            </StyledMarkerNameField>
        );
    }
}
