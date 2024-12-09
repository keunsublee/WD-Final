/*==================================================
NewCampusView.js

The Views component is responsible for rendering web page with data provided by the corresponding Container component.
It constructs a React component to display the new campus page.
================================================== */
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';


// const useStyles = makeStyles(() => ({
//   formContainer: {
//     width: '500px',
//     backgroundColor: '#f0f0f5',
//     borderRadius: '5px',
//     margin: 'auto',
//   },
//   title: {
//     flexGrow: 1,
//     textAlign: 'left',
//     textDecoration: 'none',
//   },
//   customizeAppBar: {
//     backgroundColor: '#11153e',
//     shadows: ['none'],
//   },
//   formTitle: {
//     backgroundColor: '#c5c8d6',
//     marginBottom: '15px',
//     textAlign: 'center',
//     borderRadius: '5px 5px 0px 0px',
//     padding: '3px',
//   },
// }));

const AddCampusView = (handleChange, handleSubmit, formData, errors) => {
  // const classes = useStyles();

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


export default AddCampusView;
