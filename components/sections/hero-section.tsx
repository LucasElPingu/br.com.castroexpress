import { Button } from "@/components/ui/button"
import { Phone, ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-navy"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy-light to-navy opacity-90" />
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Decorative Elements */}
      <div className="absolute -right-20 -top-20 h-96 w-96 rounded-full bg-orange/10 blur-3xl" />
      <div className="absolute -bottom-20 -left-20 h-96 w-96 rounded-full bg-white/5 blur-3xl" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 py-32 text-center sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          {/* Badge */}
          <div className="mb-8 inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm text-white/90 backdrop-blur-sm">
            <span className="mr-2 inline-block h-2 w-2 rounded-full bg-orange" />
            Líder em Transporte Aéreo Corporativo
          </div>

          {/* Headline */}
          <h1 className="mb-6 text-balance text-4xl font-bold leading-tight tracking-tight text-white md:text-5xl lg:text-6xl">
            Transporte Aéreo e Soluções{" "}
            <span className="text-orange">Logísticas Corporativas</span>
          </h1>

          {/* Subtitle */}
          <p className="mx-auto mb-10 max-w-2xl text-pretty text-lg text-white/80 md:text-xl">
            Agilidade, segurança e eficiência em cada entrega. Conectamos sua
            empresa aos principais destinos do Brasil com a confiabilidade que
            seu negócio merece.
          </p>

          {/* CTAs */}
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="h-14 bg-orange px-8 text-base font-semibold text-white hover:bg-orange/90"
            >
              <a
                href="https://wa.me/5511999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Phone className="h-5 w-5" />
                Solicitar Cotação
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="h-14 border-white/30 bg-transparent px-8 text-base font-semibold text-white hover:bg-white/10 hover:text-white"
            >
              <a href="#servicos" className="flex items-center gap-2">
                Conhecer Serviços
                <ArrowRight className="h-5 w-5" />
              </a>
            </Button>
          </div>

          {/* Stats */}
          <div className="mt-16 grid gap-8 sm:grid-cols-3">
            <div className="text-center">
              <div className="text-4xl font-bold text-orange">15+</div>
              <div className="mt-1 text-sm text-white/70">Anos de Experiência</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange">500+</div>
              <div className="mt-1 text-sm text-white/70">Clientes Atendidos</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange">27</div>
              <div className="mt-1 text-sm text-white/70">Estados Atendidos</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs text-white/50">Rolar para baixo</span>
          <div className="h-12 w-6 rounded-full border-2 border-white/30 p-1">
            <div className="h-2 w-2 animate-bounce rounded-full bg-white/70" />
          </div>
        </div>
      </div>
    </section>
  )
}
