import { createContext, useState } from "react";

import axios from "../utls/axios";

let initState = {
  user: null,
  salarySlip: null,
  dateOfJoining: null,
  designation: null,
  department: null,
  office: null,
  dateOfBirth: null,
  education: null,
  receivedApplication: null,
  sentApplication: null,
  token: null,
};
let field = {
  user: "user",
  salarySlip: "salarySlip",
  dateOfJoining: "dateOfJoining",
  designation: "designation",
  department: "department",
  office: "office",
  dateOfBirth: "dateOfBirth",
  education: "education",
  receivedApplication: "receivedApplication",
  sentApplication: "sentApplication",
  token: "token",
};
export const UserContext = createContext({
  userState: initState,
  updateUserState: null,
  field: field,
  updateManyUserState: null,
  logout: null,
  login: null,
});

export const UserContextProvider = (props) => {
  const [userState, setUserState] = useState(initState);
  

  function updateUserState(field, value) {
    setUserState((state) => ({
      ...state,
      [field]: value,
    }));
  }
  function updateManyUserState(value) {
    setUserState((state) => ({
      ...state,
      ...value,
    }));
  }

  async function login(email, password) {
    try {
      const res = await axios.post("/user/login", {
        email,
        password,
      });
      localStorage.setItem("sih-token", res.data.token);
	
    } catch (err) {
      console.log(err);
    }
  }

  function logout() {
    localStorage.removeItem("sih-token");
    updateManyUserState({
      user: null,
      salarySlip: null,
      dateOfJoining: null,
      designation: null,
      department: null,
      office: null,
      dateOfBirth: null,
      education: null,
      receivedApplication: null,
      sentApplication: null,
      token: null,
    });
  }

  return (
    <UserContext.Provider
      value={{
        userState: userState,
        updateUserState,
        field,
        updateManyUserState,
        logout,
        login,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};
