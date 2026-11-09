
import { Routes , Route , Link} from 'react-router-dom'
import './App.css'
import Home from './pages/home'
import About from './pages/About'
import Courses from './pages/Courses'
import NotFound from './pages/NotFound'
import Contact from './pages/Contact'


function App() {


  return (
    <>
    <nav >
      <div>
      <Link to='/'>Logo</Link>
      
      </div>
      <div>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/courses'>Courses</Link>
        <Link to='/contact'>Contact</Link>
      </div>

    </nav>
      <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/about' element={<About />}/>
      <Route path='/courses' element={<Courses />}/>
      <Route path='/contact' element={<Contact />}/>
      <Route path='/*' element={<NotFound />}/>
      </Routes>
    </>
  )
}

export default App