/*==================================================
StudentView.js

The Views component is responsible for rendering web page with data provided by the corresponding Container component.
It constructs a React component to display the single student view page.
================================================== */
import React from 'react';
import { Link } from 'react-router-dom';

const StudentView = ({ student, deleteStudent }) => {
  if (!student) {
    return <p>Loading...</p>;  // Show loading text while student data is being fetched
  }

  return (
    <div>
      <h1>Student Details</h1>
      <div>
        <h2>{student.name}</h2>
        <p><strong>Email:</strong> {student.email}</p>
        <p><strong>Address:</strong> {student.address}</p>
        <p><strong>Description:</strong> {student.description}</p>
        <p><strong>Image:</strong> <img src={student.imageUrl} alt={student.name} /></p>

        {/* Display campus details if student is enrolled */}
        {student.campus ? (
          <div>
            <p><strong>Enrolled at campus:</strong> {student.campus.name}</p>
            <Link to={`/campus/${student.campus.id}`}>View Campus Details</Link> {/* Navigate to Campus View */}
          </div>
        ) : (
          <p>This student is not enrolled at any campus.</p>
        )}

        <div>
          {/* Navigation to Edit Student View */}
          <Link to={`/edit-student/${student.id}`}>Edit Student</Link>
        </div>

        {/* Delete student button */}
        <button onClick={() => deleteStudent(student.id)}>Delete Student</button>
      </div>
    </div>
  );
};

export default StudentView;