import './App.css'
import { BrowserRouter, Routes, Route, useNavigate, Navigate } from 'react-router-dom'
// import Dashboard from './components/Dashboard'
// import Landing from './components/Landing'
import React from 'react'

const Dashboard = React.lazy(() => import("./components/Dashboard"))
const Landing = React.lazy(() => import("./components/Landing"))

function App() {
  return (
    <div>
      <BrowserRouter>
        <Appbar />
        <Routes>
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/' element={<Landing />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

function Appbar() {
  const navigate = useNavigate()
  return(
    <div>
      <button onClick={() => { navigate("/") }}>Landing Page</button>
      <button onClick={() => { navigate("/dashboard") }}>Dashboard</button>
    </div>
  )
}

export default App
