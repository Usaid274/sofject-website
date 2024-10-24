import Image from "next/image";
import TestimonialCarousel from "./testimonial-carousel";
import TestimonialIcon from "@/app/assets/home/testimonial-icon.svg";
import Section4Img from "@/app/assets/home/section4-1.webp";

export default function Section4() {
  return (
    <section id="testimonials" className="py-12 scroll-mt-12">
      <h2 className="uppercase max-w-5xl mx-auto p-4 rounded-md bg-primary text-white text-5xl max-md:text-3xl max-sm:text-2xl max-sm:p-2 font-semibold flex items-center justify-center">
        <span>Testim</span>
        <span className="sr-only">o</span>
        <Image width="40" height="40" className="size-10 inline-block max-md:size-8 max-sm:size-6" src={TestimonialIcon.src} aria-hidden alt="Heart icon" />
        <span>nials</span>
      </h2>

      <div className="mt-8">
        <TestimonialCarousel slides={testimonials} options={{ loop: true }} />
      </div>
    </section>
  );
}

const testimonials = [
  {
    name: 'Trevor Mitchell',
    img: Section4Img,
    rating: 3,
    paragraph: 'Lorem ipsum dolor sit amet consectetur. Nam praesent viverra tincidunt vel tortor nullam interdum. Sit id scelerisque nunc integer enim arcu aliquam dictum. In diam nisl sed congue'
  },
  {
    name: 'Trevor Mitchell',
    img: Section4Img,
    rating: 4,
    paragraph: 'Lorem ipsum dolor sit amet consectetur. Nam praesent viverra tincidunt vel tortor nullam interdum. Sit id scelerisque nunc integer enim arcu aliquam dictum. In diam nisl sed congue'
  },
  {
    name: 'Trevor Mitchell',
    img: Section4Img,
    rating: 1,
    paragraph: 'Lorem ipsum dolor sit amet consectetur. Nam praesent viverra tincidunt vel tortor nullam interdum. Sit id scelerisque nunc integer enim arcu aliquam dictum. In diam nisl sed congue'
  },
  {
    name: 'Trevor Mitchell',
    img: Section4Img,
    rating: 1,
    paragraph: 'Lorem ipsum dolor sit amet consectetur. Nam praesent viverra tincidunt vel tortor nullam interdum. Sit id scelerisque nunc integer enim arcu aliquam dictum. In diam nisl sed congue'
  },
  {
    name: 'Trevor Mitchell',
    img: Section4Img,
    rating: 1,
    paragraph: 'Lorem ipsum dolor sit amet consectetur. Nam praesent viverra tincidunt vel tortor nullam interdum. Sit id scelerisque nunc integer enim arcu aliquam dictum. In diam nisl sed congue'
  },
]
