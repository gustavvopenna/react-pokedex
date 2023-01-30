import PokeballImg from '../assets/images/pokeball.svg'

export default function Footer() {
  return (
    <footer className="flex items-center relative text-sm text-slate-700 font-semibold py-2 px-4 bg-white">
      Made with ❤️ and ⚛ by&nbsp;<a href="https://github.com/gustavvopenna">Gus</a>.
      <img src={PokeballImg} alt="pokeball" className='absolute top-[-24px] right-4 w-12 h-12' />
    </footer>
  )
};
