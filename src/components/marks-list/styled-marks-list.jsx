import styled from 'styled-components';

const StyledMarksList = styled.div`
    position: absolute;
    z-index: 200;
    top: 10%;
    right: 5%;
    display: flex;
    flex-flow: column; 
    width: ${StyleFunc.em(200)};
    height: 80%;
    overflow-x: auto;
    background: ${StyleConst.colors.windowsBackground};
    font-size: 1rem;
    color: ${StyleConst.colors.secondary};
    opacity: 0.5;
    transition: ${StyleConst.transition};
    
    &:hover {
        opacity: 0.9;
        transition: ${StyleConst.transition};
    }
`;

export default StyledMarksList;
