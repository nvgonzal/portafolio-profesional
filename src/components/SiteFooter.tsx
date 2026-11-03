import { profile } from "@/content/portfolio";

export function SiteFooter() {
  return (
    <footer className="colophon">
      <span>{profile.fullName}</span>
      <span>{profile.location}</span>
    </footer>
  );
}
