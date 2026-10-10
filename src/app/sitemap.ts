import type { MetadataRoute } from "next"
import { site } from "@/data/site"
import { publishedProducts } from "@/data/products"

// Requerido por `output: export` (sitemap generado en build).
export const dynamic = "force-static"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = site.url

  const staticRoutes = [
    { url: baseUrl, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 1 },
    { url: `${baseUrl}/recursos`, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 0.9 },
    { url: `${baseUrl}/faq`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.5 },
    { url: `${baseUrl}/contacto`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.5 },
    { url: `${baseUrl}/politicas`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.3 },
  ]

  const productRoutes = publishedProducts().map((product) => ({
    url: `${baseUrl}/recurso/${product.slug}`,
    lastModified: new Date(product.createdAt),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }))

  return [...staticRoutes, ...productRoutes]
}
