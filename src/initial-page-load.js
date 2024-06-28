import './style.css';

export default function homePage() {
    const content = document.querySelector('#content');
    content.innerHTML = '';
    
    const title = document.createElement('h1');
    title.setAttribute('id', 'home-page');
    title.textContent = 'Korean Southern Fried Chicken';
    content.appendChild(title);   
    
    const p = document.createElement('p');
    p.textContent = 'This is the place where you want Korean Fried Chicken with your gravy and biscuits'
    content.appendChild(p);   
    return content;
}


