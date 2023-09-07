import React, { useState } from "react";
import { Link } from "react-router-dom";

const AdminRegister = () => {
  return (
    <div className="main-wrapper">
      <div className="account-content">
        <Link to="/login" className="btn btn-primary apply-btn">
          Kullanıcı Girişi
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
                <div className="form-group text-center">
                  <button className="btn btn-primary account-btn" type="submit">
                    Kayıt Ol
                  </button>
                </div>
                <div className="account-footer">
                  <p>
                    Zaten bir admin hesabınız var mı ?{" "}
                    <Link to="/adminlogin">Giriş Yap</Link>
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

export default AdminRegister;
