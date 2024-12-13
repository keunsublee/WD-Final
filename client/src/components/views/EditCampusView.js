import React from 'react';
import { Link } from 'react-router-dom';

const EditCampusView = ({ campus, deleteCampus, handleChange, handleSubmit  }) => {

  return (
    <div>
    <h1>Edit Campus Details</h1>
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={campus.name}
          onChange={handleChange}
        />
      </div>
      <br/>
      <div>
        <label htmlFor="address">Address:</label>
        <input
          type="text"
          id="address"
          name="address"
          value={campus.address}
          onChange={handleChange}
        />
      </div>
      <br/>
      <div>
        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          name="description"
          value={campus.description}
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
          value={campus.imageUrl}
          onChange={handleChange}
        />
      </div>
      <br/>
      <button type="submit">Save Changes</button>
      <br/> <br/>
    </form>
  
          {/* Delete campus button */}
          <button onClick={() => deleteCampus(campus.id)}>Delete Campus</button>
          <br/> <br/>

        {/* Navigation back to campuses */}
        <Link to="/campuses">Back to Campuses</Link>
      </div>
   
  );
};

export default EditCampusView;
