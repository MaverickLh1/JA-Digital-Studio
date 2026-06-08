// RUTA DE DIAGNÓSTICO TEMPORAL — se elimina tras verificar el email.
import { NextRequest } from "next/server";
import { Resend } from "resend";
import { contact } from "@/lib/data";

export const dynamic = "force-dynamic";

export async function GET(req: NextRequest) {
  const token = req.nextUrl.searchParams.get("token");
  if (token !== "verify-2k9z") {
    return new Response("forbidden", { status: 403 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return Response.json({ ok: false, keyPresent: false });
  }

  try {
    const resend = new Resend(apiKey);
    const from =
      process.env.CONTACT_FROM ?? "JA Digital Studio <onboarding@resend.dev>";
    const result = await resend.emails.send({
      from,
      to: [contact.email],
      subject: "✅ Prueba final — correo desde tu dominio",
      html: "<p>Este correo sale desde <strong>web@jadigitalstudio.com</strong>. Si lo ves en tu bandeja, el formulario está 100% operativo 🎉</p>",
    });
    return Response.json({
      ok: !result.error,
      from,
      to: contact.email,
      resendData: result.data,
      resendError: result.error,
    });
  } catch (e) {
    return Response.json({
      ok: false,
      error: e instanceof Error ? e.message : String(e),
    });
  }
}
