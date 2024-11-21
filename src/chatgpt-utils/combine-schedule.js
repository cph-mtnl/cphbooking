export function combineSchedules(objects) {
    const combinedSchedule = {};
  
    objects.forEach((obj) => {
      const schedule = obj.schedule;
      for (const room in schedule) {
        if (!combinedSchedule[room]) {
          combinedSchedule[room] = new Set(schedule[room]);
        } else {
          schedule[room].forEach((time) => combinedSchedule[room].add(time));
        }
      }
    });
  
    // Convert sets back to arrays
    for (const room in combinedSchedule) {
      combinedSchedule[room] = Array.from(combinedSchedule[room]).sort((a, b) => a - b);
    }
  
    return combinedSchedule;
  }
