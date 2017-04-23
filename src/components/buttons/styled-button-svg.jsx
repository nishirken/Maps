import styles from 'Styles';
import styled from 'styled-components';

const StyledButtonSvg = styled.svg`
    width: 12px;
    height: 12px;
    margin-right: 2px;
    fill: ${styles.colors.get('third')};
    transition: ${styles.transition};
    cursor: pointer;
    
    &:hover {
        fill: ${styles.colors.get('thirdHover')};
    }
`;

export default StyledButtonSvg;
