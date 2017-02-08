import styled from 'styled-components';

const StyledMarkerSvg = styled.svg` 
    width: 15px;
    height: 15px;
    fill: ${StyleConst.colors.third};
    cursor: pointer;
    transition: ${StyleConst.transition};
    transform: scale(${props => props.center ? 1.5 : 1});
    
    &:hover {
        fill: ${StyleConst.colors.thirdHover};
    }
`;

export default StyledMarkerSvg;
