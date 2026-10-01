
const technology = ["react", "js", "html"];
const students = [
  {
    id: 1,
    firstName: "xhenis",
    age: 12
  },
    {
    id: 2,
    firstName: "filan",
    age: 17
  },
    {
    id: 3,
    firstName: "fisteku",
    age: 14
  }
]
function App() {
  return(
    <div>
      {
        technology.map((technology) => (
          <p key={technology}>{technology}</p>
        ))
      }
      {
        students.map((students) => (
        <h1 key={students.id}>{students.firstName}</h1>
        ))
      }
    </div>
  )
}

export default App
