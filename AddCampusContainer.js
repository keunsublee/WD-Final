import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const AddCampusContainer = () => {
  const history = useHistory();
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    description: '',
    imageUrl: ''
  });

  const [errors, setErrors] = useState({});

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
    if (!data.name.trim()) newErrors.name = "Campus name is required.";
    if (!data.address.trim()) newErrors.address = "Address is required.";
    if (!data.description.trim()) newErrors.description = "Description is required.";
    if (data.imageUrl && !/^https?:\/\//.test(data.imageUrl)) {
      newErrors.imageUrl = "Invalid URL. Must start with 'http://' or 'https://'";
    }
    setErrors(newErrors);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Final validation
    if (Object.keys(errors).length === 0 && Object.values(formData).every(val => val.trim())) {
      alert("Campus added successfully!"); // Replace with actual backend submission logic
      history.push('/campuses');
    } else {
      alert("Please fix form errors before submitting.");
    }
  };

  return (
    <div>
      <h1>Add New Campus</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Campus Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <span style={{ color: 'red' }}>{errors.name}</span>}
        </div>
        <div>
          <label>Address:</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
          />
          {errors.address && <span style={{ color: 'red' }}>{errors.address}</span>}
        </div>
        <div>
          <label>Description:</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
          />
          {errors.description && <span style={{ color: 'red' }}>{errors.description}</span>}
        </div>
        <div>
          <label>Image URL:</label>
          <input
            type="text"
            name="imageUrl"
            value={formData.imageUrl}
            onChange={handleChange}
          />
          {errors.imageUrl && <span style={{ color: 'red' }}>{errors.imageUrl}</span>}
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddCampusContainer;
