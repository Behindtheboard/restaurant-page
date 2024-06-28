import './style.css';
import pageInit from './initial-page-load.js';

const content = document.querySelector('#content');
const homeButton = document.querySelector('#home-button');
const menuButton = document.querySelector('#menu-button');
const aboutButton = document.querySelector('#about-button');

homeButton.addEventListener('click', () => {
    document.querySelector('#content').appendChild(pageInit);
});

menuButton.addEventListener('click', () => {
    document.querySelector('#content').appendChild(menu());
});

aboutButton.addEventListener('click', () => {
    document.querySelector('#content').appendChild(about());
});

