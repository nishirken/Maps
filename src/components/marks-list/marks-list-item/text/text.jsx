import StyledMarkerName from './styled-marker-name';
import StyledMarkerCoords from './styled-marker-coords';

export default class Text extends PureComponent {
    static propTypes = {
        markerName: PropTypes.string,
        markerCoords: PropTypes.shape({
            lat: PropTypes.number,
            lng: PropTypes.number,
        }),
        markerIndex: PropTypes.number,
    }

    render() {
        return (
            <div>
                <StyledMarkerName>
                    {this.props.markerName ? this.props.markerName : 'Your marker'}
                </StyledMarkerName>
                <StyledMarkerCoords>
                    coords: {this.props.markerCoords.lat.toFixed(2)},
                    &nbsp;{this.props.markerCoords.lng.toFixed(2)} <br />
                    №: {this.props.markerIndex + 1}
                </StyledMarkerCoords>
            </div>
        );
    }
}
