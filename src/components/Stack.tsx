import { stackGroups } from "@/content/portfolio";
import { Section } from "./Section";

export function Stack() {
  return (
    <Section id="stack" order={7} title="Stack">
      <dl className="fields fields--wide">
        {stackGroups.map((group) => (
          <div key={group.category} className="fields__row">
            <dt>{group.category}</dt>
            <dd className="mono-values">{group.items.join(" · ")}</dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
