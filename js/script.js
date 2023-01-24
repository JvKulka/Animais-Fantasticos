import ScrollSuave from "./modules/scroll-suave.js";
import navegacaoAnimacaoScroll from "./modules/scroll-animacao.js";
import navegacaoPerguntas from "./modules/nav-perguntas.js";
import navegacaoTab from "./modules/nav-tabs.js";
import initModal from "./modules/modal.js";
import initTooltip from "./modules/tooltip.js";
import dropDownMenu from "./modules/dropdown-menu.js";
import menuMobile from "./modules/menu-mobile.js";
import horarioFuncionamento from "./modules/funcionamento.js";
import initFetchAnimais from "./modules/fetch-animais.js";
import initFetchBitcoin from "./modules/fetch-bitcoin.js";

const scrollSuave = new ScrollSuave('[data-menu="suave"] a[href^="#"]');
scrollSuave.init();

navegacaoAnimacaoScroll();
navegacaoPerguntas();
navegacaoTab();
initModal();
initTooltip();
dropDownMenu();
menuMobile();
horarioFuncionamento();
initFetchAnimais();
initFetchBitcoin();
