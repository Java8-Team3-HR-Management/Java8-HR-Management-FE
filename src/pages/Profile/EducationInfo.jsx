import React from "react";
import { Link } from "react-router-dom";

const EducationInfo = () => {
  return (
    <div id="education_info" className="modal custom-modal fade" role="dialog">
      <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title"> Eğitim Bilgileri</h5>
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
                      Eğitim Bilgileri{" "}
                      <Link to="#" className="delete-icon">
                        <i className="fa fa-trash-o"></i>
                      </Link>
                    </h3>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group form-focus focused">
                          <input
                            type="text"
                            value="Oxford University"
                            className="form-control floating"
                          />
                          <label className="focus-label">Kurum</label>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group form-focus focused">
                          <input
                            type="text"
                            value="Computer Science"
                            className="form-control floating"
                          />
                          <label className="focus-label">Ders</label>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group form-focus focused">
                          <div className="cal-icon">
                            <input
                              type="text"
                              value="01/06/2002"
                              className="form-control floating datetimepicker"
                            />
                          </div>
                          <label className="focus-label">Başlangıç Tarihi</label>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group form-focus focused">
                          <div className="cal-icon">
                            <input
                              type="text"
                              value="31/05/2006"
                              className="form-control floating datetimepicker"
                            />
                          </div>
                          <label className="focus-label">Bitiş Tarihi</label>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group form-focus focused">
                          <input
                            type="text"
                            value="BE Computer Science"
                            className="form-control floating"
                          />
                          <label className="focus-label">Derece</label>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group form-focus focused">
                          <input
                            type="text"
                            value="Grade A"
                            className="form-control floating"
                          />
                          <label className="focus-label">Seviye</label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="card">
                  <div className="card-body">
                    <h3 className="card-title">
                      Eğitim Bilgileri{" "}
                      <Link to="#" className="delete-icon">
                        <i className="fa fa-trash-o"></i>
                      </Link>
                    </h3>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group form-focus focused">
                          <input
                            type="text"
                            value="Oxford University"
                            className="form-control floating"
                          />
                          <label className="focus-label">Kurum</label>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group form-focus focused">
                          <input
                            type="text"
                            value="Computer Science"
                            className="form-control floating"
                          />
                          <label className="focus-label">Ders</label>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group form-focus focused">
                          <div className="cal-icon">
                            <input
                              type="text"
                              value="01/06/2002"
                              className="form-control floating datetimepicker"
                            />
                          </div>
                          <label className="focus-label">Başlangıç Tarihi</label>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group form-focus focused">
                          <div className="cal-icon">
                            <input
                              type="text"
                              value="31/05/2006"
                              className="form-control floating datetimepicker"
                            />
                          </div>
                          <label className="focus-label">Bitiş Tarihi</label>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group form-focus focused">
                          <input
                            type="text"
                            value="BE Computer Science"
                            className="form-control floating"
                          />
                          <label className="focus-label">Derece</label>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group form-focus focused">
                          <input
                            type="text"
                            value="Grade A"
                            className="form-control floating"
                          />
                          <label className="focus-label">Seviye</label>
                        </div>
                      </div>
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

export default EducationInfo;
