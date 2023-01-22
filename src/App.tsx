import { useInfiniteQuery } from 'react-query'
import Card from './components/Card';
import { getPokemons } from './services/pokemon'

function App() {
  const { data, isLoading, fetchNextPage } = useInfiniteQuery(
    "pokemons",
    (pageParams) => getPokemons(pageParams),
    { getNextPageParam: lastPage => lastPage.data.next }
  );

  console.log(data)

  if (isLoading) {
    return <div>Loading...</div>
  }

  return (
    <>
      <div>
        {
          data?.pages.map(page => page.data.results.map(pokemon => (
            <div>
              {pokemon.name}
              <Card url={pokemon.url} />
            </div>
          )))
        }
      </div>
      <button onClick={() => fetchNextPage()}>Load More</button>
    </>
  )
}

export default App
