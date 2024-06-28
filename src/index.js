import './style.css';
import homePage from './initial-page-load.js';
import menuPage from './menu.js';
import aboutPage from './about.js';

const content = document.querySelector('#content');
const homeButton = document.querySelector('#home-button');
const menuButton = document.querySelector('#menu-button');
const aboutButton = document.querySelector('#about-button');

homePage();

homeButton.addEventListener('click', () => {
    if (content.querySelector('h1').id === 'home-page') {
        return;
    } else {
        homePage();
    }
});

menuButton.addEventListener('click', () => {
    if (content.querySelector('h1').id === 'menu-page') {
        return;
    } else {
        menuPage();
    }
});

aboutButton.addEventListener('click', () => {
    if (content.querySelector('h1').id === 'about-page') {
        return;
    } else {
        aboutPage();
    }
});
