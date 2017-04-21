import React, { PureComponent, PropTypes } from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { Map } from 'immutable';

import StyledList from './styled-list';
import StyledListWrapper from './styled-list-wrapper';
import { ListItem, StyledSearchField } from 'Components';

export default class List extends PureComponent {
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

    marksListItemsRender() {
        const markers = this.props.getMarkerCoords;

//        if (this.props.getMarkerDeleteIndexes.length > 0)
//            markersCoords = this.processingMarkerDeleteIndexes(markersCoords);
//
//        if (this.props.getMarkerSearchIndexes.length > 0)
//            markersCoords = this.processingMarkerSearchIndexes(markersCoords);

        return markers.map((marker, key) => {
            let current = false;
            const coords = marker.get('coords');
            const index = marker.get('index');
            const currentMarker = this.props.getCurrentMarker;

            if (currentMarker.get('index') === index) current = true;

            return (
                <ListItem
                    current={current}
                    getEditMarkerNameCondition={this.props.getEditMarkerNameCondition}
                    key={marker.get('index')}
                    markerCoords={Map({
                        lat: coords.get('lat'),
                        lng: coords.get('lng'),
                    })}
                    markerIndex={index}
                    markerName={marker.get('name')}
                    markerNumber={key + 1}
                    markerObjects={this.processingObjects(index, this.props.getObjects)}
                    mouseEnter={this.state.mouseEnter}
                    objectDeleteIndexes={
                        this.processingObjectDeleteIndexes(
                            index,
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

    constructor(props) {
        super(props);
        this.state = {
            mouseEnter: false,
        };
    }

    static propTypes = {
        getCurrentMarker: PropTypes.shape({
            index: PropTypes.number,
            coords: PropTypes.objectOf(PropTypes.number),
        }),
        getEditMarkerNameCondition: PropTypes.bool,
        getMarkerCoords: PropTypes.arrayOf(PropTypes.shape({
            index: PropTypes.number,
            coords: PropTypes.objectOf(PropTypes.number),
        })).isRequired,
        getMarkerDeleteIndexes: PropTypes.arrayOf(PropTypes.number),
        getMarkerName: PropTypes.arrayOf(PropTypes.shape({
            index: PropTypes.number,
            name: PropTypes.string,
        })).isRequired,
        getMarkerSearchIndexes: PropTypes.arrayOf(PropTypes.number),
        getObjectDeleteIndexes: PropTypes.arrayOf(PropTypes.shape({
            markerIndex: PropTypes.number,
            index: PropTypes.number,
        })),
        getObjects: PropTypes.arrayOf(
            PropTypes.shape({
                markerIndex: PropTypes.number,
                object: PropTypes.shape({
                    index: PropTypes.number,
                    name: PropTypes.string,
                }),
            })
        ),
        markers: ImmutablePropTypes.listOf(ImmutablePropTypes.mapContains({
            index: PropTypes.number,
            name: PropTypes.string,
            coords: ImmutablePropTypes.mapContains({
                lat: PropTypes.number,
                lng: PropTypes.number,
            }),
            objects: ImmutablePropTypes.listOf(ImmutablePropTypes.mapContains({
                index: PropTypes.number,
                name: PropTypes.string,
            })),
        })),
        setCurrentMarker: PropTypes.func,
        setEditMarkerNameCondition: PropTypes.func,
        setMarkerDeleteIndex: PropTypes.func,
        setMarkerName: PropTypes.func,
        setMarkerSearchIndexes: PropTypes.func,
        setObject: PropTypes.func,
        setObjectDeleteIndex: PropTypes.func,
    }
}
