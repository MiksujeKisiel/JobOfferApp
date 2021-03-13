import React from "react";
import { ReactComponent as Document } from "../../../assets/svg/documents.svg";
import { ReactComponent as User } from "../../../assets/svg/newuser.svg";
import { ReactComponent as Logout } from "../../../assets/svg/logout.svg";
import { ReactComponent as Settings } from "../../../assets/svg/settings.svg";
import Option from "./Option";

const UserRouter = ({ left }) => {
  return (
    <>
      <Option left={left} to="/profile" text="Profil">
        <User className="svgs" />
      </Option>
      <Option left={left} to="/profile-jobs" text="Moje oferty pracy">
        <Document className="svgs" />
      </Option>
      <Option left={left} to="/profile-settings" text="Ustawienia konta">
        <Settings className="svgs" />
      </Option>
      <Option left={left} to="/logout" text="Wyloguj">
        <Logout className="svgs" />
      </Option>
    </>
  );
};

export default UserRouter;
