import { PropsWithChildren } from "react";

import PokeballImg from '../assets/images/pokeball.svg'
import Footer from "./Footer";
import Header from "./Header";

interface LayoutProps {
  header?: JSX.Element
  footer?: JSX.Element
  aside?: JSX.Element
}

export default function Layout({ children, header, aside, footer }: PropsWithChildren<LayoutProps>) {
  return (
    <div className="grid relative min-h-screen min-w-full max-h-screen grid-rows-[70px_minmax(400px,_1fr)_40px] bg-slate-100">
      <img src={PokeballImg} alt="pokeball" className='absolute rotate-12 top-[-100px] left-[-100px] w-[350px] h-[350px]' />
      {header || <Header />}
      <main className="grid grid-cols-[1fr_300px] gap-4 max-w-4xl mx-auto z-10">
          <section className="overflow-auto pt-10">
            {children}
          </section>
          {aside}
      </main>
      {footer || <Footer />}
    </div>
  )
};
