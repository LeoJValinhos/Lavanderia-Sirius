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