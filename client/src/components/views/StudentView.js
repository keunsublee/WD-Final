/*==================================================
StudentView.js

The Views component is responsible for rendering web page with data provided by the corresponding Container component.
It constructs a React component to display the single student view page.
================================================== */
import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const StudentView = ({ student, deleteStudent }) => {
  const history = useHistory();
  //const goback = history.push(`/students/${student.id}`)
if (!student) {
    return (
      <div>
        <p>. . . </p>
      </div>
    );
  }

  return (
    <div>
      <h1>Student Details</h1>
      <div>
        <h2>{`${student.firstname} ${student.lastname}`}</h2>
        <p><strong>Email:</strong> {student.email}</p>
        <p><strong>GPA:</strong> {student.GPA}</p>
        <p><img src={student.imageUrl} alt={student.name} /></p>

        {/* Display campus details if student is enrolled */}
        {student.campus ? (
          <div>
            <p><strong>Enrolled at campus:</strong> {student.campus.name}</p>
            <Link to={`/campus/${student.campus.id}`}><button>View Campus Details</button> </Link> {/* Navigate to Campus View */}
          </div>
        ) : (
          <p>This student is not enrolled at any campus.</p>
        )}
       <br/>
        <div>
          {/* Navigation to Edit Student View */}
          <Link to={`/editstudent/${student.id}`}>
          <button>Edit Student</button>   </Link>
        </div>
        <br/>
        {/* Delete student button */}
        <button onClick={() => deleteStudent(student.id)}>Delete Student</button>

        <br/>
      </div>
    </div>
  );
};
// <button onClick={() => goback} >Back to Student View</button>

export default StudentView;