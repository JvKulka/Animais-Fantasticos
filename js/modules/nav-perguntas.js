// Criação de ocultar e exibir perguntas do FAQ (ao clicar, aparece a pergunta junto com a descrição)
export default function navegacaoPerguntas() {
    const listaPerguntas = document.querySelectorAll('[data-anime="perguntas"] dt')
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