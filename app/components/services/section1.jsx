'use client';

import { useState } from "react";
import Image from "next/image";
import Heading from "@/app/components/heading";
import Section1Img1 from "@/app/assets/services/section1-1.webp"
import Section1Img2 from "@/app/assets/home/section3-1.webp"
import Section1Img3 from "@/app/assets/home/section3-2.webp"
import AwardIcon from "@/app/assets/services/award-icon.svg"

export default function Section1() {
  const [selectedTab, setSelectedTab] = useState('Mobile App');

  return (
    <section className="py-24 max-sm:py-12">
      <Heading headingText="Lorem ipsum dolor sit amet consectetur. Nam praesent viverra vel tortor nullam interdum.">
        <span className="text-primary">Our</span>
        <span> Services</span>
      </Heading>

      <div className="px-4 mt-12 max-w-screen-2xl mx-auto w-full">
        <div className="overflow-x-auto w-full">
          <div className="flex gap-4 [justify-content:safe_center] items-center w-full">
            <TabBtn selectedTab={selectedTab} setSelectedTab={setSelectedTab} tabName="Mobile App" />
            <TabBtn selectedTab={selectedTab} setSelectedTab={setSelectedTab} tabName="Web App" />
            <TabBtn selectedTab={selectedTab} setSelectedTab={setSelectedTab} tabName="Web Design" />
            <TabBtn selectedTab={selectedTab} setSelectedTab={setSelectedTab} tabName="Graphic Design" />
          </div>
        </div>
      </div>

      <div className="mx-auto px-4 mt-14 grid max-w-screen-2xl grid-flow-col grid-cols-3 justify-items-center w-full overflow-hidden max-lg:gap-x-0 max-xl:gap-x-16 gap-x-32 gap-y-8 max-lg:grid-cols-2 max-lg:grid-flow-row">
        <div className="row-span-2 max-lg:row-span-1 flex items-center justify-self-end max-lg:justify-self-start">
          <Image width="600" height="1000" src={Section1Img1.src} className="w-full h-full mx-auto max-lg:w-9/12 rounded-3xl max-sm:rounded-md object-cover" alt="" />
        </div>

        <div>
          <h4 className="font-semibold">{selectedTab}</h4>
          <h5 className="text-primary font-semibold text-3xl max-sm:text-2xl mt-6 max-sm:mt-4">{tabContent[selectedTab].heading}</h5>
          <p className="mt-4 font-medium max-sm:text-xs max-md:text-sm italic max-md:mt-2">{tabContent[selectedTab].paragraph}</p>
        </div>

        <div className="border-t pt-8">
          <ul className="flex flex-col gap-4">
            <li className="grid grid-cols-[24px_1fr] gap-4 max-sm:gap-2 items-center">
              <Image width="24" height="24" src={AwardIcon.src} className="size-6 max-sm:size-5" />
              <h6 className="font-semibold max-sm:text-sm">No compromise on quality</h6>
              <p className="text-sm max-sm:text-xs col-start-2">
                Lorem ipsum dolor sit amet consectetur. Nam praesent viverra tincidunt vel tortor nullam interdum. Sit id scelerisque nunc.
              </p>
            </li>
            <li className="grid grid-cols-[24px_1fr] gap-4 max-sm:gap-2 items-center">
              <Image width="24" height="24" src={AwardIcon.src} className="size-6 max-sm:size-5" />
              <h6 className="font-semibold max-sm:text-sm">No compromise on quality</h6>
              <p className="text-sm max-sm:text-xs col-start-2">
                Lorem ipsum dolor sit amet consectetur. Nam praesent viverra tincidunt vel tortor nullam interdum. Sit id scelerisque nunc.
              </p>
            </li>
          </ul>
        </div>

        <div className="row-span-2 max-lg:row-span-1 min-h-[480px] max-sm:min-h-80 w-full relative max-lg:border-t max-lg:pt-8">
          <Image width="512" height="900" src={Section1Img3.src} className="absolute top-1/2 h-4/5 w-auto aspect-[9/16] -translate-x-1/2 -translate-y-1/2 scale-75 rounded-2xl object-cover shadow-md left-3/4 max-lg:top-8 max-lg:translate-y-0 max-sm:rounded-md" />
          <Image width="512" height="900" src={Section1Img2.src} className="absolute top-1/2 h-4/5 w-auto aspect-[9/16] -translate-y-1/2 rounded-2xl object-cover shadow-md left-1/2 -translate-x-1/2 max-lg:top-8 max-lg:translate-y-0 max-sm:rounded-md" />
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
    <button onClick={() => setSelectedTab(tabName)} className={`border border-primary rounded-full py-3.5 px-12 max-sm:py-3 max-sm:px-8 max-sm:text-sm font-bold min-w-max ${selectedTab === tabName ? 'bg-primary text-white' : 'text-primary'}`}>
      {tabName}
    </button>
  );
}
