import React, { useState, useEffect } from "react";
import { Routes } from "./routes";
import Cookies from "js-cookie";
import jwt_decode from "jwt-decode";
const App = () => {
  var isAuthorized = false;
    const accessToken = Cookies.get("accessToken");
   if(accessToken){
    const decode = jwt_decode(accessToken);
    Cookies.set("decodeRole", decode.role);
    Cookies.set("decodeId", decode.id);
    

    if (decode?.exp < Date.now() / 1000) {
      Cookies.remove("accessToken");
      Cookies.remove("decodeRole");
      Cookies.remove("decodeId");
      isAuthorized = false;
    }else{
      isAuthorized = true;
    }
   }
  return <Routes isAuthorized={true} />;
};

export default App;
