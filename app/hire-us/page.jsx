import Header from "@/app/components/header";
import Section1 from "@/app/components/hire-us/section1";

export default function ServicesPage() {
  return (
    <>
      {/* Header */}
      <Header name="Hire us" link="/hire-us" headingText="Wanna contact us?" />
      
      {/* Section 1 */}
      <Section1 />
    </>
  );
}
