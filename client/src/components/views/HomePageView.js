/*==================================================
HomePageView.js

The Views component is responsible for rendering web page with data provided by the corresponding Container component.
It constructs a React component to display the home page.
================================================== */
import { Link } from 'react-router-dom';

const HomePageView = () => {
  // Render Home page view
  return (
    <div>
      <div><h1>Home Page</h1></div>
      <div>
        <Link to={`/campuses`}>
          <button>All Campuses</button>
        </Link>
      </div>
      <div>
        <Link to={`/newcampus`}>
          <button>ADD Campus</button>
        </Link>
      </div>
      <div>
        <Link to={`/students`}>
          <button>All Students</button> {/* Changed the text here */}
        </Link>
      </div>
      <div>
        <Link to={`/newstudent`}>
          <button>ADD Student</button> {/* Changed the text here */}
        </Link>
      </div>
    </div> 
  );
};

export default HomePageView;