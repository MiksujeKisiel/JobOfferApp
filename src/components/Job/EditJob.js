import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";
// import { Formik, Field } from "formik";
// import { Form, FormWrapper, Wrapper, Text } from "../Items/Form/FormStyles";
// import Button from "../Items/Form/Button";
// import Message from "../Items/Form/Message";
// import Input from "../Items/Form/Input";
// import * as Yup from "yup";
import * as actions from "../../store/actions";
// import Modal from "../Items/Modal/Modal";


// const JobSchema = Yup.object().shape({
//   name: Yup.string()
//     .required("name is required.")
//     .min(3, "Too short.")
//     .max(25, "Too long."),
//   earnings: Yup.string()
//     .required("earnings required.")
//     .min(3, "Too short.")
//     .max(25, "Too long."),
//   company: Yup.string()
//     .required("company name is required")
//     .min(3, "Too short.")
//     .max(25, "Too long."),
//   attribute: Yup.string()
//     .required("attribute is required")
//     .min(3, "Too short.")
//     .max(25, "Too long."),
// });
const EditJob = (props, { error, loading, close}) => {
  return (
 
      <div>
        <p>XD</p>
        {/* <FormWrapper>
          <Text>add job</Text>
          <Formik
            initialValues={{
         company: "xddd"
            }}
            validationSchema={JobSchema}
            onSubmit={async (values, { setSubmitting }) => {
              console.log(values);
            }}
          >
            {({ isSubmitting, isValid }) => (
              <Form>
                <p>
                  xDDD
                </p>
                  Edit
           
              </Form>
            )}
          </Formik>
          <Button onClick={close}>Cancel</Button>
          <Message error show={error}>
            {error}
          </Message>
          <Message error show={error === false}>
            edited
          </Message>
        </FormWrapper> */}
      </div>
 
  );
};



const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const jobs = state.firestore.data.jobs;
  const job = jobs ? jobs[id] : null;

  return {
    work: job,
    jobId: id,
    loggedIn: state.firebase.auth.uid,
    // loading: job.loading,
// error: job.error
  };
};


const mapDispatchToProps = {
  editJob: actions.editJob,
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect([{ collection: "jobs" }])
)(EditJob);



// import React from "react";
// import { connect } from "react-redux";
// import { Formik, Field } from "formik";
// import { Form, FormWrapper, Wrapper, Text } from "../Items/Form/FormStyles";
// import Button from "../Items/Form/Button";
// import Message from "../Items/Form/Message";
// import Input from "../Items/Form/Input";
// import * as Yup from "yup";
// import * as actions from "../../store/actions";
// import Modal from "../Items/Modal/Modal";

// const JobSchema = Yup.object().shape({
//   name: Yup.string()
//     .required("name is required.")
//     .min(3, "Too short.")
//     .max(25, "Too long."),
//   earnings: Yup.string()
//     .required("earnings required.")
//     .min(3, "Too short.")
//     .max(25, "Too long."),
//   company: Yup.string()
//     .required("company name is required")
//     .min(3, "Too short.")
//     .max(25, "Too long."),
//   attribute: Yup.string()
//     .required("attribute is required")
//     .min(3, "Too short.")
//     .max(25, "Too long."),
// });
// const EditJob = (props, { error, loading, close, editJob, jobId, show, job}) => {
//   console.log(props)
//   return (
 
//       <Wrapper>
//         <FormWrapper>
//           <Text>add job</Text>
//           <Formik
//             initialValues={{
//          company: "xddd"
//             }}
//             validationSchema={JobSchema}
//             onSubmit={async (values, { setSubmitting }) => {
//               console.log(values);
//             }}
//           >
//             {({ isSubmitting, isValid }) => (
//               <Form>
//                 <p>
//                   xDDD
//                 </p>
//                   Edit
           
//               </Form>
//             )}
//           </Formik>
//           <Button onClick={close}>Cancel</Button>
//           <Message error show={error}>
//             {error}
//           </Message>
//           <Message error show={error === false}>
//             edited
//           </Message>
//         </FormWrapper>
//       </Wrapper>
 
//   );
// };



// const mapStateToProps = (state, ownProps) => {
//   const id = ownProps.match.params.id;
//   const jobs = state.firestore.data.jobs;
//   const job = jobs ? jobs[id] : null;

//   return {
//     work: job,
//     jobId: id,
//     loggedIn: state.firebase.auth.uid,
//     // loading: job.loading,
// // error: job.error
//   };
// };


// const mapDispatchToProps = {
//   editJob: actions.editJob,
// };

// export default connect(mapStateToProps, mapDispatchToProps)(EditJob);
