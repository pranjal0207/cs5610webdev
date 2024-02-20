import React, { useState } from 'react';
import { FaCheckCircle, FaEllipsisV, FaPlusCircle, FaPlus, FaChevronDown } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import { assignments } from "../../Database";
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'

function Assignments() {
  const { courseId } = useParams();
  const assignmentList = assignments.filter(
    (assignment) => assignment.course === courseId);
  
  const [value, setValue] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <>
      <div className="row top-bar">
        <div className="col-4">
          <input type="text" className="form-control" placeholder="Search for Assignment" />
        </div>
        <div className="col top-button-bar d-flex justify-content-end">
          <a href="">Collapse All</a>
  
          <a href="">View Progress</a>
    
          <a href="">  <FaCheckCircle className="text-success" /> Publish All <FaChevronDown /> </a>
    
          <a className = "red" href=""><FaPlus /> Module</a>
    
          <a href=""><FaEllipsisV className="me-2 custom" /> </a>
        </div>
      </div>

      <hr></hr>
      
      <ul className="list-group wd-modules">
        <li className="list-group-item">
          <div>
            <FaEllipsisV className="me-2" /> ASSIGNMENTS
            <span className="float-end">
              <FaCheckCircle className="text-success" />
              <FaPlusCircle className="ms-2" /><FaEllipsisV className="ms-2" />
            </span>
          </div>
          <ul className="list-group">
            {assignmentList.map((assignment) => (
              <li className="list-group-item">
                <FaEllipsisV className="me-2" />
                <Link
                   to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}>{assignment.title}</Link>
                <span className="float-end">
                  <FaCheckCircle className="text-success" /><FaEllipsisV className="ms-2" /></span>
              </li>))}
          </ul>
        </li>
      </ul>
    </>
  );
}


export default Assignments;

