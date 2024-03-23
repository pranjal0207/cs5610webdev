import React, { useState } from 'react';
import { FaCheckCircle, FaEllipsisV, FaPlusCircle, FaPlus, FaChevronDown, FaBook } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import { assignments } from "../../Database";
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import { useSelector, useDispatch } from "react-redux";
import {
  addAssignment,
  deleteAssignment,
  updateAssignment,
  setAssignment,
} from "./reducer";
import { KanbasState } from "../../store";

function Assignments() {
  const { courseId } = useParams();
  const intialAssignment =  {
    title: "New Assignment Title",
    course: "Assignment's Course",
    description: "New Description",
    points: "100",
    dueDate: "2023-09-18",
    availableFromDate: "2023-09-11",
    availableUntilDate: "2023-09-18",
  };

  const assignmentList = useSelector((state: KanbasState) => 
    state.assignmentsReducer.assignments);
  const assignment = useSelector((state: KanbasState) => 
    state.assignmentsReducer.assignment);
  const dispatch = useDispatch();

  const [value, setValue] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <>
      <div className="row top-bar">
        <div className="col-4">
          <input type="text" className="form-control" placeholder="Search for Assignment" onChange={handleChange}/>
        </div>
        <div className="col top-button-bar d-flex justify-content-end">
          <a> Group </a>
    
          {/* <a className = "red" onClick={() => dispatch(setAssignment(intialAssignment))}><FaPlus /> Assignment </a> */}

          <Link to={`/Kanbas/Courses/${courseId}/Assignments/new`}>
            <button
              type="submit"
              className="btn btn-danger float-end me-1 wd-kanbas-save-profile btn-danger" onClick={() => dispatch(setAssignment(intialAssignment))}>
              <i className="fa fa-plus"></i>  
              <span className="wd-left-margin-10" >Assignment</span>
            </button>
          </Link>
    
          <a> <FaEllipsisV className="me-2 custom" /> </a>
        </div>
      </div>

      <hr></hr>
      
      <ul className="list-group wd-assignments">
        <li className="list-group-item">
          <div>
            <FaEllipsisV className="me-2" /> ASSIGNMENTS
              <span className="float-end">
                <span className='percent-box'>
                  40% of total
                </span>
                  <FaCheckCircle className="text-success" />
                  <FaPlusCircle className="ms-2" /><FaEllipsisV className="ms-2" />
              </span>
          </div>
          <ul className="list-group">
            {/* {assignmentList.map((assignment) => (
              <li className="list-group-item">
                <FaEllipsisV className="me-2" />
                <FaBook className="me-2"/>
                <Link
                   to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}>{assignment.title}</Link>
                <span className="float-end">
                  <FaCheckCircle className="text-success" /><FaEllipsisV className="ms-2" /></span>
              </li>))} */}

            {assignmentList
            .filter(
                (assignment) => assignment.course === courseId)
              .map((assignment) => (
              <li className="list-group-item">
                
                <button
                  onClick={() => dispatch(setAssignment(assignment))}>
                  Edit
                </button>
              
                <button
                  onClick={() => dispatch(deleteAssignment(assignment._id))}>

                  Delete
                </button>

                <FaEllipsisV className="me-2" />
                <FaBook className="me-2"/>
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

