import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./toggle.css";
import axios from "axios";

const Register = () => {
  const navigate = useNavigate();
  const onSubmit = (e) => {
    e.preventDefault();

    
   const guest = {
    name: e.target.name.value,
    surname: e.target.surname.value,
    email: e.target.email.value,
    password: e.target.password.value,
    passwordConfirm: e.target.rePassword.value,
   }
    axios
      .post("http://localhost/auth/register", guest)
      .then((res) => {console.log(res.data);
       
          setTimeout(() => {
           alert("İşlem Başarılı");
              navigate("/login");
           
          }, 2000); // 2 saniye sonra yönlendir
        
      })
      .catch((error) => {
        // Hata durumları da ele alınabilir
        console.error(error);
      });
  };
  const [company, setCompany] = useState(false);
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
              <h3 className="account-title">Kayıt Ol</h3>

              <form onSubmit={onSubmit}>
                <div className=" form-check form-check-inline">
                  <div className="onoffswitch-custom">
                    <input
                      type="checkbox"
                      name="onoffswitch"
                      className="onoffswitch-checkbox-custom"
                      id="switch_sick"
                      onChange={(e) => setCompany(!company)}
                      checked={company}
                    />
                    <label
                      className="onoffswitch-label-custom"
                      htmlFor="switch_sick"
                    >
                      <span className="onoffswitch-inner-custom"></span>
                      <span className="onoffswitch-switch-custom"></span>
                    </label>
                  </div>

                  {/* <input
                    className="  form-check-input checkBoxCss mb-3"
                    type="checkbox"
                    name="check"
                    onChange={(e) => setCompany(!company)}
                    checked={company}
                  />
                  <label className="form-check-label ">
                    {company ? "Ziyaretçi" : "Şirket"}
                  </label> */}
                </div>
                {company && (
                  <>
                    <div className="form-group">
                      <label>Şirket Adı</label>
                      <input
                        className="form-control"
                        type="text"
                        name="companyName"
                      />
                    </div>
                    <div className="form-group">
                      <label>Vergi Numarası</label>
                      <input
                        className="form-control"
                        type="text"
                        name="taxNumber"
                      />
                    </div>
                    <div className="form-group">
                      <label>Şirket Adresi</label>
                      <input
                        className="form-control"
                        type="text"
                        name="companyAddress"
                      />
                    </div>
                  </>
                )}
                <div className="form-group">
                  <label>Ad</label>
                  <input className="form-control" type="text" name="name"/>
                </div>
                <div className="form-group">
                  <label>Soyad</label>
                  <input className="form-control" type="text" name="surname"/>
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input className="form-control" type="text" name="email"/>
                </div>
                <div className="form-group">
                  <label>Şifre</label>
                  <input className="form-control" type="password" name="password"/>
                </div>
                <div className="form-group">
                  <label>Şifre Tekrarı</label>
                  <input className="form-control" type="password" name="rePassword"/>
                </div>
                <div className="form-group text-center">
                  <button className="btn btn-primary account-btn" type="submit">
                    Kayıt Ol
                  </button>
                </div>
                <div className="account-footer">
                  <p>
                    Zaten bir hesabınız var mı ?{" "}
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

export default Register;
