
import { render } from '@testing-library/react';
import React from 'react';
import {Link} from 'react-router-dom'
import login from './login'
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';

export default function Nav (props){
        return( <div  className="nav-wrapper">
        <nav className = "black">
        { ((localStorage.getItem("jwt")===null))?
        <a class="brand-logo center">Crowd Buy
      </a>
        :(
          <a s class="brand-logo center">Welcome {localStorage.getItem("name")} !</a>)}


            
            <ul>
            { (!(localStorage.getItem("jwt")===null))?

            <ul> 
              
            <ul id="nav-mobile" class="left hide-on-med-and-down">
            <li >
            <Link  to ="/new">+
            </Link>
             </li>
         
             <li></li>
             <li></li>
 
             <li> <Link  to ="/about"> About</Link></li>
             <li> <Link  to ="/shop"> Shop</Link></li>
 
      

            <li>   </li>
            <li>   </li></ul>


            <ul id="nav-mobile" class="right hide-on-med-and-down">
            <li> <Link  to ="/cart">Cart</Link></li>
            <li> <Link  to ="/logout">Logout</Link></li>
            <li>   </li>
            <li>   </li></ul>


            </ul>
          
            :(
              <ul> 
              <ul id="nav-mobile center" class="left hide-on-med-and-down ">
              <li></li>
              <li></li>
  
              <li> <Link  to ="/about"> About</Link></li>
              <li> <Link  to ="/shop"> Shop</Link></li>
  
              </ul>
              <ul id="nav-mobile" class="right hide-on-med-and-down">
              <li> <Link  to ="/register"> Register</Link></li>
              <li> <Link  to ="/login"> Login</Link></li>
              <li>  </li>
              <li>   </li>
              </ul>
              </ul>
            )}
          </ul>
      </nav>
      </div>
        )}
