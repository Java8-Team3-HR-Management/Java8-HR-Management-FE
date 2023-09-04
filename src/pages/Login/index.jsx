import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
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
              <h3 className="account-title">Giriş Yap</h3>
              <p className="account-subtitle">Sisteme Erişin</p>
              <form action="index.html">
                <div className="form-group">
                  <label>Email Adresi</label>
                  <input className="form-control" type="text" />
                </div>
                <div className="form-group">
                  <div className="row">
                    <div className="col">
                      <label>Şifre</label>
                    </div>
                    <div className="col-auto">
                      <a className="text-muted" href="forgot-password.html">
                        Şifremi Unuttum?
                      </a>
                    </div>
                  </div>
                  <input className="form-control" type="password" />
                </div>
                <div className="form-group text-center">
                  <button className="btn btn-primary account-btn" type="submit">
                    Login
                  </button>
                </div>
                <div className="account-footer">
                  <p>
                    Henüz bir hesabınız yok mu?{" "}
                    <Link to="/register">Kayıt Ol</Link>
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

export default Login;
