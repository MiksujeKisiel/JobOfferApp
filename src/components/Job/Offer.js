import React, { useState } from "react";
import styled from "styled-components";
import DeleteJob from "./DeleteJob";
import Job from "./Job";
// import EditJob from './EditJob';

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
  const [isEditing, setisEditing] = useState(false);
  console.log(isDeleting);
  console.log(isEditing);
  return (
    <div>
      <Job jobs={jobs} />
      <Controls>
        <Control onClick={() => setisDeleting(true)}>delete</Control>
        <Control onClick={() => setisEditing(true)}>edit</Control>
        <DeleteJob
          jobs={jobs}
          show={isDeleting}
          close={() => setisDeleting(false)}
        />
        {/* <EditJob
         jobs={jobs}
         show={isEditing}
         close={() => setisEditing(true)}
        /> */}

      </Controls>
    </div>
  );
};

export default Offer;
