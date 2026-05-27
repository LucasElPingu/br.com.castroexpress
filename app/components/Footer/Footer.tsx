import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.contentGrid}>
          {/* Company Info */}
          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>Castro Express Cargo</h3>
            <p className={styles.description}>
              Soluções completas em transporte aéreo e logística corporativa com
              cobertura nacional.
            </p>
            <div className={styles.socialLinks}>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className={styles.socialLink}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.474-2.237-1.664-2.237-1.004 0-1.601.671-1.863 1.32-.096.233-.12.559-.12.887v5.599h-3.554s.048-9.095 0-10.043h3.554v1.423c.442-.681 1.232-1.651 2.995-1.651 2.188 0 3.83 1.43 3.83 4.504v5.767zM5.337 8.855c-1.144 0-1.915-.759-1.915-1.707 0-.955.771-1.707 1.956-1.707 1.185 0 1.916.752 1.938 1.707 0 .948-.753 1.707-1.979 1.707zm1.52 11.597H3.819V9.413h2.038v10.039zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
                </svg>
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className={styles.socialLink}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className={styles.socialLink}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0m5.521 17.959h-11.04V5.541h11.04v12.418zm-5.52-10.23c-1.604 0-2.917 1.313-2.917 2.917s1.313 2.917 2.917 2.917 2.917-1.313 2.917-2.917-1.313-2.917-2.917-2.917zM18.521 5.541h-1.573v-1.573h1.573v1.573z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>Navegação Rápida</h3>
            <ul className={styles.linksList}>
              <li>
                <a href="#about" className={styles.link}>
                  Sobre Nós
                </a>
              </li>
              <li>
                <a href="#services" className={styles.link}>
                  Serviços
                </a>
              </li>
              <li>
                <a href="#coverage" className={styles.link}>
                  Cobertura
                </a>
              </li>
              <li>
                <a href="#contact" className={styles.link}>
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>Nossos Serviços</h3>
            <ul className={styles.linksList}>
              <li>
                <a href="#services" className={styles.link}>
                  Transporte Aéreo
                </a>
              </li>
              <li>
                <a href="#services" className={styles.link}>
                  Logística Expressa
                </a>
              </li>
              <li>
                <a href="#services" className={styles.link}>
                  Entregas Corporativas
                </a>
              </li>
              <li>
                <a href="#services" className={styles.link}>
                  Rastreamento 24/7
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>Contato</h3>
            <div className={styles.contactInfo}>
              <p>
                <strong>Telefone:</strong>
                <br />
                <a href="tel:+5511999999999" className={styles.link}>
                  (11) 99999-9999
                </a>
              </p>
              <p>
                <strong>E-mail:</strong>
                <br />
                <a
                  href="mailto:contato@castroexpress.com.br"
                  className={styles.link}
                >
                  contato@castroexpress.com.br
                </a>
              </p>
            </div>
            <a
              href="https://wa.me/5511999999999"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.whatsappLink}
            >
              Fale conosco via WhatsApp
            </a>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className={styles.bottom}>
          <div className={styles.divider}></div>
          <div className={styles.bottomContent}>
            <p className={styles.copyright}>
              &copy; {currentYear} Castro Express Cargo. Todos os direitos
              reservados.
            </p>
            <div className={styles.bottomLinks}>
              <a href="#" className={styles.bottomLink}>
                Política de Privacidade
              </a>
              <a href="#" className={styles.bottomLink}>
                Termos de Serviço
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
