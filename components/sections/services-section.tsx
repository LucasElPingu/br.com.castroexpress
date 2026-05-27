import {
  Plane,
  Truck,
  Package,
  Clock,
  BarChart3,
  Settings,
} from "lucide-react"

const services = [
  {
    icon: Plane,
    title: "Transporte Aéreo de Cargas",
    description:
      "Envio de cargas via aérea para todo o Brasil com rapidez e segurança. Ideal para entregas urgentes e mercadorias de alto valor.",
  },
  {
    icon: Truck,
    title: "Logística Expressa",
    description:
      "Serviço porta a porta com coleta e entrega em tempo recorde. Perfeito para empresas que precisam de agilidade.",
  },
  {
    icon: Package,
    title: "Entregas Corporativas",
    description:
      "Soluções personalizadas para empresas com demandas recorrentes de envios. Contratos sob medida para seu negócio.",
  },
  {
    icon: Clock,
    title: "Envios Urgentes",
    description:
      "Atendimento emergencial 24 horas para cargas críticas. Garantia de entrega no menor tempo possível.",
  },
  {
    icon: BarChart3,
    title: "Gerenciamento de Cargas",
    description:
      "Monitoramento completo da sua carga com rastreamento em tempo real e relatórios detalhados.",
  },
  {
    icon: Settings,
    title: "Soluções Personalizadas",
    description:
      "Desenvolvemos operações logísticas customizadas de acordo com as necessidades específicas da sua empresa.",
  },
]

export function ServicesSection() {
  return (
    <section id="servicos" className="bg-secondary/50 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <div className="mb-4 inline-block rounded-full bg-orange/10 px-4 py-1.5 text-sm font-medium text-orange">
            Nossos Serviços
          </div>
          <h2 className="mb-4 text-balance text-3xl font-bold tracking-tight text-navy md:text-4xl">
            Soluções Completas em{" "}
            <span className="text-orange">Logística Aérea</span>
          </h2>
          <p className="text-pretty text-muted-foreground">
            Oferecemos uma gama completa de serviços logísticos para atender às
            necessidades da sua empresa com eficiência e profissionalismo.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="group rounded-2xl border border-border bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-orange/30 hover:shadow-lg"
            >
              {/* Icon */}
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-navy/10 transition-colors group-hover:bg-orange">
                <service.icon className="h-7 w-7 text-navy transition-colors group-hover:text-white" />
              </div>

              {/* Content */}
              <h3 className="mb-3 text-xl font-semibold text-foreground">
                {service.title}
              </h3>
              <p className="leading-relaxed text-muted-foreground">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
