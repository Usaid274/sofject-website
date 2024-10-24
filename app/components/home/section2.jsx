import NumberCounter from "@/app/components/home/number-counter";

export default function Section2() {
  return (
    <section className="bg-secondary text-white">
      <div className="grid grid-cols-2 max-lg:grid-cols-1 w-full" >
        <div className="py-12 max-w-screen-md justify-self-end max-lg:justify-self-start">
          <div className="border-r py-16 pr-28 pl-4 max-lg:border-none max-lg:p-6">
            <h2 className="text-4xl font-bold max-sm:text-3xl">
              <span className="text-primary">Our Analytics: </span>
              <span>Crafting Custom Software Solutions</span>
              <span className="text-primary text-6xl leading-3 max-sm:text-5xl max-sm:leading-3 ml-1">.</span>
            </h2>
            <p className="font-medium text-sm mt-6">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,
            </p>
          </div>
        </div>

      <NumberCounter />
      </div>
    </section>
  );
}
