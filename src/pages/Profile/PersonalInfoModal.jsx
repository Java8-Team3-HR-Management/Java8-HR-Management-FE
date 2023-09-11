import React from "react";

const PersonalInfoModal = () => {
  return (
    <div id="personal_info_modal" className="modal custom-modal fade" role="dialog">
      <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Personel Bilgileri</h5>
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
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Pasaport Numarsı</label>
                    <input type="text" className="form-control" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Pasaport Bitiş Tarihi</label>
                    <div className="cal-icon">
                      <input className="form-control datetimepicker" type="text" />
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Tel</label>
                    <input className="form-control" type="text" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label>
                      Milliyet <span className="text-danger">*</span>
                    </label>
                    <input className="form-control" type="text" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Din</label>
                    <div className="cal-icon">
                      <input className="form-control" type="text" />
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label>
                      Evlilik Durumu <span className="text-danger">*</span>
                    </label>
                    <select className="select form-control">
                      <option>-</option>
                      <option>Bekar</option>
                      <option>Evli</option>
                    </select>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Eşin Çalışma Durumu</label>
                    <input className="form-control" type="text" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Çocuk Sayısı </label>
                    <input className="form-control" type="text" />
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

export default PersonalInfoModal;
