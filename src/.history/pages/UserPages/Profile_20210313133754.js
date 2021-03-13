import React from "react";
import styled from "styled-components";
import Router from "../../components/UserSettings/Router";
import TopText from "../../components/UserSettings/Text";
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
        <TopText
          bigText="Profil"
          smallText="Dzięki dodawaniu informacji na swój temat możesz łatwiej znaleźć pracę!"
        />
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
