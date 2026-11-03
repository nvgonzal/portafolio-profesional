import type { CSSProperties } from "react";
import { profile } from "@/content/portfolio";
import { Stamp } from "./Stamp";

export function Hero() {
  return (
    <section id="inicio" className="hero" aria-labelledby="hero-titulo">
      <h1 id="hero-titulo" className="hero__title">
        <span
          className="hero__name reveal"
          style={{ "--i": 1 } as CSSProperties}
        >
          {profile.displayName}
        </span>
        <span
          className="hero__role reveal"
          style={{ "--i": 2 } as CSSProperties}
        >
          {profile.role}
        </span>
      </h1>

      <div className="hero__body reveal" style={{ "--i": 3 } as CSSProperties}>
        <p className="hero__summary">{profile.summary}</p>
        <ul className="hero__links">
          <li>
            <a className="button button--primary" href="#contacto">
              Contacto
            </a>
          </li>
          <li>
            <a className="button" href={profile.linkedin.href}>
              LinkedIn
            </a>
          </li>
          <li>
            <a className="button" href={profile.github.href}>
              GitHub
            </a>
          </li>
        </ul>
      </div>

      <aside
        className="hero__facts reveal"
        aria-label="Datos generales"
        style={{ "--i": 4 } as CSSProperties}
      >
        <Stamp>{profile.yearsOfExperience} años de experiencia</Stamp>
        <dl className="fields">
          <div className="fields__row">
            <dt>Stack principal</dt>
            <dd>{profile.mainStack}</dd>
          </div>
          <div className="fields__row">
            <dt>Ubicación</dt>
            <dd>{profile.location}</dd>
          </div>
        </dl>
      </aside>
    </section>
  );
}
