import { create } from 'zustand'
import { persist } from 'zustand/middleware'

const DEFAULT_SELECTED = { url: "https://pokeapi.co/api/v2/pokemon/1/", name: "bulbasaur" }

interface FavoriteItem {
  id?: string,
  name: string,
  url: string,
}

interface FavoritesState {
  favorites: {},
  selected: FavoriteItem,
  setSelected: (item: FavoriteItem) => void,
  addFavorite: (item: FavoriteItem) => void,
  removeFavorite: (item: { id: string }) => void,
}

export const useFavoritesStore = create<
  FavoritesState,
  [
    ['zustand/persist', FavoritesState]
  ]
>(
  persist(
    (set) => ({
      favorites: {},
      selected: DEFAULT_SELECTED,
      setSelected: item => set(() => ({ selected: item })),
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