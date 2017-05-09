import { fromJS } from 'immutable';

export default fromJS([
    {
        index: 1,
        coords: {
            lng: 100,
            lat: 200,
            x: 20,
            y: 21,
        },
        name: 'Marker 1',
        objects: [
            {
                index: 0,
                name: 'Object 1',
            },
            {
                index: 1,
                name: 'Object 2',
            },
        ],
    },
    {
        index: 2,
        coords: {
            lng: 200,
            lat: 300,
            x: 10,
            y: 11,
        },
        name: 'Marker 2',
        objects: [
            {
                index: 0,
                name: 'Object 1',
            },
            {
                index: 1,
                name: 'Object 2',
            },
        ],
    },
]);
