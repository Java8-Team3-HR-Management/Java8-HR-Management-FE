import axios from "axios";
import Cookies from "js-cookie";
import React from "react";
import jwt_decode from "jwt-decode";
import { Link, useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const navigate = useNavigate();
  const onSubmit = (e) => {
    e.preventDefault();

    const login = {
      email: e.target.email.value,
      password: e.target.password.value,
    };

    axios
      .post("http://localhost/auth/login", login)
      .then((res) => {
        console.log(res.data);
        if (res.data.role === "ADMIN") {
          const token = res.data.token;
          Cookies.set("accessToken", token);
          const decode = jwt_decode(token);
          Cookies.set("decodeRole", decode.role);
          Cookies.set("decodeId", decode.id);
          console.log("decode id : ", decode.id);
          navigate("/admin");
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
              <h3 className="account-title">Admin Girişi</h3>
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
                      <Link className="text-muted" to="/forgotpassword">
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
                    Henüz bir admin hesabınız yok mu?{" "}
                    <Link to="/adminregister">Kayıt Ol</Link>
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

export default AdminLogin;
