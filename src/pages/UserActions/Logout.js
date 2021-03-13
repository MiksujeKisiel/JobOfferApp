import { useEffect } from "react";
import { useDispatch } from "react-redux";
import * as actions from "../../store/actions";
import { useHistory } from "react-router";

export const Logout = () => {
  const dispatch = useDispatch();
  let history = useHistory();
  useEffect(() => {
    dispatch(actions.signOut());
    history.push("/");
  }, [dispatch, history]);
  return null;
};


