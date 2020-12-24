import React from 'react'
import styled from 'styled-components'
import { NavLink as Link } from 'react-router-dom';

const StyledLink = styled(Link)`
color: #1c1c1c;
font-size: 16px;
margin: 0 20px;
`

const Wrapper = styled.li`
height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

`

const NavLink = ({to, text}) => {
    return (
        <Wrapper>
        <StyledLink 
         activeClassName="active" 
    to={to}>{text}</StyledLink>
         </Wrapper>
    )
}

export default NavLink
