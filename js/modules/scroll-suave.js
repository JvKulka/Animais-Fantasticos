// Criação de rolagem suave ao clicar nos links internos
export default function navegacaoScrollSuave() {
    const linksInternos = document.querySelectorAll('[data-menu="suave"] a[href^="#"]')

    function scrollToSection(event) {
        event.preventDefault()

        const href = event.currentTarget.getAttribute('href') // Pega o atributo do link interno (apenas o #)
        const section = document.querySelector(href) // Seleciona a sessão

        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });

        // // forma alternativa
        // const topo = section.offsetTop // Seleciona o topo da sessão
        // window.scrollTo({
        //     top: topo,
        //     behavior: 'smooth'
        // })
    }

    linksInternos.forEach((link) => {
        link.addEventListener('click', scrollToSection)
    })
}