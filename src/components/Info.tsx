import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { Transition } from "@headlessui/react"

import { getPokemon } from "../api/pokemon";
import { useFavoritesStore } from "../store/favoritesStore";
import Chip from "./Chip";
import InfoItem from "./InfoItem";
import Stat from "./Stat";

interface InfoProps {
  url: string
}

function Info({ url }: InfoProps) {
  const { data: pokemon } = useQuery(url, () => getPokemon(url))
  const [showAnimation, setshowAnimation] = useState(false)

  const favorites = useFavoritesStore((store) => store.favorites)
  const removeFavorite = useFavoritesStore((store) => store.removeFavorite)
  const isFavorite = !!favorites[pokemon?.data.id]

  useEffect(() => {
    setshowAnimation(true)
    return () => setshowAnimation(false)
  }, [url])
  
  return (
    <Transition
      as="aside"
      appear={true}
      show={showAnimation}
      enter="transition-all duration-1000"
      enterFrom="translate-x-24 opacity-0"
      enterTo="translate-x-0 opacity-100"
      leave="transition-all duration-1000"
      leaveFrom="opacity-100"
      leaveTo="translate-x-24 opacity-0"
    >
      <div className='sticky group top-[110px] w-[300px] max-h-[80vh] p-2 pt-12 text-center shadow-md bg-white rounded-xl'>
        { isFavorite && <button onClick={() => removeFavorite({ id: pokemon?.data.id })} className='absolute top-[10px] right-[10px]'> ❤️ </button> }
        <img src={pokemon?.data.sprites.front_default} alt={pokemon?.data.name} className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 group-hover:scale-125 group-hover:rotate-12 transition-all ease-in-out" />
        <div className="text-gray-400 text-sm font-bold">#{pokemon?.data.id}</div>
        <div className="pb-4 capitalize text-3xl text-slate-800 font-bold">{pokemon?.data.name}</div>
        {/* Types */}
        <div className='flex justify-center space-x-2 mb-2'>
          {pokemon?.data.types.map((item, idx) => (
            <Chip key={`type-${idx}`} label={item?.type.name} />
          ))}
        </div>
        {/* Abilities */}
        <div className="uppercase font-bold text-slate-800 mt-4 mb-1 tracking-wide text-sm">
          Abilities
        </div>
        <div className='grid grid-cols-2 gap-2'>
          {pokemon?.data.abilities.map((item, idx) => (
            <InfoItem key={`type-${idx}`} label={item.ability.name} />
          ))}
        </div>
        {/* Weight & height */}
        <div className='grid grid-cols-2 gap-2'>
          <div>
            <div className="uppercase font-bold text-slate-800 mt-4 mb-1 tracking-wide text-sm">Weight</div>
            <InfoItem label={pokemon?.data.weight} />
          </div>
          <div>
            <div className="uppercase font-bold text-slate-800 mt-4 mb-1 tracking-wide text-sm">Height</div>
            <InfoItem label={pokemon?.data.height} />
          </div>
        </div>
        {/* Weaknesses & Base exp */}
        <div className='grid grid-cols-2 gap-2'>
          <div>
            <div className="uppercase font-bold text-slate-800 mt-4 mb-1 tracking-wide text-sm">Weaknesses</div>
            <InfoItem label={pokemon?.data.weight} />
          </div>
          <div>
            <div className="uppercase font-bold text-slate-800 mt-4 mb-1 tracking-wide text-sm">Base exp</div>
            <InfoItem label={pokemon?.data.base_experience} />
          </div>
        </div>
        {/* Stats */}
        <div>
          <div className="uppercase font-bold text-slate-800 mt-4 mb-1 tracking-wide text-sm">Stats</div>
          <div className="flex justify-between">
            {pokemon?.data.stats.map((item, idx) => (
              <Stat
                key={`stat-${idx}`}
                stat={item.stat.name}
                base_stat={item.base_stat}
              />
            ))}
          </div>
        </div>
        {/* Evolution */}
        <div>
          <div className="uppercase font-bold text-slate-800 mt-4 mb-1 tracking-wide text-sm">Evolution</div>
          <div>

          </div>
        </div>
      </div>
    </Transition>
  )
}

export default Info;