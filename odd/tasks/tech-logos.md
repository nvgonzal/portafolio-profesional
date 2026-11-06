# Feature: tech-logos

## Objective
Add monochrome logos: up to 2 main-technology icons next to each project title, and the Universidad del Bío-Bío shield next to the engineering degree.

## Constraints
- Monochrome: icons inherit `currentColor` so they follow the dossier palette in light and dark mode.
- Tech icons come from `simple-icons` (CC0 paths). `java` does not exist in simple-icons 16.36.0; use `openjdk`.
- UBB shield comes from the official monochrome PNG supplied by the user, cropped to the shield (wordmark removed because it is illegible at icon size; the institution name is already printed next to it), background made transparent. Rendered via CSS mask so it takes `currentColor`.
- Icons are decorative (`aria-hidden`); text stays the source of meaning.

## Tasks
- [x] T1 Prepare UBB shield asset at `public/logos/ubb-escudo.png` (inline; verified visually).
- [x] T2 Tech icons on project titles (max 2 per project) + UBB shield on education entry (delegated writer: 4+ files).

Icon mapping: api-notificador-nest → nestjs, typescript; atlas-mundial-web → laravel, vuedotjs; both academic Java projects → openjdk.

## Acceptance criteria
- Each project title shows its icons (≤2) in text color.
- Education entry shows the UBB shield in text color.
- `tsc --noEmit`, lint and `next build` pass.

## Progress
- T1 done, not committed.
- T2 done, not committed (route: delegated writer). `simple-icons` pinned at 16.36.0; `TechIconId` union + `icons?` tuple (max 2) on `Project`; `logo?` on `Education`; `src/components/TechIcon.tsx` maps ids to simple-icons paths; UBB shield rendered as CSS mask span (mask URL set inline from `logo`, sizing in `.entry__logo`); styles `.project__icons`, `.tech-icon`, `.entry__logo` in `src/app/globals.css`.
- T2 checks: `npx tsc --noEmit` exit 0; `npm run lint` exit 0; `npm run build` succeeded (all 7 routes prerendered static). Visual check in browser not performed.
