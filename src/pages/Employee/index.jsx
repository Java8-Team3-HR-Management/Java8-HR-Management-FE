import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";

const Employee = () => {
  const [employees, setEmployees] = useState([]);
  const [count, setCount] = useState(0);
  const companyId = Cookies.get("companyid");
  const companyName = Cookies.get("companyName");
  const [formErrors, setFormErrors] = useState({});

  const validateForm = (formData) => {
    const errors = {};

    if (!formData.firstName) {
      errors.firstName = "Ad alanı zorunludur.";
    }

    if (!formData.lastName) {
      errors.lastName = "Soyad alanı zorunludur.";
    }

    if (!formData.email) {
      errors.email = "E-posta alanı zorunludur.";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      errors.email = "Geçersiz e-posta adresi.";
    }

    if (!formData.birthPlace) {
      errors.birthPlace = "Doğum Yeri alanı zorunludur.";
    }

    if (!formData.birthDate) {
      errors.birthDate = "Doğum Tarihi alanı zorunludur.";
    }
    if (!formData.title) {
      errors.title = "Ünvan alanı zorunludur.";
    }

    if (!formData.department) {
      errors.department = "Departman alanı zorunludur.";
    }
    if (!formData.location) {
      errors.location = "Konum alanı zorunludur.";
    }

    if (!formData.membershipDate) {
      errors.membershipDate = "Üyelik Tarihi alanı zorunludur.";
    }
    if (!formData.phone) {
      errors.phone = "Telefon alanı zorunludur.";
    }

    if (!formData.salary) {
      errors.salary = "Maaş alanı zorunludur.";
    } else if (isNaN(formData.salary)) {
      errors.salary = "Maaş bir sayı olmalıdır.";
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const auth = {
      firstName: e.target.firstName.value,
      lastName: e.target.lastName.value,
      email: e.target.email.value,
      birthPlace: e.target.birthPlace.value,
      birthDate: e.target.birthDate.value,
      department: e.target.department.value,
      title: e.target.title.value,
      location: e.target.location.value,
      phone: e.target.phone.value,
      membershipDate: e.target.membershipDate.value,
      salary: e.target.salary.value,
      companyName: companyName,
      companyId: companyId,
    };

    if (validateForm(auth)) {
      axios
        .post("http://localhost/auth/createEmployee", auth)
        .then((res) => {
          console.log(res.data);
          setCount(count + 1);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };
  const handleSearch = (e) => {
    const searchTerm = e.target.value.toLowerCase();

    if (searchTerm === "") {
      axios
        .get(`http://localhost/user/findAllEmployee/${companyId}`)
        .then((res) => setEmployees(res.data));
    } else {
      const filteredEmployees = employees.filter((employee) =>
        employee.name.toLowerCase().includes(searchTerm)
      );
      setEmployees(filteredEmployees);
    }
  };
  useEffect(() => {
    console.log(companyId);
    axios
      .get(`http://localhost/user/findAllEmployee/${companyId}`)
      .then((res) => setEmployees(res.data))
      .catch((error) => {
        if (error.response) {
          console.log("Server Error:", error.response.data);
        } else if (error.request) {
          console.log("Request Error:", error.request);
        } else {
          console.log("Error:", error.message);
        }
      });
  }, [count]);
  return (
    <div className="page-wrapper">
      <div className="content container-fluid">
        {/* Page Header */}
        <div className="page-header">
          <div className="row align-items-center">
            <div className="col">
              <h3 className="page-title">Çalışanlar</h3>
              <ul className="breadcrumb">
                <li className="breadcrumb-item">
                  <Link to="/company">Panel</Link>
                </li>
                <li className="breadcrumb-item active">Çalışanlar</li>
              </ul>
            </div>
            <div className="col-auto float-right ml-auto">
              <Link
                to="#"
                className="btn add-btn"
                data-toggle="modal"
                data-target="#add_employee"
              >
                <i className="fa fa-plus"></i> Çalışan Ekle
              </Link>
            </div>
          </div>
        </div>
        {/* /Page Header */}

        {/* Search Filter */}
        <div className="row filter-row">
          <div className="col-sm-6 col-md-3">
            <div className="form-group form-focus">
              <input
                type="text"
                className="form-control floating"
                placeholder="Çalışan Adı"
                onChange={handleSearch}
              />
              <label className="focus-label">Çalışan Adı</label>
            </div>
          </div>
        </div>
        {/* Search Filter */}

        <div className="row staff-grid-row">
  {/* Çalışanlar burada yan yana sıralanacak */}
  {employees.map((employee) => (
    <div className="col-md-4 col-sm-6 col-12 col-lg-4 col-xl-3" key={employee.id}>
      <div className="profile-widget">
        <div className="profile-img">
          <Link to="profile.html" className="avatar">
            <img src="src/assets/img/profiles/avatar-02.jpg" alt="" />
          </Link>
        </div>
        <div className="dropdown profile-action">
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
              <i className="fa fa-pencil m-r-5"></i> Düzenle
            </Link>
            <Link
              className="dropdown-item"
              to="#"
              data-toggle="modal"
              data-target="#delete_employee"
            >
              <i className="fa fa-trash-o m-r-5"></i> Sil
            </Link>
          </div>
        </div>

        <h4 className="user-name m-t-10 mb-0 text-ellipsis">
          <Link to="#">{employee.name}</Link>
        </h4>
        <div className="small text-muted">{employee.department}</div>
      </div>
    </div>
  ))}
  {/* Çalışanlar burada yan yana sıralanacak */}
</div>

      </div>
      {/* Add Employee */}
      <div id="add_employee" className="modal custom-modal fade" role="dialog">
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Çalışan Ekle</h5>
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
              <form onSubmit={onSubmit}>
                <div className="row">
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label className="col-form-label">
                        Adı <span className="text-danger">*</span>
                      </label>
                      <input
                        className={`form-control ${
                          formErrors.firstName ? "is-invalid" : ""
                        }`}
                        type="text"
                        name="firstName"
                      />
                      {formErrors.firstName && (
                        <div className="invalid-feedback">
                          {formErrors.firstName}
                        </div>
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
                          formErrors.lastName ? "is-invalid" : ""
                        }`}
                        type="text"
                        name="lastName"
                      />
                      {formErrors.lastName && (
                        <div className="invalid-feedback">
                          {formErrors.lastName}
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label className="col-form-label">
                        Email <span className="text-danger">*</span>
                      </label>
                      <input
                        className={`form-control ${
                          formErrors.email ? "is-invalid" : ""
                        }`}
                        type="email"
                        name="email"
                      />
                      {formErrors.email && (
                        <div className="invalid-feedback">
                          {formErrors.email}
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label className="col-form-label">
                        Doğum Yeri <span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        className={`form-control ${
                          formErrors.birthPlace ? "is-invalid" : ""
                        }`}
                        name="birthPlace"
                      />
                      {formErrors.birthPlace && (
                        <div className="invalid-feedback">
                          {formErrors.birthPlace}
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label className="col-form-label">
                        Doğum Tarihi <span className="text-danger">*</span>
                      </label>
                      <div className="cal-icon">
                        <input
                          className={`form-control datetimepicker ${
                            formErrors.birthDate ? "is-invalid" : ""
                          }`}
                          type="text"
                          name="birthDate"
                        />
                        {formErrors.birthDate && (
                          <div className="invalid-feedback">
                            {formErrors.birthDate}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label className="col-form-label">
                        Ünvan <span className="text-danger">*</span>
                      </label>
                      <input
                        className={`form-control ${
                          formErrors.title ? "is-invalid" : ""
                        }`}
                        type="text"
                        name="title"
                      />
                      {formErrors.title && (
                        <div className="invalid-feedback">
                          {formErrors.title}
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label className="col-form-label">
                        Konum <span className="text-danger">*</span>
                      </label>
                      <input
                        className={`form-control ${
                          formErrors.location ? "is-invalid" : ""
                        }`}
                        type="text"
                        name="location"
                      />
                      {formErrors.location && (
                        <div className="invalid-feedback">
                          {formErrors.location}
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label className="col-form-label">
                        Telefon <span className="text-danger">*</span>
                      </label>
                      <input
                        className={`form-control ${
                          formErrors.phone ? "is-invalid" : ""
                        }`}
                        type="text"
                        name="phone"
                      />
                      {formErrors.phone && (
                        <div className="invalid-feedback">
                          {formErrors.phone}
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>
                        Departman <span className="text-danger">*</span>
                      </label>
                      <select
                        className={`form-control ${
                          formErrors.department ? "is-invalid" : ""
                        }`}
                        name="department"
                      >
                        <option value="">Departman Seç</option>
                        <option>Web Geliştirme</option>
                        <option>IT Yönetimi</option>
                        <option>Pazarlama</option>
                      </select>
                      {formErrors.department && (
                        <div className="invalid-feedback">
                          {formErrors.department}
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="col-sm-6">
                    <div className="form-group">
                      <label className="col-form-label">
                        Üyelik Tarihi <span className="text-danger">*</span>
                      </label>
                      <div className="cal-icon">
                        <input
                          className={`form-control datetimepicker ${
                            formErrors.membershipDate ? "is-invalid" : ""
                          }`}
                          type="text"
                          name="membershipDate"
                        />
                        {formErrors.membershipDate && (
                          <div className="invalid-feedback">
                            {formErrors.membershipDate}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label className="col-form-label">Maaş</label>
                      <input
                        className={`form-control ${
                          formErrors.salary ? "is-invalid" : ""
                        }`}
                        type="text"
                        name="salary"
                      />
                      {formErrors.salary && (
                        <div className="invalid-feedback">
                          {formErrors.salary}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                <div className="submit-section">
                  <button className="btn btn-primary submit-btn">Gönder</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/*<!-- Edit Employee Modal -->*/}
      <div id="edit_employee" className="modal custom-modal fade" role="dialog">
        <div
          className="modal-dialog modal-dialog-centered modal-lg"
          role="document"
        >
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Edit Employee</h5>
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
              <form>
                <div className="row">
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label className="col-form-label">
                        First Name <span className="text-danger">*</span>
                      </label>
                      <input
                        className="form-control"
                        value="John"
                        type="text"
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label className="col-form-label">Last Name</label>
                      <input className="form-control" value="Doe" type="text" />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label className="col-form-label">
                        Username <span className="text-danger">*</span>
                      </label>
                      <input
                        className="form-control"
                        value="johndoe"
                        type="text"
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label className="col-form-label">
                        Email <span className="text-danger">*</span>
                      </label>
                      <input
                        className="form-control"
                        value="johndoe@example.com"
                        type="email"
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label className="col-form-label">Password</label>
                      <input
                        className="form-control"
                        value="johndoe"
                        type="password"
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label className="col-form-label">Confirm Password</label>
                      <input
                        className="form-control"
                        value="johndoe"
                        type="password"
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label className="col-form-label">
                        Employee ID <span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        value="FT-0001"
                        readOnly
                        className="form-control floating"
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label className="col-form-label">
                        Joining Date <span className="text-danger">*</span>
                      </label>
                      <div className="cal-icon">
                        <input
                          className="form-control datetimepicker"
                          type="text"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label className="col-form-label">Phone </label>
                      <input
                        className="form-control"
                        value="9876543210"
                        type="text"
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label className="col-form-label">Company</label>
                      <select className="select">
                        <option>Global Technologies</option>
                        <option>Delta Infotech</option>
                        <option selected>International Software Inc</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>
                        Department <span className="text-danger">*</span>
                      </label>
                      <select className="select">
                        <option>Select Department</option>
                        <option>Web Development</option>
                        <option>IT Management</option>
                        <option>Marketing</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>
                        Designation <span className="text-danger">*</span>
                      </label>
                      <select className="select">
                        <option value="">Select Designation</option>
                        <option value="">Web Designer</option>
                        <option value="">Web Developer</option>
                        <option value="">Android Developer</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="submit-section">
                  <button className="btn btn-primary submit-btn">Save</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- /Edit Employee Modal -->*/}

      {/* <!-- /Delete Employee Modal -->*/}
      <div
        className="modal custom-modal fade"
        id="delete_employee"
        role="dialog"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body">
              <div className="form-header">
                <h3>Çalışan Sil</h3>
                <p>Çalışanı silmek istediğine emin misiniz?</p>
              </div>
              <div className="modal-btn delete-action">
                <div className="row">
                  <div className="col-6">
                    <Link to="#" className="btn btn-primary continue-btn">
                      Sil
                    </Link>
                  </div>
                  <div className="col-6">
                    <Link
                      to="#"
                      data-dismiss="modal"
                      className="btn btn-primary cancel-btn"
                    >
                      Geri
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- /Delete Employee Modal -->*/}
    </div>
  );
};

export default Employee;
