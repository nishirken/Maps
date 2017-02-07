import styled from 'styled-components';

const StyledMarksListItem = styled.li`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-height: ${StyleFunc.em(50)};
    padding: ${StyleFunc.em(5)} ${StyleFunc.em(10)};
    border-bottom: 1px solid ${StyleConst.colors.secondary};
    color: ${StyleConst.colors.secondary};
`;

export default StyledMarksListItem;
