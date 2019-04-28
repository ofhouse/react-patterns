import React from 'react';
import { Menu, MenuButton, MenuItem } from '@reach/menu-button';

import { DropdownMenu } from './menu';
import { DropdownOptionsT } from './types';

interface DropdownPropsT {
  options: DropdownOptionsT;
  valueKey?: string;
  labelKey?: string;
}

export const Dropdown: React.FC<DropdownPropsT> = ({
  options,
  valueKey = 'id',
  labelKey = 'label',
}) => (
  <Menu>
    <MenuButton>
      Actions <span aria-hidden>▾</span>
    </MenuButton>
    <DropdownMenu>
      {options.map(option => {
        const value = option[valueKey] || '';
        const label = option[labelKey] || '';

        return (
          <MenuItem
            key={value}
            onSelect={() => alert('Download')}
            onMouseEnter={() => console.log('HELLO')}
          >
            {label}
          </MenuItem>
        );
      })}
    </DropdownMenu>
  </Menu>
);
