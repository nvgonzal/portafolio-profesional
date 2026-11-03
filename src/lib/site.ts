import { profile } from "@/content/portfolio";

const productionHost = process.env.VERCEL_PROJECT_PRODUCTION_URL;

export const siteUrl = productionHost
  ? `https://${productionHost}`
  : "http://localhost:3000";

export const siteTitle = `${profile.displayName} · ${profile.role}`;

export const siteDescription =
  "Desarrollador Fullstack con 6 años de experiencia en backend, frontend, integración de APIs y sistemas CRM/ERP.";
