import styles from 'Styles';
import styled from 'styled-components';

const StyledMarksList = styled.div`
    height: 100%;
    background: ${styles.colors.get('windowsBackground')};
    font-size: 1rem;
    color: ${styles.colors.get('secondary')};
`;

export default StyledMarksList;
