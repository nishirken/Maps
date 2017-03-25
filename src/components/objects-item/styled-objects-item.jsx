import styled from 'styled-components';
import StyledListItem from 'Components/list-item/styled-list-item';

const StyledObjectsItem = styled(StyledListItem)`
    position: relative;
    min-height: ${StyleFunc.em(30)};
    background: transparent;
`;

export default StyledObjectsItem;
