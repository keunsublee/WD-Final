//FILLER CODE
import Header from './Header';
import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchCampusThunk, editCampusThunk } from "../../store/thunks";
import { EditCampusView } from "../views";

class EditCampusContainer extends Component {
  // Get campus data from back-end database
  componentDidMount() {
    //getting campus ID from url
    this.props.fetchcampus(this.props.match.params.id);
  }

  // Render campus view by passing campus data as props to the corresponding View component
  render() {
    return (
      <div>
        <Header />
        <EditCampusView campus={this.props.campus} />
      </div>
    );
  }
}

// The following 2 input arguments are passed to the "connect" function used by "campusContainer" to connect to Redux Store.  
// The following 2 input arguments are passed to the "connect" function used by "AllCampusesContainer" component to connect to Redux Store.
const mapState = (state) => {
  return {
    campus: state.campus,  // Get the State object from Reducer "campus"
  };
};
// 2. The "mapDispatch" argument is used to dispatch Action (Redux Thunk) to Redux Store.
// The "mapDispatch" calls the specific Thunk to dispatch its action. The "dispatch" is a function of Redux Store.
const mapDispatch = (dispatch) => {
  return {
    fetchcampus: (id) => dispatch(fetchCampusThunk(id)),
  };
};

// Export store-connected container by default
// campusContainer uses "connect" function to connect to Redux Store and to read values from the Store 
// (and re-read the values when the Store State updates).
export default connect(mapState, mapDispatch)(EditCampusContainer);