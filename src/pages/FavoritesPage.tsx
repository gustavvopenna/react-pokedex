import { useFavoritesStore } from '../store/favoritesStore'

import Card from '../components/Card'
import Layout from '../components/Layout'
import Header from '../components/Header'
import Footer from '../components/Footer'

function FavoritesPage() {
  const removeFavorite = useFavoritesStore((state) => state.removeFavorite)
  const favorites = useFavoritesStore((state) => state.favorites)

  return (
    <Layout
      header={<Header />}
      footer={<Footer />}
    >
      <div className='grid grid-cols-3 gap-x-4 gap-y-12 pr-6'>
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