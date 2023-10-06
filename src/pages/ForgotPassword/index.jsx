import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const ForgotPassword = () => {
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const [emailError, setEmailError] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    console.log(email);
    axios
      .post(`http://34.163.83.48/auth/forgot-password/${email}`)
      .then((res) => {
        console.log(res.data);
        setEmailError(false);
        setShowSuccessAlert(true);
      })
      .catch((error) => {
        setEmailError(true);
        if (error.response) {
          // Sunucudan gelen hata yanıtını işleme devam et
          console.log("Sunucu Hata:", error.response.data.message);
          //alert(error.response.data.message);
        } else if (error.request) {
          // İstek yapılamadı hatasını işleme devam et
          console.log("İstek Hatası:", error.request);
        } else {
          // Diğer hataları işleme devam et

          console.log("Hata:", error.message);
        }
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
              <h3 className="account-title">Şifremi Unuttum?</h3>
              <p className="account-subtitle">
                Şifre sıfırlamak için lütfen geçerli bir email giriniz.
              </p>

              <form onSubmit={onSubmit}>
                <div className="form-group">
                  <label>Email Adresiniz</label>
                  <input className="form-control" type="email" name="email" />
                </div>
                <div className="form-group text-center">
                  <button className="btn btn-primary account-btn" type="submit">
                    Şifreyi Maile Gönder
                  </button>
                </div>
                <div className="account-footer">
                  <p>
                    Şifrenizi hatırlıyor musunuz?{" "}
                    <Link to="/login">Giriş Yap</Link>
                  </p>
                </div>
                {showSuccessAlert && (
                  <div className="alert alert-success" role="alert">
                    Şİfreniz başarı ile mail adresinize gönderilmiştir.
                  </div>
                )}
                {emailError && (
                  <div className="alert alert-danger" role="alert">
                    Yazdığınız mail adresi sistemde bulunmamaktadır.
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

export default ForgotPassword;
