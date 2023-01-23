export default function initModal() {
  const botaoAbrir = document.querySelector('[data-modal="abrir"]');
  const botaoFechar = document.querySelector('[data-modal="fechar"]');
  const containerModal = document.querySelector('[data-modal="container"]');

  // Função para abrir/fechar modal
  function toggleModal(event) {
    event.preventDefault();
    containerModal.classList.toggle("ativo");
  }

  // Função para fechar com click fora do modal
  function fecharExterno(event) {
    if (event.target === this) toggleModal(event);
  }

  // Verificar se essas const existem, caso não exista retorna undefined e não executa nada
  // previnindo a quebra do código JS.
  if (botaoAbrir && botaoFechar && containerModal) {
    botaoAbrir.addEventListener("click", toggleModal);
    botaoFechar.addEventListener("click", toggleModal);
    containerModal.addEventListener("click", fecharExterno);
  }
}
