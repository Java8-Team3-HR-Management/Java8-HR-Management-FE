import React from "react";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  return (
    <div className="main-wrapper">
      <div className="account-content">
        <Link to="/adminlogin" className="btn btn-primary apply-btn">
          Admin Girişi
        </Link>
        <div className="container">
          <div className="account-logo">
            <Link to="#">
              <img
                src="src/assets/img/logo2.png"
                alt="Dreamguy's Technologies"
              />
            </Link>
          </div>

          <div className="account-box">
            <div className="account-wrapper">
              <h3 className="account-title">Şifremi Unuttum?</h3>
              <p className="account-subtitle">
                Şifre sıfırlamak için lütfen geçerli bir email giriniz.
              </p>

              <form>
                <div className="form-group">
                  <label>Email Adresiniz</label>
                  <input className="form-control" type="email" />
                </div>
                <div className="form-group text-center">
                  <button className="btn btn-primary account-btn" type="submit">
                    Şifreyi Sıfırla
                  </button>
                </div>
                <div className="account-footer">
                  <p>
                    Şifrenizi hatırlıyor musunuz?{" "}
                    <Link to="/login">Giriş Yap</Link>
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

export default ForgotPassword;
