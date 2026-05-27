import Link from "next/link"
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Linkedin,
} from "lucide-react"

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
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-white font-bold text-xl text-navy">
                CA
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold tracking-tight">CASTRO</span>
                <span className="text-xs tracking-widest text-white/70">
                  AIR CARGO
                </span>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-white/80">
              Soluções completas em transporte aéreo de cargas e logística
              corporativa. Agilidade, segurança e cobertura nacional para sua
              empresa.
            </p>
            {/* Social Media */}
            <div className="flex gap-4">
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-orange"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-orange"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-orange"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
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
                <li
                  key={service}
                  className="text-sm text-white/70"
                >
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
                <span className="text-sm text-white/70">
                  Av. Paulista, 1000, São Paulo - SP
                  <br />
                  CEP: 01310-100
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 shrink-0 text-orange" />
                <a
                  href="tel:+5511999999999"
                  className="text-sm text-white/70 transition-colors hover:text-white"
                >
                  (11) 99999-9999
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
