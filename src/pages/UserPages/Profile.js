import React from "react";
import styled from "styled-components";
import Router from "../../components/UserSettings/Router";

import { useSelector } from "react-redux";
import Experience from "../../components/Users/ProfileInput/Experience";
import Language from "../../components/Users/ProfileInput/Language";
import Data from "../../components/Users/ProfileInput/Data";
import Show from "../../components/Users/ProfileInput/Show";
import Skills from "../../components/Users/ProfileInput/Skills";

const Profile = () => {
  const [loadedProfile, loading, error] = useSelector((state) => [
    state.firebase.profile.isLoaded,
    state.auth.profileEdit.loading,
    state.auth.profileEdit.error,
  ]);

  if (!loadedProfile) return null;
  return (
    <Router>
      <Wrapper>
        <BigText>Podstawowe dane</BigText>
        <Show />
        <Data />
        <BigText>Doświadczenie</BigText>
        <Experience />
        <BigText>Język</BigText>
        <Language />
        <BigText>Umiejętności</BigText>
        <Skills />
        {loading ? <TopWrapper>Zapisywanie</TopWrapper> : ""}
        {error ? <TopWrapper>Error</TopWrapper> : ""}
      </Wrapper>
    </Router>
  );
};
export default Profile;

const Wrapper = styled.div`
  justify-content: center;
  align-items: center;
  padding: 20px;

  @media (min-width: ${768}px) {
    padding-left: 10px;
    max-width: 600px;
  }
  @media (min-width: ${1024}px) {
    max-width: 800px;
    padding-left: 50px;
  }
  @media (min-width: ${1280}px) {
    max-width: 1000px;
    padding-left: 60px;
  }
  @media (min-width: ${1600}px) {
    padding-left: 100px;
    max-width: 1100px;
  }
`;

const BigText = styled.p`
  font-size: 24px;
  font-weight: 200;
  margin: 30px 0 10px;
  text-align: center;
`;

const TopWrapper = styled.div`
  position: fixed;
  right: 20px;
  bottom: 200px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  height: 40px;
  background-color: rgba(100, 149, 15, 0.7);
  border-radius: 20px;
  z-index: 200;
`;
