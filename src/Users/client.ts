import axios from "axios";
// export const BASE_API = process.env.REACT_APP_BASE_API_URL;
export const BASE_API = "https://kanbas-node-server-app-nolb.onrender.com";
export const USERS_API = `${BASE_API}/api/users`;

console.log(BASE_API);
export interface User { _id: string; username: string; password: string; role: string;
firstName: string, lastName: string };

const instance = axios.create({ withCredentials: true });

export const signup = async (user: { username: string; password: string; }) => {
  const response = await axios.post(`${USERS_API}/signup`, user);
  return response.data;
};

export const signin = async (credentials: User) => {
  const config = {
    headers: {
      "Access-Control-Allow-Credentials": true,
    },
  };
  const response = await instance.post( `${USERS_API}/signin`, credentials, config );
  return response.data;
};

export const profile = async (id:string, user:User) => {
    const config = {
      headers: {
        Cookie: `currentUser:${id}`,
      },
    };

    const response = await instance.post(`${USERS_API}/profile`, {"currentUser":user}, config);
    return response.data;
  };
  
 export const updateUser = async (user: any) => {
  const response = await axios.put(`${USERS_API}/${user._id}`, user);
  return response.data;
};

export const findAllUsers = async () => {
    const response = await axios.get(`${USERS_API}`);
    return response.data;
  };
  
export const createUser = async (user: any) => {
  const response = await axios.post(`${USERS_API}`, user);
  return response.data;
};

export const deleteUser = async (user: any) => {
  const response = await axios.delete(
    `${USERS_API}/${user._id}`);
  return response.data;
};

export const findUserById = async (id: string) => {
  const response = await axios.get(`${USERS_API}/${id}`);
  return response.data;
};

export const findUsersByRole = async (role: string) => {
  const response = await
    axios.get(`${USERS_API}?role=${role}`);
  return response.data;
};

export const signout = async () => {
  const response = await axios.post(`${USERS_API}/signout`);
  return response.data;
};