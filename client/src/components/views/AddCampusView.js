
const AddCampusView = ({ handleChange, handleSubmit, formData }) => (
  <form onSubmit={handleSubmit}>
    <input 
      name="name" 
      placeholder="Name" 
      value={formData.name} 
      onChange={handleChange} 
      required
    />
      <br/>
      <br/>
    <input 
      name="address" 
      placeholder="Address" 
      value={formData.address} 
      onChange={handleChange} 
      required
    />
      <br/>
      <br/>
    <textarea 
      name="description" 
      placeholder="Description" 
      value={formData.description} 
      onChange={handleChange} 
      required
    />
      <br/>
      <br/>
    <input 
      name="imageUrl" 
      placeholder="Image URL" 
      value={formData.imageUrl} 
      onChange={handleChange} 
    />
      <br/>
      <br/>
    <button type="submit">Add Campus</button>
  </form>
);

export default AddCampusView;
