import "./index.css";
import { FaEllipsisV, FaCheckCircle, FaPlusCircle, FaPlus, FaChevronDown } from "react-icons/fa";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
} from "./reducer";
import { KanbasState } from "../../store";

function ModuleList() {
  const { courseId } = useParams();
  const moduleList = useSelector((state: KanbasState) => 
    state.modulesReducer.modules);
  const module = useSelector((state: KanbasState) => 
    state.modulesReducer.module);
  const dispatch = useDispatch();
  return (
    <ul className="list-group">
      <li className="list-group-item">
        <button
          onClick={() => dispatch(addModule({ ...module, course: courseId }))}>
          Add
        </button>
        <button
          onClick={() => dispatch(updateModule(module))}>
          Update
        </button>
        <input
          value={module.name}
          onChange={(e) =>
            dispatch(setModule({ ...module, name: e.target.value }))
          }/>
        <textarea
          value={module.description}
          onChange={(e) =>
            dispatch(setModule({ ...module, description: e.target.value }))
          }/>
      </li>
      {moduleList
        .filter((module) => module.course === courseId)
        .map((module, index) => (
          <li key={index}
            className="list-group-item">
            <li key={index} className="list-group-item">
          <button
              onClick={() => dispatch(setModule(module))}>
              Edit
            </button>
            <button
              onClick={() => dispatch(deleteModule(module._id))}>
              Delete
            </button>
            <h3>{module.name}</h3>
            <p>{module.description}</p>
          </li>

            <div>
              <FaEllipsisV className="me-2" />
              {module.name}
              <span className="float-end">
                <FaCheckCircle className="text-success" />
                <FaPlusCircle className="ms-2" />
                <FaEllipsisV className="ms-2" />
              </span>
            </div>
            (
              <ul className="list-group">
                {module.lessons?.map((lesson: { name: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; }, index: React.Key | null | undefined) => (
                  <li className="list-group-item" key={index}>
                    <FaEllipsisV className="me-2" />
                    {lesson.name}
                    <span className="float-end">
                      <FaCheckCircle className="text-success" />
                      <FaEllipsisV className="ms-2" />
                    </span>
                  </li>
                ))}
              </ul>
            )
          </li>
        ))}
    </ul>
  );
}
export default ModuleList;