import { FaEllipsisVertical, FaPlus, FaMinus } from "react-icons/fa6";
import './index.css'
import { Link, useParams } from "react-router-dom";

function AssignmentButtons() {
  const { courseId } = useParams();

  return (
    <div>
      <input
        className="form-control float-start"
        placeholder="Search for Assignment"
        style={{ width: "200px" }}
      />

      <a href={window.location.href}>
        <button type="submit" className="btn btn-light float-end">
          <FaEllipsisVertical className="fa fa-ellipsis-vertical mt-1"/>
        </button>
      </a>
      <Link to={`/Kanbas/Courses/${courseId}/Assignments/new`}>
        <button
          type="submit"
          className="btn kanbas-light-gray-bg float-end me-1 kanbas-save-profile btn-danger">
          <FaPlus className="mb-1 me-1"/>
          Assignment
        </button>
      </Link>
      <a href={window.location.href}>
        <button type="submit" className="btn btn-light float-end me-1">
          <FaPlus className="mb-1 me-1"/>
          Group
        </button>
      </a>
    </div>
  );
}
export default AssignmentButtons;