import { createContext, useEffect, useState } from "react";

import axios from "../utls/axios";

let initState = {
  name: null,
  avatar:null,
  email:null,
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
  id:null
};
let field = {
  id:"id",
  email:"email",
  name:"name",
  avatar:"avatar",
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
  console.log(userState)  ;

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

  async  function getUserDateFromToken(){
    try {
      const res = await axios.get('/user/verify');
      const res2 = await axios.get('/profile');
      updateManyUserState({...res2.data});
      updateUserState(field.name,res.data.user.name);
      updateUserState(field.email,res.data.user.email);
      updateUserState(field.id,res.data.user._id);
      updateUserState(field.token,res.data.token)
      updateUserState(field.token,localStorage.getItem('sih-token'));
    } catch (error) { 
      console.log(error);
    }
  }

  useEffect(()=>{
    if(localStorage.getItem('sih-token')){
      getUserDateFromToken();
    }
  },[])

  async function login(email, password) {
    try {
      const res = await axios.post("/user/login", {
        email,
        password,
      });
      localStorage.setItem("sih-token", res.data.token);
      updateUserState(field.name,res.data.user.name);
      updateUserState(field.email,res.data.user.email);
      updateUserState(field.id,res.data.user._id);
      updateUserState(field.token,res.data.token)
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
      id:null,
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
