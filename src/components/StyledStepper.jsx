import { Stepper, rem } from '@mantine/core';

function StyledStepper(props) {
    return (
      <Stepper
        styles={{
          stepBody: {
            display: 'block',
            marginTop: rem(8),
            marginLeft: rem(0),
            textAlign: 'center',
          },
  
          step: {
            padding: 0,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          },
  
          stepIconActive: {
            borderWidth: rem(4),
            borderColor: '#6eb47e',
            backgroundColor: '#6eb47e',
            color: 'white',
          },
  
          separator: {
            height: rem(4),
            flexGrow: 1, 
            margin: '0 -30px 25px -30px',
          }

        }}
        {...props}
      />
    );
  }
export default StyledStepper;