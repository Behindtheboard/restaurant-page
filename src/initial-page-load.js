import backgroundIMG from './img/FriedChicken.jpg';
import './style.css';

function pageInit() {
    const content = document.querySelector('#content');
    const title = document.createElement('h1');
    title.textContent = 'Korean Southern Fried Chicken';
    content.appendChild(title);

    const p = document.createElement('p');
    p.textContent = 'This is the place where you want Korean Fried Chicken with your gravy and biscuits'
    content.appendChild(p);

    // const backgroundImage = document.createElement('IMG');
    // backgroundImage.setAttribute('id', 'background-image');
    // backgroundImage.src = backgroundIMG;
    // backgroundImage.alt = "background fried chicken"
    // content.appendChild(backgroundImage);

    return content;
}

export default function homePage() {
    console.log('nice')
    document.querySelector('#content').appendChild(pageInit());
};
