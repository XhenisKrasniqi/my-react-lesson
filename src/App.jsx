
import './App.css'
import Header from './components/Header'
import Statistics from './components/Statistics'
import StudentsList from './components/StudentsList'

function App() {


  return (
    <div className='app'>
      <Header/>
      <Statistics/>
      <StudentsList/>
    </div>
  )
}

export default App