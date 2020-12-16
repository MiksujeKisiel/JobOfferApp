import React from 'react'
import styled from 'styled-components'
import JobThree from './JobThree';
const Wrapper = styled.div``


const JobTwo = ({jobs, id}) => {
 console.log(jobs)
    return (
        <Wrapper>
               {jobs.slice(0).reverse()
          .map((jobs) => (
            <JobThree jobs={jobs} />
          ))}
        </Wrapper>
    )
}

export default JobTwo
