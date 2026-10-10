import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Políticas y condiciones',
  description:
    'Información sobre compras, entregas, devoluciones, privacidad y términos de uso de los recursos de Seño Cin.',
}

function Section({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="scroll-mt-28">
      <h2 className="text-xl font-bold text-texto mb-4">{title}</h2>
      <div className="space-y-3 text-gris leading-relaxed">{children}</div>
    </section>
  )
}

export default function PoliticasPage() {
  return (
    <div className="pt-28 pb-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-texto">Políticas y condiciones</h1>
        <p className="mt-3 text-lg text-gris">
          Información sobre cómo funcionan las compras, las entregas y el uso de los recursos.
        </p>

        <div className="mt-12 space-y-12">
          <Section id="envios" title="Compras y entregas">
            <p>
              Todos los recursos de Seño Cin son materiales digitales. La entrega se realiza por
              descarga o por el canal acordado al momento de la compra.
            </p>
            <p>
              Actualmente la compra se coordina por WhatsApp: al tocar el botón “Comprar” de un
              recurso se abre una conversación con el mensaje del producto pre-cargado. Allí
              confirmamos el medio de pago y la forma de entrega.
            </p>
            <p className="text-sm text-gris-claro bg-amarillo-light/60 rounded-xl p-4 border border-amarillo/40">
              <strong className="text-texto">Nota:</strong> esta sección describe el funcionamiento
              actual del sitio. Si se incorporan medios de pago o descargas automáticas, se
              actualizará acá.
            </p>
          </Section>

          <Section id="devoluciones" title="Devoluciones">
            <p>
              Al ser productos digitales, una vez entregado el archivo no se admiten devoluciones
              por cambio de opinión.
            </p>
            <p>
              Si el archivo presenta un problema técnico o no corresponde con lo descripto en la
              ficha del producto, escribinos desde{' '}
              <a href="/contacto" className="text-lila-dark underline underline-offset-2">Contacto</a>{' '}
              y lo resolvemos.
            </p>
            <p className="text-sm text-gris-claro bg-amarillo-light/60 rounded-xl p-4 border border-amarillo/40">
              <strong className="text-texto">Nota:</strong> los plazos y condiciones específicas de
              reembolso serán definidos por la propietaria del emprendimiento.
            </p>
          </Section>

          <Section id="privacidad" title="Privacidad">
            <p>
              El sitio no almacena datos personales de quienes lo visitan. No hay registro de
              usuarios ni base de datos de clientes.
            </p>
            <p>
              Cuando escribís por WhatsApp o email, tus datos se manejan únicamente para responder
              tu consulta y coordinar la compra. No se comparten con terceros ni se usan con fines
              de publicidad.
            </p>
            <p>
              Los formularios del sitio solo solicitan la información necesaria para su propósito y
              no la guardan: abren tu aplicación de mensajería con el mensaje ya escrito.
            </p>
          </Section>

          <Section id="terminos" title="Términos y condiciones de uso">
            <p>
              Los recursos adquiridos son de uso personal de la docente compradora, para su uso en
              su aula o institución.
            </p>
            <p>
              No está permitida la redistribución, reventa, publicación en otros sitios o
              modificaciones del material con fines comerciales.
            </p>
            <p>
              Se agradece que, al compartir el material en redes o espacios públicos, se mencione a
              Seño Cin como autora.
            </p>
          </Section>
        </div>
      </div>
    </div>
  )
}
