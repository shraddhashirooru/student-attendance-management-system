export default function StudentList({ students = [], onSelect, onDelete }) {
  return (
    <div className="panel student-list">
      <h2>Students</h2>

      {students.length === 0 && (
        <p className="muted">No students added</p>
      )}

      {students.map(student => (
        <div
          key={student.id}
          className="student-row"
          role="button"
          tabIndex={0}
          onClick={() => onSelect(student.id)}
          onKeyDown={e => {
            if (e.key === "Enter") onSelect(student.id);
          }}
        >
          <div className="student-info">
            <strong>{student.name}</strong>
            <div className="muted">{student.usn}</div>
          </div>

          <button
            className="delete"
            onClick={e => {
              e.stopPropagation();
              onDelete(student.id);
            }}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}
