// src/api.js
export const searchPapers = async (query) => {
    const response = await fetch(`/api/search?query=${query}`);
    return response.json();
  };
  
  export const summarizePaper = async (text) => {
    const response = await fetch('/api/summarize', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text }),
    });
    return response.json();
  };
  
  export const askQuestion = async (question) => {
    const response = await fetch('/api/ask', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ question }),
    });
    return response.json();
  };
  
  export const generateLatex = async (text) => {
    const response = await fetch('/api/latex', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text }),
    });
    return response.json();
  };
  
  export const loginUser = async (credentials) => {
    const response = await fetch('/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(credentials),
    });
    return response.json();
  };
  
  export const registerUser = async (userInfo) => {
    const response = await fetch('/api/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(userInfo),
    });
    return response.json();
  };
  