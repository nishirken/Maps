import styled from 'styled-components';

const StyledMarksList = styled.ul`
    position: absolute;
    z-index: 200;
    top: 10%;
    right: 5%;
    height: 80%;
    width: ${StyleFunc.em(200)};
    overflow-x: auto;
    background: ${StyleConst.colors.windowsBackground};
    font-size: 1rem;
    opacity: 0.5;
    transition: ${StyleConst.transition};
    
    &:hover {
        opacity: 0.9;
        transition: ${StyleConst.transition};
    }
`;

export default StyledMarksList;
