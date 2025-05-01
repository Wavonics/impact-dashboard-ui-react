import React, { useEffect, useState } from 'react';

export default function Contracts() {
  const [contracts, setContracts] = useState([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_BASE_URL}/contracts`)
      .then((res) => res.json())
      .then((data) => setContracts(data))
      .catch((err) => console.error("API error:", err));
  }, []);

  return (
    <div>
      <h2>Contracts</h2>
      <ul>
        {contracts.map((contract) => (
          <li key={contract.id}>
            {contract.title} — {contract.vendor}
          </li>
        ))}
      </ul>
    </div>
  );
}
