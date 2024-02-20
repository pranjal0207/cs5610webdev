import { courses } from "../../Kanbas/Database";
import { Navigate, Route, Routes, useParams, useLocation, Link } from "react-router-dom";
import { HiMiniBars3 } from "react-icons/hi2";
import CourseNavigation from "./Navigation";
import '../../index.css';

function Courses() {
  const { courseId } = useParams();
  const { pathname } = useLocation();
  const screenName = pathname.split('/').pop();

  const course = courses.find((course) => course._id === courseId);
  return (
    <div>
      <div className="navigation-bar mt-2">
        <nav className={`d-none d-md-block wd-breadcrumb`}>
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <HiMiniBars3 className="mx-3"
                style={{
                  color: '#b52828', fontSize: '24px'
                }}
              />
              <Link
                to={`/Kanbas/Courses/${courseId}`}
                style={{ color: '#b52828' }}
              >
                {course?.number} {course?.name}
              </Link>
            </li>
            <span style={{ color: 'grey'}} className="mx-2"> &gt; </span>
            <li className="breadcrumb-item active" aria-current="page">
              <Link to={pathname} style={{ color: 'black'}}>
                { screenName }
              </Link>
            </li>
          </ol>
        </nav>
        <hr style={{ marginLeft: '20px', marginRight: '20px' }} />
      </div>
      <CourseNavigation />
      <div>
        <div
          className="overflow-y-scroll bottom-0 end-0"
          style={{ left: "320px", top: "50px" }} >
          <Routes>
            <Route path="/" element={<Navigate to="Home" />} />
            <Route path="Home" element={<h1>Home</h1>} />
            <Route path="Modules" element={<h1>Modules</h1>} />
            <Route path="Piazza" element={<h1>Piazza</h1>} />
            <Route path="Assignments" element={<h1>Assignments</h1>} />
            <Route path="Assignments/:assignmentId" element={<h1>Assignment Editor</h1>} />
            <Route path="Grades" element={<h1>Grades</h1>} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
export default Courses;