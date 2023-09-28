import axios from "axios";
import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Admin = () => {
  const [count, setCount] = useState(0);
  const [comments, setComments] = useState([]);
  const authId = Cookies.get("authId");
  const accessToken = Cookies.get("accessToken");
 
  const company = [
    {
      id: 1,
      companyName: "Global Technologies 2",
      contactName: "Ali Veli",
      dueDate: "7 Eylül 2023",
      status: "Pasif",
    },
    {
      id: 2,
      companyName: "Delta Infotech 2",
      contactName: "Ayşe Tozlu",
      dueDate: "7 Eylül 2023",
      status: "Pasif",
    },
    {
      id: 3,
      companyName: "Cream Inc 2",
      contactName: "Zeki Keser",
      dueDate: "7 Eylül 2023",
      status: "Pasif",
    },
    {
      id: 4,
      companyName: "Company X",
      contactName: "Ahmet Şeker",
      dueDate: "7 Eylül 2023",
      status: "Pasif",
    },
    {
      id: 5,
      companyName: "Company Y",
      contactName: "Melis Can",
      dueDate: "7 Eylül 2023",
      status: "Pasif",
    },
    {
      id: 6,
      companyName: "Company K",
      contactName: "Ahmet Mehmet",
      dueDate: "7 Eylül 2023",
      status: "Pasif",
    },
    {
      id: 7,
      companyName: "Company L",
      contactName: "Veli Kaya",
      dueDate: "7 Eylül 2023",
      status: "Pasif",
    },
  ];

  const handleStatusChange = (comment, newStatus) => {
    const updatedComment = { ...comment, status: newStatus };
    axios
      .put(
        `http://localhost/comment/update-comment/${accessToken}`, // Yorumun benzersiz kimliği (id) ile güncellendiğini varsayalım
        updatedComment,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      )
      .then((res) => {
        setCount(count + 1);
      })
      .catch((error) => {
        console.error("Yorum güncelleme hatası:", error);
      });
  };

  useEffect(() => {
    axios
      .get(`http://localhost/user/getEmployeeByAuthId/${authId}`)
      .then((res) => {
        console.log("Kullanıcı bilgileri:", res.data);
      })
      .catch((error) => {
        console.error("Kullanıcı bilgileri alınamadı:", error);
      });

    axios
      .get(`http://localhost/comment/get-all-pending-comment`)
      .then((res) => {
        setComments(res.data);
        console.log("Onay bekleyen yorumlar:", res.data);
      })
      .catch((error) => {
        console.error("Onay bekleyen yorumlar alınamadı:", error);
      });
  }, [count]);
  return (
    <div className="page-wrapper">
      <div className="content container-fluid">
        <div className="page-header">
          <div className="row">
            <div className="col-sm-12">
              <h3 className="page-title">Hoşgeldin Admin</h3>
              <ul className="breadcrumb">
                <li className="breadcrumb-item active">Panel</li>
              </ul>
            </div>
          </div>
        </div>
        {/* /Page Header */}
        <div className="row">
          <div className="col-md-6 col-sm-6 col-lg-6 col-xl-3">
            <div className="card dash-widget">
              <div className="card-body">
                <span className="dash-widget-icon">
                  <i className="fa fa-building"></i>
                </span>
                <div className="dash-widget-info">
                  <h3>{(Math.random() * 100).toFixed(0)}</h3>
                  <span>Şirket</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-sm-6 col-lg-6 col-xl-3">
            <div className="card dash-widget">
              <div className="card-body">
                <span className="dash-widget-icon">
                  <i className="fa fa-usd"></i>
                </span>
                <div className="dash-widget-info">
                  <h3>{(Math.random() * 300).toFixed(0)}</h3>
                  <span>Toplam Şirket Çalışanı</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-sm-6 col-lg-6 col-xl-3">
            <div className="card dash-widget">
              <div className="card-body">
                <span className="dash-widget-icon">
                  <i className="fa fa-exclamation-triangle"></i>
                </span>
                <div className="dash-widget-info">
                  <h3>218</h3>
                  <span>Pasif Çalışan</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-sm-6 col-lg-6 col-xl-3">
            <div className="card dash-widget">
              <div className="card-body">
                <span className="dash-widget-icon">
                  <i className="fa fa-exclamation-triangle"></i>
                </span>
                <div className="dash-widget-info">
                  <h3>37</h3>
                  <span>Onay Bekleyen Şirket</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6 d-flex">
            <div className="card card-table flex-fill">
              <div className="card-header">
                <h3 className="card-title mb-0">Onay Bekleyen Yorumlar</h3>
              </div>
              <div className="card-body">
                <div className="table-responsive">
                  <table className="table table-nowrap custom-table mb-0">
                    <thead>
                      <tr>
                        <th>Id</th>
                        <th>Başlık</th>
                        <th>İçerik</th>
                        <th>Durum</th>
                      </tr>
                    </thead>
                    <tbody>
                      {comments.map((comment,index) => (
                        <tr key={comment.id}>
                          <td>{index+1}</td>
                          <td>
                            <h2>{comment.commentSubject}</h2>
                          </td>
                          <td>{comment.commentContent}</td>
                          <td>
                          <div className="dropdown">
                            <button
                              className={`btn btn-sm btn-rounded dropdown-toggle ${
                                comment.status === "APPROVED"
                                  ? "btn-success"
                                  : "btn-danger"
                              }`}
                              data-toggle="dropdown"
                              aria-expanded="false"
                            >
                              {comment.status === "APPROVED"
                                ? "Aktif"
                                : "Pasif"}
                            </button>
                            <div className="dropdown-menu">
                              <button
                                className="dropdown-item"
                                onClick={() =>
                                  handleStatusChange(comment, "APPROVED")
                                }
                              >
                                Aktif
                              </button>
                              <button
                                className="dropdown-item"
                                onClick={() =>
                                  handleStatusChange(comment, "PENDING")
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
              <div className="card-footer">
                <Link to="#">Bütün Şirketleri Görüntüle</Link>
              </div>
            </div>
          </div>
          <div className="col-md-6 d-flex">
            <div className="card card-table flex-fill">
              <div className="card-header">
                <h3 className="card-title mb-0">Onay Bekleyen Şirketler</h3>
              </div>
              <div className="card-body">
                <div className="table-responsive">
                  <table className="table custom-table table-nowrap mb-0">
                    <thead>
                      <tr>
                        <th>Şirket ID</th>
                        <th>Şirket Adı</th>
                        <th>Şirket Sahibi</th>
                        <th>Kayıt Tarihi</th>
                        <th>Aktif Et</th>
                      </tr>
                    </thead>
                    <tbody>
                      {company.map((companyItem, index) => (
                        <tr key={companyItem.id}>
                          <td>{index + 1}</td>
                          <td>
                            <h2>
                              <Link to="#">{companyItem.companyName}</Link>
                            </h2>
                          </td>
                          <td>{companyItem.contactName}</td>
                          <td>{companyItem.dueDate}</td>
                          <td>
                            <div className="dropdown action-label">
                              <Link
                                className="btn btn-white btn-sm btn-rounded dropdown-toggle"
                                to="#"
                                data-toggle="dropdown"
                                aria-expanded="false"
                              >
                                <i className="fa fa-dot-circle-o text-danger"></i>{" "}
                                {companyItem.status}
                              </Link>
                              <div className="dropdown-menu dropdown-menu-right">
                                <Link className="dropdown-item" to="#">
                                  <i className="fa fa-dot-circle-o text-success"></i>{" "}
                                  Aktif
                                </Link>
                                <Link className="dropdown-item" to="#">
                                  <i className="fa fa-dot-circle-o text-danger"></i>{" "}
                                  Pasif
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
      </div>
    </div>
  );
};

export default Admin;
