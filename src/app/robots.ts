import type { MetadataRoute } from "next"
import { site } from "@/data/site"

// Requerido por `output: export` (robots generado en build).
export const dynamic = "force-static"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/admin/"],
    },
    sitemap: `${site.url}/sitemap.xml`,
  }
}
