import axios from "axios";
import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Expense = () => {
  const authId = Cookies.get("authId");
  const [expense, setExpense] = useState([]);
  const [count, setCount] = useState(0);
  const companyId = Cookies.get("companyid");
  const role = Cookies.get("decodeRole");
  const accessToken = Cookies.get("accessToken");
  const handleStatusChange = (expense, newStatus) => {
    const updatedExpense = { ...expense, approvalStatus: newStatus };
    axios
      .put(
        `http://34.163.83.48/expense/approval-expense/${accessToken}`,
        updatedExpense,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      )
      .then((res) => {
        setCount(count + 1);
        console.log(res.data);
      })
      .catch((error) => {
        if (error.response) {
          // Sunucudan gelen hata yanıtını işleme devam et
          console.log("Sunucu Hata:", error.response.data.message);
          alert(error.response.data);
        } else if (error.request) {
          // İstek yapılamadı hatasını işleme devam et
          console.log("İstek Hatası:", error.request);
          alert(error.request);
        } else {
          // Diğer hataları işleme devam et
          console.log("Hata:", error.message);
          alert(error.message);
        }
      });
  };
  const handleSearch = (e) => {
    const searchTerm = e.target.value.toLowerCase();

    if (searchTerm === "") {
      axios
        .get(`http://34.163.83.48/expense/get-all-expense/${companyId.toString()}`)
        .then((res) => setExpense(res.data));
    } else {
      const filteredExpens = expense.filter((expense) =>
        expense.name.toLowerCase().includes(searchTerm)
      );
      setExpense(filteredExpens);
    }
  };
  useEffect(() => {
    console.log(role);
    axios
      .get(`http://34.163.83.48/expense/get-all-expense/${companyId.toString()}`)
      .then((res) => {
        setExpense(res.data);
      })
      .catch((error) => {
        if (error.response) {
          // Sunucudan gelen hata yanıtını işleme devam et
          console.log("Sunucu Hata:", error.response.data);
          alert(error.response.data);
        } else if (error.request) {
          // İstek yapılamadı hatasını işleme devam et
          console.log("İstek Hatası:", error.request);
          alert(error.request);
        } else {
          // Diğer hataları işleme devam et
          console.log("Hata:", error.message);
          alert(error.message);
        }
      });
  }, [count]);

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
            {role !== "MANAGER" || role !== "EMPLOYEE" ? (
              <div className="col-auto float-right ml-auto">
                <Link to="/create-expense" className="btn add-btn">
                  <i className="fa fa-plus"></i> Harcama Ekle
                </Link>
              </div>
            ) : (
             ""
            )}
          </div>
        </div>
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

        <div className="row">
          <div className="col-md-12">
            <div className="table-responsive">
              <table className="table table-striped custom-table mb-0">
                <thead>
                  <tr>
                    <th>Harcama No</th>
                    <th>Ad Soyad</th>
                    <th>Departman</th>
                    <th>Tür</th>
                    <th>Tutar</th>
                    <th>Durum</th>
                  </tr>
                </thead>
                <tbody>
                  {expense.map((item) => (
                    <tr key={item.id}>
                      <td>{item.id}</td>
                      <td>
                        {item.name} {item.surName}
                      </td>
                      <td>{item.department}</td>
                      <td>{item.expenditureType}</td>
                      <td>{item.amountOfExpenditure}</td>
                      <td>
                        <div
                          className={`dropdown ${
                            role !== "MANAGER" ? "readonly" : ""
                          }`}
                        >
                          <button
                            className={`btn btn-sm btn-rounded dropdown-toggle ${
                              item.approvalStatus === "APPROVED"
                                ? "btn-success"
                                : "btn-danger"
                            }`}
                            data-toggle="dropdown"
                            aria-expanded="false"
                            disabled={role !== "MANAGER"} // role "MANAGER" değilse elementi devre dışı bırak
                          >
                            {item.approvalStatus === "APPROVED"
                              ? "Aktif"
                              : "Pasif"}
                          </button>
                          <div className="dropdown-menu">
                            <button
                              className="dropdown-item"
                              onClick={() =>
                                handleStatusChange(item, "APPROVED")
                              }
                            >
                              Aktif
                            </button>
                            <button
                              className="dropdown-item"
                              onClick={() =>
                                handleStatusChange(item, "PENDING")
                              }
                            >
                              Pasif
                            </button>
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
