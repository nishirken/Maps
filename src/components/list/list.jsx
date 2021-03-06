import React, { PropTypes } from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { Map } from 'immutable';

import StyledList from './styled-list';
import StyledListWrapper from './styled-list-wrapper';
import { ListItem, StyledSearchField } from 'Components';
import Filter from 'Components/filter/filter';

export default class List extends Filter {
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
     * @return {object} immutable List of react components
     */
    marksListItemsRender() {
        let markers = this.props.getMarkerCoords;

        if (this.props.getMarkerDeleteIndexes.size)
            markers = this.processingMarkerDeleteIndexes(markers, this.props.getMarkerDeleteIndexes);

        if (this.props.getMarkerSearchIndexes.size)
            markers = this.processingMarkerSearchNames(markers, this.props.getMarkerSearchIndexes);

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
     * @return {boolean} default value of current
     */
    setCurrent(markerIndex) {
        if (this.props.getCurrentMarker)
            return this.props.getCurrentMarker.get('index') === markerIndex;

        return false;
    }

    /**
     * Get current marker name
     * @param {object} markerNames - immutable List
     * @param {number} markerIndex
     * @return {string} markerName
     */
    proceessingMarkerName(markerNames, markerIndex) {
        const name = markerNames.findLast(value => value.get('index') === markerIndex);

        return name.get('name');
    }

    /**
     * Filtering marker objects by marker index
     * @param {number} markerIndex
     * @param {object} objects - immutable List
     * @return {object} immutable List of objects
     */
    processingObjects(markerIndex, objects) {
        return objects
            .filter(object => object.get('markerIndex') === markerIndex)
            .map(object => object.get('object'));
    }

    /**
     * Filtering marker object delete indexes immutable list by marker index
     * @param {number} markerIndex
     * @param {object} objectDeleteIndexes - immutable List
     * @return {object} immutable List of objectDeleteIndexes
     */
    processingObjectDeleteIndexes(markerIndex, objectDeleteIndexes) {
        return objectDeleteIndexes
            .filter(object => object.get('markerIndex') === markerIndex)
            .map(object => object.get('index'));
    }

    /**
     * SetState and clear timeout
     * @return {undefined}
     */
    mouseEnterHandler() {
        this.setState({
            mouseEnter: true,
        });
        clearTimeout(this.mouseLeaveTimeOut);
    }

    /**
     * Set timeout after mouse leave, for setState after 2s
     * @return {undefined}
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
     * @param {string} searchValue
     * @param {string} searchTarget
     * @return {boolean} the result of searching
     */
    search(searchValue, searchTarget) {
        return String(searchTarget).toLowerCase().indexOf(String(searchValue).toLowerCase()) !== -1;
    }

    /**
     * Search marker index by input value
     * @param {object} e - native js event object
     * @return {undefined}
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
        getMarkerDeleteIndexes: ImmutablePropTypes.listOf(ImmutablePropTypes.map),
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
