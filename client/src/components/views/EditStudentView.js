import React from 'react';
import { Link } from 'react-router-dom';

const EditStudentView = ({ student, handleChange, handleSubmit, handleDeleteStudent }) => {

  return (
    <div>
      <h1>Edit Student Details</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="firstname">First Name:</label>
          <input
            type="text"
            id="firstname"
            name="firstname"
            value={student.firstname}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="lastname">Last Name:</label>
          <input
            type="text"
            id="lastname"
            name="lastname"
            value={student.lastname}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={student.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="GPA">GPA:</label>
          <textarea
            id="GPA"
            name="GPA"
            value={student.GPA}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="imageUrl">Image URL:</label>
          <input
            type="text"
            id="imageUrl"
            name="imageUrl"
            value={student.imageUrl}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Save Changes</button>
      </form>

      {/* Display campus details if student is enrolled */}
      {student.campus ? (
        <div>
          <p><strong>Enrolled at campus:</strong> {student.campus.name}</p>
          <Link to={`/campus/${student.campus.id}`}>View Campus Details</Link>
        </div>
      ) : (
        <p>This student is not enrolled at any campus.</p>
      )}

      <button onClick={handleDeleteStudent}>Delete Student</button>
    </div>
  );
};

export default EditStudentView;
