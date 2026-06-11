"use server";

import { Resend } from "resend";
import { contact } from "@/lib/data";

// Estado que devuelve la acción al formulario (useActionState).
export type ContactState = {
  ok: boolean;
  message: string;
};

const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function sendContact(
  _prev: ContactState,
  formData: FormData
): Promise<ContactState> {
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();

  // Honeypot anti-spam (campo oculto que un bot rellenaría)
  if (String(formData.get("company") ?? "").length > 0) {
    return { ok: true, message: "¡Mensaje enviado! Te responderé pronto." };
  }

  if (!name || !email || !message) {
    return { ok: false, message: "Por favor, completa todos los campos." };
  }
  if (!emailRe.test(email)) {
    return { ok: false, message: "Revisa tu email, no parece válido." };
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    // Aún no conectado: invitamos a usar WhatsApp / email directo.
    return {
      ok: false,
      message:
        "El formulario todavía no está conectado al correo. Escríbeme por WhatsApp o a " +
        contact.email +
        " mientras tanto.",
    };
  }

  try {
    const resend = new Resend(apiKey);
    const from = process.env.CONTACT_FROM ?? "Josea González <onboarding@resend.dev>";
    await resend.emails.send({
      from,
      to: contact.email,
      replyTo: email,
      subject: `Nuevo mensaje de ${name} — joseagonzalez.com`,
      text: `Nombre: ${name}\nEmail: ${email}\n\nMensaje:\n${message}`,
    });
    return { ok: true, message: "¡Mensaje enviado! Te responderé lo antes posible." };
  } catch {
    return {
      ok: false,
      message:
        "No se pudo enviar ahora mismo. Prueba por WhatsApp o escríbeme a " +
        contact.email +
        ".",
    };
  }
}
