import { render } from '@testing-library/react';
import { AccessAlarm, ThreeDRotation } from '@material-ui/icons';
import React,{useState} from 'react';
import {Link, useHistory} from 'react-router-dom'
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import { RssFeed } from '@material-ui/icons';
import ImageUploader from 'react-images-upload';

class NewP extends React.Component{

    state={
        title:"",
        description:"",
        loaded:false,
        img:" ",
        errorMessage:""
    }



fileSelectedHandler=event=>{
 const fd = new FileReader();
  fd.readAsDataURL(event.target.files[0])
  fd.onloadend=()=>{
    console.log(fd.result)
    console.log('true')
    this.setState({
      img:fd.result,
      loaded:true
    })
    console.log(fd.result)

  }
}


    handlechange = (event)=>{
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    handlesubmit= (event)=>{
        event.preventDefault();
        if(this.state.loaded){
        axios.post('https://crowdbuy.herokuapp.com/product', {
            title: this.state.title,
            description: this.state.description,
            price:this.state.price,
            URL:this.state.img,
            userId: localStorage.getItem('id')
          }).then((response) => {
            this.setState({
                errorMessage:"Item has been added Successfully!"
                
            })
            this.props.history.push('/shop')},
            (error)=>{
              this.setState({
                
                errorMessage:"Please Try Agin, All Entries Are Required"
            }
            )
          
          
          }

    
          )}
        else{
          this.setState({
                
            errorMessage:"Please Try Agin, All Entries Are Required"
        }
        )
        }
        }
        
        
        
    render(){
        return(
            <div style={{maxWidth:"550px", margin:"0px auto"}} className="row">
    <div class="col s12 m6">
      <div class="card blue-grey darken-1">
        <div class="card-content white-text">
          <span class="card-title">Product</span>
          <p> <div class="row">
          <form class="col s12"> 
          <div class="row">
          <div class="input-field col s6">
          <input id="input_text" type="text" onChange ={this.handlechange} name = "title" data-length="10"/>
          <label for="input_text">Product Title</label>
          </div>
          <div class="input-field col s6">
          <input id="input_text" type="text" onChange ={this.handlechange} name = "price" data-length="10"/>
          <label for="input_text">Price</label>
          </div>
          </div>
          <div class="row">
          <div class="input-field col s12">
            <textarea id="textarea2" onChange ={this.handlechange} name = "description" class="materialize-textarea" data-length="120"></textarea>
            <label for="textarea2">Description</label>
          </div>
        </div>

        <div class="row">
        <div class="input-field col s12">
        <input type="file"
       
        onChange={this.fileSelectedHandler}/>
        </div>
      </div>


        <button onClick={this.handlesubmit}
        class="btn waves-effect waves-light" type="submit" name="action">Add Product
        <i style ={{position: "absolute"}}class="material-icons">add_circle
        </i>
  </button>
  <div></div>
  <div>{this.state.errorMessage}</div>
          </form>
          </div></p>
        </div>
      </div>
    </div>
    
    </div>
        )
    }
}
export default withRouter(NewP)