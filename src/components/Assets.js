import React, { useEffect, useState } from 'react';

export default function Assets() {
  const [assets, setAssets] = useState([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_BASE_URL}/assets`)
      .then((res) => res.json())
      .then((data) => setAssets(data))
      .catch((err) => console.error("API error:", err));
  }, []);

  return (
    <div>
      <h2>Assets</h2>
      <ul>
        {assets.map((asset) => (
          <li key={asset.id}>
            {asset.name} — {asset.type}
          </li>
        ))}
      </ul>
    </div>
  );
}
