/**
 * CONFIGURACIÓN DEL SITIO — única fuente de verdad de datos de marca y contacto.
 *
 * COMO CONFIGURAR (editá este archivo y guardá; el sitio se actualiza solo):
 * - whatsapp: número en formato internacional SIN espacios ni signos.
 *   Ejemplo: "5491122334455" (Argentina: 54 + 9 + número). Dejá null si todavía no se define.
 * - email: dirección de correo real de la marca. null si no se publica.
 * - instagram: usuario sin "@". Ejemplo: "seno.cin". null si no se publica.
 *
 * IMPORTANTE: los botones de compra y contacto se OCULTAN automáticamente
 * cuando el dato correspondiente es null. Nunca se publican datos inventados.
 */

export const site = {
  name: "Seño Cin",
  slogan: "Aprende jugando",
  description:
    "Recursos pedagógicos creados desde la experiencia docente para docentes de educación primaria.",

  // ── Canales de contacto (configurables) ─────────────────────────────
  whatsapp: null as string | null, // ej. "5491122334455"
  email: null as string | null, // ej. "hola@senocin.com.ar"
  instagram: null as string | null, // ej. "seno.cin"

  // ── Sitio ───────────────────────────────────────────────────────────
  // URL pública del sitio. Se define en la variable de entorno SITE_URL
  // (ver README.md). Fallback local para desarrollo.
  url: process.env.SITE_URL ?? "http://localhost:3000",
} as const

/** ¿Hay un canal de WhatsApp configurado? */
export const hasWhatsApp = Boolean(site.whatsapp)

/**
 * Construye un enlace wa.me con un mensaje pre-cargado.
 * Devuelve null si no hay WhatsApp configurado (el botón no debe renderizarse).
 */
export function waLink(message: string): string | null {
  if (!site.whatsapp) return null
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`
}

/** Formatea un precio en pesos argentinos. null → "A consultar". */
export function formatPrice(price: number | null): string {
  if (price === null) return "A consultar"
  return `$${price.toLocaleString("es-AR")}`
}
