import Image from "next/image";
import styles from "./Coverage.module.css";

export default function Coverage() {
  return (
    <section id="coverage" className={styles.coverage}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h2 className={styles.title}>Cobertura Nacional</h2>
          <p className={styles.subtitle}>
            Presente em todas as regiões do Brasil com infraestrutura robusta
            para garantir suas entregas
          </p>

          <div className={styles.statsGrid}>
            <div className={styles.statCard}>
              <div className={styles.statNumber}>27</div>
              <div className={styles.statLabel}>Estados</div>
              <p className={styles.statDescription}>Cobertura em todos os estados brasileiros</p>
            </div>

            <div className={styles.statCard}>
              <div className={styles.statNumber}>120+</div>
              <div className={styles.statLabel}>Aeroportos</div>
              <p className={styles.statDescription}>Acesso aos principais aeroportos nacionais</p>
            </div>

            <div className={styles.statCard}>
              <div className={styles.statNumber}>24/7</div>
              <div className={styles.statLabel}>Operação</div>
              <p className={styles.statDescription}>Disponibilidade contínua todos os dias</p>
            </div>

            <div className={styles.statCard}>
              <div className={styles.statNumber}>100%</div>
              <div className={styles.statLabel}>Rastreamento</div>
              <p className={styles.statDescription}>Monitoramento integral de suas cargas</p>
            </div>
          </div>

          <div className={styles.highlights}>
            <h3 className={styles.highlightTitle}>Infraestrutura Estratégica</h3>
            <ul className={styles.highlightList}>
              <li>Centros de distribuição em principais hubs logísticos</li>
              <li>Parcerias com os principais aeroportos brasileiros</li>
              <li>Frotas especializadas e atualizada</li>
              <li>Sistemas de rastreamento em tempo real</li>
              <li>Equipes treinadas e certificadas</li>
            </ul>
          </div>
        </div>

        <div className={styles.imageArea}>
          <Image
            src="https://images.unsplash.com/photo-1578575437467-b78d45ce2e2c?w=500&h=600&fit=crop"
            alt="Mapa de cobertura logística nacional"
            width={500}
            height={600}
            className={styles.image}
          />
          <div className={styles.mapOverlay}></div>
        </div>
      </div>
    </section>
  );
}
