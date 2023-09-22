import axios from "axios";
import Cookies from "js-cookie";
import React, { useState, useEffect } from "react";
import jwt_decode from "jwt-decode";
import { Link, useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const navigate = useNavigate();
  const [emailValid, setEmailValid] = useState(true);
  const [passwordValid, setPasswordValid] = useState(true);
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const [loginError, setLoginError] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    // E-posta geçerliliği kontrolü
    const isEmailValid = isValidEmail(email);
    setEmailValid(isEmailValid);

    // Şifre uzunluğu kontrolü
    const isPasswordValid = password.length >= 8;
    setPasswordValid(isPasswordValid);

    if (!isEmailValid || !isPasswordValid) {
      // Geçersiz alanları işaretle
      return;
    }

    const login = {
      email: email,
      password: password,
    };

    axios
      .post("http://localhost/auth/login", login)
      .then((res) => {
        if (res.data.role === "ADMIN") {
          const token = res.data.token;
          Cookies.set("accessToken", token);
          const decode = jwt_decode(token);
          Cookies.set("decodeRole", decode.role);
          Cookies.set("decodeId", decode.id);
          
        setLoginError(false);
          setShowSuccessAlert(true);
        }
      })
      .catch((error) => {
        setLoginError(true);
        if (error.response) {
          // Sunucudan gelen hata yanıtını işleme devam et
          console.log("Sunucu Hata:", error.response.data);
        } else if (error.request) {
          // İstek yapılamadı hatasını işleme devam et
          console.log("İstek Hatası:", error.request);
        } else {
          // Diğer hataları işleme devam et

          console.log("Hata:", error.message);
        }
      });
  };

  // E-posta geçerliliği kontrolü işlevi
  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  useEffect(() => {
    if (showSuccessAlert) {
      setTimeout(() => {
        // İlerleme tamamlandığında yönlendirme işlemi
        navigate("/admin");
      }, 3000); // 3 saniye sonra yönlendir
    }
  }, [showSuccessAlert]);

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
                <div className={`form-group ${emailValid ? "" : "has-danger"}`}>
                  <label>Email Adresi</label>
                  <input
                    className={`form-control ${emailValid ? "" : "is-invalid"}`}
                    type="text"
                    name="email"
                  />
                  {!emailValid && (
                    <div className="invalid-feedback">
                      Geçerli bir e-posta adresi giriniz.
                    </div>
                  )}
                </div>
                <div
                  className={`form-group ${passwordValid ? "" : "has-danger"}`}
                >
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
                    className={`form-control ${
                      passwordValid ? "" : "is-invalid"
                    }`}
                    type="password"
                    name="password"
                  />
                  {!passwordValid && (
                    <div className="invalid-feedback">
                      Şifre en az 8 karakter olmalıdır.
                    </div>
                  )}
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
                {showSuccessAlert && (
                  <div className="alert alert-success" role="alert">
                    Başarılı giriş! Yönlendiriliyorsunuz...
                    <div className="progress">
                      <div
                        className="progress-bar progress-bar-striped progress-bar-animated"
                        role="progressbar"
                        style={{ width: "100%" }}
                      ></div>
                    </div>
                  </div>
                )}
                {loginError && (
                  <div className="alert alert-danger" role="alert">
                    Kullanıcı Adı veya Şifrenizi Kontorl Ediniz...!
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
