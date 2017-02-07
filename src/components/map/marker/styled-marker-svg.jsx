import styled from 'styled-components';

const StyledMarkerSvg = styled.svg` 
    width: 15px;
    height: 15px;
    fill: ${StyleConst.colors.third};
    transition: ${StyleConst.transition};
    cursor: pointer;
    
    &:hover {
        fill: ${StyleConst.colors.thirdHover};
    }
`;

export default StyledMarkerSvg;
