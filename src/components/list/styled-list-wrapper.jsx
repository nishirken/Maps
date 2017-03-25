import styled from 'styled-components';

const StyledMarksListWrapper = styled.div`
    position: absolute;
    z-index: 2;
    top: 10%;
    right: 5%;
    overflow-x: visible;
    width: ${StyleFunc.em(200)};
    height: 80%;
    opacity: ${props => props.mouseEnter ? 1 : 0.5};
    transform: scale(${props => props.mouseEnter ? 1 : 0.95});
    transition: ${StyleConst.transition('all')};
`;

StyledMarksListWrapper.propTypes = {
    mouseEnter: PropTypes.bool,
};

export default StyledMarksListWrapper;
