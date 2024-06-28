import './style.css';
import homePage from './initial-page-load.js';

const homeButton = document.querySelector('#home-button');
const menuButton = document.querySelector('#menu-button');
const aboutButton = document.querySelector('#about-button');

homeButton.addEventListener('click', () => {
    homePage;
});

menuButton.addEventListener('click', () => {
    document.querySelector('#content').appendChild(menu());
});

aboutButton.addEventListener('click', () => {
    document.querySelector('#content').appendChild(about());
});

