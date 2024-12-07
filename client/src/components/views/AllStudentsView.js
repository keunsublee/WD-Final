import React from 'react';

const AllStudentsView = ({ students, deleteStudent }) => {
  return (
    <div>
      <h1>All Students</h1>
      <ul>
        {students.length === 0 ? (
          <p>No students found.</p>
        ) : (
          students.map((student) => (
            <li key={student.id}>
              <div>
                <h3>{student.name}</h3>
                <p>{student.address}</p>
                <p>{student.description}</p>
                <img src={student.imageUrl} alt={student.name} />
                <button onClick={() => deleteStudent(student.id)}>Delete</button>
              </div>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default AllStudentsView;
