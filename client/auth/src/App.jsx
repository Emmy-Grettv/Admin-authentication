import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import { Register } from './auth/register'
import { Login } from './auth/Login'
import { Dashboard } from './pages/Dashboard'

const App = () => {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/dashboard' element={<Dashboard />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
