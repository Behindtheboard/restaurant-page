import './style.css';

export default function menuPage() {
    const content = document.querySelector('#content');
    content.innerHTML = '';

    const title = document.createElement('h1');
    title.setAttribute('id', 'about-page');
    title.textContent = 'About';
    content.appendChild(title);   
    
    const p = document.createElement('p');
    p.textContent = 'Korean boy who grew up in the southern state of Georgia bringing you the best korean fried chicken with a southern twist.'
    content.appendChild(p);   
    return content;
}