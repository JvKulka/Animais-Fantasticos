import ScrollSuave from "./modules/scroll-suave.js";
import navegacaoAnimacaoScroll from "./modules/scroll-animacao.js"; // ultimo
import Perguntas from "./modules/nav-perguntas.js";
import NavegacaoTab from "./modules/nav-tabs.js";
import Modal from "./modules/modal.js";
import Tooltip from "./modules/tooltip.js";
import dropDownMenu from "./modules/dropdown-menu.js";
import menuMobile from "./modules/menu-mobile.js";
import horarioFuncionamento from "./modules/funcionamento.js";
import initFetchAnimais from "./modules/fetch-animais.js";
import initFetchBitcoin from "./modules/fetch-bitcoin.js";

const scrollSuave = new ScrollSuave('[data-menu="suave"] a[href^="#"]');
scrollSuave.init();

const perguntas = new Perguntas('[data-anime="perguntas"] dt');
perguntas.init();

const navegacaoTab = new NavegacaoTab(
  '[data-tab="menu"] li',
  '[data-tab="content"] section'
);
navegacaoTab.init();

const modal = new Modal(
  '[data-modal="abrir"]',
  '[data-modal="fechar"]',
  '[data-modal="container"]'
);
modal.init();

const tooltip = new Tooltip("[data-tooltip]");
tooltip.init();

navegacaoAnimacaoScroll();
dropDownMenu();
menuMobile();
horarioFuncionamento();
initFetchAnimais();
initFetchBitcoin();
