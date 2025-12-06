const yearSpan = document.getElementById("year");
const lastModifiedSpan = document.getElementById("lastModified");

const currentYear = new Date().getFullYear();
yearSpan.textContent = currentYear;

const lastModified = document.lastModified;
lastModifiedSpan.textContent = lastModified;

const areaRJ = "1,255.3 sq km";
document.getElementById("area").textContent = areaRJ;

let basePopulation = 6748000;
let growthRate = 0.007;

let pastYears = currentYear - 2024;
let currentPopulation = Math.floor(basePopulation * Math.pow(1 + growthRate, pastYears));

document.getElementById("population").textContent = currentPopulation.toLocaleString("pt-BR");

let temperature = Math.floor(Math.random() * (36 - 22 + 1)) + 22;

const condicoes = ["Sunny", "Partly Cloudy", "Cloudy", "Light Rain", "Storm"];
let conditionActual = condicoes[Math.floor(Math.random() * condicoes.length)];

document.getElementById("temperature").textContent = temperature;
document.getElementById("condition").textContent = conditionActual;

let windSpeed = Math.floor(Math.random() * (30 - 5 + 1)) + 5;
document.getElementById("wind").textContent = windSpeed;

function calculateWindChill(tempC, windKmh) {
    let tempF = (tempC * 9/5) + 32;
    let windMph = windKmh / 1.609;
    return 35.74 + (0.6215 * tempF) - (35.75 * Math.pow(windMph, 0.16)) + (0.4275 * tempF * Math.pow(windMph, 0.16));
}

const windChillElement = document.getElementById("windChill");

if (temperature <= 10 && windSpeed > 4.8) {
    const windChill = calculateWindChill(temperature, windSpeed);
    windChillElement.textContent = windChill.toFixed(1) + " °F";
} else {
    windChillElement.textContent = "N/A";
}

const icons = {
    "Sunny": `
        <svg width="28" height="28" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="5" stroke="black" stroke-width="2" fill="yellow"/>
        </svg>
    `,
    "Partly Cloudy": `
        <svg width="28" height="28" viewBox="0 0 24 24">
            <circle cx="9" cy="10" r="4" fill="yellow"></circle>
            <ellipse cx="15" cy="14" rx="6" ry="3" fill="lightgray"></ellipse>
        </svg>
    `,
    "Cloudy": `
        <svg width="32" height="32" viewBox="0 0 24 24">
            <ellipse cx="12" cy="14" rx="7" ry="4" fill="gray"></ellipse>
        </svg>
    `,
    "Light Rain": `
        <svg width="32" height="32" viewBox="0 0 24 24">
            <ellipse cx="12" cy="10" rx="7" ry="4" fill="gray"></ellipse>
            <line x1="8" y1="16" x2="8" y2="20" stroke="blue" stroke-width="2"/>
            <line x1="12" y1="16" x2="12" y2="20" stroke="blue" stroke-width="2"/>
            <line x1="16" y1="16" x2="16" y2="20" stroke="blue" stroke-width="2"/>
        </svg>
    `,
    "Storm": `
        <svg width="32" height="32" viewBox="0 0 24 24">
            <ellipse cx="12" cy="10" rx="7" ry="4" fill="gray"></ellipse>
            <polygon points="10,14 14,14 12,20" fill="yellow"></polygon>
        </svg>
    `
};

const weatherIconSpan = document.getElementById("weather-icon");
weatherIconSpan.innerHTML = icons[conditionActual];