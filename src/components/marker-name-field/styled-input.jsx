import styles from 'Styles';
import styled from 'styled-components';

const StyledInputField = styled.input`
    width: 100%;
    padding: 2px 0;
    border: solid ${styles.colors.get('secondary')};
    border-width: 1px 0;
    font-size: ${styles.em(18)};
`;

export default StyledInputField;
