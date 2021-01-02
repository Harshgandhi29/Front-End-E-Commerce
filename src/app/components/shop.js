import 'whatwg-fetch'
import axios from 'axios';
import React from 'react'
import {Link} from 'react-router-dom'
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import { Check } from '@material-ui/icons';
import wallpaper from "./wallpaper.jpg";


export default class Shop extends React.Component{
    state = {
        items :[],
        loading: true,
        low:false,
        q:0
    }

componentDidMount =  ()=>{
axios.get('https://crowdbuy.herokuapp.com/product',{
        headers: {
          'Authorization': `Bearer ${localStorage.getItem("jwt")}`
        }
        }).then((response)=>{
          this.setState({
            items: response.data,
            loading: false,
            low:false
          })
          console.log("responsedata")
          console.log(response.data)
          if (this.props.check (response.data)){
            this.setState({
              low:true
          })

        }})
      }

cart = (data,title,index,low)=>{
  var qu = parseInt(localStorage.getItem(title))
  if (low){
    localStorage.setItem(title,qu+1)

    axios.put('https://crowdbuy.herokuapp.com/shoppingcart',{
      productId: data,
      user_id:localStorage.getItem("id")
    },
    {headers: {
      'Authorization': `Bearer ${localStorage.getItem("jwt")}`
    }}
    )
    .then((response)=>{
      console.log(response)
    
    })
    //window.location.reload();
      console.log("ADDED TO CART")
    }

 else if ((!low) && (qu!=0)){
   qu-=1
    localStorage.setItem(title,qu)
  }
  this.setState({
    q:localStorage.getItem(title)
  })
  console.log( localStorage.getItem(title))



}


find= (dataID)=>{
if(localStorage.getItem("id")==dataID)
{return true}
else{
  return false
}
}

remove =()=>{
  axios.put('https://crowdbuy.herokuapp.com/product',{
    userId:localStorage.getItem("id")
  },
  {headers: {
    'Authorization': `Bearer ${localStorage.getItem("jwt")}`
  }}).then((response)=>{
    console.log(response)
    window.location.reload();
  })
  
}







    render()
    {
        return(<div> 
          {this.state.loading?<div>Loading </div>:(
          <div>
          
          <div  style={{backgroundImage: 'url(${wallpaper})'}}className="grid-container ">

          {this.state.items.map((value,index)=>{
            return (
                    <div style={{height: "500px",width:"350px",margin:"20px auto" }} class="card">
                    <div class="card-image waves-effect waves-block waves-light">
                    <img style={{height: "350px",width:"350px",margin: "auto" }} class="activator" src={value.URL}/>
                    </div>

                   <div class="card-content">
      <span class="card-title activator grey-text text-darken-4">{value.title}<i class="material-icons right"></i></span>
      <p><a >${value.price}</a></p>
    </div>
    <div class="card-reveal">
    <span class="card-title grey-text text-darken-4">{value.title}<i class="material-icons right">close</i></span>
    <p>{value.description}</p>
  </div>

 <button class="btn waves-effect waves-light black"
 onClick={()=>{
   this.cart(value._id,value.title,index,true)
 }}
 type="submit" name="action">Add To Cart  ({localStorage.getItem(value.title)})</button>



<button  class="btn waves-effect waves-light red" onClick={()=>{
  this.cart(value._id,value.title,index,false)
}} type="submit" name="action">Remove From Cart  </button>


{
  this.find(value.userId)? <button class="btn waves-effect waves-light white"
  onClick={()=>{
    this.remove()
  }}

  type="submit" style={{color:"black"}}name="action">Delete</button>

:(<div></div>)}
</div>



)}
  )}
</div>
</div>)}

</div>   )}
}

