import { MoveDownIcon } from "lucide-react";
import Image from "next/image";
import NavbarIcon from "@/app/assets/home/navbar-icon.svg";

export default function Navbar() {
  return (
    <div className="bg-secondary text-white font-semibold p-7 overflow-x-auto sticky top-0 z-[100]">
      <nav className="max-w-screen-2xl w-full mx-auto">
        <ul className="flex gap-6 items-center text-sm">
          <li className="flex gap-2 items-center">
            <a href="#services" className="flex gap-4 items-center ">
              <span><Image width="24" height="24" className="size-4" src={NavbarIcon.src} /></span>
              <span>Services</span>
              <span><MoveDownIcon className="size-4" /></span>
            </a>
          </li>
          <li className="flex gap-2 items-center">
            <a href="#projects" className="flex gap-4 items-center ">
              <span><Image width="24" height="24" className="size-4" src={NavbarIcon.src} /></span>
              <span>Projects</span>
              <span><MoveDownIcon className="size-4" /></span>
            </a>
          </li>
          <li className="flex gap-2 items-center">
            <a href="#testimonials" className="flex gap-4 items-center ">
              <span><Image width="24" height="24" className="size-4" src={NavbarIcon.src} /></span>
              <span>Testimonials</span>
              <span><MoveDownIcon className="size-4" /></span>
            </a>
          </li>
          <li className="flex gap-2 items-center">
            <a href="#contact" className="flex gap-4 items-center ">
              <span><Image width="24" height="24" className="size-4" src={NavbarIcon.src} /></span>
              <span>Contact</span>
              <span><MoveDownIcon className="size-4" /></span>
            </a>
          </li>
        </ul>
      </nav>
    </div>

  );
}
