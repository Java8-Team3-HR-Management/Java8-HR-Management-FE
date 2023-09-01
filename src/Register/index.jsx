import React, { useState } from "react";

const Register = () => {
  const [company, setCompany] = useState(false);
  return (
    <div className="main-wrapper">
      <div className="account-content">
        <a href="job-list.html" className="btn btn-primary apply-btn">
          Admin Girişi
        </a>
        <div className="container">
          <div className="account-logo">
            <a href="index.html">
              <img
                src="src/assets/img/logo2.png"
                alt="Dreamguy's Technologies"
              />
            </a>
          </div>

          <div className="account-box">
            <div className="account-wrapper">
              <h3 className="account-title">Kayıt Ol</h3>

              <form action="index.html">
                <div className="form-group">
                  <label>Ad</label>
                  <input className="form-control" type="text" />
                </div>
                <div className="form-group">
                  <label>Soyad</label>
                  <input className="form-control" type="text" />
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input className="form-control" type="text" />
                </div>
                <div className="form-group">
                  <label>Şifre</label>
                  <input className="form-control" type="password" />
                </div>
                <div className="form-group">
                  <label>Şifre Tekrarı</label>
                  <input className="form-control" type="password" />
                </div>
                <div className=" form-check form-check-inline">
                  <input
                    className="  form-check-input checkBoxCss mb-3"
                    type="checkbox"
                    name="check"
                    onChange={(e) => setCompany(!company)}
                    checked={company}
                  />
                  <label className="form-check-label ">
                    {company ? "Ziyaretçi" : "Şirket"}
                  </label>
                </div>
                {company && (
                  <>
                    <div className="form-group">
                      <label>Şirket Adı</label>
                      <input className="form-control" type="password" />
                    </div>
                    <div className="form-group">
                      <label>Vergi Numarası</label>
                      <input className="form-control" type="password" />
                    </div>
                  </>
                )}
                <div className="form-group text-center">
                  <button className="btn btn-primary account-btn" type="submit">
                    Kayıt Ol
                  </button>
                </div>
                <div className="account-footer">
                  <p>
                    Already have an account? <a href="login.html">Login</a>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
