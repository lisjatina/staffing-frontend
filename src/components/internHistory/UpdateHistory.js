import React, { Component } from 'react';
import {getInternProjectHistoryById, createInternProjectHistory} from "../../actions/internHistoryActions";
import PropTypes from "prop-types";
import { connect } from "react-redux";

class UpdateHistory extends Component {

    constructor() {
        super()
    
        this.state = {
            id: "",
            internStaffingId: "",
            projectId: "",
            responsiblePersonId: "",
            projectHiringStatusId: "",
            comments: ""     
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
      }

    componentWillReceiveProps(nextProps)  {
       const {
        id,
        internStaffingId,
        projectId,
        responsiblePersonId,
        projectHiringStatusId,
        comments 
       } = nextProps.history;

       this.setState({
        id,
        internStaffingId,
        projectId,
        responsiblePersonId,
        projectHiringStatusId,
        comments     
       });
    }

    componentDidMount(){
        const {id} = this.props.match.params;
        this.props.getInternProjectHistoryById(id, this.props.history);
    }

    onChange(e){
        this.setState({[e.target.name]: e.target.value})
    }

    onSubmit(e){
        e.preventDefault();

        const updatedHistory = {
            "id": this.state.id,
            "internStaffingId": this.state.internStaffingId,
            "projectId": this.state.projectId,
            "responsiblePersonId": this.state.responsiblePersonId,
            "projectHiringStatusId": this.state.projectHiringStatusId,
            "comments": this.state.comments
        };
        this.props.createInternProjectHistory(updatedHistory, this.props.history)
    }

    render() {
        return (
            <div>
            <div className="project">
            <div className="container">
                <div className="row">
                    <div className="col-md-8 m-auto">
                        <h5 className="display-4 text-center">Update Intern Project History</h5>
                        <hr />
                        <form onSubmit = {this.onSubmit}>

                        <div className="form-group">
                                <input type="text" 
                                className="form-control form-control-lg "
                                placeholder="History Id" 
                                disabled
                                name="id"
                                value={this.state.id}
                                onChange = {this.onChange}
                                    />                               
                            </div>                        
                         
                            <div className="form-group">
                                <input type="text" 
                                className="form-control form-control-lg "
                                placeholder="Intern Staffing Id" 
                                name="internStaffingId"
                                value={this.state.internStaffingId}
                                onChange = {this.onChange}
                                />                               
                            </div>

                            <div className="form-group">
                            <input type="text" 
                            className="form-control form-control-lg" 
                            placeholder="Project Id"
                            name ="projectId"    
                            value={this.state.projectId}  
                            onChange = {this.onChange}                       
                           />
                        </div>

                        <div className="form-group">
                             <input type="text" 
                             className="form-control form-control-lg" 
                             placeholder="Responsible person Id"
                             name="responsiblePersonId"  
                             value={this.state.responsiblePersonId} 
                             onChange = {this.onChange}                         
                               />
                            </div>
                            <div className="form-group">
                            <input type="text" 
                            className="form-control form-control-lg" 
                            placeholder="Project Hiring Status Id"
                            name="projectHiringStatusId" 
                            value={this.state.projectHiringStatusId}  
                            onChange = {this.onChange}
                             />
                            </div>   
                            <div className="form-group">
                            <input type="text" 
                            className="form-control form-control-lg"  
                            placeholder="Comments about intern project history"
                            name="comments" 
                            value= {this.state.comments}    
                            onChange = {this.onChange}                          
                                />
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

UpdateHistory.propType ={
    getInternProjectHistoryById: PropTypes.func.isRequired,
    createInternProjectHistory: PropTypes.func.isRequired,
    history: PropTypes.object.isRequired    
};

const mapStateToProps = state => ({
    history: state.history.history
});

export default connect (mapStateToProps, {getInternProjectHistoryById, createInternProjectHistory}) (UpdateHistory);
