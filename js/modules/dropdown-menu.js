export default function dropDownMenu() {
    const dropDownMenus = document.querySelectorAll('[data-dropdown')

    //Adiciona os eventos de click
    dropDownMenus.forEach((menu) => {
        menu.addEventListener('touchstart', handleClick)
        menu.addEventListener('click', handleClick)
    })

    //Adiciona a classe ativo para abrir o menu dropdown
    function handleClick(event) {
        //Previne o click padrão
        event.preventDefault()
        //Adiciona a classe
        this.classList.add('active')
        //Remove a classe com uma função de callback
        outsideClick(this, ['touchstart', 'click'], () => {
            this.classList.remove('active')
        })
    }

    //Fecha ao clicar do lado de fora do menu dropdown
    function outsideClick(element, events, callback) {
        //Seleciona o HTML (para realizar o click externo)
        const html = document.documentElement
        //Seleciona o atributo 'data-outside'
        const outside = 'data-outside'

        //Verifica se não tem o atributo, caso não tenha, executa os eventos
        //Desta forma, previne o acumulo de eventos de click(fazendo com que ocorra apenas um)
        if (!element.hasAttribute(outside)) {
            //Realizado desta forma para que possa passar mais de um evento de uma forma maais organizada
            events.forEach(userEvent => {
                //Adiciona o evento de click no html, executando a função para fechar o menu
                html.addEventListener(userEvent, handleOutsideClick)
            })
            //Adiciona o evento de click no html, executando a função para fechar o menu
            html.addEventListener('click', handleOutsideClick)
            //Adiciona o evento 'outside'
            element.setAttribute(outside, '')
        }

        //Função que verifica se o click foi dentro ou fora do menu para que possa fechar
        function handleOutsideClick(event) {
            if (!element.contains(event.target)) {
                //Remove o atributo 'data-outside', fazendo com q o menu feche
                element.removeAttribute(outside)
                //Realizado desta forma para que possa passar mais de um evento de uma forma maais organizada
                events.forEach(userEvent => {
                    // Remover o evento de click para não sobrecarregar o site
                    html.removeEventListener(userEvent, handleOutsideClick)
                })
                callback()
            }
        }
    }
}