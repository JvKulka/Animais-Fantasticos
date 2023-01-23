/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/modules/anima-numeros.js":
/*!*************************************!*\
  !*** ./js/modules/anima-numeros.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ animaNumeros)\n/* harmony export */ });\nfunction animaNumeros() {\n  function animacao() {\n    const numeros = document.querySelectorAll(\"[data-numero]\");\n    // Passa por todos os numeros para fazer a animação\n    numeros.forEach((numero) => {\n      // Pega os numeros que estão no HTML\n      // Transforma de string para number\n      const total = +numero.innerText;\n      // Criação de incremento para acelerar o carregamento dos numeros\n      const incremento = Math.floor(total / 100);\n      // Inicia o valor da animação em 0\n      let start = 0;\n      // Criação do tempo de carregamento da animação\n      const timer = setInterval(() => {\n        // Acelerar o processo do carregamento\n        start += incremento;\n        // Definir o máximo até onde o número pode chegar para não passar por conta da velocidade\n        numero.innerText = start;\n        // Lógica para fazer o numero chegar até o máximo e parar (usando o clearInterval)\n        if (start > total) {\n          numero.innerText = total;\n          clearInterval(timer);\n        }\n      }, 25);\n    });\n  }\n\n  let observer;\n  function handleMutation(mutation) {\n    if (mutation[0].target.classList.contains(\"ativo\")) {\n      observer.disconnect();\n      animacao();\n    }\n  }\n  observer = new MutationObserver(handleMutation);\n\n  const observerTarget = document.querySelector(\".numeros\");\n  observer.observe(observerTarget, { attributes: true });\n}\n\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/anima-numeros.js?");

/***/ }),

/***/ "./js/modules/dropdown-menu.js":
/*!*************************************!*\
  !*** ./js/modules/dropdown-menu.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ dropDownMenu)\n/* harmony export */ });\n/* harmony import */ var _outside_click_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./outside-click.js */ \"./js/modules/outside-click.js\");\n\n\nfunction dropDownMenu() {\n  const dropDownMenus = document.querySelectorAll(\"[data-dropdown\");\n\n  // Adiciona a classe ativo para abrir o menu dropdown\n  function handleClick(event) {\n    // Previne o click padrão\n    event.preventDefault();\n    // Adiciona a classe\n    this.classList.add(\"active\");\n    // Remove a classe com uma função de callback\n    (0,_outside_click_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, [\"touchstart\", \"click\"], () => {\n      this.classList.remove(\"active\");\n    });\n  }\n\n  // Adiciona os eventos de click\n  dropDownMenus.forEach((menu) => {\n    menu.addEventListener(\"touchstart\", handleClick);\n    menu.addEventListener(\"click\", handleClick);\n  });\n}\n\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/dropdown-menu.js?");

/***/ }),

/***/ "./js/modules/fetch-animais.js":
/*!*************************************!*\
  !*** ./js/modules/fetch-animais.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initFetchAnimais)\n/* harmony export */ });\n/* harmony import */ var _anima_numeros_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./anima-numeros.js */ \"./js/modules/anima-numeros.js\");\n\n\nfunction initFetchAnimais() {\n  function createAnimal(animal) {\n    const div = document.createElement(\"div\");\n    div.classList.add(\"numero-animal\");\n    div.innerHTML = `<h3>${animal.especie}</h3><span data-numero>${animal.total}</span>`;\n    return div;\n  }\n\n  async function fetchAnimais(url) {\n    try {\n      const animaisResponse = await fetch(url);\n      const animaisJSON = await animaisResponse.json();\n      const numerosGrid = document.querySelector(\".numeros-grid\");\n\n      animaisJSON.forEach((animal) => {\n        const divAnimal = createAnimal(animal);\n        numerosGrid.appendChild(divAnimal);\n      });\n      (0,_anima_numeros_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n    } catch (erro) {\n      // eslint-disable-next-line no-console\n      console.log(erro);\n    }\n  }\n\n  fetchAnimais(\"./animaisApi.json\");\n}\n\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/fetch-animais.js?");

