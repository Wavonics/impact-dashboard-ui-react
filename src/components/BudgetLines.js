import React, { useEffect, useState } from 'react';

export default function BudgetLines() {
  const [lines, setLines] = useState([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_BASE_URL}/budget-lines`)
      .then((res) => res.json())
      .then((data) => setLines(data))
      .catch((err) => console.error("API error:", err));
  }, []);

  return (
    <div>
      <h2>Budget Lines</h2>
      <ul>
        {lines.map((line) => (
          <li key={line.id}>
            {line.account} — ${line.amount}
          </li>
        ))}
      </ul>
    </div>
  );
}
