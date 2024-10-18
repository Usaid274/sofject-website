'use client';

import Image from "next/image";
import { useState } from "react";
import Section1Img1 from "@/app/assets/home/section1-1.png"
import Section1Img2 from "@/app/assets/home/section1-2.png"

export default function ServicesTab() {
  const [active, setActive] = useState('Mobile app');

  let rotatation;

  switch (active) {
    case 'Mobile app':
      rotatation = 'rotate-[-18deg] max-sm:rotate-[-30deg] sm:max-lg:rotate-[-23deg] lg:max-2xl:rotate-[-30deg]'
      break;
    case 'Web app':
      rotatation = 'rotate-[-4deg] max-sm:rotate-[-8deg] sm:max-lg:rotate-[-8deg] lg:max-2xl:rotate-[-10deg]'
      break;
    case 'Web design':
      rotatation = 'rotate-[6deg] sm:max-lg:rotate-[8deg] lg:max-2xl:rotate-[10deg]'
      break;
    case 'Graphic design':
      rotatation = 'rotate-[18deg] max-sm:rotate-[30deg] sm:max-lg:rotate-[24deg] lg:max-2xl:rotate-[27deg]'
      break;
    default:
      break;
  }

  return (
    <div className="grid grid-cols-[1fr_1.6fr_1fr] gap-8 w-full grid-flow-dense max-lg:grid-cols-[1.5fr_1fr] mt-24 max-w-screen-2xl mx-auto overflow-x-clip">
      <ul className="flex flex-col gap-2 text-right relative self-start max-sm:text-xs">
        <div className={`absolute left-0 top-1/2 -z-10 size-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary lg:max-2xl:size-48 sm:max-lg:size-60 max-sm:size-36 ring-1 ring-primary ring-offset-[12px] before:absolute before:size-3 before:rounded-full before:bg-primary before:top-1/2 before:-right-3 before:translate-x-1/2 before:-translate-y-1/2 transition-transform ${rotatation}`} />

        {Object.keys(tabContent).map((key, index) => (
          <li key={index}>
            <button
              onClick={() => setActive(key)}
              className={`${active === key ? 'scale-150 font-bold text-secondary lg:max-2xl:scale-125 max-sm:scale-125' : ''} text-neutral-500 origin-right cursor-pointer leading-relaxed transition-all focus-visible:outline-none lg:max-2xl:text-sm`}
            >
              {key}
            </button>
          </li>
        ))}
      </ul>

      <div className="border-t pt-2 px-4 max-w-screen-sm flex flex-col gap-4 max-lg:row-start-2 max-lg:col-span-full">
        {tabContent[active]}
      </div>
        
      <div className="flex gap-2 max-lg:col-start-2 w-full pr-4">
        <div className="basis-3/4">
          <Image src={Section1Img1} alt="People working on their computers" className="rounded-lg object-cover h-96 w-auto max-sm:h-48" />
        </div>
        <div className="basis-1/4">
          <Image src={Section1Img2} alt="A computer screen" className="rounded-lg object-cover object-right h-96 w-auto max-sm:h-48" />
        </div>
      </div>
    </div>
  );
}

const tabContent = {
  'Mobile app': (
    <>
      <p>
        A mobile app (or mobile application) is a software application developed specifically for use on small, wireless computing devices, such as smartphones and tablets, rather than desktop or laptop computers.
      </p>
      <p>
        A mobile app (or mobile application) is a software application developed specifically for use on small, wireless computing devices, such as smartphones and tablets, rather than desktop or laptop computers.
      </p>
    </>
  ),
  'Web app': (
    <>
      <p>
        A web application (web app) is an application program that is stored on a remote server and delivered over the internet through a browser interface. Web services are web apps by definition and many, although not all, websites contain web apps.
      </p>
      <p>
        A web application (web app) is an application program that is stored on a remote server and delivered over the internet through a browser interface. Web services are web apps by definition and many, although not all, websites contain web apps.
      </p>
    </>
  ),
  'Web design': (
    <>
      <p>
        Web design involves creating the visual elements and layout of a website, while coding involves translating these designs into a functional website using programming languages like HTML, CSS, and JavaScript. Typically, dedicated web developers translate the designs to code.
      </p>
      <p>
        Typically, dedicated web developers translate the designs to code.
      </p>
    </>
  ),
  'Graphic design': (
    <>
      <p>
        Graphic design is a profession, academic discipline and applied art whose activity consists in projecting visual communications intended to transmit specific messages to social groups, with specific objectives. Graphic design is an interdisciplinary branch of design and of the fine arts.
      </p>
      <p>
        Graphic design is a profession, academic discipline and applied art whose activity consists in projecting visual communications intended to transmit specific messages to social groups, with specific objectives. Graphic design is an interdisciplinary branch of design and of the fine arts.
      </p>
    </>
  )
}
