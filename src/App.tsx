import { useEffect, useState } from "react";

interface Repo {
  name: string;
  description: string;
};

function App() {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [filteredRepos, setFilteredRepos] = useState<Repo[]>([]);
  const [search, setSearch] = useState('');

  console.log('Renderizou');

  useEffect(() => {
    fetch('https://api.github.com/users/Rodrigo001-dev/repos')
      .then(response => response.json())
      .then(data => setRepos(data))
  }, []);

  useEffect(() => {
    // o if (search.length) vai evitar uma renderização
    if (search.length) {
      setFilteredRepos(repos.filter(repo => repo.name.includes(search)));
    }
  }, [search]);

  return (
    <div>
      <input 
        name="search" 
        type="text" 
        placeholder="Buscar..."
        onChange={e => setSearch(e.target.value)}
        value={search}

      />

      {/* se existir alguma coisa na busca */}
      { search.length > 0 ? (
        <ul>
          {filteredRepos.map(repo => {
            return (
              <li key={repo.name}>
                {repo.name}
              </li>
            )
          })}
        </ul>
      ) : (
        <ul>
          {repos.map(repo => {
            return (
              <li key={repo.name}>
                {repo.name}
              </li>
            )
          })}
        </ul>
      ) }
    </div>
  )
}

export default App;
