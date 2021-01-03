
import React from 'react';
import {Link, useHistory} from 'react-router-dom'
import { withRouter } from 'react-router-dom';
import axios from 'axios';

class Cart extends React.Component{
    state ={
        local : localStorage.getItem("id"),
        items:[],
        a:0
    }
    
    componentDidMount  =()=>{

        localStorage.setItem("total", 0)
        axios.get('https://crowdbuy.herokuapp.com/getcart',{
            headers: {
              'Authorization': `Bearer ${localStorage.getItem("jwt")}`
            }}

    ).then((response)=>{
        console.log(response)
        this.setState({
            items:response.data,
            total:0
        })
console.log(response.data)
    })
}

delete =(data,total)=>{
    axios.post('https://crowdbuy.herokuapp.com/getcart',{
        data:data
    },{
        headers: {
          'Authorization': `Bearer ${localStorage.getItem("jwt")}`
        }}).then((response)=>{
        console.log(response)
    })
    var a =  parseFloat(localStorage.getItem('total'))
    localStorage.setItem('total', a - total)
    window.location.reload(false);
}

sum = (total)=>{
    var a = parseFloat(localStorage.getItem('total'))
    localStorage.setItem('total', a + total)
}
render(){
    return(
        <div style={{margin:"auto",width:"25%"} }> 
        <div  style={{alignContent:"center"} } class="col s12 m6 ">
          <div style={{height: "auto",width:"450px"} } class="card black">
            <div class="card-content white-text">
        <ul class="collection with-header">
        <li class="collection-header red darken-2"><h4>Shopping Cart</h4></li>

      {this.state.items.map((value,index)=>{

              return (
            <div class="column">
            { (localStorage.getItem(value.title)==0)?
                <div></div>
                :(
                    
                    <li style={{color:"black"}}class="collection-item "><div>{value.title} $
                    {
                        parseFloat(value.price)* parseFloat(localStorage.getItem(value.title))
                       }
                       
                    <a class="secondary-content ">
                   <a onClick ={()=>{this.delete(value._id,( parseFloat(value.price)* parseFloat(localStorage.getItem(value.title))))}}class="waves-effect waves-light btn-medium black-text">Remove All</a>

                </a>
                </div>
               
                </li>
              

                )}
                {  this.sum(parseFloat(value.price)* parseFloat(localStorage.getItem(value.title)))}
            </div>
              ) })}
              <li class="collection-header lighten-2"><h5 style={{color:"black"}}>$ {localStorage.getItem('total')} </h5></li> </ul> </div> </div>   </div> </div>
 )

        }}
export default withRouter(Cart);