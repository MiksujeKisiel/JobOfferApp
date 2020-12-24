import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
width: 150px;
background-color: #1825AA;
width: 100%;
border: none;
color: white;
margin: 40px 0;
padding: 15px 5px;
border-radius: 50px;
font-size: 16px;
max-width: 250px;
`


const Button = ({ children, disabled, loading, contain, color, ...rest }) => {
    return (
      <StyledButton
  
      color={color} contain={contain} disabled={disabled} {...rest}>
      {loading ? loading : children}
      </StyledButton>
    )
}
 
export default Button
