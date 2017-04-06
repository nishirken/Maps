import React, { PureComponent, PropTypes } from 'react';

import StyledButtons from './styled-buttons';
import DeleteButton from './delete-button';
import EditButton from './edit-button';

export default class Buttons extends PureComponent {
    static propTypes = {
        markerIndex: PropTypes.number,
        setDeleteMarkerIndex: PropTypes.func,
        switchEditMarkerName: PropTypes.func,
        editMarkerName: PropTypes.bool,
    }

    render() {
        return (
            <StyledButtons>
                <EditButton
                    editMarkerName={this.props.editMarkerName}
                    switchEditMarkerName={this.props.switchEditMarkerName}
                />
                <DeleteButton
                    markerIndex={this.props.markerIndex}
                    setDeleteMarkerIndex={this.props.setDeleteMarkerIndex}
                />
            </StyledButtons>
        );
    }
}
