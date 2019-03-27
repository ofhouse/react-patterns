import * as React from 'react';
import styled from 'styled-components';

import { getOverrides } from '../../helpers/overrides';

const StyledRoot = styled.button``;

interface Props {
  overrides?: {
    Root?: React.ComponentType<any>;
  };
}

export const Tag: React.StatelessComponent<Props> = ({ overrides = {} }) => {
  const [Root, rootProps] = getOverrides(overrides.Root, StyledRoot);

  return <Root {...rootProps}>hello</Root>;
};
