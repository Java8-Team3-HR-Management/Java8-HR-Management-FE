import React from "react";
import { Link } from "react-router-dom";

const index = () => {
  return (
    <div className="header">
      <div className="header-left">
        <Link a to="/company" className="logo">
          <img src="src/assets/img/logo.png" width="40" height="40" alt="" />
        </Link>
      </div>

      <Link id="toggle_btn" to="/dashboard">
        <span className="bar-icon">
          <span></span>
          <span></span>
          <span></span>
        </span>
      </Link>

      <div className="page-title-box">
        <h3>İnsan Kaynakları Paneli</h3>
      </div>

      <Link id="mobile_btn" className="mobile_btn" to="#sidebar">
        <i className="fa fa-bars"></i>
      </Link>

      <ul className="nav user-menu">
        <li className="nav-item dropdown has-arrow main-drop">
          <Link
            to="#"
            className="dropdown-toggle nav-link"
            data-toggle="dropdown"
          >
            <span className="user-img">
              <img src="src/assets/img/profiles/avatar-21.jpg" alt="" />
            </span>
            <span>Admin</span>
          </Link>
          <div className="dropdown-menu">
            <Link className="dropdown-item" to="profile.html">
              <i className="la la-user"></i> <span>Profilim</span>
            </Link>
            <Link className="dropdown-item" to="settings.html">
              Ayarlar
            </Link>
            <Link className="dropdown-item" to="login.html">
              Çıkış
            </Link>
          </div>
        </li>
      </ul>
      <div className="dropdown mobile-user-menu">
        <Link
          to="#"
          className="nav-link dropdown-toggle"
          data-toggle="dropdown"
          aria-expanded="false"
        >
          <i className="fa fa-ellipsis-v"></i>
        </Link>
        <div className="dropdown-menu dropdown-menu-right">
          <Link className="dropdown-item" to="profile.html">
            <i className="la la-user"></i> <span>Profilim</span>
          </Link>
          <Link className="dropdown-item" to="settings.html">
            Ayarlar
          </Link>
          <Link className="dropdown-item" to="login.html">
            Çıkış
          </Link>
        </div>
      </div>
    </div>
  );
};

export default index;
