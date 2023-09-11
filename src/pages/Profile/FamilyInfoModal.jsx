import React from 'react'
import { Link } from 'react-router-dom'

const FamilyInfoModal = () => {
  return (
    <div id="family_info_modal" className="modal custom-modal fade" role="dialog">
                <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title"> Aile Bilgileri</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="form-scroll">
                                    <div className="card">
                                        <div className="card-body">
                                            <h3 className="card-title">Aile Üyesi<Link to="#" className="delete-icon"><i className="fa fa-trash-o"></i></Link></h3>
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label>Adı <span className="text-danger">*</span></label>
                                                        <input className="form-control" type="text"/>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label>Yakınlık <span className="text-danger">*</span></label>
                                                        <input className="form-control" type="text"/>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label>Doğum Tarihi <span className="text-danger">*</span></label>
                                                        <input className="form-control" type="text"/>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label>Telefon <span className="text-danger">*</span></label>
                                                        <input className="form-control" type="text"/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className="card">
                                        <div className="card-body">
                                            <h3 className="card-title">Eğitim Bilgileri <Link to="#" className="delete-icon"><i className="fa fa-trash-o"></i></Link></h3>
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label>Ad <span className="text-danger">*</span></label>
                                                        <input className="form-control" type="text"/>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label>Yakınlık <span className="text-danger">*</span></label>
                                                        <input className="form-control" type="text"/>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label>Doğum Tarihi <span className="text-danger">*</span></label>
                                                        <input className="form-control" type="text"/>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label>Telefon <span className="text-danger">*</span></label>
                                                        <input className="form-control" type="text"/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="add-more">
                                                <Link to="#"><i className="fa fa-plus-circle"></i> Ekle</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="submit-section">
                                    <button className="btn btn-primary submit-btn">Gönder</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
  )
}

export default FamilyInfoModal