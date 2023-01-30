import { useQuery } from 'react-query'
import { getPokemon } from '../api/pokemon';
import { typeColors } from '../helpers/typeColors';
import { useFavoritesStore } from '../store/favoritesStore';
import Chip from './Chip';

interface CardProps {
  url: string,
  onClick?: () => void,
  onAddFavorite?: (pokemon: any) => void
  onRemoveFavorite?: (pokemon: any) => void
}

function Card({ url, onClick, onAddFavorite, onRemoveFavorite }: CardProps) {

  const { data: pokemon } = useQuery(url, () => getPokemon(url))
  const favorites = useFavoritesStore((store) => store.favorites)
  const isFavorite = !!favorites[pokemon?.data.id]

  return (
    <div className='group relative min-w-[168px] mb-2 p-2 pt-12 text-center shadow-md bg-white rounded-xl hover:scale-105 duration-300' onClick={onClick}>
      {
        isFavorite ? (
          <button
            className='absolute top-[10px] right-[10px]'
            onClick={() => onRemoveFavorite(pokemon)}
          >
            ❤️
          </button>
        ) :
        (
          <button
            className='absolute top-[10px] right-[10px]'
            onClick={() => onAddFavorite(pokemon)}
          >
            ♡
          </button>
        )
      }
      <img
        src={pokemon?.data.sprites.front_default}
        alt={pokemon?.data.name}
        className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 group-hover:scale-125 transition-all ease-in-out"
      />
      <div className='text-gray-400 text-sm font-bold'>N°{pokemon?.data.id}</div>
      <div className='font-bold capitalize py-2'>{pokemon?.data.name}</div>
      <div className='flex justify-center space-x-2 pb-2'>
        {pokemon?.data.types.map((item, idx) => (
          <Chip key={`type-${idx}`} label={item?.type.name} />
        ))}
      </div>
    </div>
  )
}

export default Card;