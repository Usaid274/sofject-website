import Section2Img from "@/app/assets/home/section2-1.png";

export default function Section2() {
  return (
    <section className="bg-secondary text-white">
      <div className="grid grid-cols-2 max-lg:grid-cols-1 w-full" >
        <div className="py-12 max-w-screen-md justify-self-end max-lg:justify-self-start">
          <div className="border-r py-16 pr-28 pl-4 max-lg:border-none max-lg:px-6">
            <h2 className="text-4xl font-bold">
              <span className="text-primary">Our Analytics: </span>
              <span>Crafting Custom Software Solutions </span>
              <span className="text-primary text-6xl leading-3">. </span>
            </h2>
            <p className="font-medium text-sm mt-6">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,
            </p>
          </div>
        </div>

        <div className="bg-center bg-cover bg-no-repeat" style={{ backgroundImage: `linear-gradient(to right, #000000a0, #000000a0), url(${Section2Img.src})` }}>
          <ul className="grid grid-cols-2 gap-6 justify-center items-center h-full max-w-screen-md py-28 pl-28 pr-4 max-lg:px-6 max-lg:justify-items-center max-lg:mx-auto">
            <li>
              <div className="text-3xl font-bold">3.5k</div>
              <div className="text-sm font-medium mt-2">Lorem Ipsum is simply</div>
            </li>
            <li>
              <div className="text-3xl font-bold">3.5k</div>
              <div className="text-sm font-medium mt-2">Lorem Ipsum is simply</div>
            </li>
            <li>
              <div className="text-3xl font-bold">3.5k</div>
              <div className="text-sm font-medium mt-2">Lorem Ipsum is simply</div>
            </li>
            <li>
              <div className="text-3xl font-bold">3.5k</div>
              <div className="text-sm font-medium mt-2">Lorem Ipsum is simply</div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
