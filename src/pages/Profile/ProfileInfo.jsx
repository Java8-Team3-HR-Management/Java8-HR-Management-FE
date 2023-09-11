import React from "react";

const ProfileInfo = () => {
  return (
    <div id="profile_info" className="modal custom-modal fade" role="dialog">
      <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Profile Information</h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <div className="modal-body">
            <form>
              <div className="row">
                <div className="col-md-12">
                  <div className="profile-img-wrap edit-img">
                    <img
                      className="inline-block"
                      src="src/assets/img/profiles/avatar-02.jpg"
                      alt="user"
                    />
                    <div className="fileupload btn">
                      <span className="btn-text">edit</span>
                      <input className="upload" type="file" />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>Adı</label>
                        <input type="text" className="form-control" value="John" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>Soyadı</label>
                        <input type="text" className="form-control" value="Doe" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>Doğum Tarihi</label>
                        <div className="cal-icon">
                          <input
                            className="form-control datetimepicker"
                            type="text"
                            value="05/06/1985"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>Cinsiyet</label>
                        <select className="select form-control">
                          <option value="male selected">Erkek</option>
                          <option value="female">Kadın</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <div className="form-group">
                    <label>Adres</label>
                    <input
                      type="text"
                      className="form-control"
                      value="4487 Snowbird Lane"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label>State</label>
                    <input type="text" className="form-control" value="New York" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Ülke</label>
                    <input
                      type="text"
                      className="form-control"
                      value="United States"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Posta Kodu</label>
                    <input type="text" className="form-control" value="10523" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Telefon Numarası</label>
                    <input
                      type="text"
                      className="form-control"
                      value="631-889-3206"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label>
                      Departman <span className="text-danger">*</span>
                    </label>
                    <select className="select">
                      <option>Departman Seç</option>
                      <option>Web Development</option>
                      <option>IT Management</option>
                      <option>Marketing</option>
                    </select>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label>
                      Designation <span className="text-danger">*</span>
                    </label>
                    <select className="select">
                      <option>Select Designation</option>
                      <option>Web Designer</option>
                      <option>Web Developer</option>
                      <option>Android Developer</option>
                    </select>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label>
                      Raporlar <span className="text-danger">*</span>
                    </label>
                    <select className="select">
                      <option>-</option>
                      <option>Wilmer Deluna</option>
                      <option>Lesley Grauer</option>
                      <option>Jeffery Lalor</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="submit-section">
                <button className="btn btn-primary submit-btn">Gönder</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
