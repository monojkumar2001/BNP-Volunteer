import React from "react";
import SingleEventSection from "../../components/Events/SingleEventSection";

const SingleEventPage = ({ params }) => {
  const { slug } = params || {};
  return (
    <>
      <SingleEventSection slug={slug} />
    </>
  );
};

export default SingleEventPage;

