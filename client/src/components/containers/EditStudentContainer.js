import Header from './Header';
import React, { useEffect, useState } from "react";
import { useHistory, useParams } from 'react-router-dom';
import { connect } from "react-redux";
import { fetchStudentThunk, editStudentThunk, deleteStudentThunk } from "../../store/thunks";
import EditStudentView from '../views/EditStudentView';

const EditStudentContainer = ({ student, fetchStudent, editStudentThunk, deleteStudentThunk }) => {
  const { id } = useParams();
  const history = useHistory();

  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    gpa: 0,
    imageUrl: ''
  });

  useEffect(() => {
    fetchStudent(id);
  }, [fetchStudent, id]);

  useEffect(() => {
    if (student) {
      setFormData({
        firstname: student.firstname || '',
        lastname: student.lastname || '',
        email: student.email || '',
        gpa: student.gpa || '',
        imageUrl: student.imageUrl || ''
      });
    }
  }, [student]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await editStudentThunk(id, formData);
    history.push(`/students/${id}`); 
  };

  const handleDeleteStudent = async () => {
    await deleteStudentThunk(id);
    history.push('/students'); 
  };

  return (
    <div>
      <Header />
      <EditStudentView 
        student={formData} 
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        handleDeleteStudent={handleDeleteStudent}
      />
    </div>
  );
};

// Map state to props
const mapState = (state) => ({
  student: state.student, // Get the student data from Redux
});

// Map dispatch to props
const mapDispatch = (dispatch) => ({
  fetchStudent: (id) => dispatch(fetchStudentThunk(id)),
  editStudentThunk: (id, student) => dispatch(editStudentThunk(id, student)),
  deleteStudentThunk: (id) => dispatch(deleteStudentThunk(id)),
});

// Connect the component to the Redux store
export default connect(mapState, mapDispatch)(EditStudentContainer);
