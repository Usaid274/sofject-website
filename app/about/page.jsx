import Header from "@/app/components/header";
import Section1 from "@/app/components/about/section1";
import Section2 from "@/app/components/about/section2";

export default function AboutPage() {
  return (
    <>
      {/* Header */}
      <Header name="About" link="/about" headingText="Who we are" />

      {/* Section 1 */}
      <Section1 />

      {/* Section 2 */}
      <Section2 />
    </>
  )
}
