import { useState } from "react";

export default function AttendanceCalendar({ attendance = {} }) {
  const today = new Date();

  const [month, setMonth] = useState(today.getMonth());
  const [year, setYear] = useState(today.getFullYear());

  const monthNames = [
    "January", "February", "March", "April",
    "May", "June", "July", "August",
    "September", "October", "November", "December"
  ];

  const years = [];
  for (let y = today.getFullYear() - 5; y <= today.getFullYear() + 1; y++) {
    years.push(y);
  }

  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const cells = [];

  for (let i = 0; i < firstDay; i++) {
    cells.push({ empty: true });
  }

  for (let d = 1; d <= daysInMonth; d++) {
    const dateStr = `${year}-${String(month + 1).padStart(2, "0")}-${String(d).padStart(2, "0")}`;
    cells.push({
      day: d,
      status: attendance[dateStr] || null
    });
  }

  return (
    <div className="calendar-card">

      {/* MONTH + YEAR SELECTOR */}
      <div className="month-selector">
        <select value={month} onChange={e => setMonth(+e.target.value)}>
          {monthNames.map((m, i) => (
            <option key={i} value={i}>{m}</option>
          ))}
        </select>

        <select value={year} onChange={e => setYear(+e.target.value)}>
          {years.map(y => (
            <option key={y} value={y}>{y}</option>
          ))}
        </select>
      </div>

      {/* WEEK HEADER */}
      <div className="calendar-header">
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(day => (
          <div key={day}>{day}</div>
        ))}
      </div>

      {/* CALENDAR GRID */}
      <div className="calendar-grid">
        {cells.map((cell, i) => (
          <div key={i} className="calendar-cell">
            {!cell.empty && (
              <>
                <div className="calendar-date">{cell.day}</div>

                {cell.status && (
                <span
                    className={`calendar-dot ${
                        cell.status === "Present"
                        ? "present-dot"
                        : cell.status === "Absent"
                        ? "absent-dot"
                        : "noclass-dot"
                    }`}
                />

                )}
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
