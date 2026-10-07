document.addEventListener("DOMContentLoaded", function () {
    // 1. INJEÇÃO DO CABEÇALHO FINO
    const headerHTML = `
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Aptos:wght@400;600;700;800&display=swap');
        
        :root {
            --primary: #0B1F33;
            --steel: #66717A;
            --white: #FFFFFF;
            --accent: #1769AA;
            --accent-hover: #114F80;
            --border-color: #D5DADD;
            --text-light: #D9E0E5;
        }

        .site-header { 
            background: var(--primary); 
            color: var(--white); 
            padding: 0.6rem 8%; 
            display: flex; 
            justify-content: space-between; 
            align-items: center; 
            position: sticky; 
            top: 0; 
            z-index: 1000; 
            box-shadow: 0 2px 10px rgba(0,0,0,0.15); 
            height: 60px;
            font-family: 'Aptos', sans-serif;
        }
        .site-header .logo h1 { font-size: 1.6rem; font-weight: 800; letter-spacing: 1px; color: var(--white); margin: 0; }
        .site-header .logo span { color: var(--accent); }
        .site-header .slogan-tag { font-size: 0.75rem; color: var(--text-light); font-style: italic; display: block; }

        .site-header nav { display: flex; gap: 0.8rem; align-items: center; }
        .site-header .nav-link { text-decoration: none; color: var(--white); font-size: 0.9rem; font-weight: 600; padding: 0.4rem 0.8rem; border-radius: 4px; transition: 0.3s; }
        .site-header .nav-link:hover, .site-header .nav-link.active { background: var(--accent); color: var(--white); }
        .site-header .btn-cta-nav { background: var(--accent); color: var(--white); padding: 0.5rem 1rem; border-radius: 4px; text-decoration: none; font-weight: bold; font-size: 0.9rem; transition: 0.3s; }
        .site-header .btn-cta-nav:hover { background: var(--accent-hover); }

        /* REGRAS DAS ANIMAÇÕES DE SCROLL */
        .reveal { opacity: 0; transform: translateY(30px); transition: all 0.7s ease; }
        .reveal.active { opacity: 1; transform: translateY(0); }
        .reveal-scale { opacity: 0; transform: scale(0.95); transition: all 0.7s ease; }
        .reveal-scale.active { opacity: 1; transform: scale(1); }
    </style>

    <header class="site-header">
        <div class="logo">
            <h1>CORIEL<span>.</span></h1>
            <span class="slogan-tag">O seu parceiro de aço!</span>
        </div>
        <nav>
            <a href="index.html" class="nav-link">Home</a>
            <a href="empresa.html" class="nav-link">Sobre Nós</a>
            <a href="produtos.html" class="nav-link">Produtos</a>
            <a href="contacto.html" class="nav-link">Contactos</a>
            <a href="contacto.html" class="btn-cta-nav">Solicitar Orçamento</a>
        </nav>
    </header>
    `;

    // Injeta o cabeçalho no topo da página
    document.body.insertAdjacentHTML("afterbegin", headerHTML);

    // Destaca o link da página atual no menu
    let currentPage = window.location.pathname.split("/").pop() || "index.html";
    document.querySelectorAll(".site-header .nav-link").forEach(link => {
        if (link.getAttribute("href") === currentPage) {
            link.classList.add("active");
        }
    });

    // 2. SISTEMA DE ANIMAÇÃO AO ROLAR O ECRÃ
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => entry.target.classList.add("active"), index * 100);
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll(".reveal, .reveal-scale").forEach((el) => observer.observe(el));
});
