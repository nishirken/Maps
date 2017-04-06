import styles from 'Styles';
import styled from 'styled-components';

const StyledCreateObject = styled.div`
    border-bottom: 1px solid ${styles.colors.secondary};
    color: ${styles.colors.third};
    text-align: center;
    cursor: pointer;
    
    &:hover {
        background: ${styles.colors.currentMarksListItem};
    }
`;

export default StyledCreateObject;
