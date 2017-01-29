import styled from 'styled-components';

export const MarksListItem = styled.li`
  min-height: ${50 / 16}em;
  border-bottom: 1px solid ${StyleConst.colors.secondary};

  &:not(:last-child) {
     border-bottom: none;
   }
`;
