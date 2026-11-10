
import { useEffect, useState } from 'react'
import './App.css'
import Users from './components/Users'
import { Routes , Route , Link} from 'react-router-dom'
import './App.css'
import Home from './pages/home'
import About from './pages/About'
import Courses from './pages/Courses'
import NotFound from './pages/NotFound'
import Contact from './pages/Contact'
import ProductList from './components/Products/ProductList'

import RegisterForm from './components/RegisterForm'
import Checkbox from './components/Checkbox'
import Form from './components/Form'
import Input from './components/Input'
import Password from './components/Password'
import Radio from './components/Radio'
import RegisterForm from './components/RegisterForm'

import Header from './components/Header'
import MovieList from './components/MovieList'


function App() {
  const[users , setUsers] = useState([]);
  const[errors, setErrors ] = useState(null);
  useEffect(() =>{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((response)=>response.json())
    .then((res) => {
      setUsers(res);
    }).catch((errors) => {
      setErrors(errors);
    });
  },[]);


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

    <div>
      <ProductList/>
      <RegisterForm/>

      {/* <Input/>
      <Password/>
      <Form/>
      <Checkbox/>
      <Radio/> */}

      <RegisterForm/>

      <div className='app'>
         <Header/>
         <MovieList/>
      </div>
 
     

    <div className='main'>
         <Users users={users}/>
        <p>{errors}</p>

      </div>      
 
  ) 
    </div>
  )
}

export default App