import 'whatwg-fetch'
import axios from 'axios';
import React from 'react'
import {Link} from 'react-router-dom'

export default class ShopItem extends React.Component{
    state = {
        items :[],
        loading: true
    }

// componentDidMount =  ()=>{
// axios.get('/product').then((res)=>{
//     this.setState({
//         loading:false,
//         items:res.data
//     })
//     console.log(this.state.items)
//     console.log(this.state.items[0]._id)
// }
// )
//     }


    render(){
        return(<div>
            item
              </div>)
    }
}


