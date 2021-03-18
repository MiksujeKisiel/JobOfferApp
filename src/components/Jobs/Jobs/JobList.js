import React from "react";
import { useFirestoreConnect } from "react-redux-firebase";
import { useSelector } from "react-redux";
import JobList from "./SingleJob";
import Loader from "../../Loader/Loader";

export const JobsList = ({ userProfile }) => {
  useFirestoreConnect([{ collection: "jobs" }]);
  const jobs = useSelector((state) => state.firestore.ordered.jobs);

  let content;
  if (!jobs) {
    content = <Loader />;
  } else if (!jobs || !jobs) {
    content = (
      <div>
        <p>Brak dodanych ofert prac</p>
      </div>
    );
  } else if (jobs.length === 0) {
    content = (
      <div>
        <p>Brak dodanych ofert prac</p>
      </div>
    );
  } else {
    content = (
      <>
        {jobs &&
          jobs.map((jobs) => (
        
            <JobList
              userProfile={userProfile}
              jobs={jobs}
              id={jobs.id}
              key={jobs.id}
            />
         
          ))}
      </>
    );
  }
  return <>{content}</>;
};
