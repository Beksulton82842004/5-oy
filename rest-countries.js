function findElement(element, parent = document) {
    return parent.querySelector(element);
}

const elCards = findElement(".cards");
const elTemplate = findElement("#template").content;

function renderCountries(array, parent) {
    parent.innerHTML = null;
    const fragment = document.createDocumentFragment();
    array.forEach((country) => {
        const newCard = elTemplate.cloneNode(true);
        const img = findElement(".card-img-top", newCard);
        const title = findElement(".card-title", newCard);
        img.src = country.flags.png;
        title.textContent = country.name.common;

        fragment.appendChild(newCard);
    });
    parent.appendChild(fragment);
}

fetch(" https://restcountries.com/v3.1/all")
    .then((response) => response.json())
    .then((data) => {
        renderCountries(data, elCards);
    });

