import styled from 'styled-components';

export const MarksList = styled.ul`
  width: ${200 / 16}em;
  height: 100%;
  overflow-x: auto;
  background: ${StyleConst.colors.primary};
  opacity: .5;
  transition: ${StyleConst.transition};

  &:hover {
    opacity: .95;
    transition: ${StyleConst.transition};
  }
`;
