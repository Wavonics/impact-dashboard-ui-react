import React, { useEffect, useState } from 'react';

export default function AuditLogs() {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_BASE_URL}/audit-logs`)
      .then(res => res.json())
      .then(data => setLogs(data))
      .catch(err => console.error("API error:", err));
  }, []);

  return (
    <div>
      <h2>Audit Logs</h2>
      <ul>
        {logs.map(log => (
          <li key={log.id}>
            {log.action} — {log.timestamp}
          </li>
        ))}
      </ul>
    </div>
  );
}
