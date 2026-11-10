
import { useEffect, useState } from 'react'
import './App.css'
import Users from './components/Users'


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

    <div className='main'>
         <Users users={users}/>
        <p>{errors}</p>

      </div>      
 
  ) 
}

export default App