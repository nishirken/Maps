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
     * @returns {react component} objects list
     */
    renderObjectsList() {
        if (this.props.current)
            return (
                <Objects
                    markerIndex={this.props.markerIndex}
                    markerObjects={this.props.markerObjects}
                    mouseEnter={this.props.mouseEnter}
                    objectDeleteIndexes={this.props.objectDeleteIndexes}
                    setObject={this.props.setObject}
                    setObjectDeleteIndex={this.props.setObjectDeleteIndex}
                />
            );

        return null;
    }

    setNewMarkerName(value) {
        this.setState(prevState => {
            return {
                ...prevState,
                newMarkerName: value,
            };
        });
    }

    switchEditMarkerName(condition) {
        this.setState(prevState => {
            return {
                editMarkerName: !prevState.editMarkerName,
                canSendMarkerName: condition,
            };
        });
    }

    listItemOnclickHandler() {
        this.props.setCurrentMarker(this.props.markerIndex, this.props.markerCoords);
    }

    constructor(props) {
        super(props);
        this.state = {
            editMarkerName: false,
            canSendMarkerName: false,
            newMarkerName: null,
        };
    }

    componentWillUpdate(nextProps, nextState) {
        if (nextState.canSendMarkerName)
            this.setState(prevState => {
                return {
                    ...prevState,
                    canSendMarkerName: false,
                };
            });
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.canSendMarkerName && this.state.newMarkerName)
            if (this.state.newMarkerName !== this.props.markerName)
                this.props.setMarkerName(this.props.markerIndex, this.state.newMarkerName);
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
        setCurrentMarker: PropTypes.func,
        setDeleteMarkerIndex: PropTypes.func,
        setMarkerName: PropTypes.func,
        setObject: PropTypes.func,
        setObjectDeleteIndex: PropTypes.func,
    };
}
