import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Redirect, useHistory } from 'react-router-dom';
import Header from './Header';
import AddCampusView from '../views/AddCampusView';
import { addCampusThunk, fetchAllCampusesThunk } from '../../store/thunks';


const AddCampusContainer = ({ addCampus, fetchAllCampuses }) => {
  const [errors, setErrors] = useState({});
  const [redirect, setRedirect] = useState(false);
  const [redirectId, setRedirectId] = useState(null);
  const history = useHistory();
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    description: '',
    imageUrl: '',
    redirect: false,
    redirectId: null,
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let campus = {
      name: formData.name,
      address: formData.address,
      description: formData.description || '',
      imageUrl: formData.imageUrl,
    };

    let newCampus = await addCampus(campus);
    if (newCampus && newCampus.id) {
      setRedirectId(newCampus.id);
      setRedirect(true);
    }
  };

  if (redirect) {
    fetchAllCampuses();
    return <Redirect to={`/campus/${redirectId}`} />;
  }

  return (
    <div>
      <Header />
      <AddCampusView
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        formData={formData}
        //errors={errors}
      />
    </div>
  );
};

const mapDispatch = (dispatch) => {
  return {
    addCampus: (campus) => dispatch(addCampusThunk(campus)), // Add campus instead of student
    fetchAllCampuses: () => dispatch(fetchAllCampusesThunk())
  };
};

export default connect(null, mapDispatch)(AddCampusContainer);
