import { Link } from 'react-router-dom'

import { useFavoritesStore } from '../store/favoritesStore'
import Card from '../components/Card'
import Layout from '../components/Layout'

function FavoritesPage() {
  const removeFavorite = useFavoritesStore((state) => state.removeFavorite)
  const favorites = useFavoritesStore((state) => state.favorites)

  return (
    <Layout>
      <div className='grid grid-cols-3 gap-x-4 gap-y-12'>
        {
          Object.values(favorites).map(pokemon => (
            <Card
              url={pokemon.url}
              onRemoveFavorite={(info) => removeFavorite({ id: info.data.id })}
            />
          ))
        }
      </div>
    </Layout>
  )
}

export default FavoritesPage;