📘 Student Attendance Management System

User Guide & Execution Steps

1️⃣ Download Project from Google Drive

Open the Google Drive link provided.

Click Download.

Wait for the download to complete.

2️⃣ Extract the Project (If ZIP File)

Go to the downloaded .zip file.

Right-click → Extract All.

Click Extract.

A new folder will be created (example):

student-management-system/

3️⃣ Open Project in Visual Studio Code

Open Visual Studio Code.

Click File → Open Folder.

Select the project folder.

4️⃣ Open Terminal in VS Code

In Visual Studio Code:

Press:

Ctrl + `

(backtick key below Esc)

OR

Click Terminal → New Terminal

5️⃣ Install Required Dependencies

This step is required only once.

In the terminal, run:

npm install

✔ It installs all required React dependencies.

6️⃣ Run the Project

After installation completes, run:

npm start

✔ The browser will open automatically

✔ If not, open browser and go to:

http://localhost:3000

7️⃣ Login Details

Use the following credentials to log in:

Username: admin
Password: admin

8️⃣ After Login – Application Overview

After successful login, the Student Attendance Dashboard will be displayed.

🔹 Sections Available in the Application

🟪 1. Add Student Section

Purpose:

To add new students to the system.

Fields:

Student Name

USN

Rules:

Duplicate USN is not allowed

Shows alert if USN already exists

Note: This application uses browser LocalStorage to store student and attendance data.
When the project is run for the first time on a new system, no student data will be visible.
Please add at least one student using the Add Student section to view and access other features such as:

Today’s Attendance

Student List

Student Details

Subject-wise Attendance and Calendar View 

🟦 2. Today’s Attendance Section (Top of Page)

Purpose:

To mark daily attendance for students.

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


🟨 3. Search Bar

Purpose:

To quickly find students.

Search by:

Student Name

USN

🟩 4. Student List Section

Purpose:

To view all students.

Features:

Alphabetically sorted list

Click anywhere on a student card to view details

Delete button to remove student

🟦 5. Student Details Section

Displayed when a student is selected.

Includes:

Subject-wise attendance percentage

Overall attendance percentage

Progress tubes for each subject

📅 6. Attendance Calendar View

Access:

Click on any subject tube

Features:

Monthly calendar

Year selection

Colored dots under dates:

🟢 Green → Present

🔴 Red → Absent

⚪ Gray → No Class

Large, centered date display

9️⃣ Data Storage

All data is stored using Browser LocalStorage

No backend/server required

Data persists even after page refresh

🔐 Logout & Re-Login

Refreshing the page will require login again

Login credentials remain the same

🛠️ Technologies Used

Frontend: React.js

Styling: Custom CSS (Responsive & Premium UI)

Storage: LocalStorage

Tools: Visual Studio Code, Node.js, npm

✅ Conclusion

This project demonstrates:

Complete CRUD functionality

Subject-wise attendance tracking

Calendar-based visualization

Responsive and user-friendly UI

Real-world attendance management workflow