import React from 'react'
import { Link } from 'react-router-dom'
import MyCalendar from './MyCalendar'

const Calendar = () => {
  return (
    <div className="page-wrapper">
			
    <div className="content container-fluid">
    
        <div className="page-header">
            <div className="row align-items-center">
                <div className="col">
                    <h3 className="page-title">Takvim</h3>
                    <ul className="breadcrumb">
                        <li className="breadcrumb-item"><Link to="#">Panel</Link></li>
                        <li className="breadcrumb-item active">Takvim</li>
                    </ul>
                </div>
                <div className="col-auto float-right ml-auto">
                    <Link to="#" className="btn add-btn" data-toggle="modal" data-target="#add_event"><i className="fa fa-plus"></i> Add Event</Link>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-lg-12">
                <div className="card mb-0">
                    <div className="card-body">
                        <div className="row">
                            <div className="col-md-12">
                            
                                <div id="calendar"><MyCalendar/></div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div id="add_event" className="modal custom-modal fade" role="dialog">
        <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title">Add Event</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body">
                    <form>
                        <div className="form-group">
                            <label>Event Name <span className="text-danger">*</span></label>
                            <input className="form-control" type="text"/>
                        </div>
                        <div className="form-group">
                            <label>Event Date <span className="text-danger">*</span></label>
                            <div className="cal-icon">
                                <input className="form-control datetimepicker" type="text"/>
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="control-label">Category</label>
                            <select className="select form-control">
                                <option>Danger</option>
                                <option>Success</option>
                                <option>Purple</option>
                                <option>Primary</option>
                                <option>Pink</option>
                                <option>Info</option>
                                <option>Inverse</option>
                                <option>Orange</option>
                                <option>Brown</option>
                                <option>Teal</option>
                                <option>Warning</option>
                            </select>
                        </div>
                        <div className="submit-section">
                            <button className="btn btn-primary submit-btn">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    
    <div className="modal custom-modal fade" id="event-modal">
        <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title">Event</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body"></div>
                <div className="modal-footer text-center">
                    <button type="button" className="btn btn-success submit-btn save-event">Create event</button>
                    <button type="button" className="btn btn-danger submit-btn delete-event" data-dismiss="modal">Delete</button>
                </div>
            </div>
        </div>
    </div>
    <div className="modal custom-modal fade" id="add-category">
        <div className="modal-dialog">
            <div className="modal-content">
                <div className="modal-header">
                    <button type="button" className="close" data-dismiss="modal">&times;</button>
                    <h4 className="modal-title">Add a category</h4>
                </div>
                <div className="modal-body p-20">
                    <form>
                        <div className="row">
                            <div className="col-md-6">
                                <label className="col-form-label">Category Name</label>
                                <input className="form-control" placeholder="Enter name" type="text" name="category-name"/>
                            </div>
                            <div className="col-md-6">
                                <label className="col-form-label">Choose Category Color</label>
                                <select className="form-control" data-placeholder="Choose a color..." name="category-color">
                                    <option value="success">Success</option>
                                    <option value="danger">Danger</option>
                                    <option value="info">Info</option>
                                    <option value="pink">Pink</option>
                                    <option value="primary">Primary</option>
                                    <option value="warning">Warning</option>
                                    <option value="orange">Orange</option>
                                    <option value="brown">Brown</option>
                                    <option value="teal">Teal</option>
                                </select>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-white" data-dismiss="modal">Close</button>
                    <button type="button" className="btn btn-danger save-category" data-dismiss="modal">Save</button>
                </div>
            </div>
        </div>
    </div>
   
    
</div>
  )
}

export default Calendar