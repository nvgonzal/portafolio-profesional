import type { CSSProperties, ReactNode } from "react";

type SectionProps = {
  id: string;
  title: string;
  lead?: string;
  order: number;
  children: ReactNode;
};

export function Section({ id, title, lead, order, children }: SectionProps) {
  const headingId = `${id}-titulo`;

  return (
    <section
      id={id}
      className="section reveal"
      aria-labelledby={headingId}
      style={{ "--i": order } as CSSProperties}
    >
      <header className="section__head">
        <h2 id={headingId} className="section__title">
          {title}
        </h2>
        {lead ? <p className="section__lead">{lead}</p> : null}
      </header>
      <div className="section__body">{children}</div>
    </section>
  );
}
