'use client';

import { useState } from "react";
import Image from "next/image";
import Heading from "@/app/components/heading";
import Section1Img1 from "@/app/assets/services/section1-1.png"
import Section1Img2 from "@/app/assets/home/section3-1.png"
import Section1Img3 from "@/app/assets/home/section3-2.png"
import AwardIcon from "@/app/assets/services/award-icon.svg"

export default function Section1() {
  const [selectedTab, setSelectedTab] = useState('Mobile App');

  return (
    <section className="py-24 px-4">
      <Heading headingText="Lorem ipsum dolor sit amet consectetur. Nam praesent viverra vel tortor nullam interdum.">
        <span className="text-primary">Our</span>
        <span> Services</span>
      </Heading>

      <div className="mt-12 max-w-screen-2xl mx-auto overflow-x-auto w-full">
        <div className="flex gap-4 [justify-content:safe_center] items-center w-full">
          <TabBtn selectedTab={selectedTab} setSelectedTab={setSelectedTab} tabName="Mobile App" />
          <TabBtn selectedTab={selectedTab} setSelectedTab={setSelectedTab} tabName="Web App" />
          <TabBtn selectedTab={selectedTab} setSelectedTab={setSelectedTab} tabName="Web Design" />
          <TabBtn selectedTab={selectedTab} setSelectedTab={setSelectedTab} tabName="Graphic Design" />
        </div>
      </div>

      <div className="mx-auto mt-14 grid max-w-screen-2xl grid-flow-col grid-cols-3 justify-items-center w-full overflow-hidden max-lg:gap-x-0 max-xl:gap-x-16 gap-x-32 gap-y-8 max-lg:grid-cols-2 max-lg:grid-flow-row">
        <div className="row-span-2 max-lg:row-span-1 flex items-center">
          <Image width="600" height="1000" src={Section1Img1.src} className="w-80 max-lg:w-1/2 mx-auto aspect-[9/16] rounded-3xl max-sm:rounded-md object-cover" />
        </div>

        <div>
          <h4 className="font-semibold">{selectedTab}</h4>
          <h5 className="text-primary font-semibold text-3xl max-sm:text-2xl mt-6 max-sm:mt-4">{tabContent[selectedTab].heading}</h5>
          <p className="mt-4 font-medium max-sm:text-xs max-md:text-sm italic max-md:mt-2">{tabContent[selectedTab].paragraph}</p>
        </div>

        <div className="border-t pt-8">
          <ul className="flex flex-col gap-4">
            <li className="grid grid-cols-[24px_1fr] gap-4">
              <Image width="24" height="24" src={AwardIcon.src} className="size-6 row-span-2" />
              <h6 className="font-semibold">No compromise on quality</h6>
              <p className="text-sm">
                Lorem ipsum dolor sit amet consectetur. Nam praesent viverra tincidunt vel tortor nullam interdum. Sit id scelerisque nunc.
              </p>
            </li>
            <li className="grid grid-cols-[24px_1fr] gap-4">
              <Image width="24" height="24" src={AwardIcon.src} className="size-6 row-span-2" />
              <h6 className="font-semibold">No compromise on quality</h6>
              <p className="text-sm">
                Lorem ipsum dolor sit amet consectetur. Nam praesent viverra tincidunt vel tortor nullam interdum. Sit id scelerisque nunc.
              </p>
            </li>
          </ul>
        </div>

        <div className="row-span-2 max-lg:row-span-1 min-h-[480px] w-full relative max-lg:border-t max-lg:pt-8">
          <Image width="512" height="900" src={Section1Img3.src} className="absolute left-1/2 top-1/2 w-3/5 aspect-[9/16] -translate-x-1/2 -translate-y-1/2 scale-75 rounded-2xl object-cover shadow-md max-md:left-3/4 max-sm:top-8 max-sm:translate-y-0 max-sm:rounded-md" />
          <Image width="512" height="900" src={Section1Img2.src} className="absolute left-0 top-1/2 w-3/5 aspect-[9/16] -translate-y-1/2 rounded-2xl object-cover shadow-md max-md:left-1/2 max-md:-translate-x-1/2 max-sm:top-8 max-sm:translate-y-0 max-sm:rounded-md" />
        </div>
      </div>
    </section>
  );
}

const tabContent = {
  'Mobile App': {
    heading: 'Lorem ipsum dolor sit amet consectetur',
    paragraph: 'Lorem ipsum dolor sit amet consectetur. Nam praesent viverra tincidunt vel tortor nullam interdum. Sit id scelerisque nunc.',
    img: Section1Img1,
  },
  'Web App': {
    heading: 'Nam praesent viverra tincidunt vel',
    paragraph: 'Aliquam et egestas purus viverra tincidunt vel to. Phasellus venenatis sem tortor, sit amet tempor quam tincidunt eget.',
    img: Section1Img1,
  },
  'Web Design': {
    heading: 'Lorem ipsum dolor sit amet consectetur',
    paragraph: 'Integer vestibulum turpis at dignissim bibendum. Nunc hendrerit neque vel ex imperdiet aliquam. Sed ac tortor ac est tempor luctus.',
    img: Section1Img1,
  },
  'Graphic Design': {
    heading: 'Nam praesent viverra tincidunt vel',
    paragraph: 'Maecenas sagittis, urna quis elementum tristique, sem felis consequat erat, eu euismod et velit. Curabitur dignissim rutrum nisl non auctor.',
    img: Section1Img1,
  },
}

function TabBtn({ tabName, selectedTab, setSelectedTab }) {
  return (
    <button onClick={() => setSelectedTab(tabName)} className={`border border-primary rounded-full py-3.5 px-12 font-bold min-w-max ${selectedTab === tabName ? 'bg-primary text-white' : 'text-primary'}`}>
      {tabName}
    </button>
  );
}