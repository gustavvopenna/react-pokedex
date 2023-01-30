import { useInfiniteQuery } from 'react-query'

import { getPokemons } from '../api/pokemon'
import { useFavoritesStore } from '../store/favoritesStore';
import Card from '../components/Card';
import Info from '../components/Info';
import Layout from '../components/Layout';

function HomePage() {
  const { data, isLoading, fetchNextPage } = useInfiniteQuery(
    "pokemons",
    (pageParams) => getPokemons(pageParams),
    { getNextPageParam: lastPage => lastPage.data.next }
  );

  const addFavorite = useFavoritesStore((state) => state.addFavorite)
  const removeFavorite = useFavoritesStore((state) => state.removeFavorite)
  const selected = useFavoritesStore((state) => state.selected)
  const setSelected = useFavoritesStore((state) => state.setSelected)

  if (isLoading) {
    return <div>Loading...</div>
  }

  return (
    <Layout aside={<Info url={selected.url} />}>
      <div className='grid grid-cols-3 gap-x-4 gap-y-12 pr-6'>
        {
          data?.pages.map(page => page.data.results.map(pokemon => (
            <Card
              key={`pokemon-${pokemon.name}`}
              url={pokemon.url}
              onClick={() => setSelected(pokemon)}
              onAddFavorite={(info) => addFavorite({ id: info.data.id, name: info.data.name, url: pokemon.url })}
              onRemoveFavorite={(info) => removeFavorite({ id: info.data.id })}
            />
          )))
        }
        <button
          className='min-h-[157px] mb-2 p-2 shadow-md bg-white rounded-xl font-bold'
          onClick={() => fetchNextPage()}
        >
          More <span className='text-red-500'>+</span>
        </button>
      </div>
    </Layout>
  )
}

export default HomePage;
