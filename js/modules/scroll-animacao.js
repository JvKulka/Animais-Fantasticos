// Criação de animação da barra de rolagem do scroll
export default function navegacaoAnimacaoScroll() {
    const sections = document.querySelectorAll('[data-anime="scroll"]')

    if (sections.length) {

        const metadeWindow = window.innerHeight * 0.6

        function animaScroll() {
            sections.forEach((section) => {
                const sectionTop = section.getBoundingClientRect().top
                const isSectionVisible = (sectionTop - metadeWindow) < 0
                if (isSectionVisible) section.classList.add('ativo')
            })
        }
        animaScroll()

        window.addEventListener('scroll', animaScroll)
    }
}