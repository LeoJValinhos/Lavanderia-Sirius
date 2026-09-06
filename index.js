const openContatoBtn = document.getElementById('openContatoBtn');
const closeContatoBtn = document.getElementById('closeContatoBtn');
const contatoOverlay = document.getElementById('contatoOverlay');

openContatoBtn.addEventListener('click', (e) => {
  e.preventDefault();
  contatoOverlay.classList.add('active');
});

closeContatoBtn.addEventListener('click', () => {
  contatoOverlay.classList.remove('active');
});

contatoOverlay.addEventListener('click', (event) => {
  if (event.target === contatoOverlay) {
    contatoOverlay.classList.remove('active');
  }
});

// Seleciona os elementos do carrossel
const slides = document.querySelectorAll('.slide');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
let slideAtual = 0;

// Função para mostrar um slide específico
function mostrarSlide(indice) {
    // Remove a classe 'active' de todos os slides
    slides.forEach(slide => slide.classList.remove('active'));
    
    // Atualiza o índice para voltar ao início ou fim se estourar o limite
    if (indice >= slides.length) slideAtual = 0;
    else if (indice < 0) slideAtual = slides.length - 1;
    else slideAtual = indice;

    // Adiciona a classe 'active' apenas no slide correto
    slides[slideAtual].classList.add('active');
}

// Eventos dos botões de próximo e anterior
nextBtn.addEventListener('click', () => mostrarSlide(slideAtual + 1));
prevBtn.addEventListener('click', () => mostrarSlide(slideAtual - 1));

// Opcional: Passar os slides automaticamente a cada 5 segundos
setInterval(() => {
    mostrarSlide(slideAtual + 1);
}, 5000);
