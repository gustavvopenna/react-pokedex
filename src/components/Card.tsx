import { useQuery } from 'react-query'
import { getPokemon } from '../services/pokemon';

function Card({ url }: { url: string}) {

  const { data: pokemon } = useQuery(url, () => getPokemon(url))
  console.log(pokemon)
  console.log(pokemon?.data.sprites.front_default)

  return (
    <div className='relative mb-2 p-2 pt-12 text-center shadow-md bg-white rounded-xl'>
      <img src={pokemon?.data.sprites.front_default} alt={pokemon?.data.name} className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
      <div>N°{pokemon?.data.id}</div>
      <div className='font-bold capitalize'>{pokemon?.data.name}</div>
      <div className='flex justify-center space-x-2'>
        {pokemon?.data.types.map((item, idx) => (
          <div key={`type-${idx}`} className='p-2 bg-gray-200 rounded-md uppercase'>{item.type.name}</div>
        ))}
      </div>
    </div>
  )
}

export default Card;