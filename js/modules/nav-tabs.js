// Criação de navegação por tabs (ao clicar na imagem, abrir texto informativo)
export default function navegacaoTab() {
  const tabMenu = document.querySelectorAll('[data-tab="menu"] li');
  const tabContent = document.querySelectorAll('[data-tab="content"] section');

  if (tabMenu.length && tabContent.length) {
    tabContent[0].classList.add("ativo");
  }

  function ativeTab(index) {
    tabContent.forEach((section) => {
      section.classList.remove("ativo");
    });

    const direcao = tabContent[index].dataset.anime;
    tabContent[index].classList.add("ativo", direcao);
  }

  tabMenu.forEach((itemMenu, index) => {
    itemMenu.addEventListener("click", () => {
      ativeTab(index);
    });
  });
}
