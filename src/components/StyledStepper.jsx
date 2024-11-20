import { useState } from 'react';
import { Stepper, rem } from '@mantine/core';

function StyledStepper(props) {
    return (
      <Stepper
        styles={{
          stepBody: {
            display: 'block',
            
          },
  
          step: {
            padding: 0,
            display: 'flex',
            flexDirection: 'column',

          },
  
          stepIcon: {
            borderWidth: rem(4),
            borderColor: '#6eb47e',
            backgroundColor: '#6eb47e',
            color: 'white',
          },
          
          stepIconInactive:{
            borderColor: '#f1f3f5',
            color: 'black',
            backgroundColor: '#f1f3f5',
          },
  
          separator: (theme, {active, index}) =>({
            backgroundColor: active > index ? '#6eb47e' : '#f1f3f5',
            height: rem(4),
            flexGrow: 1,
          }),

          separatorInactive:{
            backgroundColor: '#f1f3f5',
          },

        }}
        {...props}
      />
    );
  }
export default StyledStepper;