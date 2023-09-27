import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import jwt_decode from "jwt-decode";

const Login = () => {
  const [role, setRole] = useState(false);
  const [emailValid, setEmailValid] = useState(true);
  const [passwordValid, setPasswordValid] = useState(true);
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const [loginError, setLoginError] = useState(false);
  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();

    // E-posta geçerliliği kontrolü
    const isEmailValid = isValidEmail(e.target.email.value);
    setEmailValid(isEmailValid);

    // Şifre uzunluğu kontrolü
    const isPasswordValid = e.target.password.value.length >= 8;
    setPasswordValid(isPasswordValid);

    if (!isEmailValid || !isPasswordValid) {
      // Geçersiz alanları işaretle
      return;
    }
    var login;
    if (!role) {
      login = {
        email: e.target.email.value,
        password: e.target.password.value,
      };
    } else {
      login = {
        companyMail: e.target.email.value,
        password: e.target.password.value,
      };
    }
    axios
      .post("http://localhost/auth/login", login)
      .then((res) => {
        console.log(res.data);
        const token = res.data.token;
        Cookies.set("accessToken", token);
        setLoginError(false);
        setShowSuccessAlert(true);

        setTimeout(() => {
          if (res.data.role === "EMPLOYEE") {
            navigate("/profile"); // Başarılı yanıt aldığınızda yönlendirme işlemi
          } else if (res.data.role === "MANAGER") {
            navigate("/company");
          } else if (res.data.role === "ADMIN") {
            navigate("/admin");
          } else if (res.data.role === "GUEST") {
            navigate("/review");
          } else {
            navigate("/calendar");
          }
        }, 3000); // 3 saniye sonra yönlendir
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
    const accessToken = Cookies.get("accessToken");
    if (accessToken) {
      const decode = jwt_decode(accessToken);

      if (decode?.exp > Date.now() / 1000) {
        if (decode.role === "EMPLOYEE") {
          navigate("/profile"); // Başarılı yanıt aldığınızda yönlendirme işlemi
        } else if (decode.role === "MANAGER") {
          navigate("/company");
        } else if (decode.role === "ADMIN") {
          navigate("/admin");
        } else {
          navigate("/calendar");
        }
      }
    }
  }, []);

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
                <div className=" form-check form-check-inline">
                  <div className="onoffswitch-custom">
                    <input
                      type="checkbox"
                      name="onoffswitch"
                      className="onoffswitch-checkbox-custom"
                      id="switch_sick"
                      onChange={(e) => setRole(!role)}
                      checked={role}
                    />
                    <label
                      className="onoffswitch-label-custom"
                      htmlFor="switch_sick"
                    >
                      <span className="onoffswitch-inner-custom"></span>
                      <span className="onoffswitch-switch-custom"></span>
                    </label>
                  </div>
                </div>
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
                    <Link to="/register">Kayıt Ol</Link>
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

export default Login;
