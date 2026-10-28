
import './App.css'
import Checkbox from './components/Checkbox'
import Form from './components/Form'
import Input from './components/Input'
import Password from './components/Password'
import Radio from './components/Radio'
import RegisterForm from './components/RegisterForm'

import Header from './components/Header'
import MovieList from './components/MovieList'


function App() {


  return (

    <div>

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
 
     

    </div>
  )
}

export default App