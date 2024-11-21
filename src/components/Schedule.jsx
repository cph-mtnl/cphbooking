import React from "react";
import "./Schedule.css"; // CSS file for styling

const Schedule = () => {
  // Sample data for busy slots
  const scheduleData = {
    "Lokale 3.08": [],
    "Lokale 2.88": [],
    "Lokale 2.13": [],
    "Lokale 3.05": [],
    "Lokale 3.14": [],
  };

  // Generate table rows dynamically
  const times = Array.from({ length: 15 }, (_, i) => i + 8); // 8:00 to 22:00

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
                {/* Viser tidsrum (8 til 22), formateret med to cifre (fx 08, 09) */}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {/* Tabelkrop, der indeholder rækker for hvert lokale */}
          {Object.keys(scheduleData).map((room) => (
            <tr key={room}>
                {/* Tabeldata, firkanterne med indhold */}
              <td>{room}</td>
              {/* Første celle i hver række indeholder lokalets navn */}
              {times.map((time) => (
                <td
                  key={time}
                  className={
                    scheduleData[room].includes(time) ? "busy-slot" : ""
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