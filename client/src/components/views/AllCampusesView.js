// src/components/views/AllCampusesView.js
import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const AllCampusesView = ({ allCampuses, deleteCampus, editCampus }) => {

  if (!allCampuses|| allCampuses.length === 0) {
    return (
      <div>
        <div>There are no campuses.</div>
        <div>
          <Link to={"/addcampus"}>
            <button>Add New Campus</button>
          </Link>
        </div>
      </div>
    );
  }
  
  return (
    <div>
    <h1>All Campuses</h1>
    {allCampuses.map((campus) => (
      <div key={campus.id}>
        <Link to={`/campus/${campus.id}`}>
          <h2>{campus.name}</h2>
        </Link>
        <h4>Campus ID: {campus.id}</h4>
        <p>{campus.address}</p>
        <p>{campus.description}</p>
        <br/>
        <button onClick={() => editCampus(campus.id)}>Edit Campus</button>
        <button onClick={() => deleteCampus(campus.id)}>Delete Campus</button>
        <hr/>
       
      </div>
    ))}
    <br />
    <Link to={"/addcampus"}>
      <button>Add New Campus</button>
    </Link>
    <br /><br />
  </div>
);
};

AllCampusesView.propTypes = {
  allCampuses: PropTypes.array.isRequired,
};

export default AllCampusesView;