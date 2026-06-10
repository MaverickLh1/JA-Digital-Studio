import type { Metadata } from "next";
import { contact } from "@/lib/data";

export const metadata: Metadata = {
  title: "Aviso legal — JA Digital Studio",
  description:
    "Información legal y datos identificativos del titular de jadigitalstudio.com conforme a la LSSI-CE.",
  alternates: { canonical: "/aviso-legal" },
};

export default function AvisoLegal() {
  return (
    <>
      <h1>Aviso legal</h1>
      <p className="!text-crema/50 !text-sm">Última actualización: junio de 2026</p>

      <h2>1. Datos identificativos</h2>
      <p>
        En cumplimiento del artículo 10 de la Ley 34/2002, de 11 de julio, de
        Servicios de la Sociedad de la Información y de Comercio Electrónico
        (LSSI-CE), se informa de los datos del titular de este sitio web:
      </p>
      <ul>
        <li><strong>Titular:</strong> José Antonio González Moreno</li>
        <li><strong>NIF:</strong> 07051505G</li>
        <li><strong>Domicilio:</strong> La Haba (Badajoz), España</li>
        <li><strong>Correo electrónico:</strong> <a href={`mailto:${contact.email}`}>{contact.email}</a></li>
        <li><strong>Actividad:</strong> servicios digitales freelance (diseño web, e-commerce, imágenes e inteligencia artificial aplicada)</li>
        <li><strong>Sitio web:</strong> jadigitalstudio.com</li>
      </ul>

      <h2>2. Objeto</h2>
      <p>
        Este sitio web tiene como finalidad dar a conocer y ofrecer los
        servicios profesionales del titular. El acceso y uso del sitio atribuye
        la condición de usuario e implica la aceptación de las condiciones
        recogidas en este aviso legal.
      </p>

      <h2>3. Condiciones de uso</h2>
      <p>
        El usuario se compromete a hacer un uso adecuado de los contenidos y
        servicios del sitio y a no emplearlos para incurrir en actividades
        ilícitas o contrarias a la buena fe y al ordenamiento jurídico, ni para
        provocar daños en los sistemas físicos y lógicos del titular o de
        terceros.
      </p>

      <h2>4. Propiedad intelectual e industrial</h2>
      <p>
        Todos los contenidos del sitio (textos, imágenes, diseño gráfico,
        logotipos, código fuente y demás elementos) son propiedad del titular o
        de terceros que han autorizado su uso, y están protegidos por la
        normativa de propiedad intelectual e industrial. Queda prohibida su
        reproducción, distribución o comunicación pública total o parcial sin
        autorización expresa.
      </p>

      <h2>5. Exclusión de responsabilidad</h2>
      <p>
        El titular no se hace responsable de los daños y perjuicios que pudieran
        derivarse de interferencias, interrupciones, virus informáticos, averías
        telefónicas o desconexiones en el funcionamiento operativo del sistema
        ajenas a su voluntad. Asimismo, no garantiza la ausencia total de errores
        en los contenidos, aunque trabaja para mantenerlos actualizados.
      </p>

      <h2>6. Enlaces a terceros</h2>
      <p>
        Este sitio puede contener enlaces a páginas de terceros (por ejemplo,
        plataformas de contratación freelance). El titular no asume ninguna
        responsabilidad sobre el contenido o las políticas de dichos sitios
        externos.
      </p>

      <h2>7. Legislación aplicable y jurisdicción</h2>
      <p>
        El presente aviso legal se rige por la legislación española. Para la
        resolución de cualquier controversia, las partes se someten a los
        juzgados y tribunales que correspondan conforme a derecho.
      </p>
    </>
  );
}
