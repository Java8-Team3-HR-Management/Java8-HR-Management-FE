import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const AdminRegister = () => {
  const onSubmit = (e) => {
    e.preventDefault();
    const admin = {
      companyId: 0,
      companyName: "",
      name:e.target.firstName.value,
      Surmname: e.target.lastName.value,
      email: e.target.email.value,
      password: e.target.password.value,
    };
    const rePassword = e.target.rePassword.value;
    console.log(admin);
    if (admin.password === rePassword) {
      axios
        .post("http://34.163.83.48/auth/createAdmin", admin)
        .then((res) => {
          console.log(res.data);
          console.log("İşlem başarılı");
        })
        .catch((error) => {
          // Hata durumları da ele alınabilir
          console.error(error);
        });
    } else {
      alert("Şifreler Uyuşmuyor.!!!");
    }
  };

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

              <form onSubmit={onSubmit}>
                <div className="form-group">
                  <label>Ad</label>
                  <input
                    className="form-control"
                    type="text"
                    name="firstName"
                  />
                </div>
                <div className="form-group">
                  <label>Soyad</label>
                  <input className="form-control" type="text" name="lastName" />
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input className="form-control" type="text" name="email" />
                </div>
                <div className="form-group">
                  <label>Şifre</label>
                  <input
                    className="form-control"
                    type="password"
                    name="password"
                  />
                </div>
                <div className="form-group">
                  <label>Şifre Tekrarı</label>
                  <input
                    className="form-control"
                    type="password"
                    name="rePassword"
                  />
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
