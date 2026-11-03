import { CaseStudies } from "@/components/CaseStudies";
import { Contact } from "@/components/Contact";
import { ExperienceEducation } from "@/components/ExperienceEducation";
import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { Stack } from "@/components/Stack";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main id="contenido">
        <Hero />
        <CaseStudies />
        <Projects />
        <Stack />
        <ExperienceEducation />
        <Contact />
      </main>
      <SiteFooter />
    </>
  );
}
