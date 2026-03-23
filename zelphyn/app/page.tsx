import { Hero } from "@/components/hero";
import { WhyChooseUs } from "@/components/why-choose-us";
import { HowItWorks } from "@/components/how-it-works";
import { Testimonials } from "@/components/testimonials";
import { Courses } from "@/components/courses";
import { Tutors } from "@/components/tutors";
import { Pricing } from "@/components/pricing";
import { FAQ } from "@/components/faq";
import { CTASection } from "@/components/cta-section";

export default function Home() {
  return (
    <main>
      <Hero />
      <WhyChooseUs />
      <HowItWorks />
      <Testimonials />
      <Courses />
      <Tutors />
      <Pricing />
      <FAQ />
      <CTASection />
    </main>
  );
}
