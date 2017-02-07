import StyledButtons from './styled-buttons';
import DeleteButton from './delete-button';
import EditButton from './edit-button';

export default class Buttons extends PureComponent {
    render() {
        return (
            <StyledButtons>
                <EditButton />
                <DeleteButton />
            </StyledButtons>
        );
    }
}
