import React, { PureComponent, PropTypes } from 'react';

import StyledObjectsItem from './styled-objects-item';
import StyledObejectDeleteButton from './styled-object-delete-button';

export default class ObjectsItem extends PureComponent {
    render() {
        return (
            <StyledObjectsItem>
                <StyledObejectDeleteButton
                    viewBox="0 0 32 32"
                    onClick={::this.deleteHandler}
                >
                    <path
                        d="M6 32h20l2-22h-24zM20 4v-4h-8v4h-10v6l2-2h24l2
                            2v-6h-10zM18 4h-4v-2h4v2z"
                    />
                </StyledObejectDeleteButton>
                {this.props.number}. {this.props.name}
            </StyledObjectsItem>
        );
    }

    /**
     * OnClick handler for set object delete indexes
     * @param {object} e - native js event object
     * @return {undefined}
     */
    deleteHandler(e) {
        e.stopPropagation();
        this.props.setObjectDeleteIndex(this.props.markerIndex, this.props.index);
    }

    static propTypes = {
        index: PropTypes.number,
        markerIndex: PropTypes.number,
        name: PropTypes.string,
        number: PropTypes.number,
        setObjectDeleteIndex: PropTypes.func,
    }
}
