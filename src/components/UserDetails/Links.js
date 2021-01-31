import React from "react";

export const Links = ({ links }) => {
  const listItems = links.slice(0).map((text) => <p>{text}</p>);
  return <div>{listItems}</div>;
};
