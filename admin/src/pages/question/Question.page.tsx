import React from 'react';
import {useParams} from "react-router-dom";
import {Layout} from "../../components/layout";

export const QuestionPage = () => {
  const {questionId} = useParams();

  return (
    <Layout>
      Id: {questionId}
    </Layout>
  );
};

