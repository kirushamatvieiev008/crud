export const createItems = (array) => {
    return array.map(item => {
        return `<li id="${item.id}">
                <img class="image" src="${item.image}" alt="#">
                <h3 class="name">${item.name}</h3>
                <p class="type">type: ${item.type}</p>
                <p class="calories">calories: ${item.calories}</p>
                <p class="price">price: ${item.price}</p>
                <p class="description">description: ${item.description}</p>
                <button class="deletebtn" type="button">delete</button>
                <button class="changeBtn" type="button">change</button>
            </li>`
    }).join('');
}