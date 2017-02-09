import { map } from 'lodash';

import StyledMarksList from './styled-marks-list';
import MarksListItem from './marks-list-item/marks-list-item';

export default class MarksList extends PureComponent {
    static propTypes = {
        markers: PropTypes.arrayOf(PropTypes.shape({
            payload: PropTypes.shape({
                coords: PropTypes.shape({
                    lat: PropTypes.number,
                    lng: PropTypes.number,
                    x: PropTypes.number,
                    y: PropTypes.number,
                }).isRequired,
                name: PropTypes.string,
            }),
        })).isRequired,
        currentMarkerPayload: PropTypes.shape({
            markerIndex: PropTypes.number,
            coords: PropTypes.objectOf(PropTypes.number),
        }),
        markerChoice: PropTypes.func,
    }

    markerChoice(markerIndex, coords) {
        this.props.markerChoice(markerIndex, coords);
    }

    marksListItemsRender() {
        return map(this.props.markers, (marker, key) => {
            let current = false;

            if (this.props.currentMarkerPayload.markerIndex === key) current = true;

            return (
                <MarksListItem
                    current={current}
                    key={key}
                    markerChoice={::this.markerChoice}
                    markerCoords={{
                        lat: marker.coords.lat,
                        lng: marker.coords.lng,
                    }}
                    markerIndex={key}
                    markerName={marker.name}
                />
            );
        });
    }

    render() {
        return (
            <StyledMarksList >
                {this.marksListItemsRender()}
            </StyledMarksList>
        );
    }
}
