import Image from "next/image";
import Heading from "@/app/components/heading";
import Section2Img1 from "@/app/assets/about/section2-1.webp";
import Section2Img2 from "@/app/assets/about/section2-2.webp";
import Section2Img3 from "@/app/assets/about/section2-3.webp";
import Section2Img4 from "@/app/assets/about/section2-4.webp";
import Section2Img5 from "@/app/assets/about/section2-5.webp";
import Section2Img6 from "@/app/assets/about/section2-6.webp";

export default function Section2() {
  return (
    <section className="py-24 max-sm:py-12">
      <Heading headingText="We didn’t get here on our own! We had a great help from the following">
        <span className="text-primary">Our</span>
        <span> Team</span>
      </Heading>

      <div className="mt-12 px-4 grid grid-cols-3 gap-6 place-items-center justify-center max-w-screen-lg w-full mx-auto max-sm:gap-2 max-md:grid-cols-2 max-[420px]:grid-cols-1">
        {teamMembers.map((member, i) => (
          <figure key={i} className="w-full h-full aspect-square relative group rounded-xl overflow-hidden">
            <Image width="560" height="560" className="w-full h-full object-cover" alt={`Photo of ${member.name}`} src={member.img.src} />

            <figcaption className="absolute inset-0 bg-primary p-4 text-white flex flex-col justify-center items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 min-[420px]:max-sm:gap-1">
              <p className="font-serif text-4xl md:max-lg:text-2xl max-sm:text-lg">{member.name}</p>
              <p className="md:max-lg:text-sm font-medium max-sm:text-xs">{member.position}</p>
              <p className="text-sm md:max-lg:text-xs max-sm:text-xs">{member.description}</p>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

const teamMembers = [
  {
    name: 'Jane Doe',
    position: 'UI/UX designer',
    description: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying',
    img: Section2Img1,
  },
  {
    name: 'Jane Doe',
    position: 'UI/UX designer',
    description: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying',
    img: Section2Img2,
  },
  {
    name: 'Jane Doe',
    position: 'UI/UX designer',
    description: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying',
    img: Section2Img3,
  },
  {
    name: 'Jane Doe',
    position: 'UI/UX designer',
    description: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying',
    img: Section2Img4,
  },
  {
    name: 'Jane Doe',
    position: 'UI/UX designer',
    description: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying',
    img: Section2Img5,
  },
  {
    name: 'Jane Doe',
    position: 'UI/UX designer',
    description: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying',
    img: Section2Img6,
  },
]
