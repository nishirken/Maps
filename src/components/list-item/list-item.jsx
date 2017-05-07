import React, { PureComponent, PropTypes } from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';

import StyledListItem from './styled-list-item';
import { ListItemText, Buttons, Objects } from 'Components';

export default class ListItem extends PureComponent {
    render() {
        return (
            <StyledListItem
                current={this.props.current}
                onClick={::this.listItemOnclickHandler}
            >
                {this.renderObjectsList()}
                <ListItemText
                    editMarkerName={this.state.editMarkerName}
                    markerCoords={this.props.markerCoords}
                    markerName={this.props.markerName}
                    markerNumber={this.props.markerNumber}
                    setNewMarkerName={::this.setNewMarkerName}
                    switchEditMarkerName={::this.switchEditMarkerName}
                />
                <Buttons
                    editMarkerName={this.state.editMarkerName}
                    markerIndex={this.props.markerIndex}
                    setDeleteMarkerIndex={this.props.setDeleteMarkerIndex}
                    switchEditMarkerName={::this.switchEditMarkerName}
                />
            </StyledListItem>
        );
    }

    /**
     * Render objects list for each list-item, if it is current
     * @return {XML} react component or {null}
     */
    renderObjectsList() {
        if (this.props.current)
            return (
                <Objects
                    markerIndex={this.props.markerIndex}
                    markerObjects={this.props.markerObjects}
                    mouseEnter={this.props.mouseEnter}
                    objectDeleteIndexes={this.props.objectDeleteIndexes}
                    sendToApi={this.props.sendToApi}
                    setObject={this.props.setObject}
                    setObjectDeleteIndex={this.props.setObjectDeleteIndex}
                />
            );

        return null;
    }

    /**
     * Set state with new marker name after editing it
     * @param value {string} value from editing input
     */
    setNewMarkerName(value) {
        this.newMarkerName = value;
    }

    /**
     * Set state.
     * Switch edit marker name condition. And need because it's two different places,
     * where we can cancel edit of marker name:
     * 1) By input (push esc on the keyboard) and don't save edited value
     * 2) By input (push enter on the keyboard), clicking on the edit button and save new marker name
     * @param condition {bool}
     */
    switchEditMarkerName(condition) {
        this.setState(prevState => {
            return {
                editMarkerName: !prevState.editMarkerName,
            };
        });
        this.canSendMarkerName = condition;
    }

    /**
     * Set current marker after clicking on the appropriate list item
     */
    listItemOnclickHandler() {
        this.props.setCurrentMarker(this.props.markerIndex, this.props.markerCoords);
    }

    constructor(props) {
        super(props);
        this.state = {
            editMarkerName: false,
        };
        this.newMarkerName = null;
        this.canSendMarkerName = false;
    }

    componentDidUpdate() {
        if (this.canSendMarkerName && this.newMarkerName) {
            if (this.newMarkerName !== this.props.markerName)
                this.props.setMarkerName(this.props.markerIndex, this.newMarkerName);

            this.newMarkerName = null;
            this.canSendMarkerName = false;
        }
    }

    static propTypes = {
        current: PropTypes.bool,
        markerCoords: ImmutablePropTypes.mapContains({
            lat: PropTypes.number,
            lng: PropTypes.number,
        }),
        markerIndex: PropTypes.number,
        markerName: PropTypes.string,
        markerNumber: PropTypes.number,
        markerObjects: ImmutablePropTypes.listOf(
            ImmutablePropTypes.mapContains({
                index: PropTypes.number,
                name: PropTypes.string,
            }),
        ),
        mouseEnter: PropTypes.bool,
        objectDeleteIndexes: ImmutablePropTypes.listOf(PropTypes.number),
        sendToApi: PropTypes.func,
        setCurrentMarker: PropTypes.func,
        setDeleteMarkerIndex: PropTypes.func,
        setMarkerName: PropTypes.func,
        setObject: PropTypes.func,
        setObjectDeleteIndex: PropTypes.func,
    };
}
