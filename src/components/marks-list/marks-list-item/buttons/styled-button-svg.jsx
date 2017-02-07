import styled from 'styled-components';

const StyledButtonSvg = styled.svg`
    width: 12px;
    height: 12px;
    margin-right: 2px;
    fill: ${StyleConst.colors.third};
    transition: ${StyleConst.transition};
    cursor: pointer;
    
    &:hover {
        fill: ${StyleConst.colors.thirdHover};
    }
`;

export default StyledButtonSvg;
