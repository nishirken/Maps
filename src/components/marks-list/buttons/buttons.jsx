import StyledButtons from './styled-buttons';
import DeleteButton from './delete-button';
import EditButton from './edit-button';

export default class Buttons extends PureComponent {
    static propTypes = {
        deleteMarker: PropTypes.func,
        markerIndex: PropTypes.number,
    }

    render() {
        return (
            <StyledButtons>
                <EditButton />
                <DeleteButton
                    deleteMarker={this.props.deleteMarker}
                    markerIndex={this.props.markerIndex}
                />
            </StyledButtons>
        );
    }
}
