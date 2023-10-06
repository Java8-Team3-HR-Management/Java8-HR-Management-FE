import React, { useEffect, useState } from "react";
import { Bar, Line } from "react-chartjs-2";
import { Link } from "react-router-dom";
import Chart from "chart.js/auto";
import axios from "axios";
import Cookies from "js-cookie";

const Company = () => {
  const [earnings, setEarnings] = useState(0);
  const [previousMonthEarnings, setPreviousMonthEarnings] = useState(0);
  const [expenses, setExpenses] = useState(0);
  const [previousMonthExpenses, setPreviousMonthExpenses] = useState(0);
  const [profit, setProfit] = useState(0);
  const [previousMonthProfit, setPreviousMonthProfit] = useState(0);
  const [earningsPercentage, setEarningsPercentage] = useState(0);
  const [profitPercentage, setProfitPercentage] = useState(0);
  const [expensesPercentage, setExpensesPercentage] = useState(0);
  const accessToken = Cookies.get("accessToken");

  const [count, setCount] = useState(0);
  const [vacations, setVacations] = useState([]);
  const [debts, setDebts] = useState([]);

  const payments = [
    {
      invoiceID: "#INV-0001",
      client: "Global Technologies",
      paymentType: "Paypal",
      paidDate: "11 Mar 2019",
      paidAmount: "$380",
    },
    {
      invoiceID: "#INV-0002",
      client: "Delta Infotech",
      paymentType: "Paypal",
      paidDate: "8 Feb 2019",
      paidAmount: "$500",
    },
    {
      invoiceID: "#INV-0003",
      client: "Cream Inc",
      paymentType: "Paypal",
      paidDate: "23 Jan 2019",
      paidAmount: "$60",
    },
  ];
  const dataBar = {
    labels: ["Gelir 1", "Gelir 2", "Gelir 3", "Gelir 4"],
    datasets: [
      {
        label: "Toplam Gelir",
        backgroundColor: "rgba(75,192,192,0.2)",
        borderColor: "rgba(75,192,192,1)",
        borderWidth: 1,
        hoverBackgroundColor: "rgba(75,192,192,0.4)",
        hoverBorderColor: "rgba(75,192,192,1)",
        data: [
          (Math.random() * 100).toFixed(2),
          (Math.random() * 100).toFixed(2),
          (Math.random() * 100).toFixed(2),
          (Math.random() * 100).toFixed(2),
        ],
      },
    ],
  };
  const optionsBar = {
    scales: {
      x: {
        type: "category", // Ölçek türünü "category" olarak belirtin
        labels: ["Gelir 1", "Gelir 2", "Gelir 3", "Gelir 4"],
      },
      y: {
        beginAtZero: true,
      },
    },
  };

  const dataLine = {
    labels: ["Ocak", "Şubat", "Mart", "Nisan", "Mayıs"],
    datasets: [
      {
        label: "Satışlar",
        fill: false,
        lineTension: 0.1,
        backgroundColor: "rgba(75,192,192,0.4)",
        borderColor: "rgba(75,192,192,1)",
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointBorderColor: "rgba(75,192,192,1)",
        pointBackgroundColor: "#fff",
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "rgba(75,192,192,1)",
        pointHoverBorderColor: "rgba(220,220,220,1)",
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: [
          (Math.random() * 100).toFixed(2),
          (Math.random() * 100).toFixed(2),
          (Math.random() * 100).toFixed(2),
          (Math.random() * 100).toFixed(2),
          (Math.random() * 100).toFixed(2),
        ],
      },
    ],
  };

  const optionsLine = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };
  const handleStatusChangeDebt = (debt, newStatus) => {
    const updatedVacation = { ...debt, eStatus: newStatus };
    const update = {
      userId: updatedVacation.userId,
      vocationStatus: updatedVacation.vocationStatus,
    };
    console.log(update);
    // axios
    //   .put(`http://34.163.83.48/vacation/update-vacation/${accessToken}`, update, {
    //     headers: {
    //       Authorization: `Bearer ${accessToken}`,
    //     },
    //   })
    //   .then((res) => {
    //     setCount(count + 1);
    //     console.log(res.data);
    //   })
    //   .catch((error) => {
    //     console.error("İzin dururm güncelleme hatası:", error);
    //   });
  };
  const handleStatusChange = (vacation, newStatus) => {
    const updatedVacation = { ...vacation, vocationStatus: newStatus };
    const update = {
      userId: updatedVacation.userId,
      vocationStatus: updatedVacation.vocationStatus,
    };
    console.log(update);
    axios
      .put(`http://34.163.83.48/vacation/update-vacation/${accessToken}`, update, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then((res) => {
        setCount(count + 1);
        console.log(res.data);
      })
      .catch((error) => {
        console.error("İzin dururm güncelleme hatası:", error);
      });
  };

  useEffect(() => {
    axios
      .get(`http://34.163.83.48/vacation/find-all-vacation-pending`)
      .then((res) => {
        setVacations(res.data);
      })
      .catch((error) => {
        console.error("Onay bekleyen izinler alınamadı:", error);
      });
    axios
      .get(`http://34.163.83.48/debt/alldebts`)
      .then((res) => {
        setDebts(res.data);
        console.log(res.data);
      })
      .catch((error) => {
        console.error("Onay bekleyen avanslar alınamadı:", error);
      });
  }, [count]);

  useEffect(() => {
    const randomEarnings = (Math.random() * 100000).toFixed(3);
    const previousMonthEarningsValue = (Math.random() * 100000).toFixed(3);
    const expensesValue = (Math.random() * 10000).toFixed(3);
    const previousMonthExpensesValue = (Math.random() * 10000).toFixed(3);

    setEarnings(randomEarnings);
    setExpenses(expensesValue);
    setPreviousMonthEarnings(previousMonthEarningsValue);
    setPreviousMonthExpenses(previousMonthExpensesValue);

    const profitValue = (
      parseFloat(randomEarnings) - parseFloat(expensesValue)
    ).toFixed(3);
    const previousMonthProfitValue = (
      parseFloat(previousMonthEarningsValue) -
      parseFloat(previousMonthExpensesValue)
    ).toFixed(3);

    setProfit(profitValue);
    setPreviousMonthProfit(previousMonthProfitValue);

    const earningsPercentageValue =
      ((parseFloat(randomEarnings) - parseFloat(previousMonthEarningsValue)) /
        parseFloat(previousMonthEarningsValue)) *
      100;
    setEarningsPercentage(earningsPercentageValue.toFixed(2));

    const profitPercentageValue =
      ((parseFloat(profitValue) - parseFloat(previousMonthProfitValue)) /
        parseFloat(previousMonthProfitValue)) *
      100;
    setProfitPercentage(profitPercentageValue.toFixed(2));

    const expensesPercentageValue =
      ((parseFloat(expensesValue) - parseFloat(previousMonthExpensesValue)) /
        parseFloat(previousMonthExpensesValue)) *
      100;
    setExpensesPercentage(expensesPercentageValue.toFixed(2));
  }, []);
  return (
    <div className="page-wrapper">
      <div className="content container-fluid">
        <div className="page-header">
          <div className="row">
            <div className="col-sm-12">
              <h3 className="page-title">Welcome Şirket Adı!</h3>
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
                  <i className="fa fa-user"></i>
                </span>
                <div className="dash-widget-info">
                  <h3>218</h3>
                  <span>Çalışan</span>
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
                  <h3>{(Math.random() * 100).toFixed(0)}</h3>
                  <span>Müşteri</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-sm-6 col-lg-6 col-xl-3">
            <div className="card dash-widget">
              <div className="card-body">
                <span className="dash-widget-icon">
                  <i className="fa fa-diamond"></i>
                </span>
                <div className="dash-widget-info">
                  <h3>{(Math.random() * 200).toFixed(0)}</h3>
                  <span>Görevler</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-sm-6 col-lg-6 col-xl-3">
            <div className="card dash-widget">
              <div className="card-body">
                <span className="dash-widget-icon">
                  <i className="fa fa-cubes"></i>
                </span>
                <div className="dash-widget-info">
                  <h3>{(Math.random() * 100).toFixed(0)}</h3>
                  <span>Projeler</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="card-group m-b-30">
              <div className="card">
                <div className="card-body">
                  <div className="d-flex justify-content-between mb-3">
                    <div>
                      <span className="d-block">Aylık Kazanç</span>
                    </div>
                    <div>
                      <span
                        className={
                          earningsPercentage >= 0
                            ? "text-success"
                            : "text-danger"
                        }
                      >
                        {earningsPercentage >= 0
                          ? `+${earningsPercentage}%`
                          : `${earningsPercentage}%`}
                      </span>
                    </div>
                  </div>
                  <h3 className="mb-3">{earnings}₺</h3>
                  <div className="progress mb-2" style={{ height: "5px" }}>
                    <div
                      className="progress-bar bg-primary"
                      role="progressbar"
                      style={{ width: `${earnings / 1000}%` }}
                      aria-valuenow="40"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                  <p className="mb-0">
                    Bir Önceki Ay Kazanç{"   "}
                    <span className="text-muted">{previousMonthEarnings}₺</span>
                  </p>
                </div>
              </div>

              <div className="card">
                <div className="card-body">
                  <div className="d-flex justify-content-between mb-3">
                    <div>
                      <span className="d-block">Harcamalar</span>
                    </div>
                    <div>
                      <span
                        className={
                          expensesPercentage >= 0
                            ? "text-success"
                            : "text-danger"
                        }
                      >
                        {expensesPercentage >= 0
                          ? `+${expensesPercentage}%`
                          : `${expensesPercentage}%`}
                      </span>
                    </div>
                  </div>
                  <h3 className="mb-3">{expenses}₺</h3>
                  <div className="progress mb-2" style={{ height: "5px" }}>
                    <div
                      className="progress-bar bg-primary"
                      role="progressbar"
                      style={{ width: `${expenses / 1000}%` }}
                      aria-valuenow="40"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                  <p className="mb-0">
                    Bir Önceki Ay Harcamaları{"   "}
                    <span className="text-muted">{previousMonthExpenses}₺</span>
                  </p>
                </div>
              </div>

              <div className="card">
                <div className="card-body">
                  <div className="d-flex justify-content-between mb-3">
                    <div>
                      <span className="d-block">Kâr</span>
                    </div>
                    <div>
                      <span
                        className={
                          profitPercentage >= 0 ? "text-success" : "text-danger"
                        }
                      >
                        {profitPercentage >= 0
                          ? `+${profitPercentage}%`
                          : `${profitPercentage}%`}
                      </span>
                    </div>
                  </div>
                  <h3 className="mb-3">{profit}₺</h3>
                  <div className="progress mb-2" style={{ height: "5px" }}>
                    <div
                      className="progress-bar bg-primary"
                      role="progressbar"
                      style={{ width: `${profit / 1000}%` }}
                      aria-valuenow="40"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                  <p className="mb-0">
                    Bir Önceki Ayı Kârı{"   "}
                    <span className="text-muted">{previousMonthProfit}₺</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="row">
              <div className="col-md-6 text-center">
                <div className="card">
                  <div className="card-body">
                    <h3 className="card-title">Toplam Gelir</h3>
                    <div
                      id="bar-charts"
                      style={{ width: "100%", height: "400px" }}
                    >
                      <Bar data={dataBar} options={optionsBar} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 text-center">
                <div className="card">
                  <div className="card-body">
                    <h3 className="card-title">Satışlar</h3>
                    <div
                      id="line-charts"
                      style={{ width: "100%", height: "400px" }}
                    >
                      <Line data={dataLine} options={optionsLine} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6 d-flex">
            <div className="card card-table flex-fill">
              <div className="card-header">
                <h3 className="card-title mb-0">Onay Bekleyen İzinler</h3>
              </div>
              <div className="card-body">
                <div className="table-responsive">
                  <table className="table table-nowrap custom-table mb-0">
                    <thead>
                      <tr>
                        <th> Id</th>
                        <th>Başlangıç Tarihi</th>
                        <th>Bitiş Tarihi</th>
                        <th>Sebep</th>
                        <th>Durum</th>
                      </tr>
                    </thead>
                    <tbody>
                      {vacations ? (
                        vacations.map((vacation) => (
                          <tr key={vacation.id}>
                            <td>{vacation.id}</td>
                            <td>{vacation.startOfVocationDate}</td>
                            <td>{vacation.endOfVocationDate}</td>
                            <td>{vacation.vocationType}</td>
                            <td>
                              <div className="dropdown">
                                <button
                                  className={`btn btn-sm btn-rounded dropdown-toggle ${
                                    vacation.vocationStatus === "APPROVED"
                                      ? "btn-success"
                                      : "btn-danger"
                                  }`}
                                  data-toggle="dropdown"
                                  aria-expanded="false"
                                >
                                  {vacation.vocationStatus === "APPROVED"
                                    ? "Aktif"
                                    : "Pasif"}
                                </button>
                                <div className="dropdown-menu">
                                  <button
                                    className="dropdown-item"
                                    onClick={() =>
                                      handleStatusChange(vacation, "ACCEPT")
                                    }
                                  >
                                    Aktif
                                  </button>
                                  <button
                                    className="dropdown-item"
                                    onClick={() =>
                                      handleStatusChange(vacation, "PENDING")
                                    }
                                  >
                                    Pasif
                                  </button>
                                </div>
                              </div>
                            </td>
                          </tr>
                        ))
                      ) : (
                        <tr>
                          <td>
                            {" "}
                            Şu anlık onay bekleyen herhangi bir izin bulunamadı
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="card-footer">
                <Link to="#">View all invoices</Link>
              </div>
            </div>
          </div>
          <div className="col-md-6 d-flex">
            <div className="card card-table flex-fill">
              <div className="card-header">
                <h3 className="card-title mb-0">Ödemeler</h3>
              </div>
              <div className="card-body">
                <div className="table-responsive">
                  <table className="table custom-table table-nowrap mb-0">
                    <thead>
                      <tr>
                        <th>Id</th>
                        <th>Son Avans Tarihi</th>
                        <th>Avans Miktarı</th>
                        <th>Durum</th>
                      </tr>
                    </thead>
                    <tbody>
                      {vacations ? (
                        debts.map((debt) => (
                          <tr key={debt.id}>
                            <td>{debt.userId}</td>
                            <td>{debt.lastAdvanceDate}</td>
                            <td>{debt.salary}</td>
                            <td>
                              <div className="dropdown">
                                <button
                                  className={`btn btn-sm btn-rounded dropdown-toggle ${
                                    debt.eStatus === "APPROVED"
                                      ? "btn-success"
                                      : "btn-danger"
                                  }`}
                                  data-toggle="dropdown"
                                  aria-expanded="false"
                                >
                                  {debt.eStatus === "APPROVED"
                                    ? "Aktif"
                                    : "Pasif"}
                                </button>
                                <div className="dropdown-menu">
                                  <button
                                    className="dropdown-item"
                                    onClick={() =>
                                      handleStatusChangeDebt(debt, "ACCEPT")
                                    }
                                  >
                                    Aktif
                                  </button>
                                  <button
                                    className="dropdown-item"
                                    onClick={() =>
                                      handleStatusChangeDebt(debt, "PENDING")
                                    }
                                  >
                                    Pasif
                                  </button>
                                </div>
                              </div>
                            </td>
                          </tr>
                        ))
                      ) : (
                        <tr>
                          <td>
                            {" "}
                            Şu anlık onay bekleyen herhangi bir izin bulunamadı
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="card-footer">
                <Link to="#">View all payments</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Company;
