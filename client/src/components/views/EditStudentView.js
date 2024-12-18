import React from 'react';
import { Link } from 'react-router-dom';

const EditStudentView = ({ original,  student, handleChange, handleSubmit, handleDeleteStudent }) => {

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
            required
          />
        </div>
        <br/>
        <div>
          <label htmlFor="lastname">Last Name:</label>
          <input
            type="text"
            id="lastname"
            name="lastname"
            value={student.lastname}
            onChange={handleChange}
            required
          />
        </div>
        <br/>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={student.email}
            onChange={handleChange}
            required
          />
        </div>
        <br/>
        <div>
          <label htmlFor="GPA">GPA:</label>
          <input
            id="GPA"
            name="GPA"
            min="0"       
            max="4" 
            value={student.GPA}
            onChange={handleChange}
          />
        </div>
        <br/>
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
        <br/>
        <button type="submit">Save Changes</button>
        <br/> <br/>
      </form>

      {/* Display campus details if student is enrolled */}
      {original.campus ? (
        <div>
          <p><strong>Enrolled at campus:</strong> {original.campus.name}</p>
          <Link to={`/campus/${original.campus.id}`}>View Campus Details</Link>
        </div>
      ) : (
        <p>This student is not enrolled at any campus.</p>
      )}
       <br/>
      <button onClick={handleDeleteStudent}>Delete Student</button>
    </div>
  );
};

export default EditStudentView;
