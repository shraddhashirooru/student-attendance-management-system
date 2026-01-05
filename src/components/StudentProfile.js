import { useState } from "react";
import AttendanceCalendar from "./AttendanceCalendar";

export default function StudentProfile({ student, subjects = [] }) {
  const [activeSubject, setActiveSubject] = useState(null);

  if (!student) return null;

  // Calculate percentage + records for a subject
  const getStats = subject => {
    const records = student.attendance?.[subject] || {};
    const validDays = Object.values(records).filter(
      v => v === "Present" || v === "Absent"
    );

    const present = validDays.filter(v => v === "Present").length;
    const total = validDays.length;


    return {
      percent: total ? Math.round((present / total) * 100) : 0,
      records
    };
  };

  return (
    <div className="panel student-details">
      {/* STUDENT BASIC INFO */}
      <h2>{student.name}</h2>
      <p className="muted">{student.usn}</p>

      {/* SUBJECT-WISE ATTENDANCE TUBES */}
      <div className="subject-tubes">
        {subjects.map(subject => {
          const { percent } = getStats(subject);

          return (
            <div
              key={subject}
              className={`tube-card ${
                activeSubject === subject ? "active" : ""
              }`}
              onClick={() => setActiveSubject(subject)}
            >
              <div className="tube-label">
                Overall {subject} Attendance
              </div>

              <div className="tube-bar">
                <div
                  className="tube-fill"
                  style={{ width: `${percent}%` }}
                />
              </div>

              <div style={{ marginTop: "6px", fontSize: "14px" }}>
                {percent}%
              </div>
            </div>
          );
        })}
      </div>

      {/* CALENDAR VIEW (ONLY AFTER SUBJECT CLICK) */}
      {activeSubject && (
        <>
          <h3 style={{ marginTop: "30px" }}>
            {activeSubject} – Monthly Attendance
          </h3>

          <AttendanceCalendar
            attendance={getStats(activeSubject).records}
          />
        </>
      )}
    </div>
  );
}
