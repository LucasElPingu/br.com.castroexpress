import {
  Headphones,
  Zap,
  ShieldCheck,
  Globe,
  UserCheck,
  Clock,
} from "lucide-react"

const differentials = [
  {
    icon: Headphones,
    title: "Atendimento Corporativo",
    description:
      "Equipe dedicada para atender sua empresa com exclusividade e eficiência.",
  },
  {
    icon: Zap,
    title: "Agilidade Operacional",
    description:
      "Processos otimizados para garantir o menor tempo de trânsito possível.",
  },
  {
    icon: ShieldCheck,
    title: "Segurança no Transporte",
    description:
      "Monitoramento 24h, seguro de carga e rastreamento em tempo real.",
  },
  {
    icon: Globe,
    title: "Cobertura Nacional",
    description:
      "Presente em todos os estados brasileiros com rede própria e parceiros.",
  },
  {
    icon: UserCheck,
    title: "Atendimento Personalizado",
    description:
      "Soluções customizadas de acordo com as necessidades do seu negócio.",
  },
  {
    icon: Clock,
    title: "Pontualidade Garantida",
    description:
      "Compromisso com prazos e SLAs bem definidos para cada operação.",
  },
]

export function DifferentialsSection() {
  return (
    <section id="diferenciais" className="bg-navy py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <div className="mb-4 inline-block rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium text-orange">
            Nossos Diferenciais
          </div>
          <h2 className="mb-4 text-balance text-3xl font-bold tracking-tight text-white md:text-4xl">
            Por que Escolher a{" "}
            <span className="text-orange">Castro Air Cargo?</span>
          </h2>
          <p className="text-pretty text-white/70">
            Combinamos experiência, tecnologia e comprometimento para oferecer o
            melhor serviço de transporte aéreo do mercado.
          </p>
        </div>

        {/* Differentials Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {differentials.map((item) => (
            <div
              key={item.title}
              className="group rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-all duration-300 hover:border-orange/50 hover:bg-white/10"
            >
              {/* Icon */}
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-orange/20 transition-colors group-hover:bg-orange">
                <item.icon className="h-7 w-7 text-orange transition-colors group-hover:text-white" />
              </div>

              {/* Content */}
              <h3 className="mb-3 text-xl font-semibold text-white">
                {item.title}
              </h3>
              <p className="leading-relaxed text-white/70">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
