

const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
    templeName: "Teresina Brazil",
    location: "Teresina, Piaui, Brazil",
    dedicated: "Planning stages",
    area: 25420,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/teresina-brazil-temple/teresina-brazil-temple-45009.jpg"
  },
  {
    templeName: "Fortaleza Brazil",
    location: "Fortaleza, Ceara, Brazil",
    dedicated: "2019, June, 2",
    area: 36000,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/fortaleza-brazil-temple/fortaleza-brazil-temple-5569.jpg"
  },
  {
    templeName: "São Paulo Brazil",
    location: "São Paulo, Brazil",
    dedicated: "1978, October, 30 - November, 2",
    rededicated: "2004, February, 22",
    area: 59246,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/sao-paulo-brazil-temple/sao-paulo-brazil-temple-59763.jpg"
  },
];

const templesElement = document.querySelector("#temples");

function displayTemples(temples) {
    temples.forEach(temple => {
        const card = document.createElement("section");

        const name = document.createElement("h3");
        name.textContent = temple.templeName;

        const location = document.createElement("p");
        location.textContent = `Location: ${temple.location}`;

        const dedicated = document.createElement("p");
        dedicated.textContent = `Dedicated: ${temple.dedicated}`;

        const area = document.createElement("p");
        area.textContent = `Area: ${temple.area} sq ft`;

        const img = document.createElement("img");
        img.src = temple.imageUrl;
        img.alt = temple.templeName;
        img.loading = "lazy";


        img.style.width = "400px";
        img.style.height = "250px";
        img.style.objectFit = "cover";
        img.style.borderRadius = "10px";

        card.appendChild(name);
        card.appendChild(location);
        card.appendChild(dedicated);
        card.appendChild(area);
        card.appendChild(img);

        templesElement.appendChild(card);
    });
}

displayTemples(temples);

const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("menu");

hamburger.addEventListener("click", () => {
    menu.classList.toggle("open");
});

// --- Função para limpar e exibir ---
function renderTemples(list) {
    templesElement.innerHTML = ""; 
    displayTemples(list); 
}

// === FILTRO HOME ===
document.getElementById("filter-home").addEventListener("click", () => {
    renderTemples(temples);
});

// === FILTRO OLD (antes de 1900) ===
document.getElementById("filter-old").addEventListener("click", () => {
    const oldTemples = temples.filter(t => {
        const year = parseInt(t.dedicated);
        return year < 1900;
    });
    renderTemples(oldTemples);
});

// === FILTRO NEW (depois de 2000) ===
document.getElementById("filter-new").addEventListener("click", () => {
    const newTemples = temples.filter(t => {
        const year = parseInt(t.dedicated);
        return year >= 2000;
    });
    renderTemples(newTemples);
});

// === FILTRO LARGE (área > 90000) ===
document.getElementById("filter-large").addEventListener("click", () => {
    const largeTemples = temples.filter(t => t.area > 90000);
    renderTemples(largeTemples);
});

// === FILTRO SMALL (área < 10000) ===
document.getElementById("filter-small").addEventListener("click", () => {
    const smallTemples = temples.filter(t => t.area < 10000);
    renderTemples(smallTemples);
});

const yearSpan = document.getElementById("year");
const lastModifiedSpan = document.getElementById("lastModified");

const currentYear = new Date().getFullYear();
yearSpan.textContent = currentYear;

const lastModified = document.lastModified;
lastModifiedSpan.textContent = lastModified;