import { useQuery } from 'react-query'
import { getPokemons } from './services/pokemon'

function App() {
  const { data: pokemons, isLoading } = useQuery("pokemons", getPokemons);
  console.log(pokemons)

  if (isLoading) {
    return <div>Loading...</div>
  }

  return (
    <div>
      {pokemons?.data.results.map(pokemon => (
        <div>{pokemon.name}</div>
      ))}
    </div>
  )
}

export default App
