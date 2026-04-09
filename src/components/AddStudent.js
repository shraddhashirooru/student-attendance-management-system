import { useState } from "react";

export default function AddStudent({ students = [], updateStudents }) {
  const [name, setName] = useState("");
  const [usn, setUsn] = useState("");
  const [error, setError] = useState("");

  const add = () => {
    if (!name || !usn) {
      setError("Please enter both Student Name and USN");
      return;
    }

    if (students.some(s => s.usn === usn)) {
      setError("Student with this USN already exists");
      return;
    }

    updateStudents([
      ...students,
      { id: Date.now(), name, usn, attendance: {} }
    ]);

    setName("");
    setUsn("");
    setError("");
  };

  return (
    <div className="panel add-student">
      <h2 className="add-title">Add Student</h2>

      <input
        placeholder="Student Name"
        value={name}
        onChange={e => {
            setName(e.target.value);
            setError("");
          }}
      />

      <input
        placeholder="USN (University Seat Number)"
        value={usn}
        onChange={e => {
            setUsn(e.target.value);
            setError("");
          }}
      />

      <button onClick={add}>Add</button>
      {/* Error Message */}
      {error && <p className="add-error">{error}</p>}
    
    </div>
  );
}
