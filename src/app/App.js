import logo from './logo.svg';
import app from './App.css';
import React from 'react'
import Shop from './components/shop';
import About from './components/about'
import Nav from './components/Nav'
import Login from './components/login'
import Register from './components/registration'
import Cart from './components/cart'
import Newp  from './components/newproduct'
import ItemDetail from './components/componentdetail/itemdetails'
import Logout from './components/logout'
import axios from 'axios';
import { BrowserRouter,Route,Switch,withRouter} from "react-router-dom";
import logout from './components/logout';

class App extends React.Component {
  state ={
    quantity:0
  }
  loggedout=()=>{
    this.setState({
      quantity:0
    })
    console.log(this.quantity)
  }

  check = (data)=>{
    if ((this.state.quantity==0)){
      console.log(data)
      {data.map((value,index)=>{
        {localStorage.setItem(value.title,0)}
      })
    }
    this.setState({
    quantity : 1
    })
      return false
    }
    else
    return true
  }

  render(){

  return (
    <div className="App">
    <BrowserRouter>
    <Nav/>
    <Switch>
    <Route path ="/login" render = {() =><Login/>}/>
    <Route path ="/shop" render = {() =><Shop quantity={this.state.quantity} check ={this.check}/>}/>
    <Route path = "/about" exact component = {About}/>
    <Route path = "/new" exact component = {Newp}/>
    <Route path = "/register" exact component = {Register}/>
    <Route path = "/logout" render = {() =><Logout loggedout = {this.loggedout}/>}/>
    <Route path = "/cart" exact component = {Cart}/>
    <Route path = "/shop/:id" exact component = {ItemDetail}/>
    <Route path = "/" exact component = {About}/>
    </Switch>

    </BrowserRouter>
    </div>
  );
  }
}

export default App;
