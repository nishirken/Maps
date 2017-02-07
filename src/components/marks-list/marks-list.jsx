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
        })),
    }

    static defaultProps = {
        marksListItems: [],
    }

    marksListItemsRender() {
        return map(this.props.markers, (marker, key) =>
            <MarksListItem
                key={key}
                markerCoords={{ lat: marker.coords.lat, lng: marker.coords.lng }}
                markerName={marker.name}
                markerOrdinal={key + 1}
            />
        );
    }

    render() {
        return (
            <StyledMarksList >
                {this.marksListItemsRender()}
            </StyledMarksList>
        );
    }
}
