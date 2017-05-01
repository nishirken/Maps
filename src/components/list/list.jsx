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
        let markers = this.props.getMarkerCoords;

        if (this.props.getMarkerDeleteIndexes.size)
            markers = this.processingMarkerDeleteIndexes(markers);

        if (this.props.getMarkerSearchIndexes.size)
            markers = this.processingMarkerSearchNames(markers);

        return markers.map((marker, key) => {
            let current = false;
            const coords = marker.get('coords');
            const index = marker.get('index');

            if (this.props.getCurrentMarker.get('index') === index) current = true;

            return (
                <ListItem
                    current={current}
                    getEditMarkerNameCondition={this.props.getEditMarkerNameCondition}
                    key={index}
                    markerCoords={Map({
                        lat: coords.get('lat'),
                        lng: coords.get('lng'),
                    })}
                    markerIndex={index}
                    markerName={this.proceessingMarkerName(this.props.getMarkerName, index)}
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

    proceessingMarkerName(markerNames, markerIndex) {
        const name = markerNames.findLast(value => value.get('index') === markerIndex);

        return name.get('name');
    }

    processingMarkerDeleteIndexes(coordsArray) {
        return coordsArray.filter(marker =>
            !this.props.getMarkerDeleteIndexes.includes(marker.get('index')));
    }

    processingMarkerSearchNames(coordsArray) {
        return coordsArray.filter(marker =>
            this.props.getMarkerSearchIndexes.includes(marker.get('index')));
    }

    processingObjects(markerIndex, objects) {
        return objects
            .filter(object => object.get('markerIndex') === markerIndex)
            .map(object => object.get('object'));
    }

    processingObjectDeleteIndexes(markerIndex, objectDeleteIndexes) {
        return objectDeleteIndexes
            .filter(object => object.get('markerIndex') === markerIndex)
            .map(object => object.get('index'));
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

        const search = (searchValue, ...args) => {
            for (const argument in args)
                if (Object.prototype.hasOwnProperty.call(args, argument))
                    return String(args[argument]).toLowerCase().indexOf(searchValue) !== -1;

            return false;
        };

        let markerSearchIndexes = [];

        if (value)
            markerSearchIndexes =
                this.props.getMarkerName.filter(marker =>
                    search(value, marker.get('name')))
                    .map(marker => marker.get('index'));

        this.props.setMarkerSearchIndexes(markerSearchIndexes);
    }

    constructor(props) {
        super(props);
        this.state = {
            mouseEnter: false,
        };
    }

    static propTypes = {
        getCurrentMarker: ImmutablePropTypes.mapContains({
            index: PropTypes.number,
            coords: ImmutablePropTypes.mapOf(PropTypes.number),
        }),
        getEditMarkerNameCondition: PropTypes.bool,
        getMarkerCoords: ImmutablePropTypes.listOf(ImmutablePropTypes.mapContains({
            index: PropTypes.number,
            coords: ImmutablePropTypes.mapOf(PropTypes.number),
        })),
        getMarkerDeleteIndexes: ImmutablePropTypes.listOf(PropTypes.number),
        getMarkerName: ImmutablePropTypes.listOf(ImmutablePropTypes.mapContains({
            index: PropTypes.number,
            name: PropTypes.string,
        })),
        getMarkerSearchIndexes: ImmutablePropTypes.listOf(PropTypes.number),
        getObjectDeleteIndexes: ImmutablePropTypes.listOf(ImmutablePropTypes.mapContains({
            markerIndex: PropTypes.number,
            index: PropTypes.number,
        })),
        getObjects: ImmutablePropTypes.listOf(
            ImmutablePropTypes.mapContains({
                markerIndex: PropTypes.number,
                object: ImmutablePropTypes.mapContains({
                    index: PropTypes.number,
                    name: PropTypes.string,
                }),
            })
        ),
        setCurrentMarker: PropTypes.func,
        setEditMarkerNameCondition: PropTypes.func,
        setMarkerDeleteIndex: PropTypes.func,
        setMarkerName: PropTypes.func,
        setMarkerSearchIndexes: PropTypes.func,
        setObject: PropTypes.func,
        setObjectDeleteIndex: PropTypes.func,
    }
}
