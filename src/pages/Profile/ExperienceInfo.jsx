import React from "react";
import { Link } from "react-router-dom";

const ExperienceInfo = () => {
  return (
    <div id="experience_info" className="modal custom-modal fade" role="dialog">
      <div
        className="modal-dialog modal-dialog-centered modal-lg"
        role="document"
      >
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Deneyim Bilgileri</h5>
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
              <div className="form-scroll">
                <div className="card">
                  <div className="card-body">
                    <h3 className="card-title">
                      Deneyim Bilgileri{" "}
                      <Link to="#" className="delete-icon">
                        <i className="fa fa-trash-o"></i>
                      </Link>
                    </h3>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group form-focus">
                          <input
                            type="text"
                            className="form-control floating"
                            value="Digital Devlopment Inc"
                          />
                          <label className="focus-label">Şirket Adı</label>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group form-focus">
                          <input
                            type="text"
                            className="form-control floating"
                            value="United States"
                          />
                          <label className="focus-label">Lokasyon</label>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group form-focus">
                          <input
                            type="text"
                            className="form-control floating"
                            value="Web Developer"
                          />
                          <label className="focus-label">Pozisyon</label>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group form-focus">
                          <div className="cal-icon">
                            <input
                              type="text"
                              className="form-control floating datetimepicker"
                              value="01/07/2007"
                            />
                          </div>
                          <label className="focus-label">
                            Başlangıç Dönemi
                          </label>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group form-focus">
                          <div className="cal-icon">
                            <input
                              type="text"
                              className="form-control floating datetimepicker"
                              value="08/06/2018"
                            />
                          </div>
                          <label className="focus-label">Bitiş Dönemi</label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="card">
                  <div className="card-body">
                    <h3 className="card-title">
                      Deneyim Bilgileri{" "}
                      <Link to="#" className="delete-icon">
                        <i className="fa fa-trash-o"></i>
                      </Link>
                    </h3>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group form-focus">
                          <input
                            type="text"
                            className="form-control floating"
                            value="Digital Devlopment Inc"
                          />
                          <label className="focus-label">Şirket Adı</label>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group form-focus">
                          <input
                            type="text"
                            className="form-control floating"
                            value="United States"
                          />
                          <label className="focus-label">Lokoasyon</label>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group form-focus">
                          <input
                            type="text"
                            className="form-control floating"
                            value="Web Developer"
                          />
                          <label className="focus-label">Pozisyon</label>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group form-focus">
                          <div className="cal-icon">
                            <input
                              type="text"
                              className="form-control floating datetimepicker"
                              value="01/07/2007"
                            />
                          </div>
                          <label className="focus-label">
                            Başlangıç Dönemi
                          </label>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group form-focus">
                          <div className="cal-icon">
                            <input
                              type="text"
                              className="form-control floating datetimepicker"
                              value="08/06/2018"
                            />
                          </div>
                          <label className="focus-label">Bitiş Dönemi</label>
                        </div>
                      </div>
                    </div>
                    <div className="add-more">
                      <Link to="#">
                        <i className="fa fa-plus-circle"></i> Daha Fazla Ekle
                      </Link>
                    </div>
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

export default ExperienceInfo;
