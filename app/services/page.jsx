import Header from "@/app/components/header";
import Section1 from "@/app/components/services/section1";
import Section2 from "@/app/components/services/section2";

export default function ServicesPage() {
  return (
    <>
      {/* Header */}
      <Header name="Services" link="/services" headingText="What we do" />

      {/* Section 1 */}
      <Section1 />

      {/* Section 2 */}
      <Section2 />
    </>
  );
}
