let e=document.querySelector(".js-list");fetch("http://localhost:3000/iceCreams").then(e=>e.json()).then(t=>{e.innerHTML=t.map(e=>`<li id="${e.id}">
                <img class="image" src="${e.image}" alt="#">
                <h3 class="name">${e.name}</h3>
                <p class="type">type: ${e.type}</p>
                <p class="calories">calories: ${e.calories}</p>
                <p class="price">price: ${e.price}</p>
                <p class="description">description: ${e.description}</p>
                <button class="deletebtn" type="button">delete</button>
                <button class="changeBtn" type="button">change</button>
            </li>`).join("")});
//# sourceMappingURL=crud.0bab4926.js.map
