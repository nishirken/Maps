import { PureComponent } from 'react';

/** Class Filter for combine common filtering methods */
export default class Filter extends PureComponent {
    render() {
        return null;
    }

    /**
     * Filtering marker coords by delete indexes
     * @param coordsArray {immutable List}
     * @param deleteIndexesArray {immutable List}
     * @return coordsArray {immutable List}
     */
    processingMarkerDeleteIndexes(coordsArray, deleteIndexesArray) {
        return coordsArray.filter(marker =>
            !deleteIndexesArray.includes(marker.get('index')));
    }

    /**
     * Filtering marker coords by search indexes
     * @param coordsArray {immutable List}
     * @return coordsArray {immutable List}
     */
    processingMarkerSearchNames(coordsArray, searchIndexesArray) {
        return coordsArray.filter(marker =>
            searchIndexesArray.includes(marker.get('index')));
    }
}
