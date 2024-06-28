import './style.css';

export default function menuPage() {
    const content = document.querySelector('#content');
    content.innerHTML = '';

    const title = document.createElement('h1');
    title.setAttribute('id', 'menu-page');
    title.textContent = 'Menu';
    content.appendChild(title);   
    
    const ul = document.createElement('ul');
    ul.textContent = 'Appetizers'
    content.appendChild(ul);   
    return content;
}