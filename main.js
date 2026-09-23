// ==========================================
// INÍCIO: MÓDULO - ANIMAÇÃO DE ENTRADA (HERO)
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    // Animação de entrada suave da Seção Hero
    const heroContent = document.querySelector('.hero-content') || document.getElementById('conteudoCabecalho');

    if (heroContent) {
        // Pequeno atraso para garantir que a renderização inicial do CSS ocorreu
        requestAnimationFrame(() => {
            heroContent.classList.add('visivel');
        });
    }
});
// ==========================================
// FIM: MÓDULO - ANIMAÇÃO DE ENTRADA (HERO)
// ==========================================


//Inicio - Cotacao rapida

document.addEventListener('DOMContentLoaded', () => {
    const origemInput = document.getElementById('origem');
    const destinoInput = document.getElementById('destino');
    const veiculoSelect = document.getElementById('tipoVeiculo');
    
    const distanciaTexto = document.getElementById('distanciaTexto');
    const valorTotalTexto = document.getElementById('valorTotal');
    const btnWhatsApp = document.getElementById('btnWhatsApp');

    function calcularSimulacao() {
        const origem = origemInput.value.trim();
        const destino = destinoInput.value.trim();
        const valorPorKm = parseFloat(veiculoSelect.value);

        // Validação mínima para simular o cálculo
        if (origem.length > 3 && destino.length > 3) {
            // Exemplo de distância calculada (Substitua pela resposta do Google Distance Matrix API)
            const distanciaEstimadaKm = 15.5; 
            const valorCalculado = distanciaEstimadaKm * valorPorKm;

            // Atualiza Interface
            distanciaTexto.textContent = `${distanciaEstimadaKm.toFixed(1).replace('.', ',')} km`;
            valorTotalTexto.textContent = valorCalculado.toLocaleString('pt-BR', {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
            });

            // Habilita Botão e Atualiza Link
            btnWhatsApp.classList.remove('disabled');
            
            const mensagem = encodeURIComponent(
                `Olá! Quero solicitar um frete:\n` +
                `📍 Origem: ${origem}\n` +
                `🏁 Destino: ${destino}\n` +
                `📏 Distância: ${distanciaEstimadaKm} km\n` +
                `💰 Estimativa: R$ ${valorCalculado.toFixed(2)}`
            );
            
            btnWhatsApp.href = `https://wa.me/5532991985793?text=${mensagem}`;
        } else {
            btnWhatsApp.classList.add('disabled');
            distanciaTexto.textContent = '0,0 km';
            valorTotalTexto.textContent = '0,00';
        }
    }

    // Ouvintes de evento para cálculo instantâneo
    origemInput.addEventListener('input', calcularSimulacao);
    destinoInput.addEventListener('input', calcularSimulacao);
    veiculoSelect.addEventListener('change', calcularSimulacao);
});


//FIM - Cotacao rapida


// INÍCIO: Módulo - Carrossel / Slideshow
document.addEventListener("DOMContentLoaded", () => {
    let slideIndex = 0;
    const slides = document.querySelectorAll(".mySlides");
    const dots = document.querySelectorAll(".dot");
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");

    if (!slides.length) return;

    function showSlide(index) {
        if (index >= slides.length) slideIndex = 0;
        else if (index < 0) slideIndex = slides.length - 1;
        else slideIndex = index;

        slides.forEach((slide) => slide.classList.remove("active"));
        dots.forEach((dot) => dot.classList.remove("active"));

        slides[slideIndex].classList.add("active");
        if (dots[slideIndex]) dots[slideIndex].classList.add("active");
    }

    // Event Listeners das Setas
    if (nextBtn) nextBtn.addEventListener("click", () => showSlide(slideIndex + 1));
    if (prevBtn) prevBtn.addEventListener("click", () => showSlide(slideIndex - 1));

    // Event Listeners dos Dots
    dots.forEach((dot, idx) => {
        dot.addEventListener("click", () => showSlide(idx));
    });

    // Autoplay Suave (A cada 5 segundos)
    let autoSlide = setInterval(() => showSlide(slideIndex + 1), 5000);

    // Pausa o autoplay quando o usuário passa o mouse por cima
    const container = document.querySelector(".carousel-wrapper");
    if (container) {
        container.addEventListener("mouseenter", () => clearInterval(autoSlide));
        container.addEventListener("mouseleave", () => {
            autoSlide = setInterval(() => showSlide(slideIndex + 1), 5000);
        });
    }
});

// FIM: Módulo - Carrossel / Slideshow

// INÍCIO: Módulo - Envio do Formulário de Cotação
document.addEventListener("DOMContentLoaded", () => {
    const formContato = document.getElementById("formContato");

    if (formContato) {
        formContato.addEventListener("submit", (e) => {
            e.preventDefault();

            const nome = document.getElementById("nome").value;
            const telefone = document.getElementById("telefone").value;
            const tipoServico = document.getElementById("tipoServico").value;
            const origem = document.getElementById("origem").value;
            const destino = document.getElementById("destino").value;
            const mensagem = document.getElementById("mensagem").value;

            // Monta a mensagem para enviar direto no WhatsApp do cliente
            const textoWhatsApp = `Olá! Gostaria de uma cotação de frete.%0A%0A` +
                `*Nome:* ${encodeURIComponent(nome)}%0A` +
                `*Telefone:* ${encodeURIComponent(telefone)}%0A` +
                `*Serviço:* ${encodeURIComponent(tipoServico)}%0A` +
                `*Origem:* ${encodeURIComponent(origem)}%0A` +
                `*Destino:* ${encodeURIComponent(destino)}%0A` +
                `*Detalhes:* ${encodeURIComponent(mensagem || "Nenhum")}`;

            const numeroEmpresa = "5500000000000"; // Substitua pelo número real do cliente
            window.open(`https://wa.me/${numeroEmpresa}?text=${textoWhatsApp}`, "_blank");
        });
    }
});
// FIM: Módulo - Envio do Formulário de Cotação


// ==========================================================================
// FUNCIONALIDADE DO BOTÃO VOLTAR AO TOPO
// ==========================================================================
document.addEventListener('DOMContentLoaded', () => {
    const btnTopo = document.getElementById('btnTopo');

    // Exibe ou oculta o botão conforme a rolagem da página
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            btnTopo.classList.add('visivel');
        } else {
            btnTopo.classList.remove('visivel');
        }
    });

    // Ação de rolagem suave até o topo ao clicar
    btnTopo.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});

