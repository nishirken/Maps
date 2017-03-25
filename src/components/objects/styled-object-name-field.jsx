import styled from 'styled-components';
import StyledMarkerNameEditField from 'Components/list-item-text/styled-marker-name-edit-field';

const StyledObjectNameField = styled(StyledMarkerNameEditField)`
    min-width: 100%;
    padding: ${StyleFunc.em(1.5)} 0;
    border-top: none;
    text-align: center;
`;

export default StyledObjectNameField;
