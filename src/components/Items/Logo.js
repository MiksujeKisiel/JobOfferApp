import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
background-image: linear-gradient(to right, #1D73BA , #262768);
padding: 3px 25px;
display: flex;
justify-content: center;
align-items: center;
border-radius: 50px;
`
const Text = styled.p`
font-size: 25px;
letter-spacing: 2px;
color: white;
font-weight: 600;
`

const Logo = () => {
    return (
        <Wrapper>
            <Text>kisiel.pl</Text>
        </Wrapper>
    )
}

export default Logo
