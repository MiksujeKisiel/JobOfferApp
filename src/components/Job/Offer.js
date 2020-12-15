import React, { useState } from "react";
import styled from "styled-components";
import DeleteJob from "./DeleteJob";
import Job from './Job';


const Controls = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 10px;
  position: relative;
`;

const Control = styled.p`
  cursor: pointer;
`;

const Offer = ({ jobs }) => {
  const [isDeleting, setisDeleting] = useState(false);
  console.log(isDeleting);
  return (
    <div>
      <Job jobs={jobs}/>
      <Controls>

        <Control onClick={() => setisDeleting(true)}>delete</Control>
        <Control>edit</Control>
        <DeleteJob jobs={jobs} show={isDeleting} close={() => setisDeleting(false)} />
      </Controls>
    </div>
  );
};

export default Offer;
