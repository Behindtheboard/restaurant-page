import './style.css';
import homePage from './initial-page-load.js';
import menuPage from './menu.js';

const homeButton = document.querySelector('#home-button');
const menuButton = document.querySelector('#menu-button');
const aboutButton = document.querySelector('#about-button');

homePage();

homeButton.addEventListener('click', homePage);

menuButton.addEventListener('click', menuPage);

aboutButton.addEventListener('click', aboutPage);

