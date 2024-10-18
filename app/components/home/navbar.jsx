import { MoveDownIcon } from "lucide-react";
import Image from "next/image";
import NavbarIcon from "@/app/assets/home/navbar-icon.svg";

export default function Navbar() {
  return (
    <div className="bg-secondary text-white font-semibold px-4 sticky top-0 z-[100] shadow-md">
      <div className="overflow-x-auto py-9">
        <nav className="max-w-screen-2xl w-full mx-auto">
          <ul className="flex gap-12 items-center text-sm">
            {['Services', 'Projects', 'Testimonials', 'Contact'].map(item => (
              <li key={item}>
                <a href={`#${item.toLowerCase()}`} className="flex gap-2 items-center">
                  <span className="shrink-0"><Image width="24" height="24" className="size-4" src={NavbarIcon.src} alt="Navbar icon" aria-hidden /></span>
                  <span>{item}</span>
                  <span className="shrink-0"><MoveDownIcon className="size-4" /></span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}
