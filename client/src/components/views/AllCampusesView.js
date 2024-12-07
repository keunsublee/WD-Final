// src/components/views/AllCampusesView.js

import React from "react";
import PropTypes from "prop-types";

const AllCampusesView = ({ allCampuses }) => {
  return (
    <div>
      <h1>All Campuses</h1>
      {allCampuses.length === 0 ? (
        <p>No campuses found. Add a new campus!</p>
      ) : (
        <ul>
          {allCampuses.map((campus) => (
            <li key={campus.id}>{campus.name}</li>
          ))}
        </ul>
      )}
      <button onClick={() => alert("Add New Campus functionality will be implemented.")}>
        Add New Campus
      </button>
    </div>
  );
};

AllCampusesView.propTypes = {
  allCampuses: PropTypes.array.isRequired,
};

export default AllCampusesView;
