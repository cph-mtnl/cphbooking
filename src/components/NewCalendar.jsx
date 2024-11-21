import { Calendar } from '@mantine/dates';
import React, { useState } from 'react'
import dayjs from 'dayjs';
import { DatePicker } from '@mantine/dates';

export default function NewCalendar(date, setDate) {
      
    return (
      <DatePicker value={date} onChange={setDate} />
    );
}

