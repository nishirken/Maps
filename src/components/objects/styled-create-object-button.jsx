import styles from 'Styles';
import styled from 'styled-components';

const StyledCreateObject = styled.div`
    border-bottom: 1px solid ${styles.colors.get('secondary')};
    color: ${styles.colors.get('third')};
    text-align: center;
    cursor: pointer;
    
    &:hover {
        background: ${styles.colors.get('currentMarksListItem')};
    }
`;

export default StyledCreateObject;
