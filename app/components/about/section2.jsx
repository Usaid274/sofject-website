import Heading from "@/app/components/heading";
import Image from "next/image";
import Section2Img1 from "@/app/assets/about/section2-1.png";
import Section2Img2 from "@/app/assets/about/section2-2.png";
import Section2Img3 from "@/app/assets/about/section2-3.png";
import Section2Img4 from "@/app/assets/about/section2-4.png";
import Section2Img5 from "@/app/assets/about/section2-5.png";
import Section2Img6 from "@/app/assets/about/section2-6.png";

export default function Section2() {
  return (
    <section className="py-24 px-4">
      <Heading headingText="We didn’t get here on our own! We had a great help from the following">
        <span className="text-primary">Our</span>
        <span> Team</span>
      </Heading>

      <div className="mt-12 grid grid-cols-3 gap-6 place-items-center justify-center max-w-screen-lg w-full mx-auto max-sm:gap-2">
        {teamMembers.map((member, i) => (
          <figure key={i} className="w-full h-full aspect-square relative group rounded-xl overflow-hidden">
            <Image width="560" height="560" className="w-full h-full object-cover" alt={`Photo of ${member.name}`} src={member.img.src} />
            <figcaption className="absolute inset-0 bg-primary p-4 text-white flex flex-col justify-center items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <p className="font-serif text-4xl">{member.name}</p>
              <p className="max-sm:text-sm font-medium">{member.position}</p>
              <p className="text-sm max-sm:text-xs">
                {member.description}
              </p>
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
