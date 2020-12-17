import React from "react";
import JobThree from "./JobThree";

const Job = ({ job, id }) => {
  return (
    <>
      {job &&
        job.map((job) => {
          return <JobMaper jobs={job.jobs} id={job.id} />;
        })}
    </>
  );
};

const JobMaper = ({ jobs }) => {
  return (
    <>
      {jobs
        .slice(0)
        .reverse()
        .map((jobs) => (
          <JobThree jobs={jobs} />
        ))}
    </>
  );
};
export default Job;
