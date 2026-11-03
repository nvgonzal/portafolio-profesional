import { caseStudies } from "@/content/portfolio";
import { CaseRecord } from "./CaseRecord";
import { Section } from "./Section";

const MAIN_CASES = 3;

export function CaseStudies() {
  return (
    <Section
      id="casos"
      order={5}
      title="Casos de trabajo"
      lead="Trabajo real, descrito en términos generales."
    >
      {caseStudies.map((study, index) => (
        <CaseRecord
          key={study.slug}
          study={study}
          index={index}
          compact={index >= MAIN_CASES}
        />
      ))}
    </Section>
  );
}
