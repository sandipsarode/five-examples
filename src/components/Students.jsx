import { students } from "../data/studentsData";

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
