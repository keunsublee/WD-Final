/*==================================================
CampusView.js
The Views component is responsible for rendering web page with data provided by the corresponding Container component.
It constructs a React component to display a single campus and its students (if any).
================================================== */
import { Link } from "react-router-dom";

// Take in props data to construct the component
const CampusView = ({ campus, addStudent, editStudent, deleteStudent, deleteCampus, editCampus }) => {
  if (!campus) {
    return (
      <div>
        <p>. . . </p>
      </div>
    );
  }
  // Render a single Campus view with list of its students
  return (
    <div>
      <h1>{campus.name}</h1>
      <p><strong>Address:</strong> {campus.address}</p>
      <p><strong>Description:</strong> {campus.description}</p>
      <p> <img src={campus.imageUrl} alt={campus.name} /></p>
      <h2>Students Enrolled</h2>
      {(campus.students.length === 0) ? ( <p>No students enrolled</p>
       ) : ( 
      campus.students.map( student => {
        let name = student.firstname + " " + student.lastname;
        return (
          <div key={student.id}>
            <Link to={`/student/${student.id}`}>
              <h2>{name}</h2>
            </Link>
            <button onClick={() => editStudent(student.id)}> Edit Student</button>  
            <button onClick={() => deleteStudent(student.id)}> Delete Student</button>
          </div>
        );
      })
       )}
       <br/><br/>
      <button onClick={() => addStudent()}> Add Student</button>
      <br/><br/>
      <button onClick={() => editCampus(campus.id)}> Edit Campus</button>
      <button onClick={() => deleteCampus(campus.id)}> Delete Campus</button>
    </div>
  );
};

export default CampusView;