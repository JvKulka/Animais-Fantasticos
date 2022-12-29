export default function initTooltip() {
    // Seleciona a tooltip
    const tooltips = document.querySelectorAll('[data-tooltip]')

    tooltips.forEach((item) => {
        // Adicionar evento de mouseover
        item.addEventListener('mouseover', onMouseOver)
    })

    function onMouseOver(event) {
        const tooltipBox = criarTooltipBox(this)

        // Referenciar objetos da const 'onMouseLeave'
        onMouseLeave.tooltipBox = tooltipBox
        onMouseLeave.element = this
        // Adicionar evento de mouseleave
        this.addEventListener('mouseleave', onMouseLeave)

        // Referenciar objetos da const 'onMouseMove'
        onMouseMove.tooltipBox = tooltipBox
        // Adicionar evento de onMouseMove
        this.addEventListener('mousemove', onMouseMove)
    }

    // As funções foram criadas como objetos para melhor organização.
    // A criação das funções dentro da 'function onMouseOver' traria o mesmo resultado.

    // função 'onMouseLeave' criada em forma de obj
    const onMouseLeave = {
        // Evento necessário para funcionar 'handleEvent'. Devido o evento 'onMouseLeave' ser um onj
        // e estar fora da função onde os 'parametros' estão referenciados
        handleEvent() {
            //Remover
            this.tooltipBox.remove()
            //Remover evento quando não estiver mais em execução
            this.element.removeEventListener('mouseleave', onMouseLeave)
            this.element.removeEventListener('mousemove', onMouseMove)
        }
    }

    // função 'onMouseMove' criada em forma de obj
    const onMouseMove = {
        handleEvent(event) {
            // Selecionar aonde o mouse esta
            this.tooltipBox.style.top = event.pageY + 20 + 'px'
            this.tooltipBox.style.left = event.pageX + 20 + 'px'
        }
    }

    function criarTooltipBox(element) {
        // Criar div para colocar a tooltip
        const tooltipBox = document.createElement('div')
        // Pegar texto que foi atribuido em 'aria-label' para adicionar tooltip
        const text = element.getAttribute('aria-label')

        // Adicionar classe na div para estilizar tooltip
        tooltipBox.classList.add('tooltip')
        // Adicionar texto que foi selecionado em 'text'
        tooltipBox.innerText = text
        // Adicionar div criada ao final do body
        document.body.appendChild(tooltipBox)
        return tooltipBox
    }
}