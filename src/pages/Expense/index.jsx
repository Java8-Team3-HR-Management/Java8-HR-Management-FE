import React, { useState } from "react";
import { Link } from "react-router-dom";

const Expense = () => {
  const tableData = [
    {
      id: 1,
      invoiceNumber: "#INV-0001",
      client: "Global Technologies",
      createdDate: "11 Mar 2019",
      dueDate: "17 Mar 2019",
      amount: "$2099",
      status: "Paid",
    },
    {
      id: 2,
      invoiceNumber: "#INV-0002",
      client: "Delta Infotech",
      createdDate: "11 Mar 2019",
      dueDate: "17 Mar 2019",
      amount: "$2099",
      status: "Sent",
    },
    {
      id: 3,
      invoiceNumber: "#INV-0003",
      client: "Cream Inc",
      createdDate: "11 Mar 2019",
      dueDate: "17 Mar 2019",
      amount: "$2099",
      status: "Partially Paid",
    },
  ];

  // Status filtresi için bir state tanımlayın
  const [statusFilter, setStatusFilter] = useState("All"); // Varsayılan olarak "All" seçili

  // Tabloyu "Status" sütununa göre filtrelemek için bir işlev
  const filteredTableData = statusFilter === "All"
    ? tableData
    : tableData.filter(item => item.status === statusFilter);

  return (
    <div className="page-wrapper">
      <div className="content container-fluid">
        <div className="page-header">
          <div className="row align-items-center">
            <div className="col">
              <h3 className="page-title">Harcamalar</h3>
              <ul className="breadcrumb">
                <li className="breadcrumb-item">
                  <Link to="index.html">Panel</Link>
                </li>
                <li className="breadcrumb-item active">Harcamalar</li>
              </ul>
            </div>
            <div className="col-auto float-right ml-auto">
              <Link to="/create-expense" className="btn add-btn">
                <i className="fa fa-plus"></i> Harcama Ekle
              </Link>
            </div>
          </div>
        </div>
        <div className="row filter-row">
          <div className="col-sm-6 col-md-3">
            <div className="form-group form-focus">
              <div className="cal-icon">
                <input
                  className="form-control floating datetimepicker"
                  type="text"
                />
              </div>
              <label className="focus-label">From</label>
            </div>
          </div>
          <div className="col-sm-6 col-md-3">
            <div className="form-group form-focus">
              <div className="cal-icon">
                <input
                  className="form-control floating datetimepicker"
                  type="text"
                />
              </div>
              <label className="focus-label">To</label>
            </div>
          </div>
          <div className="col-sm-6 col-md-3">
            <div className="form-group form-focus select-focus">
              <select className="select floating">
                <option>Select Status</option>
                <option>Pending</option>
                <option>Paid</option>
                <option>Partially Paid</option>
              </select>
              <label className="focus-label">Status</label>
            </div>
          </div>
          <div className="col-sm-6 col-md-3">
            <Link to="#" className="btn btn-success btn-block">
              {" "}
              Ara{" "}
            </Link>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
            <div className="table-responsive">
            <table className="table table-striped custom-table mb-0">
            <thead>
              <tr>
                <th>#</th>
                <th>Invoice Number</th>
                <th>Client</th>
                <th>Created Date</th>
                <th>Due Date</th>
                <th>Amount</th>
                <th>Status</th>
                <th className="text-right">Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredTableData.map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>
                    <Link to={`/expense-detail`}>
                      {item.invoiceNumber}
                    </Link>
                  </td>
                  <td>{item.client}</td>
                  <td>{item.createdDate}</td>
                  <td>{item.dueDate}</td>
                  <td>{item.amount}</td>
                  <td>
                    <span className={`badge ${getStatusBadgeClass(item.status)}`}>
                      {item.status}
                    </span>
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
                        <Link className="dropdown-item" to="edit-invoice.html">
                          <i className="fa fa-pencil m-r-5"></i> Edit
                        </Link>
                        <Link className="dropdown-item" to="invoice-view.html">
                          <i className="fa fa-eye m-r-5"></i> View
                        </Link>
                        <Link className="dropdown-item" to="#">
                          <i className="fa fa-file-pdf-o m-r-5"></i> Download
                        </Link>
                        <Link className="dropdown-item" to="#">
                          <i className="fa fa-trash-o m-r-5"></i> Delete
                        </Link>
                      </div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Expense;

function getStatusBadgeClass(status) {
    switch (status) {
      case "Paid":
        return "bg-inverse-success";
      case "Sent":
        return "bg-inverse-info";
      case "Partially Paid":
        return "bg-inverse-warning";
      default:
        return "";
    }
  }