/***/ }),

/***/ "./js/modules/fetch-bitcoin.js":
/*!*************************************!*\
  !*** ./js/modules/fetch-bitcoin.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initFetchBitcoin)\n/* harmony export */ });\nfunction initFetchBitcoin() {\n  fetch(\"https://blockchain.info/ticker\")\n    .then((response) => response.json())\n    .then((bitcoin) => {\n      const btcPreco = document.querySelector(\".btc-preco\");\n      btcPreco.innerText = (1000 / bitcoin.BRL.sell).toFixed(4);\n    })\n    .catch((erro) => {\n      // eslint-disable-next-line no-console\n      console.log(Error(erro));\n    });\n}\n\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/fetch-bitcoin.js?");

/***/ }),

/***/ "./js/modules/funcionamento.js":
/*!*************************************!*\
  !*** ./js/modules/funcionamento.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ horarioFuncionamento)\n/* harmony export */ });\nfunction horarioFuncionamento() {\n  const funcionamento = document.querySelector(\"[data-semana]\");\n  const diasSemana = funcionamento.dataset.semana.split(\",\").map(Number);\n  const horarioSemana = funcionamento.dataset.horario.split(\",\").map(Number);\n\n  const dataAgora = new Date();\n  const diaAgora = dataAgora.getDay();\n  const horarioAgora = dataAgora.getHours();\n\n  const semanaAberta = diasSemana.indexOf(diaAgora) !== -1;\n\n  const horarioAberto =\n    horarioAgora >= horarioSemana[0] && horarioAgora < horarioSemana[1];\n\n  if (semanaAberta && horarioAberto) {\n    funcionamento.classList.add(\"aberto\");\n  } else {\n    funcionamento.classList.add(\"fechado\");\n  }\n}\n\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/funcionamento.js?");

/***/ }),

/***/ "./js/modules/menu-mobile.js":
/*!***********************************!*\
  !*** ./js/modules/menu-mobile.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ menuMobile)\n/* harmony export */ });\n/* harmony import */ var _outside_click_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./outside-click.js */ \"./js/modules/outside-click.js\");\n\n\nfunction menuMobile() {\n  const menuButton = document.querySelector('[data-menu=\"button\"]');\n  const menulist = document.querySelector('[data-menu=\"list\"]');\n  const eventos = [\"click\", \"touchstart\"];\n\n  function openMenu() {\n    menulist.classList.add(\"active\");\n    menuButton.classList.add(\"active\");\n    (0,_outside_click_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(menulist, eventos, () => {\n      menulist.classList.remove(\"active\");\n      menuButton.classList.remove(\"active\");\n    });\n  }\n\n  if (menuButton) {\n    eventos.forEach((evento) => menuButton.addEventListener(evento, openMenu));\n  }\n}\n\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/menu-mobile.js?");

/***/ }),

/***/ "./js/modules/modal.js":
/*!*****************************!*\
  !*** ./js/modules/modal.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initModal)\n/* harmony export */ });\nfunction initModal() {\n  const botaoAbrir = document.querySelector('[data-modal=\"abrir\"]');\n  const botaoFechar = document.querySelector('[data-modal=\"fechar\"]');\n  const containerModal = document.querySelector('[data-modal=\"container\"]');\n\n  // Função para abrir/fechar modal\n  function toggleModal(event) {\n    event.preventDefault();\n    containerModal.classList.toggle(\"ativo\");\n  }\n\n  // Função para fechar com click fora do modal\n  function fecharExterno(event) {\n    if (event.target === this) toggleModal(event);\n  }\n\n  // Verificar se essas const existem, caso não exista retorna undefined e não executa nada\n  // previnindo a quebra do código JS.\n  if (botaoAbrir && botaoFechar && containerModal) {\n    botaoAbrir.addEventListener(\"click\", toggleModal);\n    botaoFechar.addEventListener(\"click\", toggleModal);\n    containerModal.addEventListener(\"click\", fecharExterno);\n  }\n}\n\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/modal.js?");

/***/ }),

