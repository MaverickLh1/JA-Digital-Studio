import type { Metadata } from "next";
import { contact } from "@/lib/data";

export const metadata: Metadata = {
  title: "Política de cookies — JA Digital Studio",
  description:
    "Información sobre el uso de cookies en jadigitalstudio.com.",
  alternates: { canonical: "/cookies" },
};

export default function Cookies() {
  return (
    <>
      <h1>Política de cookies</h1>
      <p className="!text-crema/50 !text-sm">Última actualización: junio de 2026</p>

      <h2>1. ¿Qué son las cookies?</h2>
      <p>
        Las cookies son pequeños archivos que un sitio web guarda en tu
        dispositivo al visitarlo. Sirven, entre otras cosas, para recordar
        información sobre tu navegación.
      </p>

      <h2>2. Cookies que utiliza este sitio</h2>
      <p>
        Este sitio web <strong>no utiliza cookies de análisis, publicidad ni
        seguimiento</strong>. Tampoco elabora perfiles de los usuarios ni comparte
        datos de navegación con terceros con fines comerciales.
      </p>
      <p>
        Únicamente podrían emplearse cookies <strong>técnicas estrictamente
        necesarias</strong> para el correcto funcionamiento de la página, que
        están exentas del deber de consentimiento según la normativa vigente
        (artículo 22.2 de la LSSI-CE).
      </p>

      <h2>3. Gestión de cookies</h2>
      <p>
        Puedes configurar tu navegador para bloquear o eliminar las cookies en
        cualquier momento. Consulta la ayuda de tu navegador (Chrome, Firefox,
        Safari, Edge…) para saber cómo hacerlo.
      </p>

      <h2>4. Cambios en esta política</h2>
      <p>
        Si en el futuro se incorporan herramientas que utilicen cookies (por
        ejemplo, analítica web), esta política se actualizará y, cuando sea
        necesario, se solicitará tu consentimiento previo. Para cualquier duda
        puedes escribir a{" "}
        <a href={`mailto:${contact.email}`}>{contact.email}</a>.
      </p>
    </>
  );
}
