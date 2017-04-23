import styles from 'Styles';
import styled from 'styled-components';

const StyledNameField = styled.div`
    position: absolute;
    z-index: 300;
    display: flex;
    flex-flow: column;
    justify-content: space-between;
    align-items: center;
    width: ${styles.em(300)};
    height: ${styles.em(120)};
    top: calc(${props => props.y}px - ${styles.em(130)});
    left: calc(${props => props.x + 7.5}px - ${styles.em(150)});
    padding: ${styles.em(10)};
    background: ${styles.colors.get('windowsBackground')};
    color: ${styles.colors.get('secondary')};
`;

export default StyledNameField;
