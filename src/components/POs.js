import React, { useEffect, useState } from 'react';

export default function POs() {
  const [pos, setPOs] = useState([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_BASE_URL}/po`)
      .then((res) => res.json())
      .then((data) => setPOs(data))
      .catch((err) => console.error("API error:", err));
  }, []);

  return (
    <div>
      <h2>Purchase Orders</h2>
      <ul>
        {pos.map((po) => (
          <li key={po.id}>
            PO#: {po.number} — {po.vendor}
          </li>
        ))}
      </ul>
    </div>
  );
}
