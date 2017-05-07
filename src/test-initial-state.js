import { fromJS } from 'immutable';

export default fromJS({
    getMarkerCoords: [
        {
            index: 0,
            coords: {
                x: 200,
                y: 201,
                lat: 299,
                lng: 300,
            },
        },
        {
            index: 1,
            coords: {
                x: 100,
                y: 101,
                lat: 300,
                lng: 301,
            },
        },
    ],
    getMarkerName: [
        {
            index: 0,
            name: 'Marker0',
        },
        {
            index: 1,
            name: 'Marker1',
        },
        {
            index: 1,
            name: 'EditedMarkerName',
        },
    ],
    getMarkerDeleteIndexes: [0],
    getMarkerSearchIndexes: [0],
    getObjects: [
        {
            markerIndex: 0,
            object: {
                index: 0,
                name: 'Object for 0',
            },
        },
        {
            markerIndex: 1,
            object: {
                index: 0,
                name: 'Object for 1',
            },
        },
        {
            markerIndex: 1,
            object: {
                index: 1,
                name: 'Object for 1',
            },
        },
    ],
    getObjectDeleteIndexes: [
        {
            markerIndex: 1,
            index: 0,
        },
    ],
    getCurrentMarker: {
        index: 0,
        coords: {
            lat: 299,
            lng: 300,
        },
    },
});
