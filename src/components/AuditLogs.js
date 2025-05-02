import React, { useEffect, useState } from 'react';
import { getFirestore, collection, getDocs, query, orderBy } from 'firebase/firestore';

export default function AuditLogs() {
  const [logs, setLogs] = useState([]);
  const db = getFirestore();

  useEffect(() => {
    const fetchLogs = async () => {
      const q = query(collection(db, 'auditLogs'), orderBy('timestamp', 'desc'));
      const querySnapshot = await getDocs(q);
      const logsData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data()
      }));
      setLogs(logsData);
    };
    fetchLogs();
  }, []);

  const containerStyle = {
    padding: '20px',
    fontFamily: "'Inter', 'Segoe UI', 'Helvetica', sans-serif",
    backgroundColor: '#111827',
    color: '#fff',
    minHeight: '100vh'
  };

  const tableStyle = {
    width: '100%',
    borderCollapse: 'collapse',
    marginTop: '20px'
  };

  const thStyle = {
    border: '1px solid #333',
    padding: '10px',
    backgroundColor: '#1f2937',
    color: '#f97316'
  };

  const tdStyle = {
    border: '1px solid #333',
    padding: '10px'
  };

  return (
    <div style={containerStyle}>
      <h1>Audit Logs</h1>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thStyle}>Timestamp</th>
            <th style={thStyle}>User Email</th>
            <th style={thStyle}>Action</th>
          </tr>
        </thead>
        <tbody>
          {logs.map((log) => (
            <tr key={log.id}>
              <td style={tdStyle}>{log.timestamp?.toDate().toLocaleString()}</td>
              <td style={tdStyle}>{log.userEmail}</td>
              <td style={tdStyle}>{log.action}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {logs.length === 0 && <p>No audit logs found.</p>}
    </div>
  );
}
