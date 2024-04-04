import axios from "axios";

const BASE_API = process.env.REACT_APP_API_BASE;
const COURSES_API = `${BASE_API}/api/courses` ;
const MODULES_API = `${BASE_API}/api/modules`;

export const deleteModuled = async (moduleId: any) => {
  const response = await axios
    .delete(`${MODULES_API}/${moduleId}`);
  return response.data;
};

export const findModulesForCourse = async (courseId: any) => {
  const response = await axios
    .get(`${COURSES_API}/${courseId}/modules`);
  return response.data;
};

export const createModule = async (courseId: any, module: any) => {
    const response = await axios.post(
      `${COURSES_API}/${courseId}/modules`,
      module
    );
    return response.data;
  };

export const updateModuled = async (module: { _id: any; }) => {
    const response = await axios.
      put(`${MODULES_API}/${module._id}`, module);
    return response.data;
  };
  
  
