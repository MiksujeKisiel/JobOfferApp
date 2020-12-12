import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
width: 150px;
background-color: #8F90DA;
border: none;
color: white;
margin: 20px 0;
padding: 10px 5px;
border-radius: 5px;
font-size: 16px;
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
