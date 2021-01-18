import React from "react";
import styled from "styled-components";
import Option from "../Items/Option";
import { connect } from "react-redux";
import { ReactComponent as Document } from "../../assets/svg/documents.svg";
import { ReactComponent as User } from "../../assets/svg/newuser.svg";
import { ReactComponent as Logout } from "../../assets/svg/logout.svg";
import { ReactComponent as Settings } from "../../assets/svg/settings.svg";
import UserImage from "../../assets/images/user.png";
const Wrapper = styled.div`
  display: none;
  @media (min-width: ${768}px) {
    display: block;
    z-index: 5;
    background: #1b75bc;
    min-width: 250px;
    /* margin-right: 50px; */
    @media (min-width: ${1024}px) {
      /* margin-right: 130px; */
    }
  }
`;
const BigWrapper = styled.div`
  @media (min-width: ${768}px) {
    display: flex;
    background: #F1F1F1;
    min-height: calc(100vh - 80px);
  
  }
`;

const NameWrapper = styled.div`
  padding: 50px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-height: 250px;
`;

const Text = styled.p`
  font-size: 16px;
  margin-top: 20px;
  color: white;
`;
const Image = styled.img`
  width: 120px;
  height: 120px;
`;

const Router = ({ children, firebase }) => {
  return (
    <BigWrapper>
      <Wrapper>
        <NameWrapper>
          <Image src={UserImage} />
          <Text>
            {firebase.profile.firstName} {firebase.profile.lastName}
          </Text>
        </NameWrapper>
        <Option left to="/profile" text="Profil">
          <User className="svgs" />
        </Option>
        <Option left to="/profile-jobs" text="Moje oferty pracy">
          <Document className="svgs" />
        </Option>
        <Option left to="/profile" text="Ustawienia konta">
          <Settings className="svgs" />
        </Option>
        <Option left to="/logout" text="Wyloguj">
          <Logout className="svgs" />
        </Option>
      </Wrapper>
      <ChildrenWrapper>
      {children}
      </ChildrenWrapper>
    </BigWrapper>
  );
};

const ChildrenWrapper = styled.div`
position: relative;
z-index: 0;
overflow:hidden;
width: 100%;
@media (min-width: ${1024}px) {
   
width: calc(100% - 250px);
    }
:before{
  content: "";
  width: 100%;
  height: 250px;
  background-color: #40B4E5;
  position: absolute;
  top: 0;
  z-index: -1;
}
`

const mapStateToProps = ({ firebase, auth }) => ({
  firebase,
  loading: auth.profileEdit.loading,
  error: auth.profileEdit.error,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Router);
