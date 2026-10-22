
import './App.css'
import Delivery from './components/Delivery'
import HabitCard from './components/HabitCard';
import Notificiation from './components/notificiation'
import QuizResult from './components/QuizResult';
import Seat from './components/Seat';
import SongCard from './components/SongCard'
import TrafficLight from './components/TrafficLight';
import UserCard from './components/UserCard';
import songs from "./data/songs";
import users from "./data/users"


function App() {


  return (

    <div>
      <h1>1.</h1>
      <Notificiation/>
      <hr />
      <h1>2.</h1>
      <Delivery order="#1001" status="pending" />
      <Delivery order="#1002" status="on-the-way" />
      <Delivery order="#1003" status="delivered" />
      <hr />
      <h1>3.</h1>
      <div>
        {songs.map((song) => (
          <SongCard
          key={song.id}
          title={song.title}
          artist={song.artist}
          favorite={song.favorite}
          />
        ))}
      </div>
      <hr />
      <h1>4.</h1>
      <Seat number={1}/>
      <Seat number={2}/>
      <Seat number={3}/>
      <hr />
      <h1>5.</h1>
      <div>
        {users.map((user) => (
          <UserCard
          key={user.id}
          name={user.name}
          online={user.online}
          />
        ))}
      </div>
      <hr />
      <h1>6.</h1>
      <QuizResult
        name="Xhenis"
        correctAnswers={9}
        totalQuestions={10}
      />
      <QuizResult
        name="Amar"
        correctAnswers={4}
        totalQuestions={10}
      />
      <QuizResult
        name="Ajan"
        correctAnswers={7}
        totalQuestions={10}
      />
      <hr />
      <h1>7.</h1>
      <HabitCard title="Lexo nje liber" />
      <HabitCard title="Ushtro" />
      <HabitCard title="Shko ne kurs" />
      <hr />
      <h1>8.</h1>
      <TrafficLight/>
    </div>
  )
}

export default App