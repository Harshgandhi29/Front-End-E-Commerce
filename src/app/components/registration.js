import { render } from '@testing-library/react';
import React from 'react';
import {Link, withRouter} from 'react-router-dom'
import axios from 'axios';




class register extends React.Component{
    state = {
     id:'',
     name:"",
    email:'',
    password:"",
    errorMessage:"",
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
        axios.post('https://crowdbuy.herokuapp.com/register', {
            name:this.state.name,
            email: this.state.email,
            password: this.state.password
          }).then((response) => {
            console.log(response.data._id);
            this.setState({
                errorMessage:"You are now registered!",
                id:response.data._id
            })
            console.log(this.state.id)
            this.props.history.push('https://gifted-jang-7de344.netlify.app/login')
            window.location.reload(false);
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
            <form  onSubmit={this.handlesubmit}>
            <h3>Register</h3>

            <div className="form-group">
                <label>Full Name</label>
                <input type="text" className="form-control" placeholder="Full Name" name = "name"
                onChange ={this.handlechange}  />
            </div>


            <div className="form-group">
                <label>Email</label>
                <input type="email" className="form-control" placeholder="Enter email" name = "email"
                onChange ={this.handlechange} />
            </div>

            <div className="form-group">
                <label>Password</label>
                <input type="password" className="form-control" placeholder="Enter password" name = "password"
                onChange ={this.handlechange} />
            </div>



            <button type="submit" className="btn btn-dark btn-lg btn-block black">Register</button>
            <div></div>
            {this.state.errorMessage &&
                <div className="error"> { this.state.errorMessage } </div>}

     

            </form>
        </div>
        
    );
    }
}
export default withRouter(register)
