import Heading from "@/app/components/heading";

export default function Section1() {
  return (
    <section className="py-24 px-4">
      <Heading headingText="Lorem ipsum dolor sit amet consectetur. Nam praesent tincidunt vel tortor nullam interdum.">
        <span className="text-primary">Hire</span>
        <span> Us</span>
      </Heading>

      <div className="mt-12 border border-secondary rounded-lg max-w-screen-lg w-full py-16 px-32 mx-auto max-sm:p-8">
        <h4 className="text-3xl font-semibold max-sm:text-2xl">
          Let’s discuss your project
        </h4>

        <form>
          <div className="flex flex-col gap-12 mt-8">
            <input type="text" className="border-secondary border-b bg-transparent py-2 w-full focus-visible:outline-none focus-visible:border-primary max-sm:text-sm" placeholder="Full name *" />
            <input type="text" className="border-secondary border-b bg-transparent py-2 w-full focus-visible:outline-none focus-visible:border-primary max-sm:text-sm" placeholder="Phone number *" />
            <input type="text" className="border-secondary border-b bg-transparent py-2 w-full focus-visible:outline-none focus-visible:border-primary max-sm:text-sm" placeholder="Email *" />
            <textarea rows={4} className="border-secondary rounded-md border bg-transparent p-2 max-sm:text-sm w-full focus-visible:outline-none focus-visible:border-primary" placeholder="Project scope *" />
          </div>
          <button className="bg-primary text-white rounded-full text-sm font-semibold py-3 px-6 mt-12 block max-md:ml-auto">
            Contact us
          </button>
        </form>
      </div>
    </section>
  );
}
