import React from 'react'
import { Link } from 'react-router-dom'

const ProfileTab = () => {
  return (
    <div id="emp_profile" className="pro-overview tab-pane fade show active">
    <div className="row">
        <div className="col-md-6 d-flex">
            <div className="card profile-box flex-fill">
                <div className="card-body">
                    <h3 className="card-title">Personel Bilgileri <Link to="#" className="edit-icon" data-toggle="modal" data-target="#personal_info_modal"><i className="fa fa-pencil"></i></Link></h3>
                    <ul className="personal-info">
                        <li>
                            <div className="title">Pasaport No.</div>
                            <div className="text">9876543210</div>
                        </li>
                        <li>
                            <div className="title">Pasaport Bitiş Süresi</div>
                            <div className="text">9876543210</div>
                        </li>
                        <li>
                            <div className="title">Telefon</div>
                            <div className="text"><Link to="">9876543210</Link></div>
                        </li>
                        <li>
                            <div className="title">Milliyet</div>
                            <div className="text">Indian</div>
                        </li>
                        <li>
                            <div className="title">Din</div>
                            <div className="text">Christian</div>
                        </li>
                        <li>
                            <div className="title">Evlilik Durumu</div>
                            <div className="text">Evli</div>
                        </li>
                        <li>
                            <div className="title">Eşin Çalışma Durumu</div>
                            <div className="text">Hayır</div>
                        </li>
                        <li>
                            <div className="title">Çocuk sayısı</div>
                            <div className="text">2</div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="col-md-6 d-flex">
            <div className="card profile-box flex-fill">
                <div className="card-body">
                    <h3 className="card-title">Acil durum Bilgileri <Link to="#" className="edit-icon" data-toggle="modal" data-target="#emergency_contact_modal"><i className="fa fa-pencil"></i></Link></h3>
                    <h5 className="section-title">Birincil</h5>
                    <ul className="personal-info">
                        <li>
                            <div className="title">Adı</div>
                            <div className="text">John Doe</div>
                        </li>
                        <li>
                            <div className="title">Yakınlık</div>
                            <div className="text">Father</div>
                        </li>
                        <li>
                            <div className="title">Telefon </div>
                            <div className="text">9876543210, 9876543210</div>
                        </li>
                    </ul>
                    <hr/>
                    <h5 className="section-title">İkincil</h5>
                    <ul className="personal-info">
                        <li>
                            <div className="title">Adı</div>
                            <div className="text">Karen Wills</div>
                        </li>
                        <li>
                            <div className="title">Yakınlık</div>
                            <div className="text">Brother</div>
                        </li>
                        <li>
                            <div className="title">Telefon </div>
                            <div className="text">9876543210, 9876543210</div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <div className="row">
        <div className="col-md-6 d-flex">
            <div className="card profile-box flex-fill">
                <div className="card-body">
                    <h3 className="card-title">Banka Bilgileri</h3>
                    <ul className="personal-info">
                        <li>
                            <div className="title">Banka Adı</div>
                            <div className="text">ICICI Bank</div>
                        </li>
                        <li>
                            <div className="title">Hesap No</div>
                            <div className="text">159843014641</div>
                        </li>
                        <li>
                            <div className="title">IFSC Kodu</div>
                            <div className="text">ICI24504</div>
                        </li>
                        <li>
                            <div className="title">PAN No</div>
                            <div className="text">TC000Y56</div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="col-md-6 d-flex">
            <div className="card profile-box flex-fill">
                <div className="card-body">
                    <h3 className="card-title">Aile Bilgileri <Link to="#" className="edit-icon" data-toggle="modal" data-target="#family_info_modal"><i className="fa fa-pencil"></i></Link></h3>
                    <div className="table-responsive">
                        <table className="table table-nowrap">
                            <thead>
                                <tr>
                                    <th>Adı</th>
                                    <th>Yakınlık</th>
                                    <th>Doğum Tarihi</th>
                                    <th>Telefon</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Leo</td>
                                    <td>Brother</td>
                                    <td>Feb 16th, 2019</td>
                                    <td>9876543210</td>
                                    <td className="text-right">
                                        <div className="dropdown dropdown-action">
                                            <Link aria-expanded="false" data-toggle="dropdown" className="action-icon dropdown-toggle" to="#"><i className="material-icons">more_vert</i></Link>
                                            <div className="dropdown-menu dropdown-menu-right">
                                                <Link to="#" className="dropdown-item"><i className="fa fa-pencil m-r-5"></i> Edit</Link>
                                                <Link to="#" className="dropdown-item"><i className="fa fa-trash-o m-r-5"></i> Delete</Link>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="row">
        <div className="col-md-6 d-flex">
            <div className="card profile-box flex-fill">
                <div className="card-body">
                    <h3 className="card-title">Eğitim Bilgileri <Link to="#" className="edit-icon" data-toggle="modal" data-target="#education_info"><i className="fa fa-pencil"></i></Link></h3>
                    <div className="experience-box">
                        <ul className="experience-list">
                            <li>
                                <div className="experience-user">
                                    <div className="before-circle"></div>
                                </div>
                                <div className="experience-content">
                                    <div className="timeline-content">
                                        <Link to="#" className="name">International College of Arts and Science (UG)</Link>
                                        <div>Bsc Computer Science</div>
                                        <span className="time">2000 - 2003</span>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="experience-user">
                                    <div className="before-circle"></div>
                                </div>
                                <div className="experience-content">
                                    <div className="timeline-content">
                                        <Link to="#/" className="name">International College of Arts and Science (PG)</Link>
                                        <div>Msc Computer Science</div>
                                        <span className="time">2000 - 2003</span>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-md-6 d-flex">
            <div className="card profile-box flex-fill">
                <div className="card-body">
                    <h3 className="card-title">Tecrübe <Link to="#" className="edit-icon" data-toggle="modal" data-target="#experience_info"><i className="fa fa-pencil"></i></Link></h3>
                    <div className="experience-box">
                        <ul className="experience-list">
                            <li>
                                <div className="experience-user">
                                    <div className="before-circle"></div>
                                </div>
                                <div className="experience-content">
                                    <div className="timeline-content">
                                        <Link to="#/" className="name">Web Designer at Zen Corporation</Link>
                                        <span className="time">Jan 2013 - Present (5 years 2 months)</span>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="experience-user">
                                    <div className="before-circle"></div>
                                </div>
                                <div className="experience-content">
                                    <div className="timeline-content">
                                        <Link to="#/" className="name">Web Designer at Ron-tech</Link>
                                        <span className="time">Jan 2013 - Present (5 years 2 months)</span>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="experience-user">
                                    <div className="before-circle"></div>
                                </div>
                                <div className="experience-content">
                                    <div className="timeline-content">
                                        <Link to="#/" className="name">Web Designer at Dalt Technology</Link>
                                        <span className="time">Jan 2013 - Present (5 years 2 months)</span>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default ProfileTab