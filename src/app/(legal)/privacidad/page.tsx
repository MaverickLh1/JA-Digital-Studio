import type { Metadata } from "next";
import { contact } from "@/lib/data";

export const metadata: Metadata = {
  title: "Política de privacidad — Josea González",
  description:
    "Cómo se tratan tus datos personales en joseagonzalez.com conforme al RGPD y la LOPDGDD.",
  alternates: { canonical: "/privacidad" },
};

export default function Privacidad() {
  return (
    <>
      <h1>Política de privacidad</h1>
      <p className="!text-crema/50 !text-sm">Última actualización: junio de 2026</p>

      <p>
        Esta política explica cómo se recogen y tratan tus datos personales al
        usar este sitio web, conforme al Reglamento (UE) 2016/679 (RGPD) y a la
        Ley Orgánica 3/2018 (LOPDGDD).
      </p>

      <h2>1. Responsable del tratamiento</h2>
      <ul>
        <li><strong>Responsable:</strong> José Antonio González Moreno</li>
        <li><strong>NIF:</strong> 07051505G</li>
        <li><strong>Domicilio:</strong> La Haba (Badajoz), España</li>
        <li><strong>Correo electrónico:</strong> <a href={`mailto:${contact.email}`}>{contact.email}</a></li>
      </ul>

      <h2>2. Datos que se recogen</h2>
      <p>
        A través del formulario de contacto se recogen los datos que tú mismo
        facilitas: <strong>nombre</strong>, <strong>correo electrónico</strong> y
        el <strong>contenido del mensaje</strong>.
      </p>
      <p>
        Además, de forma automática y únicamente con fines estadísticos, se
        recogen datos de navegación <strong>agregados y anónimos</strong>{" "}
        (páginas vistas, país aproximado y tipo de dispositivo) mediante Vercel
        Web Analytics. Esta medición <strong>no utiliza cookies</strong>, no
        identifica a los visitantes ni permite elaborar perfiles individuales.
      </p>

      <h2>3. Finalidad del tratamiento</h2>
      <p>
        Los datos se utilizan exclusivamente para <strong>atender tu consulta y
        responderte</strong>, así como para gestionar la posible relación
        profesional que se derive de ella. No se utilizan para envíos comerciales
        ni se elaboran perfiles.
      </p>

      <h2>4. Legitimación</h2>
      <p>
        La base legal del tratamiento es tu <strong>consentimiento</strong>, que
        prestas de forma libre al enviar el formulario, y la aplicación de
        medidas precontractuales a petición tuya.
      </p>

      <h2>5. Conservación de los datos</h2>
      <p>
        Los datos se conservarán durante el tiempo necesario para atender tu
        solicitud y, en su caso, mientras dure la relación profesional. Después se
        conservarán bloqueados durante los plazos legalmente exigibles y se
        suprimirán cuando dejen de ser necesarios o cuando solicites su supresión.
      </p>

      <h2>6. Destinatarios y encargados de tratamiento</h2>
      <p>
        No se ceden datos a terceros salvo obligación legal. Para prestar el
        servicio se utilizan los siguientes proveedores que actúan como
        encargados de tratamiento:
      </p>
      <ul>
        <li><strong>Vercel Inc.</strong> — alojamiento del sitio web y medición de audiencia agregada y sin cookies (Vercel Web Analytics y Speed Insights).</li>
        <li><strong>Resend (Plus Five Five, Inc.)</strong> — envío del correo generado por el formulario de contacto.</li>
      </ul>
      <p>
        Estos proveedores pueden estar ubicados fuera del Espacio Económico
        Europeo (EE. UU.). En tal caso, las transferencias internacionales se
        amparan en las garantías adecuadas previstas en el RGPD (cláusulas
        contractuales tipo de la Comisión Europea).
      </p>

      <h2>7. Tus derechos</h2>
      <p>
        Puedes ejercer en cualquier momento tus derechos de acceso,
        rectificación, supresión, oposición, limitación del tratamiento y
        portabilidad de los datos, escribiendo a{" "}
        <a href={`mailto:${contact.email}`}>{contact.email}</a> e indicando el
        derecho que deseas ejercer.
      </p>
      <p>
        Si consideras que el tratamiento de tus datos no se ajusta a la
        normativa, tienes derecho a presentar una reclamación ante la Agencia
        Española de Protección de Datos (<a href="https://www.aepd.es" target="_blank" rel="noopener noreferrer">www.aepd.es</a>).
      </p>

      <h2>8. Seguridad</h2>
      <p>
        Se aplican las medidas técnicas y organizativas necesarias para
        garantizar la seguridad de los datos y evitar su alteración, pérdida o
        acceso no autorizado.
      </p>
    </>
  );
}
