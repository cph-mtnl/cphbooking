import { Stepper as MantineStepper, rem } from '@mantine/core';
import { useState } from 'react';
import StyledStepper from './StyledStepper';

function Stepper() {
  const [active, setActive] = useState(1);

  return (
    <div style={{width: "70%"}}>
    <StyledStepper active={active} onStepClick={setActive} color="#6eb47e">
      <MantineStepper.Step label="Log ind"/>
      <MantineStepper.Step label="Book lokale"/>
      <MantineStepper.Step label="Bekræft"/>
      <MantineStepper.Step label="Udført"/>
    </StyledStepper>
    </div>
  );
}

export default Stepper;