/***/ "./js/modules/nav-perguntas.js":
/*!*************************************!*\
  !*** ./js/modules/nav-perguntas.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ navegacaoPerguntas)\n/* harmony export */ });\n// Criação de ocultar e exibir perguntas do FAQ\n// (ao clicar, aparece a pergunta junto com a descrição)\nfunction navegacaoPerguntas() {\n  const listaPerguntas = document.querySelectorAll(\n    '[data-anime=\"perguntas\"] dt'\n  );\n  const activeClass = \"ativo\";\n\n  function activePerguntas() {\n    this.classList.toggle(activeClass);\n    this.nextElementSibling.classList.toggle(activeClass);\n  }\n\n  if (listaPerguntas.length) {\n    listaPerguntas[0].classList.add(activeClass);\n    listaPerguntas[0].nextElementSibling.classList.add(activeClass);\n\n    listaPerguntas.forEach((item) => {\n      item.addEventListener(\"click\", activePerguntas);\n    });\n  }\n}\n\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/nav-perguntas.js?");

/***/ }),

/***/ "./js/modules/nav-tabs.js":
/*!********************************!*\
  !*** ./js/modules/nav-tabs.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ navegacaoTab)\n/* harmony export */ });\n// Criação de navegação por tabs (ao clicar na imagem, abrir texto informativo)\nfunction navegacaoTab() {\n  const tabMenu = document.querySelectorAll('[data-tab=\"menu\"] li');\n  const tabContent = document.querySelectorAll('[data-tab=\"content\"] section');\n\n  if (tabMenu.length && tabContent.length) {\n    tabContent[0].classList.add(\"ativo\");\n  }\n\n  function ativeTab(index) {\n    tabContent.forEach((section) => {\n      section.classList.remove(\"ativo\");\n    });\n\n    const direcao = tabContent[index].dataset.anime;\n    tabContent[index].classList.add(\"ativo\", direcao);\n  }\n\n  tabMenu.forEach((itemMenu, index) => {\n    itemMenu.addEventListener(\"click\", () => {\n      ativeTab(index);\n    });\n  });\n}\n\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/nav-tabs.js?");

/***/ }),

/***/ "./js/modules/outside-click.js":
/*!*************************************!*\
  !*** ./js/modules/outside-click.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ outsideClick)\n/* harmony export */ });\n// Fecha ao clicar do lado de fora do menu dropdown\nfunction outsideClick(element, events, callback) {\n  // Seleciona o HTML (para realizar o click externo)\n  const html = document.documentElement;\n  // Seleciona o atributo 'data-outside'\n  const outside = \"data-outside\";\n\n  // Função que verifica se o click foi dentro ou fora do menu para que possa fechar\n  function handleOutsideClick(event) {\n    if (!element.contains(event.target)) {\n      // Remove o atributo 'data-outside', fazendo com q o menu feche\n      element.removeAttribute(outside);\n      // Realizado desta forma para que possa passar mais de um evento de uma forma maais organizada\n      events.forEach((userEvent) => {\n        // Remover o evento de click para não sobrecarregar o site\n        html.removeEventListener(userEvent, handleOutsideClick);\n      });\n      callback();\n    }\n  }\n\n  // Verifica se não tem o atributo, caso não tenha, executa os eventos\n  // Desta forma, previne o acumulo de eventos de click(fazendo com que ocorra apenas um)\n  if (!element.hasAttribute(outside)) {\n    // Realizado desta forma para que possa passar mais de um evento de uma forma maais organizada\n    events.forEach((userEvent) => {\n      // Adiciona o evento de click no html, executando a função para fechar o menu\n      setTimeout(() => html.addEventListener(userEvent, handleOutsideClick));\n    });\n    // Adiciona o evento 'outside'\n    element.setAttribute(outside, \"\");\n  }\n}\n\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/outside-click.js?");

