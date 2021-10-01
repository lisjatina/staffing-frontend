import React, { Component } from 'react'
import CreateButton from './internHistory/CreateButton';
import InternProjectistory from './internHistory/InternProjectHistory';
import { connect } from "react-redux";
import {getInternProjectHistoryList} from "../actions/internHistoryActions";
import PropTypes from "prop-types";

class FrontPage extends Component {

    componentDidMount() {
        this.props.getInternProjectHistoryList();
      }

    render() {   
        const {histories} = this.props.history;
        
        return (
            <div className="projects">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h1 className="display-4 text-center">Intern Project History</h1>
                        <br />
                        <CreateButton/>
                        <br />
                        <hr />  
                        
                        {histories.map(history => (
                            <InternProjectistory key={history.id} history={history} />
                          ))}    
                    </div>
                </div>
            </div>
        </div>
        );
    }
}

FrontPage.propTypes ={
    history:PropTypes.object.isRequired,
    getInternProjectHistoryList: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    history: state.history,
  });

export default connect(mapStateToProps, {getInternProjectHistoryList})(FrontPage);
