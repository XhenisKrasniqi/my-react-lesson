
import './App.css'
import Navbar from './components/Navbar'
import Repositories from './pages/Repositories'
import Home from './pages/Home'
import { Routes, Route } from 'react-router-dom'
import RepoDetails from './pages/RepoDetails'



function App() {


  return (
    <div className="container">
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/repos" element={<Repositories />} />
      <Route path="/repos/:username/:repoName" element={<RepoDetails />} />
    </Routes>
    </div>
  )
}

export default App