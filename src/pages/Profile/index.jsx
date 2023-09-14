import React, { useEffect, useState } from "react";
import BasicProfile from "./BasicProfile";
import ProfileInfo from "./ProfileInfo";
import PersonalInfoModal from "./PersonalInfoModal";
import FamilyInfoModal from "./FamilyInfoModal";
import EmergencyContactModal from "./EmergencyContactModal";
import EducationInfo from "./EducationInfo";
import ExperienceInfo from "./ExperienceInfo";
import ProfileTab from "./ProfileTab";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";
import axios from "axios";

const Profile = () => {
  const role = Cookies.get("decodeRole");
  const id = Cookies.get("decodeId");

  const [profile, setProfile] = useState([]);
  useEffect(() => {
    if (role === "EMPLOYEE") {
      axios
        .get("http://localhost:9092/api/v1/employee/getById")
        .then((res) => {
          setProfile(res.data);
        })
        .catch((error) => {
          console.error(error);
        });
    } else if (role === "MANAGER") {
      axios
        .get("http://localhost:9094/api/v1/manager/getById")
        .then((res) => {
          setProfile(res.data);
        })
        .catch((error) => {
          console.error(error);
        });
    } else if (role === "ADMIN") {
      axios
        .get("http://localhost:9093/api/v1/admin/getById")
        .then((res) => {
          setProfile(res.data);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, []);
  return (
    <>
      <div className="page-wrapper">
        <div className="content container-fluid">
          <div className="page-header">
            <div className="row">
              <div className="col-sm-12">
                <h3 className="page-title">Profil</h3>
                <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="#">Dashboard</Link>
                  </li>
                  <li className="breadcrumb-item active">Profil</li>
                </ul>
              </div>
            </div>
          </div>

          <BasicProfile />

          <div className="tab-content">
            <ProfileTab />
          </div>
          <ProfileInfo />

          <PersonalInfoModal />

          <FamilyInfoModal />

          <EmergencyContactModal />

          <EducationInfo />

          <ExperienceInfo />
        </div>
      </div>
    </>
  );
};

export default Profile;
