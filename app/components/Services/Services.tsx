import Image from "next/image";
import styles from "./Services.module.css";

const services = [
  {
    id: 1,
    title: "Transporte Aéreo de Cargas",
    description:
      "Serviço especializado em transporte aéreo de cargas com cobertura nacional e foco em agilidade.",
    icon: "✈️",
  },
  {
    id: 2,
    title: "Logística Expressa",
    description:
      "Entregas rápidas e eficientes para atender suas necessidades de urgência em prazos reduzidos.",
    icon: "⚡",
  },
  {
    id: 3,
    title: "Entregas Corporativas",
    description:
      "Soluções customizadas para grandes empresas com atendimento dedicado e profissional.",
    icon: "🏢",
  },
  {
    id: 4,
    title: "Envios Urgentes",
    description:
      "Processamento acelerado e entrega prioritária para casos que exigem máxima rapidez.",
    icon: "⏱️",
  },
  {
    id: 5,
    title: "Gerenciamento de Cargas",
    description:
      "Controle total da sua carga com rastreamento em tempo real e relatórios detalhados.",
    icon: "📊",
  },
  {
    id: 6,
    title: "Soluções Personalizadas",
    description:
      "Desenvolvemos soluções logísticas específicas para cada cliente e tipo de operação.",
    icon: "🔧",
  },
];

export default function Services() {
  return (
    <section id="services" className={styles.services}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Nossos Serviços</h2>
          <p className={styles.subtitle}>
            Soluções logísticas completas para sua empresa crescer
          </p>
        </div>

        <div className={styles.servicesGrid}>
          {services.map((service) => (
            <div key={service.id} className={styles.serviceCard}>
              <div className={styles.iconArea}>{service.icon}</div>
              <h3 className={styles.serviceTitle}>{service.title}</h3>
              <p className={styles.serviceDescription}>{service.description}</p>
              <div className={styles.serviceFooter}>
                <a href="#contact" className={styles.learnMore}>
                  Mais informações →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
