import Heading from "@/app/components/heading";

export default function Section1() {
  return (
    <section className="py-24 max-sm:py-12">
      <Heading headingText="Lorem ipsum dolor sit amet consectetur. Nam praesent tincidunt vel tortor nullam interdum.">
        <span className="text-primary">Hire</span>
        <span> Us</span>
      </Heading>

      <div className="px-4">
        <div className="mt-12 border border-secondary rounded-lg max-w-screen-lg w-full py-16 px-32 mx-auto max-sm:p-8">
          <h4 className="text-3xl font-semibold max-sm:text-2xl">
            Let’s discuss your project
          </h4>

          <form>
            <div className="flex flex-col gap-12 mt-8 *:border-secondary *:bg-transparent *:w-full focus-visible:*:outline-none focus-visible:*:border-primary *:max-sm:text-sm max-sm:gap-8">
              <input type="text" className="border-b py-2" placeholder="Full name *" />
              <input type="text" className="border-b py-2" placeholder="Phone number *" />
              <input type="email" className="border-b py-2" placeholder="Email *" />
              <textarea rows={4} className="rounded-md border p-2" placeholder="Project scope *" />
            </div>
            <button className="bg-primary text-white rounded-full text-sm font-semibold py-3 px-6 mt-12 block max-md:ml-auto">
              Contact us
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
