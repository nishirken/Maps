import styled from 'styled-components';

const StyledCreateObject = styled.div`
    border-bottom: 1px solid ${StyleConst.colors.secondary};
    color: ${StyleConst.colors.third};
    text-align: center;
    cursor: pointer;
    
    &:hover {
        background: ${StyleConst.colors.currentMarksListItem};
    }
`;

export default StyledCreateObject;
