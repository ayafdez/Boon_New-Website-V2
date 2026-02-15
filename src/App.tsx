import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Homepage from './pages/Homepage'
import Solutions from './pages/Solutions'
import ForCoaches from './pages/ForCoaches'
import ForIndividuals from './pages/ForIndividuals'
import Resources from './pages/Resources'
import './styles/global.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/solutions" element={<Solutions />} />
        <Route path="/for-coaches" element={<ForCoaches />} />
        <Route path="/for-individuals" element={<ForIndividuals />} />
        <Route path="/resources" element={<Resources />} />
      </Routes>
    </Router>
  )
}

export default App
