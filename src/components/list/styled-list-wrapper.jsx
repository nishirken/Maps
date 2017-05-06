import { PropTypes } from 'react';
import styles from 'Styles';
import styled from 'styled-components';

const StyledListWrapper = styled.div`
    position: absolute;
    z-index: 2;
    top: 10%;
    right: 5%;
    overflow-x: visible;
    width: ${styles.em(200)};
    height: 80%;
    opacity: ${props => props.mouseEnter ? 1 : 0.5};
    transform: scale(${props => props.mouseEnter ? 1 : 0.95});
    transition: ${styles.transition('all')};
`;

StyledListWrapper.propTypes = {
    mouseEnter: PropTypes.bool,
    onMouseEnter: PropTypes.func,
    onMouseLeave: PropTypes.func,
};

export default StyledListWrapper;
