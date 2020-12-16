import React from 'react'

import JobTwo from './JobTwo';



const Job = ({job, id}) => {
   console.log(job)
    return (
   <div>
       { job && job.map(job => { 
           return(
<JobTwo jobs={job.jobs} id={job.id}/>
           )
       })}

        </div>
       
     
    )
}

export default Job
