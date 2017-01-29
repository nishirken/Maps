const API = {
    key: 'AIzaSyAlz0vyHR7mYhlgdyylOcpFXi_nwsPaZCU',
    lang: 'ru',
};

const SETTINGS = {
    center: {
        lat: 59.938043,
        lng: 30.337157,
    },
    zoom: 9,
};

const OPTIONS = {
    styles: [
        {
            featureType: 'road',
            elementType: 'geometry',
            stylers: [
                { color: StyleConst.colors.secondary },
                { visibility: 'simplified' },
            ],
        },
        {
            featureType: 'road',
            elementType: 'labels',
            stylers: [
                { visibility: 'off' },
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
                { visibility: 'off' },
            ],
        },
        {
            featureType: 'transit',
            stylers: [
                { visibility: 'off' },
            ],
        },
    ],
};

export { API, SETTINGS, OPTIONS };
