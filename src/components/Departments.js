import React, { useEffect, useState } from 'react';

export default function Departments() {
  const [departments, setDepartments] = useState([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_BASE_URL}/departments`)
      .then(res => res.json())
      .then(data => setDepartments(data))
      .catch(err => console.error("API error:", err));
  }, []);

  return (
    <div>
      <h2>Departments</h2>
      <ul>
        {departments.map(dept => (
          <li key={dept.id}>{dept.name} — {dept.account_line}</li>
        ))}
      </ul>
    </div>
  );
}
