import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Company from "./pages/Company";
import React from "react";
import Admin from "./pages/Admin";
import Employee from "./pages/Employee";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <React.Fragment>
          <Header />
          <SideBar />
        </React.Fragment>

        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/company" element={<Company />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/employee" element={<Employee />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
