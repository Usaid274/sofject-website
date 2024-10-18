import { MoveDownIcon } from "lucide-react";
import Image from "next/image";
import NavbarIcon from "@/app/assets/home/navbar-icon.svg";

export default function Navbar() {
  return (
    <div className="bg-secondary text-white font-semibold px-4">
      <div className="overflow-x-auto sticky top-0 z-[100] py-9">
        <nav className="max-w-screen-2xl w-full mx-auto">
          <ul className="flex gap-12 items-center text-sm">
            <li>
              <a href="#services" className="flex gap-2 items-center">
                <span className="shrink-0"><Image width="24" height="24" className="size-4" src={NavbarIcon.src} alt="Navbar icon" aria-hidden /></span>
                <span>Services</span>
                <span className="shrink-0"><MoveDownIcon className="size-4" /></span>
              </a>
            </li>
            <li>
              <a href="#projects" className="flex gap-2 items-center">
                <span className="shrink-0"><Image width="24" height="24" className="size-4" src={NavbarIcon.src} alt="Navbar icon" aria-hidden /></span>
                <span>Projects</span>
                <span className="shrink-0"><MoveDownIcon className="size-4" /></span>
              </a>
            </li>
            <li>
              <a href="#testimonials" className="flex gap-2 items-center">
                <span className="shrink-0"><Image width="24" height="24" className="size-4" src={NavbarIcon.src} alt="Navbar icon" aria-hidden /></span>
                <span>Testimonials</span>
                <span className="shrink-0"><MoveDownIcon className="size-4" /></span>
              </a>
            </li>
            <li>
              <a href="#contact" className="flex gap-2 items-center">
                <span className="shrink-0"><Image width="24" height="24" className="size-4" src={NavbarIcon.src} alt="Navbar icon" aria-hidden /></span>
                <span>Contact</span>
                <span className="shrink-0"><MoveDownIcon className="size-4" /></span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
