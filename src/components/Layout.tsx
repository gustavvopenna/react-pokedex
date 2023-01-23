import { Link } from 'react-router-dom'
import PokeballImg from '../assets/images/pokeball.svg'
import { useFavoritesStore } from '../store/favoritesStore';

function Layout({ children }: any) {
  const favorites = useFavoritesStore((state) => state.favorites)

  return (
    <div className='bg-gray-100 min-h-screen'>
      <div className='sticky top-0 max-w-6xl mx-auto bg-white rounded-b-lg p-4 text-slate-800 font-bold uppercase z-10 mb-4 flex space-x-4'>
        <Link to="/">Home</Link>
        <Link to="/favorites">Favorites({ Object.keys(favorites).length })</Link>
      </div>
      <div className='relative'>
        <img className='fixed top-[-200px] left-[-200px] w-[540px] h-[540px] -rotate-12 text-red-600' src={PokeballImg} alt="pokeball" />
        <div className='px-4 py-12 max-w-5xl mx-auto'>
          {children}
        </div>
      </div>
    </div>
  )
}

export default  Layout;