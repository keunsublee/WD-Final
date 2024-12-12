/*==================================================
StudentContainer.js

The Container component is responsible for stateful logic and data fetching, and
passes data (if any) as props to the corresponding View component.
If needed, it also defines the component's "connect" function.
================================================== */
import Header from './Header';
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchStudentThunk, deleteStudentThunk, editStudentThunk, fetchCampusThunk } from "../../store/thunks";
import { StudentView } from "../views";
import { useParams, useHistory } from "react-router-dom";

  const StudentContainer = ({ student, fetchStudent, deleteStudent, editStudent }) => {
    const { id } = useParams(); 
    const history = useHistory();
  
    // Fetch the specific campus data when the component mounts
    useEffect(() => {
      fetchStudent(id);
    }, [id, fetchStudent]);
    
    const handleDeleteStudent = async (studentId) => {
      await deleteStudent(studentId);
      history.push('/students'); // Redirect to the campuses page
    };
  
    const handleEditStudent = (studentId) => {
      history.push(`/editstudent/${studentId}`); 
    };
  
  
    return (
      <div>
        <Header />
        <StudentView 
        student={student} 
        deleteStudent={handleDeleteStudent} 
        editStudent ={handleEditStudent}/>
      </div>
    );
}

// The following 2 input arguments are passed to the "connect" function used by "StudentContainer" to connect to Redux Store.  
// The following 2 input arguments are passed to the "connect" function used by "AllCampusesContainer" component to connect to Redux Store.
const mapState = (state) => {
  return {
    student: state.student,  // Get the State object from Reducer "student"
  };
};
// 2. The "mapDispatch" argument is used to dispatch Action (Redux Thunk) to Redux Store.
// The "mapDispatch" calls the specific Thunk to dispatch its action. The "dispatch" is a function of Redux Store.
const mapDispatch = (dispatch) => {
  return {
    fetchStudent: (id) => dispatch(fetchStudentThunk(id)),
    deleteStudent: (id) => dispatch(deleteStudentThunk(id)),
    editStudent: (id) => dispatch(editStudentThunk(id)),
    fetchCampus: (id) => dispatch(fetchCampusThunk(id))
  };
};

// Export store-connected container by default
// StudentContainer uses "connect" function to connect to Redux Store and to read values from the Store 
// (and re-read the values when the Store State updates).
export default connect(mapState, mapDispatch)(StudentContainer);