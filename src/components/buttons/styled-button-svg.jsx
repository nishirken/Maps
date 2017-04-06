import styles from 'Styles';
import styled from 'styled-components';

const StyledButtonSvg = styled.svg`
    width: 12px;
    height: 12px;
    margin-right: 2px;
    fill: ${styles.colors.third};
    transition: ${styles.transition};
    cursor: pointer;
    
    &:hover {
        fill: ${styles.colors.thirdHover};
    }
`;

export default StyledButtonSvg;
