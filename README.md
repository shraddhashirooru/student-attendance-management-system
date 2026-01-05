# <h1 align="center">Student Attendance Management System</h1>

The Student Attendance Management System is a web-based application built using React.js.
It allows administrators to manage student records, mark daily attendance, and view detailed attendance reports with a modern and user-friendly interface.

This project stores data using browser LocalStorage, making it lightweight and easy to run without any backend or database setup.

## Features

- 🔐 Secure Admin Login
- ➕ Add Students with Name & USN
- 🔍 Search Students by Name or USN
- 📋 Alphabetically Sorted Student List
- 🗓️ Mark Today’s Attendance (Present / Absent / No Class)
- 📊 Subject-wise Attendance Tracking
- 📅 Monthly Calendar View with Status Indicators
- 📈 Attendance Percentage Visualization
- 🗑️ Delete Student Records
- 📱 Fully Responsive UI (Desktop & Mobile)

## User Guide & Execution Steps

### 1️⃣ Clone the Repository

```
git clone https://github.com/your-username/student-attendance-management-system.git
cd student-attendance-management-system
```
### 2️⃣ Open Project in Visual Studio Code

Open Visual Studio Code

Click File → Open Folder

Select the project folder

Click Terminal → New Terminal

### 3️⃣ Install Required Dependencies

This step is required only once.

In the terminal, run:

```npm install```

It installs all required React dependencies.

### 4️⃣ Run the Project

After installation completes, run:

```npm start```

The browser will open automatically

If not, open browser and go to: ```http://localhost:3000```

### 5️⃣ Login Credentials

Username: admin

Password: admin

### 6️⃣ After Login – Application Overview

After successful login, the Student Attendance Dashboard will be displayed.

## Sections Available in the Application

#### Add Student Section

Purpose: 
To add new students to the system.

Fields:```Student Name``` ```USN```

Rules:
Duplicate USN is not allowed
Shows alert if USN already exists

Note: This application uses browser LocalStorage to store student and attendance data.
When the project is run for the first time on a new system, no student data will be visible.
Please add at least one student using the Add Student section to view and access other features such as:
Today’s Attendance, Student List, Student Details and Subject-wise Attendance and Calendar View 

#### Today’s Attendance Section (Top of Page)

Purpose: To mark daily attendance for students.

Features:

Select subject from dropdown

Select date (default = today)

Student list sorted alphabetically

Buttons:

Present (Green)

Absent (Red)

No Class (Gray – not counted in attendance)

Displayed Information:

Student Name

USN (University Seat Number)

#### Search Bar

Purpose: To quickly find students.

Search by:

Student Name

USN

#### Student List Section

Purpose: To view all students.

Features:

Alphabetically sorted list

Click anywhere on a student card to view details

Delete button to remove student

#### Student Details Section

Displayed when a student is selected.

Includes:

Subject-wise attendance percentage

Overall attendance percentage

Progress tubes for each subject

#### Attendance Calendar View

Access: Click on any subject tube

Features:

Monthly calendar

Year selection

Colored dots under dates:

🟢 Green → Present

🔴 Red → Absent

⚪ Gray → No Class

Large, centered date display

---

### Data Storage

All data is stored using Browser LocalStorage

No backend/server required

Data persists even after page refresh

### Logout & Re-Login

Refreshing the page will require login again

Login credentials remain the same

### Technologies Used

Frontend: React.js

Styling: Custom CSS (Responsive & Premium UI)

Storage: LocalStorage

Tools: Visual Studio Code, Node.js, npm

### Conclusion

This project demonstrates: Complete CRUD functionality, Subject-wise attendance tracking, Calendar-based visualization, Responsive and user-friendly UI and Real-world attendance management workflow
