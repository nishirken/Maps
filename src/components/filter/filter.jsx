import { PureComponent } from 'react';

/** Class Filter for combine common filtering methods */
export default class Filter extends PureComponent {
    render() {
        return null;
    }

    /**
     * Filtering marker coords by delete indexes
     * @param {object} coordsArray - immutable List
     * @param {object} deleteIndexesArray - immutable List
     * @return {object} immutable List of coordsArray
     */
    processingMarkerDeleteIndexes(coordsArray, deleteIndexesArray) {
        return coordsArray.filter(marker =>
            !deleteIndexesArray.includes(marker.get('index')));
    }

    /**
     * Filtering marker coords by search indexes
     * @param {object} coordsArray - immutable List
     * @param {object} searchIndexesArray - immutable List
     * @return {object} immutable List of coordsArray
     */
    processingMarkerSearchNames(coordsArray, searchIndexesArray) {
        return coordsArray.filter(marker =>
            searchIndexesArray.includes(marker.get('index')));
    }
}
