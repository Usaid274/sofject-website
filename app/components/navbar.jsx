'use client';

import { useEffect, useRef } from "react";
import { MenuIcon } from "lucide-react";
import { useSelectedLayoutSegment } from "next/navigation";
import Link from "next/link";
import AnimatedLogo from "@/app/components/animated-logo";

export default function Navbar() {
  const ref = useRef(null);
  const toggleNavbar = (e) => {
    e.stopPropagation();
    ref.current.classList.toggle('max-lg:hidden');
  }

  const handleClickOutside = (e) => {
    if (ref.current && !ref.current.contains(e.target) && !ref.current.classList.contains('max-lg:hidden')) {
      ref.current.classList.add('max-lg:hidden');
    }
  }

  const closeNavbar = () => {
    if (!ref.current.classList.contains('max-lg:hidden')) {
      ref.current.classList.add('max-lg:hidden');
    }
  }

  useEffect(() => {
    window.document.addEventListener('click', handleClickOutside);
    return () => window.document.removeEventListener('click', handleClickOutside);
  }, []);

  const segment = useSelectedLayoutSegment();

  const isActive = (href) => segment === href;

  return (
    <div className="bg-secondary text-white p-6">
      <div className="max-w-screen-2xl mx-auto flex gap-2 justify-between items-center">
        <div>
          <AnimatedLogo />
        </div>

        <div className="relative">
          <button className="max-lg:block hidden" onClickCapture={toggleNavbar}>
            <span className="sr-only">Toggle navbar</span>
            <MenuIcon className="size-6" />
          </button>
          <nav ref={ref} className="max-lg:hidden max-lg:absolute max-lg:top-full max-lg:right-0 max-lg:bg-white max-lg:p-6 max-lg:min-w-36 max-lg:rounded-md max-lg:shadow-lg static">
            <ul className="flex gap-10 items-center text-sm font-medium max-lg:h-full max-lg:flex-col max-lg:items-start max-lg:gap-4 max-lg:justify-center max-lg:text-secondary">
              <li><Link onClick={closeNavbar} href="/about" className={`${isActive('about') ? 'text-primary font-bold' : ''}`}>About</Link></li>
              <li><Link onClick={closeNavbar} href="/" className={`${isActive(null) ? 'text-primary font-bold' : ''}`}>Home</Link></li>
              <li><Link onClick={closeNavbar} href="/services" className={`${isActive('services') ? 'text-primary font-bold' : ''}`}>Services</Link></li>
              <li><Link onClick={closeNavbar} href="/hire-us" className={`${isActive('hire-us') ? 'text-primary font-bold' : ''}`}>Hire us</Link></li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}
