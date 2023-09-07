import React from "react";
import { Link } from "react-router-dom";

const Employee = () => {
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
              <div className="view-icons">
                <Link
                  to="employees.html"
                  className="grid-view btn btn-link active"
                >
                  <i className="fa fa-th"></i>
                </Link>
                <Link
                  to="employees-list.html"
                  className="list-view btn btn-link"
                >
                  <i className="fa fa-bars"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* /Page Header */}

        {/* Search Filter */}
        <div className="row filter-row">
          <div className="col-sm-6 col-md-3">
            <div className="form-group form-focus">
              <input type="text" className="form-control floating" />
              <label className="focus-label">Çalışan ID</label>
            </div>
          </div>
          <div className="col-sm-6 col-md-3">
            <div className="form-group form-focus">
              <input type="text" className="form-control floating" />
              <label className="focus-label">Çalışan Adı</label>
            </div>
          </div>
          <div className="col-sm-6 col-md-3"> 
							<div className="form-group form-focus select-focus">
								<select className="select floating"> 
									<option>Select Designation</option>
									<option>Web Developer</option>
									<option>Web Designer</option>
									<option>Android Developer</option>
									<option>Ios Developer</option>
								</select>
								<label className="focus-label">Designation</label>
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

        <div className="row staff-grid-row">
          {/* Eğer çalışanlar dinamik verilerle gelirse bu kısmı bir döngü içinde oluşturabilirsiniz */}
          <div className="col-md-4 col-sm-6 col-12 col-lg-4 col-xl-3">
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
                <Link to="profile.html">John Doe</Link>
              </h4>
              <div className="small text-muted">Web Designer</div>
            </div>
          </div>
          {/* Eğer çalışanlar dinamik verilerle gelirse bu kısmı bir döngü içinde oluşturabilirsiniz */}
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
              <form>
                <div className="row">
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label className="col-form-label">
                        First Name <span className="text-danger">*</span>
                      </label>
                      <input className="form-control" type="text" />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label className="col-form-label">Last Name</label>
                      <input className="form-control" type="text" />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label className="col-form-label">
                        Username <span className="text-danger">*</span>
                      </label>
                      <input className="form-control" type="text" />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label className="col-form-label">
                        Email <span className="text-danger">*</span>
                      </label>
                      <input className="form-control" type="email" />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label className="col-form-label">Password</label>
                      <input className="form-control" type="password" />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label className="col-form-label">Confirm Password</label>
                      <input className="form-control" type="password" />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label className="col-form-label">
                        Employee ID <span className="text-danger">*</span>
                      </label>
                      <input type="text" className="form-control" />
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
                      <input className="form-control" type="text" />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label className="col-form-label">Company</label>
                      <select className="select">
                        <option value="">Global Technologies</option>
                        <option value="1">Delta Infotech</option>
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
                        <option>Select Designation</option>
                        <option>Web Designer</option>
                        <option>Web Developer</option>
                        <option>Android Developer</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="table-responsive m-t-15">
                  <table className="table table-striped custom-table">
                    <thead>
                      <tr>
                        <th>Module Permission</th>
                        <th className="text-center">Read</th>
                        <th className="text-center">Write</th>
                        <th className="text-center">Create</th>
                        <th className="text-center">Delete</th>
                        <th className="text-center">Import</th>
                        <th className="text-center">Export</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Holidays</td>
                        <td className="text-center">
                          <input checked="" type="checkbox" />
                        </td>
                        <td className="text-center">
                          <input type="checkbox" />
                        </td>
                        <td className="text-center">
                          <input type="checkbox" />
                        </td>
                        <td className="text-center">
                          <input type="checkbox" />
                        </td>
                        <td className="text-center">
                          <input type="checkbox" />
                        </td>
                        <td className="text-center">
                          <input type="checkbox" />
                        </td>
                      </tr>
                      <tr>
                        <td>Leaves</td>
                        <td className="text-center">
                          <input checked="" type="checkbox" />
                        </td>
                        <td className="text-center">
                          <input checked="" type="checkbox" />
                        </td>
                        <td className="text-center">
                          <input checked="" type="checkbox" />
                        </td>
                        <td className="text-center">
                          <input type="checkbox" />
                        </td>
                        <td className="text-center">
                          <input type="checkbox" />
                        </td>
                        <td className="text-center">
                          <input type="checkbox" />
                        </td>
                      </tr>
                      <tr>
                        <td>Clients</td>
                        <td className="text-center">
                          <input checked="" type="checkbox" />
                        </td>
                        <td className="text-center">
                          <input checked="" type="checkbox" />
                        </td>
                        <td className="text-center">
                          <input checked="" type="checkbox" />
                        </td>
                        <td className="text-center">
                          <input type="checkbox" />
                        </td>
                        <td className="text-center">
                          <input type="checkbox" />
                        </td>
                        <td className="text-center">
                          <input type="checkbox" />
                        </td>
                      </tr>
                      <tr>
                        <td>Projects</td>
                        <td className="text-center">
                          <input checked="" type="checkbox" />
                        </td>
                        <td className="text-center">
                          <input type="checkbox" />
                        </td>
                        <td className="text-center">
                          <input type="checkbox" />
                        </td>
                        <td className="text-center">
                          <input type="checkbox" />
                        </td>
                        <td className="text-center">
                          <input type="checkbox" />
                        </td>
                        <td className="text-center">
                          <input type="checkbox" />
                        </td>
                      </tr>
                      <tr>
                        <td>Tasks</td>
                        <td className="text-center">
                          <input checked="" type="checkbox" />
                        </td>
                        <td className="text-center">
                          <input checked="" type="checkbox" />
                        </td>
                        <td className="text-center">
                          <input checked="" type="checkbox" />
                        </td>
                        <td className="text-center">
                          <input checked="" type="checkbox" />
                        </td>
                        <td className="text-center">
                          <input type="checkbox" />
                        </td>
                        <td className="text-center">
                          <input type="checkbox" />
                        </td>
                      </tr>
                      <tr>
                        <td>Chats</td>
                        <td className="text-center">
                          <input checked="" type="checkbox" />
                        </td>
                        <td className="text-center">
                          <input checked="" type="checkbox" />
                        </td>
                        <td className="text-center">
                          <input checked="" type="checkbox" />
                        </td>
                        <td className="text-center">
                          <input checked="" type="checkbox" />
                        </td>
                        <td className="text-center">
                          <input type="checkbox" />
                        </td>
                        <td className="text-center">
                          <input type="checkbox" />
                        </td>
                      </tr>
                      <tr>
                        <td>Assets</td>
                        <td className="text-center">
                          <input checked="" type="checkbox" />
                        </td>
                        <td className="text-center">
                          <input checked="" type="checkbox" />
                        </td>
                        <td className="text-center">
                          <input checked="" type="checkbox" />
                        </td>
                        <td className="text-center">
                          <input checked="" type="checkbox" />
                        </td>
                        <td className="text-center">
                          <input type="checkbox" />
                        </td>
                        <td className="text-center">
                          <input type="checkbox" />
                        </td>
                      </tr>
                      <tr>
                        <td>Timing Sheets</td>
                        <td className="text-center">
                          <input checked="" type="checkbox" />
                        </td>
                        <td className="text-center">
                          <input checked="" type="checkbox" />
                        </td>
                        <td className="text-center">
                          <input checked="" type="checkbox" />
                        </td>
                        <td className="text-center">
                          <input checked="" type="checkbox" />
                        </td>
                        <td className="text-center">
                          <input type="checkbox" />
                        </td>
                        <td className="text-center">
                          <input type="checkbox" />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="submit-section">
                  <button className="btn btn-primary submit-btn">Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/*<!-- Edit Employee Modal -->*/}
				<div id="edit_employee" className="modal custom-modal fade" role="dialog">
					<div className="modal-dialog modal-dialog-centered modal-lg" role="document">
						<div className="modal-content">
							<div className="modal-header">
								<h5 className="modal-title">Edit Employee</h5>
								<button type="button" className="close" data-dismiss="modal" aria-label="Close">
									<span aria-hidden="true">&times;</span>
								</button>
							</div>
							<div className="modal-body">
								<form>
									<div className="row">
										<div className="col-sm-6">
											<div className="form-group">
												<label className="col-form-label">First Name <span className="text-danger">*</span></label>
												<input className="form-control" value="John" type="text"/>
											</div>
										</div>
										<div className="col-sm-6">
											<div className="form-group">
												<label className="col-form-label">Last Name</label>
												<input className="form-control" value="Doe" type="text"/>
											</div>
										</div>
										<div className="col-sm-6">
											<div className="form-group">
												<label className="col-form-label">Username <span className="text-danger">*</span></label>
												<input className="form-control" value="johndoe" type="text"/>
											</div>
										</div>
										<div className="col-sm-6">
											<div className="form-group">
												<label className="col-form-label">Email <span className="text-danger">*</span></label>
												<input className="form-control" value="johndoe@example.com" type="email"/>
											</div>
										</div>
										<div className="col-sm-6">
											<div className="form-group">
												<label className="col-form-label">Password</label>
												<input className="form-control" value="johndoe" type="password"/>
											</div>
										</div>
										<div className="col-sm-6">
											<div className="form-group">
												<label className="col-form-label">Confirm Password</label>
												<input className="form-control" value="johndoe" type="password"/>
											</div>
										</div>
										<div className="col-sm-6">  
											<div className="form-group">
												<label className="col-form-label">Employee ID <span className="text-danger">*</span></label>
												<input type="text" value="FT-0001" readOnly className="form-control floating"/>
											</div>
										</div>
										<div className="col-sm-6">  
											<div className="form-group">
												<label className="col-form-label">Joining Date <span className="text-danger">*</span></label>
												<div className="cal-icon"><input className="form-control datetimepicker" type="text"/></div>
											</div>
										</div>
										<div className="col-sm-6">
											<div className="form-group">
												<label className="col-form-label">Phone </label>
												<input className="form-control" value="9876543210" type="text"/>
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
												<label>Department <span className="text-danger">*</span></label>
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
												<label>Designation <span className="text-danger">*</span></label>
												<select className="select">
													<option>Select Designation</option>
													<option>Web Designer</option>
													<option>Web Developer</option>
													<option>Android Developer</option>
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
				<div className="modal custom-modal fade" id="delete_employee" role="dialog">
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
											<Link to="#" className="btn btn-primary continue-btn">Sil</Link>
										</div>
										<div className="col-6">
											<Link to="#" data-dismiss="modal" className="btn btn-primary cancel-btn">Geri</Link>
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
