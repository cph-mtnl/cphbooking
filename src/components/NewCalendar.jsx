import React from 'react';
import { DatePicker } from '@mantine/dates';
import { Input } from '@mantine/core';
import './BookingStyles.css';

export default function NewCalendar({ date, setDate }) {
  return (
    <Input.Wrapper
      id="date-picker"
      label="Vælg dato"
      withAsterisk
      className="calendar-container"
    >
      <DatePicker
        id="date-picker"
        className="calendar"
        value={date}
        onChange={setDate}
        placeholder="Vælg dato"
      />
    </Input.Wrapper>
  );
}


