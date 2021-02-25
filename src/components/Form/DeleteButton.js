import React from 'react'
import styled from 'styled-components'
import { ReactComponent as TrashIcon } from "../../assets/svg/trash.svg";

const StyledIcon = styled(TrashIcon)`
width: 14px;
height: 14px;
margin-right: 5px;
`

const ButtonWrapper = styled.div`
  display: flex;
  cursor: pointer;
  justify-content: center;
  align-items: flex-end;
  
  font-size: 13px;
  font-weight: 300;
  margin-left: 10px;
  &:hover{
      color: red;
      ${StyledIcon}{
          fill: red;
      }
  }
  @media (min-width: ${768}px) {
    margin-left: 20px;
  }
`;


export const DeleteButton = ({onClick}) => {
    return (
        <ButtonWrapper onClick={onClick}>
             <StyledIcon/>usuń 
        </ButtonWrapper>
    )
}

