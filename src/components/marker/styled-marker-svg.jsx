import { PropTypes } from 'react';
import styles from 'Styles';
import styled from 'styled-components';

const StyledMarkerSvg = styled.svg` 
    width: 15px;
    height: 15px;
    fill: ${styles.colors.third};
    cursor: pointer;
    transition: ${styles.transition};
    transform: scale(${props => props.center ? 1.5 : 1});
    
    &:hover {
        fill: ${styles.colors.thirdHover};
    }
`;

StyledMarkerSvg.propTypes = {
    center: PropTypes.bool,
};

export default StyledMarkerSvg;
