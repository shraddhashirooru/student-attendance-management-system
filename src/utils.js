export function loadStudents() {
  return JSON.parse(localStorage.getItem("students")) || [];
}

export function saveStudents(data) {
  localStorage.setItem("students", JSON.stringify(data));
}

export function exportCSV(subject, students) {
  let csv = "USN,Name,Date,Status\n";

  students.forEach(s => {
    const records = s.attendance?.[subject] || {};
    Object.keys(records).forEach(date => {
      csv += `${s.usn},${s.name},${date},${records[date]}\n`;
    });
  });

  const blob = new Blob([csv], { type: "text/csv" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = `${subject}_attendance.csv`;
  link.click();
}
