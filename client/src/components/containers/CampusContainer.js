import Header from './Header';
import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchCampusThunk } from "../../store/thunks";
import { CampusView } from "../views";

class CampusContainer extends Component {
  state = {
    loading: true, // Initialize loading state
    error: null,   // Initialize error state
  };

  componentDidMount() {
    // Get campus ID from URL (API link)
    this.props.fetchCampus(this.props.match.params.id)
      .then(() => {
        this.setState({ loading: false }); // Set loading to false once data is fetched
      })
      .catch((error) => {
        this.setState({ loading: false, error: error.message }); // Set error state if there's an issue
      });
  }

  render() {
    const { campus } = this.props;
    const { loading, error } = this.state;

    if (loading) {
      return <div>Loading...</div>; // Show loading indicator while fetching data
    }

    if (error) {
      return <div>Error: {error}</div>; // Show error message if there's a fetch error
    }

    if (!campus) {
      return <div>No campus data available</div>; // Show message if campus data is missing
    }

    return (
      <div>
        <Header />
        <CampusView campus={campus} />
      </div>
    );
  }
}

// The "mapState" argument specifies the data from Redux Store that the component needs
const mapState = (state) => {
  return {
    campus: state.campus,  // Get the State object from Reducer "campus"
  };
};

// The "mapDispatch" argument is used to dispatch Action (Redux Thunk) to Redux Store
const mapDispatch = (dispatch) => {
  return {
    fetchCampus: (id) => dispatch(fetchCampusThunk(id)),
  };
};

// Export store-connected container by default
export default connect(mapState, mapDispatch)(CampusContainer);
