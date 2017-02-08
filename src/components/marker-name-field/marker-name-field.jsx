import StyledMarkerNameField from './styled-name-field';
import StyledTitle from './styled-title';
import StyledInput from './styled-input';

export default class MarkerNameField extends PureComponent {
    static propTypes = {
        getMarkerName: PropTypes.func,
        x: PropTypes.number.isRequired,
        y: PropTypes.number.isRequired,
    }

    componentDidMount() {
        this.textInput.focus();
    }

    getMarkerName(element) {
        if (element.keyCode === 13 || element.keyCode === 27)
            this.props.getMarkerName(element.target.value);
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
                    onKeyDown={::this.getMarkerName}
                />
            </StyledMarkerNameField>
        );
    }
}
