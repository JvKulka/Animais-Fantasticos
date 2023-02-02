// Criação de animação da barra de rolagem do scroll
export default class ScrollAnima {
  constructor(sections) {
    this.sections = document.querySelectorAll(sections);
    this.metadeWindow = window.innerHeight * 0.6;
    this.animaScroll = this.animaScroll.bind(this);
  }

  animaScroll() {
    this.sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;
      const isSectionVisible = sectionTop - this.metadeWindow < 0;
      if (isSectionVisible) section.classList.add("ativo");
    });
  }

  init() {
    this.animaScroll();
    window.addEventListener("scroll", this.animaScroll);
  }
}
