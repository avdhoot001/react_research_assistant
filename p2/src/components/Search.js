// src/components/Search.js
import React, { useState } from 'react';
import { searchPapers } from '../api';

const Search = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = async () => {
    const res = await searchPapers(query);
    setResults(res);
  };

  return (
    <section id="search">
      <h2>Search Papers</h2>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Enter search term"
      />
      <button onClick={handleSearch}>Search</button>
      <div id="search-results">
        {results.map((result, index) => (
          <div key={index}>{result.title}</div>
        ))}
      </div>
    </section>
  );
};

export default Search;
