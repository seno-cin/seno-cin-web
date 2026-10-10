import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="pt-32 pb-20 text-center">
      <div className="max-w-md mx-auto px-4">
        <div className="text-6xl mb-6" aria-hidden="true">🔍</div>
        <h1 className="text-3xl font-bold text-texto mb-3">Página no encontrada</h1>
        <p className="text-gris mb-8">
          La página que buscás no existe o fue movida a otra dirección.
        </p>
        <Link
          href="/"
          className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-lila text-white font-medium hover:bg-lila-dark transition-colors"
        >
          Volver al inicio
        </Link>
      </div>
    </div>
  )
}
