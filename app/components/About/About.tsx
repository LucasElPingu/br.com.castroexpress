import Image from "next/image";
import styles from "./About.module.css";

export default function About() {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h2 className={styles.title}>Sobre a Castro Express</h2>
          <p className={styles.description}>
            A Castro Express Cargo é uma empresa especializada em soluções
            logísticas e transporte aéreo de cargas, com foco em atendimento
            corporativo e operações de alta precisão. Com presença estratégica
            em toda a nação, garantimos entrega segura e ágil de suas cargas.
          </p>

          <div className={styles.valuesGrid}>
            <div className={styles.valueCard}>
              <div className={styles.valueIcon}>
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  aria-hidden="true"
                >
                  <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
                </svg>
              </div>
              <h3 className={styles.valueTitle}>Agilidade Operacional</h3>
              <p className={styles.valueText}>
                Processamento rápido e entregas em prazos reduzidos.
              </p>
            </div>

            <div className={styles.valueCard}>
              <div className={styles.valueIcon}>
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  aria-hidden="true"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
              </div>
              <h3 className={styles.valueTitle}>Segurança Garantida</h3>
              <p className={styles.valueText}>
                Sistemas de rastreamento e proteção de cargas 24/7.
              </p>
            </div>

            <div className={styles.valueCard}>
              <div className={styles.valueIcon}>
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  aria-hidden="true"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
              </div>
              <h3 className={styles.valueTitle}>Disponibilidade 24/7</h3>
              <p className={styles.valueText}>
                Suporte contínuo e atendimento sempre disponível.
              </p>
            </div>

            <div className={styles.valueCard}>
              <div className={styles.valueIcon}>
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  aria-hidden="true"
                >
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                </svg>
              </div>
              <h3 className={styles.valueTitle}>Atendimento Personalizado</h3>
              <p className={styles.valueText}>
                Soluções customizadas para cada necessidade corporativa.
              </p>
            </div>
          </div>
        </div>

        <div className={styles.imageWrapper}>
          <Image
            src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=500&h=600&fit=crop"
            alt="Operações logísticas profissionais"
            width={500}
            height={600}
            className={styles.image}
          />
          <div className={styles.imageAccent}></div>
        </div>
      </div>
    </section>
  );
}
