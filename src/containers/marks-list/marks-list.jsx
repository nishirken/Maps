import { connect } from 'react-redux';

import { MarksList, MarkerNameField } from 'Components';

@connect(
    state => ({
        markers: state.getMarkers,
    }),
)
export default class MarksListContainer extends PureComponent {
    static propTypes = {
        markers: PropTypes.arrayOf(PropTypes.shape({
            payload: PropTypes.shape({
                coords: PropTypes.shape({
                    lat: PropTypes.number,
                    lng: PropTypes.number,
                    x: PropTypes.number,
                    y: PropTypes.number,
                }),
                name: PropTypes.string,
            }),
        })).isRequired,
    }

    render() {
        return (
            <MarksList markers={this.props.markers} />
        );
    }
}
