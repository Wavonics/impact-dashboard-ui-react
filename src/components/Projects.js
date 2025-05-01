import React, { useEffect, useState } from 'react';

export default function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_BASE_URL}/projects`)
      .then((res) => res.json())
      .then((data) => setProjects(data))
      .catch((err) => console.error("API error:", err));
  }, []);

  return (
    <div>
      <h2>Projects</h2>
      <ul>
        {projects.map((project) => (
          <li key={project.id}>
            {project.name} — {project.type}
          </li>
        ))}
      </ul>
    </div>
  );
}
