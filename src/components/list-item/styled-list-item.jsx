import styled from 'styled-components';

const StyledListItem = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-height: ${StyleFunc.em(50)};
    overflow: visible;
    padding: ${StyleFunc.em(5)} ${StyleFunc.em(35)} ${StyleFunc.em(5)} ${StyleFunc.em(10)};
    border-bottom: 1px solid ${StyleConst.colors.secondary};
    background: ${props => props.current ? StyleConst.colors.currentMarksListItem : 'transparent'};
`;

export default StyledListItem;
