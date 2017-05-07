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

    /**
     * Renders marks list items
     * @return {XML} react component
     */
    marksListItemsRender() {
        let markers = this.props.getMarkerCoords;

        if (this.props.getMarkerDeleteIndexes.size)
            markers = this.processingMarkerDeleteIndexes(markers);

        if (this.props.getMarkerSearchIndexes.size)
            markers = this.processingMarkerSearchNames(markers);

        return markers.map((marker, key) => {
            const coords = marker.get('coords');
            const index = marker.get('index');

            return (
                <ListItem
                    current={this.setCurrent(index)}
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

    /**
     * Calculate current list item or not
     * @param {number} markerIndex
     * @return {boolean}
     */
    setCurrent(markerIndex) {
        if (this.props.getCurrentMarker)
            return this.props.getCurrentMarker.get('index') === markerIndex;

        return false;
    }

    /**
     * Get current marker name
     * @param markerNames {immutable List}
     * @param markerIndex {number}
     * @return markerName {string}
     */
    proceessingMarkerName(markerNames, markerIndex) {
        const name = markerNames.findLast(value => value.get('index') === markerIndex);

        return name.get('name');
    }

    /**
     * Filtering marker coords by delete indexes
     * @param coordsArray {immutable List}
     * @return coordsArray {immutable List}
     */
    processingMarkerDeleteIndexes(coordsArray) {
        return coordsArray.filter(marker =>
            !this.props.getMarkerDeleteIndexes.includes(marker.get('index')));
    }

    /**
     * Filtering marker coords by search indexes
     * @param coordsArray {immutable List}
     * @return coordsArray {immutable List}
     */
    processingMarkerSearchNames(coordsArray) {
        return coordsArray.filter(marker =>
            this.props.getMarkerSearchIndexes.includes(marker.get('index')));
    }

    /**
     * Filtering marker objects by marker index
     * @param markerIndex {number}
     * @param objects {immutable List}
     * @return objects {immutable List}
     */
    processingObjects(markerIndex, objects) {
        return objects
            .filter(object => object.get('markerIndex') === markerIndex)
            .map(object => object.get('object'));
    }

    /**
     * Filtering marker object delete indexes immutable list by marker index
     * @param markerIndex {number}
     * @param objectDeleteIndexes {immutable List}
     * @return objectDeleteIndexes {immutable List}
     */
    processingObjectDeleteIndexes(markerIndex, objectDeleteIndexes) {
        return objectDeleteIndexes
            .filter(object => object.get('markerIndex') === markerIndex)
            .map(object => object.get('index'));
    }

    /**
     * SetState and clear timeout
     */
    mouseEnterHandler() {
        this.setState({
            mouseEnter: true,
        });
        clearTimeout(this.mouseLeaveTimeOut);
    }

    /**
     * Set timeout after mouse leave, for setState after 2s
     */
    mouseLeaveHandler() {
        this.mouseLeaveTimeOut = setTimeout(() => {
            this.setState({
                mouseEnter: false,
            });
        }, 2000);
    }

    /**
     * Searching values from string by search value
     * @param searchValue {string}
     * @param searchTarget {string}
     * @return {bool}
     */
    search(searchValue, searchTarget) {
        return String(searchTarget).toLowerCase().indexOf(String(searchValue).toLowerCase()) !== -1;
    }

    /**
     * Search marker index by input value
     * @param e {object} native js event object
     */
    markerSearchIndex(e) {
        const value = e.target.value;
        let markerSearchIndexes = [];

        if (value)
            markerSearchIndexes =
                this.props.getMarkerName.filter(marker =>
                    this.search(value, marker.get('name')))
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
