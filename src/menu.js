import './style.css';

export default function menuPage() {
    const content = document.querySelector('#content');
    if (content.querySelector('h2') !== null) {
        return;
    } else {
        const title = document.createElement('h2');
        const ul = document.createElement('ul');
        content.innerHTML = '';
        title.setAttribute('id', 'menu');
        title.textContent = 'Menu';
        content.appendChild(title);   
        ul.textContent = 'Appetizers'
        content.appendChild(ul);   
        return content;
    }
}