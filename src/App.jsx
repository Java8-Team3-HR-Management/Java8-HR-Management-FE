import React, { useState, useEffect } from "react";
import { Routes } from "./routes";
import Cookies from "js-cookie";
import jwt_decode from "jwt-decode";
import axios from "axios";
import { useNavigate } from "react-router-dom";

/**
 * @todo  Company ID ye bak
 */
const App = () => {
  const navigate = useNavigate();
  var isAuthorized = false;
    const accessToken = Cookies.get("accessToken");
   if(accessToken){
    const decode = jwt_decode(accessToken);
    Cookies.set("decodeRole", decode.role);
    Cookies.set("decodeId", decode.id);
    axios
      .get(`http://localhost/user/getEmployeeByAuthId/${decode.id}`)
      .then((res) => {
        var user = res.data;
        Cookies.set("username", user.name + " " + user.surname);
        var a =  Cookies.set("companyName", user.companyName);
        Cookies.set("companyid", user.companyId);
        Cookies.set("authId", user.authId);
      })
      .catch((error) => {
        console.error(error);
      });
    if (decode?.exp < Date.now() / 1000) {
      Cookies.remove("accessToken");
      Cookies.remove("decodeRole");
      Cookies.remove("decodeId");
      isAuthorized = false;
      navigate("/login");
    }else{
      isAuthorized = true;
    }
   }
  return <Routes isAuthorized={isAuthorized} />;
};

export default App;
