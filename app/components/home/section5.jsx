import Image from "next/image";
import Section5Img1 from "@/app/assets/home/section5-1.webp";
import Section5Img2 from "@/app/assets/home/section5-2.webp";
import Section5Img3 from "@/app/assets/home/section5-3.webp";
import Section5Img4 from "@/app/assets/home/section5-4.webp";

export default function Section5() {
  return (
    <section id="contact" className="py-24 max-sm:py-12 max-w-screen-2xl mx-auto grid grid-cols-[1fr_1.6fr] gap-12 max-md:grid-cols-1 w-full scroll-mt-12">
      <div className="pl-4 max-md:px-4">
        <h2 className="text-4xl font-bold max-sm:text-2xl max-sm:max-w-full">
          Lorem ipsum dolor sit amet consectetur
        </h2>

        <div className="grid grid-cols-2 gap-2 justify-stretch mt-6 w-full min-h-80">
          <div className="flex flex-col gap-2 w-full h-full">
            <div className="h-60 flex-1 basis-4/5 rounded-2xl overflow-hidden">
              <Image width="550" height="840" className="h-full w-full object-center object-cover scale-125 hover:scale-100 transition-transform duration-500" src={Section5Img1} alt="People working in office" />
            </div>
            <div className="h-16 basis-1/5 rounded-2xl overflow-hidden">
              <Image width="550" height="210" className="h-full w-full object-center object-cover scale-125 hover:scale-100 transition-transform duration-500" src={Section5Img2} alt="A man working on his laptop" />
            </div>
          </div>
          <div className="flex flex-col gap-2 w-full h-full">
            <div className="h-16 basis-1/5 rounded-2xl overflow-hidden">
              <Image width="550" height="210" className="h-full w-full object-center object-cover scale-125 hover:scale-100 transition-transform duration-500" src={Section5Img3} alt="A computer screen" />
            </div>
            <div className="h-60 flex-1 basis-4/5 rounded-2xl overflow-hidden">
              <Image width="550" height="840" className="h-full w-full object-center object-cover scale-125 hover:scale-100 transition-transform duration-500" src={Section5Img4} alt="A computer screen" />
            </div>
          </div>
        </div>

        <p className="mt-8 text-sm">
          Lorem ipsum dolor sit amet consectetur. Nam praesent viverra tincidunt vel tortor nullam interdum. Sit id scelerisque nunc integer enim arcu aliquam dictum.
        </p>
      </div>

      <div className="pr-4 flex">
        <div className="bg-secondary text-white p-16 rounded-r-[3rem] w-full max-sm:p-8">
          <h3 className="text-5xl font-bold max-sm:text-2xl">
            Contact us
          </h3>
          <form>
            <div className="flex flex-col gap-4 mt-8 *:border-b *:bg-transparent *:p-4 *:w-full focus-visible:*:outline-none focus-visible:*:border-primary">
              <input type="text" placeholder="Full name" />
              <input type="text" placeholder="Phone number" />
              <input type="email" placeholder="Email" />
              <input type="text" placeholder="Message" />
            </div>
            <button className="bg-primary rounded-full text-sm font-semibold py-3 px-6 mt-12 block max-md:ml-auto">
              Contact us
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
