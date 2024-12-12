import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { fetchAllCampusesThunk, editCampusThunk, deleteCampusThunk } from '../../store/thunks';
import { AllCampusesView } from '../views';
import Header from './Header';

const AllCampusesContainer = ({ allCampuses, fetchAllCampuses, editCampus, deleteCampus }) => {
  // Fetch all campuses data from the back-end database when the component mounts
  const history = useHistory();
  useEffect(() => {
    fetchAllCampuses();
  }, [fetchAllCampuses]);
  
  const handleDeleteCampus = async (studentId) => {
    await deleteCampus(studentId);
    history.push('/campuses'); // Redirect to the campuses page
  };

  const handleEditCampus = (campusId) => {
    history.push(`/campus/${campusId}`); 
  };


  return (
    <div>
      <Header />
      <AllCampusesView 
      allCampuses={allCampuses} 
      deleteCampus={handleDeleteCampus}  
      editCampus={handleEditCampus} 
      />
    </div>
  );
};

// The "mapState" argument specifies the data from Redux Store that the component needs.
// The "mapState" is called when the Store State changes, and it returns a data object of "allCampuses".
const mapState = (state) => {
  return {
    allCampuses: state.allCampuses,  // Get the State object from Reducer "allCampuses"
  };
};

// The "mapDispatch" argument is used to dispatch Action (Redux Thunk) to Redux Store.
// The "mapDispatch" calls the specific Thunk to dispatch its action. The "dispatch" is a function of Redux Store.
const mapDispatch = (dispatch) => {
  return {
    fetchAllCampuses: () => dispatch(fetchAllCampusesThunk()),
    editCampus: (campus) => dispatch(editCampusThunk(campus)),
    deleteCampus: (campusId) => dispatch(deleteCampusThunk(campusId)),
  };
};

// Type check props
AllCampusesContainer.propTypes = {
  allCampuses: PropTypes.array.isRequired,
  fetchAllCampuses: PropTypes.func.isRequired,
};

// Export store-connected container by default
// AllCampusesContainer uses "connect" function to connect to Redux Store and to read values from the Store 
// (and re-read the values when the Store State updates).
export default connect(mapState, mapDispatch)(AllCampusesContainer);
