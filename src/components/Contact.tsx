import { cvUrl, profile } from "@/content/portfolio";
import { Section } from "./Section";

export function Contact() {
  return (
    <Section id="contacto" order={9} title="Contacto">
      <dl className="fields fields--wide">
        <div className="fields__row">
          <dt>Correo</dt>
          <dd>
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
          </dd>
        </div>
        <div className="fields__row">
          <dt>LinkedIn</dt>
          <dd>
            <a href={profile.linkedin.href}>{profile.linkedin.label}</a>
          </dd>
        </div>
        <div className="fields__row">
          <dt>GitHub</dt>
          <dd>
            <a href={profile.github.href}>{profile.github.label}</a>
          </dd>
        </div>
      </dl>
      {cvUrl ? (
        <p className="contact__cv">
          <a className="button button--primary" href={cvUrl}>
            Descargar CV
          </a>
        </p>
      ) : null}
    </Section>
  );
}
