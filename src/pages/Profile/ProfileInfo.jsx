import axios from "axios";
import React, { useEffect, useState } from "react";

const ProfileInfo = ({ profile }) => {
  // Verileri state içinde tutun
  const [inputValue, setInputValue] = useState(profile.email);
  const [nameValue, setNameValue] = useState(profile.name);
  const [surnameValue, setSurnameValue] = useState(profile.surname);
  const [phoneValue, setPhoneValue] = useState(profile.phone);
  // Diğer alanlar için de state tanımlayabilirsiniz

  // Input alanının değeri değiştiğinde çağrılacak işlev
  const handleEmailChange = (event) => {
    const newValue = event.target.value;
    setInputValue(newValue);
  };

  const handleNameChange = (event) => {
    const newValue = event.target.value;
    setNameValue(newValue);
  };

  const handleSurnameChange = (event) => {
    const newValue = event.target.value;
    setSurnameValue(newValue);
  };
  const handlePhoneChange = (event) => {
    const newValue = event.target.value;
    setPhoneValue(newValue);
  };

  // onSubmit işlevini güncelleyin
  const onSubmit = (e) => {
    e.preventDefault();
    const id = profile.id;
    const profileInfo = {
      id: id,
      name: nameValue,
      surname: surnameValue,
      email: inputValue,
      phone: e.target.phone.value,
    };
    axios
      .put(
        `http://localhost:9092/api/v1/employee/employeeupdate`,
        profileInfo
      )
      .then((res) => {
        console.log(res.data);
        localStorage.setItem("username",nameValue+" "+ surnameValue);
        alert("İşlem Başarılı");
      })
      .catch((error) => {
        console.error(error);
      });
  };
  useEffect(() => {
    // profile.email değiştiğinde, inputValue'yi güncelliyoruz
    setNameValue(profile.name);
    setSurnameValue(profile.surname);
    setInputValue(profile.email);
    setPhoneValue(profile.phone)
  }, [profile]);

  
  return (
    <div id="profile_info" className="modal custom-modal fade" role="dialog">
      <div
        className="modal-dialog modal-dialog-centered modal-lg"
        role="document"
      >
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Profil Bilgileri</h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <div className="modal-body">
            <form onSubmit={onSubmit}>
              <div className="row">
                <div className="col-md-12">
                  <div className="profile-img-wrap edit-img">
                    <img
                      className="inline-block"
                      src="src/assets/img/profiles/avatar-02.jpg"
                      alt="user"
                    />
                    <div className="fileupload btn">
                      <span className="btn-text">edit</span>
                      <input className="upload" type="file" />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>Adı</label>
                        <input
                          type="text"
                          className="form-control"
                          value={nameValue}
                          name="name"
                          onChange={handleNameChange}
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>Soyadı</label>
                        <input
                          type="text"
                          className="form-control"
                          value={surnameValue}
                          name="surname"
                          onChange={handleSurnameChange}
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>Doğum Tarihi</label>
                        <div className="cal-icon">
                          <input
                            className="form-control datetimepicker"
                            type="text"
                            value={profile.birthDate}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>Mail</label>
                        <input
                          type="text"
                          className="form-control"
                          value={inputValue}
                          name="email" onChange={handleEmailChange}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <div className="form-group">
                    <label>Adres</label>
                    <input
                      type="text"
                      className="form-control"
                      value={profile.location}
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Telefon Numarası</label>
                    <input
                      type="text"
                      className="form-control"
                      value={phoneValue}
                      name="phone"
                      onChange={handlePhoneChange}
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label>
                      Departman <span className="text-danger">*</span>
                    </label>
                    <select className="select" value={profile.department}>
                      <option value="Departman Seç">Departman Seç</option>
                      <option value="Web Development">Web Development</option>
                      <option value="IT Management">IT Management</option>
                      <option value="Marketing">Marketing</option>
                    </select>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label>
                      Raporlar <span className="text-danger">*</span>
                    </label>
                    <select className="select">
                      <option>-</option>
                      <option value="">Wilmer Deluna</option>
                      <option value="">Lesley Grauer</option>
                      <option value="">Jeffery Lalor</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="submit-section">
                <button className="btn btn-primary submit-btn">Güncelle</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
