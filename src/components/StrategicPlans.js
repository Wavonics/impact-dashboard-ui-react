import React, { useEffect, useState } from 'react';

export default function StrategicPlans() {
  const [plans, setPlans] = useState([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_BASE_URL}/strategic-plans`)
      .then(res => res.json())
      .then(data => setPlans(data))
      .catch(err => console.error("API error:", err));
  }, []);

  return (
    <div>
      <h2>Strategic Plans</h2>
      <ul>
        {plans.map(plan => (
          <li key={plan.id}>
            {plan.title} — {plan.timeline}
          </li>
        ))}
      </ul>
    </div>
  );
}
