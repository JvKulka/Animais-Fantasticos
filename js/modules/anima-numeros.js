export default function animaNumeros() {
  function animacao() {
    const numeros = document.querySelectorAll("[data-numero]");
    // Passa por todos os numeros para fazer a animação
    numeros.forEach((numero) => {
      // Pega os numeros que estão no HTML
      // Transforma de string para number
      const total = +numero.innerText;
      // Criação de incremento para acelerar o carregamento dos numeros
      const incremento = Math.floor(total / 100);
      // Inicia o valor da animação em 0
      let start = 0;
      // Criação do tempo de carregamento da animação
      const timer = setInterval(() => {
        // Acelerar o processo do carregamento
        start += incremento;
        // Definir o máximo até onde o número pode chegar para não passar por conta da velocidade
        numero.innerText = start;
        // Lógica para fazer o numero chegar até o máximo e parar (usando o clearInterval)
        if (start > total) {
          numero.innerText = total;
          clearInterval(timer);
        }
      }, 25);
    });
  }

  let observer;
  function handleMutation(mutation) {
    if (mutation[0].target.classList.contains("ativo")) {
      observer.disconnect();
      animacao();
    }
  }
  observer = new MutationObserver(handleMutation);

  const observerTarget = document.querySelector(".numeros");
  observer.observe(observerTarget, { attributes: true });
}
