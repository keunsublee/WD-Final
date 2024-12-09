/*==================================================
FILLER 
================================================== */
import React from 'react';
import { Link } from 'react-router-dom';

const EditCampusView = ({ campus, deletecampus }) => {
  if (!campus) {
    return <p>Loading...</p>;  // Show loading text while campus data is being fetched
  }

  return (
    <div>
      <h1>Campus Details</h1>
      <div>
        <h2>{campus.name}</h2>
        <p><strong>Email:</strong> {campus.email}</p>
        <p><strong>Address:</strong> {campus.address}</p>
        <p><strong>Description:</strong> {campus.description}</p>
        <p><strong>Image:</strong> <img src={campus.imageUrl} alt={campus.name} /></p>

        {/* Display campus details if campus is enrolled */}
        {campus.campus ? (
          <div>
            <p><strong>Enrolled at campus:</strong> {campus.campus.name}</p>
            <Link to={`/campus/${campus.campus.id}`}>View Campus Details</Link> {/* Navigate to Campus View */}
          </div>
        ) : (
          <p>This campus is not enrolled at any campus.</p>
        )}

        <div>
          {/* Navigation to Edit campus View */}
          <Link to={`/editcampus/${campus.id}`}>Edit campus</Link>
        </div>

        {/* Delete campus button */}
        <button onClick={() => deletecampus(campus.id)}>Delete campus</button>
      </div>
    </div>
  );
};

export default EditCampusView;