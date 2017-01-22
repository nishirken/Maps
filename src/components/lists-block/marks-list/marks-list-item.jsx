import { PropTypes } from 'react';
import styled from "styled-components";

import styles from "StyleVars";

const MarksListItem = styled.li`
  min-height: ${50 / 16}em;
  border-bottom: 1px solid ${styles.colors.secondary};

  &:not(:last-child) {
     border-bottom: none;
   }
`;

MarksListItem.propTypes = {};

export default MarksListItem;
