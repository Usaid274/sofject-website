import Heading from "@/app/components/heading";
import ProjectsCarousel from "./projects-carousel";

export default function Section3() {
  return (
    <section id="projects" className="py-24 max-sm:py-12 scroll-mt-12">
      <Heading headingText="Check out the jobs we’ve successfully completed below">
        <span className="text-primary">What</span>
        <span> have we </span>
        <span className="text-primary">designed?</span>
      </Heading>

      <div className="grid grid-cols-[minmax(auto,24rem)_1fr] w-full px-4 gap-4 mt-16 max-w-screen-2xl mx-auto">
        <ProjectsCarousel />
      </div>
    </section>
  );
}
