
import React from 'react';
import {Link, useHistory} from 'react-router-dom'
import { withRouter } from 'react-router-dom';
import axios from 'axios';

class Logout extends React.Component{
    componentDidMount() {
        localStorage.clear()
          this.props.history.push('/')
    }
    render(){

        return(
            <div> 
            <div>Logout</div>
            </div>
        )
    }
}

export default withRouter(Logout);