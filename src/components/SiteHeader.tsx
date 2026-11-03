import type { CSSProperties } from "react";
import { navigation, profile } from "@/content/portfolio";

export function SiteHeader() {
  return (
    <header className="masthead reveal" style={{ "--i": 0 } as CSSProperties}>
      <a className="masthead__name" href="#inicio">
        {profile.displayName}
      </a>
      <nav aria-label="Secciones">
        <ul className="masthead__nav">
          {navigation.map((item) => (
            <li key={item.href}>
              <a href={item.href}>{item.label}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
