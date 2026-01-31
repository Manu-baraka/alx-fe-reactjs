import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        
        <Routes>
          <Route path="/" element={<></>} />
        </Routes>

      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      </Router>
    </>
  )
}

// services/githubService.js
const GITHUB_API_KEY = import.meta.env.VITE_APP_GITHUB_API_KEY;
const BASE_URL = import.meta.env.VITE_APP_API_BASE_URL;

export async function fetchRepos(username) {
  const response = await fetch(`${BASE_URL}/users/${username}/repos`, {
    headers: {
      Authorization: `token ${GITHUB_API_KEY}`,
    },
  });
  return response.json();
}

export default App
