import { useEffect, useState } from "react";

interface Repo {
  name: string;
  description: string;
};

function App() {
  const [repos, setRepos] = useState<Repo[]>([]);

  useEffect(() => {
    fetch('https://api.github.com/users/Rodrigo001-dev/repos')
      .then(response => response.json())
      .then(data => setRepos(data))
  }, []);

  return (
    <div>
      <input name="search" type="text" placeholder="Buscar..." />

      <ul>
        {repos.map(repo => {
          return (
            <li key={repo.name}>
              {repo.name}
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default App;
