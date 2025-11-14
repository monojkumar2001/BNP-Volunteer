import React from "react";
import SingleNewSection from "../../components/News/SingleNewSection";

const SingleNewsPage = ({ params }) => {
  const { slug } = params || {};
  return (
    <>
      <SingleNewSection slug={slug} />
    </>
  );
};

export default SingleNewsPage;
