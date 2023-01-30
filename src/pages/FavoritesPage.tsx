import { useFavoritesStore } from '../store/favoritesStore'

import Card from '../components/Card'
import Layout from '../components/Layout'

function FavoritesPage() {
  const removeFavorite = useFavoritesStore((state) => state.removeFavorite)
  const favorites = useFavoritesStore((state) => state.favorites)
  const favoritesParsed = Object.values(favorites)

  return (
    <Layout>
      {
        favoritesParsed.length > 0
          ? (
            <div className='grid grid-cols-4 gap-x-4 gap-y-12 pr-6'>
              {
                favoritesParsed.map(pokemon => (
                  <Card
                    url={pokemon.url}
                    onRemoveFavorite={(info) => removeFavorite({ id: info.data.id })}
                  />
                ))
              }
              </div>
          )
          : (
            <div className='w-full text-slate-400 text-2xl text-center'>
              There's no favorite Pokemons, go to the homepage to add some!
            </div>
          )
      }
    </Layout>
  )
}

export default FavoritesPage;