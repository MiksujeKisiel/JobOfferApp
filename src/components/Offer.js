import React, {forwardRef} from 'react'
import styled from 'styled-components'
const Wrapper = styled.div``
const Text = styled.p``

const Offer = forwardRef (
({company, companysize, earnings, location, name}, ref) =>{
    return(
        <Wrapper ref={ref}>
        <Text>{company}</Text>
        <Text>{companysize}</Text>
        <Text>{earnings}</Text>
        <Text>{location}</Text>
        <Text>{name}</Text>

    </Wrapper>
    )})


export default Offer
