import type { Metadata } from "next";
import Link from "next/link";
import { Stamp } from "@/components/Stamp";

export const metadata: Metadata = {
  title: "Página no encontrada",
};

export default function NotFound() {
  return (
    <main id="contenido" className="missing">
      <Stamp>Error 404</Stamp>
      <h1 className="missing__title">Esta página no existe</h1>
      <p>La dirección puede estar mal escrita o el contenido ya no está aquí.</p>
      <Link className="button button--primary" href="/">
        Volver al inicio
      </Link>
    </main>
  );
}
