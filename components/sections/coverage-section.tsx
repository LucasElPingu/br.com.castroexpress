import { MapPin, Plane } from "lucide-react"
import { Button } from "@/components/ui/button"

const regions = [
  { name: "Norte", airports: 12 },
  { name: "Nordeste", airports: 18 },
  { name: "Centro-Oeste", airports: 8 },
  { name: "Sudeste", airports: 25 },
  { name: "Sul", airports: 10 },
]

export function CoverageSection() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Map Visual */}
          <div className="relative">
            <div className="relative aspect-square overflow-hidden rounded-3xl bg-gradient-to-br from-navy via-navy-light to-navy p-8 lg:p-12">
              {/* Grid Pattern */}
              <div
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
                  backgroundSize: "40px 40px",
                }}
              />

              {/* Brazil Outline Placeholder */}
              <div className="relative z-10 flex h-full flex-col items-center justify-center text-white">
                <MapPin className="mb-4 h-16 w-16 text-orange" />
                <h3 className="mb-2 text-2xl font-bold">Cobertura Nacional</h3>
                <p className="mb-8 text-center text-white/70">
                  Presente em todas as regiões do Brasil
                </p>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-orange">73+</div>
                    <div className="mt-1 text-sm text-white/70">Aeroportos</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-orange">5.570+</div>
                    <div className="mt-1 text-sm text-white/70">Cidades</div>
                  </div>
                </div>
              </div>

              {/* Decorative Dots */}
              <div className="absolute right-8 top-8 h-3 w-3 rounded-full bg-orange" />
              <div className="absolute bottom-12 left-12 h-2 w-2 rounded-full bg-orange/50" />
              <div className="absolute right-1/4 top-1/3 h-2 w-2 rounded-full bg-white/50" />
              <div className="absolute bottom-1/3 left-1/3 h-3 w-3 rounded-full bg-orange/70" />
            </div>
          </div>

          {/* Content */}
          <div>
            <div className="mb-4 inline-block rounded-full bg-orange/10 px-4 py-1.5 text-sm font-medium text-orange">
              Área de Atendimento
            </div>

            <h2 className="mb-6 text-balance text-3xl font-bold tracking-tight text-navy md:text-4xl">
              Conectamos o Brasil{" "}
              <span className="text-orange">de Norte a Sul</span>
            </h2>

            <p className="mb-8 text-pretty leading-relaxed text-muted-foreground">
              Nossa rede logística abrange todos os estados brasileiros, com
              parcerias estratégicas em aeroportos e centros de distribuição que
              garantem a cobertura completa do território nacional.
            </p>

            {/* Regions */}
            <div className="mb-8 space-y-4">
              {regions.map((region) => (
                <div
                  key={region.name}
                  className="flex items-center justify-between rounded-lg border border-border bg-secondary/30 px-4 py-3"
                >
                  <div className="flex items-center gap-3">
                    <Plane className="h-5 w-5 text-navy" />
                    <span className="font-medium text-foreground">
                      {region.name}
                    </span>
                  </div>
                  <span className="text-sm text-muted-foreground">
                    {region.airports} aeroportos
                  </span>
                </div>
              ))}
            </div>

            <Button
              asChild
              className="bg-orange hover:bg-orange/90 text-white font-semibold"
            >
              <a href="#contato">Consultar Disponibilidade</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
