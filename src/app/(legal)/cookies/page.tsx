import type { Metadata } from "next";
import { contact } from "@/lib/data";

export const metadata: Metadata = {
  title: "Política de cookies — Josea González",
  description:
    "Información sobre el uso de cookies en joseagonzalez.com.",
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
        Este sitio web <strong>no utiliza cookies de publicidad ni de
        seguimiento</strong>, ni elabora perfiles individuales de los usuarios.
        Para conocer de forma agregada y anónima cuánta gente visita la web
        (páginas vistas, país aproximado y tipo de dispositivo) se emplea{" "}
        <strong>Vercel Web Analytics</strong>, una herramienta de medición que{" "}
        <strong>no utiliza cookies</strong> ni identifica a los visitantes, por lo
        que está exenta del deber de consentimiento. Tienes el detalle en la{" "}
        <a href="/privacidad">Política de privacidad</a>.
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
