import React from "react";
import styled from "styled-components";

const Text = styled.p`
  font-size: 20px;
`;

export const Experience = ({ experience }) => {
  const listItems = experience.slice(0).map((text) => <Text>{text}</Text>);


  return <div>{listItems}</div>;
};
