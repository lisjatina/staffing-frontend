import React, { Component } from 'react';
import { Link } from "react-router-dom";

class InternProjectHistory extends Component {
    render() {
        const {history} = this.props;
        return (

<div className="container">
<div className="card card-body bg-light mb-3">
    <div className="row">
        <div className="col-2">
            <span className="mx-auto">Intern Project History Nr. {history.id}</span>
        </div>
        <div className="col-lg-6 col-md-20 col-20">
            <h5>Information about intern project history:</h5>            
              <p className ="paragraph2">Intern Staffing id: {history.internStaffingId}</p>
              <p className ="paragraph2">Project id: {history.projectId}</p>
              <p className ="paragraph2">Responsible Person id: {history.responsiblePersonId}</p>
              <p className ="paragraph2">Project hiring status id: {history.projectHiringStatusId}</p>
              <p className ="paragraph2">Comments: {history.comments}</p>
        </div>
        <div className="col-md-4 d-none d-lg-block">
            <ul className="list-group">
                <a href="#">
                    <li className="list-group-item board">
                        <i className="fa fa-flag-checkered pr-1"> Project Board </i>
                    </li>
                </a>
                <Link to = {`/updateInternHistory/${history.id}`}>
                    <li className="list-group-item update">
                        <i className="fa fa-edit pr-1"> Update History</i>
                    </li>
                </Link>
                <a href="">
                    <li className="list-group-item delete">
                        <i className="fa fa-minus-circle pr-1"> Delete History</i>
                    </li>
                </a>
            </ul>
        </div>
    </div>
</div>
</div>
        )
    }
}

export default InternProjectHistory;

