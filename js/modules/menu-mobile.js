import outsideClick from "./outside-click.js";

export default function menuMobile() {
    const menuButton = document.querySelector('[data-menu="button"]')
    const menulist = document.querySelector('[data-menu="list"]')
    const eventos = ['click', 'touchstart']

    if (menuButton) {
        function openMenu(event) {
            menulist.classList.add('active')
            menuButton.classList.add('active')
            outsideClick(menulist, eventos, () => {
                menulist.classList.remove('active')
                menuButton.classList.remove('active')
            })
        }


        eventos.forEach(evento => menuButton.addEventListener(evento, openMenu))
    }
}