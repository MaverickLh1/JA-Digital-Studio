// RUTA DE DIAGNÓSTICO TEMPORAL — se elimina tras verificar el email.
import { NextRequest } from "next/server";
import { Resend } from "resend";
import { contact } from "@/lib/data";

export const dynamic = "force-dynamic";

export async function GET(req: NextRequest) {
  const token = req.nextUrl.searchParams.get("token");
  if (token !== "diag-9f4k7q") {
    return new Response("forbidden", { status: 403 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const keyLen = apiKey?.length ?? 0;
  const keyPrefix = apiKey ? apiKey.slice(0, 3) : null;
  if (!apiKey) {
    return Response.json({ ok: false, keyPresent: false, keyLen });
  }

  try {
    const resend = new Resend(apiKey);
    const from =
      process.env.CONTACT_FROM ?? "JA Digital Studio <onboarding@resend.dev>";
    const result = await resend.emails.send({
      from,
      to: [contact.email],
      subject: "✅ Prueba del formulario — JA Digital Studio",
      html: "<p>Si recibes esto, el formulario de contacto de tu web <strong>ya funciona</strong> 🎉</p>",
    });
    return Response.json({
      ok: !result.error,
      keyPresent: true,
      keyLen,
      keyPrefix,
      to: contact.email,
      from,
      resendData: result.data,
      resendError: result.error,
    });
  } catch (e) {
    return Response.json({
      ok: false,
      keyPresent: true,
      keyLen,
      keyPrefix,
      error: e instanceof Error ? e.message : String(e),
    });
  }
}
