document.addEventListener("DOMContentLoaded", () => {
    const menuButton = document.getElementById("menu-button");
    const navMenu = document.getElementById("nav-menu");
    const templeContainer = document.querySelector(".gallery");
    const menuLinks = document.querySelectorAll("#nav-menu a");

    menuButton.addEventListener("click", () => {
        navMenu.classList.toggle("active");
        menuButton.textContent = navMenu.classList.contains("active") ? "✖" : "☰";
    });

    const temples = [
        {
          templeName: "Albuquerque New Mexico Temple",
          location: "Albuquerque, Nuevo México, Estados Unidos",
          dedicated: "5 de marzo de 2000",
          area: 34245,
          imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/albuquerque-new-mexico-temple/albuquerque-new-mexico-temple-56335-main.jpg"
        },
        {
          templeName: "Barranquilla Colombia Temple",
          location: "Barranquilla, Colombia",
          dedicated: "9 de diciembre de 2018",
          area: 32000,
          imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/barranquilla-colombia-temple/barranquilla-colombia-temple-1846-main.jpg"
        },
        {
          templeName: "Bentonville Arkansas Temple",
          location: "Bentonville, Arkansas, Estados Unidos",
          dedicated: "15 de septiembre de 2023",
          area: 25000,
          imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/bentonville-arkansas-temple/bentonville-arkansas-temple-55568-main.jpg"
        },
        {
          templeName: "Bogotá Colombia Temple",
          location: "Bogotá, Colombia",
          dedicated: "24 de abril de 1999",
          area: 53500,
          imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/bogota-colombia-temple/bogota-colombia-temple-7733-main.jpg"
        },
        {
          templeName: "Caracas Venezuela Temple",
          location: "Caracas, Venezuela",
          dedicated: "20 de agosto de 2000",
          area: 10700,
          imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/_temp/096-Caracas-Venezuela-Temple.jpg"
        },
        {
          templeName: "Ciudad Juárez Mexico Temple",
          location: "Ciudad Juárez, Chihuahua, México",
          dedicated: "26 de febrero de 2000",
          area: 10700,
          imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/ciudad-juarez-mexico-temple/ciudad-juarez-mexico-temple-53312-main.jpg"
        },
        {
          templeName: "Columbus Ohio Temple",
          location: "Columbus, Ohio, Estados Unidos",
          dedicated: "4 de septiembre de 1999",
          area: 10700,
          imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/columbus-ohio-temple/columbus-ohio-temple-57341-main.jpg"
        },
        {
          templeName: "Salvador Brazil Temple",
          location: "Salvador, Bahía, Brasil",
          dedicated: "5 de agosto de 2023",
          area: 32000,
          imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/salvador-brazil-temple/salvador-brazil-temple-51668-main.jpg"
        },
        {
          templeName: "Santiago Chile Temple",
          location: "Santiago, Chile",
          dedicated: "15 de septiembre de 1983",
          area: 20000,
          imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/_temp/024-Santiago-Chile-Temple.jpg"
        },
        {
          templeName: "Seattle Washington Temple",
          location: "Bellevue, Washington, Estados Unidos",
          dedicated: "17 de noviembre de 1980",
          area: 110000,
          imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/seattle-washington-temple/seattle-washington-temple-55800-main.jpg"
        },
        {
          templeName: "Lima Peru Temple",
          location: "Lima, Perú",
          dedicated: "10 de enero de 1986",
          area: 9600,
          imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/lima-peru-temple/lima-peru-temple-12721-main.jpg"
        },
        {
          templeName: "Tokyo Japan Temple",
          location: "Tokio, Japón",
          dedicated: "27 de octubre de 1980",
          area: 52590,
          imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/tokyo-japan-temple/tokyo-japan-temple-26340-main.jpg"
        },
        {
          templeName: "Tijuana Mexico Temple",
          location: "Tijuana, Baja California, México",
          dedicated: "13 de diciembre de 2015",
          area: 30000,
          imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/tijuana-mexico-temple/tijuana-mexico-temple-14590-main.jpg"
        },
        {
          templeName: "Provo Utah Rock Canyon Temple",
          location: "Provo, Utah, United States",
          dedicated: "9 February 1972",
          area: 23045,
          imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/provo-utah-rock-canyon-temple/provo-utah-rock-canyon-temple-45659-main.jpg"
        },
        {
          templeName: "Logan Utah Temple",
          location: "Logan, Utah, Estados Unidos",
          dedicated: " 17–19 May 1884",
          area: 119619,
          imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/logan-utah-temple/logan-utah-temple-40550-main.jpg"
        }
      ];
      

    function displayTemples(filteredTemples) {
        templeContainer.innerHTML = "";
        filteredTemples.forEach(temple => {
            const templeCard = document.createElement("figure");
            templeCard.innerHTML = `
                <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy">
                <figcaption>
                    <h3>${temple.templeName}</h3>
                    <p><strong>Location:</strong> ${temple.location}</p>
                    <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
                    <p><strong>Area:</strong> ${temple.area.toLocaleString()} sq. ft.</p>
                </figcaption>
            `;
            templeContainer.appendChild(templeCard);
        });
    }

    function filterTemples(filter) {
        let filteredTemples;

        switch (filter) {
            case "Old":
                filteredTemples = temples.filter(temple => {
                    const year = parseInt(temple.dedicated.split(" ").pop());
                    return year < 1900;
                });
                break;
            case "New":
                filteredTemples = temples.filter(temple => {
                    const year = parseInt(temple.dedicated.split(" ").pop());
                    return year > 2000;
                });
                break;
            case "Large":
                filteredTemples = temples.filter(temple => temple.area > 90000);
                break;
            case "Small":
                filteredTemples = temples.filter(temple => temple.area < 10000);
                break;
            default:
                filteredTemples = temples;
        }

        displayTemples(filteredTemples);
    }

    menuLinks.forEach(link => {
        link.addEventListener("click", event => {
            event.preventDefault();
            filterTemples(link.textContent.trim());
        });
    });

    displayTemples(temples);
});
