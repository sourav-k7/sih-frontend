import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

import axios from "../utls/axios";

let initState = {
  name: null,
  avatar: null,
  email: null,
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
  id: null,
};
let field = {
  id: "id",
  email: "email",
  name: "name",
  avatar: "avatar",
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
  documentAction: null,
});

export const UserContextProvider = (props) => {
  const [userState, setUserState] = useState(initState);
  console.log(userState);

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
  async function getUserProfile() {
    try {
      const res2 = await axios.get("/profile");
      updateManyUserState({ ...res2.data });
    } catch (error) {
      console.log(error);
      if(error.response){
        toast.error(error.response.data.errors[0].msg);
      }
    }
  }

  async function getUserDateFromToken() {
    try {
      const res = await axios.get("/user/verify");
      updateUserState(field.name, res.data.user.name);
      updateUserState(field.email, res.data.user.email);
      updateUserState(field.id, res.data.user._id);
      updateUserState(field.token, res.data.token);
      updateUserState(field.token, localStorage.getItem("sih-token"));
      getUserProfile();
    } catch (error) {
      console.log(error);
      if(error.response){
        toast.error(error.response.data.errors[0].msg);
      } 
    }
  }

  useEffect(() => {
    if (localStorage.getItem("sih-token")) {
      getUserDateFromToken();
    }
  }, []);

  async function login(email, password) {
    try {
      const res = await axios.post("/user/login", {
        email,
        password,
      });
      localStorage.setItem("sih-token", res.data.token);
      updateUserState(field.name, res.data.user.name);
      updateUserState(field.email, res.data.user.email);
      updateUserState(field.id, res.data.user._id);
      updateUserState(field.token, res.data.token);
      getUserProfile();
      toast.success(`Welcome ${res.data.user.name}`);
    } catch (err) {
      console.log(err);
      if (err.response) {
        toast.error(err.response.data.errors[0].msg);
      }
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
      id: null,
    });
  }

  async function documentAction(status, id) {
    try {
      const res = await axios.put("/application/status", {
        status,
        id,
      });
      updateUserState(
        field.receivedApplication,
        userState.receivedApplication.map((app) => {
          if (app._id == id) {
            app.status = status;
          }
          return app;
        })
      );
    } catch (error) {
      console.log(error);
      if(error.response){
        toast.error(error.response.data.errors[0].msg);
      }
    }
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
        documentAction,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};
