# IMPACT Dashboard UI (React)

This is the official React-based frontend for the [IMPACT Dashboard](https://impact.wavonics.com), a modular platform purpose-built for tracking IT contracts, assets, procurement, budgets, strategic projects, and ownership across departments.

The UI is designed with role-based access, smart navigation, and API integration in mind — supporting municipalities, agencies, and enterprise organizations focused on digital governance and accountability.

---

## 🎯 Core Features

- 🧱 Modular layout with React Router
- 🔌 Backend-ready: connects to Flask API
- 📁 Functional pages for:
  - Assets
  - Contracts
  - Purchase Orders
  - Budget Lines
  - Strategic Planning
  - Ownership (Leased/Owned)
- 🎨 Responsive layout for desktop/tablet
- ⚙️ Easily deployable to Render, Netlify, or GitHub Pages

---

## 🧰 Tech Stack

- React 18+
- React Router DOM v6
- Node.js / npm
- Hosted via [Render.com](https://render.com)

---

## 🏗️ Project Structure

impact-dashboard-ui-react/ ├── public/ # Static HTML template ├── src/ │ ├── components/ # UI modules (App, Assets, Contracts, etc.) │ └── index.js # App entry and routing ├── package.json # Project dependencies and scripts

Copy
Edit

---

## 🚀 Local Development

```bash
git clone https://github.com/Wavonics/impact-dashboard-ui-react.git
cd impact-dashboard-ui-react
npm install
npm start
Visit: http://localhost:3000
npm run build

