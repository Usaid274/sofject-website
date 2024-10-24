import Heading from "@/app/components/heading";
import ServicesTab from "./services-tab";

export default function Section1() {
  return (
    <section id="services" className="py-24 max-sm:py-12 scroll-mt-12">
      <Heading headingText="Here are our services. You can see what we have to offer Here are our services.">
        <span className="text-primary">What</span>
        <span> we have to </span>
        <span className="text-primary">offer</span>
      </Heading>

      <ServicesTab />
    </section>
  );
}
