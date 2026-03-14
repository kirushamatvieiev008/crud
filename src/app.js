import { getIce } from "./api/getIce";
import { createItems } from "./markup/createItems";

const list = document.querySelector('.js-list');

// console.log(createItems([]));

function renderData() {
    getIce().then(res => {
        list.innerHTML = createItems(res);
        // return
    });

    // getIce
}

renderData();

// list.innerHTML = createItems(getIce);
