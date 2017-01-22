import styled from "styled-components";

import styles from "StyleVars";

const MarksList = styled.ul`
  width: ${200 / 16}em;
  height: 100%;
  overflow-x: auto;
  background: ${styles.colors.primary};
  opacity: .5;
  transition: ${styles.transition};

  &:hover {
    opacity: .95;
    transition: ${styles.transition};
  }
`;

export default MarksList;