/***/ }),

/***/ "./js/modules/scroll-animacao.js":
/*!***************************************!*\
  !*** ./js/modules/scroll-animacao.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ navegacaoAnimacaoScroll)\n/* harmony export */ });\n// Criação de animação da barra de rolagem do scroll\nfunction navegacaoAnimacaoScroll() {\n  const sections = document.querySelectorAll('[data-anime=\"scroll\"]');\n  const metadeWindow = window.innerHeight * 0.6;\n\n  function animaScroll() {\n    sections.forEach((section) => {\n      const sectionTop = section.getBoundingClientRect().top;\n      const isSectionVisible = sectionTop - metadeWindow < 0;\n      if (isSectionVisible) section.classList.add(\"ativo\");\n    });\n  }\n\n  if (sections.length) {\n    animaScroll();\n    window.addEventListener(\"scroll\", animaScroll);\n  }\n}\n\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/scroll-animacao.js?");

/***/ }),

/***/ "./js/modules/scroll-suave.js":
/*!************************************!*\
  !*** ./js/modules/scroll-suave.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ navegacaoScrollSuave)\n/* harmony export */ });\n// Criação de rolagem suave ao clicar nos links internos\r\nfunction navegacaoScrollSuave() {\r\n  const linksInternos = document.querySelectorAll(\r\n    '[data-menu=\"suave\"] a[href^=\"#\"]'\r\n  );\r\n\r\n  function scrollToSection(event) {\r\n    event.preventDefault();\r\n\r\n    const href = event.currentTarget.getAttribute(\"href\"); // Pega o atributo do link interno (apenas o #)\r\n    const section = document.querySelector(href); // Seleciona a sessão\r\n\r\n    section.scrollIntoView({\r\n      behavior: \"smooth\",\r\n      block: \"start\",\r\n    });\r\n\r\n    // // forma alternativa\r\n    // const topo = section.offsetTop // Seleciona o topo da sessão\r\n    // window.scrollTo({\r\n    //     top: topo,\r\n    //     behavior: 'smooth'\r\n    // })\r\n  }\r\n\r\n  linksInternos.forEach((link) => {\r\n    link.addEventListener(\"click\", scrollToSection);\r\n  });\r\n}\r\n\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/scroll-suave.js?");

/***/ }),

