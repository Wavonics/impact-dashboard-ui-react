import React, { useEffect, useState } from 'react';

export default function Ownership() {
  const [ownership, setOwnership] = useState([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_BASE_URL}/ownership`)
      .then(res => res.json())
      .then(data => setOwnership(data))
      .catch(err => console.error("API error:", err));
  }, []);

  return (
    <div>
      <h2>Ownership Status</h2>
      <ul>
        {ownership.map(item => (
          <li key={item.id}>
            {item.asset_name} — {item.status}
          </li>
        ))}
      </ul>
    </div>
  );
}
