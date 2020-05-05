import * as React from 'react';

export interface PageComponent<Props = {}> extends React.FC<Props> {
  title: string;
}
