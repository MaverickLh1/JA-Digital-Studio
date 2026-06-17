"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { sendContact, type ContactState } from "@/app/actions";

const initial: ContactState = { ok: false, message: "" };

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="shimmer relative w-full overflow-hidden rounded-full bg-coral px-7 py-3.5 text-sm font-semibold text-carbon transition-transform hover:scale-[1.02] active:scale-[0.97] disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
    >
      {pending ? "Enviando…" : "Enviar mensaje"}
    </button>
  );
}

const inputClass =
  "w-full rounded-xl border border-crema/30 bg-crema/[0.04] px-4 py-3 text-crema placeholder:text-crema/55 outline-none transition-colors focus:border-coral";

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
        <div>
          <label htmlFor="name" className="sr-only">
            Tu nombre
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            placeholder="Tu nombre"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="email" className="sr-only">
            Tu email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            placeholder="Tu email"
            className={inputClass}
          />
        </div>
      </div>
      <div>
        <label htmlFor="message" className="sr-only">
          Tu mensaje
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="¿En qué puedo ayudarte?"
          className={`${inputClass} resize-none`}
        />
      </div>

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
        <SubmitButton />
        {state.message && (
          <p
            role={state.ok ? "status" : "alert"}
            aria-live={state.ok ? "polite" : "assertive"}
            className={`text-sm ${
              state.ok ? "text-coral" : "font-medium text-coral-dark"
            }`}
          >
            {state.message}
          </p>
        )}
      </div>
    </form>
  );
}
