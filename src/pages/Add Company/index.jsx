import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const AddCompany = () => {
  const [companys, setCompanys] = useState([]);
  const [companyInfo, setCompanyInfo] = useState([]);
  const [count, setCount] = useState(0);
  const onSubmit = (e) => {
    e.preventDefault();

    const company = {
      companyName: e.target.companyName.value,
      companyEmail: e.target.companyEmail.value,
      companyPhone: e.target.companyPhone.value,
      companyAddress: e.target.companyAddress.value,
      companyWebsite: e.target.companyWebsite.value,
      taxNumber: e.target.taxNumber.value,
      status: "ACTIVATED",
    };
    console.log(company);
    axios.post("http://localhost/company/addCompany", company).then((res) => {
      setCount(count + 1);
    });
  };
  const handleStatusChange = (company, newStatus) => {
    const updatedCompany = { ...company, status: newStatus };
    axios
      .put(`http://localhost:8080/api/v1/company/updateCompany`, updatedCompany)
      .then((res) => {
        // Şirketin durumu başarıyla güncellendi
        // Burada gerekirse bir bildirim veya başka bir işlem yapabilirsiniz.
        setCount(count + 1); // Veriyi güncellemek için sayaç artırılır.
      })
      .catch((error) => {
        // Hata durumunda burada işlem yapabilirsiniz.
        console.error(error);
      });
  };
  const onSubmitManager = (e) => {
    e.preventDefault();
    console.log(companyInfo);
    const manager = {
      companyId: companyInfo.companyId,
      companyName: companyInfo.companyName,
      companyEmail: e.target.companyEmail.value,
      password: e.target.password.value,
      name:  e.target.name.value,
      surname:  e.target.surname.value,
      email: e.target.email.value,
      phone: e.target.phone.value,
     
    };
    console.log(manager);
    axios.post("http://localhost/auth/createManager", manager).then((res) => {
      console.log(res.data);
      setCount(count + 1);
    });
  };
  useEffect(() => {
    axios
      .get(`http://localhost/company/getAllCompany`)
      .then((res) => {
        setCompanys(res.data);
        console.log(res.data);
      });
  }, [count]);
  return (
    <div className="page-wrapper">
      <div className="content container-fluid">
        {/* Page Header */}
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
              >
                <i className="fa fa-plus"></i> Şirket Ekle
              </Link>
            </div>
          </div>
        </div>
        {/* /Page Header */}

        {/* Search Filter */}
        <div className="row filter-row">
          <div className="col-sm-6 col-md-3">
            <div className="form-group form-focus">
              <input type="text" className="form-control floating" />
              <label className="focus-label">Şirket ID</label>
            </div>
          </div>
          <div className="col-sm-6 col-md-3">
            <div className="form-group form-focus">
              <input type="text" className="form-control floating" />
              <label className="focus-label">Şirket Adı</label>
            </div>
          </div>
          <div className="col-sm-6 col-md-3"></div>
          <div className="col-sm-6 col-md-3">
            <Link to="#" className="btn btn-success btn-block">
              {" "}
              ARA{" "}
            </Link>
          </div>
        </div>
        {/* Search Filter */}

        <div className="row">
          <div className="col-md-12">
            <div className="table-responsive">
              <table className="table table-striped custom-table datatable">
                <thead>
                  <tr>
                    <th>Adı</th>
                    <th>Vergi Numarası</th>
                    <th>Phone</th>
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
                                company.status === "ACTIVATED"
                                  ? "btn-success"
                                  : "btn-danger"
                              }`}
                              data-toggle="dropdown"
                              aria-expanded="false"
                            >
                              {company.status === "ACTIVATED"
                                ? "Aktif"
                                : "Pasif"}
                            </button>
                            <div className="dropdown-menu">
                              <button
                                className="dropdown-item"
                                onClick={() =>
                                  handleStatusChange(company, "ACTIVATED")
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
      </div>
      {/* Add Employee */}
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
                      />
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
                      />
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
                      />
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
                      />
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
                      />
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
                      />
                    </div>
                  </div>
                </div>{" "}
                <div className="submit-section">
                  <button className="btn btn-primary submit-btn">Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/*<!-- Edit Company Modal -->*/}
      <div id="edit_employee" className="modal custom-modal fade" role="dialog">
        <div
          className="modal-dialog modal-dialog-centered modal-lg"
          role="document"
        >
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Edit Comapny</h5>
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
                        Şirket Adı <span className="text-danger">*</span>
                      </label>
                      <input
                        className="form-control"
                        type="text"
                        name="companyName"
                      />
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
                      />
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
                      />
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
                      />
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
                      />
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
                      />
                    </div>
                  </div>
                </div>{" "}
                <div className="submit-section">
                  <button className="btn btn-primary submit-btn">Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- /Edit Company Modal -->*/}

      {/* <!-- /Delete Company Modal -->*/}
      <div
        className="modal custom-modal fade"
        id="delete_company"
        role="dialog"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body">
              <div className="form-header">
                <h3>Şirketi Sil</h3>
                <p>Şirketi silmek istediğine emin misiniz?</p>
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
      {/* <!-- /Delete Company Modal -->*/}

      {/* Add Manager */}
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
                      <input className="form-control" type="text" name="name" />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label className="col-form-label">
                        Soyadı <span className="text-danger">*</span>
                      </label>
                      <input
                        className="form-control"
                        type="text"
                        name="surname"
                      />
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
                        name="email"
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label className="col-form-label">
                        Şirket Mail <span className="text-danger">*</span>
                      </label>
                      <input
                        className="form-control"
                        type="email"
                        name="companyEmail"
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label className="col-form-label">
                        Şifre <span className="text-danger">*</span>
                      </label>
                      <input
                        className="form-control"
                        type="password"
                        name="password"
                      />
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
                        name="phone"
                      />
                    </div>
                  </div>
                </div>{" "}
                <div className="submit-section">
                  <button className="btn btn-primary submit-btn">Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddCompany;
