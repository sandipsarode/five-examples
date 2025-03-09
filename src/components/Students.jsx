// Example 4: Student List
const students = [
  { id: 1, name: "Alice", grade: "A", subjects: ["Math", "Science"] },
  { id: 2, name: "Bob", grade: "B", subjects: ["History", "English"] },
];

function Students() {
  return (
    <>
      {students.map((student) => (
        <div key={student.id}>
          <h2>Name: {student.name}</h2>
          <p>Grade: {student.grade}</p>
          <p>Subjects: {student.subjects.join(", ")}</p>
          <hr />
        </div>
      ))}
    </>
  );
}

export default Students;
