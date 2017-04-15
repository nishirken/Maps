import styles from 'Styles';
import { List, Map } from 'immutable';

const API = Map({
    key: 'AIzaSyAlz0vyHR7mYhlgdyylOcpFXi_nwsPaZCU',
    lang: 'ru',
});

const SETTINGS = Map({
    center: {
        lat: 56.84,
        lng: 60.57,
    },
    zoom: 18,
});

const OPTIONS = List([
    {
        styles: [
            {
                featureType: 'road',
                elementType: 'geometry',
                stylers: [
                    { color: styles.colors.secondary },
                    { visibility: 'simplified' },
                ],
            },
            {
                featureType: 'road',
                elementType: 'labels',
                stylers: [
                    { color: styles.colors.primary },
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
    },
]);

export { API, SETTINGS, OPTIONS };
