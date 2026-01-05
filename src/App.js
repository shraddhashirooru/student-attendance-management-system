import React, { useState } from "react";
import "./App.css";

import { subjects } from "./data";
import { loadStudents, saveStudents } from "./utils";

import AddStudent from "./components/AddStudent";
import StudentList from "./components/StudentList";
import StudentProfile from "./components/StudentProfile";
import SubjectAttendance from "./components/SubjectAttendance";
import SearchBar from "./components/SearchBar";

/* ===============================
    Login Component |
================================ */
function Login({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    if (username === "admin" && password === "admin") {
      onLogin();
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <h2 className="login-title">Student Management System</h2>
        <p className="login-subtitle">Admin Login</p>

        <input
          className="login-input"
          placeholder="Username"
          value={username}
          onChange={e => setUsername(e.target.value)}
        />

        <input
          className="login-input"
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />

        <button className="login-button" onClick={handleLogin}>
          Login
        </button>

        {error && <p className="login-error">{error}</p>}
      </div>
    </div>
  );
}

/* ===============================
   Main App
================================ */
export default function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [students, setStudents] = useState(loadStudents());
  const [selectedStudentId, setSelectedStudentId] = useState(null);
  const [search, setSearch] = useState("");

  /* Save Students to Local Storage */
  const updateStudents = updatedStudents => {
    setStudents(updatedStudents);
    saveStudents(updatedStudents);
  };

  /* Selected Student */
  const selectedStudent = students.find(
    s => s.id === selectedStudentId
  );

  /* Delete Student */
  const deleteStudent = id => {
    const filtered = students.filter(s => s.id !== id);
    updateStudents(filtered);

    if (id === selectedStudentId) {
      setSelectedStudentId(null);
    }
  };

  /* Login Screen */
  if (!loggedIn) {
    return <Login onLogin={() => setLoggedIn(true)} />;
  }

  /* DashBoard */
  return (
    <div className="app">
      <h2>Student Attendance Dashboard</h2>

      {/* Today's Attendance */}
      <SubjectAttendance
        students={students}
        subjects={subjects}
        updateStudents={updateStudents}
      />

      {/* Add Student Section */}
      <AddStudent
        students={students}
        updateStudents={updateStudents}
      />

      {/* Search */}
      <SearchBar setSearch={setSearch} />

      <div className="layout">
        {/* Student List */}
          <StudentList
          students={[...students]
            .sort((a, b) => a.name.localeCompare(b.name))
            .filter(
              s =>
                s.name.toLowerCase().includes(search) ||
                s.usn.toLowerCase().includes(search)
            )}
          onSelect={setSelectedStudentId}
          onDelete={deleteStudent}
        />


        {/* Student Details */}
        {selectedStudent && (
          <StudentProfile
            student={selectedStudent}
            subjects={subjects}
          />
        )}
      </div>

    </div>
  );
}
