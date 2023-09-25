
import { useState, useEffect } from "react";

export default function Header() {
  const [navIsOpen, setNavIsOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);



  return (
    <header aria-label="Site Header" className={`fixed w-full z-50 ${scrolling ? 'bg-white shadow-sm' : ''}`}>
      <div className="flex h-16 max-w-screen-xl mx-auto items-center justify-between px-4 xl:px-0">
        <div className="flex items-center gap-4 lg:w-64 ">
          <a href='/#'>
            <img className="-translate-y-1" src='/logooo.svg' width={200} height={100} alt='logo' />
          </a>
        </div>

        <nav
          aria-label="Site Nav"
          className="hidden items-center justify-end gap-8 text-sm font-medium sm:flex sm:w-12 sm:flex-1"
        >
          <a className=" text-gray-900" href="/#home">
            Home
          </a>
          <a className="text-gray-900" href="/#offer">
            Oferta
          </a>
          <a className="text-gray-900" href="/#about">
            O mnie
          </a>
          <a className="text-gray-900" href="/#contact">
            Kontakt
          </a>
          <a className=" hover:bg-gray-800 bg-[#365466] px-6 py-2.5 text-white/95" href="/blog">Blog</a>
        </nav>

        <div className="flex gap-2">
          <button
            onClick={() => setNavIsOpen(!navIsOpen)}
            className="flex flex-col gap-1 w-10 p-2 z-20 sm:hidden "
          >
            <div
              className={`${
                navIsOpen ? "translate-y-[3px] rotate-45 " : ""
              } flex w-5 h-0.5 bg-[#365466] duration-300`}
            />
            <div
              className={`${
                navIsOpen ? "hidden" : ""
              } flex w-5 h-0.5 bg-[#365466] duration-300`}
            />
            <div
              className={`${
                navIsOpen ? "-translate-y-[3px] -rotate-45 " : ""
              } flex w-5 h-0.5 bg-[#365466] duration-300`}
            />
          </button>
        </div>
        <nav
          aria-label="Main Nav"
          className={`${
            navIsOpen ? "flex" : "hidden"
          } absolute right-0 top-0 z-10 px-5 pb-10 pt-20 w-[20rem] bg-white flex-col space-y-1 shadow-sm sm:hidden `}
        >
          <a
            href="/#home"
            className={`rounded-lg  px-4 py-2 text-sm font-medium text-gray-500`}
          >
            Home
          </a>

          <a
            href="/#offer"
            className={`block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 `}
          >
            Oferta
          </a>

          <a
            href="/#about"
            className={`block rounded-lg px-4 py-2 text-sm font-medium text-gray-500`}
          >
            O mnie
          </a>
          <a
            href="/#contact"
            className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 "
          >
            Kontakt
          </a>
          <a
            href="/blog"
            className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500"
          >
            Blog
          </a>
        </nav>
      </div>
    </header>
  );
}