import { Target, Shield, Users, Award } from "lucide-react"

export function AboutSection() {
  return (
    <section id="sobre" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Content */}
          <div>
            {/* Badge */}
            <div className="mb-4 inline-block rounded-full bg-orange/10 px-4 py-1.5 text-sm font-medium text-orange">
              Sobre Nós
            </div>

            <h2 className="mb-6 text-balance text-3xl font-bold tracking-tight text-navy md:text-4xl">
              Excelência em Logística Aérea{" "}
              <span className="text-orange">desde 2009</span>
            </h2>

            <p className="mb-6 text-pretty leading-relaxed text-muted-foreground">
              A Castro Air Cargo nasceu com a missão de oferecer soluções
              logísticas diferenciadas para o mercado corporativo brasileiro.
              Com mais de 15 anos de experiência, nos consolidamos como
              referência em transporte aéreo de cargas, atendendo empresas de
              todos os portes com agilidade e profissionalismo.
            </p>

            <p className="mb-8 text-pretty leading-relaxed text-muted-foreground">
              Nossa equipe altamente qualificada trabalha diariamente para
              garantir que sua carga chegue ao destino com segurança, no prazo e
              com o melhor custo-benefício. Somos parceiros estratégicos de
              grandes empresas e participamos ativamente de licitações e
              contratos corporativos.
            </p>

            {/* Features */}
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-navy/10">
                  <Target className="h-6 w-6 text-navy" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Nossa Missão</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Conectar empresas através de soluções logísticas eficientes
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-navy/10">
                  <Shield className="h-6 w-6 text-navy" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Segurança</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Monitoramento 24h e rastreamento em tempo real
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-navy/10">
                  <Users className="h-6 w-6 text-navy" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Equipe</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Profissionais experientes e comprometidos
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-navy/10">
                  <Award className="h-6 w-6 text-navy" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Qualidade</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Certificações e processos padronizados
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Image Grid */}
          <div className="relative">
            <div className="grid gap-4">
              {/* Main Image */}
              <div className="relative h-80 overflow-hidden rounded-2xl bg-gradient-to-br from-navy to-navy-light">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="mb-4 text-7xl font-bold text-orange">15+</div>
                    <div className="text-xl font-medium">Anos de Excelência</div>
                    <div className="mt-2 text-sm text-white/70">
                      em Transporte Aéreo
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Grid */}
              <div className="grid grid-cols-2 gap-4">
                <div className="relative h-40 overflow-hidden rounded-xl bg-secondary">
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center">
                    <div className="text-3xl font-bold text-navy">98%</div>
                    <div className="mt-1 text-xs text-muted-foreground">
                      Entregas no Prazo
                    </div>
                  </div>
                </div>
                <div className="relative h-40 overflow-hidden rounded-xl bg-orange">
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center text-white">
                    <div className="text-3xl font-bold">24/7</div>
                    <div className="mt-1 text-xs text-white/80">
                      Suporte ao Cliente
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Element */}
            <div className="absolute -bottom-6 -right-6 -z-10 h-full w-full rounded-2xl bg-orange/10" />
          </div>
        </div>
      </div>
    </section>
  )
}
