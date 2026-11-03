import type { CaseStudy } from "@/content/portfolio";
import { Stamp } from "./Stamp";

type CaseRecordProps = {
  study: CaseStudy;
  index: number;
  compact?: boolean;
};

export function CaseRecord({ study, index, compact = false }: CaseRecordProps) {
  const reference = `REG-${String(index + 1).padStart(2, "0")}`;

  return (
    <article className={compact ? "record record--compact" : "record"}>
      <header className="record__head">
        <Stamp>{reference}</Stamp>
        <h3 className="record__title">{study.title}</h3>
      </header>
      <dl className="fields">
        <div className="fields__row">
          <dt>Contexto</dt>
          <dd>{study.context}</dd>
        </div>
        <div className="fields__row">
          <dt>Mi aporte</dt>
          <dd>
            <ul className="plain-list">
              {study.contribution.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </dd>
        </div>
        <div className="fields__row">
          <dt>Tecnologías</dt>
          <dd className="mono-values">{study.technologies.join(" · ")}</dd>
        </div>
        {study.outcome ? (
          <div className="fields__row">
            <dt>Resultado</dt>
            <dd>{study.outcome}</dd>
          </div>
        ) : null}
      </dl>
    </article>
  );
}
