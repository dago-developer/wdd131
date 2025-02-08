function calculateWindChill(tempC, windKmh) {
    return (13.12 + 0.6215 * tempC - 11.37 * Math.pow(windKmh, 0.16) + 0.3965 * tempC * Math.pow(windKmh, 0.16)).toFixed(1);
}

function displayWindChill() {
    const temperature = 19; 
    const windSpeed = 10; 
    const chillElement = document.getElementById("windChill");
    const chillContainer = chillElement.parentElement;

    if (temperature <= 10 && windSpeed > 4.8) {
        chillElement.textContent = calculateWindChill(temperature, windSpeed) + "°C";
        chillContainer.style.display = "block"; 
    } else {
        chillContainer.style.display = "none"; 
    }
}

document.addEventListener("DOMContentLoaded", displayWindChill);
