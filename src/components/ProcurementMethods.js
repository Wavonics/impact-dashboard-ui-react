import React, { useEffect, useState } from 'react';

export default function ProcurementMethods() {
  const [methods, setMethods] = useState([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_BASE_URL}/procurement-methods`)
      .then(res => res.json())
      .then(data => setMethods(data))
      .catch(err => console.error("API error:", err));
  }, []);

  return (
    <div>
      <h2>Procurement Methods</h2>
      <ul>
        {methods.map(method => (
          <li key={method.id}>{method.method_name}</li>
        ))}
      </ul>
    </div>
  );
}
