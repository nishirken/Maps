import { PropTypes } from 'react';
import styled from 'styled-components';

import styles from 'Styles';
import StyledList from 'Components/list/styled-list';

const StyledObjects = styled(StyledList)`
    position: absolute;
    top: 0;
    right: ${props => props.open ? '100%' : 0};
    z-index: -1;
    width: 100%;
    overflow-y: auto;
    max-height: 300px;
    min-height: 100%;
    height: auto;
    transition: ${styles.transition('right')};
`;

StyledObjects.propTypes = {
    open: PropTypes.bool,
};

export default StyledObjects;
