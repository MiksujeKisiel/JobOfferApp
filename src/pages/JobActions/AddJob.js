import React from "react";
import { connect } from "react-redux";
import { Form as FormFormik, Formik, Field, FieldArray } from "formik";
import { NavLink } from "react-router-dom";
import {
  Message,
  Button,
  Input,
  TextArea,
  Select,
  DeleteButton,
} from "../../components/Form";
import styled from "styled-components";
import * as Yup from "yup";
import * as actions from "../../store/actions";
import { ReactComponent as JobOffer } from "../../assets/svg/jobedit.svg";
const JobSchema = Yup.object().shape({
  name: Yup.string()
    .required("name is required.")
    .min(3, "Too short.")
    .max(50, "Too long."),
  company: Yup.string()
    .required("company name is required")
    .min(3, "Too short.")
    .max(50, "Too long."),
  earnings: Yup.string()
    .required("earnings required.")
    .min(3, "Too short.")
    .max(50, "Too long."),
  location: Yup.string()
    .required("location is required")
    .min(3, "Too short.")
    .max(50, "Too long."),
  employmentType: Yup.string()
    .required("joblevel is required")
    .min(3, "Too short.")
    .max(50, "Too long."),
});

const Wrapper = styled.div`
  @media (min-width: ${1024}px) {
    display: flex;
    align-items: stretch;
  }
`;

const StyledLink = styled(NavLink)`
  position: absolute;
  left: 30px;
  top: 30px;
  color: white;
  @media (min-width: ${1024}px) {
    position: fixed;
    top: 20px;
    left: 30px;
    color: white;
    font-size: 20px;
  }
`;
const Sidebar = styled.div`
  background-color: #44c97d;
  display: flex;
  justify-content: center;
  height: 350px;
  @media (min-width: ${1024}px) {
    height: auto;
    justify-content: flex-start;
    width: 400px;
    margin-right: 20px;
    overflow-y: hidden;
  }
  @media (min-width: ${1280}px) {
    width: 450px;
  }
  @media (min-width: ${1440}px) {
    width: 500px;
  }
`;

const Xd = styled(JobOffer)`
  height: 100px;
  width: 100px;
  margin-bottom: 20px;
  @media (min-width: ${768}px) {
    height: 150px;
    width: 150px;
  }
`;

const SmallWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (min-width: ${1024}px) {
    position: fixed;
    top: 200px;
    left: 20px;
  }
  @media (min-width: ${1280}px) {
    left: 35px;
    top: 250px;
  }
  @media (min-width: ${1440}px) {
    left: 55px;
  }
`;

const SmallText = styled.p`
  color: white;
  max-width: 350px;
  text-align: center;
  margin-top: 15px;
`;

const Text = styled.p`
  color: #1c1c1c;
  font-size: 20px;
  margin: 0 auto;
  text-align: center;
  margin: 20px 0;

  @media (min-width: ${1024}px) {
    margin: 80px 0 20px;
  }
`;
const BigText = styled.p`
  color: white;
  font-weight: 600;
  text-align: center;
  font-size: 25px;
  max-width: 400px;
  @media (min-width: ${1024}px) {
    font-size: 22px;
  }
  @media (min-width: ${1280}px) {
    font-size: 24px;
  }
`;
const InputWrapper = styled.div`
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr;
  @media (min-width: ${768}px) {
    grid-template-columns: 270px 270px;
    gap: 0 30px;
    justify-content: center;
  }
  @media (min-width: ${1440}px) {
    grid-template-columns: 250px 250px 250px;
    gap: 0 30px;
    justify-content: center;
  }
