import { Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

export function CTASection() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-orange via-orange to-orange/80 px-8 py-16 text-center lg:px-16 lg:py-20">
          {/* Background Pattern */}
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />

          {/* Decorative Elements */}
          <div className="absolute -left-20 -top-20 h-60 w-60 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute -bottom-20 -right-20 h-60 w-60 rounded-full bg-white/10 blur-3xl" />

          {/* Content */}
          <div className="relative z-10">
            <h2 className="mb-4 text-balance text-3xl font-bold text-white md:text-4xl">
              Pronto para Otimizar sua Logística?
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-pretty text-lg text-white/90">
              Entre em contato agora mesmo e descubra como a Castro Air Cargo
              pode transformar a logística da sua empresa com soluções ágeis e
              seguras.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button
                asChild
                size="lg"
                className="h-14 bg-navy px-8 text-base font-semibold text-white hover:bg-navy-light"
              >
                <a
                  href="https://wa.me/5511999999999"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <Phone className="h-5 w-5" />
                  Solicitar Cotação Agora
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="h-14 border-white/30 bg-transparent px-8 text-base font-semibold text-white hover:bg-white/20 hover:text-white"
              >
                <a href="#contato">Fale Conosco</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
