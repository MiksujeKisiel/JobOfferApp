import React from "react";
import styled from "styled-components";
import Option from "../Items/Option";
import { connect } from 'react-redux'
import { ReactComponent as Document } from "../../assets/svg/documents.svg";
import { ReactComponent as User } from "../../assets/svg/newuser.svg";
import { ReactComponent as Logout } from "../../assets/svg/logout.svg";
import UserImage from '../../assets/images/user.png'
const Wrapper = styled.div`
  background: #1b75bc;
  width: 250px;
  margin-right: 150px;
`;
const BigWrapper = styled.div`
  display: flex;
  min-height: calc(100vh - 80px);
  ::before{
    content: "";
    position: absolute;
    z-index: -1;
    height: 255px;
    background-color:#40B4E5;
    width: 100%;
  }
`;

const NameWrapper = styled.div`
padding: 50px 0;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
max-height: 250px;

`

const Text = styled.p`
font-size: 16px;
margin-top: 20px;
color: white;
`
const Image = styled.img`
width: 120px;
height: 120px;

`

const Router = ({ children, firebase }) => {
  return (
    <BigWrapper>
  
      <Wrapper>
      <NameWrapper>
        <Image src={UserImage}/>
        <Text>{firebase.profile.firstName} {firebase.profile.lastName}</Text>
      </NameWrapper>
        <Option left to="/profile" text="Profil">
          <User className="svgs" />
        </Option>
        <Option left to="/profile-jobs" text="Moje oferty pracy">
          <Document className="svgs" />
        </Option>
        <Option left to="/logout" text="Wyloguj">
          <Logout className="svgs" />
        </Option>
      </Wrapper>
      {children}
    </BigWrapper>
  );
};

const mapStateToProps = ({ firebase, auth }) => ({
  firebase,
  loading: auth.profileEdit.loading,
  error: auth.profileEdit.error,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Router);
