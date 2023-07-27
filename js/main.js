import { data } from "./data.js";

let main_dom = document.querySelector("#main");

data.forEach((cada_item) => {
    let item = document.createElement("div");
    item.className = "item";

    
    item.innerHTML = `
        <div class="caja_img">
        <img src="${cada_item.img}">
        </div>
        <h2>${cada_item.titulo}</h2>
        <p>${cada_item.descripcion}</p>
        <span>Q100</span>
        `;

main_dom.appendChild (item);
});





item.innerHTML = `
    <div class="caja_img">
        <img src="${data[0].img}">
    </div>
<h2>${data[0].titulo}</h2>
<p>${data[0].descripcion}</p>
<span>Q100</span>
`;

main_dom.appendChild (item);