import React from "react";
import styled from "styled-components";
import main from "../../assets/images/header.png";

const Wrapper = styled.div`
width: 100%;
height: 160px;
display: flex;
background-image: url(${({src}) => src}); 
background-repeat: no-repeat; 
background-position: center;
background-size: cover; 
`;







const Background = () => {
  return (
    <Wrapper src={main}>
    
    </Wrapper>
  );
};

export default Background;
