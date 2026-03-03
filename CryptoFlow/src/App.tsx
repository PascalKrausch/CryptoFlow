import './App.css'
import { Routes, Route } from 'react-router-dom'
import Homepage from './components/Homepage'
import Dashboard from './components/Dashboard'
import NavBar from './components/NavBar'

function App() {
  return (
    <div> 
    <NavBar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  )
}

export default App
