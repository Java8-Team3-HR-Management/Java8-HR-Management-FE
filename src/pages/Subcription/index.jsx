import React from "react";
import { Link } from "react-router-dom";

// Plan verilerini bir JavaScript nesnesi olarak tanımlayın
const planlar = [
  {
    id: 1,
    gunlukSure: "30 Günlük",
    fiyat: "300₺",
    yonetici: "5 Yönetici",
    calisan: "3000 Çalışan",
    proje: "Sınırsız Proje",
    depolama: "5 TB Depolama Alanı",
    mesajlasma: "Sınırsız Mesajlaşma",
  },
  {
    id: 2,
    gunlukSure: "60 Günlük",
    fiyat: "550₺",
    yonetici: "5 Yönetici",
    calisan: "3000 Çalışan",
    proje: "Sınırsız Proje",
    depolama: "5 TB Depolama Alanı",
    mesajlasma: "Sınırsız Mesajlaşma",
  },
  {
    id: 3,
    gunlukSure: "90 Günlük",
    fiyat: "800₺",
    yonetici: "5 Yönetici",
    calisan: "3000 Çalışan",
    proje: "Sınırsız Proje",
    depolama: "5 TB Depolama Alanı",
    mesajlasma: "Sınırsız Mesajlaşma",
  },
];

const Subscription = () => {
  return (
    <div className="content container-fluid">
      <div className="container">
        <div className="text-center mt-5 mb-5">
          <h1>Lütfen Abonelik Planı Seçiniz</h1>
        </div>
      </div>

      <div className="row">
        <div className="col-lg-10 mx-auto">
          <div className="row justify-content-center mb-4">
            <div className="col-auto">
              <nav className="nav btn-group">
                <span
                  to="#monthly"
                  className="btn btn-outline-secondary active show"
                  data-toggle="tab"
                >
                  Aylık Abonelikler
                </span>
              </nav>
            </div>
          </div>
          <div className="tab-content">
            <div className="tab-pane fade active show" id="monthly">
              <div className="row mb-30 equal-height-cards">
                {planlar.map((plan) => (
                  <div className="col-md-4" key={plan.id}>
                    <div className="card pricing-box">
                      <div className="card-body d-flex flex-column">
                        <div className="mb-4">
                          <h3>{plan.gunlukSure}</h3>
                          <span className="display-4">{plan.fiyat}</span>
                        </div>
                        <ul>
                          <li>
                            <i className="fa fa-check"></i> <b>{plan.yonetici}</b>
                          </li>
                          <li>
                            <i className="fa fa-check"></i> <b>{plan.calisan}</b>
                          </li>
                          <li>
                            <i className="fa fa-check"></i> {plan.proje}
                          </li>
                          <li>
                            <i className="fa fa-check"></i> {plan.depolama}
                          </li>
                          <li>
                            <i className="fa fa-check"></i> {plan.mesajlasma}
                          </li>
                        </ul>
                        <Link
                          to="/register"
                          className="btn btn-lg btn-outline-secondary mt-auto"
                        >
                          Seç
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscription;
