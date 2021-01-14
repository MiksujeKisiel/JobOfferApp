import React, {useState} from 'react'
import styled from 'styled-components'
import { connect } from "react-redux";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";

import DeleteJob from '../../Job/DeleteJob';
import {Link } from 'react-router-dom';
const Wrapper = styled.div`
z-index: 100;
`
const Control = styled.p`
  cursor: pointer;
`;


const UserJob = ({loggedIn, userId, jobId}) => {
  const [isDeleting, setisDeleting] = useState(false);
  console.log(jobId)
   if (userId === loggedIn) 
   return (
        <Wrapper>
           <Control onClick={() => setisDeleting(true)}>delete</Control>
          
        <DeleteJob
          jobs={jobId}
          show={isDeleting}
          close={() => setisDeleting(false)}
        />
         <Link to={'/editjob/' + jobId}>
        <p>xddds</p>
        </Link>
        </Wrapper>
    )
    else if(loggedIn !== userId){
        return(
<Wrapper>no logged</Wrapper>
        )
        
    }
    else{
        <div>xdxd</div>
    }
}


const mapStateToProps = (state, ownProps) => {
    return {
      loggedIn: state.firebase.auth.uid
    };
  };
  
  const mapDispatchToProps = {};
  
  export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    firestoreConnect([{ collection: "jobs" }])
  )(UserJob);
