import { data } from "./data.js";

let main_DOM = document.querySelector("#main");


data.forEach((cada_item) => {

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
    main_DOM.appendChild(item);

});