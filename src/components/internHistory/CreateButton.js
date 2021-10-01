import React from 'react';
import { Link } from 'react-router-dom';

const CreateButton = () => {
    return (
        <React.Fragment>
        <Link to ="/addInternHistory" 
        className="btn btn-lg btn-info">
        Create new Intern Project History 
    </Link>
    </React.Fragment>
    )
}

export default CreateButton; 