`;

const AddJob = ({ addJob, error, loading, jobs, jobEditing, editJob, id }) => {
  return (
    <Wrapper>
      <Sidebar>
        <StyledLink to="/">Strona główna</StyledLink>
        <SmallWrapper>
          <Xd />
          <BigText>{jobEditing ? "Edytuj swoją ofertę pracy" : "We’re Accepting applications!"}
           </BigText>
          <SmallText>
            Fill the form, attach your latest CV and portfolio to get listed.
          </SmallText>
        </SmallWrapper>
      </Sidebar>
      <Formik
        initialValues={{
          name: jobEditing ? jobs.name : "",
          company: jobEditing ? jobs.companyName : "",
          employees: jobEditing ? jobs.employees : "",
          earnings: jobEditing ? jobs.earnings : "",
          earningsType: jobEditing ? jobs.earningsType : "",
          location: jobEditing ? jobs.location : "",
          contract: jobEditing ? jobs.contract : "Umowa o pracę",
          employmentType: jobEditing ? jobs.employmentType : "",
          interview: jobEditing ? jobs.interview : "Rozmowa o pracę",
          timelapse: jobEditing ? jobs.timelapse : "Pełny etat",
          level: jobEditing ? jobs.level : "Junior",
          responsibility: jobEditing ? jobs.responsibility : [],
          requirement: jobEditing ? jobs.requirement : [],
          offer: jobEditing ? jobs.offer : [],
          about: jobEditing ? jobs.about : "",
        }}
        validationSchema={JobSchema}
        onSubmit={async (values, { setSubmitting }) => {
          jobEditing ? await editJob(id, values) : await addJob(values);
          setSubmitting(false);
        }}
      >
        {({ isSubmitting, isValid, values }) => (
          <Form>
            <TextWrapper>
              <Text>informacje o firmie</Text>
            </TextWrapper>
            <InputWrapper>
              <Field job word="Nazwa firmy" name="company" component={Input} />
              <Field
                job
                word="Ilość pracowników"
                name="employees"
                component={Input}
              />
              <Field job word="Lokalizacja" name="location" component={Input} />
            </InputWrapper>

            <TextWrapper>
              <Text>informacje o stanowisku</Text>
            </TextWrapper>
            <InputWrapper>
              <Field job word="Stanowisko" name="name" component={Input} />
              <Field job word="Zarobki" name="earnings" component={Input} />
              <Field
                word="Rodzaj wypłaty"
                type="select"
                component={Select}
                name="earningsType"
                job
              >
                <option value="Brutto / mies">Brutto / mies</option>
                <option value="Netto / mies">Netto / mies</option>
                <option value="Zł / h">Zł / h</option>
              </Field>
              <Field
                job
                word="Rozmowa o pracę"
                name="interview"
                component={Select}
              >
                <option value="Zdalnie">Zdalnie</option>
                <option value="W miejscu pracy">W miejscu pracy</option>
                <option value="W zakładzie pracy">W zakładzie pracy</option>
              </Field>
              <Field job word="Czas pracy" component={Select} name="timelapse">
                <option value="Pełny etat">Pełny etat</option>
                <option value="Pół etatu">Pół etatu</option>
                <option value="Ćwierć etatu">Ćwierć etatu</option>
              </Field>
              <Field
                job
                word="Rodzaj kontraktu"
                name="contract"
                component={Select}
              >
                <option value="Umowa o pracę">Umowa o pracę</option>
                <option value="Umowa o dzieło">Umowa o dzieło</option>
                <option value="B2B">B2B</option>
              </Field>
              <Field
                job
                word="Rodzaj kontraktu"
                name="level"
                component={Select}
              >
                <option value="Junior">Junior</option>
                <option value="Regular">Regular</option>
                <option value="Senior">Senior</option>
                <option value="Expert">Expert</option>
              </Field>
              <Field
                job
                word="Posada"
                name="employmentType"
                component={Input}
              />
            </InputWrapper>
            <TextWrapper>
              <Text>wymagania</Text>
            </TextWrapper>

            <FieldArray
              name="requirement"
              render={(arrayHelpers) => (
                <ArrayWrapper>
                  {values.requirement && values.requirement.length > 0 ? (
                    values.requirement.map((requirement, index) => (
                      <FieldArrayWrapper key={index}>
                        <Field
                          job
                          name={`requirement.${index}.name`}
                          word="Stanowisko"
                          component={Input}
                        />
                        <DeleteButton
                          onClick={() => arrayHelpers.remove(index)}
                        />
                      </FieldArrayWrapper>
                    ))
                  ) : (
                    <></>
                  )}
                  <Button
                    type="button"
                    profile
                    onClick={() => arrayHelpers.push("")}
                  >
                    Dodaj oferowanie
                  </Button>
                </ArrayWrapper>
              )}
            />

            <TextWrapper>
              <Text>obowiązki</Text>
            </TextWrapper>
            <FieldArray
              name="responsibility"
              render={(arrayHelpers) => (
                <ArrayWrapper>
                  {values.responsibility && values.responsibility.length > 0 ? (
                    values.responsibility.map((responsibility, index) => (
                      <FieldArrayWrapper key={index}>
                        <Field
                          job
                          name={`responsibility.${index}`}
                          word="zadania"
                          component={Input}
                        />
                        <DeleteButton
                          onClick={() => arrayHelpers.remove(index)}
                        />
                      </FieldArrayWrapper>
                    ))
                  ) : (
                    <></>
                  )}
                  <Button
                    type="button"
                    profile
                    onClick={() => arrayHelpers.push("")}
                  >
                    Dodaj oferowanie
                  </Button>
                </ArrayWrapper>
              )}
            />

            <TextWrapper>
              <Text>Oferujemy</Text>
            </TextWrapper>
            <FieldArray
              name="offer"
              render={(arrayHelpers) => (
                <ArrayWrapper>
                  {values.offer && values.offer.length > 0 ? (
                    values.offer.map((offer, index) => (
                      <FieldArrayWrapper key={index}>
                        <Field
                          job
                          name={`offer.${index}`}
                          word="zadania"
                          component={Input}
                        />
                        <DeleteButton
                          onClick={() => arrayHelpers.remove(index)}
                        />
                      </FieldArrayWrapper>
                    ))
                  ) : (
                    <></>
                  )}
                  <Button
                    type="button"
                    profile
                    onClick={() => arrayHelpers.push("")}
                  >
                    Dodaj oferowanie
                  </Button>
                </ArrayWrapper>
              )}
            />

            <TextWrapper>
              <Text>O firmie/pracodawcy</Text>
            </TextWrapper>
            <InputWrapper>
              <Field
                about
                word="O firmie"
                type="text"
                name="about"
                component={TextArea}
              />
            </InputWrapper>
            <SubmitButtonWrapper>
              <Button
                disabled={!isValid || isSubmitting}
                loading={loading ? "Adding job" : null}
                type="submit"
              >
                {jobEditing ? "Edytuj" : "Dodaj oferte"}
              </Button>
            </SubmitButtonWrapper>
            <Message error show={error}>
              {error}
            </Message>
            <Message error show={error === false}>
              Job added
            </Message>
          </Form>
        )}
      </Formik>
    </Wrapper>
  );
};

const Form = styled(FormFormik)`
  width: 80%;
  margin: 0 auto;
  @media (min-width: ${1024}px) {
    padding-top: 50px;
    width: auto;
    padding-left: 10px;
    margin: 0 auto 0 0;
  }
  @media (min-width: ${1280}px) {
    padding-left: 50px;
  }
`;



const TextWrapper = styled.div``;

const SubmitButtonWrapper = styled.div``;



const FieldArrayWrapper = styled.div`
display: flex;

`;

const ArrayWrapper = styled.div``;

const mapStateToProps = ({ job }) => ({
  loading: job.loading,
  error: job.error,
});

const mapDispatchToProps = {
  addJob: actions.addJob,
  editJob: actions.editJob,
};

export default connect(mapStateToProps, mapDispatchToProps)(AddJob);
