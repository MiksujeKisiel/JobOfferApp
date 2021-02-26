import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
background-image: linear-gradient(to right, #1D73BA , #262768);
padding: 3px 25px;
display: flex;
justify-content: center;
align-items: center;
border-radius: 50px;
max-width: 220px;
margin: ${(props) => (props.navbar) ? '0 0 30px 30px' : '30px 0' };
@media (min-width: ${768}px) {
    margin: ${(props) => (props.navbar) ? '0 0 0 30px' : '30px auto' };
}
`
const Text = styled.p`
font-size: 25px;
letter-spacing: 2px;
color: white;
font-weight: 600;
`

const Logo = ({navbar}) => {
    return (
        <Wrapper navbar={navbar}>
            <Text>kisiel.pl</Text>
        </Wrapper>
    )
}

export default Logo
