import React from 'react'
import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';
import Logo from '../../assets/images/kisieljobs.png'

const Nav = styled.nav`
background: #0E1926;
display: flex;
justify-content: space-between;
ul{
position: relative;
display: flex;
align-items: center;
height: 90px;
.logo{
    width: 120px;
    height: 80px;
}
.active{
    color:#00C2E9;
  li{
    :after{
        content: "";
        width: 500px;
        height: 5px;
        background: blue;
        position: absolute;
        display: block;
       
    }
  }
  
}

li{
    
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    :hover{
        
    }
}
}
`
const StyledLink = styled(Link)`
color: white;
font-size: 19px;
margin: 0 20px;

`


const Navbar = () => {
    return (
   
             <Nav>
                <ul>
                    <li className="li">
                    <StyledLink
                    exact to="/">  <img className="logo" src={Logo} alt=""/></StyledLink>  
              
                    </li>
                    <li>
                    <StyledLink
                    exact to="/">Oferty pracy</StyledLink>  
                  </li>
                  </ul>
                  <ul>
                    <li>
                    <StyledLink 
                     activeClassName="active" 
                    to="/post">Post a job offer</StyledLink>  
                    </li>
                    <li>
                        <StyledLink 
                         activeClassName="active" 
                        to="/login">Log in</StyledLink>
                    </li>
                    <li>
                    <StyledLink 
                     activeClassName="active" 
                    to="/signup">Sign up</StyledLink>
                    </li>
            
                </ul>
            </Nav>
      
    )
}

export default Navbar
