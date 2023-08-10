import { data } from "./data.js";

let descripcion_DOM = document.querySelector("#descripcion");
let primerItem = data[0];

// Generar la lista de materiales
let listaMateriales = primerItem.herramientas.map(herramienta => `<li>${herramienta}</li>`).join('');

let descripcionComponent = `
    <div class="featured-img">
        <img src="${primerItem.img}" alt="${primerItem.titulo}">
    </div>
    <div class="featured-info">
        <h2>${primerItem.titulo}</h2>
        <p>${primerItem.descripcion}</p>
        <div class="price-box">
            <span class="price"><div class="price-title">En taller</div>Q100.00</span> 
            <span class="price service-home"><div class="price-title">Servicio a domicilio</div>Q100.00</span>
        </div>
        <button class="buy-now">¡Comprar ahora!</button>
        <button class="share">Compartir</button>
        <ul class="materials-list">
            ${listaMateriales}
        </ul>
    </div>
`;

descripcion_DOM.innerHTML = descripcionComponent;