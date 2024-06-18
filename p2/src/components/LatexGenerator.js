// src/components/LatexGenerator.js
import React, { useState } from 'react';
import { generateLatex } from '../api';

const LatexGenerator = () => {
  const [text, setText] = useState('');
  const [latexCode, setLatexCode] = useState('');

  const handleGenerate = async () => {
    const res = await generateLatex(text);
    setLatexCode(res);
  };

  return (
    <section id="latex">
      <h2>Generate LaTeX</h2>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter text to convert to LaTeX"
      />
      <button onClick={handleGenerate}>Generate</button>
      <div id="latex-output">{latexCode}</div>
    </section>
  );
};

export default LatexGenerator;
