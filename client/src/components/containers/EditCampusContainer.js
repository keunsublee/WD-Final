import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Redirect, useParams, useHistory } from 'react-router-dom';
import { fetchCampusThunk, editCampusThunk, deleteCampusThunk, fetchAllCampusesThunk } from '../../store/thunks';
import EditCampusView from '../views/EditCampusView';
import Header from './Header';

const EditCampusContainer = ({ campus, fetchCampus, editCampus, deleteCampus, fetchAllCampuses }) => {
  const { id } = useParams();
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

  useEffect(() => {
    fetchCampus(id);
  }, [fetchCampus, id]);

  useEffect(() => {
    if (campus) {
      setFormData({
        name: campus.name || '',
        address: campus.address || '',
        description: campus.description || '',
        imageUrl: campus.imageUrl || ''
      });
    }
  }, [campus]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await editCampus(id, formData);
    setRedirectId(id);
    setRedirect(true);
  };

  const handleDeleteCampus = async () => {
    await deleteCampus(id);
    fetchAllCampuses();
    history.push('/campuses');
  };

  if (redirect) {
    fetchAllCampuses();
    return <Redirect to={`/campus/${redirectId}`} />;
  }

  return (
    <div>
      <Header />
      <EditCampusView 
        campus={formData}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        formData={formData}
        deleteCampus={handleDeleteCampus}
      />
    </div>
  );
};

const mapState = (state) => {
  return {
    campus: state.campus,
  };
};

const mapDispatch = (dispatch) => {
  return {
    fetchCampus: (id) => dispatch(fetchCampusThunk(id)),
    editCampus: (id, formData) => dispatch(editCampusThunk(id, formData)),
    deleteCampus: (id) => dispatch(deleteCampusThunk(id)),
    fetchAllCampuses: () => dispatch(fetchAllCampusesThunk())
  };
};

export default connect(mapState, mapDispatch)(EditCampusContainer);
