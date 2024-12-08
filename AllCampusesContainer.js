import React from "react";
import { Link } from "react-router-dom";

const AllCampusesContainer = ({ campuses = [] }) => { // Default campuses as an empty array
  return (
    <div>
      <h1>All Campuses</h1>
      {campuses.length === 0 ? (
        <p>No campuses found. Add a new campus!</p>
      ) : (
        <ul>
          {campuses.map((campus) => (
            <li key={campus.id}>{campus.name}</li>
          ))}
        </ul>
      )}
      
      {/* Link to the AddCampusContainer */}
      <Link to="/add-campus">
        <button>Add New Campus</button>
      </Link>
    </div>
  );
};

export default AllCampusesContainer;