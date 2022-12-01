// Criação de navegação por tabs (ao clicar na imagem, abrir texto informativo)
function navegacaoTab() {
    const tabMenu = document.querySelectorAll('.js-tabmenu li')
    const tabContent = document.querySelectorAll('.js-tabcontent section')

    if (tabMenu.length && tabContent.length) {
        tabContent[0].classList.add('ativo')
    }


    function ativeTab(index) {

        tabContent.forEach((section) => { section.classList.remove('ativo') })

        tabContent[index].classList.add('ativo')
    }

    tabMenu.forEach((itemMenu, index) => {
        itemMenu.addEventListener('click', () => {
            ativeTab(index)
        })
    })
}
navegacaoTab()

// Criação de ocultar e exibir perguntas do FAQ (ao clicar, aparece a pergunta junto com a descrição)
function navegacaoPerguntas() {
    const listaPerguntas = document.querySelectorAll('.js-perguntas dt')
    const activeClass = 'ativo'

    if (listaPerguntas.length) {

        listaPerguntas[0].classList.add(activeClass)
        listaPerguntas[0].nextElementSibling.classList.add(activeClass)


        function activePerguntas() {
            this.classList.toggle(activeClass)
            this.nextElementSibling.classList.toggle(activeClass)
        }

        listaPerguntas.forEach((item) => {
            item.addEventListener('click', activePerguntas)
        })
    }
}
navegacaoPerguntas()

// Criação de rolagem suave ao clicar nos links internos
function navegacaoScrollSuave() {
    const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]')

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
navegacaoScrollSuave()

// Criação de animação da barra de rolagem do scroll
function navegacaoAnimacaoScroll() {
    const sections = document.querySelectorAll('.js-scroll')

    if (sections.length) {

        const metadeWindow = window.innerHeight * 0.6

        function animaScroll() {
            sections.forEach((section) => {
                const sectionTop = section.getBoundingClientRect().top - metadeWindow

                if (sectionTop < 0) {
                    section.classList.add('ativo')
                }
            })
        }
        animaScroll()

        window.addEventListener('scroll', animaScroll)
    }
}
navegacaoAnimacaoScroll()