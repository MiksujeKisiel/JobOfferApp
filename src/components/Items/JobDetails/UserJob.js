import React from 'react'
import styled from 'styled-components'
import { connect } from "react-redux";
import { compose } from "redux";

const Wrapper = styled.div`
z-index: 100;
`
const Text = styled.p``

const UserJob = ({loggedIn, userId}) => {
    console.log(loggedIn)
    console.log(userId)
   if (userId === loggedIn) 
   return (
        <Wrapper>
           <button> eidt</button>
           <button> delete</button>
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
    connect(mapStateToProps, mapDispatchToProps))(UserJob);


