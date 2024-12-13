/*==================================================
NewStudentContainer.js

The Container component is responsible for stateful logic and data fetching, and
passes data (if any) as props to the corresponding View component.
If needed, it also defines the component's "connect" function.
================================================== */
import Header from './Header';
import { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import NewStudentView from '../views/NewStudentView';
import { addStudentThunk, fetchAllCampusesThunk, fetchCampusThunk } from '../../store/thunks';

class NewStudentContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      firstname: "", 
      lastname: "", 
      email: "",
      GPA: 0.0,
      imageUrl: "",
      campusId: null, 
      redirect: false, 
      redirectId: null,
      campuses: []
    };
  }

  componentDidMount() {
    this.props.fetchAllCampuses();
    this.props.fetchCampus();
  }
  fetchCampuses = async () => {
    try {
      const campuses = await this.props.fetchAllCampuses();
      this.setState({ campuses });
    } catch (error) {
      console.error("Failed to fetch campuses:", error);
    }
  };


  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit = async event => {
    event.preventDefault();  

    let student = {
        firstname: this.state.firstname,
        lastname: this.state.lastname,
        email: this.state.email,
        GPA: this.state.GPA,
        imageUrl: this.state.imageUrl,
        campusId: this.state.campusId
    };
    
      const gpa = parseFloat(this.state.GPA);
      if (isNaN(gpa) || gpa < 0 || gpa > 4) {
        alert("GPA must be between 0 and 4."); 
        return;
      }

 
    let newStudent = await this.props.addStudent(student);

    this.setState({
      firstname: "", 
      lastname: "", 
      email: "",
      GPA: "",
      imageUrl: "",
      campusId: null, 
      redirect: true, 
      redirectId: newStudent.id
    });
  }

  componentWillUnmount() {
      this.setState({redirect: false, redirectId: null});
  }

  render() {
    if(this.state.redirect) {
      return (<Redirect to={`/student/${this.state.redirectId}`}/>)
    }

    return (
      <div>
        <Header />
        <NewStudentView 
          handleChange = {this.handleChange} 
          handleSubmit={this.handleSubmit}      
        />
      </div>          
    );
  }
}

// The following input argument is passed to the "connect" function used by "NewStudentContainer" component to connect to Redux Store.
// The "mapDispatch" argument is used to dispatch Action (Redux Thunk) to Redux Store.
// The "mapDispatch" calls the specific Thunk to dispatch its action. The "dispatch" is a function of Redux Store.
const mapDispatch = (dispatch) => {
    return({
        addStudent: (student) => dispatch(addStudentThunk(student)),
        fetchCampus: () => dispatch(fetchCampusThunk()),
        fetchAllCampuses: () => dispatch(fetchAllCampusesThunk())
    })
}

// Export store-connected container by default
// NewStudentContainer uses "connect" function to connect to Redux Store and to read values from the Store 
// (and re-read the values when the Store State updates).
export default connect(null, mapDispatch)(NewStudentContainer);