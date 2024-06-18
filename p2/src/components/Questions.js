// src/components/Questions.js
import React, { useState } from 'react';
import { askQuestion } from '../api';

const Questions = () => {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');

  const handleAsk = async () => {
    const res = await askQuestion(question);
    setAnswer(res);
  };

  return (
    <section id="questions">
      <h2>Ask Questions</h2>
      <textarea
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        placeholder="Ask a question about the paper"
      />
      <button onClick={handleAsk}>Ask</button>
      <div id="question-result">{answer}</div>
    </section>
  );
};

export default Questions;
