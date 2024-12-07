import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const AddCampusView = () => {
  const history = useHistory();

  // State for form data and errors
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    description: '',
    imageUrl: '',
  });
  
  const [errors, setErrors] = useState({
    name: '',
    address: '',
    description: '',
    imageUrl: '',
  });

  // Form field change handler
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Form submission handler with validation
  const handleSubmit = (e) => {
    e.preventDefault();

    let formErrors = {};

    // Basic validation
    if (!formData.name) formErrors.name = 'Campus name is required';
    if (!formData.address) formErrors.address = 'Address is required';
    if (!formData.description) formErrors.description = 'Description is required';
    if (!formData.imageUrl) formErrors.imageUrl = 'Image URL is required';

    if (Object.keys(formErrors).length === 0) {
      // If no errors, submit data
      console.log('Campus Data:', formData);

      // Navigate to campus list or home page after submission
      history.push('/campuses'); // Adjust route as needed
    } else {
      setErrors(formErrors);
    }
  };

  return (
    <div>
      <h1>Add New Campus</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          {errors.name && <p style={{ color: 'red' }}>{errors.name}</p>}
        </div>

        <div>
          <label>Address:</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          />
          {errors.address && <p style={{ color: 'red' }}>{errors.address}</p>}
        </div>

        <div>
          <label>Description:</label>
          <input
            type="text"
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
          />
          {errors.description && <p style={{ color: 'red' }}>{errors.description}</p>}
        </div>

        <div>
          <label>Image URL:</label>
          <input
            type="url"
            name="imageUrl"
            value={formData.imageUrl}
            onChange={handleChange}
            required
          />
          {errors.imageUrl && <p style={{ color: 'red' }}>{errors.imageUrl}</p>}
        </div>

        <button type="submit">Add Campus</button>
      </form>
    </div>
  );
};

export default AddCampusView;
