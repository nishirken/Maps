import StyledMarkerNameField from './styled-name-field';
import StyledTitle from './styled-title';
import StyledInput from './styled-input';

export default class MarkerNameField extends PureComponent {
    static propTypes = {
        getMarkerName: PropTypes.func,
        x: PropTypes.number.isRequired,
        y: PropTypes.number.isRequired,
    }

    constructor(props) {
        super(props);
        this.state = {
            inputValue: '',
        };
    }

    componentDidMount() {
        this.textInput.focus();
    }

    getMarkerName(element) {
        this.setState({ inputValue: element.target.value });
    }

    markerCreationComplete(key) {
        const value = this.state.inputValue;

        if (key.keyCode === 13 || key.keyCode === 27)
            this.props.getMarkerName(value);
    }

    render() {
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
                    onChange={::this.getMarkerName}
                    onKeyDown={::this.markerCreationComplete}
                />
            </StyledMarkerNameField>
        );
    }
}
