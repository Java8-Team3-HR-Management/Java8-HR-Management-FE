import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const AddCompany = () => {
  const [companys, setCompanys] = useState([]);
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
    };
    console.log(company);
    axios
      .post("http://localhost:9092/api/v1/company/addcom", company)
      .then((res) => {
        console.log(res.data);
        setCount(count + 1);
      });
  };
  useEffect(() => {
    // axios
    //   .get(`http://localhost:9092/api/v1/employee/findAll/Test Company`)
    //   .then((res) => setCompanys(res.data));
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
											<th>ID</th>
											<th>Adı</th>
											<th>Vergi Numarası</th>
											<th>Phone</th>
											<th>Email</th>
											<th>Web Site</th>
											<th>Adres</th>
											</tr>
									</thead>
									<tbody>
										<tr>
											<td>
												<h2 className="table-avatar">
													<Link to="profile.html" className="avatar"><img alt="" src="src/assets/img/profiles/avatar-02.jpg"/></Link>
													<Link to="profile.html">John Doe <span>Web Designer</span></Link>
												</h2>
											</td>
											<td>FT-0001</td>
											<td>johndoe@example.com</td>
											<td>9876543210</td>
											<td>1 Jan 2013</td>
											<td>
												<div className="dropdown">
													<Link to="" className="btn btn-white btn-sm btn-rounded dropdown-toggle" data-toggle="dropdown" aria-expanded="false">Web Developer </Link>
													<div className="dropdown-menu">
														<Link className="dropdown-item" to="#">Software Engineer</Link>
														<Link className="dropdown-item" to="#">Software Tester</Link>
														<Link className="dropdown-item" to="#">Frontend Developer</Link>
														<Link className="dropdown-item" to="#">UI/UX Developer</Link>
													</div>
												</div>
											</td>
											<td className="text-right">
												<div className="dropdown dropdown-action">
													<Link to="#" className="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="material-icons">more_vert</i></Link>
													<div className="dropdown-menu dropdown-menu-right">
														<Link className="dropdown-item" to="#" data-toggle="modal" data-target="#edit_employee"><i className="fa fa-pencil m-r-5"></i> Edit</Link>
														<Link className="dropdown-item" to="#" data-toggle="modal" data-target="#delete_employee"><i className="fa fa-trash-o m-r-5"></i> Delete</Link>
													</div>
												</div>
											</td>
										</tr>
										<tr>
											<td>
												<h2 className="table-avatar">
													<Link to="profile.html" className="avatar"><img alt="" src="src/assets/img/profiles/avatar-09.jpg"/></Link>
													<Link to="profile.html">Richard Miles <span>Web Developer</span></Link>
												</h2>
											</td>
											<td>FT-0002</td>
											<td>richardmiles@example.com</td>
											<td>9876543210</td>
											<td>18 Mar 2014</td>
											<td>
												<div className="dropdown">
													<Link to="" className="btn btn-white btn-sm btn-rounded dropdown-toggle" data-toggle="dropdown" aria-expanded="false">Web Developer </Link>
													<div className="dropdown-menu">
														<Link className="dropdown-item" to="#">Software Engineer</Link>
														<Link className="dropdown-item" to="#">Software Tester</Link>
														<Link className="dropdown-item" to="#">Frontend Developer</Link>
														<Link className="dropdown-item" to="#">UI/UX Developer</Link>
													</div>
												</div>
											</td>
											<td className="text-right">
												<div className="dropdown dropdown-action">
													<Link to="#" className="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="material-icons">more_vert</i></Link>
													<div className="dropdown-menu dropdown-menu-right">
														<Link className="dropdown-item" to="#" data-toggle="modal" data-target="#edit_employee"><i className="fa fa-pencil m-r-5"></i> Edit</Link>
														<Link className="dropdown-item" to="#" data-toggle="modal" data-target="#delete_employee"><i className="fa fa-trash-o m-r-5"></i> Delete</Link>
													</div>
												</div>
											</td>
										</tr>
										<tr>
											<td>
												<h2 className="table-avatar">
													<Link to="profile.html" className="avatar"><img alt="" src="src/assets/img/profiles/avatar-10.jpg"/></Link>
													<Link to="profile.html">John Smith <span>Android Developer</span></Link>
												</h2>
											</td>
											<td>FT-0003</td>
											<td>johnsmith@example.com</td>
											<td>9876543210</td>
											<td>1 Apr 2014</td>
											<td>
												<div className="dropdown">
													<Link to="" className="btn btn-white btn-sm btn-rounded dropdown-toggle" data-toggle="dropdown" aria-expanded="false">Web Developer </Link>
													<div className="dropdown-menu">
														<Link className="dropdown-item" to="#">Software Engineer</Link>
														<Link className="dropdown-item" to="#">Software Tester</Link>
														<Link className="dropdown-item" to="#">Frontend Developer</Link>
														<Link className="dropdown-item" to="#">UI/UX Developer</Link>
													</div>
												</div>
											</td>
											<td className="text-right">
												<div className="dropdown dropdown-action">
													<Link to="#" className="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="material-icons">more_vert</i></Link>
													<div className="dropdown-menu dropdown-menu-right">
														<Link className="dropdown-item" to="#" data-toggle="modal" data-target="#edit_employee"><i className="fa fa-pencil m-r-5"></i> Edit</Link>
														<Link className="dropdown-item" to="#" data-toggle="modal" data-target="#delete_employee"><i className="fa fa-trash-o m-r-5"></i> Delete</Link>
													</div>
												</div>
											</td>
										</tr>
										<tr>
											<td>
												<h2 className="table-avatar">
													<Link to="profile.html" className="avatar"><img alt="" src="src/assets/img/profiles/avatar-05.jpg"/></Link>
													<Link to="profile.html">Mike Litorus <span>IOS Developer</span></Link>
												</h2>
											</td>
											<td>FT-0004</td>
											<td>mikelitorus@example.com</td>
											<td>9876543210</td>
											<td>1 Apr 2014</td>
											<td>
												<div className="dropdown">
													<Link to="" className="btn btn-white btn-sm btn-rounded dropdown-toggle" data-toggle="dropdown" aria-expanded="false">Web Developer </Link>
													<div className="dropdown-menu">
														<Link className="dropdown-item" to="#">Software Engineer</Link>
														<Link className="dropdown-item" to="#">Software Tester</Link>
														<Link className="dropdown-item" to="#">Frontend Developer</Link>
														<Link className="dropdown-item" to="#">UI/UX Developer</Link>
													</div>
												</div>
											</td>
											<td className="text-right">
												<div className="dropdown dropdown-action">
													<Link to="#" className="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="material-icons">more_vert</i></Link>
													<div className="dropdown-menu dropdown-menu-right">
														<Link className="dropdown-item" to="#" data-toggle="modal" data-target="#edit_employee"><i className="fa fa-pencil m-r-5"></i> Edit</Link>
														<Link className="dropdown-item" to="#" data-toggle="modal" data-target="#delete_employee"><i className="fa fa-trash-o m-r-5"></i> Delete</Link>
													</div>
												</div>
											</td>
										</tr>
										<tr>
											<td>
												<h2 className="table-avatar">
													<Link to="profile.html" className="avatar"><img alt="" src="src/assets/img/profiles/avatar-11.jpg"/></Link>
													<Link to="profile.html">Wilmer Deluna <span>Team Leader</span></Link>
												</h2>
											</td>
											<td>FT-0005</td>
											<td>wilmerdeluna@example.com</td>
											<td>9876543210</td>
											<td>22 May 2014</td>
											<td>
												<div className="dropdown">
													<Link to="" className="btn btn-white btn-sm btn-rounded dropdown-toggle" data-toggle="dropdown" aria-expanded="false">Web Developer </Link>
													<div className="dropdown-menu">
														<Link className="dropdown-item" to="#">Software Engineer</Link>
														<Link className="dropdown-item" to="#">Software Tester</Link>
														<Link className="dropdown-item" to="#">Frontend Developer</Link>
														<Link className="dropdown-item" to="#">UI/UX Developer</Link>
													</div>
												</div>
											</td>
											<td className="text-right">
												<div className="dropdown dropdown-action">
													<Link to="#" className="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="material-icons">more_vert</i></Link>
													<div className="dropdown-menu dropdown-menu-right">
														<Link className="dropdown-item" to="#" data-toggle="modal" data-target="#edit_employee"><i className="fa fa-pencil m-r-5"></i> Edit</Link>
														<Link className="dropdown-item" to="#" data-toggle="modal" data-target="#delete_employee"><i className="fa fa-trash-o m-r-5"></i> Delete</Link>
													</div>
												</div>
											</td>
										</tr>
										<tr>
											<td>
												<h2 className="table-avatar">
													<Link to="profile.html" className="avatar"><img alt="" src="src/assets/img/profiles/avatar-12.jpg"/></Link>
													<Link to="profile.html">Jeffrey Warden <span>Web Developer</span></Link>
												</h2>
											</td>
											<td>FT-0006</td>
											<td>jeffreywarden@example.com</td>
											<td>9876543210</td>
											<td>16 Jun 2013</td>
											<td>
												<div className="dropdown">
													<Link to="" className="btn btn-white btn-sm btn-rounded dropdown-toggle" data-toggle="dropdown" aria-expanded="false">Web Developer </Link>
													<div className="dropdown-menu">
														<Link className="dropdown-item" to="#">Software Engineer</Link>
														<Link className="dropdown-item" to="#">Software Tester</Link>
														<Link className="dropdown-item" to="#">Frontend Developer</Link>
														<Link className="dropdown-item" to="#">UI/UX Developer</Link>
													</div>
												</div>
											</td>
											<td className="text-right">
												<div className="dropdown dropdown-action">
													<Link to="#" className="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="material-icons">more_vert</i></Link>
													<div className="dropdown-menu dropdown-menu-right">
														<Link className="dropdown-item" to="#" data-toggle="modal" data-target="#edit_employee"><i className="fa fa-pencil m-r-5"></i> Edit</Link>
														<Link className="dropdown-item" to="#" data-toggle="modal" data-target="#delete_employee"><i className="fa fa-trash-o m-r-5"></i> Delete</Link>
													</div>
												</div>
											</td>
										</tr>
										<tr>
											<td>
												<h2 className="table-avatar">
													<Link to="profile.html" className="avatar"><img alt="" src="src/assets/img/profiles/avatar-13.jpg"/></Link>
													<Link to="profile.html">Bernardo Galaviz <span>Web Developer</span></Link>
												</h2>
											</td>
											<td>FT-0007</td>
											<td>bernardogalaviz@example.com</td>
											<td>9876543210</td>
											<td>1 Jan 2013</td>
											<td>
												<div className="dropdown">
													<Link to="" className="btn btn-white btn-sm btn-rounded dropdown-toggle" data-toggle="dropdown" aria-expanded="false">Web Developer </Link>
													<div className="dropdown-menu">
														<Link className="dropdown-item" to="#">Software Engineer</Link>
														<Link className="dropdown-item" to="#">Software Tester</Link>
														<Link className="dropdown-item" to="#">Frontend Developer</Link>
														<Link className="dropdown-item" to="#">UI/UX Developer</Link>
													</div>
												</div>
											</td>
											<td className="text-right">
												<div className="dropdown dropdown-action">
													<Link to="#" className="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="material-icons">more_vert</i></Link>
													<div className="dropdown-menu dropdown-menu-right">
														<Link className="dropdown-item" to="#" data-toggle="modal" data-target="#edit_employee"><i className="fa fa-pencil m-r-5"></i> Edit</Link>
														<Link className="dropdown-item" to="#" data-toggle="modal" data-target="#delete_employee"><i className="fa fa-trash-o m-r-5"></i> Delete</Link>
													</div>
												</div>
											</td>
										</tr>
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
            <form >
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
    </div>
  );
};

export default AddCompany;
