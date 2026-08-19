<div align="center">

  # 🚚 LOGFRETE — Landing Page & Plataforma de Cotação

  **Uma solução web de alta performance para transporte, logística e cotações instantâneas.**

  [![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](#)
  [![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](#)
  [![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](#)
  [![License: MIT](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)](#)

  [Demonstração](https://seudominio.com.br) · [Relatar Bug](https://github.com/usuario/repositorio/issues) · [Solicitar Feature](https://github.com/usuario/repositorio/issues)

</div>

<br />

---

## 📌 Sumário

* [Sobre o Projeto](#-sobre-o-projeto)
* [Diferenciais de UX/UI](#-diferenciais-de-uxui)
* [Tecnologias Utilizadas](#-tecnologias-utilizadas)
* [Estrutura do Projeto](#-estrutura-do-projeto)
* [Como Executar](#-como-executar)
* [Documentação dos Módulos](#-documentação-dos-módulos)
* [Logs de Desenvolvimento & Histórico](#-logs-de-desenvolvimento--histórico)
* [Licença & Contato](#-licença--contato)

---

## 📖 Sobre o Projeto

O **LOGFRETE** é uma Landing Page moderna desenvolvida para otimizar a conversão de leads no setor de transportes e logística. O projeto foca em alta velocidade de carregamento, responsividade total para dispositivos móveis e captura inteligente de orçamentos via integração com a API do WhatsApp.

### 🌟 Destaques da Aplicação
* **Design System Centralizado:** Estilização baseada em Variáveis CSS (*CSS Custom Properties*) para fácil customização de cores e temas.
* **Captura Inteligente de Leads:** Formulário com seleção de tipo de frete, origem e destino com envio pré-formatado diretamente para o atendimento do WhatsApp.
* **Carrossel Interativo Sem Dependências:** Slider de frota construído em Vanilla JS leve, com suporte a *autoplay*, detecção de pausa ao passar o cursor (*hover*) e navegação acessível.
* **Acessibilidade & SEO:** Semântica HTML5 avançada, suporte a leitores de tela com atributos `aria-label` e otimização para ferramentas de busca.

---

## 🎨 Diferenciais de UX/UI

| Funcionalidade | Descrição / Solução | Impacto |
| :--- | :--- | :--- |
| **Glassmorphism** | Cards do carrossel e cabeçalho com efeito translúcido em CSS (`backdrop-filter`). | Experiência visual moderna e elegante. |
| **Formulário B2B/B2C** | Coleta de dados segmentados (tipo de carga, origem e destino). | Qualificação prévia de leads para o comercial. |
| **Zero Frameworks** | Desenvolvido sem bibliotecas pesadas de terceiros (Bootstrap, jQuery). | Carregamento instantâneo (LCP otimizado). |

---

## 🛠️ Tecnologias Utilizadas

* **HTML5:** Estruturação semântica e acessível.
* **CSS3:** Flexbox, CSS Grid, Animações Keyframes e CSS Variables.
* **JavaScript (ES6+):** Manipulação de DOM modularizada e sem variáveis globais poluídas.

---

## 📂 Estrutura do Projeto

> **/** (Diretório Raiz)
>
> ├── **assets/**  
> │   ├── **css/**  
> │   │   └── style.css *(Estilos globais e variáveis CSS)*  
> │   ├── **js/**  
> │   │   └── main.js *(Módulos JS: Carrossel, Animações, Form)*  
> │   └── **imgs/** *(Imagens otimizadas do projeto)*  
> │       ├── frete-courrier.png  
> │       ├── frete-seguro.jfif  
> │       ├── FRETE-1.jpg  
> │       └── caminhao.jfif  
> ├── **index.html** *(Documento principal da Landing Page)*  
> └── **README.md** *(Documentação do projeto)*  

---
 