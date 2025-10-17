import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
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

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
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
