import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const AddCompany = () => {
  // State tanımlamaları
  const [companys, setCompanys] = useState([]);
  const [companyInfo, setCompanyInfo] = useState([]);
  const [count, setCount] = useState(0);

  const [formData, setFormData] = useState({
    companyName: "",
    companyEmail: "",
    companyPhone: "",
    companyAddress: "",
    companyWebsite: "",
    taxNumber: "",
  });

  const [managerFormData, setManagerFormData] = useState({
    name: "",
    surname: "",
    email: "",
    password: "",
    phone: "",
  });

  const [formErrors, setFormErrors] = useState({});
  const [showModal, setShowModal] = useState(false);

  // Modal işlemleri
  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  // Şirket ekleme işlemi
  const onSubmit = (e) => {
    e.preventDefault();

    const errors = validateForm(formData);
    if (Object.keys(errors).length === 0) {
      const company = {
        companyName: formData.companyName,
        companyEmail: formData.companyEmail,
        companyPhone: formData.companyPhone,
        companyAddress: formData.companyAddress,
        companyWebsite: formData.companyWebsite,
        taxNumber: formData.taxNumber,
        status: "APPROVED",
      };

      axios
        .post("http://localhost/company/add-company", company)
        .then((res) => {
          setCount(count + 1);
          handleCloseModal();
        });
    } else {
      setFormErrors(errors);
    }
  };

  // Şirket durumu değiştirme işlemi
  const handleStatusChange = (company, newStatus) => {
    const updatedCompany = { ...company, status: newStatus };
    axios
      .put(
        `http://localhost:8080/api/v1/company/update-company`,
        updatedCompany
      )
      .then((res) => {
        setCount(count + 1);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  // Form doğrulama işlemleri
  const validateManagerForm = () => {
    let errors = {};

    if (!managerFormData.name) {
      errors.name = "Adı zorunludur.";
    }

    if (!managerFormData.surname) {
      errors.surname = "Soyadı zorunludur.";
    }

    if (!managerFormData.email) {
      errors.email = "Email zorunludur.";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(managerFormData.email)
    ) {
      errors.email = "Geçerli bir email adresi giriniz.";
    }

    if (!managerFormData.password) {
      errors.password = "Şifre zorunludur.";
    } else if (managerFormData.password.length < 6) {
      errors.password = "Şifre en az 6 karakter uzunluğunda olmalıdır.";
    }

    if (!managerFormData.phone) {
      errors.phone = "Telefon zorunludur.";
    } else if (!/^\d{10}$/.test(managerFormData.phone)) {
      errors.phone = "Telefon numarası 10 haneli olmalıdır.";
    }

    return errors;
  };

  // Yönetici ekleme işlemi
  const onSubmitManager = (e) => {
    e.preventDefault();
    const errors = validateManagerForm();

    if (Object.keys(errors).length === 0) {
      // Doğrulama başarılıysa yönetici ekleme işlemi devam eder.
      const manager = {
        companyId: companyInfo.companyId,
        companyName: companyInfo.companyName,
        companyEmail: managerFormData.email,
        password: managerFormData.password,
        name: managerFormData.name,
        surname: managerFormData.surname,
        email: managerFormData.email,
        phone: managerFormData.phone,
      };

      axios.post("http://localhost/auth/createManager", manager).then((res) => {
        console.log(res.data);
        setCount(count + 1);
      });
    } else {
      setFormErrors(errors);
    }
  };

  // Form doğrulama işlemleri
  const validateForm = (data) => {
    let errors = {};
    if (!data.companyName) {
      errors.companyName = "Şirket adı zorunludur.";
    } else if (data.companyName.length < 8 || data.companyName.length > 64) {
      errors.companyName = "Şirket adı 8-64 karakter arasında olmalıdır.";
    }

    if (!data.companyEmail) {
      errors.companyEmail = "Şirket e-postası zorunludur.";
    }

    if (!data.companyPhone) {
      errors.companyPhone = "Şirket telefonu zorunludur.";
    } else if (data.companyPhone.length < 10 || data.companyPhone.length > 11) {
      errors.companyPhone =
        "Şirket telefonu 10-11 karakter arasında olmalıdır.";
    }

    if (!data.companyAddress) {
      errors.companyAddress = "Şirket adresi zorunludur.";
    } else if (
      data.companyAddress.length < 8 ||
      data.companyAddress.length > 200
    ) {
      errors.companyAddress =
        "Şirket adresi 8-200 karakter arasında olmalıdır.";
    }

    if (!data.companyWebsite) {
      errors.companyWebsite = "Şirket web sitesi zorunludur.";
    } else if (
      data.companyWebsite.length < 10 ||
      data.companyWebsite.length > 64
    ) {
      errors.companyWebsite =
        "Şirket web sitesi 10-64 karakter arasında olmalıdır.";
    }

    if (!data.taxNumber) {
      errors.taxNumber = "Vergi numarası zorunludur.";
    }

    return errors;
  };
  const handleSearch = (e) => {
    const searchTerm = e.target.value.toLowerCase();

    if (searchTerm === "") {
      axios.get(`http://localhost/company/get-all-company`).then((res) => {
        setCompanys(res.data);
      });
    } else {
      const filteredCompanys = companys.filter((company) =>
        company.companyName.toLowerCase().includes(searchTerm)
      );
      setCompanys(filteredCompanys);
    }
  };
  // Şirket verilerini çekme
  useEffect(() => {
    axios.get(`http://localhost/company/get-all-company`).then((res) => {
      setCompanys(res.data);
    });
  }, [count]);

  return (
    <div className="page-wrapper">
      <div className="content container-fluid">
        {/* Sayfa Başlığı ve Arama Filtresi (Search Filter) */}
        <div className="page-header">
          <div className="row align-items-center">
            <div className="col">
              <h3 className="page-title">Şirketler</h3>
              <ul className="breadcrumb">
                <li className="breadcrumb-item">
                  <Link to="/#">Panel</Link>
                </li>
                <li className="breadcrumb-item active">Şirketler</li>
              </ul>
            </div>
            <div className="col-auto float-right ml-auto">
              <Link
                to="#"
                className="btn add-btn"
                data-toggle="modal"
                data-target="#add_company"
                onClick={handleShowModal}
              >
                <i className="fa fa-plus"></i> Şirket Ekle
              </Link>
            </div>
          </div>
        </div>
        {/* /Sayfa Başlığı ve Arama Filtresi (Search Filter) */}

        {/* Arama Filtresi (Search Filter) */}
        <div className="row filter-row">
          <div className="col-sm-6 col-md-3">
            <div className="form-group form-focus">
              <input
                type="text"
                className="form-control floating"
                placeholder="Şirket Adı"
                onChange={handleSearch}
              />
              <label className="focus-label">Şirket Adı</label>
            </div>
          </div>
        </div>
        {/* /Arama Filtresi (Search Filter) */}

        {/* Şirket Listesi */}
        <div className="row">
          <div className="col-md-12">
            <div className="table-responsive">
              <table className="table table-striped custom-table datatable">
                <thead>
                  <tr>
                    <th>Adı</th>
                    <th>Vergi Numarası</th>
                    <th>Telefon</th>
                    <th>Email</th>
                    <th>Web Site</th>
                    <th>Adres</th>
                    <th>Durum</th>
                    <th>Yönetici Ekle</th>
                  </tr>
                </thead>
                <tbody>
                  {companys.map((company) => {
                    return (
                      <tr key={company.id}>
                        <td>{company.companyName}</td>
                        <td>{company.taxNumber}</td>
                        <td>{company.companyPhone}</td>
                        <td>{company.companyEmail}</td>
                        <td>{company.companyWebsite}</td>
                        <td>{company.companyAddress}</td>
                        <td>
                          <div className="dropdown">
                            <button
                              className={`btn btn-sm btn-rounded dropdown-toggle ${
                                company.status === "APPROVED"
                                  ? "btn-success"
                                  : "btn-danger"
                              }`}
                              data-toggle="dropdown"
                              aria-expanded="false"
                            >
                              {company.status === "APPROVED"
                                ? "Aktif"
                                : "Pasif"}
                            </button>
                            <div className="dropdown-menu">
                              <button
                                className="dropdown-item"
                                onClick={() =>
                                  handleStatusChange(company, "APPROVED")
                                }
                              >
                                Aktif
                              </button>
                              <button
                                className="dropdown-item"
                                onClick={() =>
                                  handleStatusChange(company, "PENDING")
                                }
                              >
                                Pasif
                              </button>
                            </div>
                          </div>
                        </td>
                        <td>
                          <Link
                            to="#"
                            className="btn btn-white btn-sm btn-rounded"
                            data-toggle="modal"
                            data-target="#add_manager"
                            onClick={() =>
                              setCompanyInfo({
                                companyId: company.id,
                                companyName: company.companyName,
                              })
                            }
                          >
                            <i className="fa fa-plus"></i> Yönetici Ekle
                          </Link>
                        </td>
                        <td className="text-right">
                          <div className="dropdown dropdown-action">
                            <Link
                              to="#"
                              className="action-icon dropdown-toggle"
                              data-toggle="dropdown"
                              aria-expanded="false"
                            >
                              <i className="material-icons">more_vert</i>
                            </Link>
                            <div className="dropdown-menu dropdown-menu-right">
                              <Link
                                className="dropdown-item"
                                to="#"
                                data-toggle="modal"
                                data-target="#edit_employee"
                              >
                                <i className="fa fa-pencil m-r-5"></i> Edit
                              </Link>
                              <Link
                                className="dropdown-item"
                                to="#"
                                data-toggle="modal"
                                data-target="#delete_employee"
                              >
                                <i className="fa fa-trash-o m-r-5"></i> Delete
                              </Link>
                            </div>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        {/* /Şirket Listesi */}
      </div>

      {/* Şirket Ekle Modal */}
      <div id="add_company" className="modal custom-modal fade" role="dialog">
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Şirket Ekle</h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
                onClick={handleCloseModal}
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form onSubmit={onSubmit}>
                <div className="row">
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label className="col-form-label">
                        Şirket Adı <span className="text-danger">*</span>
                      </label>
                      <input
                        className="form-control"
                        type="text"
                        name="companyName"
                        value={formData.companyName}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            companyName: e.target.value,
                          })
                        }
                      />
                      {formErrors.companyName && (
                        <span className="text-danger">
                          {formErrors.companyName}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="col-sm-6">
                    <div className="form-group">
                      <label className="col-form-label">
                        Mail <span className="text-danger">*</span>
                      </label>
                      <input
                        className="form-control"
                        type="email"
                        name="companyEmail"
                        value={formData.companyEmail}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            companyEmail: e.target.value,
                          })
                        }
                      />
                      {formErrors.companyEmail && (
                        <span className="text-danger">
                          {formErrors.companyEmail}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="col-sm-6">
                    <div className="form-group">
                      <label className="col-form-label">
                        Telefon <span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        name="companyPhone"
                        value={formData.companyPhone}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            companyPhone: e.target.value,
                          })
                        }
                      />
                      {formErrors.companyPhone && (
                        <span className="text-danger">
                          {formErrors.companyPhone}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label className="col-form-label">
                        Website <span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        name="companyWebsite"
                        value={formData.companyWebsite}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            companyWebsite: e.target.value,
                          })
                        }
                      />
                      {formErrors.companyWebsite && (
                        <span className="text-danger">
                          {formErrors.companyWebsite}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label className="col-form-label">
                        Vergi Numarası <span className="text-danger">*</span>
                      </label>
                      <input
                        type="number"
                        className="form-control"
                        name="taxNumber"
                        value={formData.taxNumber}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            taxNumber: e.target.value,
                          })
                        }
                      />
                      {formErrors.taxNumber && (
                        <span className="text-danger">
                          {formErrors.taxNumber}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label className="col-form-label">Adres</label>
                      <textarea
                        className="form-control"
                        rows="4"
                        cols="50"
                        name="companyAddress"
                        value={formData.companyAddress}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            companyAddress: e.target.value,
                          })
                        }
                      />
                      {formErrors.companyAddress && (
                        <span className="text-danger">
                          {formErrors.companyAddress}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
                <div className="submit-section">
                  <button className="btn btn-primary submit-btn">
                    Şirket Ekle
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/*<!-- Edit Company Modal -->*/}
      <div id="edit_employee" className="modal custom-modal fade" role="dialog">
        {/* Edit Company Modal içeriği */}
      </div>
      {/* <!-- /Edit Company Modal -->*/}

      {/* <!-- Delete Company Modal -->*/}
      <div
        className="modal custom-modal fade"
        id="delete_company"
        role="dialog"
      >
        {/* Delete Company Modal içeriği */}
      </div>
      {/* <!-- /Delete Company Modal -->*/}

      {/* Add Manager Modal */}
      <div id="add_manager" className="modal custom-modal fade" role="dialog">
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Yönetici Ekle</h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form onSubmit={onSubmitManager}>
                <div className="row">
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label className="col-form-label">
                        Adı <span className="text-danger">*</span>
                      </label>
                      <input
                        className={`form-control ${
                          formErrors.name ? "is-invalid" : ""
                        }`}
                        type="text"
                        name="name"
                        value={managerFormData.name}
                        onChange={(e) =>
                          setManagerFormData({
                            ...managerFormData,
                            name: e.target.value,
                          })
                        }
                      />
                      {formErrors.name && (
                        <span className="text-danger">{formErrors.name}</span>
                      )}
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label className="col-form-label">
                        Soyadı <span className="text-danger">*</span>
                      </label>
                      <input
                        className={`form-control ${
                          formErrors.surname ? "is-invalid" : ""
                        }`}
                        type="text"
                        name="surname"
                        value={managerFormData.surname}
                        onChange={(e) =>
                          setManagerFormData({
                            ...managerFormData,
                            surname: e.target.value,
                          })
                        }
                      />
                      {formErrors.surname && (
                        <span className="text-danger">
                          {formErrors.surname}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label className="col-form-label">
                        Email <span className="text-danger">*</span>
                      </label>
                      <input
                        type="email"
                        className={`form-control ${
                          formErrors.email ? "is-invalid" : ""
                        }`}
                        name="email"
                        value={managerFormData.email}
                        onChange={(e) =>
                          setManagerFormData({
                            ...managerFormData,
                            email: e.target.value,
                          })
                        }
                      />
                      {formErrors.email && (
                        <span className="text-danger">{formErrors.email}</span>
                      )}
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label className="col-form-label">
                        Şifre <span className="text-danger">*</span>
                      </label>
                      <input
                        type="password"
                        className={`form-control ${
                          formErrors.password ? "is-invalid" : ""
                        }`}
                        name="password"
                        value={managerFormData.password}
                        onChange={(e) =>
                          setManagerFormData({
                            ...managerFormData,
                            password: e.target.value,
                          })
                        }
                      />
                      {formErrors.password && (
                        <span className="text-danger">
                          {formErrors.password}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label className="col-form-label">
                        Telefon <span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        className={`form-control ${
                          formErrors.phone ? "is-invalid" : ""
                        }`}
                        name="phone"
                        value={managerFormData.phone}
                        onChange={(e) =>
                          setManagerFormData({
                            ...managerFormData,
                            phone: e.target.value,
                          })
                        }
                      />
                      {formErrors.phone && (
                        <span className="text-danger">{formErrors.phone}</span>
                      )}
                    </div>
                  </div>
                </div>
                <div className="submit-section">
                  <button className="btn btn-primary submit-btn">
                    Yönetici Ekle
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- /Add Manager Modal -->*/}

      {/* Delete Manager Modal */}
      <div
        className="modal custom-modal fade"
        id="delete_manager"
        role="dialog"
      >
        {/* Delete Manager Modal içeriği */}
      </div>
      {/* <!-- /Delete Manager Modal --> */}
    </div>
  );
};

export default AddCompany;
