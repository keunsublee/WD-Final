import "./App.css";

//Router
import { Switch, Route } from "react-router-dom";
//Components
import {
  HomePageContainer,
  CampusContainer,
  StudentContainer,
  AllCampusesContainer,
  AllStudentsContainer,
  NewStudentContainer,
  AddCampusContainer,
  EditCampusContainer,
  EditStudentContainer
} from './components/containers';

const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={HomePageContainer} />
        <Route exact path="/campuses" component={AllCampusesContainer} />
        <Route exact path="/campus/:id" component={CampusContainer} />
        <Route exact path="/addcampus" component={AddCampusContainer} />
        <Route exact path="/students" component={AllStudentsContainer} />
        <Route exact path="/newstudent" component={NewStudentContainer} />
        <Route exact path="/student/:id" component={StudentContainer} />
        <Route exact path="/editcampus/:id" component={EditCampusContainer} />
        <Route exact path="/editstudent/:id" component={EditStudentContainer} />
      </Switch>        
    </div>
  );
}

export default App;
