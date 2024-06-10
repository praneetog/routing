import './App.css'
import { BrowserRouter, Routes, Route, useNavigate, Navigate } from 'react-router-dom'
// import Dashboard from './components/Dashboard'
// import Landing from './components/Landing'
import React, { Suspense, lazy } from 'react'

const Dashboard = lazy(() => import("./components/Dashboard"))
const Landing = lazy(() => import("./components/Landing"))

function App() {
  return (
    <div>
      <BrowserRouter>
        <Appbar />
        <Routes>
          <Route path='/dashboard' element={<Suspense fallback = {"loading..."}>
              <Dashboard />
            </Suspense>}
          />
          <Route path='/' element={<Suspense fallback = {"loading..."}>
              <Landing />
            </Suspense>} />
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
