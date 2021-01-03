
import React from 'react';
import {Link, useHistory} from 'react-router-dom'
import { withRouter } from 'react-router-dom';
import axios from 'axios';

class Logout extends React.Component{

    render(){

        return(
            <div> 
           {localStorage.clear()}
           {   this.props.history.push('/login')}
           {window.location.reload(false)}
            <div>Logout</div>
            </div>
        )
    }
}

export default withRouter(Logout);