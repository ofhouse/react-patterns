import * as React from 'react';

import { PageComponent } from '../../types';
import { Tag } from './components/tag';

const OverridePattern: PageComponent = () => <Tag>hello</Tag>;

OverridePattern.title = 'Override Pattern';

export default OverridePattern;
