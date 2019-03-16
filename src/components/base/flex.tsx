import styled, { css } from 'styled-components';

export const Flex = styled.div<{ flexDirection?: 'row' | 'column' }>`
  display: flex;

  ${({ flexDirection }) =>
    flexDirection
      ? css`
          flex-direction: ${flexDirection};
        `
      : ''}
`;

export const FlexChild = styled.div``;
