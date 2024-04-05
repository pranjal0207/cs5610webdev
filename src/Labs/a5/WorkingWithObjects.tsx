import React, { useEffect, useState } from "react";
import axios from "axios";
function WorkingWithObjects() {
  const [assignment, setAssignment] = useState({
    id: 1, title: "NodeJS Assignment",
    description: "Create a NodeJS server with ExpressJS",
    due: "2021-10-10", completed: false, score: 0,
  });
  const API_BASE = process.env.REACT_APP_API_BASE;
  const ASSIGNMENT_URL = `${API_BASE}/a5/assignment`;
  const [module, setModule] = useState({
    id: 2,
    name: "Test name",
    description: "Some description",
    course: "Test course"
  });
  const MODULE_URL = `${API_BASE}/a5/module`;
  const fetchAssignment = async () => {
    const response = await axios.get(`${ASSIGNMENT_URL}`);
    setAssignment(response.data);
  };
  const updateTitle = async () => {
    const response = await axios
      .get(`${ASSIGNMENT_URL}/title/${assignment.title}`);
    setAssignment(response.data);
  };
  useEffect(() => {
    fetchAssignment();
  }, []);

  return (
    <div>
      <h3>Working With Objects</h3>
      <h3>Modifying Properties</h3>
      <input onChange={(e) => setAssignment({
            ...assignment, title: e.target.value })}
        value={assignment.title} type="text" />
      <button onClick={updateTitle} >
        Update Title to: {assignment.title}
      </button>
      <button onClick={fetchAssignment} >
        Fetch Assignment
      </button>
      <h4>Modifying Properties</h4>
      <a href={`${ASSIGNMENT_URL}/title/${assignment.title}`} className="btn btn-primary" >
        Update Title
      </a>
      <input type="text" 
        onChange={(e) => setAssignment({ ...assignment,
            title: e.target.value })}
        value={assignment.title}/>
      <h4>Retrieving Objects</h4>
      <a href={`${API_BASE}/a5/assignment`} className="btn btn-primary">
        Get Assignment
      </a>
      <h4>Retrieving Properties</h4>
      <a href={`${API_BASE}/a5/assignment/title`} className="btn btn-primary">
        Get Title
      </a>
      <h4>Module</h4>
      <a href={`${API_BASE}/a5/module`} className="btn btn-primary">
        Get Module
      </a>
      <a href={`${API_BASE}/a5/module/name`} className="btn btn-primary">
        Get Module Name
      </a>
      <h4>Modifying Properties</h4>
      <a href={`${MODULE_URL}/name/${module.name}`} className="btn btn-primary">
        Update Module Name
      </a>
      <input type="text" 
        onChange={(e) => setModule({ ...module,
            name: e.target.value })}
        value={module.name}/>
      <h4>Modifying Score</h4>
      <a href={`${ASSIGNMENT_URL}/score/${assignment.score}`} className="btn btn-primary" >
        Update Score
      </a>
      <input type="text" 
        onChange={(e) => setAssignment({ ...assignment,
            score: parseInt(e.target.value) })}
        value={assignment.score}/>
      <h4>Modifying Completed</h4>
      <a href={`${ASSIGNMENT_URL}/completed/${assignment.completed}`} className="btn btn-primary">
        Update Completed
      </a>
      <input
        onChange={(e) => setAssignment({ ...assignment, completed: e.target.checked })
        }
        value={assignment.completed.toString()}
        type="checkbox"
      />
    </div>
  );
}
export default WorkingWithObjects;