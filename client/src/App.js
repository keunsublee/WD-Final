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
} from './components/containers';
import AddCampusContainer from './components/containers/AddCampusContainer';
import EditCampusContainer from './components/containers/EditCampusContainer';

const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={HomePageContainer} />
        <Route exact path="/campuses" component={AllCampusesContainer} />
        <Route exact path="/campus/:id" component={CampusContainer} />
        <Route exact path="/students" component={AllStudentsContainer} />
        <Route exact path="/newstudent" component={NewStudentContainer} />
        <Route exact path="/add-campus" component={AddCampusContainer} />
        <Route exact path="/edit-campus/:id" component={EditCampusContainer} />
      </Switch>
    </div>
  );
}

export default App;
