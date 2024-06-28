import './style.css';

export default function homePage() {
    const content = document.querySelector('#content');
    if (content.querySelector('h1') !== null) {
        return;
    } else {
        const title = document.createElement('h1');
        const p = document.createElement('p');
        content.innerHTML = '';
        title.textContent = 'Korean Southern Fried Chicken';
        content.appendChild(title);   
        p.textContent = 'This is the place where you want Korean Fried Chicken with your gravy and biscuits'
        content.appendChild(p);   
        return content;
    }
}


