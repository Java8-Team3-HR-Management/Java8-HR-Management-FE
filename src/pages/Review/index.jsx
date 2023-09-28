import React, { useEffect, useState } from "react";
import "./index.css";
import axios from "axios";
import Cookies from "js-cookie";

// Yıldızlı derecelendirme bileşeni
const StarRating = ({ rating, onChange }) => {
  const stars = Array.from({ length: 5 }, (_, index) => (
    <i
      key={index}
      className={`fa fa-star${index < rating ? "" : "-o"}`}
      aria-hidden="true"
      onClick={() => onChange(index + 1)}
    ></i>
  ));

  return <div className="rating">{stars}</div>;
};

const Review = () => {
  const [comments, setComments] = useState([]);
  const [companys, setComapnys] = useState([]);
  const [count, setCount] = useState(0);
  const [rating, setRating] = useState(0); // Yıldız derecesini tutmak için bir state
  const [selectedCompanyName, setSelectedCompanyName] = useState("Select");
  const [selectedCompanyId, setSelectedCompanyId] = useState(null);
  const role = Cookies.get("decodeRole");
  const companyId = Cookies.get("companyid");
  const onCompanyChange = (e) => {
    const selectedValue = e.target.value;
    const selectedCompany = companys.find(
      (company) => company.id === selectedValue
    );

    if (selectedCompany) {
      setSelectedCompanyName(selectedCompany.companyName);
      setSelectedCompanyId(selectedCompany.id); // Set the selectedCompanyId
      setCount(count + 1);
    } else {
      setSelectedCompanyName("Şirket Seçiniz");
      setSelectedCompanyId(null);
    }
  };
  const onSubmit = (e) => {
    e.preventDefault();

    const accessToken = Cookies.get("accessToken");
    const authId = Cookies.get("decodeId");
    const nameSurname = localStorage.getItem("username");
    const comment = {
      companyName: "TestCompany",
      commentSubject: e.target.commentSubject.value,
      commentContent: e.target.commentContent.value,
      rate: rating, // Yıldız derecesini kullanın
      authId: authId,
      employeeName: nameSurname,
    };

    axios
      .post(`http://localhost/comment/add-comment/${accessToken}`, comment)
      .then((res) => {
        setCount(count + 1);
      })
      .catch((error) => {
        console.error("Hata:", error);
      });
  };

  useEffect(() => {
    if (role === "EMPLOYEE") {
      setSelectedCompanyId(companyId);
    }
    axios.get("http://localhost/company/get-all-company").then((res) => {
      setComapnys(res.data);
    });

    axios
      .get(
        `http://localhost/comment/get-all-approved-comment/${selectedCompanyId}`
      )
      .then((res) => {
        setComments(res.data);
      });
  }, [count]);

  return (
    <div className="page-wrapper">
      <div className="content container-fluid">
        <h1 className="mb-2">{selectedCompanyName}</h1>
        <div className="col-lg-9">
          <select className="form-control" onChange={onCompanyChange}>
            <option>Select</option>
            {companys.map((company) => (
              <option key={company.id} value={company.id}>
                {company.companyName}
              </option>
            ))}
          </select>
        </div>

        <div className="col-md-8 course-details-content">
          <div className="course-details-card mt--40">
            <div className="course-content">
              <h5 className="mb--20">Yorum</h5>
              {selectedCompanyId && (
                <div className="row row--30">
                  <div className="col-lg-4">
                    <div className="rating-box">
                      <div className="rating-number">5.0</div>
                      <StarRating rating={5} onChange={setRating} />{" "}
                      {/* Yıldızlı derecelendirme bileşeni */}
                      <span>(25 Review)</span>{" "}
                    </div>
                  </div>
                  <div className="col-lg-8">
                    <div className="review-wrapper">
                      <div className="single-progress-bar">
                        <div className="rating-text">
                          5 <i className="fa fa-star" aria-hidden="true"></i>{" "}
                        </div>
                        <div className="progress">
                          <div
                            className="progress-bar"
                            role="progressbar"
                            style={{ width: "100%" }}
                            aria-valuenow="100"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                        <span className="rating-value">23</span>{" "}
                      </div>
                      {/* Diğer ilerleme çubukları için aynı modeli tekrarlayın */}
                    </div>
                  </div>
                </div>
              )}
              <div className="comment-wrapper pt--40">
                <div className="section-title">
                  <h5 className="mb--25">Yorumlar</h5>
                </div>
                {selectedCompanyId ? (
                  comments.map((comment) => (
                    <div className="edu-comment" key={comment.id}>
                      <div className="thumbnail">
                        {" "}
                        <img
                          src="https://picsum.photos/200"
                          alt="Comment Images"
                        />{" "}
                      </div>
                      <div className="comment-content">
                        <div className="comment-top">
                          <h6 className="title">{comment.employeeName}</h6>
                          <StarRating rating={comment.rate} />{" "}
                          {/* Yıldızlı derecelendirme bileşeni */}
                        </div>
                        <span className="subtitle">
                          "{comment.commentSubject}"
                        </span>
                        <p>{comment.commentContent}</p>
                      </div>
                    </div>
                  ))
                ) : (
                  <p>Lütfen bir şirket seçiniz.</p>
                )}
                {/* Diğer yorumlar için aynı modeli tekrarlayın */}
              </div>
              {selectedCompanyId &&
              role === "EMPLOYEE" &&
              selectedCompanyId === companyId ? (
                <div className="row">
                  <div className="col-md-12">
                    <div className="card mb-0">
                      <div className="card-header">
                        <h4 className="card-title mb-0">Yorum Yap</h4>
                      </div>
                      <div className="card-body">
                        <form onSubmit={onSubmit}>
                          <div className="row">
                            <div className="col-md-6">
                              <div className="form-group">
                                <label>Başlık:</label>
                                <input
                                  type="text"
                                  className="form-control"
                                  name="commentSubject"
                                />
                              </div>

                              <div className="form-group">
                                <label>Yorumunuz:</label>
                                <textarea
                                  rows="5"
                                  cols="15"
                                  className="form-control"
                                  placeholder="Enter message"
                                  name="commentContent"
                                ></textarea>
                              </div>
                              <div className="form-group">
                                <label>Yıldız Derecesi:</label>
                                <StarRating
                                  style={{ cursor: "pointer" }}
                                  rating={rating}
                                  onChange={setRating}
                                />
                              </div>
                            </div>
                          </div>
                          <div className="text-middle">
                            <button type="submit" className="btn btn-primary">
                              Submit
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <hr></hr>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
