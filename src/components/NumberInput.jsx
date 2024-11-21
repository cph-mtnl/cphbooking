import { NumberInput } from '@mantine/core';
import '@fortawesome/fontawesome-free/css/all.min.css';

function numberInput() {
  return (
    <div style={{display: "flex", gap: "10px"}}> 
    <div>
    <i className="fa-solid fa-user"></i>
    </div>
    <NumberInput
      label="Antal deltagere "
      withAsterisk
      placeholder="Input placeholder"
    />
    </div>
  );
}
export default numberInput; 