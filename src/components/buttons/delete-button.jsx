import React, { PureComponent, PropTypes } from 'react';

import StyledButtonSvg from './styled-button-svg';

export default class DeleteButton extends PureComponent {
    static propTypes = {
        markerIndex: PropTypes.number,
        setDeleteMarkerIndex: PropTypes.func,
    }

    deleteMarker(e) {
        e.stopPropagation();
        this.props.setDeleteMarkerIndex(this.props.markerIndex);
    }

    render() {
        return (
            <StyledButtonSvg
                viewBox="0 0 32 32"
                onClick={::this.deleteMarker}
            >
                <path
                    d="M6 32h20l2-22h-24zM20 4v-4h-8v4h-10v6l2-2h24l2
                    2v-6h-10zM18 4h-4v-2h4v2z"
                />
            </StyledButtonSvg>
        );
    }
}
