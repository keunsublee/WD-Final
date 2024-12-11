import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Header from './Header';
import AddCampusView from '../views/AddCampusView';
import { addCampusThunk } from '../../store/thunks';

const AddCampusContainer = ({ addCampus }) => {
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    description: '',
    imageUrl: '',
  });
  const [redirect, setRedirect] = useState(false);
  const [redirectId, setRedirectId] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    // Real-time validation
    validateForm({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = (data) => {
    const newErrors = {};
    if (!data.name.trim()) newErrors.name = 'Campus name is required.';
    if (!data.address.trim()) newErrors.address = 'Address is required.';
    if (!data.description.trim()) newErrors.description = 'Description is required.';
    if (data.imageUrl && !/^https?:\/\//.test(data.imageUrl)) {
      newErrors.imageUrl = "Invalid URL. Must start with 'http://' or 'https://'";
    }
    setErrors(newErrors);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Final validation
    if (Object.keys(errors).length === 0 && Object.values(formData).every((val) => val.trim())) {
      let campus = {
        name: formData.name,
        address: formData.address,
        description: formData.description,
        imageUrl: formData.imageUrl,
      };

      let newCampus = await addCampus(campus);
      setRedirectId(newCampus.id);
      setRedirect(true);
    } else {
      alert('Please fix form errors before submitting.');
    }
  };

  if (redirect) {
    return <Redirect to={`/campus/${redirectId}`} />; // Redirect to the newly created campus page
  }

  return (
    <div>
      <Header />
      <AddCampusView
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        formData={formData}
        errors={errors}
      />
    </div>
  );
};

const mapDispatch = (dispatch) => {
  return {
    addCampus: (campus) => dispatch(addCampusThunk(campus)), // Add campus instead of student
  };
};

export default connect(null, mapDispatch)(AddCampusContainer);