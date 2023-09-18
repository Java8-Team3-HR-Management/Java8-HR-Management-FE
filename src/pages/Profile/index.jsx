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
  localStorage.setItem("username", profile.name + " " + profile.surname);
  useEffect(() => {
    axios
      .get(`http://localhost:8082/api/v1/user/getEmployeeByAuthId/${id}`)
      .then((res) => {
        setProfile(res.data);
        console.log(res.data);
      })
      .catch((error) => {
        console.error(error);
      });
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

          <BasicProfile profile={profile} />

          <div className="tab-content">
            <ProfileTab />
          </div>
          <ProfileInfo profile={profile} />

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
