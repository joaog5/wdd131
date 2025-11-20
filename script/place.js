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

let temperature = 45;
let windSpeed = 10;

const condicoes = ["Sunny", "Partly Cloudy", "Cloudy", "Light Rain", "Storm"];
let conditionActual = condicoes[Math.floor(Math.random() * condicoes.length)];

document.getElementById("temperature").textContent = temperature;
document.getElementById("condition").textContent = conditionActual;

document.getElementById("wind").textContent = windSpeed;

function calculateWindChill(tempF, speedMph) {
    return 35.74 + (0.6215 * tempF) - (35.75 * Math.pow(speedMph, 0.16)) + (0.4275 * tempF * Math.pow(speedMph, 0.16));
}

const windChillElement = document.getElementById("windchill");

if (temperature <= 50 && windSpeed > 3) {
    const windChill = calculateWindChill(temperature, windSpeed);
    windChillElement.textContent = windChill.toFixed(1) + " °F";
} else {
    windChillElement.textContent = "N/A";
}