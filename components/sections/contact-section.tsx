import { Phone, Mail, MapPin, MessageSquare } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ContactSection() {
  // Endereço da Castro Air Cargo em Manaus
  const address = "Rua Inocêncio de Araújo, 277 - Educandos, Manaus - AM"
  const encodedAddress = encodeURIComponent(address)

  return (
    <section id="contato" className="bg-secondary/50 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <div className="mb-4 inline-block rounded-full bg-orange/10 px-4 py-1.5 text-sm font-medium text-orange">
            Contato
          </div>
          <h2 className="mb-4 text-balance text-3xl font-bold tracking-tight text-navy md:text-4xl">
            Fale com Nossa <span className="text-orange">Equipe</span>
          </h2>
          <p className="text-pretty text-muted-foreground">
            Entre em contato para solicitar uma cotação ou tirar suas dúvidas.
            Estamos prontos para atender sua empresa.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Google Maps */}
          <div className="rounded-2xl border border-border bg-white p-2 shadow-sm overflow-hidden">
            <iframe
              src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=${encodedAddress}`}
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "450px", borderRadius: "0.75rem" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização Castro Air Cargo - Manaus"
            />
          </div>

          {/* Contact Info */}
          <div className="flex flex-col justify-between gap-6">
            {/* Info Cards */}
            <div className="space-y-6">
              <div className="rounded-2xl border border-border bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-navy/10">
                    <Phone className="h-6 w-6 text-navy" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Telefone / WhatsApp</h3>
                    <a
                      href="tel:+5592981452088"
                      className="mt-1 block text-muted-foreground transition-colors hover:text-orange"
                    >
                      (92) 98145-2088
                    </a>
                    <p className="text-sm text-muted-foreground">
                      Segunda a Sexta, 8h às 18h
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-border bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-navy/10">
                    <Mail className="h-6 w-6 text-navy" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">E-mail</h3>
                    <a
                      href="mailto:contato@castroaircargo.com.br"
                      className="mt-1 block text-muted-foreground transition-colors hover:text-orange"
                    >
                      contato@castroaircargo.com.br
                    </a>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-border bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-navy/10">
                    <MapPin className="h-6 w-6 text-navy" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Endereço</h3>
                    <address className="mt-1 text-muted-foreground not-italic">
                      Rua Inocêncio de Araújo, 277
                      <br />
                      Educandos - Manaus/AM
                    </address>
                  </div>
                </div>
              </div>
            </div>

            {/* WhatsApp CTA */}
            <div className="rounded-2xl bg-gradient-to-br from-navy to-navy-light p-8 text-white">
              <div className="flex items-center gap-4 mb-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10">
                  <MessageSquare className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold">Atendimento Rápido</h3>
              </div>
              <p className="mb-6 text-white/80">
                Prefere um atendimento mais ágil? Fale conosco pelo WhatsApp e
                receba uma cotação em minutos.
              </p>
              <Button
                asChild
                className="w-full bg-orange hover:bg-orange/90 text-white font-semibold transition-transform hover:scale-[1.02]"
                size="lg"
              >
                <a
                  href="https://wa.me/5592981452088"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2"
                >
                  <Phone className="h-5 w-5" />
                  Chamar no WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
