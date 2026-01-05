import React, { useState } from "react";

export default function SubjectAttendance({
  students = [],
  subjects = [],
  updateStudents
}) {
  const today = new Date().toISOString().split("T")[0];

  const [selectedSubject, setSelectedSubject] = useState(subjects[0] || "");
  const [selectedDate, setSelectedDate] = useState(today);

  /* MARK ATTENDANCE */
  const markAttendance = (studentId, status) => {
    const updated = students.map(student => {
      if (student.id === studentId) {
        if (!student.attendance) student.attendance = {};
        if (!student.attendance[selectedSubject])
          student.attendance[selectedSubject] = {};

        student.attendance[selectedSubject][selectedDate] = status;
      }
      return student;
    });

    updateStudents(updated);
  };

  return (
    <div className="panel attendance-panel">
      <h2>Today's Attendance</h2>

      {/* SUBJECT SELECT */}
      <div className="subject-select-wrapper">
        <select
          value={selectedSubject}
          onChange={e => setSelectedSubject(e.target.value)}
        >
          {subjects.map(sub => (
            <option key={sub} value={sub}>
              {sub}
            </option>
          ))}
        </select>
      </div>

      {/* DATE PICKER */}
      <div style={{ marginBottom: "20px" }}>
        <input
          type="date"
          value={selectedDate}
          onChange={e => setSelectedDate(e.target.value)}
        />
      </div>

      {/* STUDENT LIST */}
      {[...students]
        .sort((a, b) => a.name.localeCompare(b.name))
        .map(student => (
          <div key={student.id} className="attendance-row">
            <div>
              <strong>{student.name}</strong>
              <div className="attendance-usn">{student.usn}</div>
            </div>
          <div>
              <button
                className="present"
                onClick={() => markAttendance(student.id, "Present")}
              >
                Present
              </button>

              <button
                className="absent"
                onClick={() => markAttendance(student.id, "Absent")}
              >
                Absent
              </button>

              <button
                className="noclass"
                onClick={() => markAttendance(student.id, "No Class")}
              >
                No Class
              </button>
            </div>
          </div>
        ))}
    </div>
  );
}
