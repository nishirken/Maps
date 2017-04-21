import { PropTypes } from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';

export default {
    markerName: PropTypes.string,
    markerCoords: ImmutablePropTypes.mapContains({
        lat: PropTypes.number,
        lng: PropTypes.number,
    }),
    markerNumber: PropTypes.number,
    setNewMarkerName: PropTypes.func,
    switchEditMarkerName: PropTypes.func,
    editMarkerName: PropTypes.bool,
};
