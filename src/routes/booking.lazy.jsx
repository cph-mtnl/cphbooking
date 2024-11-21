import { createLazyFileRoute } from '@tanstack/react-router';
import NewCalendar from '../components/NewCalendar';
import Stepper from '../components/Stepper';
import NumberInput from '../components/NumberInput';
import Schedule from '../components/Schedule';
import { useEffect } from 'react';


export const Route = createLazyFileRoute('/booking')({
  component: RouteComponent,
})

function RouteComponent() {
  const [datePicked, setDatePicked] = useState(null);

  useEffect(() => {
    RouteComponent();
  }, []);


  return (
    <div style={{display: "flex"}}>

      <div style={{width: "40%", display: "flex", flexDirection: "column", alignItems: "center", gap: "40px", }}>
        <NewCalendar date={datePicked} setDate={setDatePicked}/>
        <NumberInput />
      </div>
      <div style={{width: "60%", display: "flex", flexDirection: "column", alignItems: "center"}}>
        <Stepper/>
        <Schedule/>
      </div>
    </div>
  )
}
