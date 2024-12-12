//INCOMPLETE
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { fetchCampusThunk, editCampusThunk, deleteCampusThunk } from '../../store/thunks';
import EditCampusView from '../views/EditCampusView';
import Header from './Header';


const EditCampusContainer = ({ campus, fetchCampus, editCampus, deleteCampus }) => {
  const { id } = useParams();
  const history = useHistory();
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    description: '',
    imageUrl: ''
  });

  useEffect(() => {
    if (campus) {
      setFormData({
        name: campus.name || '',
        address: campus.address || '',
        description: campus.description || '',
        imageUrl: campus.imageUrl || ''
      });
    }
  }, [campus]);


  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await editCampus(id, formData);
    history.push(`/campus/${id}`);
  };

  const handleDeleteCampus = async (campusId) => {
    await deleteCampus(campusId);
    history.push('/campuses'); // Redirect to the campuses page
  };


  return (
    <div>
      <Header />
      <EditCampusView 
        campus={campus}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        formData={formData}
        deleteCampus={handleDeleteCampus}
      />
    </div>
  );
};

const mapState = (state) => {
  return {
    campus: state.campus,
  };
};

const mapDispatch = (dispatch) => {
  return {
    fetchCampus: (id) => dispatch(fetchCampusThunk(id)),
    editCampus: (id, campus) => dispatch(editCampusThunk(id, campus)),
    deleteCampus: (id) => dispatch(deleteCampusThunk(id))
  };
};

// 2. The "mapDispatch" argument is used to dispatch Action (Redux Thunk) to Redux Store.
// The "mapDispatch" calls the specific Thunk to dispatch its action. The "dispatch" is a function of Redux Store.


// Export store-connected container by default
// campusContainer uses "connect" function to connect to Redux Store and to read values from the Store 
// (and re-read the values when the Store State updates).
export default connect(mapState, mapDispatch)(EditCampusContainer);