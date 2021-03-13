import styled from 'styled-components';

export const Background = styled.div`
  width: 100%;
  height: 500px;
  display: flex;
  background-image: url(${({ src }) => src});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  position: relative;
  ::after {
    background: linear-gradient(180deg, #0f0b2e, rgba(34, 26, 90, 0) 80%);
    width: 100%;
    height: 100%;
    content: "";
    position: absolute;
  }
  ::before {
    background: linear-gradient(360deg, #0f0b2e, rgba(34, 26, 90, 0) 80%);
    width: 100%;
    height: 100%;
    content: "";
    position: absolute;
  }
  @media (min-width: ${1280}px) {
    height: 650px;
  }
`;