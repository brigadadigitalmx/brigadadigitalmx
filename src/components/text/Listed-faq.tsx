import React from 'react';

interface ListedFaqProps {
  question: string;
  answer: string;
}

export const ListedFaq = (props: ListedFaqProps) => {
  const { question, answer } = props;

  return (
    <>
      <h3 className="margin-top-one bold">{question}</h3>
      <p className="padding-left-one margin-top-one">{answer}</p>
    </>
  );
};
