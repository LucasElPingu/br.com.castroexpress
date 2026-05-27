import styles from "./Differentials.module.css";

const differentials = [
  {
    id: 1,
    title: "Atendimento Corporativo",
    description:
      "Dedicamos equipes especializadas para atender suas necessidades logísticas com profissionalismo e excelência.",
    icon: "👔",
  },
  {
    id: 2,
    title: "Agilidade Operacional",
    description:
      "Processos otimizados e decisões rápidas garantem entregas dentro dos prazos mais exigentes.",
    icon: "⚙️",
  },
  {
    id: 3,
    title: "Segurança no Transporte",
    description:
      "Rastreamento integral, embalagem profissional e equipes certificadas para máxima proteção.",
    icon: "🔒",
  },
  {
    id: 4,
    title: "Cobertura Nacional",
    description:
      "Presente em todo o Brasil com infraestrutura robusta e parceiros estratégicos em cada região.",
    icon: "🗺️",
  },
  {
    id: 5,
    title: "Atendimento Personalizado",
    description:
      "Desenvolvemos soluções customizadas para cada cliente, considerando suas necessidades únicas.",
    icon: "🤝",
  },
  {
    id: 6,
    title: "Tecnologia Avançada",
    description:
      "Sistemas de rastreamento em tempo real e plataforma digital para controle total de suas cargas.",
    icon: "💻",
  },
];

export default function Differentials() {
  return (
    <section className={styles.differentials}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Nossos Diferenciais</h2>
          <p className={styles.subtitle}>
            O que nos torna a melhor escolha para sua logística corporativa
          </p>
        </div>

        <div className={styles.differentialsGrid}>
          {differentials.map((differential) => (
            <div key={differential.id} className={styles.differentialCard}>
              <div className={styles.cardIcon}>{differential.icon}</div>
              <h3 className={styles.cardTitle}>{differential.title}</h3>
              <p className={styles.cardDescription}>{differential.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
