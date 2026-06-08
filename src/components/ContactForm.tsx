"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { sendContact } from "@/app/actions";
import type { ContactState } from "@/lib/data";

const initial: ContactState = { ok: false, message: "" };

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="shimmer relative w-full overflow-hidden rounded-full bg-coral px-7 py-3.5 text-sm font-semibold text-carbon transition-transform hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
    >
      {pending ? "Enviando…" : "Enviar mensaje"}
    </button>
  );
}

const inputClass =
  "w-full rounded-xl border border-crema/15 bg-crema/[0.04] px-4 py-3 text-crema placeholder:text-crema/35 outline-none transition-colors focus:border-coral/60";

export default function ContactForm() {
  const [state, formAction] = useActionState(sendContact, initial);

  return (
    <form action={formAction} className="space-y-4">
      {/* Honeypot oculto */}
      <input
        type="text"
        name="company"
        tabIndex={-1}
        autoComplete="off"
        className="absolute left-[-9999px] h-0 w-0 opacity-0"
        aria-hidden="true"
      />

      <div className="grid gap-4 sm:grid-cols-2">
        <input
          type="text"
          name="name"
          required
          placeholder="Tu nombre"
          aria-label="Tu nombre"
          className={inputClass}
        />
        <input
          type="email"
          name="email"
          required
          placeholder="Tu email"
          aria-label="Tu email"
          className={inputClass}
        />
      </div>
      <textarea
        name="message"
        required
        rows={5}
        placeholder="¿En qué puedo ayudarte?"
        aria-label="Tu mensaje"
        className={`${inputClass} resize-none`}
      />

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
        <SubmitButton />
        {state.message && (
          <p
            role="status"
            className={`text-sm ${state.ok ? "text-coral" : "text-crema/60"}`}
          >
            {state.message}
          </p>
        )}
      </div>
    </form>
  );
}
