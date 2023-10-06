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
  const accessToken = Cookies.get("accessToken");
  const [profile, setProfile] = useState([]);
  const [debtAmount, setDebtAmount] = useState(0);
  const [vocationType, setVocationType] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const onSubmitAddDebt = (e) => {
    e.preventDefault();
    const a = e.target.requestedAmount.value;
    const debt = {
      requestedAmount: parseFloat(a),
      userId: profile.id,
    };
    axios
      .post(
        `http://34.163.83.48/debt/debt-request/${accessToken}`,
        debt
      )
      .then((res) => {
        alert("Talebiniz Başarı ile alınmıştır.");
      })
      .catch((error) => {
        if (error.response) {
          // Sunucudan gelen hata yanıtını işleme devam et
          console.log("Sunucu Hata:", error.response.data.message);
          alert(error.response.data.message);
        } else if (error.request) {
          // İstek yapılamadı hatasını işleme devam et
          console.log("İstek Hatası:", error.request);
          alert( error.request);
        } else {
          // Diğer hataları işleme devam et
          console.log("Hata:", error.message);
          alert( error.message);
        }
      });
  };

  const onSubmitAddVacation = (e) => {
    e.preventDefault();
    const startDateParts = e.target.startOfVocationDate.value.split("/");
    const endDateParts = e.target.endOfVocationDate.value.split("/");
    const startDate = new Date(
      startDateParts[2],
      startDateParts[1] - 1,
      startDateParts[0]
    );
    const endDate = new Date(
      endDateParts[2],
      endDateParts[1] - 1,
      endDateParts[0]
    );
    const vacation = {
      userId: profile.id,
      vocationType: e.target.vocationType.value,
      startOfVocationDate: startDate,
      endOfVocationDate: endDate,
    };
    axios
      .post(
        `http://34.163.83.48/vacation/create-vacation/${accessToken}`,
        vacation
      )
      .then((res) => {
        alert("Talebiniz Başarı ile alınmıştır.");
      })
      .catch((error) => {
        if (error.response) {
          // Sunucudan gelen hata yanıtını işleme devam et
          console.log("Sunucu Hata:", error.response.data.message);
          alert(error.response.data.message);
        } else if (error.request) {
          // İstek yapılamadı hatasını işleme devam et
          console.log("İstek Hatası:", error.request);
          alert( error.request);
        } else {
          // Diğer hataları işleme devam et
          console.log("Hata:", error.message);
          alert( error.message);
        }
      });
  };

  useEffect(() => {
    axios
      .get(`http://34.163.83.48/user/getEmployeeByAuthId/${id}`)
      .then((res) => {
        setProfile(res.data);
      })
      .catch((error) => {
        if (error.response) {
          // Sunucudan gelen hata yanıtını işleme devam et
          console.log("Sunucu Hata:", error.response.data.message);
          alert(error.response.data.message);
        } else if (error.request) {
          // İstek yapılamadı hatasını işleme devam et
          console.log("İstek Hatası:", error.request);
          alert( error.request);
        } else {
          // Diğer hataları işleme devam et
          console.log("Hata:", error.message);
          alert( error.message);
        }
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
              {role === "EMPLOYEE" && (
                <div className="col-auto float-right ml-auto">
                  <Link
                    to="#"
                    className="btn add-btn ml-2"
                    data-toggle="modal"
                    data-target="#add_leaves"
                  >
                    <i className="fa fa-plus"></i> İzin Talep
                  </Link>

                  <Link
                    to="#"
                    className="btn add-btn"
                    data-toggle="modal"
                    data-target="#add_debt"
                  >
                    <i className="fa fa-plus"></i> Avans Talep
                  </Link>
                </div>
              )}
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

          <div id="add_debt" className="modal custom-modal fade" role="dialog">
            <div className="modal-dialog modal-dialog-centered" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Avans Talep</h5>
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  <form onSubmit={onSubmitAddDebt}>
                    <div className="form-group">
                      <label>
                        Miktar <span className="text-danger">*</span>
                      </label>
                      <input
                        className="form-control"
                        type="number"
                        name="requestedAmount"
                        required
                      />
                    </div>
                    <div className="submit-section">
                      <button className="btn btn-primary submit-btn">
                        Talep Et
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div
            id="add_leaves"
            className="modal custom-modal fade"
            role="dialog"
          >
            <div className="modal-dialog modal-dialog-centered" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">İzin Talep</h5>
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  <form onSubmit={onSubmitAddVacation}>
                    <div className="form-group">
                      <label className="col-form-label">
                        Başlangıç Tarihi <span className="text-danger">*</span>
                      </label>
                      <div className="cal-icon">
                        <input
                          className="form-control datetimepicker"
                          type="text"
                          name="startOfVocationDate"
                          placeholder="GG/AA/YYYY"
                          required
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <label className="col-form-label">
                        Bitiş Tarihi <span className="text-danger">*</span>
                      </label>
                      <div className="cal-icon">
                        <input
                          className="form-control datetimepicker"
                          type="text"
                          name="endOfVocationDate"
                          placeholder="GG/AA/YYYY"
                          required                          
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <label>
                        Açıklama <span className="text-danger">*</span>
                      </label>
                      <textarea className="form-control" rows="4" name="vocationType" required></textarea>
                    </div>

                    <div className="submit-section">
                      <button className="btn btn-primary submit-btn">
                        Talep Et
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
