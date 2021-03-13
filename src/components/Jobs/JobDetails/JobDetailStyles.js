import styled from "styled-components";

export const Header = styled.h2`
font-size: 22px;
font-weight: 300;
margin: 0 0 20px;
`;

export const Wrapper = styled.div`
  justify-content: flex-start;
  flex-wrap: wrap;
  display: flex;
  flex-direction: column;
  background: white;
  width: 90%;
  box-shadow: 0 0 10px rgba(21, 21, 21, 0.3);
  margin: 5px 0;
  padding: 20px 20px;
  .svg {
    width: 18px;
    height: 18px;
    fill: #1825aa;
    margin-right: 10px;
  }
  @media (min-width: ${600}px) {
    width: 100%;
  }
`;
