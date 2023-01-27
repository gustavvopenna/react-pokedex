import { Link } from "react-router-dom";
import { useFavoritesStore } from "../store/favoritesStore";

export default function Header() {
  const favorites = useFavoritesStore((state) => state.favorites)

  return (
    <header className="mb-4 mx-auto p-4 min-w-[1024px] bg-white rounded-b-lg text-slate-800 font-bold uppercase flex space-x-4">
      <Link to="/">Home</Link>
      <Link to="/favorites">Favorites({ Object.keys(favorites).length })</Link>
    </header>
  )
};
