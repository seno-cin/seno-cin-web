import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Administración del catálogo',
  robots: { index: false, follow: false },
}

function Step({ n, title, children }: { n: string; title: string; children: React.ReactNode }) {
  return (
    <div className="flex gap-4">
      <div className="shrink-0 w-8 h-8 rounded-full bg-lila-light text-lila-dark font-bold text-sm flex items-center justify-center">
        {n}
      </div>
      <div>
        <h2 className="text-lg font-semibold text-texto mb-2">{title}</h2>
        <div className="space-y-2 text-sm text-gris leading-relaxed">{children}</div>
      </div>
    </div>
  )
}

export default function AdminPage() {
  return (
    <div className="pt-28 pb-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-texto">Administración del catálogo</h1>
        <p className="mt-3 text-lg text-gris">
          Los productos y los datos de contacto se administran editando dos archivos. No hace falta
          tocar el diseño.
        </p>

        <div className="mt-12 space-y-10">
          <Step n="1" title="Agregar o editar productos">
            <p>
              Abrí <code className="bg-gris-claro px-1.5 py-0.5 rounded">src/data/products.ts</code>.
              Es la única fuente de verdad del catálogo. Cada producto es un objeto dentro del
              array <code className="bg-gris-claro px-1.5 py-0.5 rounded">products</code>.
            </p>
            <p>
              Al final del archivo hay un ejemplo comentado: copialo, pegalo y completalo. Los
              campos obligatorios son <code>id</code>, <code>title</code>, <code>slug</code>,{' '}
              <code>description</code>, <code>categoria</code>, <code>grado</code> y{' '}
              <code>estado</code>.
            </p>
          </Step>

          <Step n="2" title="Publicar un producto">
            <p>
              Un producto solo aparece en el sitio cuando su campo <code>estado</code> vale{' '}
              <code className="bg-gris-claro px-1.5 py-0.5 rounded">“publicado”</code>. Mientras
              valga <code>“borrador”</code> queda guardado pero invisible.
            </p>
          </Step>

          <Step n="3" title="Cambiar precios y períodos">
            <p>
              El precio va en el campo <code>price</code> (número, en pesos). Si no se quiere
              publicar precio, se deja en <code>null</code> y el sitio muestra “A consultar”.
            </p>
            <p>
              El período es texto libre (<code>“Marzo”</code>, <code>“1° trimestre”</code>,{' '}
              <code>“Anual”</code>). Los filtros del catálogo se arman solos con los períodos que
              existan cargados.
            </p>
          </Step>

          <Step n="4" title="Agregar imágenes">
            <p>
              Subí la portada a <code className="bg-gris-claro px-1.5 py-0.5 rounded">public/productos/</code>{' '}
              y referenciala en el campo <code>images</code> con una ruta que empiece con{' '}
              <code>/</code>, por ejemplo <code>[&quot;/productos/planificacion-marzo.jpeg&quot;]</code>.
            </p>
            <p>
              Si un producto no tiene imagen, el sitio muestra un marcador neutro (nunca una portada
              inventada).
            </p>
          </Step>

          <Step n="5" title="Destacar en la portada">
            <p>
              Poné <code>destacado: true</code> en un producto para que aparezca en la sección
              “Recursos destacados” de la página de inicio.
            </p>
          </Step>

          <Step n="6" title="Configurar contacto y WhatsApp">
            <p>
              Editá <code className="bg-gris-claro px-1.5 py-0.5 rounded">src/data/site.ts</code> y
              completá <code>whatsapp</code>, <code>email</code> e <code>instagram</code>. Los
              botones de compra y contacto se muestran solos cuando el dato existe, y se ocultan
              cuando está en <code>null</code>.
            </p>
            <p>
              También ahí se define la URL pública del sitio a través de la variable de entorno{' '}
              <code>SITE_URL</code> (usada para el SEO y el sitemap).
            </p>
          </Step>
        </div>

        <div className="mt-12 rounded-2xl bg-crema border border-lila-light/40 p-6">
          <p className="text-sm text-gris">
            Después de editar, publicá el sitio. No hace falta tocar ningún componente: la página
            se arma sola a partir de estos datos.{' '}
            <Link href="/" className="text-lila-dark underline underline-offset-2">Volver al inicio</Link>
          </p>
        </div>
      </div>
    </div>
  )
}
