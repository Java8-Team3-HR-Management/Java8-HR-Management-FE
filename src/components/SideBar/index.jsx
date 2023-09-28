import Cookies from "js-cookie";
import React from "react";
import { Link } from "react-router-dom";

const SideBar = () => {
  const role = Cookies.get("decodeRole");
  return (
    <div className="sidebar" id="sidebar">
      <div className="sidebar-inner slimscroll">
        <div id="sidebar-menu" className="sidebar-menu">
          <ul>
            {role === "ADMIN" ? (
              <>
                <li className="menu-title">
                  <span>Admin</span>
                </li>
                <li>
                  <Link className="active" to="/admin">
                    <i className="la la-columns"></i>{" "}
                    <span> Yönetici Paneli</span>{" "}
                  </Link>
                </li>
                <li>
                  <Link className="active" to="/add-company">
                    <i className="la la-building"></i> <span> Şirketler</span>{" "}
                  </Link>
                </li>
              </>
            ) : (
              ""
            )}
            {role === "ADMIN" || role === "MANAGER" ? (
              <>
                <li className="menu-title">Şirket</li>
                <li>
                  <Link className="active" to="/company">
                    <i className="la la-columns"></i>{" "}
                    <span> Şirket Paneli</span>{" "}
                  </Link>
                </li>

                <li>
                  <Link to="/employee">
                    <i className="la la-users"></i> <span> Çalışanlar</span>{" "}
                  </Link>
                </li>
              </>
            ) : (
              ""
            )}
           
            {role === "GUEST" ? (
              ""
            ) : (
              <>
               {<li className="menu-title">Şirket</li>}
                {role === "MANAGER" || role==="EMPLOYEE" ? (<li>
                  <Link to="/expense">
                    <i className="la la-money"></i> <span> Harcamalar</span>{" "}
                  </Link>
                </li>): ("")}
                <li>
                  <Link to="/profile">
                    <i className="la la-user"></i> <span>Profilim</span>
                  </Link>
                </li>
              </>
            )}
            <li className="menu-title">Takvim</li>
            <li>
              <Link to="/calendar">
                <i className="la la-calendar"></i> <span>Takvim</span>
              </Link>
            </li>
            <li className="menu-title">Yorum</li>
            <li>
              <Link to="/review">
                <i className="la la-comments"></i> <span>Şirket Yorumları</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
