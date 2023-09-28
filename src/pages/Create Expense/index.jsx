import axios from "axios";
import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const CreateExpense = () => {
  const id = Cookies.get("decodeId");
  const accessToken = Cookies.get("accessToken");
  const [user,setUser] = useState([]);
  const onSubmit = (e) => {
    e.preventDefault();
    const expense = {
      name: user.name,
      surName: user.surname,
      department: user.department,
      companyId:user.companyId,
      expenditureType:e.target.expenditureType.value,
      amountOfExpenditure:parseFloat(e.target.amountOfExpenditure.value),
    };
    console.log(accessToken);
    console.log(expense);
    axios
    .post(`http://localhost/expense/create-expense/${accessToken}`,expense)
    .then((res) => {
      setUser(res.data);
      console.log(res.data);
      alert("Talebiniz başarı ile alınmıştır.")
    })
    .catch((error) => {
      // if (error.response) {
      //   // Sunucudan gelen hata yanıtını işleme devam et
      //   console.log("Sunucu Hata:", error.response.data);
      //   alert(error.response.data);
      // } else if (error.request) {
      //   // İstek yapılamadı hatasını işleme devam et
      //   console.log("İstek Hatası:", error.request);
      //   alert( error.request);
      // } else {
      //   // Diğer hataları işleme devam et
      //   console.log("Hata:", error.message);
      //   alert( error.message);
      // }
    });
    
  };

  useEffect(() => {
    axios
      .get(`http://localhost/user/getEmployeeByAuthId/${id}`)
      .then((res) => {
        setUser(res.data);
        console.log(res.data);
      })
      .catch((error) => {
        if (error.response) {
          // Sunucudan gelen hata yanıtını işleme devam et
          console.log("Sunucu Hata:", error.response.data);
          alert(error.response.data);
        } else if (error.request) {
          // İstek yapılamadı hatasını işleme devam et
          console.log("İstek Hatası:", error.request);
          alert( error.request);
        } else {
          // Diğer hataları işleme devam et
          console.log("Hata:", error.message);
          alert( error.message);
        }
      });
  }, []);
  return (
    <div className="page-wrapper">
      <div className="content container-fluid">
        <div className="page-header">
          <div className="row">
            <div className="col-sm-12">
              <h3 className="page-title">Harcama Ekle</h3>
              <ul className="breadcrumb">
                <li className="breadcrumb-item">
                  <Link to="#">Panel</Link>
                </li>
                <li className="breadcrumb-item active">Harcama Ekle</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12">
            <form onSubmit={onSubmit}>
              <div className="row">
                <div className="col-md-12 col-sm-12">
                  <div className="table-responsive">
                    <table className="table table-hover table-white">
                      <thead>
                        <tr>
                          <th>Harcama</th>
                          <th>Tutar</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <select className="form-control" name="expenditureType">
                              <option value="ABROAD">YURT DIŞI</option>
                              <option value="DOMESTIC">YURTİÇİ</option>
                              <option value="FOOD">YEMEK</option>
                              <option value="ACCOMMODATION">KONAKLAMA</option>
                            </select>
                          </td>
                          <td>
                            <input
                              className="form-control"
                              type="text"
                              style={{ minWidth: "150px" }}
                              name="amountOfExpenditure"
                            />
                          </td>

                         
                        </tr>
                      </tbody>
                    </table>
                  </div>
                 
                </div>
              </div>
              <div className="submit-section">
                <button className="btn btn-primary submit-btn m-r-10">
                  Talep Et
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateExpense;
