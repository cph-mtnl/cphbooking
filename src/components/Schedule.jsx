import React from "react";
import "./Schedule.css"; // CSS file for styling

// ChatGPT Magic
const Schedule = ({value}) => {
  // Sample data for busy slots
  

  // Generate table rows dynamically
  const times = Array.from({ length: 11 }, (_, i) => i + 8); // 8:00 to 18:00

  return (
    <div className="schedule-container">
      {/* Containeren til skemaet med afrundede hjørner og styling */}
      <table className="schedule-table">
        <thead>
          {/* Tabelrow, der indeholder tidslabels */}
          <tr>
            {/* Tabel Header */}
            <th></th> 
            {/* Tom header til den første kolonne (lokalenavne) */}
            {times.map((time) => (
              <th key={time}>
                {time.toString().padStart(2, "0")}
                {/* Viser tidsrum (8 til 18), formateret med to cifre (fx 08, 09) */}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {/* Tabelkrop, der indeholder rækker for hvert lokale */}
          {Object.keys(value).map((room) => (
            <tr key={room}>
                {/* Tabeldata, firkanterne med indhold */}
              <td>{room}</td>
              {/* Første celle i hver række indeholder lokalets navn */}
              {times.map((time) => (
                <td
                  key={time}
                  className={
                    value[room].includes(time) ? "busy-slot" : ""
                  }
                  /* Tilføjer klassen "busy-slot", hvis lokalet er optaget på dette tidspunkt */
                ></td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Schedule;