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

    componentDidMount() {
        this.textInput.focus();
    }

    static propTypes = {
        cancelCreateMarker: PropTypes.func,
        completeCreateMarker: PropTypes.func,
        x: PropTypes.number.isRequired,
        y: PropTypes.number.isRequired,
    }
}
