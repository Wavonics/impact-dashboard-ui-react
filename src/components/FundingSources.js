import React, { useEffect, useState } from 'react';

export default function FundingSources() {
  const [sources, setSources] = useState([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_BASE_URL}/funding-sources`)
      .then(res => res.json())
      .then(data => setSources(data))
      .catch(err => console.error("API error:", err));
  }, []);

  return (
    <div>
      <h2>Funding Sources</h2>
      <ul>
        {sources.map(source => (
          <li key={source.id}>{source.name}</li>
        ))}
      </ul>
    </div>
  );
}
