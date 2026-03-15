let e=document.querySelector(".js-list"),t=document.querySelector(".openmodal"),l=document.querySelector(".backdrop"),n=document.querySelector(".form");function s(){fetch("http://localhost:3000/iceCreams").then(e=>e.json()).then(t=>{e.innerHTML=t.map(e=>`<li id="${e.id}">
                <img class="image" src="${e.image}" alt="#">
                <h3 class="name">${e.name}</h3>
                <p class="type">type: ${e.type}</p>
                <p class="calories">calories: ${e.calories}</p>
                <p class="price">price: ${e.price}</p>
                <p class="description">description: ${e.description}</p>
                <button class="deletebtn" type="button">delete</button>
                <button class="changeBtn" type="button">change</button>
            </li>`).join("")})}function c(){l.style.opacity="1",l.style.pointerEvents="auto"}document.querySelector(".submitBtn"),s(),t.addEventListener("click",e=>{c()}),n.addEventListener("submit",e=>{e.preventDefault();let t=e.currentTarget.elements;fetch("http://localhost:3000/iceCreams",{method:"POST",body:JSON.stringify({name:t.name.value,type:t.type.value,calories:t.calories.value,price:t.price.value,description:t.description.value,image:t.image.value}),headers:{"Content-Type":"application/json; charset=UTF-8"}}).then(e=>e.json()).then(e=>{s(),l.style.opacity="0",l.style.pointerEvents="none",n.reset()})}),e.addEventListener("click",e=>{if("deletebtn"===e.target.classList[0]){var t;(t=e.target.closest("li").id,fetch(`http://localhost:3000/iceCreams/${t}`,{method:"DELETE"}).then(e=>e.json())).then(e=>{s()})}if("changeBtn"===e.target.classList[0]){let t=e.target.closest("li");n.elements.name.value=t.querySelector("h3").textContent,n.elements.type.value=t.querySelectorAll("p")[0].textContent,n.elements.calories.value=t.querySelectorAll("p")[1].textContent,n.elements.price.value=t.querySelectorAll("p")[2].textContent,n.elements.description.value=t.querySelectorAll("p")[3].textContent,n.elements.image.value=t.querySelector("img").src,c()}});
//# sourceMappingURL=crud.2b654b7a.js.map
