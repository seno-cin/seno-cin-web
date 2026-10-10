/**
 * CATÁLOGO DE PRODUCTOS — única fuente de verdad del catálogo público.
 *
 * COMO AGREGAR UN PRODUCTO (etapa de creación de contenidos):
 * 1. Copiá el ejemplo que está comentado al final de este archivo y pegalo dentro
 *    del array `products`.
 * 2. Completá los campos. Los obligatorios: id, title, slug, description,
 *    categoria, grado, estado.
 * 3. Para PUBLICAR el producto: estado: "publicado". Mientras esté en "borrador"
 *    no aparece en el sitio.
 * 4. Guardá el archivo y publicá. No hace falta tocar ningún componente.
 *
 * REGLAS DEL CATÁLOGO:
 * - No cargar productos que no existan realmente. Los campos sin datos
 *   confirmados se dejan en null (el sitio los muestra como "A consultar").
 * - Las imágenes van en /public/productos/ (ej: /productos/mi-recurso.jpeg)
 *   y se referencian con "/" al inicio. Si `images` está vacío, el sitio
 *   muestra un marcador neutro.
 * - Los meses/períodos son texto libre (ej: "Marzo", "1° trimestre"): se pueden
 *   agregar o cambiar sin tocar código.
 */

export type Categoria =
  | "planificacion"
  | "secuencia"
  | "adecuacion-dei"
  | "informe"
  | "juego"

export type Area =
  | "practicas-del-lenguaje"
  | "matematica"
  | "cs-sociales"
  | "cs-naturales"
  | "general"

export type Grado = "1ro" | "2do" | "3ro" | "4to" | "5to" | "6to"

export interface Resource {
  id: string
  title: string
  slug: string // URL amigable, en minúsculas y sin espacios (ej: "planificacion-matematica-marzo")
  description: string // descripción corta para tarjetas
  longDescription: string // descripción completa de la ficha
  categoria: Categoria
  grado: Grado[] // grados a los que está dirigido
  area: Area
  periodo: string | null // ej: "Marzo", "1° trimestre", "Anual"
  price: number | null // en pesos argentinos. null = sin precio publicado
  formato: string // ej: "PDF listo para imprimir"
  contenido: string[] // qué incluye el material (lista real, sin exageros)
  entrega: string | null // modalidad de entrega, ej: "Descarga digital tras confirmar el pago"
  tags: string[] // palabras clave para búsqueda
  images: string[] // rutas en /public, ej: ["/productos/planificacion-marzo.jpeg"]
  isFree: boolean
  destacado: boolean
  estado: "borrador" | "publicado"
  createdAt: string // fecha ISO "AAAA-MM-DD"
}

/** Solo los productos con estado "publicado" se muestran en el sitio. */
export const products: Resource[] = [
  // ─── EJEMPLO (copiá, pegá y completá) ────────────────────────────────
  // {
  //   id: "1",
  //   title: "Planificación Prácticas del Lenguaje — Marzo",
  //   slug: "planificacion-pdl-marzo",
  //   description: "Planificación mensual de Prácticas del Lenguaje para 2° grado.",
  //   longDescription: "Descripción completa del recurso para su ficha pública.",
  //   categoria: "planificacion",
  //   grado: ["2do"],
  //   area: "practicas-del-lenguaje",
  //   periodo: "Marzo",
  //   price: null, // completar cuando se defina el precio
  //   formato: "PDF listo para imprimir",
  //   contenido: ["Planificación mensual", "Actividades para carpetas"],
  //   entrega: null,
  //   tags: ["planificacion", "practicas del lenguaje", "2do grado"],
  //   images: [],
  //   isFree: false,
  //   destacado: false,
  //   estado: "borrador",
  //   createdAt: "2026-10-09",
  // },
]

/** Devuelve solo los productos publicados. Único punto de acceso para el sitio. */
export function publishedProducts(): Resource[] {
  return products.filter((p) => p.estado === "publicado")
}

/** Devuelve los productos destacados publicados (para la portada). */
export function featuredProducts(): Resource[] {
  return publishedProducts().filter((p) => p.destacado)
}

// ── Etiquetas para la interfaz ─────────────────────────────────────────

export const categoriaLabels: Record<Categoria, string> = {
  planificacion: "Planificaciones",
  secuencia: "Secuencias Didácticas",
  "adecuacion-dei": "Adecuaciones y DEI",
  informe: "Informes Pedagógicos",
  juego: "Juegos Didácticos",
}

export const areaLabels: Record<Area, string> = {
  "practicas-del-lenguaje": "Prácticas del Lenguaje",
  matematica: "Matemática",
  "cs-sociales": "Ciencias Sociales",
  "cs-naturales": "Ciencias Naturales",
  general: "General",
}

export const gradoLabels: Record<Grado, string> = {
  "1ro": "1° grado",
  "2do": "2° grado",
  "3ro": "3° grado",
  "4to": "4° grado",
  "5to": "5° grado",
  "6to": "6° grado",
}

export const categorias: Categoria[] = [
  "planificacion",
  "secuencia",
  "adecuacion-dei",
  "informe",
  "juego",
]

export const areas: Area[] = [
  "practicas-del-lenguaje",
  "matematica",
  "cs-sociales",
  "cs-naturales",
  "general",
]

export const grados: Grado[] = ["1ro", "2do", "3ro", "4to", "5to", "6to"]
