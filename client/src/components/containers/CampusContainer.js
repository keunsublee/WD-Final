import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import { fetchCampusThunk, fetchStudentThunk, addStudentThunk, editStudentThunk, deleteStudentThunk, deleteCampusThunk, editCampusThunk } from '../../store/thunks';

import { CampusView } from '../views';
import Header from './Header';
import { editStudent } from '../../store/actions/actionCreators';

const CampusContainer = ({ campus, fetchCampus, deleteStudent, deleteCampus, editCampus }) => {
  const { id } = useParams(); 
  const history = useHistory();

  // Fetch the specific campus data when the component mounts
  useEffect(() => {
    fetchCampus(id);
  }, [id, fetchCampus]);
  
  const handleDeleteCampus = async (campusId) => {
    await deleteCampus(campusId);
    history.push('/campuses'); // Redirect to the campuses page
  };

  // Handle edit action and redirect to the edit campus page
  const handleEditCampus = (campusId) => {
    history.push(`/editcampus/${campusId}`); // Redirect to the edit campus page
  };

  const handleAddStudent = () => {
    history.push('/addstudent');
  }

  const handleEditStudent = (studentId) => {
    history.push(`/editstudent/${studentId}`);
  }
  
  const handleDeleteStudent = async (studentId) => {
    await deleteStudent(studentId);
    fetchCampus(id);
  }

  return (
    <div>
      <Header />
      <CampusView 
      campus={campus} 
      deleteCampus={handleDeleteCampus} 
      editCampus={handleEditCampus}
      addStudent={handleAddStudent}
      editStudent={handleEditStudent}
      deleteStudent={handleDeleteStudent}
      />
    </div>
  );
};

// The following 2 input arguments are passed to the "connect" function used by "CampusContainer" component to connect to Redux Store.
// 1. The "mapState" argument specifies the data from Redux Store that the component needs.
// The "mapState" is called when the Store State changes, and it returns a data object of "campus".
const mapState = (state) => {
  return {
    campus: state.campus, // Get the State object from Reducer "campus"
  };
};

// 2. The "mapDispatch" argument is used to dispatch Action (Redux Thunk) to Redux Store.
// The "mapDispatch" calls the specific Thunk to dispatch its action. The "dispatch" is a function of Redux Store.
const mapDispatch = (dispatch) => {
  return {
    fetchCampus: (id) => dispatch(fetchCampusThunk(id)),
    fetchStudent: (id) => dispatch(fetchStudentThunk(id)),
    deleteStudent: (id) => dispatch(deleteStudentThunk(id)),
    deleteCampus: (id) => dispatch(deleteCampusThunk(id)),
    editCampus: (id) => dispatch(editCampusThunk(id)),
    addStudent: (student) => dispatch(addStudentThunk(student)),
    editStudent: (student) => dispatch(editStudentThunk(student)),
  };
};

// Export store-connected container by default
// CampusContainer uses "connect" function to connect to Redux Store and to read values from the Store 
// (and re-read the values when the Store State updates).
export default connect(mapState, mapDispatch)(CampusContainer);
