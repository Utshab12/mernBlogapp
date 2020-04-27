import React, {Component} from 'react'
import {Redirect ,Link} from 'react-router-dom'
import axios from 'axios'

import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText
} from 'reactstrap';

class Navbars extends Component{

  logoutuser = () =>{
    
    axios.post(`https://blogserver1.herokuapp.com/user/logout`,'',
    {
        headers: {
            'Authorization': localStorage.getItem('token'),
            'Accept' : 'application/json',
            'Content-Type': 'application/json'
        }
    })
    .then((res)=>{
      console.log(res)
    })
    localStorage.removeItem('token')
    localStorage.removeItem('data')
    
  }

  render(){
    // if(!localStorage.getItem('token')){
    //   return <Redirect to= '/login' />
    // }
    return(
      
    <Navbar color="light" light expand="md">
        <NavbarBrand href="/">BLOGGING APP</NavbarBrand>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <Link to ='/communityBlogs'><NavLink>Community Blogs</NavLink></Link>
            </NavItem> 
            <NavItem>
            <Link to ='/myBlogs'><NavLink>My Blogs</NavLink></Link>
            </NavItem>
            <NavItem>
              <Link to ='/login'><NavLink style={{marginLeft: "550px"}} >Login</NavLink></Link>
            </NavItem>
            <NavItem >
              <Link to ='/signup'><NavLink>/ SignUp</NavLink></Link>
            </NavItem>
            <NavItem>
                <Link to='/login'><NavLink onClick={(e)=>this.logoutuser(e)} >Logout</NavLink></Link>
            </NavItem>
          </Nav>
      </Navbar>
    
    )
  }
}

export default Navbars