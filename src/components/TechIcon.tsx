import {
  siLaravel,
  siNestjs,
  siOpenjdk,
  siTypescript,
  siVuedotjs,
  type SimpleIcon,
} from "simple-icons";
import type { TechIconId } from "@/content/portfolio";

const iconsById: Record<TechIconId, SimpleIcon> = {
  nestjs: siNestjs,
  typescript: siTypescript,
  laravel: siLaravel,
  vuedotjs: siVuedotjs,
  openjdk: siOpenjdk,
};

/** Decorative monochrome brand mark that inherits the current text color. */
export function TechIcon({ id }: { id: TechIconId }) {
  return (
    <svg
      className="tech-icon"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
    >
      <path d={iconsById[id].path} />
    </svg>
  );
}
