import { Stepper as MantineStepper, rem } from '@mantine/core';
import { useState } from 'react';
import StyledStepper from './StyledStepper';

function Stepper() {
  const [active, setActive] = useState(1);

  return (
    <StyledStepper active={active} onStepClick={setActive}>
      <MantineStepper.Step label="Log ind"/>
      <MantineStepper.Step label="Book lokale"/>
      <MantineStepper.Step label="Bekræft"/>
      <MantineStepper.Step label="Udført"/>
    </StyledStepper>
  );
}

export default Stepper;
