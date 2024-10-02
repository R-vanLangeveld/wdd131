const year = document.querySelector("#year");
const today = new Date();

currentyear.innerHTML = `<span class="highlight">${today.getFullYear()}</span>`;
var lastModified = document.lastModified;
document.getElementById("modified").innerHTML = lastModified;


var temp = 73;
var wind = 7.2;
let noWind = "N/A";

function calculateWindChill(temp, wind) {
    if (temp <= 50) {
        return (Math.round((35.74 + 0.6215 * temp - 35.75 * (wind ** 0.16) + 0.4275 * temp * (wind ** 0.16)) * 100) / 100) + "°F";
    }
    else
        return noWind;
}

document.getElementById("windChill").innerHTML = `<span class="windChill">${calculateWindChill(temp, wind)}</span>`;