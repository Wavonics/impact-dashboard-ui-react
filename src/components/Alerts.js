import React, { useEffect, useState } from 'react';

export default function Alerts() {
  const [alerts, setAlerts] = useState([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_BASE_URL}/alerts`)
      .then(res => res.json())
      .then(data => setAlerts(data))
      .catch(err => console.error("API error:", err));
  }, []);

  return (
    <div>
      <h2>Alerts</h2>
      <ul>
        {alerts.map(alert => (
          <li key={alert.id}>
            {alert.message} — {alert.level}
          </li>
        ))}
      </ul>
    </div>
  );
}
