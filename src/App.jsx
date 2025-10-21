import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Login from './pages/Login'
import Cadastro from './pages/Cadastro'
import DashboardAluno from './pages/Dashboard_aluno'
import Perfil from './pages/Perfil'
import DashboardTreinador from './pages/Dashboard_treinador'
import Home from './pages/Home'
import './App.css'
import DarkModeToggle from './components/DarkModeToggle'

function TopRightThemeToggle() {
  const location = useLocation();
  if (location.pathname === '/') return null;
  return (
    <div className="fixed top-4 right-8 z-50">
      <DarkModeToggle />
    </div>
  );
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      {/* Global floating theme toggle (hidden on Home to use navbar position) */}
      <TopRightThemeToggle />
      <Routes>
        <Route path="/" element={<Home />} />
  <Route path="/login" element={<Login />} />
  <Route path="/cadastro" element={<Cadastro />} />
  <Route path="/dashboard" element={<DashboardAluno />} />
  <Route path="/perfil" element={<Perfil />} />
  <Route path="/dashboard-treinador" element={<DashboardTreinador />} />
      </Routes>
    </Router>
  )
}

export default App
