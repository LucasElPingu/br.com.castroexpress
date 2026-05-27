import Image from "next/image";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.backgroundImage}>
        <Image
          src="https://images.unsplash.com/photo-1606629082220-49a037f4a447?w=1600&h=900&fit=crop"
          alt="Cargo aircraft loading"
          fill
          priority
          className={styles.image}
        />
        <div className={styles.overlay}></div>
      </div>

      <div className={styles.content}>
        <h1 className={styles.headline}>
          Transporte Aéreo e Soluções Logísticas Corporativas
        </h1>
        <p className={styles.subtitle}>
          Velocidade, segurança e confiabilidade na entrega de suas cargas em
          todo o Brasil. Parceiro estratégico para suas necessidades logísticas.
        </p>

        <div className={styles.ctaContainer}>
          <a
            href="https://wa.me/5511999999999?text=Olá%20Castro%20Express%20Cargo%21%20Gostaria%20de%20uma%20cotação%20para%20meus%20serviços%20logísticos."
            target="_blank"
            rel="noopener noreferrer"
            className={styles.primaryBtn}
          >
            Solicitar Cotação via WhatsApp
          </a>
          <button className={styles.secondaryBtn}>
            Saiba Mais Sobre Nossos Serviços
          </button>
        </div>
      </div>

      <div className={styles.scrollIndicator}>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          aria-hidden="true"
        >
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </div>
    </section>
  );
}
