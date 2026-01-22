# 🐾 Pet Shop Liz - Landing Page

Uma landing page responsiva para o Pet Shop Liz, localizado no bairro Jaraguá em São Paulo. O projeto foi desenvolvido utilizando HTML, CSS e JavaScript puros, com foco em apresentar os serviços e informações de contato da empresa.

---

## 📋 Índice

- [Sobre o Projeto](#sobre-o-projeto)
- [Funcionalidades](#funcionalidades)
- [Estrutura de Arquivos](#estrutura-de-arquivos)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Como Usar](#como-usar)
- [Seções da Landing Page](#seções-da-landing-page)
- [Informações de Contato](#informações-de-contato)
- [Personalização](#personalização)

---

## 📖 Sobre o Projeto

Esta landing page foi criada para o **Pet Shop Liz**, um estabelecimento especializado em cuidados para pets que oferece serviços de Banho e Tosa, Creche (Daycare), Hotel para cães e Taxi Dog. A página serve como vitrine digital da empresa, apresentando seus serviços e facilitando o contato com os clientes.

### Informações da Empresa

- **Nome:** PET LIZ - Jaraguá | Banho e Tosa | Creche e Hotel para cães
- **Endereço:** R. Alto Jurupari, 224 - São João, São Paulo - SP, 02995-040
- **Telefone:** (11) 96268-5711

---

## ✨ Funcionalidades

- **Design Responsivo:** Adapta-se a diferentes tamanhos de tela (desktop, tablet, mobile)
- **Menu de Navegação:** Com versão desktop e mobile (hambúrguer)
- **Scroll Suave:** Navegação fluida entre as seções
- **Animações de Scroll:** Elementos aparecem com animações ao rolar a página
- **Botão Flutuante do WhatsApp:** Acesso rápido ao contato via WhatsApp
- **Integração com Redes Sociais:** Links para WhatsApp, Instagram e Facebook
- **Mapa Integrado:** Localização da empresa via Google Maps

---

## 📁 Estrutura de Arquivos

```
petshopliz/
├── index.html          # Arquivo principal HTML com estrutura da página
├── styles.css          # Arquivo de estilos CSS
├── script.js           # Arquivo JavaScript com funcionalidades
└── README.md           # Documentação do projeto (este arquivo)
```

### Descrição dos Arquivos

#### `index.html`
Contém toda a estrutura HTML da landing page, incluindo:
- **Header:** Logo e menu de navegação
- **Seção Home:** Banner principal com CTA (Call to Action)
- **Seção Serviços:** Cards com os serviços oferecidos
- **Seção Sobre:** Informações sobre a empresa
- **Seção Contato:** Informações de contato e mapa
- **Footer:** Links rápidos e redes sociais

#### `styles.css`
Arquivo de estilos que contém:
- **Variáveis CSS:** Cores, fontes e valores reutilizáveis
- **Reset CSS:** Normalização de estilos do navegador
- **Estilos por Seção:** Organização por componentes
- **Media Queries:** Responsividade para diferentes dispositivos
- **Animações:** Keyframes para efeitos visuais

#### `script.js`
Arquivo JavaScript com as seguintes funcionalidades:
- **Menu Mobile:** Toggle do menu hambúrguer
- **Navegação Ativa:** Destaque do item de menu atual
- **Scroll Suave:** Animação ao clicar em links
- **ScrollReveal:** Animações de entrada dos elementos
- **Funções Utilitárias:** Validações e formatações

---

## 🛠️ Tecnologias Utilizadas

| Tecnologia | Versão | Descrição |
|------------|--------|-----------|
| HTML5 | - | Estrutura semântica da página |
| CSS3 | - | Estilização e layout responsivo |
| JavaScript | ES6+ | Interatividade e animações |
| jQuery | 3.7.1 | Manipulação do DOM |
| ScrollReveal | 4.0+ | Animações de scroll |
| Font Awesome | 6.5.1 | Biblioteca de ícones |
| Google Fonts | - | Fontes Fredoka e Poppins |

### CDNs Utilizados

```html
<!-- Font Awesome (Ícones) -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">

<!-- Google Fonts (Tipografia) -->
<link href="https://fonts.googleapis.com/css2?family=Fredoka:wght@400;500;600;700&family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet">

<!-- jQuery (JavaScript) -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>

<!-- ScrollReveal (Animações) -->
<script src="https://unpkg.com/scrollreveal"></script>
```

---

## 🚀 Como Usar

### Método 1: Abrir diretamente no navegador

1. Faça o download ou clone os arquivos do projeto
2. Abra o arquivo `index.html` no seu navegador
3. A página será carregada automaticamente

### Método 2: Usando um servidor local

```bash
# Se você tem Python instalado:
python -m http.server 8000

# Ou com Node.js (npx):
npx serve

# Ou com PHP:
php -S localhost:8000
```

Depois acesse: `http://localhost:8000`

### Método 3: Live Server (VS Code)

1. Instale a extensão "Live Server" no VS Code
2. Clique com botão direito no `index.html`
3. Selecione "Open with Live Server"

---

## 📑 Seções da Landing Page

### 1. Header (Cabeçalho)
- Logo da empresa
- Menu de navegação: Início, Serviços, Sobre, Contato
- Botão "Fale Conosco" (WhatsApp)
- Menu mobile responsivo

### 2. Home (Seção Inicial)
- Título principal de boas-vindas
- Descrição dos serviços
- Botões de ação (Ver Serviços, Telefone)
- Ícones de redes sociais
- Logo/Banner do Pet Shop

### 3. Serviços
Apresenta 4 cards de serviços:

| Serviço | Descrição |
|---------|-----------|
| **Creche (Daycare)** | Ambiente seguro e divertido durante o dia |
| **Hotel para Cães** | Hospedagem com conforto e acompanhamento 24h |
| **Banho e Tosa** | Profissionais experientes e produtos premium |
| **Taxi Dog** | Busca e entrega do pet na sua casa |

### 4. Sobre
- **Nossa História:** Fundação em 2015, trajetória de 10 anos
- **Nossa Região:** Jaraguá, Pirituba, Taipas, Brasilândia, Perus, Freguesia do Ó
- **Nossos Diferenciais:** Lista de benefícios e qualidades

### 5. Contato
- Endereço completo
- WhatsApp com link direto
- E-mail
- Instagram
- Mapa do Google Maps
- Botões grandes para WhatsApp, Instagram e Facebook

### 6. Footer (Rodapé)
- Informações da empresa
- Horário de funcionamento
- Links rápidos
- Redes sociais
- Copyright

---

## 📞 Informações de Contato

| Canal | Informação |
|-------|------------|
| **Endereço** | R. Alto Jurupari, 224 - São João, São Paulo - SP, 02995-040 |
| **WhatsApp** | (11) 96268-5711 |
| **E-mail** | contato@petshopliz.com.br |
| **Instagram** | @petshopliz |
| **Facebook** | /petshopliz |

### Horário de Funcionamento
- Segunda a Sexta: 8h às 19h
- Sábados: 8h às 17h
- Domingos e Feriados: Fechado

---

## 🎨 Personalização

### Cores do Projeto

As cores podem ser alteradas no arquivo `styles.css` nas variáveis CSS:

```css
:root {
    --color-primary: #1a5f2a;        /* Verde escuro */
    --color-primary-light: #2e8b3e;  /* Verde claro */
    --color-secondary: #f7d000;       /* Amarelo */
    --color-accent: #e63946;          /* Vermelho */
    --color-blue: #1e88e5;           /* Azul */
}
```

### Fontes

O projeto utiliza:
- **Fredoka:** Para títulos (fonte divertida)
- **Poppins:** Para textos (fonte legível)

Para alterar, modifique as variáveis:

```css
:root {
    --font-primary: 'Fredoka', sans-serif;
    --font-secondary: 'Poppins', sans-serif;
}
```

### Imagens

As imagens estão hospedadas em CDN. Para usar imagens locais:

1. Crie uma pasta `images/`
2. Adicione suas imagens
3. Atualize os caminhos no HTML:

```html
<img src="images/logo.png" alt="Logo Pet Shop Liz">
```

---

## 📱 Responsividade

O site é responsivo e se adapta aos seguintes breakpoints:

| Breakpoint | Dispositivo |
|------------|-------------|
| > 992px | Desktop |
| 768px - 992px | Tablet |
| 480px - 768px | Mobile |
| < 480px | Mobile pequeno |

---

## 📄 Licença

Este projeto foi desenvolvido para fins educacionais e comerciais do Pet Shop Liz.

---

## 👨‍💻 Desenvolvido por

**Desenvolvedor Web** - Janeiro 2026

---

## 🐕 Pet Shop Liz

*"Cuidamos do seu pet com muito amor!"*

🐾 Desde 2015 cuidando dos pets da região do Jaraguá com carinho e dedicação.
