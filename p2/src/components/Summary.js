// src/components/Summary.js
import React, { useState } from 'react';
import { summarizePaper } from '../api';

const Summary = () => {
  const [text, setText] = useState('');
  const [summary, setSummary] = useState('');

  const handleSummarize = async () => {
    const res = await summarizePaper(text);
    setSummary(res);
  };

  return (
    <section id="summary">
      <h2>Summarize Paper</h2>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Paste your paper text here"
      />
      <button onClick={handleSummarize}>Summarize</button>
      <div id="summary-result">{summary}</div>
    </section>
  );
};

export default Summary;
