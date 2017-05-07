import React, { PureComponent, PropTypes } from 'react';

import StyledMarkerNameField from './styled-name-field';
import StyledTitle from './styled-title';
import StyledInput from './styled-input';

export default class MarkerNameField extends PureComponent {
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

    /**
     * Get marker name from input, when creating the marker
     * @param e {object} native js event object
     */
    getMarkerName(e) {
        if (e.keyCode === 13) {
            const value = e.target.value || 'Your marker';

            this.props.completeCreateMarker(value);
        }

        if (e.keyCode === 27)
            this.props.cancelCreateMarker();
    }

    constructor(props) {
        super(props);
        this.state = {
            completeCreateMarkerWithoutName: false,
        };
    }

    /**
     * Auto focus in the text input, when started to create a marker
     */
    componentDidMount() {
        if (this.textInput)
            this.textInput.focus();
    }

    static propTypes = {
        cancelCreateMarker: PropTypes.func,
        completeCreateMarker: PropTypes.func,
        x: PropTypes.number.isRequired,
        y: PropTypes.number.isRequired,
    }
}
