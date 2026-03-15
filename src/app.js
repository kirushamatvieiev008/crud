import { getIce } from "./api/getIce";
import { createItems } from "./markup/createItems";
import { postIce } from "./api/postIce";
import { delIce } from "./api/deleteIce";
import { changeIce } from "./api/changeIce";

const list = document.querySelector('.js-list');
const openmodal = document.querySelector('.openmodal');
const backdrop = document.querySelector('.backdrop');
const form = document.querySelector('.form');
const submitBtn = document.querySelector('.submitBtn');

// console.log(createItems([]));

function renderData() {
    getIce().then(res => {
        list.innerHTML = createItems(res);
        // return
    });

    // getIce
}

renderData();

openmodal.addEventListener('click', event => {
    openModal();
});

form.addEventListener('submit', event => {
    event.preventDefault();
    const element = event.currentTarget.elements;

    const iceData = {
        name: element.name.value,
        type: element.type.value,
        calories: element.calories.value,
        price: element.price.value,
        description: element.description.value,
        image: element.image.value,
    }
    postIce(iceData).then(res => {
        renderData();
        closeModal();
        form.reset();
    });
});


function closeModal() {
    backdrop.style.opacity = '0';
    backdrop.style.pointerEvents = 'none';
}

function openModal() {
    backdrop.style.opacity = '1';
    backdrop.style.pointerEvents = 'auto';
}

list.addEventListener('click', event => {
    // console.log(event.target);
    if (event.target.classList[0] === 'deletebtn') {
        const id = event.target.closest('li').id;
        delIce(id).then(res => {
            renderData();
        })
    }
    if (event.target.classList[0] === 'changeBtn') {
        const li = event.target.closest('li');
        form.elements.name.value = li.querySelector('h3').textContent;
        form.elements.type.value = li.querySelectorAll('p')[0].textContent;
        form.elements.calories.value = li.querySelectorAll('p')[1].textContent;
        form.elements.price.value = li.querySelectorAll('p')[2].textContent;
        form.elements.description.value = li.querySelectorAll('p')[3].textContent;
        form.elements.image.value = li.querySelector('img').src;

        openModal();

    }
});


// list.innerHTML = createItems(getIce);
