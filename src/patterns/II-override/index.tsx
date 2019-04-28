import React from 'react';
import { Menu, MenuButton, MenuItem, MenuLink } from '@reach/menu-button';

import { PageComponent } from '../../App';
import { Dropdown } from './components/dropdown';

const dropdownOptions = [
  {
    label: 'hello',
    id: 1,
  },
];

const OverridePattern: PageComponent = () => (
  <section>
    <h3>Dropdown</h3>

    <Dropdown options={dropdownOptions} />
  </section>
);

OverridePattern.title = 'Override Pattern';

export default OverridePattern;
