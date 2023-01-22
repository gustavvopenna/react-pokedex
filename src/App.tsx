import { useInfiniteQuery } from 'react-query'
import Card from './components/Card';
import { getPokemons } from './services/pokemon'

function App() {
  const { data, isLoading, fetchNextPage } = useInfiniteQuery(
    "pokemons",
    (pageParams) => getPokemons(pageParams),
    { getNextPageParam: lastPage => lastPage.data.next }
  );

  if (isLoading) {
    return <div>Loading...</div>
  }

  return (
    <div className='bg-gray-100'>
      <div className='px-4 py-12 max-w-4xl mx-auto'>
        <div className='grid grid-cols-3 gap-x-4 gap-y-12'>
          {
            data?.pages.map(page => page.data.results.map((pokemon, idx) => (
              <Card key={`pokemon-${idx}`} url={pokemon.url} />
            )))
          }
        </div>
      </div>
      <button onClick={() => fetchNextPage()}>Load More</button>
    </div>
  )
}

export default App
