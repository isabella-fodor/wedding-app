"use client";

import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { rsvpFormSchema, type RSVPFormData } from "@/lib/validations/rsvp";
import { weddingConfig } from "@/wedding.config";

type FormState = "idle" | "loading" | "success" | "error";

export function RSVPForm() {
  const [formState, setFormState] = useState<FormState>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<RSVPFormData>({
    resolver: zodResolver(rsvpFormSchema) as any,
  });

  const onSubmit: SubmitHandler<any> = async (data: RSVPFormData) => {
    setFormState("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/rsvp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Eroare la trimiterea formularului");
      }

      setFormState("success");
      reset();
      setTimeout(() => setFormState("idle"), 5000);
    } catch (error) {
      setFormState("error");
      setErrorMessage(
        error instanceof Error ? error.message : "Eroare necunoscută"
      );
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-2xl mx-auto space-y-6 bg-white p-8 rounded-lg shadow-lg"
      style={{ borderTopColor: weddingConfig.colors.primary, borderTopWidth: "4px" }}
    >
      {/* Success Message */}
      {formState === "success" && (
        <div className="bg-green-50 border border-green-200 rounded-lg p-4">
          <p className="text-green-800 font-semibold">✓ Mulțumim pentru răspuns!</p>
          <p className="text-green-700 text-sm mt-1">
            Abia așteptăm să ne vedem la nuntă. Dacă aveți întrebări, nu ezitați să ne contactați.
          </p>
        </div>
      )}

      {/* Error Message */}
      {formState === "error" && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4">
          <p className="text-red-800 font-semibold">Eroare</p>
          <p className="text-red-700 text-sm mt-1">{errorMessage}</p>
        </div>
      )}

      {formState !== "success" && (
        <>
          {/* Full Name */}
          <div>
            <label htmlFor="fullName" className="block text-sm font-semibold mb-2">
              Nume complet <span className="text-red-500">*</span>
            </label>
            <input
              {...register("fullName")}
              type="text"
              id="fullName"
              placeholder="ex. Ion Popescu"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-0"
              disabled={formState === "loading"}
            />
            {errors.fullName && (
              <p className="text-red-500 text-sm mt-1">{errors.fullName.message}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-semibold mb-2">
              Email
            </label>
            <input
              {...register("email")}
              type="email"
              id="email"
              placeholder="ex. ion@example.com"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2"
              disabled={formState === "loading"}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
            )}
          </div>

          {/* Phone */}
          <div>
            <label htmlFor="phone" className="block text-sm font-semibold mb-2">
              Telefon
            </label>
            <input
              {...register("phone")}
              type="tel"
              id="phone"
              placeholder="ex. +40 712 345 678"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2"
              disabled={formState === "loading"}
            />
            {errors.phone && (
              <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
            )}
          </div>

          {/* Status */}
          <div>
            <label htmlFor="status" className="block text-sm font-semibold mb-2">
              Participare <span className="text-red-500">*</span>
            </label>
            <select
              {...register("status")}
              id="status"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2"
              disabled={formState === "loading"}
            >
              <option value="">Selectați un răspuns...</option>
              <option value="YES">Da, vin!</option>
              <option value="NO">Nu pot veni</option>
              <option value="MAYBE">Încă nu știu</option>
            </select>
            {errors.status && (
              <p className="text-red-500 text-sm mt-1">{errors.status.message}</p>
            )}
          </div>

          {/* People Count */}
          <div>
            <label htmlFor="peopleCount" className="block text-sm font-semibold mb-2">
              Număr de persoane <span className="text-red-500">*</span>
            </label>
            <input
              {...register("peopleCount")}
              type="number"
              id="peopleCount"
              min="1"
              max="5"
              placeholder="1"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2"
              disabled={formState === "loading"}
            />
            {errors.peopleCount && (
              <p className="text-red-500 text-sm mt-1">{errors.peopleCount.message}</p>
            )}
          </div>

          {/* Menu Option */}
          {weddingConfig.menuOptions.length > 0 && (
            <div>
              <label htmlFor="menuOption" className="block text-sm font-semibold mb-2">
                Preferință meniu
              </label>
              <select
                {...register("menuOption")}
                id="menuOption"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2"
                disabled={formState === "loading"}
              >
                <option value="">Selectați o opțiune...</option>
                {weddingConfig.menuOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
              {errors.menuOption && (
                <p className="text-red-500 text-sm mt-1">{errors.menuOption.message}</p>
              )}
            </div>
          )}

          {/* Comment */}
          <div>
            <label htmlFor="comment" className="block text-sm font-semibold mb-2">
              Mesaj / Observații
            </label>
            <textarea
              {...register("comment")}
              id="comment"
              placeholder="Lăsați orice mesaj sau observație..."
              rows={3}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 resize-none"
              disabled={formState === "loading"}
            />
            {errors.comment && (
              <p className="text-red-500 text-sm mt-1">{errors.comment.message}</p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={formState === "loading"}
            className="w-full py-3 px-4 rounded-lg font-semibold text-white transition-all duration-200 disabled:opacity-50"
            style={{
              backgroundColor: weddingConfig.colors.primary,
              color: weddingConfig.colors.secondary,
            }}
          >
            {formState === "loading" ? "Se trimite..." : "Confirmă participarea"}
          </button>

          {/* Deadline */}
          <p className="text-center text-sm text-gray-600">
            Vă rugăm să confirmați participarea până la{" "}
            <strong>{weddingConfig.details.rsvpDeadline}</strong>
          </p>
        </>
      )}
    </form>
  );
}
