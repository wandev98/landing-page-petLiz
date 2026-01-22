/**
 * =====================================================
 * PET SHOP LIZ - JavaScript
 * =====================================================
 * Arquivo: script.js
 * Descrição: Arquivo JavaScript para funcionalidades 
 * interativas da landing page do Pet Shop Liz.
 * 
 * Autor: Desenvolvedor Web
 * Data: Janeiro 2026
 * 
 * Funcionalidades:
 * 1. Menu Mobile (hambúrguer)
 * 2. Navegação ativa baseada na seção visível
 * 3. Scroll suave para links âncora
 * 4. Header com fundo ao scrollar
 * 5. Animações de scroll com ScrollReveal
 * 6. Lazy Loading para imagens
 * 7. Animação de números (contador)
 * 8. Validação de formulário (FUTURO)
 * 
 * Dependências:
 * - jQuery 3.7.1 (manipulação DOM)
 * - ScrollReveal (animações de scroll)
 * =====================================================
 */

// Importações necessárias
const $ = require('jquery');
const ScrollReveal = require('scrollreveal');

/**
 * Aguarda o documento estar completamente carregado
 * antes de executar o código JavaScript
 */
$(document).ready(function() {
    
    /**
     * =====================================================
     * 1. MENU MOBILE (HAMBÚRGUER)
     * =====================================================
     * Controla a abertura e fechamento do menu em 
     * dispositivos móveis ao clicar no botão hambúrguer
     */
    
    // Seleciona o botão do menu mobile
    const mobileBtn = $('#mobile_btn');
    
    // Seleciona o container do menu mobile
    const mobileMenu = $('#mobile_menu');
    
    /**
     * Evento de clique no botão do menu mobile
     * Alterna a classe 'active' para mostrar/esconder o menu
     */
    mobileBtn.on('click', function() {
        // Alterna a classe 'active' no menu mobile
        mobileMenu.toggleClass('active');
        
        // Alterna o ícone entre hambúrguer e X
        const icon = $(this).find('i');
        
        // Verifica se o menu está ativo
        if (mobileMenu.hasClass('active')) {
            // Muda para ícone X (fechar)
            icon.removeClass('fa-bars').addClass('fa-xmark');
        } else {
            // Muda para ícone hambúrguer
            icon.removeClass('fa-xmark').addClass('fa-bars');
        }
    });
    
    /**
     * Fecha o menu mobile ao clicar em um link de navegação
     * Melhora a experiência do usuário em dispositivos móveis
     */
    $('#mobile_nav_list .nav-item a').on('click', function() {
        // Remove a classe 'active' do menu
        mobileMenu.removeClass('active');
        
        // Retorna o ícone para hambúrguer
        mobileBtn.find('i').removeClass('fa-xmark').addClass('fa-bars');
    });
    
    /**
     * =====================================================
     * 2. NAVEGAÇÃO ATIVA BASEADA NA SEÇÃO VISÍVEL
     * =====================================================
     * Atualiza o item de navegação ativo conforme o 
     * usuário rola a página pelas diferentes seções
     */
    
    /**
     * Função que atualiza o item de navegação ativo
     * baseado na posição atual do scroll
     */
    function updateActiveNav() {
        // Obtém a posição atual do scroll
        const scrollPosition = $(window).scrollTop();
        
        // Itera sobre cada seção da página
        $('section').each(function() {
            // Obtém o topo da seção atual
            const sectionTop = $(this).offset().top - 100; // 100px de offset para o header
            
            // Obtém a altura da seção
            const sectionHeight = $(this).outerHeight();
            
            // Obtém o ID da seção
            const sectionId = $(this).attr('id');
            
            // Verifica se o scroll está dentro desta seção
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                // Remove a classe 'active' de todos os itens de navegação
                $('.nav-item').removeClass('active');
                
                // Adiciona a classe 'active' ao item correspondente à seção
                $(`.nav-item a[href="#${sectionId}"]`).parent().addClass('active');
            }
        });
    }
    
    // Executa a função quando o usuário rola a página
    $(window).on('scroll', updateActiveNav);
    
    // Executa uma vez ao carregar a página
    updateActiveNav();
    
    /**
     * =====================================================
     * 3. SCROLL SUAVE PARA LINKS ÂNCORA
     * =====================================================
     * Implementa scroll suave quando o usuário clica
     * em links de navegação internos (âncoras)
     */
    
    /**
     * Evento de clique em links que começam com #
     * Previne o comportamento padrão e faz scroll suave
     */
    $('a[href^="#"]').on('click', function(event) {
        // Previne o comportamento padrão do link
        event.preventDefault();
        
        // Obtém o destino do link (ID da seção)
        const target = $(this).attr('href');
        
        // Verifica se o destino existe na página
        if ($(target).length) {
            // Calcula a posição do destino
            const targetPosition = $(target).offset().top - 80; // 80px de offset para o header fixo
            
            // Anima o scroll até a posição do destino
            $('html, body').animate({
                scrollTop: targetPosition
            }, 800, 'swing'); // 800ms de duração, easing 'swing'
        }
    });
    
    /**
     * =====================================================
     * 4. HEADER COM FUNDO AO SCROLLAR
     * =====================================================
     * Adiciona/remove classe no header baseado na 
     * posição do scroll para efeito de transparência
     */
    
    /**
     * Função que controla a aparência do header
     * baseado na posição do scroll
     */
    function updateHeader() {
        // Obtém a posição atual do scroll
        const scrollPosition = $(window).scrollTop();
        
        // Seleciona o header
        const header = $('header');
        
        // Se scrollou mais que 50px
        if (scrollPosition > 50) {
            // Adiciona classe para header com fundo sólido
            header.addClass('scrolled');
        } else {
            // Remove classe para header transparente
            header.removeClass('scrolled');
        }
    }
    
    // Executa a função quando o usuário rola a página
    $(window).on('scroll', updateHeader);
    
    // Executa uma vez ao carregar a página
    updateHeader();
    
    /**
     * =====================================================
     * 5. ANIMAÇÕES DE SCROLL COM SCROLLREVEAL
     * =====================================================
     * Configura animações de entrada para elementos
     * conforme eles aparecem na viewport durante o scroll
     */
    
    // Configuração base do ScrollReveal
    const sr = ScrollReveal({
        origin: 'bottom',      // Elementos entram de baixo
        distance: '30px',      // Distância do movimento
        duration: 800,         // Duração da animação em ms
        delay: 100,            // Atraso antes de iniciar
        easing: 'ease-out',    // Tipo de easing
        reset: false           // Não repete a animação ao scrollar de volta
    });
    
    /**
     * Aplica animações aos diferentes elementos da página
     * Cada grupo tem configurações específicas
     */
    
    // Animação para o CTA (Call to Action) da home
    sr.reveal('#cta', {
        origin: 'left',        // Entra da esquerda
        distance: '50px',      // Distância maior
        delay: 200             // Atraso um pouco maior
    });
    
    // Animação para o banner/logo
    sr.reveal('#banner', {
        origin: 'right',       // Entra da direita
        distance: '50px',
        delay: 400             // Atraso maior para sequência
    });
    
    // Animação para títulos de seção
    sr.reveal('.section-title', {
        origin: 'top',         // Entra de cima
        distance: '20px',
        delay: 100
    });
    
    // Animação para subtítulos de seção
    sr.reveal('.section-subtitle', {
        origin: 'top',
        distance: '20px',
        delay: 200
    });
    
    // Animação para cards de serviço (sequencial)
    sr.reveal('.service-card', {
        origin: 'bottom',
        distance: '30px',
        interval: 150          // Intervalo entre cada card
    });
    
    // Animação para a imagem da seção Sobre
    sr.reveal('.about-image', {
        origin: 'left',
        distance: '50px',
        delay: 200
    });
    
    // Animação para cards da seção Sobre (sequencial)
    sr.reveal('.about-card', {
        origin: 'bottom',
        distance: '30px',
        interval: 200
    });
    
    // Animação para cards de contato (sequencial)
    sr.reveal('.contact-card', {
        origin: 'left',
        distance: '30px',
        interval: 100
    });
    
    // Animação para o mapa
    sr.reveal('.contact-map', {
        origin: 'right',
        distance: '50px',
        delay: 300
    });
    
    // Animação para botões de contato
    sr.reveal('.contact-buttons', {
        origin: 'bottom',
        distance: '30px',
        delay: 400
    });
    
    // Animação para itens do footer (sequencial)
    sr.reveal('#footer_items > div', {
        origin: 'bottom',
        distance: '20px',
        interval: 100
    });
    
    /**
     * =====================================================
     * 6. LAZY LOADING PARA IMAGENS (OPCIONAL)
     * =====================================================
     * Carrega imagens apenas quando elas estão próximas
     * de entrar na viewport para melhorar performance
     */
    
    // Verifica se o navegador suporta Intersection Observer
    if ('IntersectionObserver' in window) {
        // Cria o observador
        const imageObserver = new IntersectionObserver(function(entries, observer) {
            // Itera sobre as entradas observadas
            entries.forEach(function(entry) {
                // Se o elemento está visível
                if (entry.isIntersecting) {
                    // Obtém o elemento da imagem
                    const image = entry.target;
                    
                    // Se a imagem tem atributo data-src
                    if (image.dataset.src) {
                        // Define o src real da imagem
                        image.src = image.dataset.src;
                        
                        // Remove o atributo data-src
                        image.removeAttribute('data-src');
                    }
                    
                    // Para de observar a imagem
                    observer.unobserve(image);
                }
            });
        }, {
            // Configurações do observador
            rootMargin: '50px 0px', // Carrega 50px antes de entrar na viewport
            threshold: 0.1          // 10% visível para disparar
        });
        
        // Observa todas as imagens com data-src
        document.querySelectorAll('img[data-src]').forEach(function(img) {
            imageObserver.observe(img);
        });
    }
    
    /**
     * =====================================================
     * 7. ANIMAÇÃO DE NÚMEROS (CONTADOR)
     * =====================================================
     * Função para animar números de forma incremental
     * Pode ser usada para estatísticas ou métricas
     */
    
    /**
     * Função que anima um número de 0 até o valor final
     * @param {Element} element - Elemento que contém o número
     * @param {number} finalValue - Valor final do contador
     * @param {number} duration - Duração da animação em ms
     */
    function animateNumber(element, finalValue, duration) {
        // Valor inicial
        let startValue = 0;
        
        // Tempo inicial
        const startTime = performance.now();
        
        /**
         * Função de atualização chamada a cada frame
         * @param {number} currentTime - Tempo atual
         */
        function updateNumber(currentTime) {
            // Calcula o progresso (0 a 1)
            const progress = Math.min((currentTime - startTime) / duration, 1);
            
            // Calcula o valor atual com easing
            const currentValue = Math.floor(progress * finalValue);
            
            // Atualiza o texto do elemento
            element.textContent = currentValue.toLocaleString('pt-BR');
            
            // Continua a animação se não chegou ao final
            if (progress < 1) {
                requestAnimationFrame(updateNumber);
            } else {
                // Garante que o valor final está correto
                element.textContent = finalValue.toLocaleString('pt-BR');
            }
        }
        
        // Inicia a animação
        requestAnimationFrame(updateNumber);
    }
    
    /**
     * =====================================================
     * 8. VALIDAÇÃO DE FORMULÁRIO (FUTURO)
     * =====================================================
     * Funções preparadas para validação de formulário
     * caso seja adicionado um formulário de contato
     */
    
    /**
     * Valida um campo de email
     * @param {string} email - Email a ser validado
     * @returns {boolean} - True se válido, false se inválido
     */
    function validateEmail(email) {
        // Regex para validação de email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    
    /**
     * Valida um campo de telefone brasileiro
     * @param {string} phone - Telefone a ser validado
     * @returns {boolean} - True se válido, false se inválido
     */
    function validatePhone(phone) {
        // Remove caracteres não numéricos
        const cleanPhone = phone.replace(/\D/g, '');
        // Verifica se tem 10 ou 11 dígitos
        return cleanPhone.length === 10 || cleanPhone.length === 11;
    }
    
    /**
     * =====================================================
     * 9. CONSOLE LOG DE INICIALIZAÇÃO
     * =====================================================
     * Mensagem no console para confirmar que o script
     * foi carregado corretamente
     */
    
    console.log('%c🐾 Pet Shop Liz - Site carregado com sucesso!', 
        'color: #1a5f2a; font-size: 16px; font-weight: bold;');
    console.log('%c📍 R. Alto Jurupari, 224 - São João, São Paulo', 
        'color: #666; font-size: 12px;');
    console.log('%c📞 (11) 96268-5711', 
        'color: #666; font-size: 12px;');
    
}); // Fim do document.ready

