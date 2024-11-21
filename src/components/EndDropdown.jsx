import { useState } from 'react';
import { Combobox, Input, InputBase, useCombobox } from '@mantine/core';
import classes from './DropdownPositionStyles.module.css';

const endTime = [
  '09:00',
  '10:00',
  '11:00',
  '12.00',
  '13:00',
  '14:00',
  '15:00',
  '16:00',
  '17:00',
  '18.00',
];

export default function DropdownPositionStyles() {
  const combobox = useCombobox({
    onDropdownClose: () => combobox.resetSelectedOption(),
  });

  const [value, setValue] = useState(null);

  const options = endTime.map((item) => (
    <Combobox.Option value={item} key={item}>
      {item}
    </Combobox.Option>
  ));

  return (
    <Combobox
      store={combobox}
      withinPortal={false}
      offset={0}
      onOptionSubmit={(val) => {
        setValue(val);
        combobox.closeDropdown();
      }}
    >
      <Combobox.Target>
        <InputBase
          component="button"
          type="button"
          pointer
          label="Vælg slutstidspunkt"
          withAsterisk
          rightSection={<Combobox.Chevron />}
          onClick={() => combobox.toggleDropdown()}
          rightSectionPointerEvents="none"
          classNames={{ input: classes.input }}
        >
          {value || <Input.Placeholder>Vælg slutstidspunkt</Input.Placeholder>}
        </InputBase>
      </Combobox.Target>

      <Combobox.Dropdown className={classes.dropdown}>
        <Combobox.Options>{options}</Combobox.Options>
      </Combobox.Dropdown>
    </Combobox>
  );
}