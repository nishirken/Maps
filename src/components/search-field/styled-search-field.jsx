import styled from 'styled-components';
import styles from 'Styles';

const StyledSearchField = styled.input`
    width: 100%;
    padding: 2px ${styles.em(10)};
    border: solid ${styles.colors.secondary};
    border-width: 1px 0;
    font-size: ${styles.em(18)};
    text-align: center;
    
    &::-webkit-input-placeholder {
        font-family: ${styles.fontFamily.primary};
    }
`;

export default StyledSearchField;
