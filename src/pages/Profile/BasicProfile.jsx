import React from "react";
import { Link } from "react-router-dom";

const BasicProfile = () => {
  return (
    <div className="card mb-0">
      <div className="card-body">
        <div className="row">
          <div className="col-md-12">
            <div className="profile-view">
              <div className="profile-img-wrap">
                <div className="profile-img">
                  <Link to="#">
                    <img alt="" src="src/assets/img/profiles/avatar-02.jpg" />
                  </Link>
                </div>
              </div>
              <div className="profile-basic">
                <div className="row">
                  <div className="col-md-5">
                    <div className="profile-info-left">
                      <h3 className="user-name m-t-0 mb-0">John Doe</h3>
                      <h6 className="text-muted">UI/UX Design Team</h6>
                      <small className="text-muted">Web Designer</small>
                      <div className="staff-id">Employee ID : FT-0001</div>
                      <div className="small doj text-muted">
                        Giriş Tarihi : 1st Jan 2013
                      </div>
                    </div>
                  </div>
                  <div className="col-md-7">
                    <ul className="personal-info">
                      <li>
                        <div className="title">Telefon:</div>
                        <div className="text">
                          <Link to="">9876543210</Link>
                        </div>
                      </li>
                      <li>
                        <div className="title">Mail:</div>
                        <div className="text">
                          <Link to="">johndoe@example.com</Link>
                        </div>
                      </li>
                      <li>
                        <div className="title">Doğum Tarihi:</div>
                        <div className="text">24th July</div>
                      </li>
                      <li>
                        <div className="title">Adres:</div>
                        <div className="text">
                          1861 Bayonne Ave, Manchester Township, NJ, 08759
                        </div>
                      </li>
                      <li>
                        <div className="title">Cinsiyet:</div>
                        <div className="text">Male</div>
                      </li>
                      <li>
                        <div className="title">Raporlar:</div>
                        <div className="text">
                          <div className="avatar-box">
                            <div className="avatar avatar-xs">
                              <img
                                src="src/assets/img/profiles/avatar-16.jpg"
                                alt=""
                              />
                            </div>
                          </div>
                          <Link to="#">Jeffery Lalor</Link>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="pro-edit">
                <Link
                  data-target="#profile_info"
                  data-toggle="modal"
                  className="edit-icon"
                  to="#"
                >
                  <i className="fa fa-pencil"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BasicProfile;
