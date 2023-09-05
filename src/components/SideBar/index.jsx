import React from "react";
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <div className="sidebar" id="sidebar">
      <div className="sidebar-inner slimscroll">
        <div id="sidebar-menu" className="sidebar-menu">
          <ul>
            <li className="menu-title">
              <span>Main</span>
            </li>
            <li className="submenu">
              <a href="#">
                <i className="la la-dashboard"></i> <span> Dashboard</span>{" "}
                <span className="menu-arrow"></span>
              </a>
              <ul style={{ display: "none" }}>
                <li>
                  <Link className="active" to="/company">
                    Admin Dashboard
                  </Link>
                </li>
                <li>
                  <a href="employee-dashboard.html">Employee Dashboard</a>
                </li>
              </ul>
            </li>
            <li className="submenu">
              <a href="#">
                <i className="la la-cube"></i> <span> Apps</span>{" "}
                <span className="menu-arrow"></span>
              </a>
              <ul style={{ display: "none" }}>
                <li>
                  <a href="chat.html">Chat</a>
                </li>
                <li className="submenu">
                  <a href="#">
                    <span> Calls</span> <span className="menu-arrow"></span>
                  </a>
                  <ul style={{ display: "none" }}>
                    <li>
                      <a href="voice-call.html">Voice Call</a>
                    </li>
                    <li>
                      <a href="video-call.html">Video Call</a>
                    </li>
                    <li>
                      <a href="outgoing-call.html">Outgoing Call</a>
                    </li>
                    <li>
                      <a href="incoming-call.html">Incoming Call</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="events.html">Calendar</a>
                </li>
                <li>
                  <a href="contacts.html">Contacts</a>
                </li>
                <li>
                  <a href="inbox.html">Email</a>
                </li>
                <li>
                  <a href="file-manager.html">File Manager</a>
                </li>
              </ul>
            </li>
            <li className="menu-title">
              <span>Employees</span>
            </li>
            <li>
              <Link to="/employee">
                <i className="la la-user"></i> <span> Çalışanlar</span>{" "}
              </Link>
            </li>
            <li>
              <a href="clients.html">
                <i className="la la-users"></i> <span>Clients</span>
              </a>
            </li>
            <li className="submenu">
              <a href="#">
                <i className="la la-rocket"></i> <span> Projects</span>{" "}
                <span className="menu-arrow"></span>
              </a>
              <ul style={{ display: "none" }}>
                <li>
                  <a href="projects.html">Projects</a>
                </li>
                <li>
                  <a href="tasks.html">Tasks</a>
                </li>
                <li>
                  <a href="task-board.html">Task Board</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="leads.html">
                <i className="la la-user-secret"></i> <span>Leads</span>
              </a>
            </li>
            <li>
              <a href="tickets.html">
                <i className="la la-ticket"></i> <span>Tickets</span>
              </a>
            </li>
            <li className="menu-title">
              <span>HR</span>
            </li>
            <li className="submenu">
              <a href="#">
                <i className="la la-files-o"></i> <span> Accounts </span>{" "}
                <span className="menu-arrow"></span>
              </a>
              <ul style={{ display: "none" }}>
                <li>
                  <a href="estimates.html">Estimates</a>
                </li>
                <li>
                  <a href="invoices.html">Invoices</a>
                </li>
                <li>
                  <a href="payments.html">Payments</a>
                </li>
                <li>
                  <a href="expenses.html">Expenses</a>
                </li>
                <li>
                  <a href="provident-fund.html">Provident Fund</a>
                </li>
                <li>
                  <a href="taxes.html">Taxes</a>
                </li>
              </ul>
            </li>
            <li className="submenu">
              <a href="#">
                <i className="la la-money"></i> <span> Payroll </span>{" "}
                <span className="menu-arrow"></span>
              </a>
              <ul style={{ display: "none" }}>
                <li>
                  <a href="salary.html"> Employee Salary </a>
                </li>
                <li>
                  <a href="salary-view.html"> Payslip </a>
                </li>
                <li>
                  <a href="payroll-items.html"> Payroll Items </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="policies.html">
                <i className="la la-file-pdf-o"></i> <span>Policies</span>
              </a>
            </li>
            <li className="submenu">
              <a href="#">
                <i className="la la-pie-chart"></i> <span> Reports </span>{" "}
                <span className="menu-arrow"></span>
              </a>
              <ul style={{ display: "none" }}>
                <li>
                  <a href="expense-reports.html"> Expense Report </a>
                </li>
                <li>
                  <a href="invoice-reports.html"> Invoice Report </a>
                </li>
              </ul>
            </li>
            <li className="menu-title">
              <span>Performance</span>
            </li>
            <li className="submenu">
              <a href="#">
                <i className="la la-graduation-cap"></i>{" "}
                <span> Performance </span> <span className="menu-arrow"></span>
              </a>
              <ul style={{ display: "none" }}>
                <li>
                  <a href="performance-indicator.html">
                    {" "}
                    Performance Indicator{" "}
                  </a>
                </li>
                <li>
                  <a href="performance.html"> Performance Review </a>
                </li>
                <li>
                  <a href="performance-appraisal.html">
                    {" "}
                    Performance Appraisal{" "}
                  </a>
                </li>
              </ul>
            </li>
            <li className="submenu">
              <a href="#">
                <i className="la la-crosshairs"></i> <span> Goals </span>{" "}
                <span className="menu-arrow"></span>
              </a>
              <ul style={{ display: "none" }}>
                <li>
                  <a href="goal-tracking.html"> Goal List </a>
                </li>
                <li>
                  <a href="goal-type.html"> Goal Type </a>
                </li>
              </ul>
            </li>
            <li className="submenu">
              <a href="#">
                <i className="la la-edit"></i> <span> Training </span>{" "}
                <span className="menu-arrow"></span>
              </a>
              <ul style={{ display: "none" }}>
                <li>
                  <a href="training.html"> Training List </a>
                </li>
                <li>
                  <a href="trainers.html"> Trainers</a>
                </li>
                <li>
                  <a href="training-type.html"> Training Type </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="promotion.html">
                <i className="la la-bullhorn"></i> <span>Promotion</span>
              </a>
            </li>
            <li>
              <a href="resignation.html">
                <i className="la la-external-link-square"></i>{" "}
                <span>Resignation</span>
              </a>
            </li>
            <li>
              <a href="termination.html">
                <i className="la la-times-circle"></i> <span>Termination</span>
              </a>
            </li>
            <li className="menu-title">
              <span>Administration</span>
            </li>
            <li>
              <a href="assets.html">
                <i className="la la-object-ungroup"></i> <span>Assets</span>
              </a>
            </li>
            <li className="submenu">
              <a href="#">
                <i className="la la-briefcase"></i> <span> Jobs </span>{" "}
                <span className="menu-arrow"></span>
              </a>
              <ul style={{ display: "none" }}>
                <li>
                  <a href="jobs.html"> Manage Jobs </a>
                </li>
                <li>
                  <a href="job-applicants.html"> Applied Candidates </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="knowledgebase.html">
                <i className="la la-question"></i> <span>Knowledgebase</span>
              </a>
            </li>
            <li>
              <a href="activities.html">
                <i className="la la-bell"></i> <span>Activities</span>
              </a>
            </li>
            <li>
              <a href="users.html">
                <i className="la la-user-plus"></i> <span>Users</span>
              </a>
            </li>
            <li>
              <a href="settings.html">
                <i className="la la-cog"></i> <span>Settings</span>
              </a>
            </li>
            <li className="menu-title">
              <span>Pages</span>
            </li>
            <li className="submenu">
              <a href="#">
                <i className="la la-user"></i> <span> Profile </span>{" "}
                <span className="menu-arrow"></span>
              </a>
              <ul style={{ display: "none" }}>
                <li>
                  <a href="profile.html"> Employee Profile </a>
                </li>
                <li>
                  <a href="client-profile.html"> Client Profile </a>
                </li>
              </ul>
            </li>
            <li className="submenu">
              <a href="#">
                <i className="la la-key"></i> <span> Authentication </span>{" "}
                <span className="menu-arrow"></span>
              </a>
              <ul style={{ display: "none" }}>
                <li>
                  <a href="login.html"> Login </a>
                </li>
                <li>
                  <a href="register.html"> Register </a>
                </li>
                <li>
                  <a href="forgot-password.html"> Forgot Password </a>
                </li>
                <li>
                  <a href="otp.html"> OTP </a>
                </li>
                <li>
                  <a href="lock-screen.html"> Lock Screen </a>
                </li>
              </ul>
            </li>
            <li className="submenu">
              <a href="#">
                <i className="la la-exclamation-triangle"></i>{" "}
                <span> Error Pages </span> <span className="menu-arrow"></span>
              </a>
              <ul style={{ display: "none" }}>
                <li>
                  <a href="error-404.html">404 Error </a>
                </li>
                <li>
                  <a href="error-500.html">500 Error </a>
                </li>
              </ul>
            </li>
            <li className="submenu">
              <a href="#">
                <i className="la la-hand-o-up"></i> <span> Subscriptions </span>{" "}
                <span className="menu-arrow"></span>
              </a>
              <ul style={{ display: "none" }}>
                <li>
                  <a href="subscriptions.html"> Subscriptions (Admin) </a>
                </li>
                <li>
                  <a href="subscriptions-company.html">
                    {" "}
                    Subscriptions (Company){" "}
                  </a>
                </li>
                <li>
                  <a href="subscribed-companies.html"> Subscribed Companies</a>
                </li>
              </ul>
            </li>
            <li className="submenu">
              <a href="#">
                <i className="la la-columns"></i> <span> Layouts </span>{" "}
                <span className="menu-arrow"></span>
              </a>
              <ul style={{ display: "none" }}>
                <li>
                  <a href="page-layouts.html"> Page Layouts </a>
                </li>
                <li>
                  <a href="page-sidebar.html"> Page with Sidebar </a>
                </li>
                <li>
                  <a href="page-sidebar-full.html"> Page with Sidebar Full</a>
                </li>
                <li>
                  <a href="page-compact-sidebar.html">
                    {" "}
                    Page with Compact Sidebar{" "}
                  </a>
                </li>
                <li>
                  <a href="page-boxed-layout.html"> Page with Boxed Layout </a>
                </li>
                <li>
                  <a href="page-fixed-sidebar.html"> Page with Fixed Sidebar</a>
                </li>
                <li>
                  <a href="page-inner-sidebar.html">
                    {" "}
                    Page with Inner Sidebar{" "}
                  </a>
                </li>
                <li>
                  <a href="page-horizonta-menu.html">
                    {" "}
                    Page with Horizontal Menu{" "}
                  </a>
                </li>
                <li>
                  <a href="page-compact-menu.html"> Page with Compact Menu </a>
                </li>
                <li>
                  <a href="page-mega-menu.html"> Page with Mega Menu </a>
                </li>
                <li>
                  <a href="page-mega-menu-dark.html">
                    {" "}
                    Page with Mega Menu Dark
                  </a>
                </li>
                <li>
                  <a href="page-fixed-footer.html"> Page with Fixed Footer </a>
                </li>
                <li>
                  <a href="page-col-right.html"> Page with Right Col </a>
                </li>
                <li>
                  <a href="page-col-left.html"> Page with Left Col </a>
                </li>
                <li>
                  <a href="page-without-sidebar.html"> Page without Sidebar </a>
                </li>
                <li>
                  <a href="page-logged-in.html"> Page with Login </a>
                </li>
                <li>
                  <a href="page-error.html"> Page with Error 404 </a>
                </li>
                <li>
                  <a href="page-coming-soon.html"> Page with Coming Soon </a>
                </li>
                <li>
                  <a href="page-under-construction.html">
                    {" "}
                    Page with Under Construction
                  </a>
                </li>
                <li>
                  <a href="page-contact-us.html"> Page with Contact Us </a>
                </li>
                <li>
                  <a href="page-search-results.html">
                    {" "}
                    Page with Search Results{" "}
                  </a>
                </li>
                <li>
                  <a href="page-confirmation.html"> Page with Confirmation </a>
                </li>
                <li>
                  <a href="page-multiple-steps-form.html">
                    {" "}
                    Page with Multiple Steps Form{" "}
                  </a>
                </li>
                <li>
                  <a href="page-terms.html"> Page with Terms and Conditions </a>
                </li>
                <li>
                  <a href="page-privacy-policy.html">
                    {" "}
                    Page with Privacy Policy{" "}
                  </a>
                </li>
                <li>
                  <a href="page-faq.html"> Page with FAQ </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SideBar;