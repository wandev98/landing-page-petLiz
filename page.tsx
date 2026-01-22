"use client"

/**
 * =====================================================
 * PET SHOP LIZ - Landing Page
 * =====================================================
 * Arquivo: app/page.tsx
 * Descrição: Landing page completa do Pet Shop Liz
 * com todas as seções: Home, Serviços, Sobre e Contato
 * =====================================================
 */

import { useState, useEffect } from "react"

export default function PetShopLiz() {
  // Estado para controlar o menu mobile
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  // Estado para controlar a seção ativa na navegação
  const [activeSection, setActiveSection] = useState("home")

  // Efeito para detectar scroll e atualizar seção ativa
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "servicos", "sobre", "contato"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Função para scroll suave
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setMobileMenuOpen(false)
  }

  return (
    <>
      {/* Importa Font Awesome e Google Fonts */}
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
      />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link
        href="https://fonts.googleapis.com/css2?family=Fredoka:wght@400;500;600;700&family=Poppins:wght@300;400;500;600;700&display=swap"
        rel="stylesheet"
      />

      <style>{`
        /* Variáveis CSS */
        :root {
          --color-primary: #1a5f2a;
          --color-primary-light: #2e8b3e;
          --color-secondary: #f7d000;
          --color-accent: #e63946;
          --color-white: #ffffff;
          --color-light: #f8f9fa;
          --color-gray: #6c757d;
          --color-dark: #212529;
          --font-primary: 'Fredoka', sans-serif;
          --font-secondary: 'Poppins', sans-serif;
          --shadow-sm: 0 2px 4px rgba(0, 0, 0, 0.1);
          --shadow-md: 0 4px 6px rgba(0, 0, 0, 0.15);
          --shadow-lg: 0 10px 25px rgba(0, 0, 0, 0.2);
          --radius-sm: 8px;
          --radius-md: 16px;
          --radius-lg: 24px;
          --radius-full: 50%;
          --transition: all 0.3s ease;
        }

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        html {
          scroll-behavior: smooth;
        }

        body {
          font-family: var(--font-secondary);
          font-size: 16px;
          line-height: 1.6;
          color: var(--color-dark);
          background-color: var(--color-white);
          overflow-x: hidden;
        }

        ul {
          list-style: none;
        }

        a {
          text-decoration: none;
          color: inherit;
        }

        img {
          max-width: 100%;
          height: auto;
          display: block;
        }

        /* Header */
        header {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 1000;
          background: var(--color-white);
          box-shadow: var(--shadow-sm);
        }

#navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 5%;
  max-width: 1400px;
  margin: 0 auto;
  position: relative;
  }

        .nav-logo {
          display: flex;
          align-items: center;
          gap: 10px;
          font-family: var(--font-primary);
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--color-primary);
          transition: var(--transition);
          cursor: pointer;
        }

        #nav_logo {
          font-size: 1.8rem;
          color: var(--color-secondary);
        }

        .nav-logo:hover {
          transform: scale(1.05);
        }

        #nav_list {
          display: flex;
          gap: 30px;
        }

        .nav-item a {
          font-size: 1rem;
          font-weight: 500;
          color: var(--color-dark);
          padding: 8px 12px;
          border-radius: var(--radius-sm);
          transition: var(--transition);
          position: relative;
          cursor: pointer;
        }

        .nav-item a::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 50%;
          width: 0;
          height: 3px;
          background: var(--color-secondary);
          transform: translateX(-50%);
          transition: var(--transition);
          border-radius: 2px;
        }

        .nav-item a:hover::after,
        .nav-item.active a::after {
          width: 100%;
        }

        .nav-item a:hover,
        .nav-item.active a {
          color: var(--color-primary);
        }

        .btn-default {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 12px 24px;
          font-family: var(--font-secondary);
          font-size: 0.95rem;
          font-weight: 600;
          color: var(--color-white);
          background: var(--color-primary);
          border: none;
          border-radius: var(--radius-md);
          cursor: pointer;
          transition: var(--transition);
          text-decoration: none;
        }

        .btn-default:hover {
          background: var(--color-primary-light);
          transform: translateY(-2px);
          box-shadow: var(--shadow-md);
        }

        .btn-whatsapp {
          background: #25d366;
        }

        .btn-whatsapp:hover {
          background: #128c7e;
        }

#mobile_btn {
        display: none;
        background: transparent;
        border: none;
        font-size: 1.8rem;
        color: var(--color-primary);
        cursor: pointer;
        padding: 8px;
        z-index: 1001;
        transition: var(--transition);
        }

        #mobile_btn:hover {
        color: var(--color-secondary);
        transform: scale(1.1);
        }

#mobile_menu {
  display: none;
  position: absolute;
  top: 100%;
  left: -5%;
  right: -5%;
  width: calc(100% + 10%);
  background: var(--color-white);
  padding: 20px 5%;
  box-shadow: var(--shadow-lg);
  flex-direction: column;
  gap: 20px;
  z-index: 999;
  animation: slideDown 0.3s ease;
  border-top: 2px solid var(--color-primary);
  }

        @keyframes slideDown {
        from {
          opacity: 0;
          transform: translateY(-10px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
        }

        #mobile_menu.active {
        display: flex;
        }

        #mobile_nav_list {
          display: flex;
          flex-direction: column;
          gap: 5px;
          width: 100%;
        }

        #mobile_nav_list .nav-item a {
          display: block;
          padding: 15px 20px;
          font-size: 1.1rem;
          font-weight: 500;
          color: var(--color-dark);
          border-radius: var(--radius-sm);
          transition: var(--transition);
          cursor: pointer;
        }

        #mobile_nav_list .nav-item a:hover {
          background: var(--color-light);
          color: var(--color-primary);
          padding-left: 25px;
        }

        #mobile_menu .btn-whatsapp {
          margin-top: 10px;
          text-align: center;
          justify-content: center;
        }

        /* Home Section */
        #home {
          display: flex;
          align-items: center;
          justify-content: space-between;
          min-height: 100vh;
          padding: 120px 5% 60px;
          background: linear-gradient(135deg, #e8f5e9 0%, #fff9c4 100%);
          position: relative;
          overflow: hidden;
        }

        .shape {
          position: absolute;
          top: -100px;
          right: -100px;
          width: 400px;
          height: 400px;
          background: var(--color-secondary);
          border-radius: var(--radius-full);
          opacity: 0.1;
          z-index: 0;
        }

        #cta {
          max-width: 550px;
          z-index: 1;
        }

        .title {
          font-family: var(--font-primary);
          font-size: 3rem;
          font-weight: 700;
          color: var(--color-dark);
          line-height: 1.2;
          margin-bottom: 20px;
        }

        .title span {
          color: var(--color-primary);
          position: relative;
        }

        .title span::after {
          content: '';
          position: absolute;
          bottom: 5px;
          left: 0;
          width: 100%;
          height: 8px;
          background: var(--color-secondary);
          z-index: -1;
          opacity: 0.5;
        }

        .description {
          font-size: 1.1rem;
          color: var(--color-gray);
          margin-bottom: 30px;
          line-height: 1.8;
        }

        #cta_buttons {
          display: flex;
          align-items: center;
          gap: 20px;
          margin-bottom: 30px;
          flex-wrap: wrap;
        }

        #phone_button {
          display: flex;
          align-items: center;
          gap: 10px;
          font-weight: 600;
          color: var(--color-dark);
          transition: var(--transition);
        }

        #phone_button button {
          width: 48px;
          height: 48px;
          padding: 0;
          border-radius: var(--radius-full);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        #phone_button:hover {
          color: var(--color-primary);
        }

        .social-media-buttons {
          display: flex;
          gap: 15px;
        }

        .social-media-buttons a {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 48px;
          height: 48px;
          background: var(--color-white);
          border-radius: var(--radius-full);
          font-size: 1.4rem;
          color: var(--color-primary);
          box-shadow: var(--shadow-sm);
          transition: var(--transition);
        }

        .social-media-buttons a:hover {
          transform: translateY(-3px);
          box-shadow: var(--shadow-md);
        }

        .social-media-buttons a.whatsapp:hover {
          background: #25d366;
          color: var(--color-white);
        }

        .social-media-buttons a.instagram:hover {
          background: linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888);
          color: var(--color-white);
        }

        .social-media-buttons a.facebook:hover {
          background: #1877f2;
          color: var(--color-white);
        }

        #banner {
          max-width: 500px;
          z-index: 1;
          animation: float 3s ease-in-out infinite;
        }

        #banner img {
          width: 100%;
          filter: drop-shadow(0 10px 20px rgba(0,0,0,0.15));
        }

        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }

        /* Services Section */
        #servicos {
          padding: 80px 5%;
          background: var(--color-white);
        }

        .section-title {
          font-family: var(--font-primary);
          font-size: 2.5rem;
          font-weight: 700;
          color: var(--color-primary);
          text-align: center;
          margin-bottom: 10px;
        }

        .section-subtitle {
          font-size: 1.1rem;
          color: var(--color-gray);
          text-align: center;
          margin-bottom: 50px;
          font-weight: 400;
        }

        #services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 30px;
          max-width: 1200px;
          margin: 0 auto;
        }

        .service-card {
          background: var(--color-white);
          padding: 30px;
          border-radius: var(--radius-lg);
          box-shadow: var(--shadow-md);
          transition: var(--transition);
          border: 2px solid transparent;
        }

        .service-card:hover {
          transform: translateY(-10px);
          box-shadow: var(--shadow-lg);
          border-color: var(--color-secondary);
        }

        .service-icon {
          width: 70px;
          height: 70px;
          background: linear-gradient(135deg, var(--color-primary), var(--color-primary-light));
          border-radius: var(--radius-md);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 20px;
        }

        .service-icon i {
          font-size: 2rem;
          color: var(--color-white);
        }

        .service-title {
          font-family: var(--font-primary);
          font-size: 1.4rem;
          color: var(--color-dark);
          margin-bottom: 15px;
        }

        .service-description {
          font-size: 0.95rem;
          color: var(--color-gray);
          margin-bottom: 20px;
          line-height: 1.7;
        }

        .service-features {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .service-features li {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 0.9rem;
          color: var(--color-dark);
        }

        .service-features i {
          color: var(--color-primary);
          font-size: 0.9rem;
        }

        /* About Section */
        #sobre {
          padding: 80px 5%;
          background: linear-gradient(135deg, #fff9c4 0%, #e8f5e9 100%);
          display: flex;
          align-items: center;
          gap: 60px;
          flex-wrap: wrap;
        }

        .about-image {
          flex: 1;
          min-width: 300px;
          max-width: 500px;
        }

        .about-image img {
          width: 100%;
          border-radius: var(--radius-lg);
          box-shadow: var(--shadow-lg);
        }

        #about_content {
          flex: 1;
          min-width: 300px;
        }

        #about_content .section-title,
        #about_content .section-subtitle {
          text-align: left;
        }

        .about-cards {
          display: flex;
          flex-direction: column;
          gap: 25px;
        }

        .about-card {
          background: var(--color-white);
          padding: 25px;
          border-radius: var(--radius-md);
          box-shadow: var(--shadow-sm);
          transition: var(--transition);
        }

        .about-card:hover {
          box-shadow: var(--shadow-md);
          transform: translateX(5px);
        }

        .about-card-icon {
          width: 50px;
          height: 50px;
          background: var(--color-secondary);
          border-radius: var(--radius-sm);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 15px;
        }

        .about-card-icon i {
          font-size: 1.5rem;
          color: var(--color-dark);
        }

        .about-card h4 {
          font-family: var(--font-primary);
          font-size: 1.2rem;
          color: var(--color-primary);
          margin-bottom: 10px;
        }

        .about-card p {
          font-size: 0.95rem;
          color: var(--color-gray);
          line-height: 1.7;
          margin-bottom: 10px;
        }

        .about-list {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .about-list li {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 0.95rem;
          color: var(--color-dark);
        }

        .about-list i {
          color: var(--color-secondary);
        }

        /* Contact Section */
        #contato {
          padding: 80px 5%;
          background: var(--color-white);
        }

        .contact-container {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 40px;
        }

        .contact-info {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .contact-card {
          display: flex;
          align-items: flex-start;
          gap: 20px;
          padding: 25px;
          background: var(--color-light);
          border-radius: var(--radius-md);
          transition: var(--transition);
        }

        .contact-card:hover {
          box-shadow: var(--shadow-sm);
          transform: translateX(5px);
        }

        .contact-icon {
          width: 60px;
          height: 60px;
          background: var(--color-primary);
          border-radius: var(--radius-full);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .contact-icon i {
          font-size: 1.5rem;
          color: var(--color-white);
        }

        .contact-details h4 {
          font-family: var(--font-primary);
          font-size: 1.2rem;
          color: var(--color-dark);
          margin-bottom: 8px;
        }

        .contact-details p {
          font-size: 0.95rem;
          color: var(--color-gray);
          margin-bottom: 4px;
        }

        .contact-link {
          display: inline-block;
          color: var(--color-primary);
          font-weight: 500;
          margin-top: 8px;
          transition: var(--transition);
        }

        .contact-link:hover {
          color: var(--color-primary-light);
          text-decoration: underline;
        }

        .contact-map {
          border-radius: var(--radius-lg);
          overflow: hidden;
          box-shadow: var(--shadow-md);
          height: 100%;
          min-height: 400px;
        }

        .contact-map iframe {
          width: 100%;
          height: 100%;
          border: none;
        }

        /* Footer */
        footer {
          background: var(--color-dark);
          color: var(--color-white);
          padding: 60px 5% 30px;
        }

        .footer-content {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 40px;
          margin-bottom: 40px;
        }

        .footer-section h4 {
          font-family: var(--font-primary);
          font-size: 1.3rem;
          color: var(--color-secondary);
          margin-bottom: 20px;
        }

        .footer-section p,
        .footer-section li {
          font-size: 0.95rem;
          color: #b0b0b0;
          line-height: 1.8;
        }

        .footer-section ul {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .footer-section a {
          color: #b0b0b0;
          transition: var(--transition);
        }

        .footer-section a:hover {
          color: var(--color-secondary);
        }

        .footer-social {
          display: flex;
          gap: 15px;
          margin-top: 20px;
        }

        .footer-social a {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 45px;
          height: 45px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: var(--radius-full);
          font-size: 1.2rem;
          color: var(--color-white);
          transition: var(--transition);
        }

        .footer-social a:hover {
          background: var(--color-secondary);
          color: var(--color-dark);
          transform: translateY(-3px);
        }

        .footer-bottom {
          text-align: center;
          padding-top: 30px;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }

        .footer-bottom p {
          font-size: 0.9rem;
          color: #808080;
        }

        /* WhatsApp Floating Button */
        .whatsapp-float {
          position: fixed;
          bottom: 30px;
          right: 30px;
          width: 60px;
          height: 60px;
          background: #25d366;
          border-radius: var(--radius-full);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 2rem;
          color: var(--color-white);
          box-shadow: var(--shadow-lg);
          z-index: 999;
          transition: var(--transition);
          animation: pulse 2s infinite;
        }

        .whatsapp-float:hover {
          transform: scale(1.1);
          box-shadow: 0 15px 30px rgba(37, 211, 102, 0.4);
        }

        @keyframes pulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.4); }
          50% { box-shadow: 0 0 0 15px rgba(37, 211, 102, 0); }
        }

        /* Responsive */
        @media (max-width: 992px) {
          #home {
            flex-direction: column;
            text-align: center;
            padding-top: 100px;
          }

          #cta {
            max-width: 100%;
          }

          #cta_buttons {
            justify-content: center;
          }

          .social-media-buttons {
            justify-content: center;
          }

          #banner {
            max-width: 350px;
            margin-top: 40px;
          }

          #sobre {
            flex-direction: column;
          }

          .about-image {
            max-width: 400px;
          }

          #about_content .section-title,
          #about_content .section-subtitle {
            text-align: center;
          }

          .contact-container {
            grid-template-columns: 1fr;
          }
        }

@media (max-width: 768px) {
        #nav_list {
        display: none;
        }

        #navbar .btn-whatsapp {
        display: none;
        }

        #mobile_btn {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 44px;
        height: 44px;
        }

        .nav-logo {
        font-size: 1.2rem;
        }

        #nav_logo {
        font-size: 1.4rem;
        }

        .title {
        font-size: 2.2rem;
        }

        .section-title {
        font-size: 2rem;
        }

        #home {
        flex-direction: column;
        text-align: center;
        padding-top: 100px;
        }

        #banner {
        max-width: 280px;
        margin: 30px auto 0;
        }
        }

        @media (max-width: 480px) {
          .title {
            font-size: 1.8rem;
          }

          #cta_buttons {
            flex-direction: column;
          }

          #phone_button {
            justify-content: center;
          }

          .contact-card {
            flex-direction: column;
            text-align: center;
          }

          .whatsapp-float {
            bottom: 20px;
            right: 20px;
            width: 50px;
            height: 50px;
            font-size: 1.6rem;
          }
        }
      `}</style>

      {/* HEADER */}
      <header>
        <nav id="navbar">
          <div className="nav-logo" onClick={() => scrollToSection("home")}>
            <i className="fa-solid fa-paw" id="nav_logo"></i>
            <span>Pet Shop Liz</span>
          </div>

          <ul id="nav_list">
            <li className={`nav-item ${activeSection === "home" ? "active" : ""}`}>
              <a onClick={() => scrollToSection("home")}>Inicio</a>
            </li>
            <li className={`nav-item ${activeSection === "servicos" ? "active" : ""}`}>
              <a onClick={() => scrollToSection("servicos")}>Servicos</a>
            </li>
            <li className={`nav-item ${activeSection === "sobre" ? "active" : ""}`}>
              <a onClick={() => scrollToSection("sobre")}>Sobre</a>
            </li>
            <li className={`nav-item ${activeSection === "contato" ? "active" : ""}`}>
              <a onClick={() => scrollToSection("contato")}>Contato</a>
            </li>
          </ul>

          <a href="https://wa.me/5511962685711" target="_blank" rel="noopener noreferrer" className="btn-default btn-whatsapp">
            <i className="fa-brands fa-whatsapp"></i>
            Fale Conosco
          </a>

          <button id="mobile_btn" aria-label="Abrir menu" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <i className={`fa-solid ${mobileMenuOpen ? "fa-times" : "fa-bars"}`}></i>
          </button>

          {/* Menu Mobile - Aparece ao clicar no botao hamburguer */}
          <div id="mobile_menu" className={mobileMenuOpen ? "active" : ""}>
            <ul id="mobile_nav_list">
              <li className="nav-item">
                <a onClick={() => scrollToSection("home")}>Inicio</a>
              </li>
              <li className="nav-item">
                <a onClick={() => scrollToSection("servicos")}>Servicos</a>
              </li>
              <li className="nav-item">
                <a onClick={() => scrollToSection("sobre")}>Sobre</a>
              </li>
              <li className="nav-item">
                <a onClick={() => scrollToSection("contato")}>Contato</a>
              </li>
            </ul>
            <a href="https://wa.me/5511962685711" target="_blank" rel="noopener noreferrer" className="btn-default btn-whatsapp">
              <i className="fa-brands fa-whatsapp"></i>
              Fale Conosco
            </a>
          </div>
        </nav>
      </header>

      {/* MAIN CONTENT */}
      <main id="content">
        {/* HOME SECTION */}
        <section id="home">
          <div className="shape"></div>

          <div id="cta">
            <h1 className="title">
              Cuidamos do seu <span>Pet</span> com muito amor!
            </h1>
            <p className="description">
              Pet Shop Liz - Jaragua | Banho e Tosa | Creche e Hotel para caes. 
              Oferecemos os melhores servicos para deixar seu pet feliz e saudavel!
            </p>

            <div id="cta_buttons">
              <a onClick={() => scrollToSection("servicos")} className="btn-default" style={{ cursor: "pointer" }}>
                <i className="fa-solid fa-paw"></i>
                Ver Servicos
              </a>
              <a href="tel:+5511962685711" id="phone_button">
                <button className="btn-default">
                  <i className="fa-solid fa-phone"></i>
                </button>
                (11) 96268-5711
              </a>
            </div>

            <div className="social-media-buttons">
              <a href="https://wa.me/5511962685711" target="_blank" rel="noopener noreferrer" className="whatsapp" aria-label="WhatsApp">
                <i className="fa-brands fa-whatsapp"></i>
              </a>
              <a href="https://instagram.com/petshopliz" target="_blank" rel="noopener noreferrer" className="instagram" aria-label="Instagram">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href="https://facebook.com/petshopliz" target="_blank" rel="noopener noreferrer" className="facebook" aria-label="Facebook">
                <i className="fa-brands fa-facebook"></i>
              </a>
            </div>
          </div>

          <div id="banner">
            <img 
src="/images/logo-petshop-liz.png"
              alt="Logo Pet Shop Liz com cachorro, gato e hamster"
            />
          </div>
        </section>

        {/* SERVICES SECTION */}
        <section id="servicos">
          <h2 className="section-title">Nossos Servicos</h2>
          <h3 className="section-subtitle">Tudo para o bem-estar do seu pet</h3>

          <div id="services-grid">
            <div className="service-card">
              <div className="service-icon">
                <i className="fa-solid fa-house-chimney"></i>
              </div>
              <h3 className="service-title">Creche (Daycare)</h3>
              <p className="service-description">
                Deixe seu pet em um ambiente seguro e divertido enquanto voce trabalha. 
                Atividades supervisionadas, socializacao com outros pets e muito carinho durante todo o dia.
              </p>
              <ul className="service-features">
                <li><i className="fa-solid fa-check"></i> Ambiente climatizado</li>
                <li><i className="fa-solid fa-check"></i> Supervisao constante</li>
                <li><i className="fa-solid fa-check"></i> Atividades recreativas</li>
              </ul>
            </div>

            <div className="service-card">
              <div className="service-icon">
                <i className="fa-solid fa-bed"></i>
              </div>
              <h3 className="service-title">Hotel para Caes</h3>
              <p className="service-description">
                Viaje tranquilo sabendo que seu pet esta em boas maos. 
                Oferecemos hospedagem com todo conforto, alimentacao de qualidade e acompanhamento 24 horas.
              </p>
              <ul className="service-features">
                <li><i className="fa-solid fa-check"></i> Hospedagem diaria</li>
                <li><i className="fa-solid fa-check"></i> Alimentacao inclusa</li>
                <li><i className="fa-solid fa-check"></i> Monitoramento 24h</li>
              </ul>
            </div>

            <div className="service-card">
              <div className="service-icon">
                <i className="fa-solid fa-shower"></i>
              </div>
              <h3 className="service-title">Banho e Tosa</h3>
              <p className="service-description">
                Seu pet merece ficar lindo e cheiroso! Contamos com profissionais experientes 
                e produtos de alta qualidade para deixar seu amigo com a melhor aparencia.
              </p>
              <ul className="service-features">
                <li><i className="fa-solid fa-check"></i> Produtos premium</li>
                <li><i className="fa-solid fa-check"></i> Profissionais qualificados</li>
                <li><i className="fa-solid fa-check"></i> Hidratacao e perfume</li>
              </ul>
            </div>

            <div className="service-card">
              <div className="service-icon">
                <i className="fa-solid fa-car"></i>
              </div>
              <h3 className="service-title">Taxi Dog</h3>
              <p className="service-description">
                Sem tempo para trazer seu pet? Nosso servico de Taxi Dog busca e leva seu 
                amiguinho com seguranca e conforto, direto na porta da sua casa.
              </p>
              <ul className="service-features">
                <li><i className="fa-solid fa-check"></i> Busca e entrega</li>
                <li><i className="fa-solid fa-check"></i> Veiculo adaptado</li>
                <li><i className="fa-solid fa-check"></i> Motorista treinado</li>
              </ul>
            </div>
          </div>
        </section>

        {/* ABOUT SECTION */}
        <section id="sobre">
          <div className="about-image">
            <img 
src="/images/banner-petshop-liz.png"
              alt="Banner Pet Shop Liz - Tudo para o seu Pet"
            />
          </div>

          <div id="about_content">
            <h2 className="section-title">Sobre Nos</h2>
            <h3 className="section-subtitle">Conheca nossa historia</h3>

            <div className="about-cards">
              <div className="about-card">
                <div className="about-card-icon">
                  <i className="fa-solid fa-heart"></i>
                </div>
                <h4>Nossa Historia</h4>
                <p>
                  A Pet Shop Liz nasceu em 2015 do sonho de Elizabete Santos, uma apaixonada por animais 
                  que transformou sua garagem em um pequeno espaco de cuidados para pets do bairro. 
                  O que comecou como um servico de banho e tosa para vizinhos, rapidamente cresceu pela 
                  qualidade do atendimento e o carinho dedicado a cada animal.
                </p>
                <p>
                  Hoje, apos 10 anos de dedicacao, nos tornamos referencia em cuidados pet na regiao do 
                  Jaragua e bairros vizinhos, sempre mantendo o mesmo amor e atencao que nos trouxe ate aqui.
                </p>
              </div>

              <div className="about-card">
                <div className="about-card-icon">
                  <i className="fa-solid fa-location-dot"></i>
                </div>
                <h4>Nossa Regiao</h4>
                <p>
                  Estamos localizados no coracao do bairro Sao Joao, na zona norte de Sao Paulo, 
                  atendendo toda a regiao do Jaragua e bairros proximos como Pirituba, Taipas, 
                  Brasilandia, Perus e Freguesia do O.
                </p>
                <p>
                  <strong>Ponto de Referencia:</strong> Proximo a Estacao Jaragua da CPTM e ao 
                  Parque Estadual do Jaragua, em uma rua tranquila e de facil acesso.
                </p>
              </div>

              <div className="about-card">
                <div className="about-card-icon">
                  <i className="fa-solid fa-star"></i>
                </div>
                <h4>Nossos Diferenciais</h4>
                <ul className="about-list">
                  <li><i className="fa-solid fa-paw"></i> Atendimento personalizado para cada pet</li>
                  <li><i className="fa-solid fa-paw"></i> Equipe treinada e apaixonada por animais</li>
                  <li><i className="fa-solid fa-paw"></i> Ambiente seguro e higienizado</li>
                  <li><i className="fa-solid fa-paw"></i> Taxi Dog incluso em alguns servicos</li>
                  <li><i className="fa-solid fa-paw"></i> Precos justos e transparentes</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section id="contato">
          <h2 className="section-title">Entre em Contato</h2>
          <h3 className="section-subtitle">Estamos prontos para atender voce e seu pet</h3>

          <div className="contact-container">
            <div className="contact-info">
              <div className="contact-card">
                <div className="contact-icon">
                  <i className="fa-solid fa-location-dot"></i>
                </div>
                <div className="contact-details">
                  <h4>Endereco</h4>
                  <p>R. Alto Jurupari, 224</p>
                  <p>Sao Joao, Sao Paulo - SP</p>
                  <p>CEP: 02995-040</p>
                </div>
              </div>

              <div className="contact-card">
                <div className="contact-icon">
                  <i className="fa-brands fa-whatsapp"></i>
                </div>
                <div className="contact-details">
                  <h4>WhatsApp</h4>
                  <p>(11) 96268-5711</p>
                  <a href="https://wa.me/5511962685711" target="_blank" rel="noopener noreferrer" className="contact-link">
                    Clique para conversar
                  </a>
                </div>
              </div>

              <div className="contact-card">
                <div className="contact-icon">
                  <i className="fa-solid fa-envelope"></i>
                </div>
                <div className="contact-details">
                  <h4>Email</h4>
                  <p>contato@petshopliz.com.br</p>
                  <a href="mailto:contato@petshopliz.com.br" className="contact-link">
                    Enviar email
                  </a>
                </div>
              </div>

              <div className="contact-card">
                <div className="contact-icon">
                  <i className="fa-brands fa-instagram"></i>
                </div>
                <div className="contact-details">
                  <h4>Instagram</h4>
                  <p>@petshopliz</p>
                  <a href="https://instagram.com/petshopliz" target="_blank" rel="noopener noreferrer" className="contact-link">
                    Seguir no Instagram
                  </a>
                </div>
              </div>
            </div>

            <div className="contact-map">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.5!2d-46.77!3d-23.45!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDI3JzAwLjAiUyA0NsKwNDYnMTIuMCJX!5e0!3m2!1spt-BR!2sbr!4v1"
                title="Localizacao Pet Shop Liz"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer>
        <div className="footer-content">
          <div className="footer-section">
            <h4>Pet Shop Liz</h4>
            <p>
              Cuidando do seu pet com amor e dedicacao desde 2015. 
              Somos especialistas em banho e tosa, creche e hotel para caes na regiao do Jaragua.
            </p>
            <div className="footer-social">
              <a href="https://wa.me/5511962685711" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                <i className="fa-brands fa-whatsapp"></i>
              </a>
              <a href="https://instagram.com/petshopliz" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href="https://facebook.com/petshopliz" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <i className="fa-brands fa-facebook"></i>
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h4>Servicos</h4>
            <ul>
              <li><a onClick={() => scrollToSection("servicos")} style={{ cursor: "pointer" }}>Creche (Daycare)</a></li>
              <li><a onClick={() => scrollToSection("servicos")} style={{ cursor: "pointer" }}>Hotel para Caes</a></li>
              <li><a onClick={() => scrollToSection("servicos")} style={{ cursor: "pointer" }}>Banho e Tosa</a></li>
              <li><a onClick={() => scrollToSection("servicos")} style={{ cursor: "pointer" }}>Taxi Dog</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Contato</h4>
            <ul>
              <li><i className="fa-solid fa-location-dot"></i> R. Alto Jurupari, 224 - Sao Joao</li>
              <li><i className="fa-solid fa-phone"></i> (11) 96268-5711</li>
              <li><i className="fa-solid fa-envelope"></i> contato@petshopliz.com.br</li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Horario de Funcionamento</h4>
            <ul>
              <li>Segunda a Sexta: 8h as 19h</li>
              <li>Sabado: 8h as 17h</li>
              <li>Domingo: Fechado</li>
              <li>Feriados: Consulte</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2026 Pet Shop Liz - Todos os direitos reservados</p>
        </div>
      </footer>

      {/* WHATSAPP FLOATING BUTTON */}
      <a href="https://wa.me/5511962685711" target="_blank" rel="noopener noreferrer" className="whatsapp-float" aria-label="Fale conosco pelo WhatsApp">
        <i className="fa-brands fa-whatsapp"></i>
      </a>
    </>
  )
}
