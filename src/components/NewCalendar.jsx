import { Calendar } from '@mantine/dates';
import React, { useState } from 'react'

export default function NewCalendar() {
    const [selected, setSelected] = useState([]);
  
    const handleSelect = (date) => {
      const isSelected = selected.some((s) => dayjs(date).isSame(s, 'date'));
      if (isSelected) {
        setSelected((current) => current.filter((d) => !dayjs(d).isSame(date, 'date')));
      } else if (selected.length < 3) {
        setSelected((current) => [...current, date]);
      }
    };
  
    return (
      <Calendar
        getDayProps={(date) => ({
          selected: selected.some((s) => dayjs(date).isSame(s, 'date')),
          onClick: () => handleSelect(date),
        })}
      />
    );
}