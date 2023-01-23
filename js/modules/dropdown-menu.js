import outsideClick from "./outside-click.js";

export default function dropDownMenu() {
  const dropDownMenus = document.querySelectorAll("[data-dropdown");

  // Adiciona a classe ativo para abrir o menu dropdown
  function handleClick(event) {
    // Previne o click padrão
    event.preventDefault();
    // Adiciona a classe
    this.classList.add("active");
    // Remove a classe com uma função de callback
    outsideClick(this, ["touchstart", "click"], () => {
      this.classList.remove("active");
    });
  }

  // Adiciona os eventos de click
  dropDownMenus.forEach((menu) => {
    menu.addEventListener("touchstart", handleClick);
    menu.addEventListener("click", handleClick);
  });
}