/**
 * =====================================================
 * FUNÇÕES UTILITÁRIAS GLOBAIS
 * =====================================================
 * Funções auxiliares disponíveis globalmente
 */

/**
 * Função para copiar texto para a área de transferência
 * @param {string} text - Texto a ser copiado
 */
function copyToClipboard(text) {
    // Cria um elemento de texto temporário
    const tempInput = document.createElement('input');
    tempInput.value = text;
    document.body.appendChild(tempInput);
    
    // Seleciona e copia o texto
    tempInput.select();
    document.execCommand('copy');
    
    // Remove o elemento temporário
    document.body.removeChild(tempInput);
    
    // Exibe mensagem de confirmação (pode ser customizada)
    alert('Texto copiado: ' + text);
}

/**
 * Função para formatar número de telefone
 * @param {string} phone - Número de telefone
 * @returns {string} - Telefone formatado
 */
function formatPhone(phone) {
    // Remove caracteres não numéricos
    const cleaned = phone.replace(/\D/g, '');
    
    // Aplica máscara (XX) XXXXX-XXXX
    if (cleaned.length === 11) {
        return cleaned.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
    }
    // Aplica máscara (XX) XXXX-XXXX
    if (cleaned.length === 10) {
        return cleaned.replace(/(\d{2})(\d{4})(\d{4})/, '($1) $2-$3');
    }
    
    return phone;
}

/**
 * Função para detectar dispositivo móvel
 * @returns {boolean} - True se for mobile, false se não
 */
function isMobile() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

/**
 * Função para obter parâmetros da URL
 * @param {string} param - Nome do parâmetro
 * @returns {string|null} - Valor do parâmetro ou null
 */
function getUrlParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}
