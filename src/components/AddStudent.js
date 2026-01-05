import { useState } from "react";

export default function AddStudent({ students = [], updateStudents }) {
  const [name, setName] = useState("");
  const [usn, setUsn] = useState("");

  const add = () => {
    if (!name || !usn) return;

    if (students.some(s => s.usn === usn)) {
      alert("Student with this USN already exists");
      return;
    }

    updateStudents([
      ...students,
      { id: Date.now(), name, usn, attendance: {} }
    ]);

    setName("");
    setUsn("");
  };

  return (
    <div className="panel add-student">
      <h2 className="add-title">Add Student</h2>

      <input
        placeholder="Student Name"
        value={name}
        onChange={e => setName(e.target.value)}
      />

      <input
        placeholder="USN"
        value={usn}
        onChange={e => setUsn(e.target.value)}
      />

      <button onClick={add}>Add</button>
    </div>
  );
}
