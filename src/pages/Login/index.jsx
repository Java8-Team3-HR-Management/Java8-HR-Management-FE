import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
const Login = () => {
  const navigate = useNavigate();
  const onSubmit = (e) => {
    e.preventDefault();

    const login = {
      email: e.target.email.value,
      password: e.target.password.value,
    };

    axios
      .post("http://localhost/api/v1/auth/login", login, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          withCredentials: true,
          crossorigin: true,
          mode: "no-cors",
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Credentials": "true",
          "Access-Control-Allow-Methods":
            " GET, POST, PUT, DELETE, OPTIONS, HEAD",
        },
      })
      .then((res) => {
        const token = res.data.token;
        Cookies.set("accessToken", token);

        if (res.data.role === "EMPLOYEE") {
          navigate("/profile"); // Başarılı yanıt aldığınızda yönlendirme işlemi
        } else if (res.data.role === "MANAGER") {
          navigate("/company");
        } else if (res.data.role === "ADMIN") {
          navigate("/admin");
        } else {
          navigate("/calendar");
        }
      })
      .catch((error) => {
        // Hata durumları da ele alınabilir
        console.error(error);
      });
  };
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
              <h3 className="account-title">Giriş Yap</h3>
              <p className="account-subtitle">Sisteme Erişin</p>
              <form onSubmit={onSubmit}>
                <div className="form-group">
                  <label>Email Adresi</label>
                  <input className="form-control" type="text" name="email" />
                </div>
                <div className="form-group">
                  <div className="row">
                    <div className="col">
                      <label>Şifre</label>
                    </div>
                    <div className="col-auto">
                      <Link className="text-muted" to="#">
                        Şifremi Unuttum?
                      </Link>
                    </div>
                  </div>
                  <input
                    className="form-control"
                    type="password"
                    name="password"
                  />
                </div>
                <div className="form-group text-center">
                  <button className="btn btn-primary account-btn" type="submit">
                    Giriş Yap
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
