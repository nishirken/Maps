import styles from 'Styles';
import { Map } from 'immutable';

const API = Map({
    key: 'AIzaSyAlz0vyHR7mYhlgdyylOcpFXi_nwsPaZCU',
    lang: 'ru',
});

const SETTINGS = Map({
    center: {
        lat: 56.840368243241333,
        lng: 60.5703111362452237,
    },
    zoom: 18,
});

const OPTIONS = Map({
    styles: [
        {
            featureType: 'road',
            elementType: 'geometry',
            stylers: [
                { color: styles.colors.get('secondary') },
                { visibility: 'simplified' },
            ],
        },
        {
            featureType: 'road',
            elementType: 'labels',
            stylers: [
                { color: styles.colors.get('primary') },
                { visibility: 'simplified' },
            ],
        },
        {
            featureType: 'administrative',
            stylers: [
                { visibility: 'simplified' },
            ],
        },
        {
            featureType: 'poi',
            stylers: [
                { visibility: 'simplified' },
            ],
        },
        {
            featureType: 'transit',
            stylers: [
                { visibility: 'simplified' },
            ],
        },
    ],
});

export { API, SETTINGS, OPTIONS };
