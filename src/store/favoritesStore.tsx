import { create } from 'zustand'
import { persist } from 'zustand/middleware'

const DEFAULT_SELECTED = { url: "https://pokeapi.co/api/v2/pokemon/1/", name: "bulbasaur" }

export const useFavoritesStore = create(
  persist(
    (set) => ({
      favorites: {},
      selected: DEFAULT_SELECTED,
      setSelected: (item) => set(() => ({ selected: item })),
      addFavorite: item => set(state => ({ favorites: { ...state.favorites, [item.id]: { name: item.name, url: item.url } } })),
      removeFavorite: item => set(state => {
        const { [item.id]: itemToRemove, ...rest } = state.favorites
        return { favorites: { ...rest } };
      })
    }),
    {
      name: 'favorites-local'
    }
  )
);