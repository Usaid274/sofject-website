import Navbar from "@/app/components/home/navbar";
import Header from "@/app/components/home/header";
import Section1 from "@/app/components/home/section1";
import Section2 from "@/app/components/home/section2";
import Section3 from "@/app/components/home/section3";
import Section4 from "@/app/components/home/section4";
import Section5 from "@/app/components/home/section5";

export default function HomePage() {
  return (
    <>
      {/* Header */}
      <Header />

      {/* Navbar */}
      <Navbar />
      
      {/* Section 1 */}
      <Section1 />

      {/* Section 2 */}
      <Section2 />

      {/* Section 3 */}
      <Section3 />

      {/* Section 4 */}
      <Section4 />

      {/* Section 5 */}
      <Section5 />
    </>
  );
}
