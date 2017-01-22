const API = {
    apiKey: 'AIzaSyAlz0vyHR7mYhlgdyylOcpFXi_nwsPaZCU',
    lang: 'ru'
  },

  SETTINGS = {
    center: {
      lat: 59.938043,
      lng: 30.337157
    },
    zoom: 9
  },

  OPTIONS = {
    styles: [
      {
        featureType: 'road',
        elementType: 'geometry',
        stylers: [
          {color: '#795548'},
          {visibility: 'simplified'},
        ],
      },
      {
        featureType: 'road',
        elementType: 'labels',
        stylers: [
          {visibility: 'off'}
        ],
      },
      {
        featureType: 'administrative',
        stylers: [
          {visibility: 'simplified'}
        ],
      },
      {
        featureType: "poi",
        stylers: [
          {visibility: 'off'}
        ],
      },
      {
        featureType: "transit",
        stylers: [
          {visibility: 'off'}
        ],
      },
    ],
  };

export { API, SETTINGS, OPTIONS };


