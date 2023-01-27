import { PropsWithChildren } from "react";

interface LayoutProps {
  header?: JSX.Element
  footer?: JSX.Element
  aside?: JSX.Element
}

export default function Layout({ children, header, aside, footer }: PropsWithChildren<LayoutProps>) {
  return (
    <div className="grid min-h-screen min-w-full max-h-screen grid-rows-[70px_minmax(400px,_1fr)_40px] bg-slate-100">
      {header}
      <main className="grid grid-cols-[1fr_300px] gap-4 max-w-4xl mx-auto">
          <section className="overflow-auto pt-10">
            {children}
          </section>
          {aside}
      </main>
      {footer}
    </div>
  )
};
