import React from 'react'
import styled from 'styled-components'
import main from '../../assets/images/Main.jpg'

const Wrapper = styled.div`
display: none;
@media (min-width: ${768}px) {
    display: flex;
background-image: url(${({src}) => src}); 
background-repeat: no-repeat; 
background-size: cover;
flex-direction: column;
position: relative;
justify-content: center;
height: auto;
  }

`
const Image = styled.img`
    max-width: 2500px;
    margin: 0 auto;
    max-height: 550px;
    width: 100%;
    
@media (min-width: ${1024}px) {
   
  }
`



const Background = () => {
    return (
        <Wrapper>
            <Image src={main}/>
        </Wrapper>
    )
}

export default Background
