import Link from "next/link"
import Image from "next/image"
import { Phone, Mail, MapPin } from "lucide-react"

const quickLinks = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre Nós", href: "#sobre" },
  { label: "Serviços", href: "#servicos" },
  { label: "Diferenciais", href: "#diferenciais" },
  { label: "Contato", href: "#contato" },
]

const services = [
  "Transporte Aéreo de Cargas",
  "Logística Expressa",
  "Entregas Corporativas",
  "Envios Urgentes",
  "Gerenciamento de Cargas",
]

export function Footer() {
  return (
    <footer className="bg-navy text-white">
      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center">
              <div className="relative h-16 w-44 overflow-hidden">
                <Image
                  src="/images/logo.png"
                  alt="Castro Air Cargo"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            <p className="text-sm leading-relaxed text-white/80">
              Especializada em logística aérea e transporte expresso, oferecendo
              soluções ágeis e seguras para transporte de cargas em Manaus e região.
            </p>
            <div className="text-xs text-white/60">
              <p>Castro Comercial</p>
              <p>CNPJ: 34.907.119/0001-64</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-6 text-lg font-semibold">Links Rápidos</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 transition-colors hover:text-orange"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-6 text-lg font-semibold">Nossos Serviços</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service} className="text-sm text-white/70">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-6 text-lg font-semibold">Contato</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-orange" />
                <address className="text-sm text-white/70 not-italic">
                  Rua Inocêncio de Araújo, 277
                  <br />
                  Educandos - Manaus/AM
                </address>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 shrink-0 text-orange" />
                <a
                  href="tel:+5592981452088"
                  className="text-sm text-white/70 transition-colors hover:text-white"
                >
                  (92) 98145-2088
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 shrink-0 text-orange" />
                <a
                  href="mailto:contato@castroaircargo.com.br"
                  className="text-sm text-white/70 transition-colors hover:text-white"
                >
                  contato@castroaircargo.com.br
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-center text-sm text-white/60">
              © {new Date().getFullYear()} Castro Air Cargo. Todos os direitos
              reservados.
            </p>
            <div className="flex gap-6">
              <Link
                href="#"
                className="text-sm text-white/60 transition-colors hover:text-white"
              >
                Política de Privacidade
              </Link>
              <Link
                href="#"
                className="text-sm text-white/60 transition-colors hover:text-white"
              >
                Termos de Uso
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
