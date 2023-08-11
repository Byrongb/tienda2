import { data } from "./data.js";

let main_DOM = document.querySelector("#main");

data.forEach((cada_item, index) => {

    let item = document.createElement("div");
    item.className = "item";

    let shortDescription = getShortDescription(cada_item.descripcion);
    
    item.innerHTML = `
        <div class="caja_img">
            <img src="${cada_item.img}"/>
        </div>
        <h2>${cada_item.titulo}</h2>
        <p class="item-desc">${shortDescription}</p>
        <span>Q100.00</span>
    `;

    // Agrega un evento de clic al ítem
    item.addEventListener('click', () => {
        hideAllItems();
        showDescripcion(index);
    });

    // Agrega un evento de clic al "leer más" para expandir la descripción
    item.querySelector('.read-more').addEventListener('click', function(e) {
        e.stopPropagation();
        this.previousSibling.textContent = cada_item.descripcion;
        this.style.display = 'none';
    });

    main_DOM.appendChild(item);
});

function getShortDescription(description) {
    let words = description.split(' ');
    let shortDescription = words.slice(0, 10).join(' ');
    return shortDescription + '<span class="read-more" style="color: blue; cursor: pointer;"> leer más...</span>';
}

function showDescripcion(index) {
    const itemData = data[index];
    
    const descripcionDOM = document.querySelector('#descripcion');
    const imgDOM = descripcionDOM.querySelector('.featured-img img');
    const titleDOM = descripcionDOM.querySelector('.featured-info h2');
    const descDOM = descripcionDOM.querySelector('.featured-info p');
    const materialsListDOM = descripcionDOM.querySelector('.materials-list');
    const diyButton = document.createElement('button');
    diyButton.textContent = 'Hágalo usted mismo';
    diyButton.classList.add('diy-button');
    diyButton.style.display = 'block';

    const servicesWithDIY = ["Cambio de pasta termica", "Instalación de disco duro", "Instalación de RAM", "Limpieza de ventiladores"];
    
    if (servicesWithDIY.includes(itemData.titulo)) {
        const shareButton = descripcionDOM.querySelector('.share');
        shareButton.after(diyButton);
    }

    materialsListDOM.innerHTML = '';
    itemData.herramientas.forEach(material => {
        const li = document.createElement('li');
        li.textContent = material;
        materialsListDOM.appendChild(li);
    });

    imgDOM.src = itemData.img;
    titleDOM.textContent = itemData.titulo;
    descDOM.textContent = itemData.descripcion;
    descripcionDOM.style.display = 'flex';   
}

function hideAllItems() {
    const items = document.querySelectorAll('.item');
    items.forEach(item => {
        item.style.display = 'none';
    });
}