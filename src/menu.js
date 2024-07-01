import './style.css';

export default function menuPage() {
    const content = document.querySelector('#content');
    content.innerHTML = '';

    const title = document.createElement('h1');
    title.setAttribute('id', 'menu-page');
    title.textContent = 'Menu';
    content.appendChild(title);   

    const menuContainer = document.createElement('div');
    menuContainer.setAttribute('id', 'menu-container')
    content.appendChild(menuContainer);   

    
    const ul1 = document.createElement('ul');
    ul1.textContent = 'Appetizers'
    menuContainer.appendChild(ul1);

    const li1 = document.createElement('li');
    li1.textContent = 'Kimchi Macoroni and Cheese';
    ul1.appendChild(li1);

    const li2 = document.createElement('li');
    li2.textContent = 'Sesame Grits';
    ul1.appendChild(li2);
    
    const li3 = document.createElement('li');
    li3.textContent = 'Fried Pickles with Gochujang Aioli';
    ul1.appendChild(li3);
    
    const ul2 = document.createElement('ul');
    ul2.textContent = 'Entrees'
    menuContainer.appendChild(ul2);

    const ul2p = document.createElement('p')
    ul2p.textContent = 'All entrees come with biscuit, gravy and peach cobbler'
    ul2.appendChild(ul2p);

    const li11 = document.createElement('li');
    li11.textContent = 'Original Whole Fried Chicken';
    ul2.appendChild(li11);

    const li12 = document.createElement('li');
    li12.textContent = 'Sweet and Spicy Whole Fried Chicken';
    ul2.appendChild(li12);
    
    const li13 = document.createElement('li');
    li13.textContent = 'Honey and Spicy Whole Fried Chicken';
    ul2.appendChild(li13);

    return content;
}