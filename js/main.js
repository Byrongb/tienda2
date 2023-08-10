import { data } from "./data.js";

let main_DOM = document.querySelector("#main");

data.forEach((cada_item, index) => {

    let item = document.createElement("div");
    item.className = "item";

    item.innerHTML = `
        <div class="caja_img">
            <img src="${cada_item.img}"/>
        </div>
        <h2>${cada_item.titulo}</h2>
        <p>${cada_item.descripcion}</p>
        <span>Q100.00</span>
    `;

    // Agrega un evento de clic al ítem
    item.addEventListener('click', () => {
        hideAllItems();        // Ocultamos todos los ítems
        showDescripcion(index); // Muestra la descripción basada en el ítem seleccionado
    });

    main_DOM.appendChild(item);
});

function showDescripcion(index) {
    const itemData = data[index];
    
    // Selecciona el DOM de la descripción
    const descripcionDOM = document.querySelector('#descripcion');
    const imgDOM = descripcionDOM.querySelector('.featured-img img');
    const titleDOM = descripcionDOM.querySelector('.featured-info h2');
    const descDOM = descripcionDOM.querySelector('.featured-info p');
    const priceDOMs = descripcionDOM.querySelectorAll('.price');
    const materialsListDOM = descripcionDOM.querySelector('.materials-list');

    // Actualiza el contenido de #descripcion con la información del ítem seleccionado
    materialsListDOM.innerHTML = '';

     // Itera sobre las herramientas del ítem seleccionado y las agrega a la lista
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