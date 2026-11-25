import { use, useState, useEffect} from "react"
import RepoCard from "../components/RepoCard";


function Repositories() {
    const [username, setUsername] = useState('Xheniskrasniqi')
    const [repos, setRepos] = useState([])
    const [error, setError] = useState(null);
    const getRepos = () =>{
        fetch(`https://api.github.com/users/${username}/repos?per_page=30`)
        .then((res) => {
            if(res.ok){
                return res.json()
            } else {
                throw new Error('Failed to fetch repos')
            }
            return res.json()
        })
        .then((data) => {
            setRepos(data)
        })
        .catch((error) => {
            setError(error.message)
        })
    }
    useEffect(() => {
        getRepos()
    }, [])
  return (
    <div>
        <h1>Find repos</h1>
        <div className="search">
            <input type="text" placeholder="Enter username" value={username} onChange={(e) => setUsername(e.target.value)} />
            <button onClick={getRepos}>Search</button>

        </div>
        <div className="repo-grid">
            {repos.map(repo => (
                <RepoCard key={repo.id} repo={repo} />
            ))}
        </div>
    </div>
  )
}

export default Repositories