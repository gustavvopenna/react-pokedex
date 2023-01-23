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
    <Layout>
      <div className='flex space-x-4 mt-10'>
        <div>
          <div className='grid grid-cols-3 gap-x-4 gap-y-12'>
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
          </div>
          <div className='text-center'>
            <button className='bg-red-300 px-2 py-1 rounded-full font-bold' onClick={() => fetchNextPage()}>Load More...</button>
          </div>
        </div>
        <Info url={selected.url} />
      </div>
    </Layout>
  )
}

export default HomePage;
