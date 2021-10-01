import React, { Component } from 'react';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {createInternProjectHistory} from "../../actions/internHistoryActions";
import classnames from "classnames";

class AddInternHistory extends Component {
    constructor(){
        super()
        this.state={
            internStaffingId: "",
            projectId: "",
            responsiblePersonId: "",
            projectHiringStatusId: "",
            comments: "",
            errors: {}
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.errors) {
          this.setState({ errors: nextProps.errors });
        }
      }

    onChange(e){
        this.setState({[e.target.name]: e.target.value})
    }

    onSubmit(e){
        e.preventDefault();
        const newInternProjectHistory ={
            "internStaffingId": this.state.internStaffingId,
            "projectId": this.state.projectId,
            "responsiblePersonId": this.state.responsiblePersonId,
            "projectHiringStatusId": this.state.projectHiringStatusId,
            "comments": this.state.comments   
        };
        this.props.createInternProjectHistory(newInternProjectHistory, this.props.history)
    }

    render() {
        const { errors } = this.state;

        return (
            <div>
            <div className="project">
            <div className="container">
                <div className="row">
                    <div className="col-md-8 m-auto">
                        <h1 className="display-8 text-center">Create new intern project history</h1>
                        <hr />
                        <form onSubmit={this.onSubmit}>
                            <div className="form-group">
                                <input type="text" 
                                className={classnames("form-control form-control-lg ", {"is-invalid":errors.internStaffingId} )}
                                placeholder="Intern Staffing Id" 
                                name="internStaffingId"
                                value={this.state.internStaffingId}
                                onChange={this.onChange}/>
                            </div>
                            <div className="form-group">
                                <input type="text" 
                                className="form-control form-control-lg" 
                                placeholder="Project Id"
                                name ="projectId" 
                                value={this.state.projectId}
                                onChange={this.onChange}/>
                            </div>
                             <div className="form-group">
                             <input type="text" 
                             className="form-control form-control-lg" 
                                placeholder="Responsible person Id"
                                name="responsiblePersonId"
                                value={this.state.responsiblePersonId}
                                onChange={this.onChange}/>
                            </div>
                            <div className="form-group">
                            <input type="text" 
                            className="form-control form-control-lg" 
                                placeholder="Project Hiring Status Id"
                                name="projectHiringStatusId"
                                value={this.state.projectHiringStatusId}
                                onChange={this.onChange}/>
                            </div>   
                            <div className="form-group">
                            <input type="text" 
                            className="form-control form-control-lg"  
                                placeholder="Comments about intern project history"
                                name="comments"
                                value= {this.state.comments}
                                onChange={this.onChange}/>
                            </div>                     
          
                            <input type="submit" className="btn btn-primary btn-block mt-4" />
                        </form>
                    </div>
                </div>
            </div>
        </div> 
            </div>
        )
    }
}

AddInternHistory.propTypes = {
    createInternProjectHistory: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    errors: state.errors
  });

export default connect(null, {createInternProjectHistory}) (AddInternHistory);
