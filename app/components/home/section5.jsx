import Image from "next/image";
import Section5Img1 from "@/app/assets/home/section5-1.png";
import Section5Img2 from "@/app/assets/home/section5-2.png";
import Section5Img3 from "@/app/assets/home/section5-3.png";
import Section5Img4 from "@/app/assets/home/section5-4.png";

export default function Section5() {
  return (
    <section id="contact" className="py-24 max-w-screen-2xl mx-auto grid grid-cols-[1fr_1.6fr] gap-12 max-md:grid-cols-1 w-full">
      <div className="pl-4 max-md:px-4">
        <h2 className="text-4xl font-bold max-w-96 max-sm:text-2xl max-sm:max-w-full">
          Lorem ipsum dolor sit amet consectetur
        </h2>

        <div className="grid grid-cols-2 gap-2 justify-stretch mt-6 w-full min-h-80">
          <div className="flex flex-col gap-2 w-full h-full">
            <div className="h-60 flex-1 basis-4/5">
              <Image width="170" height="250" className="rounded-2xl h-full w-full object-cover" src={Section5Img1} />
            </div>
            <div className="h-16 basis-1/5">
              <Image width="170" height="60" className="rounded-2xl h-full w-full object-cover" src={Section5Img2} />
            </div>
          </div>
          <div className="flex flex-col gap-2 w-full h-full">
            <div className="h-16 basis-1/5">
              <Image width="170" height="60" className="rounded-2xl h-full w-full object-cover" src={Section5Img3} />
            </div>
            <div className="h-60 flex-1 basis-4/5">
              <Image width="170" height="250" className="rounded-2xl h-full w-full object-cover" src={Section5Img4} />
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
            <div className="flex flex-col gap-4 mt-8">
              <input type="text" className="border-b bg-transparent p-4 w-full focus-visible:outline-none focus-visible:border-primary" placeholder="First name" />
              <input type="text" className="border-b bg-transparent p-4 w-full focus-visible:outline-none focus-visible:border-primary" placeholder="Phone number" />
              <input type="text" className="border-b bg-transparent p-4 w-full focus-visible:outline-none focus-visible:border-primary" placeholder="Email" />
              <input type="text" className="border-b bg-transparent p-4 w-full focus-visible:outline-none focus-visible:border-primary" placeholder="Message" />
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