import React, { PureComponent, PropTypes } from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';

import StyledMarkerName from './styled-marker-name';
import StyledMarkerNameEditField from './styled-marker-name-edit-field';
import StyledMarkerCoords from './styled-marker-coords';

export default class ListItemText extends PureComponent {
    render() {
        return (
            <div>
                {this.renderMarkerName()}
                <StyledMarkerCoords>
                    coords: {this.props.markerCoords.get('lat').toFixed(2)},
                    &nbsp;{this.props.markerCoords.get('lng').toFixed(2)} <br />
                    №: {this.props.markerNumber}
                </StyledMarkerCoords>
            </div>
        );
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

    componentDidUpdate() {
        if (this.props.editMarkerName && this.input)
            this.input.focus();
    }

    static propTypes = {
        editMarkerName: PropTypes.bool,
        markerCoords: ImmutablePropTypes.mapContains({
            lat: PropTypes.number,
            lng: PropTypes.number,
        }),
        markerName: PropTypes.string,
        markerNumber: PropTypes.number,
        setNewMarkerName: PropTypes.func,
        switchEditMarkerName: PropTypes.func,
    };
}
