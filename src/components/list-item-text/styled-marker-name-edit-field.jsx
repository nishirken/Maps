import styled from 'styled-components';
import styles from 'Styles';

const StyledMarkerNameEditField = styled.input`
    max-width: ${styles.em(140)};
    padding: ${styles.em(2.5)} 0; 
    border: solid ${styles.colors.get('secondary')};
    border-width: 1px 0;
    font-family: ${styles.fontFamily.get('primary')};
    font-weight: 700;
    font-size: ${styles.em(18)};
`;

export default StyledMarkerNameEditField;
