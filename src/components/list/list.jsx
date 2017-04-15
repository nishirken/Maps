import React, { PureComponent, PropTypes } from 'react';
import { findLast, includes } from 'lodash';

import StyledList from './styled-list';
import StyledListWrapper from './styled-list-wrapper';
import { ListItem, StyledSearchField } from 'Components';

export default class List extends PureComponent {
    static propTypes = {
        getMarkerCoords: PropTypes.arrayOf(PropTypes.shape({
            index: PropTypes.number,
            coords: PropTypes.objectOf(PropTypes.number),
        })).isRequired,
        getMarkerName: PropTypes.arrayOf(PropTypes.shape({
            index: PropTypes.number,
            name: PropTypes.string,
        })).isRequired,
        getCurrentMarker: PropTypes.shape({
            index: PropTypes.number,
            coords: PropTypes.objectOf(PropTypes.number),
        }),
        getMarkerDeleteIndexes: PropTypes.arrayOf(PropTypes.number),
        getMarkerSearchIndexes: PropTypes.arrayOf(PropTypes.number),
        getEditMarkerNameCondition: PropTypes.bool,
        getObjects: PropTypes.arrayOf(
            PropTypes.shape({
                markerIndex: PropTypes.number,
                object: PropTypes.shape({
                    index: PropTypes.number,
                    name: PropTypes.string,
                }),
            })
        ),
        getObjectDeleteIndexes: PropTypes.arrayOf(PropTypes.shape({
            markerIndex: PropTypes.number,
            index: PropTypes.number,
        })),
        setMarkerName: PropTypes.func,
        setCurrentMarker: PropTypes.func,
        setMarkerSearchIndexes: PropTypes.func,
        setMarkerDeleteIndex: PropTypes.func,
        setEditMarkerNameCondition: PropTypes.func,
        setObject: PropTypes.func,
        setObjectDeleteIndex: PropTypes.func,
    }

    constructor(props) {
        super(props);
        this.state = {
            mouseEnter: false,
        };
    }

    mouseEnterHandler() {
        this.setState({
            mouseEnter: true,
        });
        clearTimeout(this.mouseLeaveTimeOut);
    }

    mouseLeaveHandler() {
        this.mouseLeaveTimeOut = setTimeout(() => {
            this.setState({
                mouseEnter: false,
            });
        }, 2000);
    }

    markerSearchIndex(e) {
        const value = e.target.value;

        const searchIndexes = [];

        const search = (searchValue, ...args) => {
            for (const argument in args)
                if (Object.prototype.hasOwnProperty.call(args, argument))
                    return String(args[argument]).toLowerCase().indexOf(searchValue) !== -1;

            return -1;
        };

        if (value)
            this.props.getMarkerName.forEach(marker => {
                if (search(value, marker.name)) searchIndexes.push(marker.index);
            });

        this.props.setMarkerSearchIndexes(searchIndexes);
    }

    processingMarkerDeleteIndexes(coordsArray) {
        return coordsArray.filter(marker =>
            !includes(this.props.getMarkerDeleteIndexes, marker.index));
    }

    processingMarkerSearchIndexes(coordsArray) {
        return coordsArray.filter(marker =>
            includes(this.props.getMarkerSearchIndexes, marker.index));
    }

    processingObjects(markerIndex, objects) {
        if (objects && objects.length > 0)
            return objects
                .filter(object => {
                    if (object.markerIndex === markerIndex)
                        return true;

                    return false;
                })
                .map(object => object.object);

        return objects;
    }

    processingObjectDeleteIndexes(markerIndex, objectDeleteIndexes) {
        if (objectDeleteIndexes && objectDeleteIndexes.length > 0)
            return objectDeleteIndexes
                .filter(object => object.markerIndex === markerIndex)
                .map(object => object.index);

        return objectDeleteIndexes;
    }

    marksListItemsRender() {
        let markersCoords = this.props.getMarkerCoords;

        if (this.props.getMarkerDeleteIndexes.length > 0)
            markersCoords = this.processingMarkerDeleteIndexes(markersCoords);

        if (this.props.getMarkerSearchIndexes.length > 0)
            markersCoords = this.processingMarkerSearchIndexes(markersCoords);

        return markersCoords.map((marker, key) => {
            let current = false;

            if (this.props.getCurrentMarker) {
                const currentMarker = this.props.getCurrentMarker;

                if (currentMarker.get('index') === marker.index) current = true;
            }

            return (
                <ListItem
                    current={current}
                    getEditMarkerNameCondition={this.props.getEditMarkerNameCondition}
                    key={marker.index}
                    markerCoords={{
                        lat: marker.coords.lat,
                        lng: marker.coords.lng,
                    }}
                    markerIndex={marker.index}
                    markerName={findLast(this.props.getMarkerName, { index: marker.index }).name}
                    markerNumber={key + 1}
                    markerObjects={this.processingObjects(marker.index, this.props.getObjects)}
                    mouseEnter={this.state.mouseEnter}
                    objectDeleteIndexes={
                        this.processingObjectDeleteIndexes(
                            marker.index,
                            this.props.getObjectDeleteIndexes
                        )
                    }
                    setCurrentMarker={this.props.setCurrentMarker}
                    setDeleteMarkerIndex={this.props.setMarkerDeleteIndex}
                    setEditMarkerNameCondition={this.props.setEditMarkerNameCondition}
                    setMarkerName={this.props.setMarkerName}
                    setObject={this.props.setObject}
                    setObjectDeleteIndex={this.props.setObjectDeleteIndex}
                />
            );
        });
    }

    render() {
        return (
            <StyledListWrapper
                mouseEnter={this.state.mouseEnter}
                onMouseEnter={::this.mouseEnterHandler}
                onMouseLeave={::this.mouseLeaveHandler}
            >
                <StyledList>
                    <StyledSearchField
                        placeholder="search"
                        type="text"
                        onChange={::this.markerSearchIndex}
                    />
                    {this.marksListItemsRender()}
                </StyledList>
            </StyledListWrapper>
        );
    }
}
