import { PropTypes } from 'react';
import styles from 'Styles';
import styled from 'styled-components';

const StyledListItem = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-height: ${styles.em(50)};
    overflow: visible;
    padding: ${styles.em(5)} ${styles.em(35)} ${styles.em(5)} ${styles.em(10)};
    border-bottom: 1px solid ${styles.colors.get('secondary')};
    background: ${props => props.current ? styles.colors.get('currentMarksListItem') : 'transparent'};
`;

StyledListItem.propTypes = {
    current: PropTypes.bool,
};

export default StyledListItem;
