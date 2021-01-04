import { render } from '@testing-library/react';

import React from 'react';
import {Link, useHistory} from 'react-router-dom'
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import { RssFeed } from '@material-ui/icons';


 class Login extends React.Component{
    state = {
    email:'',
    password:"",
    errorMessage:"",
    checking :false,
    }

    handlechange = (event)=>{
        const isCheckbox = event.target.type === "checkbox"
        this.setState({
            [event.target.name]: isCheckbox ?
            event.target.checked
            :event.target.value
        })
    }
    handlesubmit=(event)=>{
        event.preventDefault(); //stops from refreshing the form
        axios.post('https://crowdbuy.herokuapp.com/login', {
            email: this.state.email,
            password: this.state.password
          }).then((response) => {   
            this.setState({
                errorMessage:"You are logging in"
            })
            console.log(response.data)
            localStorage.setItem("jwt", response.data[0])
            localStorage.setItem("id", response.data[1])
       
            localStorage.setItem("name", response.data[2])
            console.log( 'login')
            console.log( localStorage.getItem('jwt'))
            console.log( localStorage.getItem('id'))
            this.props.history.push('/shop')
            // window.location.reload(false);
    
          }, (error) => {
              this.setState({
                  errorMessage:error.response.data
              })
            console.log(error.response.data);
          });
         
    }

    render(){
        return(
            <div style={{maxWidth:"550px", margin:"0px auto"}}className="form">
            <form onSubmit={this.handlesubmit}>
            <div className="form-in">
            <h3><u>Log in</u></h3>

            <div className="form-group">
                <label>Email</label>
                <input type="email" className="form-control" name = "email"
                 onChange ={this.handlechange} placeholder="Enter email" />
            </div>

            <div className="form-group">
                <label>Password</label>
                <input name = "password"
                type = "password"
                 value = {this.state.password}
                 onChange ={this.handlechange} className="form-control" placeholder="Enter password" />
            </div>


            <button  style = {{backgroundColor:"black"}}type="submit" className="btn btn-dark btn-lg btn-block">Sign in</button>

            {this.state.errorMessage &&
            <div>{ this.state.errorMessage } </div>}
            </div>
        </form>
        </div>
    );
    }
}
export default withRouter(Login)
