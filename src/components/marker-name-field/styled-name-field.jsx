import styled from 'styled-components';

const StyledNameField = styled.div`
    position: absolute;
    z-index: 300;
    display: flex;
    flex-flow: column;
    justify-content: space-between;
    align-items: center;
    width: ${StyleFunc.em(300)};
    height: ${StyleFunc.em(120)};
    top: calc(${props => props.y}px - ${StyleFunc.em(130)});
    left: calc(${props => props.x + 7.5}px - ${StyleFunc.em(150)});
    padding: ${StyleFunc.em(10)};
    background: ${StyleConst.colors.windowsBackground};
    color: ${StyleConst.colors.secondary};
`;

export default StyledNameField;