/***/ "./js/modules/tooltip.js":
/*!*******************************!*\
  !*** ./js/modules/tooltip.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initTooltip)\n/* harmony export */ });\nfunction initTooltip() {\r\n  // Seleciona a tooltip\r\n  const tooltips = document.querySelectorAll(\"[data-tooltip]\");\r\n\r\n  // As funções foram criadas como objetos para melhor organização.\r\n  // A criação das funções dentro da 'function onMouseOver' traria o mesmo resultado.\r\n\r\n  // função 'onMouseMove' criada em forma de obj\r\n  const onMouseMove = {\r\n    handleEvent(event) {\r\n      // Selecionar aonde o mouse esta\r\n      this.tooltipBox.style.top = `${event.pageY + 20}px`;\r\n      this.tooltipBox.style.left = `${event.pageX + 20}px`;\r\n    },\r\n  };\r\n\r\n  // função 'onMouseLeave' criada em forma de obj\r\n  const onMouseLeave = {\r\n    // Evento necessário para funcionar 'handleEvent'. Devido o evento 'onMouseLeave' ser um onj\r\n    // e estar fora da função onde os 'parametros' estão referenciados\r\n    handleEvent() {\r\n      // Remover\r\n      this.tooltipBox.remove();\r\n      // Remover evento quando não estiver mais em execução\r\n      this.element.removeEventListener(\"mouseleave\", onMouseLeave);\r\n      this.element.removeEventListener(\"mousemove\", onMouseMove);\r\n    },\r\n  };\r\n\r\n  function criarTooltipBox(element) {\r\n    // Criar div para colocar a tooltip\r\n    const tooltipBox = document.createElement(\"div\");\r\n    // Pegar texto que foi atribuido em 'aria-label' para adicionar tooltip\r\n    const text = element.getAttribute(\"aria-label\");\r\n\r\n    // Adicionar classe na div para estilizar tooltip\r\n    tooltipBox.classList.add(\"tooltip\");\r\n    // Adicionar texto que foi selecionado em 'text'\r\n    tooltipBox.innerText = text;\r\n    // Adicionar div criada ao final do body\r\n    document.body.appendChild(tooltipBox);\r\n    return tooltipBox;\r\n  }\r\n\r\n  function onMouseOver() {\r\n    const tooltipBox = criarTooltipBox(this);\r\n\r\n    // Referenciar objetos da const 'onMouseLeave'\r\n    onMouseLeave.tooltipBox = tooltipBox;\r\n    onMouseLeave.element = this;\r\n    // Adicionar evento de mouseleave\r\n    this.addEventListener(\"mouseleave\", onMouseLeave);\r\n\r\n    // Referenciar objetos da const 'onMouseMove'\r\n    onMouseMove.tooltipBox = tooltipBox;\r\n    // Adicionar evento de onMouseMove\r\n    this.addEventListener(\"mousemove\", onMouseMove);\r\n  }\r\n\r\n  tooltips.forEach((item) => {\r\n    // Adicionar evento de mouseover\r\n    item.addEventListener(\"mouseover\", onMouseOver);\r\n  });\r\n}\r\n\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/tooltip.js?");

/***/ }),

/***/ "./js/script.js":
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_scroll_suave_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/scroll-suave.js */ \"./js/modules/scroll-suave.js\");\n/* harmony import */ var _modules_scroll_animacao_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/scroll-animacao.js */ \"./js/modules/scroll-animacao.js\");\n/* harmony import */ var _modules_nav_perguntas_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/nav-perguntas.js */ \"./js/modules/nav-perguntas.js\");\n/* harmony import */ var _modules_nav_tabs_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/nav-tabs.js */ \"./js/modules/nav-tabs.js\");\n/* harmony import */ var _modules_modal_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/modal.js */ \"./js/modules/modal.js\");\n/* harmony import */ var _modules_tooltip_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/tooltip.js */ \"./js/modules/tooltip.js\");\n/* harmony import */ var _modules_dropdown_menu_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/dropdown-menu.js */ \"./js/modules/dropdown-menu.js\");\n/* harmony import */ var _modules_menu_mobile_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/menu-mobile.js */ \"./js/modules/menu-mobile.js\");\n/* harmony import */ var _modules_funcionamento_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/funcionamento.js */ \"./js/modules/funcionamento.js\");\n/* harmony import */ var _modules_fetch_animais_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/fetch-animais.js */ \"./js/modules/fetch-animais.js\");\n/* harmony import */ var _modules_fetch_bitcoin_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modules/fetch-bitcoin.js */ \"./js/modules/fetch-bitcoin.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n(0,_modules_scroll_suave_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n(0,_modules_scroll_animacao_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n(0,_modules_nav_perguntas_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n(0,_modules_nav_tabs_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\r\n(0,_modules_modal_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\r\n(0,_modules_tooltip_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\r\n(0,_modules_dropdown_menu_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"])();\r\n(0,_modules_menu_mobile_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"])();\r\n(0,_modules_funcionamento_js__WEBPACK_IMPORTED_MODULE_8__[\"default\"])();\r\n(0,_modules_fetch_animais_js__WEBPACK_IMPORTED_MODULE_9__[\"default\"])();\r\n(0,_modules_fetch_bitcoin_js__WEBPACK_IMPORTED_MODULE_10__[\"default\"])();\r\n\n\n//# sourceURL=webpack://animais-fantasticos/./js/script.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./js/script.js");
/******/ 	
/******/ })()
;