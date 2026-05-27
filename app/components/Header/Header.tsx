"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./Header.module.css";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        {/* Logo */}
        <div className={styles.logoArea}>
          <Link href="/">
            <div className={styles.logo}>
              <div className={styles.logoIcon}>CE</div>
              <div className={styles.logoText}>
                <span className={styles.logoMain}>Castro Express</span>
                <span className={styles.logoSub}>Cargo</span>
              </div>
            </div>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className={styles.desktopNav}>
          <button
            onClick={() => scrollToSection("about")}
            className={styles.navLink}
          >
            Sobre
          </button>
          <button
            onClick={() => scrollToSection("services")}
            className={styles.navLink}
          >
            Serviços
          </button>
          <button
            onClick={() => scrollToSection("coverage")}
            className={styles.navLink}
          >
            Cobertura
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className={styles.navLink}
          >
            Contato
          </button>
        </nav>

        {/* WhatsApp CTA */}
        <a
          href="https://wa.me/5511999999999?text=Olá%20Castro%20Express%20Cargo%21%20Gostaria%20de%20mais%20informações%20sobre%20os%20serviços."
          target="_blank"
          rel="noopener noreferrer"
          className={styles.whatsappBtn}
          aria-label="Contato via WhatsApp"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004c-1.769 0-3.44.469-4.923 1.36l-.354.208-3.66-.96.976 3.558-.229.364c-.945 1.494-1.445 3.222-1.445 5.05 0 5.195 4.23 9.426 9.426 9.426 2.528 0 4.906-.979 6.694-2.75 1.788-1.776 2.77-4.132 2.77-6.677 0-5.195-4.231-9.426-9.426-9.426m7.339 17.773c-1.999 1.986-4.681 3.084-7.339 3.084-5.823 0-10.563-4.739-10.563-10.563 0-1.875.496-3.704 1.431-5.323l.09-.152-1.122-4.084 4.342 1.141.147-.074c1.704-.952 3.68-1.455 5.705-1.455 5.823 0 10.563 4.739 10.563 10.563 0 2.819-1.108 5.468-3.121 7.463" />
          </svg>
          WhatsApp
        </a>

        {/* Mobile Menu Button */}
        <button
          className={styles.hamburgerBtn}
          onClick={toggleMobileMenu}
          aria-label="Menu"
          aria-expanded={isMobileMenuOpen}
        >
          <span className={styles.hamburgerLine}></span>
          <span className={styles.hamburgerLine}></span>
          <span className={styles.hamburgerLine}></span>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <nav className={styles.mobileNav}>
          <button
            onClick={() => scrollToSection("about")}
            className={styles.mobileNavLink}
          >
            Sobre
          </button>
          <button
            onClick={() => scrollToSection("services")}
            className={styles.mobileNavLink}
          >
            Serviços
          </button>
          <button
            onClick={() => scrollToSection("coverage")}
            className={styles.mobileNavLink}
          >
            Cobertura
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className={styles.mobileNavLink}
          >
            Contato
          </button>
          <a
            href="https://wa.me/5511999999999?text=Olá%20Castro%20Express%20Cargo%21%20Gostaria%20de%20mais%20informações%20sobre%20os%20serviços."
            target="_blank"
            rel="noopener noreferrer"
            className={styles.mobileWhatsappBtn}
          >
            WhatsApp
          </a>
        </nav>
      )}
    </header>
  );
}
