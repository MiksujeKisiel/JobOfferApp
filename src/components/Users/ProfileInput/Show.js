import React from "react";
import styled from "styled-components";
import {
  Formik,
  Field,
  Form,
} from "formik";
import * as actions from "../../../store/actions";
import { useDispatch, useSelector } from "react-redux";

const FormWrapper = styled(Form)`
   background: white;
  padding: 10px 15px 0;
  @media (min-width: ${768}px) {
    display: flex;
    flex-direction: column;
    padding: 20px 20px 0;
  }
  @media (min-width: ${1280}px) {
    padding: 40px 40px 0;
  }
`;

const Toggle = styled(Field)`
  width: 30px;
  height: 30px;
  background: yellow;
  margin-right: 15px;
`;

const SmallWrapper = styled.div`
  display: flex;
  align-items: center;
  font-weight: 300;
`;

const Show = () => {
  const dispatch = useDispatch();
  const firebase = useSelector((state) => state.firebase);

  return (
    <Formik
      initialValues={{
        show: firebase.profile.show,
      }}
      onSubmit={async (values, { setSubmitting }) => {
        await dispatch(actions.showProfile(values));
        console.log(values);
        setSubmitting(false);
      }}
    >
      {({ values, handleSubmit }) => (
        <FormWrapper onChange={handleSubmit}>
          <SmallWrapper>
            <Toggle className="blue" type="checkbox" name="show" />
            {`${values.show}` === "true"
              ? "Udostępniam profil"
              : "Nie udostępniam profilu"}
          </SmallWrapper>
        </FormWrapper>
      )}
    </Formik>
  );
};



export default Show
