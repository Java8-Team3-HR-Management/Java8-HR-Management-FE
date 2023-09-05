import React from "react";

const Employee = () => {
  return (
    <div class="page-wrapper">
      <div className="content container-fluid">
        {/* Page Header */}
        <div className="page-header">
          <div className="row align-items-center">
            <div className="col">
              <h3 className="page-title">Employee</h3>
              <ul className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="index.html">Dashboard</a>
                </li>
                <li className="breadcrumb-item active">Employee</li>
              </ul>
            </div>
            <div className="col-auto float-right ml-auto">
              <a
                href="#"
                className="btn add-btn"
                data-toggle="modal"
                data-target="#add_employee"
              >
                <i className="fa fa-plus"></i> Add Employee
              </a>
              <div className="view-icons">
                <a
                  href="employees.html"
                  className="grid-view btn btn-link active"
                >
                  <i className="fa fa-th"></i>
                </a>
                <a
                  href="employees-list.html"
                  className="list-view btn btn-link"
                >
                  <i className="fa fa-bars"></i>
                </a>
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
              <label className="focus-label">Employee ID</label>
            </div>
          </div>
          <div className="col-sm-6 col-md-3">
            <div className="form-group form-focus">
              <input type="text" className="form-control floating" />
              <label className="focus-label">Employee Name</label>
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
            <a href="#" className="btn btn-success btn-block">
              {" "}
              Search{" "}
            </a>
          </div>
        </div>
        {/* Search Filter */}

        <div className="row staff-grid-row">
          {/* Eğer çalışanlar dinamik verilerle gelirse bu kısmı bir döngü içinde oluşturabilirsiniz */}
          <div className="col-md-4 col-sm-6 col-12 col-lg-4 col-xl-3">
            <div className="profile-widget">
              <div className="profile-img">
                <a href="profile.html" className="avatar">
                  <img src="assets/img/profiles/avatar-02.jpg" alt="" />
                </a>
              </div>
              <div className="dropdown profile-action">
                <a
                  href="#"
                  className="action-icon dropdown-toggle"
                  data-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i className="material-icons">more_vert</i>
                </a>
                <div className="dropdown-menu dropdown-menu-right">
                  <a
                    className="dropdown-item"
                    href="#"
                    data-toggle="modal"
                    data-target="#edit_employee"
                  >
                    <i className="fa fa-pencil m-r-5"></i> Edit
                  </a>
                  <a
                    className="dropdown-item"
                    href="#"
                    data-toggle="modal"
                    data-target="#delete_employee"
                  >
                    <i className="fa fa-trash-o m-r-5"></i> Delete
                  </a>
                </div>
              </div>
              <h4 className="user-name m-t-10 mb-0 text-ellipsis">
                <a href="profile.html">John Doe</a>
              </h4>
              <div className="small text-muted">Web Designer</div>
            </div>
          </div>
          {/* Eğer çalışanlar dinamik verilerle gelirse bu kısmı bir döngü içinde oluşturabilirsiniz */}
        </div>
      </div>

      <div id="add_employee" class="modal custom-modal fade" role="dialog">
        <div class="modal-dialog modal-dialog-centered modal-lg">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Add Employee</h5>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <form>
                <div class="row">
                  <div class="col-sm-6">
                    <div class="form-group">
                      <label class="col-form-label">
                        First Name <span class="text-danger">*</span>
                      </label>
                      <input class="form-control" type="text" />
                    </div>
                  </div>
                  <div class="col-sm-6">
                    <div class="form-group">
                      <label class="col-form-label">Last Name</label>
                      <input class="form-control" type="text" />
                    </div>
                  </div>
                  <div class="col-sm-6">
                    <div class="form-group">
                      <label class="col-form-label">
                        Username <span class="text-danger">*</span>
                      </label>
                      <input class="form-control" type="text" />
                    </div>
                  </div>
                  <div class="col-sm-6">
                    <div class="form-group">
                      <label class="col-form-label">
                        Email <span class="text-danger">*</span>
                      </label>
                      <input class="form-control" type="email" />
                    </div>
                  </div>
                  <div class="col-sm-6">
                    <div class="form-group">
                      <label class="col-form-label">Password</label>
                      <input class="form-control" type="password" />
                    </div>
                  </div>
                  <div class="col-sm-6">
                    <div class="form-group">
                      <label class="col-form-label">Confirm Password</label>
                      <input class="form-control" type="password" />
                    </div>
                  </div>
                  <div class="col-sm-6">
                    <div class="form-group">
                      <label class="col-form-label">
                        Employee ID <span class="text-danger">*</span>
                      </label>
                      <input type="text" class="form-control" />
                    </div>
                  </div>
                  <div class="col-sm-6">
                    <div class="form-group">
                      <label class="col-form-label">
                        Joining Date <span class="text-danger">*</span>
                      </label>
                      <div class="cal-icon">
                        <input
                          class="form-control datetimepicker"
                          type="text"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-6">
                    <div class="form-group">
                      <label class="col-form-label">Phone </label>
                      <input class="form-control" type="text" />
                    </div>
                  </div>
                  <div class="col-sm-6">
                    <div class="form-group">
                      <label class="col-form-label">Company</label>
                      <select class="select">
                        <option value="">Global Technologies</option>
                        <option value="1">Delta Infotech</option>
                      </select>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-group">
                      <label>
                        Department <span class="text-danger">*</span>
                      </label>
                      <select class="select">
                        <option>Select Department</option>
                        <option>Web Development</option>
                        <option>IT Management</option>
                        <option>Marketing</option>
                      </select>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-group">
                      <label>
                        Designation <span class="text-danger">*</span>
                      </label>
                      <select class="select">
                        <option>Select Designation</option>
                        <option>Web Designer</option>
                        <option>Web Developer</option>
                        <option>Android Developer</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div class="table-responsive m-t-15">
                  <table class="table table-striped custom-table">
                    <thead>
                      <tr>
                        <th>Module Permission</th>
                        <th class="text-center">Read</th>
                        <th class="text-center">Write</th>
                        <th class="text-center">Create</th>
                        <th class="text-center">Delete</th>
                        <th class="text-center">Import</th>
                        <th class="text-center">Export</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Holidays</td>
                        <td class="text-center">
                          <input checked="" type="checkbox" />
                        </td>
                        <td class="text-center">
                          <input type="checkbox" />
                        </td>
                        <td class="text-center">
                          <input type="checkbox" />
                        </td>
                        <td class="text-center">
                          <input type="checkbox" />
                        </td>
                        <td class="text-center">
                          <input type="checkbox" />
                        </td>
                        <td class="text-center">
                          <input type="checkbox" />
                        </td>
                      </tr>
                      <tr>
                        <td>Leaves</td>
                        <td class="text-center">
                          <input checked="" type="checkbox" />
                        </td>
                        <td class="text-center">
                          <input checked="" type="checkbox" />
                        </td>
                        <td class="text-center">
                          <input checked="" type="checkbox" />
                        </td>
                        <td class="text-center">
                          <input type="checkbox" />
                        </td>
                        <td class="text-center">
                          <input type="checkbox" />
                        </td>
                        <td class="text-center">
                          <input type="checkbox" />
                        </td>
                      </tr>
                      <tr>
                        <td>Clients</td>
                        <td class="text-center">
                          <input checked="" type="checkbox" />
                        </td>
                        <td class="text-center">
                          <input checked="" type="checkbox" />
                        </td>
                        <td class="text-center">
                          <input checked="" type="checkbox" />
                        </td>
                        <td class="text-center">
                          <input type="checkbox" />
                        </td>
                        <td class="text-center">
                          <input type="checkbox" />
                        </td>
                        <td class="text-center">
                          <input type="checkbox" />
                        </td>
                      </tr>
                      <tr>
                        <td>Projects</td>
                        <td class="text-center">
                          <input checked="" type="checkbox" />
                        </td>
                        <td class="text-center">
                          <input type="checkbox" />
                        </td>
                        <td class="text-center">
                          <input type="checkbox" />
                        </td>
                        <td class="text-center">
                          <input type="checkbox" />
                        </td>
                        <td class="text-center">
                          <input type="checkbox" />
                        </td>
                        <td class="text-center">
                          <input type="checkbox" />
                        </td>
                      </tr>
                      <tr>
                        <td>Tasks</td>
                        <td class="text-center">
                          <input checked="" type="checkbox" />
                        </td>
                        <td class="text-center">
                          <input checked="" type="checkbox" />
                        </td>
                        <td class="text-center">
                          <input checked="" type="checkbox" />
                        </td>
                        <td class="text-center">
                          <input checked="" type="checkbox" />
                        </td>
                        <td class="text-center">
                          <input type="checkbox" />
                        </td>
                        <td class="text-center">
                          <input type="checkbox" />
                        </td>
                      </tr>
                      <tr>
                        <td>Chats</td>
                        <td class="text-center">
                          <input checked="" type="checkbox" />
                        </td>
                        <td class="text-center">
                          <input checked="" type="checkbox" />
                        </td>
                        <td class="text-center">
                          <input checked="" type="checkbox" />
                        </td>
                        <td class="text-center">
                          <input checked="" type="checkbox" />
                        </td>
                        <td class="text-center">
                          <input type="checkbox" />
                        </td>
                        <td class="text-center">
                          <input type="checkbox" />
                        </td>
                      </tr>
                      <tr>
                        <td>Assets</td>
                        <td class="text-center">
                          <input checked="" type="checkbox" />
                        </td>
                        <td class="text-center">
                          <input checked="" type="checkbox" />
                        </td>
                        <td class="text-center">
                          <input checked="" type="checkbox" />
                        </td>
                        <td class="text-center">
                          <input checked="" type="checkbox" />
                        </td>
                        <td class="text-center">
                          <input type="checkbox" />
                        </td>
                        <td class="text-center">
                          <input type="checkbox" />
                        </td>
                      </tr>
                      <tr>
                        <td>Timing Sheets</td>
                        <td class="text-center">
                          <input checked="" type="checkbox" />
                        </td>
                        <td class="text-center">
                          <input checked="" type="checkbox" />
                        </td>
                        <td class="text-center">
                          <input checked="" type="checkbox" />
                        </td>
                        <td class="text-center">
                          <input checked="" type="checkbox" />
                        </td>
                        <td class="text-center">
                          <input type="checkbox" />
                        </td>
                        <td class="text-center">
                          <input type="checkbox" />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div class="submit-section">
                  <button class="btn btn-primary submit-btn">Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Employee;
